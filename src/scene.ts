import { BODIES, type Body } from './data'
import { GLScene, EXTENT } from './gl'
import { Background } from './background'

const GAP = 0.2 // gap between neighbors, in units of the bigger one's radius
const THETA = (13 * Math.PI) / 180
const DIR = [Math.cos(THETA), -Math.sin(THETA)]
const TEASE = 0.06

export interface Layout { cx: number; cy: number; base: number }

/** device pixel ratio: up to 3, but keep the drawing buffer under ~4k×2k×1.6 */
export function pickDpr(w: number, h: number) {
  let dpr = Math.min(window.devicePixelRatio || 1, 3)
  const maxPx = 3840 * 2160 * 1.6
  if (w * h * dpr * dpr > maxPx) dpr = Math.sqrt(maxPx / (w * h))
  return Math.max(1, dpr)
}

/** ui scale: 1 up to ~1600px wide, grows on 4k-at-1x style viewports */
export function uiScale(w: number, h: number) {
  return Math.max(1, Math.min(w / 1600, h / 1000, 2.4))
}

export class Scene {
  private gl: GLScene | null = null
  private bg: Background
  private octx: CanvasRenderingContext2D
  private w = 0
  private h = 0
  private dpr = 1
  private hiRes = false
  private lastTime = 0
  layout: Layout = { cx: 0, cy: 0, base: 200 }
  reduced = false
  /** ui scale for very large viewports (4k at 1x) */
  ui = 1
  /** adaptive resolution multiplier; drops if frames are slow */
  quality = 1
  private hitInfo: { i: number; x: number; y: number; rs: number } | null = null

  /** depth of field (off on phones and once adaptive quality kicks in) */
  dofOn = true
  constructor(private bgCanvas: HTMLCanvasElement, glCanvas: HTMLCanvasElement, private overlay: HTMLCanvasElement, private bodies: Body[] = BODIES) {
    this.bg = new Background(bgCanvas)
    try { this.gl = new GLScene(glCanvas, bodies) } catch (e) { console.warn('webgl unavailable, drawing flat discs', e) }
    this.octx = overlay.getContext('2d')!
  }

  resize(w: number, h: number) {
    this.w = w; this.h = h
    this.dpr = Math.max(1, pickDpr(w, h) * this.quality)
    this.ui = uiScale(w, h)
    this.overlay.width = Math.round(w * this.dpr)
    this.overlay.height = Math.round(h * this.dpr)
    this.bg.resize(w, h, this.dpr)
    this.gl?.resize(w, h, this.dpr)
    const mobile = w < 768
    if (mobile) this.dofOn = false
    // the starfield sits far behind the focus plane
    this.bgCanvas.style.filter = this.dofOn ? 'blur(0.6px)' : ''
    const base = mobile ? Math.min(w * 0.34, h * 0.2) : Math.min(h * 0.3, w * 0.22)
    this.layout = mobile ? { cx: w * 0.5, cy: h * 0.36, base } : { cx: w * 0.6, cy: h * 0.5, base }
    // 4k maps once the hero body is big on screen in device pixels
    this.hiRes = base * 2 * this.dpr > 700
  }

  /** step resolution down one notch; returns false if already at the floor */
  lowerQuality() {
    // first thing to go on a slow device is the depth of field
    if (this.dofOn) { this.dofOn = false; this.bgCanvas.style.filter = ''; return true }
    if (pickDpr(this.w, this.h) * this.quality <= 1.01) return false
    this.quality *= 0.8
    this.resize(this.w, this.h)
    return true
  }

