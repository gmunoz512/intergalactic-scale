/**
 * true-3d point-sprite objects: andromeda, the black eye galaxy (m64), ic 1101,
 * the pillars of creation and the tarantula nebula.
 *
 * each object is a few hundred thousand soft gaussian sprites rendered additively
 * into its own half-float target (so thousands of faint stars add up without banding),
 * then tone-mapped and composited as a single quad in the main scene. dust in the
 * galaxies is a multiplicative pass drawn between the stars behind the disc plane and
 * the stars in front of it, so the lanes block the far half of the bulge from any angle.
 */
import * as THREE from 'three'
import type { Body } from './data'
import { GLScene, glow, PREMUL, type BodyObj } from './gl'

const BASE = import.meta.env.BASE_URL + 'tex/'
type V3 = [number, number, number]
export type CloudKind = 'andromeda' | 'm64' | 'ic1101' | 'pillars' | 'tarantula'

// ---------- random + noise ----------
function mulberry(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
type R = () => number
const gauss = (r: R) => Math.sqrt(-2 * Math.log(r() + 1e-12)) * Math.cos(6.283185307 * r())
const sstep = (a: number, b: number, x: number) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t) }
const mix = (a: number, b: number, t: number) => a + (b - a) * t
const mix3 = (a: V3, b: V3, t: number): V3 => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)]
function h2(i: number, j: number, s: number) {
  let h = (Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(s, 1442695041)) | 0
  h = Math.imul(h ^ (h >>> 13), 1274126177)
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296
}
function vnoise(x: number, y: number, s: number) {
  const i = Math.floor(x), j = Math.floor(y), fx = x - i, fy = y - j
  const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy)
  const a = h2(i, j, s), b = h2(i + 1, j, s), c = h2(i, j + 1, s), d = h2(i + 1, j + 1, s)
  return (a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v) * 2 - 1
}
/** fbm with a rotation between octaves so no axis-aligned grain survives */
function fbm(x: number, y: number, s: number, oct = 4) {
  let a = 0.5, sum = 0
  for (let o = 0; o < oct; o++) {
    sum += a * vnoise(x, y, s + o * 17)
    const nx = x * 1.6 - y * 1.2, ny = x * 1.2 + y * 1.6
    x = nx + 3.1; y = ny + 1.7; a *= 0.5
  }
  return sum
}
function ridge(x: number, y: number, s: number) {
  let a = 0.5, sum = 0
  for (let o = 0; o < 4; o++) {
    const n = 1 - Math.abs(vnoise(x, y, s + o * 31)); sum += a * n * n * n
    const nx = x * 1.7 - y * 1.1, ny = x * 1.1 + y * 1.7
    x = nx + 2.7; y = ny + 0.4; a *= 0.55
  }
  return sum
}
/** scrambled halton points: the smooth light is sampled quasi-randomly, so it has almost no shot noise */
const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
class QMC {
  private i: number; private d = 0; private shift: number[]
  constructor(r: R) { this.shift = PRIMES.map(() => r()); this.i = 17 + Math.floor(r() * 4000) }
  /** start a new point; returns a generator of its successive coordinates */
  next(): R {
    this.i++; this.d = 0
    return () => {
      const b = PRIMES[Math.min(this.d, PRIMES.length - 1)]
      let f = 1, v = 0, n = this.i
      while (n > 0) { f /= b; v += f * (n % b); n = Math.floor(n / b) }
      v += this.shift[Math.min(this.d, PRIMES.length - 1)]
      this.d++
      return v - Math.floor(v)
    }
  }
}
/** hernquist radius (bulges, ellipticals): a·√u / (1 − √u) */
const hernquist = (r: R, a: number) => { const s = Math.sqrt(r() * 0.999); return (a * s) / (1 - s) }
function onSphere(r: R): V3 { const u = r() * 2 - 1, t = r() * 6.283185307, q = Math.sqrt(1 - u * u); return [q * Math.cos(t), q * Math.sin(t), u] }

// ---------- particle buffers ----------
/** positions + (rgb flux, size); flux is in (brightness × radius²), size ≈ 2σ in radii */
class Buf {
  p: Float32Array; c: Float32Array; n = 0; d: Uint8Array
  constructor(public cap: number) { this.p = new Float32Array(cap * 3); this.c = new Float32Array(cap * 4); this.d = new Uint8Array(cap) }
  add(x: number, y: number, z: number, col: V3, k: number, s: number) {
    if (this.n >= this.cap) return false
    const i = this.n++
    this.p[i * 3] = x; this.p[i * 3 + 1] = y; this.p[i * 3 + 2] = z
    this.c[i * 4] = col[0] * k; this.c[i * 4 + 1] = col[1] * k; this.c[i * 4 + 2] = col[2] * k; this.c[i * 4 + 3] = s
    this.d[i] = s < 0 ? 1 : 0
    return true
  }
  /** [diffuse, crisp] */
  split(): [Buf, Buf] {
    let nd = 0
    for (let i = 0; i < this.n; i++) nd += this.d[i]
    const a = new Buf(nd), b = new Buf(this.n - nd)
    for (let i = 0; i < this.n; i++) {
      const t = this.d[i] ? a : b, j = t.n++
      t.p.set(this.p.subarray(i * 3, i * 3 + 3), j * 3); t.c.set(this.c.subarray(i * 4, i * 4 + 4), j * 4)
    }
    return [a, b]
  }
  get full() { return this.n >= this.cap }
  /** diffuse sprites are stored with a negative size (a ±30% multiplier). here they get a size
   * matched to the local projected spacing (x/y in this frame), so light is smooth everywhere and
   * the total overdraw is fixed: Σ sprite area ≈ k² × object area, whatever the view */
  adapt(k: number, E: number, minS: number, maxS: number, G = 160) {
    const cnt = new Float32Array(G * G), cell = (2 * E) / G
    const idx = (i: number) => {
      const gx = Math.floor((this.p[i * 3] + E) / cell), gy = Math.floor((this.p[i * 3 + 1] + E) / cell)
      return gx < 0 || gy < 0 || gx >= G || gy >= G ? -1 : gy * G + gx
    }
    for (let i = 0; i < this.n; i++) if (this.c[i * 4 + 3] < 0) { const j = idx(i); if (j >= 0) cnt[j]++ }
    // a little smoothing of the counts so sizes don't step at cell borders
    const sm = boxBlur(cnt, G, G, 1, 2)
    for (let i = 0; i < this.n; i++) {
      const m = this.c[i * 4 + 3]
      if (m >= 0) continue
      const j = idx(i)
      const rho = j >= 0 ? Math.max(sm[j], 0.25) / (cell * cell) : 1
      this.c[i * 4 + 3] = Math.min(maxS, Math.max(minS, k / Math.sqrt(rho))) * -m
    }
  }
  /** shuffled so any prefix is an even subsample (used when quality steps down) */
  geometry(r: R) {
    const { p, c, n } = this
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1))
      for (let k = 0; k < 3; k++) { const t = p[i * 3 + k]; p[i * 3 + k] = p[j * 3 + k]; p[j * 3 + k] = t }
      for (let k = 0; k < 4; k++) { const t = c[i * 4 + k]; c[i * 4 + k] = c[j * 4 + k]; c[j * 4 + k] = t }
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(p.slice(0, n * 3), 3))
    g.setAttribute('aC', new THREE.BufferAttribute(c.slice(0, n * 4), 4))
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 10)
    return g
  }
}

const D = (r: R) => -(0.8 + 0.4 * r())   // "diffuse, size decided later"
/** diffuse sprite size in units of the local sample spacing (2σ); they render at 1/3 resolution */
const SMOOTH_K = 3.2
const LOW = 1 / 3

