/**
 * crisp starfield + faint milky way band, pre-rendered at device resolution,
 * plus the occasional shooting star.
 */
interface Meteor { x: number; y: number; vx: number; vy: number; len: number; life: number; age: number; tan: boolean; w: number }

export class Background {
  private ctx: CanvasRenderingContext2D
  private field: HTMLCanvasElement | null = null
  private margin = 0
  private w = 0
  private h = 0
  private dpr = 1
  private meteors: Meteor[] = []
  private next = 4 + Math.random() * 5
  private twinkle: { x: number; y: number; r: number; a: number; p: number }[] = []
  reduced = false

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d', { alpha: false })!
  }

  resize(w: number, h: number, dpr: number) {
    this.w = w; this.h = h; this.dpr = dpr
    this.canvas.width = Math.round(w * dpr)
    this.canvas.height = Math.round(h * dpr)
    this.build()
  }

  private build() {
    const H = this.canvas.height, d = this.dpr
    // field is a bit wider than the screen; we pan across the extra margin (no wrap, no seam)
    this.margin = Math.round(this.canvas.width * 0.12)
    const W = this.canvas.width + this.margin
    const c = document.createElement('canvas')
    c.width = W; c.height = H
    const x = c.getContext('2d')!
    x.fillStyle = '#0a0a0b'
    x.fillRect(0, 0, W, H)
    let seed = 918273
    const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
    const g = () => Math.sqrt(-2 * Math.log(r() + 1e-9)) * Math.cos(2 * Math.PI * r())

    // milky way band: a soft diagonal glow with a darker dust lane
    const ang = -0.42
    const cx = W * 0.5, cy = H * 0.55
    const ux = Math.cos(ang), uy = Math.sin(ang)
    const band = (off: number, width: number, col: string, n: number, alpha: number) => {
      for (let i = 0; i < n; i++) {
        const t = (r() - 0.5) * Math.hypot(W, H) * 1.1
        const o = off + g() * width
        const px = cx + ux * t - uy * o, py = cy + uy * t + ux * o
        const rad = width * (0.6 + r() * 1.6)
        const gr = x.createRadialGradient(px, py, 0, px, py, rad)
        gr.addColorStop(0, col.replace('A', String(alpha * (0.5 + r()))))
        gr.addColorStop(1, col.replace('A', '0'))
        x.fillStyle = gr
        x.fillRect(px - rad, py - rad, rad * 2, rad * 2)
      }
    }
    const bw = Math.min(W, H) * 0.1
    band(0, bw, 'rgba(200,190,175,A)', 90, 0.0065)
    band(0, bw * 0.45, 'rgba(225,205,180,A)', 70, 0.006)

    // stars: density scales with area, sizes in device pixels for crispness
    const area = (W * H) / (d * d)
    const n = Math.round(area / 520)
    const put = (px: number, py: number, mag: number) => {
      const t = r()
      const col = t < 0.12 ? [255, 214, 170] : t < 0.25 ? [200, 215, 255] : [244, 241, 234]
      const a = Math.min(1, 0.12 + Math.pow(mag, 2.2) * 0.9)
      const size = (0.55 + mag * 1.1) * d
      if (size <= 1.35) {
        // single device pixel, alpha carries brightness
        x.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${a * Math.max(0.35, size)})`
        x.fillRect(Math.round(px), Math.round(py), 1, 1)
      } else {
        const rad = size
        const gr = x.createRadialGradient(px, py, 0, px, py, rad)
        gr.addColorStop(0, `rgba(${col[0]},${col[1]},${col[2]},${a})`)
        gr.addColorStop(0.35, `rgba(${col[0]},${col[1]},${col[2]},${a * 0.45})`)
        gr.addColorStop(1, `rgba(${col[0]},${col[1]},${col[2]},0)`)
        x.fillStyle = gr
        x.beginPath(); x.arc(px, py, rad, 0, Math.PI * 2); x.fill()
      }
    }
    for (let i = 0; i < n; i++) put(r() * W, r() * H, Math.pow(r(), 6))
    // extra faint stars concentrated along the band
    for (let i = 0; i < n * 0.9; i++) {
      const t = (r() - 0.5) * Math.hypot(W, H) * 1.1
      const o = g() * bw * 0.7
      const px = cx + ux * t - uy * o, py = cy + uy * t + ux * o
      if (px < 0 || py < 0 || px >= W || py >= H) continue
      put(px, py, Math.pow(r(), 9) * 0.6)
    }
    this.twinkle = []
    for (let i = 0; i < Math.round(area / 18000); i++) this.twinkle.push({ x: r() * W, y: r() * H, r: (0.8 + r() * 0.8) * d, a: 0.3 + r() * 0.5, p: r() * 6.28 })
    this.field = c
  }

  /** progress: 0..1 through the tour */
  draw(progress: number, time: number, dt: number) {
    const { ctx } = this
    const W = this.canvas.width
    if (!this.field) return
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.globalCompositeOperation = 'source-over'
    ctx.globalAlpha = 1
    // parallax in whole device pixels so stars never resample (stay crisp)
    const off = Math.round(Math.max(0, Math.min(1, progress)) * this.margin)
    ctx.drawImage(this.field, -off, 0)

    if (!this.reduced) {
      for (const t of this.twinkle) {
        const a = t.a * (0.5 + 0.5 * Math.sin(time * 1.3 + t.p))
        const x = t.x - off
        if (x < 0 || x > W) continue
        ctx.fillStyle = `rgba(244,241,234,${a * 0.6})`
        ctx.fillRect(Math.round(x), Math.round(t.y), Math.max(1, Math.round(t.r)), Math.max(1, Math.round(t.r)))
      }
      this.meteorsStep(dt)
    }
  }

  private meteorsStep(dt: number) {
    const { ctx } = this
    const d = this.dpr
    if (document.visibilityState === 'visible') this.next -= dt
    if (this.next <= 0) {
      this.next = 6 + Math.random() * 9
      const W = this.w, H = this.h
      const dir = Math.random() < 0.5 ? -1 : 1
      const ang = (0.25 + Math.random() * 0.35) // below horizontal
      const speed = 700 + Math.random() * 600
      this.meteors.push({
        x: W * (0.15 + Math.random() * 0.7), y: H * (0.05 + Math.random() * 0.35),
        vx: Math.cos(ang) * speed * dir, vy: Math.sin(ang) * speed,
        len: 110 + Math.random() * 130, life: 0.55 + Math.random() * 0.5, age: 0,
        tan: Math.random() < 0.35, w: 1 + Math.random() * 0.6,
      })
    }
    ctx.globalCompositeOperation = 'lighter'
    this.meteors = this.meteors.filter((m) => {
      m.age += dt
      if (m.age > m.life) return false
      m.x += m.vx * dt; m.y += m.vy * dt
      const k = m.age / m.life
      const fade = Math.min(1, k * 6) * (1 - Math.pow(k, 2))
      const sp = Math.hypot(m.vx, m.vy)
      const ux = m.vx / sp, uy = m.vy / sp
      const len = m.len * Math.min(1, k * 4)
      const hx = m.x * d, hy = m.y * d, tx = (m.x - ux * len) * d, ty = (m.y - uy * len) * d
      const nx = -uy * m.w * d * 0.5, ny = ux * m.w * d * 0.5
      const col = m.tan ? '212,165,116' : '244,241,234'
      const gr = ctx.createLinearGradient(hx, hy, tx, ty)
      gr.addColorStop(0, `rgba(${col},${0.85 * fade})`)
      gr.addColorStop(0.25, `rgba(${col},${0.35 * fade})`)
      gr.addColorStop(1, `rgba(${col},0)`)
      ctx.fillStyle = gr
      // tapered tail: a thin triangle from head width to a point
      ctx.beginPath()
      ctx.moveTo(hx + nx, hy + ny)
      ctx.lineTo(tx, ty)
      ctx.lineTo(hx - nx, hy - ny)
      ctx.closePath()
      ctx.fill()
      // head
      ctx.fillStyle = `rgba(255,250,240,${0.9 * fade})`
      ctx.beginPath(); ctx.arc(hx, hy, m.w * d * 0.6, 0, Math.PI * 2); ctx.fill()
      return true
    })
    ctx.globalCompositeOperation = 'source-over'
  }
}