  /** index of the current body under (x, y), and how it can be handled */
  hit(x: number, y: number): { i: number; kind: 'rotate' | 'tilt'; rs: number } | null {
    const h = this.hitInfo
    if (!h || !this.gl) return null
    const kind = this.gl.grabKind(h.i)
    if (!kind) return null
    const r = h.rs * (kind === 'rotate' ? 1.04 : 0.9)
    if (Math.hypot(x - h.x, y - h.y) > Math.max(r, 16)) return null
    return { i: h.i, kind, rs: h.rs }
  }
  grab(i: number) { this.gl?.grab(i) }
  drag(i: number, dx: number, dy: number, rs: number, dt: number) { this.gl?.drag(i, dx, dy, rs, dt) }
  release(i: number) { this.gl?.release(i, this.reduced) }

  prefetch(i: number) { this.gl?.prefetch(i, this.hiRes) }

  /** resolves once fonts, the first slides' textures and their shaders are ready */
  async ready(i: number) {
    await Promise.all([document.fonts?.ready ?? Promise.resolve(), this.gl?.warm(i, this.hiRes)])
  }

  draw(s: number, time: number) {
    const dt = this.lastTime ? Math.min(0.05, time - this.lastTime) : 0.016
    this.lastTime = time
    const { w, h, bodies } = this
    const n = bodies.length
    s = Math.max(0, Math.min(n - 1, s))
    let a = Math.floor(s)
    let t = s - a
    if (a >= n - 1) { a = n - 2; t = 1 }
    const b = a + 1
    const Ra = bodies[a].radiusKm, Rb = bodies[b].radiusKm
    const Rref = Math.exp(Math.log(Ra) + (Math.log(Rb) - Math.log(Ra)) * t)
    const { cx, cy, base } = this.layout
    const k = base / Rref

    this.bg.reduced = this.reduced
    this.bg.draw(s / (n - 1), time, dt)

    // positions relative to body a, in km (kept local so floats stay precise)
    const ext = (i: number) => bodies[i].radiusKm * (EXTENT[bodies[i].id] ?? 1)
    const rel = new Array<number>(n)
    rel[a] = 0
    for (let i = a + 1; i < n; i++) rel[i] = rel[i - 1] + ext(i - 1) + ext(i) + GAP * bodies[i].radiusKm
    for (let i = a - 1; i >= 0; i--) rel[i] = rel[i + 1] - (ext(i + 1) + ext(i) + GAP * bodies[i + 1].radiusKm)
    const camRel = t * rel[b] * (Rref / Rb)

    const cur = Math.round(s)
    const settle = Math.max(0, 1 - Math.abs(s - cur) * 3)
    const diag = Math.hypot(w, h)
    const o = this.octx
    o.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)
    o.clearRect(0, 0, w, h)