// ---------- image helpers ----------
type Img = { w: number; h: number; r: Float32Array; g: Float32Array; b: Float32Array }
const imgCache = new Map<string, Promise<Img>>()
function loadImg(file: string, w: number): Promise<Img> {
  const key = file + '@' + w
  let p = imgCache.get(key)
  if (!p) {
    p = (async () => {
      const im = new Image()
      im.crossOrigin = 'anonymous'
      im.src = BASE + file
      await im.decode()
      const h = Math.round((w * im.naturalHeight) / im.naturalWidth)
      const cv = document.createElement('canvas'); cv.width = w; cv.height = h
      const x = cv.getContext('2d', { willReadFrequently: true })!
      x.imageSmoothingQuality = 'high'
      x.drawImage(im, 0, 0, w, h)
      const d = x.getImageData(0, 0, w, h).data
      const r = new Float32Array(w * h), g = new Float32Array(w * h), b = new Float32Array(w * h)
      for (let i = 0; i < w * h; i++) { r[i] = d[i * 4] / 255; g[i] = d[i * 4 + 1] / 255; b[i] = d[i * 4 + 2] / 255 }
      return { w, h, r, g, b }
    })()
    imgCache.set(key, p)
  }
  return p
}
const lum = (im: Img, i: number) => 0.2126 * im.r[i] + 0.7152 * im.g[i] + 0.0722 * im.b[i]
function boxBlur(src: Float32Array, w: number, h: number, rad: number, passes = 3) {
  let a = src.slice(), b = new Float32Array(w * h)
  for (let p = 0; p < passes; p++) {
    for (let y = 0; y < h; y++) {
      let acc = 0; const o = y * w
      for (let x = -rad; x <= rad; x++) acc += a[o + Math.min(w - 1, Math.max(0, x))]
      for (let x = 0; x < w; x++) {
        b[o + x] = acc / (2 * rad + 1)
        acc += a[o + Math.min(w - 1, x + rad + 1)] - a[o + Math.max(0, x - rad)]
      }
    }
    for (let x = 0; x < w; x++) {
      let acc = 0
      for (let y = -rad; y <= rad; y++) acc += b[Math.min(h - 1, Math.max(0, y)) * w + x]
      for (let y = 0; y < h; y++) {
        a[y * w + x] = acc / (2 * rad + 1)
        acc += b[Math.min(h - 1, y + rad + 1) * w + x] - b[Math.max(0, y - rad) * w + x]
      }
    }
  }
  return a
}
function morph(src: Float32Array, w: number, h: number, max: boolean) {
  const out = new Float32Array(w * h)
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let v = src[y * w + x]
    for (let dy = -1; dy <= 1; dy++) {
      const yy = Math.min(h - 1, Math.max(0, y + dy))
      for (let dx = -1; dx <= 1; dx++) {
        const s = src[yy * w + Math.min(w - 1, Math.max(0, x + dx))]
        v = max ? Math.max(v, s) : Math.min(v, s)
      }
    }
    out[y * w + x] = v
  }
  return out
}
/** morphological opening (radius 2): removes stars and thin spikes, keeps the gas */
function opening(a: Float32Array, w: number, h: number) {
  return morph(morph(morph(morph(a, w, h, false), w, h, false), w, h, true), w, h, true)
}
/** alias-free importance sampling over a weight grid */
function cdf(wt: Float32Array) {
  const c = new Float64Array(wt.length)
  let s = 0
  for (let i = 0; i < wt.length; i++) { s += wt[i]; c[i] = s }
  return { c, total: s, pick(u: number) { const t = u * s; let lo = 0, hi = c.length - 1; while (lo < hi) { const m = (lo + hi) >> 1; if (c[m] < t) lo = m + 1; else hi = m } return lo } }
}

// ---------- generators ----------
type Layer = { buf: Buf; split: boolean; spin: boolean }
type Gen = { layers: Layer[]; dust?: Buf; extent: [number, number] }

const ANDROMEDA_ORIENT = new THREE.Euler(-1.3, 0, -0.62, 'ZXY')
const M64_ORIENT = new THREE.Euler(-0.99, 0, 0.91, 'ZXY')
const IC_ORIENT = new THREE.Euler(0.55, 0.35, 0.62, 'ZXY')

/** a sky-space point (radii) expressed in a galaxy frame, so satellites land where they belong at the default view */
function skyToLocal(e: THREE.Euler, x: number, y: number, z: number): V3 {
  const v = new THREE.Vector3(x, y, z).applyQuaternion(new THREE.Quaternion().setFromEuler(e).invert())
  return [v.x, v.y, v.z]
}

