import { BODIES, type Body } from './data'
import { renderSprite, type Sprite } from './sprites'

/** how far the visible thing reaches beyond radiusKm (saturn's rings) */
const EXTENT: Partial<Record<string, number>> = { saturn: 2.3 }
const GAP = 0.2 // gap between neighbors, in units of the bigger one's radius
const THETA = (13 * Math.PI) / 180
const DIR = [Math.cos(THETA), -Math.sin(THETA)]
const TEASE = 0.08

interface Star { x: number; y: number; r: number; a: number; layer: number; tw: number }

export interface Layout {
  cx: number
  cy: number
  base: number
}

export class Scene {
  private ctx: CanvasRenderingContext2D
  private sprites = new Map<number, Sprite>()
  private queue: number[] = []
  private stars: Star[] = []
  private w = 0
  private h = 0
  private dpr = 1
  private spriteD = 1024
  layout: Layout = { cx: 0, cy: 0, base: 200 }
  reduced = false

  constructor(private canvas: HTMLCanvasElement, private bodies: Body[] = BODIES) {
    this.ctx = canvas.getContext('2d')!
    let s = 1234567
    const r = () => ((s = (s * 16807) % 2147483647) / 2147483647)
    for (let i = 0; i < 520; i++) {
      this.stars.push({ x: r(), y: r(), r: 0.3 + Math.pow(r(), 4) * 1.3, a: 0.15 + r() * 0.55, layer: 0.3 + r() * 0.7, tw: r() * 6.28 })
    }
  }

  resize(w: number, h: number) {
    this.w = w
    this.h = h
    this.dpr = Math.min(window.devicePixelRatio || 1, 2)
    this.canvas.width = Math.round(w * this.dpr)
    this.canvas.height = Math.round(h * this.dpr)
    const mobile = w < 768
    const base = mobile ? Math.min(w * 0.34, h * 0.2) : Math.min(h * 0.3, w * 0.22)
    this.layout = mobile ? { cx: w * 0.5, cy: h * 0.36, base } : { cx: w * 0.6, cy: h * 0.5, base }
    const D = Math.min(1600, Math.ceil(base * 2 * this.dpr * 1.15))
    if (Math.abs(D - this.spriteD) / this.spriteD > 0.35) {
      this.spriteD = D
      this.sprites.clear()
    } else if (this.sprites.size === 0) this.spriteD = D
  }

  /** build sprites progressively so the first frame is fast */
  warm(center: number) {
    const order = [center, center + 1, center - 1, center + 2, center - 2]
    for (let i = 0; i < this.bodies.length; i++) order.push(i)
    this.queue = order.filter((i, k) => i >= 0 && i < this.bodies.length && order.indexOf(i) === k && !this.sprites.has(i))
  }

  idleWork(budgetMs = 12) {
    const t0 = performance.now()
    while (this.queue.length && performance.now() - t0 < budgetMs) {
      const i = this.queue.shift()!
      if (!this.sprites.has(i)) this.sprite(i)
    }
  }

  private sprite(i: number): Sprite {
    let sp = this.sprites.get(i)
    if (!sp) {
      const b = this.bodies[i]
      const pad = b.kind === 'ringed' ? 2.5 : b.kind === 'star' ? 1.9 : 1.15
      const D = Math.min(this.spriteD, Math.floor(4096 / pad))
      sp = renderSprite(b, D)
      this.sprites.set(i, sp)
    }
    return sp
  }

