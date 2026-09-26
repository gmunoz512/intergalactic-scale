import type { Body } from './data'

/** a pre-rendered body. the body's compared size spans `bodyPx` pixels (diameter) at the sprite center. */
export interface Sprite {
  canvas: HTMLCanvasElement
  /** sprite size / body diameter */
  pad: number
  /** representative color for tiny dots */
  dot: string
}

// ---------- helpers ----------
function rng(seed: number) {
  let s = seed >>> 0 || 1
  return () => {
    s ^= s << 13
    s ^= s >>> 17
    s ^= s << 5
    return ((s >>> 0) % 1_000_000) / 1_000_000
  }
}
function hash(str: string) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619)
  return h >>> 0
}
function gauss(r: () => number) {
  return Math.sqrt(-2 * Math.log(r() + 1e-9)) * Math.cos(2 * Math.PI * r())
}
function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}
const rgba = (c: [number, number, number], a: number) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`
function mix(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]
}

/** blackbody-ish color for a temperature (tanner helland approximation) */
export function kelvinToRgb(k: number): [number, number, number] {
  const t = k / 100
  let r: number, g: number, b: number
  if (t <= 66) {
    r = 255
    g = 99.4708025861 * Math.log(t) - 161.1195681661
    b = t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307
  } else {
    r = 329.698727446 * Math.pow(t - 60, -0.1332047592)
    g = 288.1221695283 * Math.pow(t - 60, -0.0755148492)
    b = 255
  }
  const c = (v: number) => Math.max(0, Math.min(255, v))
  return [c(r), c(g), c(b)]
}

function make(size: number) {
  const c = document.createElement('canvas')
  c.width = c.height = Math.round(size)
  const ctx = c.getContext('2d')!
  return { c, ctx }
}

/** light from upper-left: terminator + limb darkening */
function shade(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, strength = 0.9) {
  const g = ctx.createRadialGradient(cx - r * 0.45, cy - r * 0.45, r * 0.05, cx - r * 0.1, cy - r * 0.1, r * 1.35)
  g.addColorStop(0, 'rgba(255,248,235,0.10)')
  g.addColorStop(0.35, 'rgba(0,0,0,0)')
  g.addColorStop(0.7, `rgba(4,4,6,${0.55 * strength})`)
  g.addColorStop(1, `rgba(4,4,6,${0.97 * strength})`)
  ctx.fillStyle = g
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.fill()
}

function clipCircle(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.clip()
}

function atmosphere(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, col: [number, number, number], a = 0.5) {
  const g = ctx.createRadialGradient(cx, cy, r * 0.92, cx, cy, r * 1.08)
  g.addColorStop(0, rgba(col, 0))
  g.addColorStop(0.55, rgba(col, a))
  g.addColorStop(1, rgba(col, 0))
  ctx.fillStyle = g
  ctx.beginPath()
  ctx.arc(cx, cy, r * 1.08, 0, Math.PI * 2)
  ctx.fill()
}

// ---------- planets ----------
function rocky(b: Body, D: number): Sprite {
  const pad = 1.1
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const r1 = rng(hash(b.id))
  const base = hexToRgb(b.color), dark = hexToRgb(b.color2 ?? b.color)
  ctx.save()
  clipCircle(ctx, cx, cx, r)
  ctx.fillStyle = b.color
  ctx.fillRect(0, 0, c.width, c.height)
  // large tonal patches (maria, plains)
  for (let i = 0; i < 26; i++) {
    const x = cx + (r1() - 0.5) * 2 * r, y = cx + (r1() - 0.5) * 2 * r, rr = r * (0.12 + r1() * 0.4)
    const g = ctx.createRadialGradient(x, y, 0, x, y, rr)
    const col = r1() < 0.6 ? dark : mix(base, [255, 255, 255], 0.25)
    g.addColorStop(0, rgba(col, 0.35 + r1() * 0.25))
    g.addColorStop(1, rgba(col, 0))
    ctx.fillStyle = g
    ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2)
  }
  if (b.id !== 'venus') {
    // craters
    for (let i = 0; i < 140; i++) {
      const x = cx + (r1() - 0.5) * 2 * r, y = cx + (r1() - 0.5) * 2 * r
      const rr = r * 0.008 + r * 0.06 * Math.pow(r1(), 3)
      ctx.fillStyle = rgba(dark, 0.35)
      ctx.beginPath(); ctx.arc(x, y, rr, 0, Math.PI * 2); ctx.fill()
      ctx.strokeStyle = rgba(mix(base, [255, 255, 255], 0.35), 0.25)
      ctx.lineWidth = Math.max(1, rr * 0.18)
      ctx.beginPath(); ctx.arc(x + rr * 0.12, y + rr * 0.12, rr, Math.PI * 0.9, Math.PI * 1.9, true); ctx.stroke()
    }
  } else {
    // venus: soft swirled cloud bands
    for (let i = 0; i < 40; i++) {
      const y = cx + (r1() - 0.5) * 2 * r
      ctx.fillStyle = rgba(r1() < 0.5 ? dark : [245, 230, 200], 0.08 + r1() * 0.08)
      ctx.beginPath()
      ctx.ellipse(cx + (r1() - 0.5) * r, y, r * (0.6 + r1()), r * (0.03 + r1() * 0.08), (r1() - 0.5) * 0.4, 0, Math.PI * 2)
      ctx.fill()
    }
  }
  if (b.id === 'mars') {
    ctx.fillStyle = 'rgba(245,240,235,0.85)'
    ctx.beginPath(); ctx.ellipse(cx, cx - r * 0.97, r * 0.3, r * 0.1, 0, 0, Math.PI * 2); ctx.fill()
  }
  shade(ctx, cx, cx, r)
  ctx.restore()
  if (b.id === 'venus') atmosphere(ctx, cx, cx, r, [240, 220, 180], 0.25)
  if (b.id === 'mars') atmosphere(ctx, cx, cx, r, [230, 150, 110], 0.18)
  return { canvas: c, pad, dot: b.color }
}

function earth(_b: Body, D: number): Sprite {
  const pad = 1.12
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const r1 = rng(7)
  ctx.save()
  clipCircle(ctx, cx, cx, r)
  const ocean = ctx.createRadialGradient(cx - r * 0.3, cx - r * 0.3, 0, cx, cx, r)
  ocean.addColorStop(0, '#3b76ad')
  ocean.addColorStop(1, '#16375e')
  ctx.fillStyle = ocean
  ctx.fillRect(0, 0, c.width, c.height)
  // continents: clusters of blobs
  const centers = [[-0.35, -0.2, 0.42], [0.25, 0.25, 0.35], [0.45, -0.45, 0.25], [-0.1, 0.6, 0.2]]
  for (const [ox, oy, s] of centers) {
    for (let i = 0; i < 70; i++) {
      const x = cx + (ox + gauss(r1) * s * 0.5) * r, y = cx + (oy + gauss(r1) * s * 0.45) * r
      const rr = r * s * (0.08 + r1() * 0.22)
      const green = r1() < 0.7
      ctx.fillStyle = green ? `rgba(${70 + r1() * 30},${110 + r1() * 30},${60 + r1() * 20},0.9)` : `rgba(${160 + r1() * 30},${130 + r1() * 20},${90},0.85)`
      ctx.beginPath(); ctx.arc(x, y, rr, 0, Math.PI * 2); ctx.fill()
    }
  }
  // ice caps
  ctx.fillStyle = 'rgba(240,244,248,0.95)'
  ctx.beginPath(); ctx.ellipse(cx, cx - r, r * 0.55, r * 0.14, 0, 0, Math.PI * 2); ctx.fill()
  ctx.beginPath(); ctx.ellipse(cx, cx + r, r * 0.6, r * 0.16, 0, 0, Math.PI * 2); ctx.fill()
  // clouds
  for (let i = 0; i < 90; i++) {
    const y = cx + (r1() - 0.5) * 2 * r
    ctx.fillStyle = `rgba(250,250,252,${0.12 + r1() * 0.3})`
    ctx.beginPath()
    ctx.ellipse(cx + (r1() - 0.5) * 2 * r, y, r * (0.08 + r1() * 0.3), r * (0.015 + r1() * 0.04), (r1() - 0.5) * 0.6, 0, Math.PI * 2)
    ctx.fill()
  }
  shade(ctx, cx, cx, r)
  ctx.restore()
  atmosphere(ctx, cx, cx, r, [120, 170, 255], 0.45)
  return { canvas: c, pad, dot: '#5d8fc4' }
}

function banded(b: Body, D: number, ringed = false): Sprite {
  const pad = ringed ? 2.5 : 1.12
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const r1 = rng(hash(b.id))
  const base = hexToRgb(b.color), dark = hexToRgb(b.color2 ?? b.color)
  const tilt = -0.32
  const ringIn = 1.24 * r, ringOut = 2.27 * r, squash = 0.22

  const drawRing = (front: boolean) => {
    ctx.save()
    ctx.translate(cx, cx)
    ctx.rotate(tilt)
    ctx.beginPath()
    if (front) ctx.rect(-ringOut, 0, ringOut * 2, ringOut)
    else ctx.rect(-ringOut, -ringOut, ringOut * 2, ringOut)
    ctx.clip()
    ctx.scale(1, squash)
    for (let rr = ringIn; rr < ringOut; rr += r * 0.006) {
      const t = (rr - ringIn) / (ringOut - ringIn)
      const cassini = t > 0.62 && t < 0.68
      const a = cassini ? 0.04 : (0.25 + 0.5 * Math.abs(Math.sin(t * 23 + r1()))) * (t < 0.1 ? t * 10 : 1)
      ctx.strokeStyle = rgba(mix(base, [255, 245, 225], 0.2 + 0.3 * r1()), a * 0.8)
      ctx.lineWidth = r * 0.007
      ctx.beginPath(); ctx.arc(0, 0, rr, 0, Math.PI * 2); ctx.stroke()
    }
    ctx.restore()
  }

  if (ringed) drawRing(false)
  ctx.save()
  clipCircle(ctx, cx, cx, r)
  ctx.translate(cx, cx)
  ctx.rotate(ringed ? tilt : 0.05)
  ctx.fillStyle = b.color
  ctx.fillRect(-r, -r, r * 2, r * 2)
  let y = -r
  while (y < r) {
    const h = r * (0.02 + r1() * 0.09)
    const t = r1()
    const col = t < 0.45 ? dark : t < 0.8 ? mix(base, [250, 240, 225], 0.35) : base
    ctx.fillStyle = rgba(col, b.kind === 'ice' ? 0.12 + r1() * 0.1 : 0.35 + r1() * 0.35)
    ctx.fillRect(-r, y, r * 2, h)
    y += h
  }
  // soften bands
  for (let i = 0; i < 60; i++) {
    const yy = (r1() - 0.5) * 2 * r
    ctx.fillStyle = rgba(r1() < 0.5 ? dark : base, 0.12)
    ctx.beginPath(); ctx.ellipse((r1() - 0.5) * 2 * r, yy, r * (0.1 + r1() * 0.3), r * 0.02, 0, 0, Math.PI * 2); ctx.fill()
  }
  if (b.id === 'jupiter') {
    ctx.fillStyle = 'rgba(190,95,60,0.85)'
    ctx.beginPath(); ctx.ellipse(r * 0.28, r * 0.38, r * 0.17, r * 0.09, 0, 0, Math.PI * 2); ctx.fill()
    ctx.strokeStyle = 'rgba(240,210,180,0.5)'; ctx.lineWidth = r * 0.012; ctx.stroke()
  }
  if (b.id === 'neptune') {
    ctx.fillStyle = 'rgba(20,30,90,0.5)'
    ctx.beginPath(); ctx.ellipse(-r * 0.25, -r * 0.2, r * 0.14, r * 0.07, 0, 0, Math.PI * 2); ctx.fill()
  }
  ctx.restore()
  ctx.save()
  clipCircle(ctx, cx, cx, r)
  shade(ctx, cx, cx, r)
  ctx.restore()
  if (b.kind === 'ice') atmosphere(ctx, cx, cx, r, mix(base, [255, 255, 255], 0.3), 0.35)
  if (ringed) {
    // planet shadow on back ring is skipped; draw front half
    drawRing(true)
  }
  return { canvas: c, pad, dot: b.color }
}

// ---------- stars ----------
function star(b: Body, D: number): Sprite {
  const pad = 1.9
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const col = kelvinToRgb(b.tempK ?? 5800)
  const r1 = rng(hash(b.id))
  const cool = (b.tempK ?? 5800) < 4000
  // glow
  const g = ctx.createRadialGradient(cx, cx, r * 0.9, cx, cx, r * pad * 0.5)
  g.addColorStop(0, rgba(col, 0.55))
  g.addColorStop(0.25, rgba(col, 0.16))
  g.addColorStop(1, rgba(col, 0))
  ctx.fillStyle = g
  ctx.fillRect(0, 0, c.width, c.height)
  // disc with limb darkening
  ctx.save()
  clipCircle(ctx, cx, cx, r)
  const hot = mix(col, [255, 255, 255], 0.75)
  const limb = mix(col, [60, 20, 10], cool ? 0.55 : 0.3)
  const d = ctx.createRadialGradient(cx, cx, 0, cx, cx, r)
  d.addColorStop(0, rgba(hot, 1))
  d.addColorStop(0.55, rgba(mix(hot, col, 0.5), 1))
  d.addColorStop(0.88, rgba(col, 1))
  d.addColorStop(1, rgba(limb, 1))
  ctx.fillStyle = d
  ctx.fillRect(0, 0, c.width, c.height)
  // granulation / giant convection cells
  const cells = cool ? 38 : 900
  const cellR = cool ? 0.22 : 0.035
  for (let i = 0; i < cells; i++) {
    const a = r1() * Math.PI * 2, rad = Math.sqrt(r1()) * r
    const x = cx + Math.cos(a) * rad, y = cx + Math.sin(a) * rad
    const rr = r * cellR * (0.5 + r1())
    const gg = ctx.createRadialGradient(x, y, 0, x, y, rr)
    const bright = r1() < 0.5
    gg.addColorStop(0, bright ? 'rgba(255,250,235,0.16)' : rgba(limb, 0.22))
    gg.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = gg
    ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2)
  }
  if (b.id === 'sun') {
    // a few sunspots
    for (let i = 0; i < 5; i++) {
      const x = cx + (r1() - 0.5) * r, y = cx + (r1() - 0.5) * r * 0.5 + (i % 2 ? r * 0.25 : -r * 0.25)
      ctx.fillStyle = 'rgba(90,40,10,0.55)'
      ctx.beginPath(); ctx.arc(x, y, r * (0.01 + r1() * 0.02), 0, Math.PI * 2); ctx.fill()
    }
  }
  ctx.restore()
  // thin corona rim
  const rim = ctx.createRadialGradient(cx, cx, r * 0.98, cx, cx, r * 1.06)
  rim.addColorStop(0, rgba(mix(col, [255, 255, 255], 0.5), 0.5))
  rim.addColorStop(1, rgba(col, 0))
  ctx.fillStyle = rim
  ctx.beginPath(); ctx.arc(cx, cx, r * 1.06, 0, Math.PI * 2); ctx.fill()
  return { canvas: c, pad, dot: rgba(mix(col, [255, 255, 255], 0.3), 1) }
}

// ---------- structures ----------
function heliosphere(b: Body, D: number): Sprite {
  const pad = 1.15
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const col = hexToRgb(b.color)
  const g = ctx.createRadialGradient(cx + r * 0.08, cx, 0, cx, cx, r * 1.04)
  g.addColorStop(0, rgba(col, 0.0))
  g.addColorStop(0.72, rgba(col, 0.05))
  g.addColorStop(0.9, rgba(col, 0.14))
  g.addColorStop(0.97, rgba([230, 200, 160], 0.32))
  g.addColorStop(1, rgba(col, 0))
  ctx.fillStyle = g
  ctx.beginPath(); ctx.arc(cx, cx, r * 1.04, 0, Math.PI * 2); ctx.fill()
  // termination shock
  ctx.strokeStyle = rgba(col, 0.16)
  ctx.lineWidth = Math.max(1, r * 0.004)
  ctx.setLineDash([r * 0.02, r * 0.02])
  ctx.beginPath(); ctx.arc(cx + r * 0.06, cx, r * 0.75, 0, Math.PI * 2); ctx.stroke()
  ctx.setLineDash([])
  // solar wind streaks
  const r1 = rng(11)
  for (let i = 0; i < 160; i++) {
    const a = r1() * Math.PI * 2, r0 = r * (0.05 + r1() * 0.2), rl = r * (0.4 + r1() * 0.5)
    ctx.strokeStyle = rgba([240, 225, 200], 0.03 + r1() * 0.04)
    ctx.lineWidth = Math.max(1, r * 0.003)
    ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * r0, cx + Math.sin(a) * r0); ctx.lineTo(cx + Math.cos(a) * rl, cx + Math.sin(a) * rl); ctx.stroke()
  }
  // the sun, a pinpoint
  const s = ctx.createRadialGradient(cx, cx, 0, cx, cx, r * 0.05)
  s.addColorStop(0, 'rgba(255,245,225,1)')
  s.addColorStop(0.15, 'rgba(255,230,190,0.7)')
  s.addColorStop(1, 'rgba(255,220,170,0)')
  ctx.fillStyle = s
  ctx.fillRect(cx - r * 0.05, cx - r * 0.05, r * 0.1, r * 0.1)
  return { canvas: c, pad, dot: b.color }
}

function particles(ctx: CanvasRenderingContext2D, pts: [number, number, number, string, number][]) {
  ctx.globalCompositeOperation = 'lighter'
  for (const [x, y, s, col, a] of pts) {
    ctx.globalAlpha = a
    ctx.fillStyle = col
    ctx.beginPath(); ctx.arc(x, y, s, 0, Math.PI * 2); ctx.fill()
  }
  ctx.globalAlpha = 1
  ctx.globalCompositeOperation = 'source-over'
}

function oort(b: Body, D: number): Sprite {
  const pad = 1.05
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const r1 = rng(21)
  const halo = ctx.createRadialGradient(cx, cx, r * 0.2, cx, cx, r)
  halo.addColorStop(0, 'rgba(200,212,230,0)')
  halo.addColorStop(0.8, 'rgba(200,212,230,0.05)')
  halo.addColorStop(1, 'rgba(200,212,230,0)')
  ctx.fillStyle = halo
  ctx.beginPath(); ctx.arc(cx, cx, r, 0, Math.PI * 2); ctx.fill()
  const pts: [number, number, number, string, number][] = []
  for (let i = 0; i < 16000; i++) {
    // shell between 0.2r and r, projected
    const u = r1() * 2 - 1, th = r1() * Math.PI * 2
    const rad = r * Math.pow(0.02 + r1() * 0.98, 0.35)
    const s = Math.sqrt(1 - u * u)
    pts.push([cx + rad * s * Math.cos(th), cx + rad * u, Math.max(0.6, r * 0.0018 * (0.5 + r1())), '#dfe6f2', 0.22 + r1() * 0.45])
  }
  particles(ctx, pts)
  const s = ctx.createRadialGradient(cx, cx, 0, cx, cx, r * 0.02)
  s.addColorStop(0, 'rgba(255,240,215,1)')
  s.addColorStop(1, 'rgba(255,220,170,0)')
  ctx.fillStyle = s
  ctx.fillRect(cx - r * 0.02, cx - r * 0.02, r * 0.04, r * 0.04)
  return { canvas: c, pad, dot: b.color }
}

function nebula(b: Body, D: number): Sprite {
  const pad = 1.2
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const r1 = rng(31)
  const cols: [number, number, number][] = [hexToRgb(b.color), hexToRgb(b.color2 ?? b.color), [212, 165, 116], [240, 200, 170], [150, 90, 160]]
  ctx.globalCompositeOperation = 'lighter'
  for (let i = 0; i < 420; i++) {
    const a = r1() * Math.PI * 2, rad = r * Math.pow(r1(), 0.8) * 0.95
    const x = cx + Math.cos(a) * rad * 1.05, y = cx + Math.sin(a) * rad * 0.9
    const rr = r * (0.05 + r1() * 0.28) * (1 - rad / r * 0.5)
    const col = cols[(r1() * cols.length) | 0]
    const g = ctx.createRadialGradient(x, y, 0, x, y, rr)
    g.addColorStop(0, rgba(col, 0.05 + r1() * 0.05))
    g.addColorStop(1, rgba(col, 0))
    ctx.fillStyle = g
    ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2)
  }
  // bright core (trapezium)
  const core = ctx.createRadialGradient(cx - r * 0.05, cx - r * 0.05, 0, cx, cx, r * 0.3)
  core.addColorStop(0, 'rgba(255,240,230,0.55)')
  core.addColorStop(1, 'rgba(255,200,200,0)')
  ctx.fillStyle = core
  ctx.fillRect(0, 0, c.width, c.height)
  ctx.globalCompositeOperation = 'source-over'
  // dark dust lanes
  for (let i = 0; i < 40; i++) {
    const x = cx + (r1() - 0.5) * r * 1.6, y = cx + (r1() - 0.5) * r * 1.6
    const rr = r * (0.05 + r1() * 0.15)
    const g = ctx.createRadialGradient(x, y, 0, x, y, rr)
    g.addColorStop(0, 'rgba(10,10,11,0.35)')
    g.addColorStop(1, 'rgba(10,10,11,0)')
    ctx.fillStyle = g
    ctx.fillRect(x - rr, y - rr, rr * 2, rr * 2)
  }
  const pts: [number, number, number, string, number][] = []
  for (let i = 0; i < 260; i++) {
    const x = cx + gauss(r1) * r * 0.35, y = cx + gauss(r1) * r * 0.35
    pts.push([x, y, Math.max(0.6, r * 0.003 * (0.5 + r1() * 1.5)), r1() < 0.5 ? '#dfe8ff' : '#fff4e0', 0.5 + r1() * 0.5])
  }
  particles(ctx, pts)
  return { canvas: c, pad, dot: b.color }
}

function cluster(b: Body, D: number): Sprite {
  const pad = 1.1
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const r1 = rng(41)
  const glow = ctx.createRadialGradient(cx, cx, 0, cx, cx, r)
  glow.addColorStop(0, 'rgba(255,226,184,0.55)')
  glow.addColorStop(0.2, 'rgba(255,226,184,0.18)')
  glow.addColorStop(0.6, 'rgba(255,226,184,0.04)')
  glow.addColorStop(1, 'rgba(255,226,184,0)')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, c.width, c.height)
  const pts: [number, number, number, string, number][] = []
  for (let i = 0; i < 14000; i++) {
    // plummer-ish profile
    const u = r1()
    let rad = (0.12 * r) / Math.sqrt(Math.pow(u, -2 / 3) - 1 + 1e-6)
    if (rad > r) rad = r * r1()
    const a = r1() * Math.PI * 2
    const t = r1()
    const col = t < 0.15 ? '#ffb070' : t < 0.3 ? '#cfe0ff' : '#fff0d8'
    pts.push([cx + Math.cos(a) * rad, cx + Math.sin(a) * rad, Math.max(0.5, r * 0.0022 * (0.4 + r1() * 1.2)), col, 0.25 + r1() * 0.55])
  }
  particles(ctx, pts)
  return { canvas: c, pad, dot: b.color }
}

function drawGalaxy(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, seed: number, tilt: number, rot: number, n: number, warm: string, cool: string, bulge = 0.18) {
  const r1 = rng(seed)
  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(rot)
  ctx.scale(1, tilt)
  const disc = ctx.createRadialGradient(0, 0, 0, 0, 0, r)
  disc.addColorStop(0, 'rgba(255,236,205,0.5)')
  disc.addColorStop(bulge, 'rgba(240,215,180,0.18)')
  disc.addColorStop(0.6, 'rgba(180,190,220,0.05)')
  disc.addColorStop(1, 'rgba(180,190,220,0)')
  ctx.fillStyle = disc
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill()
  const pts: [number, number, number, string, number][] = []
  const arms = 2 + (seed % 2)
  const k = 0.28 // pitch
  for (let i = 0; i < n; i++) {
    const inBulge = r1() < 0.22
    if (inBulge) {
      const rad = Math.abs(gauss(r1)) * r * bulge * 0.7
      const a = r1() * Math.PI * 2
      pts.push([Math.cos(a) * rad, Math.sin(a) * rad, Math.max(0.5, r * 0.0025 * (0.5 + r1())), warm, 0.2 + r1() * 0.4])
      continue
    }
    const arm = (r1() * arms) | 0
    const t = Math.pow(r1(), 0.7)
    const rad = r * (0.08 + t * 0.92)
    const theta = Math.log(rad / (r * 0.08)) / k + (arm * 2 * Math.PI) / arms
    const spread = (0.12 + 0.25 * t) * (r1() < 0.7 ? 0.35 : 1)
    const a = theta + gauss(r1) * spread
    const rr = rad * (1 + gauss(r1) * 0.06)
    const col = r1() < 0.35 + 0.4 * t ? cool : warm
    pts.push([Math.cos(a) * rr, Math.sin(a) * rr, Math.max(0.5, r * 0.0022 * (0.3 + r1() * 1.1)), col, 0.12 + r1() * 0.45])
  }
  particles(ctx, pts)
  const core = ctx.createRadialGradient(0, 0, 0, 0, 0, r * bulge)
  core.addColorStop(0, 'rgba(255,245,225,0.9)')
  core.addColorStop(1, 'rgba(255,225,185,0)')
  ctx.globalCompositeOperation = 'lighter'
  ctx.fillStyle = core
  ctx.beginPath(); ctx.arc(0, 0, r * bulge, 0, Math.PI * 2); ctx.fill()
  ctx.restore()
}

function galaxy(b: Body, D: number): Sprite {
  const pad = 1.05
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  drawGalaxy(ctx, cx, cx, r, hash(b.id), b.tilt ?? 0.6, b.id === 'andromeda' ? -0.6 : -0.25, 26000, '#ffe6c4', b.color2 ?? '#b8c8ea', b.id === 'andromeda' ? 0.24 : 0.16)
  return { canvas: c, pad, dot: b.color }
}

function group(b: Body, D: number): Sprite {
  const pad = 1.05
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const r1 = rng(51)
  // boundary: faint tan sphere
  const g = ctx.createRadialGradient(cx, cx, r * 0.6, cx, cx, r)
  g.addColorStop(0, 'rgba(212,165,116,0)')
  g.addColorStop(0.92, 'rgba(212,165,116,0.06)')
  g.addColorStop(1, 'rgba(212,165,116,0)')
  ctx.fillStyle = g
  ctx.beginPath(); ctx.arc(cx, cx, r, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = 'rgba(212,165,116,0.3)'
  ctx.lineWidth = Math.max(1, r * 0.002)
  ctx.beginPath(); ctx.arc(cx, cx, r * 0.995, 0, Math.PI * 2); ctx.stroke()
  // milky way & andromeda are ~2.5 million ly apart; each ~1–1.5% of group diameter
  const mwR = r * 0.01, m31R = r * 0.0152 // true scale within the group
  const mw = [cx - r * 0.12, cx + r * 0.06], m31 = [cx + r * 0.13, cx - r * 0.08]
  for (const [gx, gy, gr] of [[mw[0], mw[1], mwR * 6], [m31[0], m31[1], m31R * 6]]) {
    const h = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr)
    h.addColorStop(0, 'rgba(255,230,195,0.35)')
    h.addColorStop(1, 'rgba(255,230,195,0)')
    ctx.fillStyle = h
    ctx.fillRect(gx - gr, gy - gr, gr * 2, gr * 2)
  }
  drawGalaxy(ctx, mw[0], mw[1], mwR, 5, 0.62, -0.25, 1200, '#ffe6c4', '#b8c8ea')
  drawGalaxy(ctx, m31[0], m31[1], m31R, 8, 0.34, -0.6, 1500, '#ffe6c4', '#b8c8ea', 0.24)
  // triangulum
  drawGalaxy(ctx, cx + r * 0.2, cx - r * 0.02, r * 0.006, 9, 0.7, 0.3, 400, '#ffe6c4', '#b8c8ea')
  // dwarfs clustered around the two, plus field
  const pts: [number, number, number, string, number][] = []
  for (let i = 0; i < 90; i++) {
    const host = i < 35 ? mw : i < 70 ? m31 : [cx, cx]
    const spread = i < 70 ? r * 0.07 : r * 0.45
    pts.push([host[0] + gauss(r1) * spread, host[1] + gauss(r1) * spread, Math.max(1, r * 0.003 * (0.5 + r1())), '#f0dcc0', 0.55 + r1() * 0.45])
  }
  particles(ctx, pts)
  return { canvas: c, pad, dot: b.color }
}

function webLines(ctx: CanvasRenderingContext2D, nodes: [number, number, number][], maxD: number, color: [number, number, number], width: number, alpha: number) {
  ctx.lineCap = 'round'
  for (let i = 0; i < nodes.length; i++) {
    const near: [number, number][] = []
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue
      const d = Math.hypot(nodes[i][0] - nodes[j][0], nodes[i][1] - nodes[j][1])
      if (d < maxD) near.push([d, j])
    }
    near.sort((a, b) => a[0] - b[0])
    for (const [d, j] of near.slice(0, 3)) {
      if (j < i) continue
      ctx.strokeStyle = rgba(color, alpha * (1 - d / maxD) * (0.5 + 0.5 * Math.min(nodes[i][2], nodes[j][2])))
      ctx.lineWidth = width
      ctx.beginPath(); ctx.moveTo(nodes[i][0], nodes[i][1]); ctx.lineTo(nodes[j][0], nodes[j][1]); ctx.stroke()
    }
  }
}

function filamentPts(nodes: [number, number, number][], maxD: number, r1: () => number, per: number, jitter: number) {
  const pts: [number, number, number, string, number][] = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const d = Math.hypot(nodes[i][0] - nodes[j][0], nodes[i][1] - nodes[j][1])
      if (d > maxD || r1() > 0.55) continue
      const n = Math.round(per * (d / maxD))
      for (let k = 0; k < n; k++) {
        const t = r1()
        const x = nodes[i][0] + (nodes[j][0] - nodes[i][0]) * t + gauss(r1) * jitter
        const y = nodes[i][1] + (nodes[j][1] - nodes[i][1]) * t + gauss(r1) * jitter
        pts.push([x, y, 0.9, r1() < 0.7 ? '#e8d6bb' : '#d4a574', 0.2 + r1() * 0.4])
      }
    }
  }
  return pts
}

function supercluster(b: Body, D: number): Sprite {
  const pad = 1.05
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const r1 = rng(61)
  const nodes: [number, number, number][] = []
  for (let i = 0; i < 70; i++) {
    const a = r1() * Math.PI * 2, rad = r * Math.sqrt(r1()) * 0.95
    nodes.push([cx + Math.cos(a) * rad * 1.0, cx + Math.sin(a) * rad * 0.7, r1()])
  }
  // virgo cluster at the heart
  nodes.push([cx + r * 0.05, cx, 1])
  const soft = ctx.createRadialGradient(cx, cx, 0, cx, cx, r)
  soft.addColorStop(0, 'rgba(212,165,116,0.12)')
  soft.addColorStop(1, 'rgba(212,165,116,0)')
  ctx.fillStyle = soft
  ctx.beginPath(); ctx.ellipse(cx, cx, r, r * 0.72, 0, 0, Math.PI * 2); ctx.fill()
  webLines(ctx, nodes, r * 0.45, [212, 165, 116], Math.max(1, r * 0.002), 0.25)
  const pts = filamentPts(nodes, r * 0.45, r1, 160, r * 0.012).map((p) => [p[0], p[1], Math.max(0.6, r * 0.0016), p[3], p[4]] as [number, number, number, string, number])
  for (const [x, y, w] of nodes) {
    for (let k = 0; k < 20 + w * 60; k++) pts.push([x + gauss(r1) * r * 0.015, y + gauss(r1) * r * 0.015, Math.max(0.7, r * 0.002), '#fff0dc', 0.4 + r1() * 0.5])
  }
  particles(ctx, pts)
  return { canvas: c, pad, dot: b.color }
}

function laniakea(b: Body, D: number): Sprite {
  const pad = 1.05
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const r1 = rng(71)
  const ax = cx + r * 0.08, ay = cx + r * 0.05 // great attractor
  const soft = ctx.createRadialGradient(ax, ay, 0, cx, cx, r)
  soft.addColorStop(0, 'rgba(212,165,116,0.16)')
  soft.addColorStop(0.7, 'rgba(212,165,116,0.04)')
  soft.addColorStop(1, 'rgba(212,165,116,0)')
  ctx.fillStyle = soft
  ctx.beginPath(); ctx.arc(cx, cx, r, 0, Math.PI * 2); ctx.fill()
  // flow lines converging on the attractor, like the tully et al. maps
  ctx.lineCap = 'round'
  for (let i = 0; i < 150; i++) {
    const a = r1() * Math.PI * 2, rad = r * (0.55 + r1() * 0.43)
    let x = cx + Math.cos(a) * rad, y = cx + Math.sin(a) * rad * 0.85
    ctx.strokeStyle = `rgba(232,214,187,${0.07 + r1() * 0.12})`
    ctx.lineWidth = Math.max(1, r * 0.0022)
    ctx.beginPath(); ctx.moveTo(x, y)
    const curl = (r1() - 0.5) * 1.4
    for (let s = 0; s < 60; s++) {
      const dx = ax - x, dy = ay - y, d = Math.hypot(dx, dy)
      if (d < r * 0.03) break
      const vx = dx / d + (-dy / d) * curl * (d / r), vy = dy / d + (dx / d) * curl * (d / r)
      x += vx * r * 0.018; y += vy * r * 0.018
      ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
  const pts: [number, number, number, string, number][] = []
  for (let i = 0; i < 5000; i++) {
    const a = r1() * Math.PI * 2, rad = r * Math.pow(r1(), 0.7) * 0.98
    pts.push([cx + Math.cos(a) * rad, cx + Math.sin(a) * rad * 0.85, Math.max(0.6, r * 0.0015), r1() < 0.8 ? '#efe2cc' : '#d4a574', 0.12 + r1() * 0.4])
  }
  particles(ctx, pts)
  // boundary, dashed hairline
  ctx.strokeStyle = 'rgba(212,165,116,0.35)'
  ctx.lineWidth = Math.max(1, r * 0.002)
  ctx.setLineDash([r * 0.012, r * 0.018])
  ctx.beginPath(); ctx.ellipse(cx, cx, r * 0.985, r * 0.85, 0, 0, Math.PI * 2); ctx.stroke()
  ctx.setLineDash([])
  return { canvas: c, pad, dot: b.color }
}

function universe(b: Body, D: number): Sprite {
  const pad = 1.12
  const { c, ctx } = make(D * pad)
  const cx = c.width / 2, r = D / 2
  const r1 = rng(81)
  // outer warm rim (cmb-ish)
  const rim = ctx.createRadialGradient(cx, cx, r * 0.85, cx, cx, r * 1.1)
  rim.addColorStop(0, 'rgba(212,165,116,0)')
  rim.addColorStop(0.5, 'rgba(212,165,116,0.28)')
  rim.addColorStop(1, 'rgba(212,165,116,0)')
  ctx.fillStyle = rim
  ctx.beginPath(); ctx.arc(cx, cx, r * 1.1, 0, Math.PI * 2); ctx.fill()
  ctx.save()
  clipCircle(ctx, cx, cx, r)
  ctx.fillStyle = '#0d0c0c'
  ctx.fillRect(0, 0, c.width, c.height)
  const nodes: [number, number, number][] = []
  for (let i = 0; i < 420; i++) {
    // points in a ball, projected; denser toward limb like a shell view
    const u = r1() * 2 - 1, th = r1() * Math.PI * 2
    const rad = r * Math.cbrt(r1())
    const s = Math.sqrt(1 - u * u)
    nodes.push([cx + rad * s * Math.cos(th), cx + rad * u, r1()])
  }
  ctx.globalCompositeOperation = 'lighter'
  webLines(ctx, nodes, r * 0.2, [212, 165, 116], Math.max(1, r * 0.0025), 0.35)
  const pts = filamentPts(nodes, r * 0.2, r1, 40, r * 0.006).map((p) => [p[0], p[1], Math.max(0.5, r * 0.0012), p[3], p[4] * 0.8] as [number, number, number, string, number])
  for (const [x, y, w] of nodes) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r * 0.02 * (0.5 + w))
    g.addColorStop(0, 'rgba(255,236,210,0.35)')
    g.addColorStop(1, 'rgba(255,236,210,0)')
    ctx.fillStyle = g
    ctx.fillRect(x - r * 0.03, y - r * 0.03, r * 0.06, r * 0.06)
  }
  ctx.globalCompositeOperation = 'source-over'
  particles(ctx, pts)
  // sphere shading: brighter limb, darker center for depth
  const sh = ctx.createRadialGradient(cx - r * 0.2, cx - r * 0.2, 0, cx, cx, r)
  sh.addColorStop(0, 'rgba(10,10,11,0.15)')
  sh.addColorStop(0.8, 'rgba(10,10,11,0)')
  sh.addColorStop(1, 'rgba(212,165,116,0.18)')
  ctx.fillStyle = sh
  ctx.fillRect(0, 0, c.width, c.height)
  ctx.restore()
  // a tiny "you are here" at the center
  ctx.fillStyle = '#f4f1ea'
  ctx.beginPath(); ctx.arc(cx, cx, Math.max(1.5, r * 0.004), 0, Math.PI * 2); ctx.fill()
  return { canvas: c, pad, dot: b.color }
}

export function renderSprite(b: Body, D: number): Sprite {
  switch (b.kind) {
    case 'rocky': return rocky(b, D)
    case 'earth': return earth(b, D)
    case 'gas':
    case 'ice': return banded(b, D)
    case 'ringed': return banded(b, D, true)
    case 'star': return star(b, D)
    case 'heliosphere': return heliosphere(b, D)
    case 'oort': return oort(b, D)
    case 'nebula': return nebula(b, D)
    case 'cluster': return cluster(b, D)
    case 'galaxy': return galaxy(b, D)
    case 'group': return group(b, D)
    case 'supercluster': return supercluster(b, D)
    case 'laniakea': return laniakea(b, D)
    case 'universe': return universe(b, D)
  }
}