function genAndromeda(N: number, r: R): Gen {
  const disk = new Buf(Math.round(N * 0.93)), sats = new Buf(Math.round(N * 0.07)), dust = new Buf(Math.round(N * 0.2))
  const gold: V3 = [1.0, 0.88, 0.7], grey: V3 = [0.66, 0.6, 0.96], blue: V3 = [0.7, 0.62, 1.0], pink: V3 = [1.0, 0.42, 0.78], warm: V3 = [1.0, 0.8, 0.62], hot: V3 = [1.0, 0.96, 0.88]
  const tp = Math.tan(0.12)
  const structure = (x: number, y: number) => {
    const rr = Math.hypot(x, y), th = Math.atan2(y, x)
    const ph = th - Math.log(Math.max(rr, 0.02)) / tp
    const arms = Math.pow(0.5 + 0.5 * Math.cos(2 * ph), 2.2)
    const zone = sstep(0.12, 0.3, rr) * sstep(1.12, 0.6, rr)
    const frag = sstep(-0.3, 0.5, fbm(x * 6, y * 6, 7, 5))
    const ring = Math.exp(-(((rr - 0.55) / 0.07) ** 2)) + 0.6 * Math.exp(-(((rr - 0.8) / 0.06) ** 2))
    return { rr, ph, zone, frag, s: Math.max(arms * (0.45 + 0.9 * frag) * 0.76 + frag * frag * 0.33, ring * (0.6 + 0.4 * frag)) * zone }
  }
  const tint = (c: V3, diffuse = false): V3 => {
    const t = r()
    const c2 = t < 0.14 ? mix3(c, [0.78, 0.82, 1.0], diffuse ? 0.15 : 0.5) : t > 0.9 ? mix3(c, [1.0, 0.74, 0.52], diffuse ? 0.15 : 0.5) : c
    const k = diffuse ? 1 + 0.06 * gauss(r) : Math.exp(0.45 * gauss(r))
    return [c2[0] * k, c2[1] * k, c2[2] * k]
  }
  // disc (thin + a thicker old disc), with arm and ring structure carried by density
  const nDisk = disk.cap * 0.55
  const LD = 0.5 / nDisk
  const qm = new QMC(r)
  for (let k = 0; k < nDisk;) {
    const diffuse = r() < 0.8
    const u = diffuse ? qm.next() : r
    const rr0 = -0.24 * Math.log(u() * u() + 1e-12)
    if (rr0 > 1.18) continue
    const th = u() * 6.283185307, x = Math.cos(th) * rr0, y = Math.sin(th) * rr0
    const st = structure(x, y)
    if (u() > 0.25 + 0.75 * Math.min(1, st.s)) continue
    k++
    const thick = r() < 0.18 ? 0.05 + 0.03 * rr0 : 0.012 + 0.02 * rr0
    const bf = Math.exp(-rr0 / 0.16)
    let col = mix3(grey, gold, bf)
    col = mix3(col, warm, Math.exp(-rr0 / 0.6) * 0.45 * (1 - bf))
    col = mix3(col, mix3(col, blue, 0.4), Math.min(1, st.s) * (1 - bf))
    disk.add(x, y, gauss(u) * thick, tint(col, diffuse), LD * (diffuse ? 1.2 : 0.2 * Math.exp(0.8 * gauss(r))), diffuse ? D(r) : 0.003)
  }
  // star-forming knots along the arms and rings: pink h-ii and blue-white young clusters
  for (let c = 0; c < 420 && !disk.full;) {
    const rr0 = 0.25 + r() * 0.85, th = r() * 6.283185307, x = Math.cos(th) * rr0, y = Math.sin(th) * rr0
    const st = structure(x, y)
    if (st.s < 0.55 || r() > st.s) continue
    c++
    const isPink = r() < 0.45, m = 4 + Math.floor(r() * r() * 26), sz = 0.004 + 0.006 * r()
    const col = isPink ? pink : mix3(blue, [0.85, 0.9, 1.0], 0.5)
    for (let j = 0; j < m; j++) disk.add(x + gauss(r) * sz, y + gauss(r) * sz, gauss(r) * 0.006, tint(col), 0.03 / (420 * 12), 0.003 + 0.004 * r())
  }
  // bulge: a warm, slightly flattened hernquist spheroid, whiter toward the middle
  const nB = disk.cap * 0.25
  for (let k = 0; k < nB; k++) {
    const diffuse = r() < 0.85
    const u = diffuse ? qm.next() : r
    const rr0 = hernquist(u, 0.07)
    if (rr0 > 0.7) { k--; continue }
    const [dx, dy, dz] = onSphere(u)
    const col = mix3(gold, hot, Math.exp(-rr0 / 0.05))
    disk.add(dx * rr0, dy * rr0 * 0.92, dz * rr0 * 0.7, tint(col, diffuse), (0.3 / nB) * (diffuse ? 1.15 : 0.15 * Math.exp(0.7 * gauss(r))), diffuse ? D(r) : 0.003)
  }
  // nucleus
  for (let k = 0; k < 1800; k++) disk.add(gauss(r) * 0.011, gauss(r) * 0.011, gauss(r) * 0.009, hot, 0.04 / 1800, 0.008 + 0.01 * r())
  // halo: faint and round, so an edge-on view still has volume around it
  while (!disk.full) {
    const rr0 = hernquist(r, 0.32)
    if (rr0 > 1.45) continue
    const [dx, dy, dz] = onSphere(r)
    disk.add(dx * rr0, dy * rr0, dz * rr0 * 0.8, tint([0.95, 0.88, 0.82]), (0.012 / (disk.cap * 0.1)) * Math.exp(0.8 * gauss(r)), 0.003)
  }
  // m32 (compact, just in front) and m110 (bigger, softer, behind)
  const sat = (sx: number, sy: number, sz: number, a: number, cut: number, flat: number, ang: number, n: number, L: number) => {
    const [cx, cy, cz] = skyToLocal(ANDROMEDA_ORIENT, sx, sy, sz)
    const ca = Math.cos(ang), sa = Math.sin(ang)
    for (let k = 0; k < n;) {
      const diffuse = r() < 0.8
      const u = diffuse ? qm.next() : r
      const rr0 = hernquist(u, a)
      if (rr0 > cut) continue
      k++
      const [dx, dy, dz] = onSphere(u)
      // shape in the sky plane, then carried into the galaxy frame
      const px = dx * rr0, py = dy * rr0 * flat
      const [lx, ly, lz] = skyToLocal(ANDROMEDA_ORIENT, px * ca - py * sa, px * sa + py * ca, dz * rr0 * flat)
      const col = mix3([1.0, 0.86, 0.7], hot, Math.exp(-rr0 / (a * 0.8)))
      sats.add(cx + lx, cy + ly, cz + lz, tint(col, diffuse), (L / n) * (diffuse ? 1.2 : 0.2), diffuse ? D(r) : 0.003)
    }
  }
  sat(0.2, 0.3, 0.2, 0.01, 0.06, 0.85, 0, Math.round(sats.cap * 0.4), 0.0065)
  sat(-0.42, -0.55, -0.25, 0.03, 0.15, 0.6, 0.9, Math.round(sats.cap * 0.6), 0.011)
  // dust: patchy lanes riding the rings and the inner edges of the arms
  const T = 1.0 / dust.cap
  while (!dust.full) {
    const rr0 = 0.18 + r() * 1.0, th = r() * 6.283185307, x = Math.cos(th) * rr0, y = Math.sin(th) * rr0
    const st = structure(x, y)
    const ringD = Math.exp(-(((rr0 - 0.47) / 0.035) ** 2)) + 0.8 * Math.exp(-(((rr0 - 0.68) / 0.04) ** 2)) + 0.5 * Math.exp(-(((rr0 - 0.34) / 0.03) ** 2)) + 0.35 * Math.exp(-(((rr0 - 0.88) / 0.04) ** 2))
    const armIn = Math.pow(0.5 + 0.5 * Math.cos(2 * (st.ph + 0.25)), 3)
    const patchy = sstep(-0.2, 0.4, fbm(x * 5, y * 5, 4))
    const rd = ridge(x * 9, y * 9, 9)
    const d = (ringD + armIn * 0.4 * st.zone) * (0.3 + 0.7 * patchy) * (0.35 + 0.65 * rd)
    if (r() * 1.3 > d) continue
    const sz = 0.01 + 0.022 * r()
    dust.add(x, y, gauss(r) * 0.006, [0.5, 0.8, 0.9], T * (0.6 + 0.8 * r()) * sz * sz * 2500, sz)
  }
  disk.adapt(SMOOTH_K, 1.5, 0.004, 0.1)
  sats.adapt(SMOOTH_K, 1.5, 0.003, 0.04)
  return { layers: [{ buf: disk, split: true, spin: true }, { buf: sats, split: true, spin: false }], dust, extent: [1.35, 1.35] }
}