    const items: { i: number; x: number; y: number; rs: number; alpha: number }[] = []
    for (let i = n - 1; i >= 0; i--) {
      const d = i - s
      const alpha = d <= 0 ? 1 : d < 1 ? TEASE + (1 - TEASE) * (1 - d) : d < 2 ? TEASE * (2 - d) : 0
      if (alpha <= 0.001) continue
      const rs = bodies[i].radiusKm * k
      if (rs < 0.04) continue
      const off = (rel[i] - camRel) * k
      const x = cx + DIR[0] * off
      const y = cy + DIR[1] * off
      if (rs > diag * 8) continue
      if (rs < 1.5) {
        // below a pixel or so: a crisp minimum dot at the true position
        const dot = this.gl?.has(i) ? this.gl.obj(i).dot : bodies[i].color
        o.globalAlpha = alpha * Math.min(1, 0.35 + rs)
        o.fillStyle = dot
        o.beginPath(); o.arc(x, y, Math.max(rs, 0.75), 0, Math.PI * 2); o.fill()
        o.globalAlpha = 1
      } else if (this.gl) {
        items.push({ i, x, y, rs, alpha })
      } else {
        o.globalAlpha = alpha
        o.fillStyle = bodies[i].color
        o.beginPath(); o.arc(x, y, rs, 0, Math.PI * 2); o.fill()
        o.globalAlpha = 1
      }
      if (i === cur - 1 && settle > 0.01) this.marker(x, y, rs * (EXTENT[bodies[i].id] ?? 1), bodies[i].name, settle)
      if (i === cur) this.hitInfo = settle > 0.6 && rs > 8 ? { i, x, y, rs } : null
      if (i === cur && settle > 0.01 && this.gl?.has(i)) {
        const labels = this.gl.obj(i).labels
        if (labels) this.labels(x, y, rs, labels, settle)
      }
      if (i === cur && settle > 0.01 && rs > 20) {
        const rr = rs * (EXTENT[bodies[i].id] ?? 1) * 1.1 + 8
        o.strokeStyle = `rgba(212,165,116,${0.32 * settle})`
        o.lineWidth = 1
        o.beginPath()
        const start = -Math.PI * 0.62
        o.arc(x, y, rr, start, start + Math.PI * 2 * (this.reduced ? 1 : 1 - Math.pow(1 - settle, 3)))
        o.stroke()
      }
    }
    this.gl?.render(items, time, dt, this.reduced, this.hiRes, cur, this.dofOn ? settle * settle : 0)
  }

  private labels(x: number, y: number, rs: number, labels: { x: number; y: number; r: number; name: string; major?: boolean; left?: boolean }[], a: number) {
    const o = this.octx
    const u = this.ui
    o.textBaseline = 'middle'
    o.textAlign = 'left'
    for (const l of labels) {
      const px = x + l.x * rs, py = y - l.y * rs
      if (l.r === 0) {
        o.font = `${Math.round(10 * u)}px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`
        o.fillStyle = `rgba(161,161,170,${0.55 * a})`
        o.textAlign = 'center'
        o.fillText(l.name, px, py - 10 * u)
        o.textAlign = 'left'
        continue
      }
      const r = Math.max(l.r * rs, 3 * u)
      const sx = l.left ? -1 : 1
      const lx = px + sx * (r * 0.72 + 4 * u), ly = py - r * 0.72 - 4 * u
      o.strokeStyle = l.major ? `rgba(212,165,116,${0.55 * a})` : `rgba(161,161,170,${0.35 * a})`
      o.lineWidth = 1
      o.beginPath(); o.moveTo(lx, ly); o.lineTo(lx + sx * 10 * u, ly - 10 * u); o.lineTo(lx + sx * 18 * u, ly - 10 * u); o.stroke()
      o.font = `${Math.round((l.major ? 11 : 10) * u)}px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`
      o.fillStyle = l.major ? `rgba(212,165,116,${0.9 * a})` : `rgba(161,161,170,${0.75 * a})`
      o.textAlign = l.left ? 'right' : 'left'
      o.fillText(l.name, lx + sx * 22 * u, ly - 10 * u)
      o.textAlign = 'left'
    }
  }

  private marker(x: number, y: number, rs: number, name: string, a: number) {
    const o = this.octx
    const u = this.ui
    const ring = Math.max(rs + 7 * u, 11 * u)
    o.strokeStyle = `rgba(212,165,116,${0.7 * a})`
    o.lineWidth = 1
    o.beginPath(); o.arc(x, y, ring, 0, Math.PI * 2); o.stroke()
    o.font = `${Math.round(11 * this.ui)}px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`
    const flip = x - ring - 40 * u - o.measureText(name).width < 12
    const sx = flip ? 1 : -1
    // on phones the text sits below the bodies, so the leader goes up instead
    const sy = this.w < 768 ? -1 : 1
    const lx = x + sx * ring * 0.7071, ly = y + sy * ring * 0.7071
    const ex = lx + sx * 26 * u, ey = ly + sy * 26 * u
    o.beginPath(); o.moveTo(lx, ly); o.lineTo(ex, ey); o.lineTo(ex + sx * 14 * u, ey); o.stroke()
    o.fillStyle = `rgba(161,161,170,${a})`
    o.textAlign = flip ? 'left' : 'right'
    o.textBaseline = 'middle'
    o.fillText(name, ex + sx * 20 * u, ey)
  }
}