  /** s: fractional slide index. time in seconds. settle: 0..1 how at-rest we are */
  draw(s: number, time: number) {
    const { ctx, w, h, dpr, bodies } = this
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

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = '#0a0a0b'
    ctx.fillRect(0, 0, w, h)

    // quiet starfield, drifting a touch as we move
    for (const st of this.stars) {
      const x = (((st.x * w - s * 22 * st.layer) % w) + w) % w
      const tw = this.reduced ? 1 : 0.75 + 0.25 * Math.sin(time * 0.8 + st.tw)
      ctx.globalAlpha = st.a * tw
      ctx.fillStyle = '#f4f1ea'
      ctx.fillRect(x, st.y * h, st.r, st.r)
    }
    ctx.globalAlpha = 1

    // positions relative to body a, in km (kept local so floats stay precise)
    const ext = (i: number) => bodies[i].radiusKm * (EXTENT[bodies[i].id] ?? 1)
    const rel = new Array<number>(n)
    rel[a] = 0
    for (let i = a + 1; i < n; i++) rel[i] = rel[i - 1] + ext(i - 1) + ext(i) + GAP * bodies[i].radiusKm
    for (let i = a - 1; i >= 0; i--) rel[i] = rel[i + 1] - (ext(i + 1) + ext(i) + GAP * bodies[i + 1].radiusKm)
    const camRel = t * rel[b] * (Rref / Rb)

    const cur = Math.round(s)
    const settle = Math.max(0, 1 - Math.abs(s - cur) * 3)
    const maxPx = Math.hypot(w, h) * 30

    for (let i = n - 1; i >= 0; i--) {
      const d = i - s
      let alpha = d <= 0 ? 1 : d < 1 ? TEASE + (1 - TEASE) * (1 - d) : d < 2 ? TEASE * (2 - d) : 0
      if (alpha <= 0.001) continue
      const rs = bodies[i].radiusKm * k
      if (rs < 0.05) continue
      const off = (rel[i] - camRel) * k
      const x = cx + DIR[0] * off
      const y = cy + DIR[1] * off
      const sp = this.sprites.get(i) ?? (Math.abs(i - s) < 2.5 ? this.sprite(i) : undefined)
      if (rs < 1.6 || !sp) {
        // a speck: true scale is below a pixel, so draw a minimum dot
        ctx.globalAlpha = alpha
        ctx.fillStyle = sp?.dot ?? bodies[i].color
        ctx.beginPath(); ctx.arc(x, y, Math.max(rs, 0.9), 0, Math.PI * 2); ctx.fill()
        ctx.globalAlpha = 1
      } else {
        const size = rs * 2 * sp.pad
        if (size > maxPx) continue
        ctx.globalAlpha = alpha
        const kind = bodies[i].kind
        if (!this.reduced && (kind === 'galaxy' || kind === 'laniakea')) {
          ctx.save()
          ctx.translate(x, y)
          ctx.rotate(time * 0.012 * (i % 2 ? 1 : -1))
          ctx.drawImage(sp.canvas, -size / 2, -size / 2, size, size)
          ctx.restore()
        } else {
          ctx.drawImage(sp.canvas, x - size / 2, y - size / 2, size, size)
        }
        ctx.globalAlpha = 1
      }

      // label the previous body wherever it ended up
      if (i === cur - 1) {
        const la = settle
        if (la > 0.01) this.marker(x, y, rs, bodies[i].name, la)
      }
      // a hand-drawn-ish orbit ring around the current one
      if (i === cur && settle > 0.01 && rs > 20) {
        const rr = rs * (EXTENT[bodies[i].id] ?? 1) * 1.08 + 6
        ctx.strokeStyle = `rgba(212,165,116,${0.35 * settle})`
        ctx.lineWidth = 1
        ctx.beginPath()
        const start = -Math.PI * 0.62
        ctx.arc(x, y, rr, start, start + Math.PI * 2 * (this.reduced ? 1 : easeOut(settle)))
        ctx.stroke()
      }
    }
  }

  private marker(x: number, y: number, rs: number, name: string, a: number) {
    const { ctx } = this
    const ring = Math.max(rs + 7, 11)
    ctx.strokeStyle = `rgba(212,165,116,${0.7 * a})`
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.arc(x, y, ring, 0, Math.PI * 2); ctx.stroke()
    // leader line down-left, then the name
    ctx.font = '11px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace'
    const flip = x - ring - 40 - ctx.measureText(name).width < 12 // no room on the left: label below-right
    const sx = flip ? 1 : -1
    const lx = x + sx * ring * 0.7071, ly = y + ring * 0.7071
    const ex = lx + sx * 26, ey = ly + 26
    ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(ex, ey); ctx.lineTo(ex + sx * 14, ey); ctx.stroke()
    ctx.fillStyle = `rgba(161,161,170,${a})`
    ctx.textAlign = flip ? 'left' : 'right'
    ctx.textBaseline = 'middle'
    ctx.fillText(name, ex + sx * 20, ey)
  }
}

function easeOut(x: number) {
  return 1 - Math.pow(1 - x, 3)
}