async function genM64(N: number, r: R): Promise<Gen> {
  const im = await loadImg('m64.webp', 520)
  const { w, h } = im
  const L = new Float32Array(w * h)
  for (let i = 0; i < w * h; i++) L[i] = lum(im, i)
  const Ls = boxBlur(L, w, h, 1, 2), Lbig = boxBlur(L, w, h, 18, 3)
  const Rs = boxBlur(im.r, w, h, 2, 2), Gs = boxBlur(im.g, w, h, 2, 2), Bs = boxBlur(im.b, w, h, 2, 2)
  // disc frame -> hubble image: same orientation as the default 3d view
  const q = new THREE.Quaternion().setFromEuler(M64_ORIENT), v = new THREE.Vector3()
  const Wimg = 2 / 0.82, Himg = Wimg * (2560 / 2422), cu = 0.495, cv = 0.435
  const at = (x: number, y: number) => {
    v.set(x, y, 0).applyQuaternion(q)
    const u = cu + v.x / Wimg, vv = cv - v.y / Himg
    const px = Math.min(w - 1, Math.max(0, Math.round(u * w))), py = Math.min(h - 1, Math.max(0, Math.round(vv * h)))
    return py * w + px
  }
  // the disc's own colour by radius, measured from the image with the dust pixels left out
  const NB = 28, acc = new Float64Array(NB * 4)
  for (let k = 0; k < 60000; k++) {
    const rr0 = Math.sqrt(r()) * 1.35, th = r() * 6.283185307, i = at(Math.cos(th) * rr0, Math.sin(th) * rr0)
    if (Ls[i] < Lbig[i] * 0.8) continue
    const bi = Math.min(NB - 1, Math.floor((rr0 / 1.35) * NB))
    acc[bi * 4] += Rs[i]; acc[bi * 4 + 1] += Gs[i]; acc[bi * 4 + 2] += Bs[i]; acc[bi * 4 + 3]++
  }
  const ring = (rr0: number): V3 => {
    const bi = Math.min(NB - 1, Math.floor((rr0 / 1.35) * NB)), n = Math.max(1, acc[bi * 4 + 3])
    const c: V3 = [acc[bi * 4] / n, acc[bi * 4 + 1] / n, acc[bi * 4 + 2] / n]
    const m = Math.max(c[0], c[1], c[2], 1e-3)
    return [c[0] / m, c[1] / m, c[2] / m]
  }
  const disk = new Buf(Math.round(N * 0.9)), dust = new Buf(Math.round(N * 0.22))
  const tint = (c: V3, amt = 1, diffuse = false): V3 => {
    const t = r()
    const c2 = t < 0.12 ? mix3(c, [0.72, 0.8, 1.0], 0.45 * amt) : t > 0.9 ? mix3(c, [1.0, 0.72, 0.5], 0.4 * amt) : c
    const k = diffuse ? 1 + 0.06 * gauss(r) : Math.exp(0.4 * gauss(r))
    return [c2[0] * k, c2[1] * k, c2[2] * k]
  }
  const qm = new QMC(r)
  // disc stars: density follows the (dust-filled) hubble light, compressed so the faint outer disc is still well sampled
  const nDisk = disk.cap * 0.62
  const bright = (i: number) => Math.max(Ls[i], Lbig[i] * 0.92) - 0.035
  let fluxSum = 0, sumB = 0, sumCore = 0, tries = 0
  const pend: [number, number, number, V3, number, number][] = []
  for (; pend.length < nDisk && tries < nDisk * 30; tries++) {
    const diffuse = r() < 0.8
    const u = diffuse ? qm.next() : r
    const rr0 = Math.sqrt(u()) * 1.32, th = u() * 6.283185307, x = Math.cos(th) * rr0, y = Math.sin(th) * rr0
    const i = at(x, y)
    const b0 = Math.max(0, bright(i)) * sstep(1.32, 1.0, rr0)
    const b = b0 * sstep(0.03, 0.28, rr0)
    sumB += b; sumCore += b0 - b
    const p = Math.pow(b, 0.5)
    if (u() * 0.75 > p) continue
    const f = b / Math.max(p, 1e-4)
    const col = mix3(ring(rr0), [Rs[i], Gs[i], Bs[i]].map((c) => c / Math.max(Rs[i], Gs[i], Bs[i], 1e-3)) as V3, Ls[i] > Lbig[i] * 0.9 ? 0.5 : 0)
    const thick = 0.012 + 0.018 * rr0
    pend.push([x, y, gauss(u) * thick, tint(col, 1, diffuse), f * (diffuse ? 1.2 : 0.2 * Math.exp(0.8 * gauss(r))), diffuse ? D(r) : 0.003])
    fluxSum += f
  }
  // uniform disc samples: mean brightness × projected disc area = the light the image has there
  const projA = Math.PI * 1.32 * 1.32 * Math.cos(M64_ORIENT.x)
  const diskL = (projA * sumB) / tries, bulgeL = (projA * sumCore) / tries
  for (const [x, y, z, c, f, s] of pend) disk.add(x, y, z, c, (f / fluxSum) * diskL, s)
  // bulge: compact, bright, yellow-white
  const core: V3 = [1.0, 0.93, 0.76], nucleus: V3 = [1.0, 0.97, 0.9]
  const nB = disk.cap * 0.26
  for (let k = 0; k < nB;) {
    const diffuse = r() < 0.85
    const u = diffuse ? qm.next() : r
    const rr0 = hernquist(u, 0.075)
    if (rr0 > 0.6) continue
    k++
    const [dx, dy, dz] = onSphere(u)
    disk.add(dx * rr0, dy * rr0, dz * rr0 * 0.75, tint(mix3(ring(0.15), core, Math.exp(-rr0 / 0.06)), 0.5, diffuse), (bulgeL * 1.15 / nB) * (diffuse ? 1.15 : 0.15), diffuse ? D(r) : 0.003)
  }
  for (let k = 0; k < 1500; k++) disk.add(gauss(r) * 0.01, gauss(r) * 0.01, gauss(r) * 0.008, nucleus, (bulgeL * 0.05) / 1500, 0.008 + 0.01 * r())
  // young clusters and h-ii knots strung along the dust band (blue specks and pink knots in the hubble image)
  const knotCap = Math.round(N * 0.03)
  for (let tries = 0, made = 0; made < knotCap && !disk.full && tries < 400000; tries++) {
    const rr0 = 0.12 + Math.sqrt(r()) * 0.75, th = r() * 6.283185307, x = Math.cos(th) * rr0, y = Math.sin(th) * rr0
    const i = at(x, y)
    const res = L[i] - Ls[i] * 0.5 - Lbig[i] * 0.5
    const blueish = im.b[i] - im.r[i], pinkish = im.r[i] - im.g[i]
    const kind = blueish > 0.05 ? 1 : pinkish > 0.14 ? 2 : 0
    // only real specks (well above their surroundings) inside the dusty inner disc
    if (!kind || rr0 > 0.62 || res < 0.05 || r() > res * 5) continue
    const col: V3 = kind === 1 ? [0.55, 0.7, 1.0] : [1.0, 0.42, 0.6]
    const m = 2 + Math.floor(r() * 6), sz = 0.003 + 0.004 * r()
    for (let j = 0; j < m; j++, made++) disk.add(x + gauss(r) * sz, y + gauss(r) * sz, gauss(r) * 0.005, tint(col, 0.3), (kind === 1 ? 0.0000025 : 0.000005) * Math.exp(0.6 * gauss(r)), 0.003)
  }
  // dust: sampled from how much darker each point is than its surroundings, inside the inner disc
  const T = 1.0 / dust.cap
  for (let tries = 0; !dust.full && tries < dust.cap * 60; tries++) {
    const rr0 = 0.06 + Math.sqrt(r()) * 0.9, th = r() * 6.283185307, x = Math.cos(th) * rr0, y = Math.sin(th) * rr0
    const i = at(x, y)
    const dark = Math.max(0, 1 - Ls[i] / Math.max(Lbig[i] * 0.95, 1e-3))
    const brown = sstep(-0.02, 0.08, Rs[i] - Bs[i])
    const d = Math.pow(dark, 1.1) * (0.35 + 0.65 * brown) * sstep(0.95, 0.6, rr0) * 2.2
    if (r() > d) continue
    const sz = 0.008 + 0.016 * r()
    dust.add(x, y, gauss(r) * 0.007, [0.55, 0.82, 0.95], T * (0.6 + 0.8 * r()) * sz * sz * 10000, sz)
  }
  disk.adapt(SMOOTH_K, 1.5, 0.004, 0.1)
  return { layers: [{ buf: disk, split: true, spin: true }], dust, extent: [1.4, 1.4] }
}

function genIC1101(N: number, r: R): Gen {
  const main = new Buf(Math.round(N * 0.82)), gals = new Buf(Math.round(N * 0.18))
  const hot: V3 = [1.0, 0.95, 0.84], mid: V3 = [1.0, 0.85, 0.62], out: V3 = [0.98, 0.78, 0.55]
  const tint = (c: V3, diffuse = false): V3 => {
    const t = r()
    const c2 = t < 0.06 ? mix3(c, [0.85, 0.88, 1.0], diffuse ? 0.1 : 0.35) : t > 0.85 ? mix3(c, [1.0, 0.7, 0.45], diffuse ? 0.1 : 0.35) : c
    const k = diffuse ? 1 + 0.06 * gauss(r) : Math.exp(0.35 * gauss(r))
    return [c2[0] * k, c2[1] * k, c2[2] * k]
  }
  const qm = new QMC(r)
  // soft triaxial "football": hernquist profile on axes 1 : 0.68 : 0.5, reaching the 1.6-radius halo
  const ax: V3 = [1, 0.68, 0.5]
  const nM = main.cap * 0.93
  for (let k = 0; k < nM;) {
    const diffuse = r() < 0.88
    const u = diffuse ? qm.next() : r
    const rr0 = hernquist(u, 0.2)
    if (rr0 > 1.7) continue
    k++
    const [dx, dy, dz] = onSphere(u)
    const col = rr0 < 0.3 ? mix3(mid, hot, Math.exp(-rr0 / 0.08)) : mix3(mid, out, sstep(0.3, 1.3, rr0))
    main.add(dx * rr0 * ax[0], dy * rr0 * ax[1], dz * rr0 * ax[2], tint(col, diffuse), (0.8 / nM) * (diffuse ? 1.12 : 0.04 * Math.exp(0.8 * gauss(r))), diffuse ? D(r) : 0.003)
  }
  for (let k = 0; k < 2200; k++) main.add(gauss(r) * 0.018, gauss(r) * 0.013, gauss(r) * 0.01, hot, 0.04 / 2200, 0.01 + 0.012 * r())
  // globular clusters swarming the halo
  while (!main.full) {
    const rr0 = hernquist(r, 0.45)
    if (rr0 > 1.8) continue
    const [dx, dy, dz] = onSphere(r)
    main.add(dx * rr0, dy * rr0 * 0.8, dz * rr0 * 0.7, tint([1, 0.9, 0.75]), 0.000004 * Math.exp(0.7 * gauss(r)), 0.003)
  }
  // abell 2029 members at their own depths (so they parallax as it turns), and faint background galaxies further out
  const members = 30, bgN = 22
  const per = gals.cap / (members * 1.0 + bgN * 0.25)
  for (let g = 0; g < members + bgN; g++) {
    const bg = g >= members
    const th = r() * 6.283185307, rad = bg ? 1.5 + r() * 0.5 : 0.5 + Math.pow(r(), 0.7) * 1.1
    const cx = Math.cos(th) * rad, cy = Math.sin(th) * rad * 0.8, cz = (r() * 2 - 1) * (bg ? 0.4 : 0.8) - (bg ? 1.2 : 0)
    const size = bg ? 0.008 + 0.012 * r() : 0.012 + r() * r() * 0.06
    const spiral = r() < (bg ? 0.4 : 0.2)
    const n = Math.round(per * (bg ? 0.25 : 0.4 + 1.2 * (size / 0.07)))
    const L = (bg ? 0.0007 : 0.0028) * (0.4 + (size / 0.07) * 1.5)
    const col: V3 = spiral ? [0.86, 0.88, 1.0] : r() < 0.3 ? [1, 0.92, 0.8] : [1, 0.86, 0.66]
    const qq = new THREE.Quaternion().setFromEuler(new THREE.Euler(r() * 3, r() * 3, r() * 3)), vv = new THREE.Vector3()
    for (let k = 0; k < n; k++) {
      if (spiral) {
        const rr0 = -size * 0.35 * Math.log(r() * r() + 1e-9), a = r() * 6.283185307
        const arm = Math.pow(0.5 + 0.5 * Math.cos(2 * (a - Math.log(Math.max(rr0 / size, 0.05)) * 3)), 2)
        if (r() > 0.3 + 0.7 * arm && rr0 > size * 0.15) { k--; continue }
        vv.set(Math.cos(a) * rr0, Math.sin(a) * rr0, gauss(r) * size * 0.05)
      } else {
        const rr0 = Math.min(hernquist(r, size * 0.25), size * 1.6), [dx, dy, dz] = onSphere(r)
        vv.set(dx * rr0, dy * rr0 * 0.75, dz * rr0 * 0.6)
      }
      vv.applyQuaternion(qq)
      const nuc = vv.length() < size * 0.12
      gals.add(cx + vv.x, cy + vv.y, cz + vv.z, tint(nuc ? [1, 0.93, 0.8] : col), (L / n) * 0.6, r() < 0.85 ? D(r) : 0.003)
    }
  }
  main.adapt(SMOOTH_K, 1.9, 0.004, 0.14)
  gals.adapt(1.4, 2.0, 0.002, 0.012, 320)
  return { layers: [{ buf: main, split: false, spin: false }, { buf: gals, split: false, spin: false }], extent: [1.95, 1.95] }
}

/** image -> 3d point cloud (pillars, tarantula). gas pixels are importance-sampled and given depth
 * by a per-object function; compact stars are lifted out of the gas and scattered through the volume */
type DepthFn = (x: number, y: number, u: number, v: number, c: V3, r: R) => number
async function genImageCloud(N: number, r: R, o: { file: string; aspect: number; Wimg: number; mask: [number, number]; depth: DepthFn; starZ: (x: number, y: number, r: R) => number; black: number; clip?: number; starMin: number; extra?: (b: Buf, r: R) => void }): Promise<Gen> {
  // grid sized so each pixel gets about one gas sample: a jittered, noise-free reconstruction
  const im = await loadImg(o.file, Math.round(Math.sqrt((N * 0.88) / o.aspect)))
  const { w, h } = im
  const Himg = (o.Wimg * h) / w, pw = o.Wimg / w
  const L = new Float32Array(w * h)
  for (let i = 0; i < w * h; i++) L[i] = lum(im, i)
  const Ro = opening(im.r, w, h), Go = opening(im.g, w, h), Bo = opening(im.b, w, h)
  const Lo = new Float32Array(w * h)
  for (let i = 0; i < w * h; i++) Lo[i] = 0.2126 * Ro[i] + 0.7152 * Go[i] + 0.0722 * Bo[i]
  const res = new Float32Array(w * h)
  for (let i = 0; i < w * h; i++) res[i] = L[i] - Lo[i]
  // compact peaks in the residual are stars; their footprint (and thin spikes near bright ones) drop out of the gas
  const gasR = im.r.slice(), gasG = im.g.slice(), gasB = im.b.slice()
  const stars: [number, number, V3, number][] = []
  for (let y = 3; y < h - 3; y++) for (let x = 3; x < w - 3; x++) {
    const i = y * w + x, v0 = res[i]
    if (v0 < o.starMin) continue
    let peak = true
    for (let dy = -1; dy <= 1 && peak; dy++) for (let dx = -1; dx <= 1; dx++) if ((dx || dy) && res[i + dy * w + dx] > v0) { peak = false; break }
    if (!peak) continue
    const ringv = (res[i - 3] + res[i + 3] + res[i - 3 * w] + res[i + 3 * w]) / 4
    if (ringv > v0 * 0.45) continue
    const rad = v0 > 0.5 ? 12 : v0 > 0.25 ? 5 : 2
    const f: V3 = [0, 0, 0]
    let sx = 0, sy = 0, sw = 0
    for (let dy = -rad; dy <= rad; dy++) for (let dx = -rad; dx <= rad; dx++) {
      const xx = x + dx, yy = y + dy
      if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue
      const j = yy * w + xx, d2 = dx * dx + dy * dy
      if (d2 > rad * rad) continue
      if (d2 > 6 && res[j] < 0.04) continue   // far from the core only the thin bright bits (spikes) go
      const er = Math.max(0, im.r[j] - Ro[j]), eg = Math.max(0, im.g[j] - Go[j]), eb = Math.max(0, im.b[j] - Bo[j])
      if (d2 <= 6) { f[0] += er; f[1] += eg; f[2] += eb; const ww = er + eg + eb; sx += dx * ww; sy += dy * ww; sw += ww }
      gasR[j] = Ro[j]; gasG[j] = Go[j]; gasB[j] = Bo[j]
    }
    stars.push([x + 0.5 + sx / Math.max(sw, 1e-6), y + 0.5 + sy / Math.max(sw, 1e-6), f, v0])
  }
  // optional: clip the unresolved star speckle out of the gas (it reads as grain once it's a point cloud)
  if (o.clip) for (let i = 0; i < w * h; i++) {
    gasR[i] = Math.min(gasR[i], Ro[i] + o.clip); gasG[i] = Math.min(gasG[i], Go[i] + o.clip); gasB[i] = Math.min(gasB[i], Bo[i] + o.clip)
  }
  // importance for the gas: brightness^0.3 above the black level, faded by the soft elliptical mask
  const wt = new Float32Array(w * h), maskA = new Float32Array(w * h)
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x
    const qx = ((x + 0.5) / w - 0.5) / o.mask[0], qy = ((y + 0.5) / h - 0.5) / o.mask[1]
    const m = sstep(1.0, 0.62, Math.hypot(qx, qy))
    maskA[i] = m
    const l = 0.2126 * gasR[i] + 0.7152 * gasG[i] + 0.0722 * gasB[i] - o.black
    wt[i] = l > 0.004 && m > 0 ? Math.pow(l, 0.3) * m : 0
  }
  const pick = cdf(wt)
  const nStarsMax = Math.min(stars.length, Math.round(N * 0.025))
  const gas = new Buf(N - nStarsMax * 2 - 6000), st = new Buf(nStarsMax * 2 + 6000)
  const nG = gas.cap
  const blk = o.black
  for (let k = 0; k < nG; k++) {
    // stratified through the cdf: each pixel gets its fair share of samples, so no shot noise
    const i = pick.pick((k + r()) / nG)
    const px = i % w, py = (i / w) | 0
    const fx = px + 0.5 + gauss(r) * 0.3, fy = py + 0.5 + gauss(r) * 0.3
    const u = fx / w, v = fy / h
    const c: V3 = [Math.max(0, gasR[i] - blk), Math.max(0, gasG[i] - blk), Math.max(0, gasB[i] - blk)]
    // this sample stands for (pixel area / its probability / n) of the image
    const k0 = (pw * pw * pick.total) / (wt[i] * nG) * maskA[i]
    const x = (u - 0.5) * o.Wimg, y = (0.5 - v) * Himg
    const z = o.depth(x, y, u, v, c, r)
    const jit = 1 + 0.03 * gauss(r)
    // kernel matched to the local sample spacing: smooth where sparse, fine where dense
    const spacing = Math.min(4, Math.max(0.7, 1 / Math.sqrt((nG * wt[i]) / pick.total)))
    gas.add(x, y, z, [c[0] * jit, c[1] * jit, c[2] * jit], k0, pw * spacing * (1.5 + 0.4 * r()))
  }
  // stars (brightest first so the cap keeps the ones that matter)
  stars.sort((a, b) => b[3] - a[3])
  for (let s = 0; s < nStarsMax; s++) {
    const [sx, sy, f] = stars[s]
    const u = sx / w, v = sy / h
    const qx = (u - 0.5) / o.mask[0], qy = (v - 0.5) / o.mask[1]
    const m = sstep(1.0, 0.62, Math.hypot(qx, qy))
    if (m <= 0) continue
    const x = (u - 0.5) * o.Wimg, y = (0.5 - v) * Himg, z = o.starZ(x, y, r)
    const fl = pw * pw * m
    st.add(x, y, z, f, fl * 0.85, pw * 0.7)
    if (stars[s][3] > 0.25) st.add(x, y, z, f, fl * 0.35, pw * 5)   // soft glow around the bright ones
  }
  o.extra?.(st, r)
  return { layers: [{ buf: gas, split: false, spin: false }, { buf: st, split: false, spin: false }], extent: [o.Wimg / 2, Himg / 2] }
}

// pillars: axes traced on the 722×900 preview, [x, y, depth (radii, + toward you), half-width (px)]
const PILLAR_AXES: [number, number, number, number][][] = [
  [[40, 900, 0.45, 150], [120, 700, 0.4, 110], [170, 560, 0.33, 55], [205, 430, 0.28, 22]],   // left, nearest
  [[60, 900, 0.66, 60], [140, 810, 0.62, 45], [205, 745, 0.6, 25]],                            // small one, lower left
  [[420, 640, 0.05, 60], [360, 470, 0.0, 70], [320, 330, -0.06, 55], [380, 230, -0.16, 40], [470, 140, -0.26, 45], [575, 80, -0.34, 48]], // the tallest, leaning back
  [[430, 470, -0.2, 42], [520, 380, -0.28, 36], [632, 262, -0.36, 26]],                        // right
  [[520, 520, -0.34, 22], [575, 450, -0.4, 20], [630, 400, -0.46, 18]],                        // right finger
]

function pillarsDepth(Wimg: number, Himg: number): DepthFn {
  const toW = (px: number, py: number): [number, number] => [(px / 722 - 0.5) * Wimg, (0.5 - py / 900) * Himg]
  const segs: { ax: number; ay: number; bx: number; by: number; za: number; zb: number; wa: number; wb: number }[] = []
  for (const axis of PILLAR_AXES) for (let k = 0; k < axis.length - 1; k++) {
    const [a, b] = [axis[k], axis[k + 1]]
    const [ax, ay] = toW(a[0], a[1]), [bx, by] = toW(b[0], b[1])
    segs.push({ ax, ay, bx, by, za: a[2], zb: b[2], wa: (a[3] / 722) * Wimg, wb: (b[3] / 722) * Wimg })
  }
  return (x, y, u, v, c, r) => {
    // pillarness: warm (orange/brown) gas vs the blue ionized glow
    const warmth = (c[0] - c[2]) / Math.max(0.05, c[0] + c[1] + c[2])
    const P = sstep(-0.04, 0.16, warmth)
    let best = 1e9, bz = 0, bw = 1
    for (const s of segs) {
      const dx = s.bx - s.ax, dy = s.by - s.ay
      const t = Math.max(0, Math.min(1, ((x - s.ax) * dx + (y - s.ay) * dy) / (dx * dx + dy * dy)))
      const wv = mix(s.wa, s.wb, t)
      const d = Math.hypot(x - s.ax - dx * t, y - s.ay - dy * t) / wv
      if (d < best) { best = d; bz = mix(s.za, s.zb, t); bw = wv }
    }
    const inPillar = P * sstep(1.5, 0.95, best)
    if (r() < inPillar) {
      // a round column: fill the chord through it at this distance from the axis
      const e = Math.min(best / 1.3, 1)
      const chord = Math.sqrt(Math.max(0, 1 - e * e))
      return bz + (r() * 2 - 1) * bw * (0.25 + 0.75 * chord) * 0.95
    }
    if (P > 0.35) return -0.1 + 0.35 * fbm(u * 3, v * 3, 5) + gauss(r) * 0.035
    // the blue glow: a thick, gently curved wall of gas behind the pillars
    const bowl = 0.35 * ((u - 0.5) ** 2 + (v - 0.5) ** 2)
    return -0.6 + bowl + 0.2 * fbm(u * 2.5, v * 2.5, 11) + gauss(r) * 0.04
  }
}

function tarantulaDepth(): DepthFn {
  const cx = -0.398, cy = 0
  return (x, y, u, v, c, r) => {
    const d = Math.hypot(x - cx, y - cy)
    const n1 = fbm(u * 3.2, v * 3.2, 21), n2 = fbm(u * 7, v * 7, 23)
    // r136 has blown a cavity: gas near it sits on a lumpy shell, filaments at different depths around the rim
    const Rs = 0.55 + 0.3 * n1
    // a smooth, continuous sheet (no sign flips, no vertical rims) bulging toward or away from us
    const side = Math.tanh(2.5 * n1 + 0.4)
    const shell = side * 0.55 * Math.max(0, Rs * Rs - d * d) / Rs
    const far = sstep(Rs * 0.8, Rs * 1.3, d)
    const l = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
    const brownDark = sstep(0.02, 0.12, c[0] - c[2]) * sstep(0.25, 0.05, l)
    return mix(shell, 0.35 * n1 + 0.1 * n2, far) + brownDark * 0.22 + gauss(r) * (0.03 + 0.05 * sstep(0.3, 0.05, l))
  }
}

// ---------- shaders ----------
const PT_VERT = /* glsl */ `
attribute vec4 aC;
uniform float uPPU, uMinPx, uMaxPx, uK, uSide;
uniform vec3 uN;
varying vec3 vC; varying float vR;
void main(){
  vec4 mv = modelViewMatrix*vec4(position, 1.0);
  // disc galaxies draw in two halves (behind / in front of the disc plane) around the dust pass
  if (uSide != 0.0 && dot(mv.xyz, uN)*uN.z*uSide > 0.0) { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); gl_PointSize = 0.0; vC = vec3(0.0); vR = 1.0; return; }
  gl_Position = projectionMatrix*mv;
  float sig = 0.5*aC.w*uPPU;
  float sg = max(sig, uMinPx);
  // flux-conserving: a sprite clamped to the minimum size spreads the same light over more pixels
  vC = aC.rgb*uK*uPPU*uPPU/(6.2831853*sg*sg);
  float ps = min(sg*5.0, uMaxPx);
  gl_PointSize = ps;
  vR = ps/sg;
}`
const PT_FRAG = /* glsl */ `
varying vec3 vC; varying float vR;
uniform float uDust;
void main(){
  vec2 q = (gl_PointCoord - 0.5)*vR;
  float g = exp(-0.5*dot(q, q));
  if (g < 0.01) discard;
  if (uDust > 0.5) gl_FragColor = vec4(1.0 - exp(-vC*g), 1.0);
  else gl_FragColor = vec4(vC*g, 1.0);
}`
const COMP_FRAG = /* glsl */ `
uniform sampler2D tMap, tLo; uniform vec2 uUv, uUvLo; uniform float opacity, uExp, uKnee, uSat, uEnc;
varying vec2 vUv;
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
vec3 knee(vec3 x){ return mix(x, 0.7 + 0.3*(1.0 - exp(-(x - 0.7)/0.3)), step(0.7, x)); }
void main(){
  vec3 hdr = max((texture2D(tMap, vUv*uUv).rgb + texture2D(tLo, vUv*uUvLo).rgb)*uEnc*uExp, 0.0);
  vec3 c = uKnee > 0.5 ? knee(hdr) : 1.0 - exp(-hdr);
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = max(mix(vec3(l), c, uSat), 0.0);
  c += (h21(gl_FragCoord.xy) - 0.5)/255.0;   // dither: no banding in the faint haze
  gl_FragColor = premul(max(c, 0.0), opacity);
}`

type CloudSpec = { exp: number; knee: boolean; sat: number; limit?: [number, number]; spin: number; wobble: number; tumble: number; sway: number; count: number }
const CLOUD: Record<CloudKind, CloudSpec> = {
  andromeda: { exp: 1.8, knee: false, sat: 1.0, spin: 0.022, wobble: 0.07, tumble: 0, sway: 0, count: 230_000 },
  m64: { exp: 1.05, knee: true, sat: 1.05, spin: 0.02, wobble: 0.07, tumble: 0, sway: 0, count: 220_000 },
  ic1101: { exp: 1.8, knee: false, sat: 1.0, spin: 0, wobble: 0, tumble: 0.03, sway: 0, count: 200_000 },
  pillars: { exp: 1.0, knee: true, sat: 0.92, limit: [0.85, 0.5], spin: 0, wobble: 0, tumble: 0, sway: 0.32, count: 240_000 },
  tarantula: { exp: 0.86, knee: true, sat: 0.95, limit: [0.85, 0.5], spin: 0, wobble: 0, tumble: 0, sway: 0.32, count: 240_000 },
}
/** particle counts actually used on this device (phones get fewer) */
export function cloudCount(kind: CloudKind) {
  const mobile = typeof matchMedia !== 'undefined' && (matchMedia('(pointer: coarse)').matches || innerWidth < 768)
  return Math.round(CLOUD[kind].count * (mobile ? 0.5 : 1))
}

let halfFloat: boolean | null = null

export function makeCloud(b: Body, kind: CloudKind, fades: BodyObj['fades']): BodyObj {
  const spec = CLOUD[kind]
  const group = new THREE.Group()
  const obj: BodyObj = { group, fades, dot: b.color }
  const rot = new THREE.Group()
  group.add(rot)
  obj.rot = rot
  if (spec.limit) obj.limit = spec.limit

  // composite quad (screen-aligned, sized to the visible window each frame)
  const cu = { tMap: { value: null as THREE.Texture | null }, tLo: { value: null as THREE.Texture | null }, uUv: { value: new THREE.Vector2(1, 1) }, uUvLo: { value: new THREE.Vector2(1, 1) }, opacity: { value: 1 }, uExp: { value: spec.exp }, uKnee: { value: spec.knee ? 1 : 0 }, uSat: { value: spec.sat }, uEnc: { value: 1 } }
  const cm = glow(new THREE.ShaderMaterial({
    uniforms: cu,
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: PREMUL + COMP_FRAG,
    depthWrite: false, depthTest: false, transparent: true, toneMapped: false,
  }))
  fades.push({ material: cm as unknown as THREE.Material & { opacity: number }, base: 1 })
  const quadGeo = new THREE.PlaneGeometry(1, 1)
  const quad = new THREE.Mesh(quadGeo, cm)
  quad.visible = false
  group.add(quad)

  // private scenes rendered into the hdr targets: smooth light at 1/3 resolution, stars and detail at full
  const psHi = new THREE.Scene(), psLo = new THREE.Scene()
  const pc = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)
  const mkRoot = (sc: THREE.Scene) => { const root = new THREE.Group(), spinG = new THREE.Group(); root.add(spinG); sc.add(root); return { root, spinG } }
  const hi = mkRoot(psHi), lo = mkRoot(psLo)
  const pu = { uPPU: { value: 100 }, uMinPx: { value: 1 }, uMaxPx: { value: 128 }, uK: { value: 1 }, uN: { value: new THREE.Vector3(0, 0, 1) } }
  const additive = (side: number) => new THREE.ShaderMaterial({
    uniforms: { ...pu, uSide: { value: side }, uDust: { value: 0 } },
    vertexShader: PT_VERT, fragmentShader: PT_FRAG,
    depthTest: false, depthWrite: false, transparent: true,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
  })
  const mats = { back: additive(1), front: additive(-1), all: additive(0), dust: new THREE.ShaderMaterial({
    uniforms: { ...pu, uSide: { value: 0 }, uDust: { value: 1 } },
    vertexShader: PT_VERT, fragmentShader: PT_FRAG,
    depthTest: false, depthWrite: false, transparent: true,
    blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.ZeroFactor, blendDst: THREE.OneMinusSrcColorFactor,
    blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneFactor,
  }) }

  let rtHi: THREE.WebGLRenderTarget | null = null, rtLo: THREE.WebGLRenderTarget | null = null
  let geos: THREE.BufferGeometry[] = []
  let pts: THREE.Points[] = []
  let extent: [number, number] = [1.4, 1.4]
  let state: 'idle' | 'building' | 'ready' = 'idle'
  let gen = 0
  let total = 0

  const build = () => {
    if (state !== 'idle') return
    state = 'building'
    const my = ++gen
    const N = cloudCount(kind)
    const r = mulberry(b.id.length * 7919 + kind.length * 104729 + 3)
    const run = async (): Promise<Gen> => {
      if (kind === 'andromeda') return genAndromeda(N, r)
      if (kind === 'm64') return genM64(N, r)
      if (kind === 'ic1101') return genIC1101(N, r)
      if (kind === 'pillars') {
        const Wimg = 2 / 1.1, Himg = Wimg * (2560 / 2053)
        return genImageCloud(N, r, { file: 'pillars.webp', aspect: 2053 / 2560, Wimg, mask: [0.47, 0.48], black: 0.035, starMin: 0.07, depth: pillarsDepth(Wimg, Himg), starZ: (_x, _y, rr) => (rr() * 2 - 1) * 0.85 })
      }
      return genImageCloud(N, r, {
        file: 'tarantula.webp', aspect: 2560 / 2048, Wimg: 2, mask: [0.49, 0.47], black: 0.03, clip: 0.03, starMin: 0.12, depth: tarantulaDepth(),
        starZ: (x, y, rr) => { const d = Math.hypot(x + 0.398, y); return d < 0.2 ? gauss(rr) * d * 0.9 : (rr() * 2 - 1) * 0.7 },
        extra: (buf, rr) => {
          // r136: a dense, hot, blue-white core, a real 3d ball of stars
          const n = Math.min(buf.cap - buf.n, 5200)
          for (let k = 0; k < n; k++) {
            const m = Math.max(1e-4, rr() * 0.98), rad = Math.min(0.12, 0.012 / Math.sqrt(Math.pow(m, -2 / 3) - 1))
            const [dx, dy, dz] = onSphere(rr)
            const c: V3 = rr() < 0.8 ? [0.78, 0.86, 1.0] : [1.0, 0.95, 0.9]
            const kk = Math.exp(0.6 * gauss(rr))
            buf.add(-0.398 + dx * rad, dy * rad, dz * rad, [c[0] * kk, c[1] * kk, c[2] * kk], 0.000015 / 5.2 * (k < 30 ? 6 : 1), 0.0025)
          }
        },
      })
    }
    // generation is a few hundred ms of js; start it off the current frame
    setTimeout(() => {
      run().then((g) => {
        if (my !== gen) return
        const rs2 = mulberry(99)
        extent = g.extent
        total = 0
        const addPts = (geo: THREE.BufferGeometry, m: THREE.ShaderMaterial, parent: THREE.Object3D, order: number) => {
          const p = new THREE.Points(geo, m); p.frustumCulled = false; p.renderOrder = order; parent.add(p); pts.push(p)
        }
        for (const l of g.layers) {
          const [dif, crisp] = l.buf.split()
          for (const [bf, sc] of [[dif, lo], [crisp, hi]] as const) {
            if (!bf.n) continue
            const geo = bf.geometry(rs2); geos.push(geo); total += bf.n
            const parent = l.spin ? sc.spinG : sc.root
            if (l.split && g.dust) { addPts(geo, mats.back, parent, 0); addPts(geo, mats.front, parent, 2) }
            else addPts(geo, mats.all, parent, 0)
          }
        }
        if (g.dust) {
          const geo = g.dust.geometry(rs2); geos.push(geo)
          addPts(geo, mats.dust, hi.spinG, 1); addPts(geo, mats.dust, lo.spinG, 1)
        }
        state = 'ready'
      }).catch((e) => { console.warn('cloud build failed', kind, e); state = 'idle' })
    }, 0)
  }
  obj.wantTex = () => build()
  obj.sleep = () => {
    if (state === 'idle') return
    gen++
    for (const p of pts) p.removeFromParent()
    for (const g of geos) g.dispose()
    pts = []; geos = []
    rtHi?.dispose(); rtLo?.dispose(); rtHi = rtLo = null
    cu.tMap.value = null; cu.tLo.value = null
    quad.visible = false
    state = 'idle'
  }

  // default orientation + slow motion (accumulated, so grabbing never snaps it)
  const orient = kind === 'andromeda' ? ANDROMEDA_ORIENT : kind === 'm64' ? M64_ORIENT : kind === 'ic1101' ? IC_ORIENT : new THREE.Euler()
  const qOrient = new THREE.Quaternion().setFromEuler(orient)
  let spin = 0, wob = 0, tumble = 0, sway = 0
  const qA = new THREE.Quaternion(), qB = new THREE.Quaternion(), X = new THREE.Vector3(1, 0, 0), Y = new THREE.Vector3(0, 1, 0), Z = new THREE.Vector3(0, 0, 1)
  const vN = new THREE.Vector3()

  obj.update = (_t, dt, rs, reduced, auto) => {
    if (state !== 'ready') { build(); quad.visible = false; return }
    const renderer = GLScene.renderer
    if (!renderer) return
    if (halfFloat === null) halfFloat = renderer.extensions.has('EXT_color_buffer_float') || renderer.extensions.has('EXT_color_buffer_half_float')
    if (!reduced) {
      spin += dt * spec.spin * auto
      wob += dt * 0.09 * auto
      tumble += dt * spec.tumble * auto
      sway += dt * 0.11 * auto
    }
    // orientation: user trackball (rot) × slow tumble / sway × the object's own tilt × disc spin
    if (spec.limit) {
      const L = spec.limit
      const yaw = Math.max(-L[0], Math.min(L[0], (rot.userData.yaw ?? 0) + spec.sway * Math.sin(sway)))
      const pitch = Math.max(-L[1], Math.min(L[1], rot.userData.pitch ?? 0))
      qB.setFromAxisAngle(Y, yaw).multiply(qA.setFromAxisAngle(X, pitch))
    } else {
      qB.copy(rot.quaternion)
      if (spec.tumble) qB.multiply(qA.setFromAxisAngle(Y, tumble))
      if (spec.wobble) qB.multiply(qA.setFromAxisAngle(X, spec.wobble * Math.sin(wob)))
      qB.multiply(qOrient)
    }
    for (const sc of [hi, lo]) { sc.root.quaternion.copy(qB); sc.spinG.quaternion.setFromAxisAngle(Z, spin) }
    vN.copy(Z).applyQuaternion(qB)

    // the visible window of the object (object units), clipped to the viewport
    const dpr = GLScene.dpr
    const gx = group.position.x, gy = group.position.y
    const E = Math.max(extent[0], extent[1]) * (spec.limit ? 1.05 : 1)
    const hw = GLScene.vw / 2, hh = GLScene.vh / 2
    const x0 = Math.max(-E, (-hw - gx) / rs), x1 = Math.min(E, (hw - gx) / rs)
    const y0 = Math.max(-E, (-hh - gy) / rs), y1 = Math.min(E, (hh - gy) / rs)
    if (x1 <= x0 || y1 <= y0) { quad.visible = false; return }
    const mobile = GLScene.vw < 768
    const cap = mobile ? 1600 : 2400
    let ppu = rs * dpr
    const needW = (x1 - x0) * ppu, needH = (y1 - y0) * ppu
    const sc = Math.min(1, cap / Math.max(needW, needH))
    ppu *= sc
    const pwid = Math.max(8, Math.ceil((x1 - x0) * ppu)), phei = Math.max(8, Math.ceil((y1 - y0) * ppu))
    const lw = Math.max(4, Math.ceil(pwid * LOW)), lh = Math.max(4, Math.ceil(phei * LOW))
    const fit = (t: THREE.WebGLRenderTarget | null, w: number, h: number) => {
      if (t && t.width >= w && t.height >= h && t.width <= w * 1.6 + 256 && t.height <= h * 1.6 + 256) return t
      t?.dispose()
      const bw = Math.min(4096, Math.ceil((w * 1.15) / 32) * 32), bh = Math.min(4096, Math.ceil((h * 1.15) / 32) * 32)
      return new THREE.WebGLRenderTarget(bw, bh, { type: halfFloat ? THREE.HalfFloatType : THREE.UnsignedByteType, depthBuffer: false, stencilBuffer: false, generateMipmaps: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter })
    }
    rtHi = fit(rtHi, pwid, phei); rtLo = fit(rtLo, lw, lh)
    cu.tMap.value = rtHi.texture; cu.tLo.value = rtLo.texture
    cu.uEnc.value = halfFloat ? 1 : 4
    rtHi.viewport.set(0, 0, pwid, phei)
    rtLo.viewport.set(0, 0, lw, lh)
    // the camera window matches the full-res pixel grid exactly
    const wx1 = x0 + pwid / ppu, wy1 = y0 + phei / ppu
    pc.left = x0; pc.right = wx1; pc.bottom = y0; pc.top = wy1
    pc.updateProjectionMatrix()
    // quality steps: fewer pixels via dpr (already), fewer particles here
    const qk = Math.max(0.45, Math.min(1, GLScene.quality * GLScene.quality))
    for (const p of pts) {
      const n = (p.geometry.attributes.position as THREE.BufferAttribute).count
      p.geometry.setDrawRange(0, Math.ceil(n * qk))
    }
    pu.uMaxPx.value = GLScene.maxPoint
    pu.uK.value = (1 / qk) * (halfFloat ? 1 : 0.25)
    pu.uN.value.copy(vN)
    const prevRT = renderer.getRenderTarget()
    const prevAuto = renderer.autoClear
    renderer.autoClear = true
    pu.uPPU.value = ppu; pu.uMinPx.value = Math.max(0.75, 0.62 * dpr * sc)
    renderer.setRenderTarget(rtHi); renderer.render(psHi, pc)
    pu.uPPU.value = ppu * (lw / pwid); pu.uMinPx.value = 0.75
    renderer.setRenderTarget(rtLo); renderer.render(psLo, pc)
    renderer.setRenderTarget(prevRT)
    renderer.autoClear = prevAuto
    const rt = rtHi
    cu.uUvLo.value.set(lw / rtLo.width, lh / rtLo.height)
    cu.uUv.value.set(pwid / rt.width, phei / rt.height)
    quad.position.set((x0 + wx1) / 2, (y0 + wy1) / 2, 0)
    quad.scale.set(wx1 - x0, wy1 - y0, 1)
    quad.visible = true
  }
  void total
  return obj
}
