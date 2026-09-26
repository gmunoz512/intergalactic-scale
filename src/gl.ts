import * as THREE from 'three'
import type { Body } from './data'

const BASE = import.meta.env.BASE_URL + 'tex/'

// ---------- per-body visual specs ----------
type PlanetSpec = { type: 'planet'; tex: string; hi?: boolean; clouds?: boolean; ring?: boolean; atmo?: [number, number, number, number]; atmoScale?: number; tilt?: number; lean?: number; spin?: number }
type StarSpec = { type: 'star'; scale: number; contrast: number; speck: number; spots: number; spotSize: number; active: number; actSize: number; glow: number; flame: number; proms?: [number, number, number, number, number][] }
type ImageSpec = { type: 'image'; src: string; fill: number; aspect: number; mask: [number, number]; sat?: number; gain?: number }
type ProcSpec = { type: 'proc'; kind: 'heliosphere' | 'oort' | 'group' | 'supercluster' | 'laniakea' | 'universe' | 'dwarf' | 'elliptical' }
/** black hole: disk [inner, outer] in horizon radii, hot/cool disk colours, ring colour, brightness, quasar glow, view tilt */
type BHSpec = { type: 'bh'; disk: [number, number]; hot: [number, number, number]; cool: [number, number, number]; ring: [number, number, number]; gain: number; quasar: number; tilt: number; roll: number }
type GalaxyPal = { gold: V3; grey: V3; blue: V3; dust: V3; knot: V3; warm: V3; warmR: number; knotAmt: number; gain?: number }
/** satellite: x, y (radii), rx, ry, angle, brightness */
type Sat = [number, number, number, number, number, number]
type GalaxySpec = { type: 'galaxy'; arms: number; pitch: number; bar: number; bulge: number; dust: number; seed: number; floc: number; clump: number; ring: number; tilt: number; pa: number; pal?: GalaxyPal; sats?: Sat[]; field?: number }
type Spec = PlanetSpec | StarSpec | ImageSpec | ProcSpec | GalaxySpec | BHSpec

const SPECS: Record<string, Spec> = {
  ceres: { type: 'planet', tex: 'ceres', hi: true, spin: 0.03 },
  makemake: { type: 'planet', tex: 'makemake', hi: true, spin: 0.03 },
  pluto: { type: 'planet', tex: 'pluto', hi: true, atmo: [0.55, 0.7, 1, 0.22], lean: 0.5, spin: 0.02 },
  europa: { type: 'planet', tex: 'europa', spin: 0.02 },
  titan: { type: 'planet', tex: 'titan', atmo: [1, 0.66, 0.3, 1.25], atmoScale: 1.06, spin: 0.015 },
  kepler22b: { type: 'planet', tex: 'kepler22b', atmo: [0.45, 0.75, 1, 0.9], tilt: 0.3, spin: 0.03 },
  moon: { type: 'planet', tex: 'moon', hi: true, spin: 0.02 },
  mercury: { type: 'planet', tex: 'mercury', hi: true, spin: 0.02 },
  mars: { type: 'planet', tex: 'mars', hi: true, atmo: [0.9, 0.55, 0.4, 0.35], tilt: 0.44, spin: 0.03 },
  venus: { type: 'planet', tex: 'venus', hi: true, atmo: [1, 0.9, 0.7, 0.5], spin: 0.01 },
  earth: { type: 'planet', tex: 'earth', hi: true, clouds: true, atmo: [0.35, 0.6, 1, 1], tilt: 0.41, spin: 0.03 },
  neptune: { type: 'planet', tex: 'neptune', atmo: [0.4, 0.55, 1, 0.8], tilt: 0.49, spin: 0.03 },
  uranus: { type: 'planet', tex: 'uranus', atmo: [0.6, 0.9, 0.95, 0.8], tilt: 1.7, spin: 0.03 },
  saturn: { type: 'planet', tex: 'saturn', hi: true, ring: true, atmo: [0.95, 0.85, 0.6, 0.3], tilt: 0.47, spin: 0.04 },
  jupiter: { type: 'planet', tex: 'jupiter', hi: true, atmo: [0.95, 0.8, 0.6, 0.3], tilt: 0.05, spin: 0.04 },
  // proms: [lat, lon, span, height, orientation] — lon near ±1.5 puts them on the visible limb
  sun: { type: 'star', scale: 10, contrast: 0.3, speck: 0.5, spots: 5, spotSize: 0.03, active: 3, actSize: 0.07, glow: 0.9, flame: 0.6, proms: [[0.55, -1.45, 0.22, 0.16, 1.45], [-0.45, 1.5, 0.16, 0.12, 1.85], [0.1, 1.55, 0.11, 0.08, 1.85]] },
  sirius: { type: 'star', scale: 7, contrast: 0.16, speck: 0.3, spots: 0, spotSize: 0, active: 2, actSize: 0.06, glow: 1.0, flame: 0.4, proms: [[0.4, -1.5, 0.12, 0.08, 1.65]] },
  pollux: { type: 'star', scale: 4.5, contrast: 0.45, speck: 0.5, spots: 0, spotSize: 0, active: 3, actSize: 0.08, glow: 0.95, flame: 0.7, proms: [[0.5, -1.45, 0.3, 0.22, 1.45], [-0.5, 1.45, 0.24, 0.18, 1.65]] },
  arcturus: { type: 'star', scale: 4.2, contrast: 0.45, speck: 0.5, spots: 0, spotSize: 0, active: 3, actSize: 0.08, glow: 0.95, flame: 0.7, proms: [[0.6, -1.5, 0.32, 0.24, 1.75], [-0.4, 1.5, 0.27, 0.2, 1.55]] },
  aldebaran: { type: 'star', scale: 4.0, contrast: 0.5, speck: 0.5, spots: 0, spotSize: 0, active: 3, actSize: 0.09, glow: 0.95, flame: 0.75, proms: [[0.55, -1.45, 0.38, 0.28, 1.55], [-0.5, 1.5, 0.32, 0.24, 1.75]] },
  rigel: { type: 'star', scale: 7, contrast: 0.16, speck: 0.3, spots: 0, spotSize: 0, active: 2, actSize: 0.06, glow: 1.05, flame: 0.4, proms: [[-0.4, 1.5, 0.12, 0.08, 1.85]] },
  antares: { type: 'star', scale: 3.4, contrast: 0.55, speck: 0.45, spots: 0, spotSize: 0, active: 3, actSize: 0.1, glow: 0.95, flame: 0.85, proms: [[0.6, -1.45, 0.51, 0.38, 1.45], [-0.55, 1.5, 0.46, 0.34, 1.65], [0.05, 1.55, 0.27, 0.2, 1.65]] },
  betelgeuse: { type: 'star', scale: 5, contrast: 0.45, speck: 0.55, spots: 0, spotSize: 0, active: 4, actSize: 0.15, glow: 1.0, flame: 0.9, proms: [[0.62, -1.42, 0.57, 0.42, 1.8], [-0.6, 1.48, 0.51, 0.38, 1.75]] },
  uyscuti: { type: 'star', scale: 3.3, contrast: 0.55, speck: 0.45, spots: 0, spotSize: 0, active: 3, actSize: 0.1, glow: 0.95, flame: 0.85, proms: [[0.5, -1.5, 0.54, 0.4, 1.55], [-0.6, 1.45, 0.49, 0.36, 1.65], [-0.1, -1.55, 0.3, 0.22, 1.65]] },
  elnath: { type: 'star', scale: 7, contrast: 0.16, speck: 0.3, spots: 0, spotSize: 0, active: 2, actSize: 0.06, glow: 1.0, flame: 0.4 },
  aludra: { type: 'star', scale: 6, contrast: 0.2, speck: 0.35, spots: 0, spotSize: 0, active: 3, actSize: 0.07, glow: 1.05, flame: 0.5 },
  pistol: { type: 'star', scale: 5.5, contrast: 0.24, speck: 0.35, spots: 0, spotSize: 0, active: 3, actSize: 0.08, glow: 1.1, flame: 0.6 },
  vycma: { type: 'star', scale: 3.2, contrast: 0.58, speck: 0.45, spots: 0, spotSize: 0, active: 4, actSize: 0.12, glow: 1.0, flame: 0.95 },
  st218: { type: 'star', scale: 3.0, contrast: 0.6, speck: 0.45, spots: 0, spotSize: 0, active: 4, actSize: 0.12, glow: 1.0, flame: 0.95 },
  // black holes: size = event horizon; disk and photon ring are lensed live in the shader
  sgra: { type: 'bh', disk: [2.6, 5.2], hot: [0.82, 0.9, 1.0], cool: [0.3, 0.45, 0.95], ring: [0.82, 0.9, 1.0], gain: 0.4, quasar: 0, tilt: 0.2, roll: -0.12 },
  s5: { type: 'bh', disk: [2.6, 6.0], hot: [1.0, 0.94, 0.84], cool: [0.95, 0.6, 0.32], ring: [1.0, 0.92, 0.8], gain: 1.0, quasar: 0.5, tilt: 0.28, roll: 0.1 },
  ton618: { type: 'bh', disk: [2.6, 6.2], hot: [1.0, 0.72, 0.34], cool: [1.0, 0.3, 0.02], ring: [1.0, 0.8, 0.5], gain: 1.5, quasar: 1.1, tilt: 0.16, roll: -0.08 },
  heliosphere: { type: 'proc', kind: 'heliosphere' },
  oort: { type: 'proc', kind: 'oort' },
  // fill = object diameter / image width. mask = ellipse radii (uv units, 0.5 = edge)
  helix: { type: 'image', src: 'helix.webp', fill: 0.6, aspect: 1, mask: [0.48, 0.48], sat: 0.95, gain: 1.0 },
  pillars: { type: 'image', src: 'pillars.webp', fill: 1.1, aspect: 2560 / 2053, mask: [0.47, 0.48], sat: 0.9, gain: 0.95 },
  horsehead: { type: 'image', src: 'horsehead.webp', fill: 0.9, aspect: 2560 / 2449, mask: [0.48, 0.48], sat: 0.95, gain: 1.0 },
  orion: { type: 'image', src: 'orion.webp', fill: 1.0, aspect: 1, mask: [0.5, 0.5], sat: 0.85, gain: 0.95 },
  omega: { type: 'image', src: 'omega.webp', fill: 0.62, aspect: 1, mask: [0.46, 0.46], sat: 0.8, gain: 1.05 },
  segue2: { type: 'proc', kind: 'dwarf' },
  tarantula: { type: 'image', src: 'tarantula.webp', fill: 1.0, aspect: 2048 / 2560, mask: [0.49, 0.47], sat: 0.9, gain: 1.0 },
  m64: { type: 'image', src: 'm64.webp', fill: 0.82, aspect: 2560 / 2422, mask: [0.48, 0.48], sat: 0.95, gain: 1.05 },
  milkyway: { type: 'galaxy', arms: 2, pitch: 0.24, bar: 1, bulge: 0.15, dust: 1.15, seed: 3.1, floc: 0.55, clump: 1, ring: 0, tilt: -0.95, pa: 0.5 },
  andromeda: {
    type: 'galaxy', arms: 2, pitch: 0.12, bar: 0, bulge: 0.2, dust: 1.25, seed: 7.7, floc: 0.6, clump: 0.9, ring: 0.8, tilt: -1.34, pa: -0.62,
    pal: { gold: [1.0, 0.9, 0.74], grey: [0.66, 0.6, 0.96], blue: [0.72, 0.62, 1.0], dust: [0.5, 0.2, 0.12], knot: [1.0, 0.42, 0.78], warm: [1.0, 0.8, 0.62], warmR: 0.6, knotAmt: 1.0, gain: 1.7 },
    // m32 (compact, upper right of the disc) and m110 (larger, soft, lower left)
    sats: [[0.2, 0.3, 0.035, 0.03, 0, 1.6], [-0.42, -0.55, 0.11, 0.065, 0.9, 0.9]],
    field: 1,
  },
  ic1101: { type: 'proc', kind: 'elliptical' },
  virgo: { type: 'proc', kind: 'supercluster' },
  laniakea: { type: 'proc', kind: 'laniakea' },
  universe: { type: 'proc', kind: 'universe' },
}

/** how far past radiusKm the visible thing reaches (for spacing) */
export const EXTENT: Record<string, number> = { saturn: 2.3, sgra: 5.6, s5: 6.2, ton618: 6.4, segue2: 1.4, ic1101: 1.6 }
/** zoom out on these so the whole visible thing (disk, not just the horizon) fits the frame */
export const FRAME: Record<string, number> = { sgra: 4.0, s5: 4.4, ton618: 4.6 }

// ---------- helpers ----------
function rng(seed: number) {
  let s = seed >>> 0 || 1
  return () => {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5
    return ((s >>> 0) % 1_000_000) / 1_000_000
  }
}
const gauss = (r: () => number) => Math.sqrt(-2 * Math.log(r() + 1e-9)) * Math.cos(2 * Math.PI * r())

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
  const c = (v: number) => Math.max(0, Math.min(255, v)) / 255
  return [c(r), c(g), c(b)]
}

const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<5;i++){ s+=a*snoise(p); p*=2.03; a*=0.5; } return s; }
`

/** additive-looking glow that still writes valid premultiplied alpha, so the
 * transparent webgl canvas composites cleanly over the starfield canvas */
function glow<T extends THREE.Material>(m: T): T {
  m.blending = THREE.CustomBlending
  m.blendEquation = THREE.AddEquation
  m.blendSrc = THREE.OneFactor
  m.blendDst = THREE.OneMinusSrcAlphaFactor
  m.blendSrcAlpha = THREE.OneFactor
  m.blendDstAlpha = THREE.OneMinusSrcAlphaFactor
  m.premultipliedAlpha = true
  return m
}
const PREMUL = `vec4 premul(vec3 c, float o){ c *= o; return vec4(c, clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0)); }\n`

// ---------- shared resources ----------
let SPHERE: THREE.SphereGeometry | null = null
const sphere = () => (SPHERE ??= new THREE.SphereGeometry(1, 160, 96))
let QUAD: THREE.PlaneGeometry | null = null
const quad = () => (QUAD ??= new THREE.PlaneGeometry(1, 1))

interface Fadeable { material: THREE.Material & { opacity: number }; base: number }

export interface BodyObj {
  group: THREE.Group
  fades: Fadeable[]
  /** per-frame update: rs = on-screen radius (css px) */
  update?: (time: number, dt: number, rs: number, reduced: boolean, auto: number) => void
  /** group the user rotates (spheres) */
  rot?: THREE.Group
  /** flat things (images, point clouds) only tilt a little */
  flat?: boolean
  /** texture loader hook: hi = wants 4k */
  wantTex?: (hi: boolean) => void
  /** dot color for when it's sub-pixel */
  dot: string
  /** labels in body units (x, y, radius) drawn on the 2d overlay when current */
  labels?: { x: number; y: number; r: number; name: string; major?: boolean; left?: boolean }[]
}

function track(obj: BodyObj, m: THREE.Material & { opacity: number }) {
  m.transparent = true
  obj.fades.push({ material: m, base: m.opacity })
  return m
}

/** auto-spin speed multiplier for every planet, star and galaxy */
const SPIN_K = 1.1
/** planets, moons and the sun turn 2x faster again on top of that */
const PLANET_SPIN = 2
/** planets / moons / dwarf planets / exoplanets only (not the sun): a further 1.25x */
const PLANET_ONLY_SPIN = 1.25
/** every flare time scale (cycle, idle gaps, plasma flow, flicker, eruption drift) runs this many times slower */
const FLARE_SLOW = 2

// ---------- texture cache ----------
const loader = new THREE.TextureLoader()
const texCache = new Map<string, Promise<THREE.Texture>>()
let maxAniso = 8
function loadTex(file: string, srgb = true): Promise<THREE.Texture> {
  let p = texCache.get(file)
  if (!p) {
    p = new Promise((res, rej) => {
      loader.load(BASE + file, (t) => {
        if (srgb) t.colorSpace = THREE.SRGBColorSpace
        t.anisotropy = maxAniso
        t.generateMipmaps = true
        t.minFilter = THREE.LinearMipmapLinearFilter
        res(t)
      }, undefined, rej)
    })
    texCache.set(file, p)
  }
  return p
}

// ---------- planets ----------
function makePlanet(b: Body, spec: PlanetSpec): BodyObj {
  const group = new THREE.Group()
  const obj: BodyObj = { group, fades: [], dot: b.color }
  const rot = new THREE.Group()
  group.add(rot)
  obj.rot = rot
  const tiltG = new THREE.Group()
  tiltG.rotation.z = -(spec.tilt ?? 0)
  tiltG.rotation.x = spec.lean ?? 0.18
  rot.add(tiltG)
  const mat = track(obj, new THREE.MeshStandardMaterial({ color: new THREE.Color(b.color), roughness: 1, metalness: 0 })) as THREE.MeshStandardMaterial
  const mesh = new THREE.Mesh(sphere(), mat)
  tiltG.add(mesh)
  let clouds: THREE.Mesh | null = null
  let cloudMat: THREE.MeshStandardMaterial | null = null
  if (spec.clouds) {
    cloudMat = track(obj, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, opacity: 0.0, depthWrite: false })) as THREE.MeshStandardMaterial
    clouds = new THREE.Mesh(sphere(), cloudMat)
    clouds.scale.setScalar(1.006)
    tiltG.add(clouds)
  }
  if (spec.atmo) {
    const [r, g, bb, s] = spec.atmo
    const am = glow(new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Vector3(r, g, bb) }, uStrength: { value: s }, opacity: { value: 1 }, uLight: { value: new THREE.Vector3(-0.55, 0.45, 0.7).normalize() } },
      vertexShader: `varying vec3 vN; void main(){ vN = normalize(normalMatrix*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
      fragmentShader: PREMUL + `uniform vec3 uColor; uniform float uStrength; uniform float opacity; uniform vec3 uLight; varying vec3 vN;
        void main(){ float mu = dot(normalize(vN), vec3(0.,0.,1.)); float rim = pow(1.0 - clamp(mu,0.,1.), 3.0);
          float lit = 0.14 + 0.86*smoothstep(-0.25, 0.6, dot(normalize(vN), uLight)); // faint rim survives on the night side
          gl_FragColor = premul(uColor * rim * lit * uStrength * 1.4, opacity); }`,
      depthWrite: false, transparent: true,
    }))
    obj.fades.push({ material: am as unknown as THREE.Material & { opacity: number }, base: 1 })
    const atmo = new THREE.Mesh(sphere(), am)
    atmo.scale.setScalar(spec.atmoScale ?? 1.035)
    group.add(atmo)
  }
  if (spec.ring) {
    const inner = 1.24, outer = 2.27
    const geo = new THREE.RingGeometry(inner, outer, 256, 1)
    const pos = geo.attributes.position, uv = geo.attributes.uv
    for (let i = 0; i < pos.count; i++) {
      const v = Math.hypot(pos.getX(i), pos.getY(i))
      uv.setXY(i, (v - inner) / (outer - inner), 0.5)
    }
    const rm = track(obj, new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide, roughness: 1, depthWrite: false, opacity: 1, alphaTest: 0.01 })) as THREE.MeshStandardMaterial
    loadTex('ring.webp').then((t) => { rm.map = t; rm.needsUpdate = true })
    const ring = new THREE.Mesh(geo, rm)
    ring.rotation.x = -Math.PI / 2
    tiltG.add(ring)
    tiltG.rotation.x = 0.42
  }
  let level = 0
  obj.wantTex = (hi) => {
    const want = hi && spec.hi ? 2 : 1
    if (level >= want) return
    level = want
    const file = `${spec.tex}_${want === 2 ? '4k' : '2k'}.webp`
    loadTex(file).then((t) => { mat.map = t; mat.color.set(0xffffff); mat.needsUpdate = true })
    if (cloudMat) {
      loadTex(`clouds_${want === 2 ? '4k' : '2k'}.webp`, false).then((t) => {
        cloudMat!.alphaMap = t
        cloudMat!.opacity = 0.9
        obj.fades.find((f) => f.material === cloudMat)!.base = 0.9
        cloudMat!.needsUpdate = true
      })
    }
  }
  obj.update = (_t, dt, _rs, reduced, auto) => {
    if (reduced) return
    mesh.rotation.y += dt * (spec.spin ?? 0.03) * SPIN_K * PLANET_SPIN * PLANET_ONLY_SPIN * auto
    if (clouds) clouds.rotation.y += dt * (spec.spin ?? 0.03) * SPIN_K * PLANET_SPIN * PLANET_ONLY_SPIN * (0.25 + 1.0 * auto)
  }
  return obj
}

// ---------- stars ----------
type V3 = [number, number, number]
type StarLook = { deep: V3; mid: V3; bright: V3; hot: V3; prom: V3; glow?: V3 }
/** granulation: [cells per radius, strength, limb darkening (edge brightness)] */
const GRAN: Record<string, [number, number, number]> = {
  sun: [44, 0.45, 0.6], sirius: [48, 0.55, 0.62], rigel: [46, 0.55, 0.62], pollux: [30, 0.3, 0.75], arcturus: [30, 0.3, 0.75], aldebaran: [28, 0.3, 0.78],
  antares: [17, 0.2, 0.88], betelgeuse: [16, 0.18, 0.9], uyscuti: [16, 0.2, 0.88],
  elnath: [46, 0.55, 0.62], aludra: [40, 0.5, 0.66], pistol: [36, 0.45, 0.7], vycma: [15, 0.2, 0.9], st218: [14, 0.2, 0.9],
}

/** hand-tuned ramps per star (deep lanes -> mid -> bright -> white-hot), by type */
const LOOKS: Record<string, StarLook> = {
  sun: { deep: [0.92, 0.3, 0.03], mid: [1.0, 0.72, 0.26], bright: [1.0, 0.88, 0.5], hot: [1.0, 0.97, 0.86], prom: [0.95, 0.3, 0.08], glow: [1.0, 0.36, 0.08] },
  sirius: { deep: [0.14, 0.36, 1.0], mid: [0.5, 0.74, 1.0], bright: [0.86, 0.97, 1.0], hot: [0.97, 1.0, 1.0], prom: [0.45, 0.6, 1.0], glow: [0.1, 0.5, 1.0] },
  pollux: { deep: [0.6, 0.17, 0.03], mid: [1.0, 0.5, 0.09], bright: [1.0, 0.76, 0.3], hot: [1.0, 0.95, 0.78], prom: [0.8, 0.18, 0.04] },
  arcturus: { deep: [0.6, 0.15, 0.03], mid: [1.0, 0.47, 0.08], bright: [1.0, 0.73, 0.27], hot: [1.0, 0.94, 0.76], prom: [0.78, 0.16, 0.04] },
  aldebaran: { deep: [0.55, 0.1, 0.02], mid: [1.0, 0.38, 0.06], bright: [1.0, 0.64, 0.2], hot: [1.0, 0.92, 0.7], prom: [0.72, 0.12, 0.03] },
  rigel: { deep: [0.16, 0.34, 0.98], mid: [0.5, 0.7, 1.0], bright: [0.84, 0.94, 1.0], hot: [0.97, 1.0, 1.0], prom: [0.45, 0.58, 1.0], glow: [0.12, 0.48, 1.0] },
  antares: { deep: [0.42, 0.04, 0.02], mid: [0.9, 0.2, 0.04], bright: [1.0, 0.46, 0.12], hot: [1.0, 0.82, 0.55], prom: [0.6, 0.06, 0.02] },
  betelgeuse: { deep: [0.8, 0.26, 0.03], mid: [1.0, 0.54, 0.09], bright: [1.0, 0.82, 0.32], hot: [1.0, 0.95, 0.72], prom: [0.7, 0.1, 0.03] },
  uyscuti: { deep: [0.5, 0.07, 0.02], mid: [0.96, 0.3, 0.04], bright: [1.0, 0.58, 0.14], hot: [1.0, 0.88, 0.62], prom: [0.62, 0.08, 0.02] },
  elnath: { deep: [0.2, 0.42, 1.0], mid: [0.55, 0.76, 1.0], bright: [0.88, 0.96, 1.0], hot: [0.97, 1.0, 1.0], prom: [0.5, 0.64, 1.0], glow: [0.15, 0.52, 1.0] },
  aludra: { deep: [0.18, 0.38, 1.0], mid: [0.52, 0.72, 1.0], bright: [0.86, 0.95, 1.0], hot: [0.97, 1.0, 1.0], prom: [0.45, 0.6, 1.0], glow: [0.12, 0.5, 1.0] },
  pistol: { deep: [0.12, 0.3, 0.95], mid: [0.45, 0.66, 1.0], bright: [0.82, 0.92, 1.0], hot: [0.96, 0.99, 1.0], prom: [0.4, 0.55, 1.0], glow: [0.1, 0.42, 1.0] },
  vycma: { deep: [0.45, 0.05, 0.02], mid: [0.92, 0.24, 0.05], bright: [1.0, 0.5, 0.13], hot: [1.0, 0.84, 0.58], prom: [0.62, 0.07, 0.02] },
  st218: { deep: [0.4, 0.03, 0.02], mid: [0.86, 0.18, 0.04], bright: [1.0, 0.42, 0.1], hot: [1.0, 0.78, 0.5], prom: [0.58, 0.05, 0.02] },
}

/** flares per star: [how many alive, footpoint span (rad), loop height (radii)] */
const FLARES: Record<string, [number, number, number]> = {
  sun: [6, 0.24, 0.19], sirius: [6, 0.24, 0.2], rigel: [6, 0.26, 0.21],
  pollux: [4, 0.3, 0.22], arcturus: [4, 0.32, 0.24], aldebaran: [4, 0.36, 0.27],
  antares: [5, 0.55, 0.42], betelgeuse: [5, 0.6, 0.46], uyscuti: [5, 0.55, 0.42],
  elnath: [6, 0.24, 0.2], aludra: [6, 0.26, 0.21], pistol: [6, 0.32, 0.26], vycma: [5, 0.6, 0.46], st218: [5, 0.62, 0.48],
}

const STAR_FRAG = /* glsl */ `
uniform vec3 uDeep, uMid, uBright, uHot;
uniform float uTime, uScale, uContrast, uPx, uSeed, opacity, uRim, uSpeck, uCell, uGran, uLimbD;
uniform vec4 uSpots[6];
uniform int uNSpots;
uniform vec4 uAct[5];
uniform int uNAct;
varying vec3 vN; varying vec3 vP;

float fbm7(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<7;i++){ s+=a*snoise(p); p=p*2.02+vec3(1.7,9.2,3.1); a*=0.52; } return s; }
// crisp cellular granulation: bright cell centres, dark lanes; feature points wander so the cells boil
vec3 hash33(vec3 p){ p = fract(p*vec3(0.1031, 0.1030, 0.0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx)*p.zyx); }
vec2 worley(vec3 p, float t){
  vec3 i = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0;
  for (int x = -1; x <= 1; x++) for (int y = -1; y <= 1; y++) for (int z = -1; z <= 1; z++){
    vec3 g = vec3(float(x), float(y), float(z));
    vec3 h = hash33(i + g);
    vec3 o = 0.5 + 0.38*sin(t*(0.25 + 0.2*h) + 6.2831*h);
    float d = length(g + o - f);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
  }
  return vec2(d1, d2);
}
float ridged(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ float n=1.0-abs(snoise(p)); s+=a*n*n; p*=2.1; a*=0.5; } return s; }

// a small bundle of magnetic loops around an active region, drawn in its tangent plane
float loops(vec3 n, vec3 c, float size, float seed){
  vec3 u = normalize(cross(c, abs(c.y) < 0.9 ? vec3(0.,1.,0.) : vec3(1.,0.,0.)));
  vec3 v = cross(c, u);
  vec2 p = vec2(dot(n, u), dot(n, v)) / size;
  if (dot(n, c) < 0.0 || dot(p, p) > 9.0) return 0.0;
  float acc = 0.0;
  for (int k = 0; k < 12; k++){
    float fk = float(k);
    float ang = seed*6.2831 + (fk < 6.0 ? (fk-2.5)*0.24 : 3.1416 + (fk-8.5)*0.24);
    vec2 q = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * p;
    float L = 0.35 + 0.45*fract(sin(fk*12.9 + seed*78.2)*43758.5);
    q.x -= L*0.9;   // loops leave the bright core and land outside it
    float h = L*(0.55 + 0.25*fract(sin(fk*4.1 + seed*9.7)*1e4));
    if (abs(q.x) < L) {
      float y = h*sqrt(1.0 - (q.x*q.x)/(L*L));
      float d1 = abs(q.y - y);
      float w = 0.016 + 0.01*fk/10.0;
      float br = 0.45 + 0.55*(snoise(vec3(q.x*6.0, fk*3.1, seed))*0.5 + 0.5);
      acc += (exp(-pow(d1/w, 2.0))*0.8 + exp(-pow(d1/(w*3.5), 2.0))*0.25) * (0.3 + 0.7*(1.0 - abs(q.x)/L)) * br;
    }
  }
  float smudge = exp(-dot(p*vec2(1.0, 1.5), p*vec2(1.0, 1.5))*1.8)*(0.55 + 0.45*snoise(vec3(p*3.0, seed)));
  float core = exp(-dot(p, p)*30.0);
  float plage = exp(-dot(p, p)*0.5)*(0.5 + 0.5*snoise(vec3(p*5.0, seed + 2.0)));
  return acc*0.6 + smudge*0.8 + core*0.9 + plage*0.18;
}

void main(){
  vec3 n = normalize(vP);
  float mu = clamp(dot(normalize(vN), vec3(0.,0.,1.)), 0., 1.);
  float t = uTime;
  // fade the finest detail when it would alias on a small disc
  float detail = smoothstep(40.0, 260.0, uPx);

  vec3 p = n*uScale + vec3(uSeed*7.0);
  // domain warp for turbulent, flowing structure
  vec3 w1 = vec3(snoise(p*0.6 + vec3(0.0, t*0.03, 0.0)), snoise(p*0.6 + vec3(5.2, 1.3, t*0.025)), snoise(p*0.6 + vec3(t*0.02, 8.1, 2.7)));
  vec3 pw = p + w1*0.38;
  // three scales of boiling turbulence, each drifting at its own pace
  float T = fbm7(pw + vec3(0.0, 0.0, t*0.04));
  vec3 w2 = vec3(snoise(pw*2.1 + vec3(t*0.05, 0.0, 3.3)), snoise(pw*2.1 + vec3(7.1, t*0.045, 0.0)), snoise(pw*2.1 + vec3(0.0, 2.2, t*0.05)));
  float mid = fbm(pw*2.6 + w2*0.18 + vec3(0.0, -t*0.06, 0.0));
  float fine = fbm(p*7.5 + w2*0.15 + vec3(t*0.09, 0.0, -t*0.07));
  float veins = ridged(pw*2.4 + w2*0.25 + vec3(t*0.03, 0.0, 0.0));
  float h = 0.5 + 0.32*T + 0.26*mid + 0.16*fine*detail;
  h += (veins - 0.3)*0.16*uContrast;
  h += 0.12;
  h = 0.5 + (h - 0.5)*(0.75 + uContrast);

  // granulation (fades out before it would alias)
  float gpx = uPx/uCell;
  float gv = 0.0;
  if (gpx > 2.5) {
    vec2 wl = worley(n*uCell + w1*0.6, t*1.0);
    float edge = wl.y - wl.x;
    float cell = smoothstep(0.02, 0.32, edge)*(1.0 - 0.45*smoothstep(0.1, 0.7, wl.x));
    gv = (cell - 0.55)*smoothstep(2.5, 7.0, gpx);
  }
  h += gv*uGran;

  // active regions: white-hot cores with loop filaments
  float act = 0.0;
  for (int k = 0; k < 5; k++){
    if (k >= uNAct) break;
    act += loops(n, normalize(uAct[k].xyz), uAct[k].w, float(k)*0.37 + uSeed);
  }
  // tiny hot speckles
  float sp = smoothstep(0.7, 0.95, snoise(n*uScale*7.0 + vec3(t*0.08)))*uSpeck*detail*0.5;

  // sunspots (the sun only)
  float spot = 1.0;
  for (int k=0; k<6; k++){
    if (k >= uNSpots) break;
    vec3 dir = normalize(uSpots[k].xyz);
    float r = uSpots[k].w;
    float ang = acos(clamp(dot(n, dir), -1.0, 1.0));
    if (ang > r*1.2) continue;
    float pen = smoothstep(r, r*0.78, ang);
    float umb = smoothstep(r*0.46, r*0.34, ang);
    spot *= mix(1.0, 0.55, pen);
    spot *= mix(1.0, 0.25, umb);
  }

  // color ramp
  vec3 c = mix(uDeep, uMid, smoothstep(0.08, 0.45, h));
  c = mix(c, uBright, smoothstep(0.52, 0.85, h));
  c = mix(c, uHot, smoothstep(0.86, 1.1, h)*0.8);
  c *= spot;
  c = mix(c, uDeep*0.5, (1.0 - spot)*0.6);
  // bright, glowing limb (this look has limb brightening, not darkening)
  float x = 1.0 - mu;
  float rim = pow(x, 2.2);
  c *= mix(1.0, uLimbD, smoothstep(0.15, 0.93, x));
  c = mix(c, uBright, smoothstep(0.86, 1.0, x)*0.65*uRim);
  c = mix(c, uHot, pow(x, 12.0)*0.7*uRim);
  // depth: darker intergranular lanes, never flat
  c *= mix(0.84, 1.0, smoothstep(0.1, 0.45, h));
  c += uHot*act*1.25 + uBright*sp*0.6;
  c = min(c, vec3(1.0));
  gl_FragColor = vec4(c*opacity, opacity);
}`

const CORONA_FRAG = /* glsl */ `
uniform vec3 uGlow, uHotGlow;
uniform float opacity, uG, uTime, uStrength, uFlame;
varying vec2 vUv;
void main(){
  vec2 q = (vUv - 0.5)*2.0*uG;
  float d = length(q);
  if (d < 0.993) discard;
  float a = atan(q.y, q.x);
  float x = d - 1.0;
  // fiery fringe: flame tongues licking off the limb
  float fl = snoise(vec3(cos(a)*9.0, sin(a)*9.0, uTime*0.2 - x*8.0))*0.5 + 0.5;
  float fl2 = snoise(vec3(cos(a)*26.0, sin(a)*26.0, uTime*0.3 - x*22.0))*0.5 + 0.5;
  float flame = exp(-x/(0.012 + 0.05*fl*fl))*(0.6*fl + 0.4*fl2)*uFlame*1.2;
  float str = 0.75 + 0.25*snoise(vec3(cos(a)*3.0, sin(a)*3.0, uTime*0.01 + x*0.3));
  float glow = 0.9*exp(-x*13.0) + 0.22*exp(-x*6.0) + 0.26*exp(-x*4.5)*str + 0.06*exp(-x*1.4) + 0.02*exp(-x*0.5);
  glow *= smoothstep(uG, uG*0.5, d) * uStrength;
  vec3 c = mix(uGlow, uHotGlow, exp(-x*16.0)) * glow + mix(uGlow, uHotGlow, 0.5)*flame*0.5*uStrength;
  gl_FragColor = premul(c, opacity);
}`

// flare ribbons: one canonical loop per strand, animated entirely by uniforms (grow from the feet, rise, flow, drain or erupt)
const FLARE_VERT = /* glsl */ `
uniform float uGrow, uDrift;
varying vec2 vUv; varying vec3 vVN;
void main(){
  vUv = uv;
  vec3 p = position;
  float L = length(p);
  float r = mix(0.93, L, uGrow);           // the loop rises out of (and sinks back into) the surface
  p = p/L*r;
  // eruption: the top lifts away first, the loop swells as it goes
  float top = smoothstep(0.0, 0.25, L - 1.0);
  p.y += uDrift*(0.25 + 0.75*top);
  p.xz *= 1.0 + uDrift*0.9*top;
  vVN = normalize(normalMatrix*normal);
  gl_Position = projectionMatrix*modelViewMatrix*vec4(p, 1.0);
}`

const FLARE_FRAG = /* glsl */ `
uniform vec3 uColor, uHotC;
uniform float opacity, uTime, uSeed, uReveal, uBright, uCore, uWide, uSpeed;
varying vec2 vUv; varying vec3 vVN;
void main(){
  float along = vUv.x;
  float tS = uTime*uSpeed;
  float m = min(along, 1.0 - along)*2.0;          // 0 at the footpoints, 1 at the apex
  float vis = smoothstep(uReveal + 0.02, uReveal - 0.2, m);
  if (vis <= 0.001) discard;
  float face = abs(vVN.z);
  float soft = pow(face, 1.6);                     // soft volumetric edge
  float core = pow(face, 9.0);                     // hot inner thread
  // plasma streams up from both feet and twists around the ribbon
  float a = vUv.y*6.2831 + along*9.0 + tS*0.7 + uSeed;
  float flow = snoise(vec3(m*7.0 - tS*0.45, cos(a)*0.9, sin(a)*0.9 + uSeed))*0.5 + 0.5;
  float fine = snoise(vec3(m*28.0 - tS*0.9, cos(a)*2.5 + uSeed, sin(a)*2.5))*0.5 + 0.5;
  float knots = smoothstep(0.45, 0.95, flow);
  float feet = pow(1.0 - m, 5.0);
  float dens = soft*(0.3 + 0.7*knots)*(0.55 + 0.45*fine)*mix(1.15, 0.7, uWide);
  vec3 c = uColor*(0.7 + 0.9*knots);
  c = mix(c, uHotC, clamp(core*uCore*(0.4 + 0.8*fine) + feet*0.55, 0.0, 1.0));
  c += uHotC*feet*0.35;
  gl_FragColor = premul(c*dens*vis*uBright, opacity*clamp(uBright, 0.0, 1.0));
}`

function makeStar(b: Body, spec: StarSpec): BodyObj {
  const group = new THREE.Group()
  const obj: BodyObj = { group, fades: [], dot: '#fff' }
  const tempK = b.tempK ?? 5800
  const look = LOOKS[b.id] ?? LOOKS.sun
  obj.dot = `rgb(${(look.bright[0] * 255) | 0},${(look.bright[1] * 255) | 0},${(look.bright[2] * 255) | 0})`
  const r1 = rng(tempK * 7 + 3)
  const dirAt = (lat: number, lon: number) => new THREE.Vector3(Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon))
  const spots: THREE.Vector4[] = []
  let lat = 0, lon = 0
  for (let k = 0; k < 6; k++) {
    if (k < spec.spots) {
      const leader = k === 0 || r1() < 0.45
      if (leader) { lat = (r1() < 0.5 ? -1 : 1) * (0.14 + r1() * 0.32); lon = -0.8 + r1() * 1.6 }
      else { lon -= 0.03 + r1() * 0.11; lat += (r1() - 0.5) * 0.07 }
      const d = dirAt(lat, lon)
      spots.push(new THREE.Vector4(d.x, d.y, d.z, spec.spotSize * (leader ? 0.8 + r1() * 0.6 : 0.35 + r1() * 0.35)))
    } else spots.push(new THREE.Vector4(0, 0, 1, 0))
  }
  const acts: THREE.Vector4[] = []
  for (let k = 0; k < 5; k++) {
    if (k < spec.active) {
      const d = dirAt((r1() - 0.5) * 1.1, (r1() - 0.5) * 1.8)
      acts.push(new THREE.Vector4(d.x, d.y, d.z, spec.actSize * (0.7 + r1() * 0.6)))
    } else acts.push(new THREE.Vector4(0, 0, 1, 0))
  }
  const V = (c: V3) => new THREE.Vector3(...c)
  const uniforms = {
    uDeep: { value: V(look.deep) }, uMid: { value: V(look.mid) }, uBright: { value: V(look.bright) }, uHot: { value: V(look.hot) },
    uTime: { value: 0 }, uScale: { value: spec.scale }, uContrast: { value: spec.contrast },
    uPx: { value: 500 }, uSeed: { value: (tempK % 97) * 0.13 }, uRim: { value: 1 }, uSpeck: { value: spec.speck },
    uCell: { value: (GRAN[b.id] ?? [30, 0.3, 0.75])[0] }, uGran: { value: (GRAN[b.id] ?? [30, 0.3, 0.75])[1] }, uLimbD: { value: (GRAN[b.id] ?? [30, 0.3, 0.75])[2] },
    uSpots: { value: spots }, uNSpots: { value: spec.spots },
    uAct: { value: acts }, uNAct: { value: spec.active },
    opacity: { value: 1 },
  }
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `varying vec3 vN; varying vec3 vP;
      void main(){ vN = normalize(normalMatrix*normal); vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: NOISE + STAR_FRAG,
    transparent: true, toneMapped: false, premultipliedAlpha: true,
  })
  obj.fades.push({ material: mat as unknown as THREE.Material & { opacity: number }, base: 1 })
  const rot = new THREE.Group()
  group.add(rot)
  obj.rot = rot
  const spinG = new THREE.Group()
  spinG.rotation.z = -0.12
  rot.add(spinG)
  const disc = new THREE.Mesh(sphere(), mat)
  disc.renderOrder = 0
  spinG.add(disc)

  // flares: a small pool of 3d loop ribbons on the rotating star. each one lives through
  // emerge -> rise -> brighten -> drain (or, now and then, erupt and drift away), then respawns elsewhere
  const [nFl, flSpan, flH] = FLARES[b.id] ?? [4, 0.2, 0.15]
  // hot blue/white stars (and the sun) run fast, energetic cycles: quick rise, fast plasma flow, flicker, more eruptions
  const hotStar = tempK > 7000
  const energy = hotStar ? 1 : b.id === 'sun' ? 0.6 : 0
  const flowSpeed = 1 + 1.8 * energy
  const giant = flH > 0.3
  type FU = Record<'uGrow' | 'uReveal' | 'uDrift' | 'uBright' | 'uTime', { value: number }>
  type Slot = { g: THREE.Group; u: FU[]; t0: number; D: number; erupt: boolean; hm: number; gap: number }
  const slots: Slot[] = []
  const Y = new THREE.Vector3(0, 1, 0)
  const hotC = V(look.hot.map((v, i) => v * 0.7 + look.bright[i] * 0.3) as V3)
  for (let k = 0; k < nFl; k++) {
    const g = new THREE.Group()
    const sz = 0.7 + r1() * 0.6
    const span = flSpan * sz, H = flH * sz * 1.25
    const A = new THREE.Vector3(-Math.sin(span / 2), Math.cos(span / 2), 0)
    const B = new THREE.Vector3(Math.sin(span / 2), Math.cos(span / 2), 0)
    const side = new THREE.Vector3(0, 0, 1)
    const us: FU[] = []
    const strands = 8
    for (let sIdx = 0; sIdx < strands; sIdx++) {
      const wide = sIdx < 2
      const pts: THREE.Vector3[] = []
      const hj = H * (wide ? 0.85 : 0.6 + 0.5 * r1())
      const off = (r1() - 0.5) * span * (wide ? 0.1 : 0.3)
      const bend = (r1() - 0.5) * H * 0.6
      const ph = r1() * 6.28, fq = 2 + r1() * 3
      const lean = (r1() - 0.5) * 0.5
      for (let i = 0; i <= 48; i++) {
        const t = i / 48
        const dir = new THREE.Vector3().copy(A).lerp(B, t).normalize()
        const lift = Math.sin(Math.PI * t)
        const rr = 1 + hj * Math.pow(lift, 0.75) * (1 + 0.1 * Math.sin(t * fq * 3.1 + ph))
        const pp = dir.multiplyScalar(rr)
        pp.addScaledVector(side, (off + bend * lift + 0.05 * H * Math.sin(t * fq * 5 + ph)) * lift)
        pp.x += lean * H * lift * lift
        pts.push(pp)
      }
      const curve = new THREE.CatmullRomCurve3(pts)
      const rad = wide ? H * (0.13 + 0.05 * r1()) : H * (0.018 + 0.05 * r1() * r1())
      const geo = new THREE.TubeGeometry(curve, 96, rad, wide ? 10 : 7, false)
      const pu = {
        uColor: { value: hotStar ? V(look.prom.map((v, i) => v * 0.55 + look.bright[i] * 0.45) as V3) : V(look.prom) }, uHotC: { value: hotC }, opacity: { value: 1 }, uTime: { value: 0 }, uSeed: { value: k * 5.1 + sIdx * 1.7 },
        uGrow: { value: 1 }, uDrift: { value: 0 }, uReveal: { value: 1.2 }, uBright: { value: 1 }, uCore: { value: wide ? 0.2 : 1 }, uWide: { value: wide ? 1 : 0 }, uSpeed: { value: flowSpeed },
      }
      us.push(pu)
      const pm = glow(new THREE.ShaderMaterial({
        uniforms: pu, vertexShader: FLARE_VERT, fragmentShader: PREMUL + NOISE + FLARE_FRAG,
        depthWrite: false, transparent: true, toneMapped: false, side: THREE.DoubleSide,
      }))
      obj.fades.push({ material: pm as unknown as THREE.Material & { opacity: number }, base: 1 })
      const tube = new THREE.Mesh(geo, pm)
      tube.renderOrder = 1
      g.add(tube)
    }
    spinG.add(g)
    slots.push({ g, u: us, t0: 0, D: 10, erupt: false, hm: 1, gap: 0 })
  }
  const qW = new THREE.Quaternion(), qT = new THREE.Quaternion(), dv = new THREE.Vector3()
  const place = (sl: Slot) => {
    // mostly on the visible limb (reads as a prominence), some across the disc (bright loops)
    const limb = r1() < (hotStar ? 0.8 : 0.65)
    const ph = r1() * Math.PI * 2, z = limb ? -0.12 + r1() * 0.35 : 0.3 + r1() * 0.6, q = Math.sqrt(1 - z * z)
    dv.set(Math.cos(ph) * q, Math.sin(ph) * q, z)
    spinG.getWorldQuaternion(qW).invert()
    dv.applyQuaternion(qW).normalize()
    sl.g.quaternion.setFromUnitVectors(Y, dv).multiply(qT.setFromAxisAngle(Y, r1() * Math.PI * 2))
  }
  const spawn = (sl: Slot, now: number, pre: number) => {
    sl.erupt = r1() < 0.14 + 0.16 * energy
    const dk = (1 - 0.5 * energy) * (giant ? 1.25 : 1)   // hot stars: cycles of a few seconds
    sl.D = (sl.erupt ? 10 + r1() * 4 : 7 + r1() * 4) * dk
    sl.hm = sl.erupt ? 1.2 : 0.75 + r1() * 0.45
    // idle at zero for 1-6s before the next one (hot stars shorter, supergiants longer)
    sl.gap = (1 + r1() * 5) * (1 - 0.5 * energy) * (giant ? 1.4 : 1)
    // pre in [0,1) is a phase through the whole cycle (life + idle), so some slots start idle
    const ph = pre * (sl.D + sl.gap)
    sl.t0 = now - ph
    place(sl)
  }
  let flInit = false
  const setPhase = (sl: Slot, u: number, tt: number) => {
    // grow out of the surface (0-40%), hold with flow (40-60%), sink back in (60-100%)
    // or, for an eruption, detach and drift away while fading. height really goes 0 -> 1 -> 0;
    // below the surface the star's disc hides the loop, so it rises from and sinks into the limb.
    let grow = 0, drift = 0, bright = 1
    const reveal = 1.2
    const ease = (x: number) => x * x * (3 - 2 * x)
    if (u < 0.4) {
      const k = u / 0.4
      grow = ease(Math.max(0, (k - 0.08) / 0.92))
      bright = 1 + 0.6 * Math.exp(-Math.pow(k / 0.12, 2))   // footpoints flash first
    } else if (u < 0.6) {
      const k = (u - 0.4) / 0.2
      grow = 1 + 0.06 * Math.sin(k * Math.PI)
      bright = 1 + 0.45 * Math.sin(k * Math.PI)
    } else {
      const k = Math.min(1, (u - 0.6) / 0.4)
      if (sl.erupt) { grow = 1.05; drift = 1.1 * k * k * sl.hm * flH * 6; bright = 1.1 * (1 - ease(k)) }
      else { grow = 1 - ease(k); bright = 1 - 0.25 * k }
    }
    // flicker / brightening pulses, strongest on the hot stars
    if (energy > 0) bright *= (1 + 0.7 * energy) * (1 + energy * (0.22 * Math.sin(tt * 7.3 + sl.hm * 11) + 0.14 * Math.sin(tt * 13.1 + sl.D) + 0.1 * Math.sin(tt * 23.7)))
    for (const pu of sl.u) {
      pu.uGrow.value = grow * sl.hm; pu.uReveal.value = reveal; pu.uDrift.value = drift; pu.uBright.value = bright; pu.uTime.value = tt
    }
  }

  const G = 4.4
  const gu = {
    uGlow: { value: V(look.glow ?? (look.mid.map((v, i) => v * 0.75 + look.bright[i] * 0.25) as V3)) },
    uHotGlow: { value: V(look.bright.map((v, i) => v * 0.6 + look.hot[i] * 0.4) as V3) },
    opacity: { value: 1 }, uG: { value: G }, uTime: { value: 0 }, uStrength: { value: spec.glow }, uFlame: { value: spec.flame },
  }
  const gm = glow(new THREE.ShaderMaterial({
    uniforms: gu,
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: PREMUL + NOISE + CORONA_FRAG,
    depthWrite: false, depthTest: false, transparent: true, toneMapped: false,
  }))
  obj.fades.push({ material: gm as unknown as THREE.Material & { opacity: number }, base: 1 })
  const glowMesh = new THREE.Mesh(quad(), gm)
  glowMesh.scale.set(2 * G, 2 * G, 1)
  glowMesh.renderOrder = 2
  group.add(glowMesh)
  obj.update = (t, dt, rs, reduced, auto) => {
    const tt = reduced ? 0 : t
    uniforms.uTime.value = tt
    gu.uTime.value = tt
    // flare clock: slowed uniformly so every flare timescale doubles
    const ft = t / FLARE_SLOW, ftt = tt / FLARE_SLOW
    if (!flInit) { flInit = true; slots.forEach((sl) => spawn(sl, ft, r1())) }
    slots.forEach((sl, k) => {
      if (reduced) {
        // reduced motion: flares mostly retracted, one low static loop
        sl.g.visible = k === 0
        if (k === 0) setPhase(sl, 0.12, 0)
        return
      }
      const u = (ft - sl.t0) / sl.D
      if (u >= 1) {
        sl.g.visible = false
        if ((u - 1) * sl.D > sl.gap) spawn(sl, ft, 0)
        return
      }
      setPhase(sl, Math.max(0, u), ftt)
      sl.g.visible = u >= 0 && (sl.u[0].uGrow.value > 0.01 || sl.u[0].uDrift.value > 0)
    })
    uniforms.uPx.value = rs * GLScene.dpr
    if (!reduced) spinG.rotation.y += dt * 0.012 * SPIN_K * (b.id === 'sun' ? PLANET_SPIN : 1) * auto
  }
  return obj
}

// ---------- galaxies (procedural, shader) ----------
const GALAXY_FRAG = /* glsl */ `
uniform float uTime, uArms, uPitch, uBar, uBulge, uDust, uSeed, uPx, opacity, uSpin, uFloc, uClump, uRing, uWarmR, uKnotAmt;
uniform vec3 uGold, uGrey, uBlue, uDustC, uKnot, uWarm;
uniform float uGain;
varying vec2 vUv;
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
vec2 h22(vec2 p){ float n = h21(p); return vec2(n, h21(p + n*17.1)); }
mat2 R(float a){ return mat2(cos(a), -sin(a), sin(a), cos(a)); }
float fbm4(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ s+=a*snoise(p); p=p*2.03+1.3; a*=0.5; } return s; }
float fbm6(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<6;i++){ s+=a*snoise(p); p=p*2.03+1.3; a*=0.52; } return s; }
float ridge(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ float n=1.0-abs(snoise(p)); s+=a*n*n*n; p=p*2.1+2.7; a*=0.55; } return s; }

// crisp point stars on a grid sized to the screen
float stars(vec2 p, float N, float density, float seed){
  vec2 g = p*N; vec2 id = floor(g); vec2 f = fract(g);
  float h = h21(id + seed);
  if (h > density) return 0.0;
  vec2 o = 0.2 + 0.6*h22(id + seed*3.1);
  float cellPx = uPx*1.25/N;               // pixels per cell (quad spans 2.5 radii)
  float d = length(f - o)*cellPx;
  float b = pow(h/density, 3.0);
  return exp(-d*d/(0.35 + 0.9*b))*(0.35 + 0.65*b);
}

void main(){
  vec2 p = (vUv - 0.5)*2.5;                 // galaxy radius = 1
  p = R(uSpin)*p;
  float r = length(p);
  if (r > 1.25) discard;
  float lr = log(max(r, 0.015));
  float wind = lr/tan(uPitch);
  float th = atan(p.y, p.x);
  // unwound frame: spiral arms become straight, isotropic noise here shears into arm fragments
  vec2 q = R(-lr*1.2)*p;

  // bar + bulge
  float bar = exp(-pow(p.x/0.3, 2.0) - pow(p.y/0.085, 2.0))*uBar;
  float bulge = exp(-pow(r/uBulge, 0.75)*3.2);
  float core = exp(-r/0.018);

  // spiral arms (start at the bar ends for barred spirals)
  float phase = th - wind;
  float arms = 0.5 + 0.5*cos(uArms*phase);
  arms = pow(arms, 2.2);
  float armZone = smoothstep(0.1 + uBar*0.14, 0.3 + uBar*0.1, r)*smoothstep(1.05, 0.55, r);
  float floc = fbm6(vec3(q*6.0, uSeed));
  float frag = smoothstep(-0.3, 0.5, floc);
  float armL = (arms*(0.45 + 0.9*frag)*(1.0 - uFloc*0.4) + frag*frag*0.55*uFloc)*armZone;
  // rings (andromeda-like)
  float ring = uRing*(exp(-pow((r - 0.55)/0.07, 2.0)) + 0.6*exp(-pow((r - 0.8)/0.06, 2.0)))*(0.6 + 0.4*frag);
  armL = max(armL, ring);

  float disk = exp(-r/0.3)*smoothstep(1.1, 0.6, r);
  float haze = exp(-r/0.45)*smoothstep(1.2, 0.7, r);
  float lum = disk*(0.4 + 1.7*armL) + haze*0.22 + bulge*0.9 + bar*0.55 + core*0.8;

  // star-forming clumps: blue-white knots riding the arms
  float kn = snoise(vec3(q*38.0, uSeed + 2.0))*0.5 + 0.5;
  float kn2 = snoise(vec3(q*90.0, uSeed + 5.0))*0.5 + 0.5;
  float clumps = smoothstep(0.7, 0.95, kn*0.7 + kn2*0.45)*armL*uClump*smoothstep(0.18, 0.35, r)*smoothstep(1.0, 0.5, r);

  // dust: fine brown filaments, strongest on the inner edge of arms
  float armIn = pow(0.5 + 0.5*cos(uArms*(phase + 0.5/uArms)), 3.0);
  float broad = smoothstep(0.35, 0.8, ridge(vec3(q*6.5, uSeed + 9.0)));
  float fine = smoothstep(0.45, 0.8, ridge(vec3(q*17.0, uSeed + 11.0)));
  float patchy = smoothstep(-0.2, 0.4, fbm4(vec3(q*5.0, uSeed + 4.0)));
  float dustN = (broad*0.75 + fine*0.45)*(0.45 + 0.55*patchy) + armIn*patchy*0.35;
  float dust = dustN*mix(0.55, 1.0, max(armIn, ring*0.8))*smoothstep(0.07, 0.22, r)*smoothstep(1.1, 0.55, r)*uDust;
  dust += uRing*patchy*(exp(-pow((r - 0.47)/0.035, 2.0)) + 0.8*exp(-pow((r - 0.68)/0.04, 2.0)) + 0.5*exp(-pow((r - 0.34)/0.03, 2.0)))*uDust;
  dust = clamp(dust, 0.0, 0.92);

  vec3 gold = uGold;
  vec3 grey = uGrey;
  vec3 blue = uBlue;
  float bf = clamp((bulge*0.9 + bar*0.5 + core)/(lum + 1e-4), 0.0, 1.0);
  vec3 col = mix(grey, gold, bf);
  col = mix(col, uWarm, exp(-r/uWarmR)*0.45*(1.0 - bf));
  col = mix(col, mix(col, blue, 0.35), armL*(1.0 - bf));
  vec3 c = col*lum;
  c += blue*clumps*0.95 + uKnot*clumps*(step(0.93, kn)*0.4 + uKnotAmt*0.6*smoothstep(0.55, 0.8, kn2));
  // dust absorbs and reddens
  c *= mix(vec3(1.0), uDustC, dust);

  // resolved stars in the disc (sharp at any size), density follows the light
  float N = exp2(floor(log2(max(uPx/2.2, 64.0))));
  float dens = clamp(lum*0.5, 0.0, 0.5)*(1.0 - 0.75*bf);
  float st = stars(p, N, dens*0.35, uSeed) + stars(p, N*0.5, dens*0.2, uSeed + 7.0)*1.4;
  c += mix(vec3(1.0, 0.95, 0.88), blue, 0.5)*st*(1.0 - dust*0.7)*0.9;

  // gentle tone curve so the core glows golden without clipping
  c = 1.0 - exp(-c*1.9*uGain);
  float fade = smoothstep(1.25, 1.0, r);
  gl_FragColor = premul(c*fade, opacity);
}`

const HASH = /* glsl */ `
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
vec2 h22(vec2 p){ float n = h21(p); return vec2(n, h21(p + n*17.1)); }
float fbm4(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<4;i++){ s+=a*snoise(p); p=p*2.03+1.3; a*=0.5; } return s; }
// crisp stars on a grid; p in radii, uPx = px per radius
float starsP(vec2 p, float N, float density, float seed, float px){
  vec2 g = p*N; vec2 id = floor(g); vec2 f = fract(g);
  float h = h21(id + seed);
  if (h > density) return 0.0;
  vec2 o = 0.2 + 0.6*h22(id + seed*3.1);
  float d = length(f - o)*px/N;
  float b = pow(h/max(density, 1e-4), 3.0);
  return exp(-d*d/(0.3 + 1.1*b))*(0.3 + 0.7*b);
}
vec3 starCol(float h){ return h < 0.3 ? vec3(1.0, 0.72, 0.45) : h < 0.55 ? vec3(1.0, 0.95, 0.86) : h < 0.8 ? vec3(0.78, 0.86, 1.0) : vec3(1.0, 0.6, 0.72); }
`

/** dwarf galaxies. kind 0: smooth spheroidal/elliptical. kind 1: lmc-like irregular (grey-blue haze, pink bar, h-alpha knots, grainy stars) */
const BLOB_FRAG = /* glsl */ `
uniform float opacity, uPx, uSeed, uKind, uBright, uAsp;
uniform vec3 uTint;
varying vec2 vUv;
void main(){
  vec2 p = (vUv - 0.5)*2.4;                 // quad spans 1.2 radii
  vec2 e = vec2(p.x, p.y/uAsp);
  float r = length(e);
  if (r > 1.2) discard;
  float px = max(uPx, 1.0);
  vec3 c;
  // on-screen glow so a member a few pixels across still reads
  float halo = exp(-r*r*2.5)*0.05*uBright;
  if (uKind < 0.5) {
    float I = exp(-pow(r, 0.55)*4.2)*2.2 + exp(-r*r*6.0)*0.25;
    c = uTint*I*uBright;
    float N = exp2(floor(log2(clamp(px/2.0, 8.0, 2048.0))));
    float st = starsP(p, N, clamp(I*0.6, 0.0, 0.45), uSeed, px);
    c += vec3(1.0, 0.9, 0.8)*st*0.6;
  } else {
    float n = fbm4(vec3(p*2.2, uSeed));
    float haze = exp(-pow(r, 1.3)*2.4)*(0.75 + 0.45*n);
    vec2 bq = vec2(p.x*0.94 + p.y*0.34, -p.x*0.34 + p.y*0.94);
    float bar = exp(-pow(bq.x/0.55, 2.0) - pow(bq.y/0.15, 2.0))*(0.8 + 0.4*n);
    c = vec3(0.6, 0.66, 0.8)*haze*0.55 + vec3(0.92, 0.6, 0.68)*bar*0.55;
    // h-alpha knots and cyan clusters
    float kn = snoise(vec3(p*7.0, uSeed + 3.0))*0.5 + 0.5;
    float k2 = snoise(vec3(p*19.0, uSeed + 8.0))*0.5 + 0.5;
    float knots = smoothstep(0.72, 0.92, kn*0.65 + k2*0.5)*haze;
    c += vec3(1.0, 0.28, 0.38)*knots*0.9;
    // tarantula-like complex
    vec2 tq = p - vec2(-0.42, 0.34);
    float tar = exp(-dot(tq, tq)*60.0);
    c += vec3(1.0, 0.35, 0.45)*tar*0.9*(0.6 + 0.6*k2) + vec3(0.6, 0.95, 1.0)*exp(-dot(tq, tq)*500.0)*1.2;
    float I = haze + bar;
    float N = exp2(floor(log2(clamp(px/1.6, 8.0, 2048.0))));
    float h = h21(floor(p*N) + uSeed*1.7);
    float st = starsP(p, N, clamp(0.08 + I*0.5, 0.0, 0.6), uSeed, px) + starsP(p, N*0.5, clamp(I*0.2, 0.0, 0.3), uSeed + 5.0, px)*1.3;
    c += starCol(h)*st*0.85;
    // fine grain, like a long exposure
    c *= 0.85 + 0.3*h21(floor(p*px) + uSeed);
    c *= uBright;
  }
  c += vec3(0.85, 0.88, 1.0)*halo;
  c = 1.0 - exp(-c*1.6);
  gl_FragColor = premul(c*smoothstep(1.2, 0.9, r), opacity);
}`

/** colorful crisp star field, denser toward the middle, fading at the edge */
const FIELD_FRAG = /* glsl */ `
uniform float opacity, uPx, uSeed, uSpan;
varying vec2 vUv;
void main(){
  vec2 p = (vUv - 0.5)*uSpan;
  float r = length(p);
  float edge = smoothstep(uSpan*0.5, uSpan*0.28, r);
  if (edge <= 0.0) discard;
  float px = max(uPx, 1.0);
  float N = exp2(floor(log2(clamp(px/5.0, 8.0, 2048.0))));
  float dens = 0.1 + 0.2*exp(-r*1.5);
  float h = h21(floor(p*N) + uSeed);
  float h2 = h21(floor(p*N*0.25) + uSeed + 3.0);
  float s1 = starsP(p, N, dens, uSeed, px);
  float s2 = starsP(p, N*0.25, dens*0.5, uSeed + 3.0, px);
  vec3 c = starCol(h)*s1*0.7 + starCol(h2)*s2*1.2;
  c += vec3(0.5, 0.42, 0.9)*exp(-r*r*1.6)*0.035;   // faint violet halo
  gl_FragColor = premul(c*edge, opacity);
}`

const VERT_UV = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `

function softGlow(obj: BodyObj, x: number, y: number, r: number, c: [number, number, number], k: number) {
  const u = { opacity: { value: 1 }, uC: { value: new THREE.Vector3(...c).multiplyScalar(k) } }
  const m = glow(new THREE.ShaderMaterial({ uniforms: u, vertexShader: VERT_UV,
    fragmentShader: PREMUL + `uniform float opacity; uniform vec3 uC; varying vec2 vUv; void main(){ float r = length(vUv-0.5)*2.0; float g = exp(-r*r*4.0)*(1.0 - smoothstep(0.8, 1.0, r)) + exp(-r*18.0)*1.5; gl_FragColor = premul(uC*g, opacity); }`,
    depthWrite: false, transparent: true, toneMapped: false }))
  obj.fades.push({ material: m as unknown as THREE.Material & { opacity: number }, base: 1 })
  const mesh = new THREE.Mesh(quad(), m)
  mesh.position.set(x, y, 0); mesh.scale.setScalar(r * 2)
  return mesh
}

function makeBlob(obj: BodyObj, kind: number, seed: number, bright: number, asp: number, tint: [number, number, number] = [1.0, 0.93, 0.84]) {
  const u = { opacity: { value: 1 }, uPx: { value: 10 }, uSeed: { value: seed }, uKind: { value: kind }, uBright: { value: bright }, uAsp: { value: asp }, uTint: { value: new THREE.Vector3(...tint) } }
  const m = glow(new THREE.ShaderMaterial({ uniforms: u, vertexShader: VERT_UV, fragmentShader: PREMUL + NOISE + HASH + BLOB_FRAG, depthWrite: false, transparent: true, toneMapped: false }))
  obj.fades.push({ material: m as unknown as THREE.Material & { opacity: number }, base: 1 })
  const mesh = new THREE.Mesh(quad(), m)
  return { mesh, uPx: u.uPx }
}

function makeField(obj: BodyObj, span: number, seed: number) {
  const u = { opacity: { value: 1 }, uPx: { value: 10 }, uSeed: { value: seed }, uSpan: { value: span * 2 } }
  const m = glow(new THREE.ShaderMaterial({ uniforms: u, vertexShader: VERT_UV, fragmentShader: PREMUL + NOISE + HASH + FIELD_FRAG, depthWrite: false, transparent: true, toneMapped: false }))
  obj.fades.push({ material: m as unknown as THREE.Material & { opacity: number }, base: 1 })
  const mesh = new THREE.Mesh(quad(), m)
  mesh.scale.setScalar(span * 2)
  mesh.renderOrder = -1
  return { mesh, uPx: u.uPx }
}

const MW_PAL: GalaxyPal = { gold: [1.0, 0.8, 0.52], grey: [0.78, 0.8, 0.84], blue: [0.7, 0.82, 1.0], dust: [0.42, 0.26, 0.13], knot: [1.0, 0.55, 0.6], warm: [0.95, 0.82, 0.62], warmR: 0.22, knotAmt: 0 }

function makeGalaxy(b: Body, spec: GalaxySpec): BodyObj {
  const group = new THREE.Group()
  const obj: BodyObj = { group, fades: [], dot: '#e9dcc4' }
  const pal = spec.pal ?? MW_PAL
  const pxUs: { u: { value: number }; k: number }[] = []
  // dense crisp colorful field around the galaxy (fades out radially)
  if (spec.field) {
    const f = makeField(obj, 2.3, spec.seed)
    group.add(f.mesh)
    pxUs.push({ u: f.uPx, k: 1 })
  }
  const u = {
    uTime: { value: 0 }, uArms: { value: spec.arms }, uPitch: { value: spec.pitch }, uBar: { value: spec.bar }, uBulge: { value: spec.bulge },
    uDust: { value: spec.dust }, uSeed: { value: spec.seed }, uPx: { value: 500 }, opacity: { value: 1 }, uSpin: { value: 0 },
    uFloc: { value: spec.floc }, uClump: { value: spec.clump }, uRing: { value: spec.ring },
    uGold: { value: new THREE.Vector3(...pal.gold) }, uGrey: { value: new THREE.Vector3(...pal.grey) }, uBlue: { value: new THREE.Vector3(...pal.blue) },
    uDustC: { value: new THREE.Vector3(...pal.dust) }, uKnot: { value: new THREE.Vector3(...pal.knot) }, uWarm: { value: new THREE.Vector3(...pal.warm) },
    uWarmR: { value: pal.warmR }, uKnotAmt: { value: pal.knotAmt }, uGain: { value: pal.gain ?? 1 },
  }
  const m = glow(new THREE.ShaderMaterial({
    uniforms: u,
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: PREMUL + NOISE + GALAXY_FRAG,
    depthWrite: false, transparent: true, toneMapped: false, side: THREE.DoubleSide,
  }))
  obj.fades.push({ material: m as unknown as THREE.Material & { opacity: number }, base: 1 })
  const rot = new THREE.Group()
  group.add(rot)
  obj.rot = rot
  const orient = new THREE.Group()
  orient.rotation.set(spec.tilt, 0, spec.pa, 'ZXY')
  rot.add(orient)
  const disc = new THREE.Mesh(quad(), m)
  disc.scale.set(2.5, 2.5, 1)
  orient.add(disc)
  // camera-facing core glow so an edge-on view still has a bulge
  const cu = { opacity: { value: 1 } }
  const cm = glow(new THREE.ShaderMaterial({
    uniforms: cu,
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: PREMUL + `uniform float opacity; varying vec2 vUv; void main(){ float r = length(vUv-0.5)*2.0; float g = exp(-r*r*18.0)*0.35 + exp(-r*6.0)*0.08; gl_FragColor = premul(vec3(1.0, 0.82, 0.58)*g, opacity); }`,
    depthWrite: false, depthTest: false, transparent: true, toneMapped: false,
  }))
  obj.fades.push({ material: cm as unknown as THREE.Material & { opacity: number }, base: 1 })
  const coreMesh = new THREE.Mesh(quad(), cm)
  coreMesh.scale.set(spec.bulge * 3.2, spec.bulge * 3.2, 1)
  coreMesh.renderOrder = 3
  group.add(coreMesh)
  for (const [x, y, rx, ry, ang, br] of spec.sats ?? []) {
    const sb = makeBlob(obj, 0, spec.seed + x * 13, br, ry / rx)
    sb.mesh.position.set(x, y, 0)
    sb.mesh.scale.setScalar(rx * 2.4)
    sb.mesh.rotation.z = ang
    sb.mesh.renderOrder = 2
    group.add(sb.mesh)
    pxUs.push({ u: sb.uPx, k: rx })
  }
  obj.update = (_t, dt, rs, reduced, auto) => {
    u.uPx.value = rs * GLScene.dpr
    for (const p of pxUs) p.u.value = rs * p.k * GLScene.dpr
    if (!reduced) u.uSpin.value += dt * 0.008 * SPIN_K * auto
  }
  void b
  return obj
}

// ---------- black holes (live lensed ray march) ----------
/** schwarzschild lensing in units of the horizon radius (rs = 1): photons bend with the
 * classic a = -1.5 h² r / r⁵ trick, the thin disk is sampled every time a ray crosses its
 * plane (so the far side shows up lensed over the top and under the bottom), with doppler
 * beaming, gravitational redshift, keplerian flow, a photon ring and an optional quasar glow */
const BH_FRAG = /* glsl */ `
uniform float uTime, opacity, uQ, uIn, uOut, uGain, uQuasar, uPx;
uniform vec3 uHot, uCool, uRing;
uniform mat3 uM;
varying vec2 vUv;
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x*p.y); }
void main(){
  vec2 p = (vUv - 0.5)*2.0*uQ;
  float b = length(p);
  if (b > uQ) discard;
  vec3 pos = uM*vec3(p, 12.0);
  vec3 vel = uM*vec3(0.0, 0.0, -1.0);
  float h2 = dot(cross(pos, vel), cross(pos, vel));
  vec3 col = vec3(0.0);
  float alpha = 0.0;
  bool captured = false;
  for (int i = 0; i < 90; i++) {
    float r = length(pos);
    if (r < 1.0) { captured = true; break; }
    if (r > 14.0 && dot(pos, vel) > 0.0) break;
    float dt = clamp(0.085*r*r/(1.0 + r), 0.02, 1.0);
    vec3 acc = -1.5*h2*pos/pow(r, 5.0);
    vec3 v2 = vel + acc*dt;
    vec3 np = pos + v2*dt;
    if (pos.y*np.y < 0.0 && alpha < 0.99) {
      float t = pos.y/(pos.y - np.y);
      vec3 hp = mix(pos, np, t);
      float rr = length(hp.xz);
      if (rr > uIn*0.92 && rr < uOut) {
        float ang = atan(hp.z, hp.x);
        float om = pow(rr, -1.5);
        float fl = ang + uTime*om*1.6;
        vec3 q1 = vec3(cos(fl)*2.4, sin(fl)*2.4, rr*2.2);
        float wv = snoise(q1*0.7 + 4.0);
        float n1 = snoise(q1 + wv*0.6);
        float n2 = snoise(vec3(cos(fl)*6.0, sin(fl)*6.0, rr*6.5 + 3.1) + wv*0.4);
        float n3 = snoise(vec3(cos(fl)*15.0, sin(fl)*15.0, rr*15.0 + 7.7));
        float streak = 0.68 + 0.26*n1 + 0.14*n2 + 0.07*n3;
        float x = uIn/rr;
        float T = pow(x, 0.75)*pow(max(1.0 - sqrt(x*0.93), 0.0), 0.25)*2.2;
        float edge = smoothstep(uIn*0.92, uIn*1.08, rr)*smoothstep(uOut, uOut*0.62, rr);
        // doppler: disk orbits counter-clockwise about +y
        vec3 vd = normalize(vec3(-hp.z, 0.0, hp.x));
        float beta = min(0.7, sqrt(0.5/max(rr - 1.0, 0.3)));
        float gam = inversesqrt(1.0 - beta*beta);
        float cosT = dot(vd, -normalize(v2));
        float g = sqrt(max(1.0 - 1.0/rr, 0.0))/(gam*(1.0 - beta*cosT));
        float I = T*T*streak*edge*pow(g, 3.0);
        vec3 c = mix(uCool, uHot, clamp(pow(T, 1.6)*g*0.75, 0.0, 1.0));
        vec3 e = c*I*uGain*1.3;
        float a = clamp(edge*(0.35 + 0.55*streak)*clamp(T*1.4, 0.0, 1.0), 0.0, 0.92);
        col += (1.0 - alpha)*e;
        alpha += (1.0 - alpha)*a;
      }
    }
    vel = v2; pos = np;
  }
  // photon ring just outside the shadow (critical impact parameter 3√3/2 rs)
  float px = max(uPx, 1.0);
  float w = max(0.018, 1.6/px);
  col += (1.0 - alpha*0.6)*uRing*(exp(-pow((b - 2.598)/w, 2.0))*0.9 + exp(-pow((b - 2.64)/(w*5.0), 2.0))*0.18)*uGain;
  if (captured) alpha = 1.0;
  // quasar: hot light scattered around the inner disk
  if (uQuasar > 0.0) {
    float q = exp(-b*0.9)*0.9 + exp(-b*b/26.0)*0.22 + exp(-b*0.35)*0.08;
    col += mix(uHot, uCool, 0.6)*q*uQuasar*(captured ? 0.12 : 1.0);
  }
  col = 1.0 - exp(-col*1.1);
  float fade = smoothstep(uQ, uQ*0.8, b);
  col *= fade;
  alpha = max(alpha*fade, clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0));
  gl_FragColor = vec4(col, alpha)*opacity;
}`

function makeBlackHole(b: Body, spec: BHSpec): BodyObj {
  const group = new THREE.Group()
  const obj: BodyObj = { group, fades: [], dot: b.color }
  const rot = new THREE.Group()
  group.add(rot)
  obj.rot = rot
  const orient = new THREE.Group()
  orient.rotation.set(spec.tilt, 0, spec.roll, 'ZXY')
  rot.add(orient)
  const Q = (EXTENT[b.id] ?? 6) + 0.6
  const u = {
    uTime: { value: 0 }, opacity: { value: 1 }, uQ: { value: Q }, uIn: { value: spec.disk[0] }, uOut: { value: spec.disk[1] },
    uGain: { value: spec.gain }, uQuasar: { value: spec.quasar }, uPx: { value: 300 },
    uHot: { value: new THREE.Vector3(...spec.hot) }, uCool: { value: new THREE.Vector3(...spec.cool) }, uRing: { value: new THREE.Vector3(...spec.ring) },
    uM: { value: new THREE.Matrix3() },
  }
  const m = glow(new THREE.ShaderMaterial({
    uniforms: u, vertexShader: VERT_UV, fragmentShader: NOISE + BH_FRAG,
    depthWrite: false, depthTest: false, transparent: true, toneMapped: false,
  }))
  obj.fades.push({ material: m as unknown as THREE.Material & { opacity: number }, base: 1 })
  const mesh = new THREE.Mesh(quad(), m)
  mesh.scale.set(2 * Q, 2 * Q, 1)
  group.add(mesh)
  const q = new THREE.Quaternion(), m4 = new THREE.Matrix4()
  let flow = 0
  obj.update = (_t, dt, rs, reduced) => {
    if (!reduced) flow += dt
    u.uTime.value = flow
    u.uPx.value = rs * GLScene.dpr
    // view space -> black hole frame
    q.copy(rot.quaternion).multiply(orient.quaternion).invert()
    u.uM.value.setFromMatrix4(m4.makeRotationFromQuaternion(q))
  }
  return obj
}

// ---------- image structures ----------
function makeImage(b: Body, spec: ImageSpec): BodyObj {
  const group = new THREE.Group()
  const obj: BodyObj = { group, fades: [], dot: b.color, flat: true }
  const u = { uMap: { value: null as THREE.Texture | null }, opacity: { value: 1 }, uMask: { value: new THREE.Vector2(...spec.mask) }, uSat: { value: spec.sat ?? 1 }, uGain: { value: 0 }, uAspect: { value: spec.aspect } }
  const m = glow(new THREE.ShaderMaterial({
    uniforms: u,
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: PREMUL + `uniform sampler2D uMap; uniform float opacity, uSat, uGain, uAspect; uniform vec2 uMask; varying vec2 vUv;
      void main(){
        if (uGain <= 0.0) discard;
        vec3 c = texture2D(uMap, vUv).rgb;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(vec3(l), c, uSat);
        c *= vec3(1.03, 1.0, 0.95); // a touch warmer, toward the site's paper/tan
        vec2 q = (vUv - 0.5) / uMask;
        float d = length(q);
        float mask = smoothstep(1.0, 0.62, d);
        // crush the faint sky background so edges melt into ink
        c = max(c - 0.018, 0.0) * 1.02;
        gl_FragColor = premul(c * mask * uGain, opacity);
      }`,
    depthWrite: false, transparent: true, toneMapped: false,
  }))
  obj.fades.push({ material: m as unknown as THREE.Material & { opacity: number }, base: 1 })
  const mesh = new THREE.Mesh(quad(), m)
  const W = 2 / spec.fill
  mesh.scale.set(W, W * spec.aspect, 1)
  group.add(mesh)
  let asked = false
  obj.wantTex = () => {
    if (asked) return
    asked = true
    loadTex(spec.src).then((t) => { u.uMap.value = t; u.uGain.value = spec.gain ?? 1 })
  }
  return obj
}

// ---------- procedural structures (points + lines) ----------
type Pt = { x: number; y: number; s: number; c: [number, number, number]; a: number }

function pointsMaterial(obj: BodyObj) {
  const u = { opacity: { value: 1 }, uDpr: { value: 1 }, uScale: { value: 1 } }
  const m = glow(new THREE.ShaderMaterial({
    uniforms: u,
    vertexShader: `attribute float aSize; attribute vec3 aColor; attribute float aAlpha; uniform float uDpr, uScale; varying vec3 vC; varying float vA;
      void main(){ vC = aColor; vA = aAlpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
        float s = aSize*uDpr*uScale; gl_PointSize = max(s, 1.0); vA *= min(1.0, s*s); }`,
    fragmentShader: PREMUL + `uniform float opacity; varying vec3 vC; varying float vA;
      void main(){ vec2 q = gl_PointCoord-0.5; float d = dot(q,q)*4.0; float a = exp(-d*3.2); if (a < 0.01) discard; gl_FragColor = premul(vC*a*vA, opacity); }`,
    depthWrite: false, transparent: true, toneMapped: false,
  }))
  obj.fades.push({ material: m as unknown as THREE.Material & { opacity: number }, base: 1 })
  return { m, u }
}

function makePoints(obj: BodyObj, pts: Pt[]) {
  const n = pts.length
  const pos = new Float32Array(n * 3), size = new Float32Array(n), col = new Float32Array(n * 3), al = new Float32Array(n)
  pts.forEach((p, i) => {
    pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = 0
    size[i] = p.s; col.set(p.c, i * 3); al[i] = p.a
  })
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
  g.setAttribute('aColor', new THREE.BufferAttribute(col, 3))
  g.setAttribute('aAlpha', new THREE.BufferAttribute(al, 1))
  const { m, u } = pointsMaterial(obj)
  const p = new THREE.Points(g, m)
  p.frustumCulled = false
  return { points: p, u }
}

function makeLines(obj: BodyObj, segs: number[], color: THREE.ColorRepresentation, opacity: number) {
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(segs), 3))
  const m = track(obj, new THREE.LineBasicMaterial({ color, opacity, depthWrite: false, toneMapped: false }))
  const l = new THREE.LineSegments(g, m)
  l.frustumCulled = false
  return l
}

/** quad with a radial shader: rim glow, interior haze, optional dashed inner ring */
function makeHalo(obj: BodyObj, color: [number, number, number], opts: { rim: number; rimW: number; fill: number; inner?: number; dash?: number; noise?: number; offset?: number }) {
  const u = {
    opacity: { value: 1 },
    uC: { value: new THREE.Vector3(...color) },
    uRim: { value: opts.rim }, uRimW: { value: opts.rimW }, uFill: { value: opts.fill },
    uInner: { value: opts.inner ?? 0 }, uDash: { value: opts.dash ?? 0 }, uNoise: { value: opts.noise ?? 0 }, uOff: { value: opts.offset ?? 0 },
  }
  const m = glow(new THREE.ShaderMaterial({
    uniforms: u,
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: PREMUL + NOISE + `uniform float opacity, uRim, uRimW, uFill, uInner, uDash, uNoise, uOff; uniform vec3 uC; varying vec2 vUv;
      void main(){
        vec2 q = (vUv-0.5)*2.4; // quad spans 1.2 radii
        vec2 qo = q - vec2(uOff, 0.0);
        float d = length(qo) * (1.0 + uOff*0.6*sign(qo.x)*0.0);
        float rim = uRim*exp(-pow((d-1.0)/uRimW, 2.0));
        float fill = uFill*smoothstep(1.02, 0.2, d)*pow(d, 1.5);
        float nz = uNoise > 0.0 ? (0.75 + 0.5*fbm(vec3(q*3.0, 1.7))) : 1.0;
        float inner = 0.0;
        if (uInner > 0.0) { float a = atan(q.y, q.x); float dash = uDash > 0.0 ? step(0.0, sin(a*uDash)) : 1.0; inner = 0.12*exp(-pow((length(q)-uInner)/0.006, 2.0))*dash; }
        float v = (rim + fill)*nz + inner;
        gl_FragColor = premul(uC*v, opacity);
      }`,
    depthWrite: false, transparent: true, toneMapped: false,
  }))
  obj.fades.push({ material: m as unknown as THREE.Material & { opacity: number }, base: 1 })
  const mesh = new THREE.Mesh(quad(), m)
  mesh.scale.set(2.4, 2.4, 1)
  return mesh
}

const WARM: [number, number, number] = [1, 0.93, 0.82]
const TAN: [number, number, number] = [0.83, 0.65, 0.45]
const ICE: [number, number, number] = [0.85, 0.9, 1]

function nodesIn(r1: () => number, n: number, sy = 1): [number, number, number][] {
  const out: [number, number, number][] = []
  for (let i = 0; i < n; i++) {
    const a = r1() * Math.PI * 2, rad = Math.sqrt(r1()) * 0.96
    out.push([Math.cos(a) * rad, Math.sin(a) * rad * sy, r1()])
  }
  return out
}

function web(nodes: [number, number, number][], maxD: number, k = 3) {
  const segs: [number, number][] = []
  for (let i = 0; i < nodes.length; i++) {
    const near: [number, number][] = []
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue
      const d = Math.hypot(nodes[i][0] - nodes[j][0], nodes[i][1] - nodes[j][1])
      if (d < maxD) near.push([d, j])
    }
    near.sort((a, b) => a[0] - b[0])
    for (const [, j] of near.slice(0, k)) if (!segs.some(([a, b]) => (a === j && b === i))) segs.push([i, j])
  }
  return segs
}

function makeProc(b: Body, spec: ProcSpec): BodyObj {
  const group = new THREE.Group()
  const obj: BodyObj = { group, fades: [], dot: b.color, flat: true }
  const r1 = rng(b.id.length * 7919 + 17)
  const ptsU: { value: number }[] = []
  const addPts = (pts: Pt[]) => { const { points, u } = makePoints(obj, pts); group.add(points); ptsU.push(u.uScale); return u }
  const dprUs: { value: number }[] = []
  const addPointsTracked = (pts: Pt[]) => { const u = addPts(pts); dprUs.push(u.uDpr); return u }
  let extraUpdate: BodyObj['update'] | undefined

  switch (spec.kind) {
    case 'heliosphere': {
      group.add(makeHalo(obj, [0.72, 0.8, 0.95], { rim: 0.32, rimW: 0.035, fill: 0.07, inner: 0.78, dash: 90, noise: 1 }))
      // solar wind streaks
      const segs: number[] = []
      for (let i = 0; i < 260; i++) {
        const a = r1() * Math.PI * 2, r0 = 0.04 + r1() * 0.2, rl = 0.35 + r1() * 0.5
        segs.push(Math.cos(a) * r0, Math.sin(a) * r0, 0, Math.cos(a) * rl, Math.sin(a) * rl, 0)
      }
      group.add(makeLines(obj, segs, 0x5c5446, 0.35))
      addPointsTracked([{ x: 0, y: 0, s: 6, c: [1, 0.95, 0.85], a: 1 }, { x: 0, y: 0, s: 18, c: [1, 0.85, 0.6], a: 0.35 }])
      break
    }
    case 'oort': {
      const pts: Pt[] = []
      for (let i = 0; i < 42000; i++) {
        const u = r1() * 2 - 1, th = r1() * Math.PI * 2
        const rad = Math.pow(0.03 + r1() * 0.97, 0.33)
        const s = Math.sqrt(1 - u * u)
        pts.push({ x: rad * s * Math.cos(th), y: rad * u, s: 0.9 + r1() * 1.1, c: ICE, a: 0.18 + r1() * 0.4 })
      }
      pts.push({ x: 0, y: 0, s: 5, c: [1, 0.93, 0.8], a: 1 })
      addPointsTracked(pts)
      group.add(makeHalo(obj, [0.8, 0.85, 0.95], { rim: 0.05, rimW: 0.12, fill: 0.03 }))
      break
    }
    case 'group': {
      group.add(makeHalo(obj, TAN, { rim: 0.12, rimW: 0.01, fill: 0.02, noise: 1 }))
      // true scale, units of the group radius (5m ly): milky way r 50k ly = 0.01, andromeda 0.0152,
      // separations follow the real 3d distances projected onto the page
      const subs: { o: BodyObj; r: number }[] = []
      const blobs: { u: { value: number }; r: number }[] = []
      const gal = (id: string, x: number, y: number, r: number, sp: GalaxySpec) => {
        const g = makeGalaxy({ ...b, id } as Body, { ...sp, field: 0, sats: [] })
        g.group.position.set(x, y, 0)
        g.group.scale.setScalar(r)
        g.fades.forEach((f) => obj.fades.push(f))
        group.add(g.group)
        subs.push({ o: g, r })
      }
      const blob = (x: number, y: number, r: number, kind: number, bright: number, asp = 1, ang = 0) => {
        const bl = makeBlob(obj, kind, x * 91 + y * 37, bright, asp)
        bl.mesh.position.set(x, y, 0)
        bl.mesh.scale.setScalar(r * 2.4)
        bl.mesh.rotation.z = ang
        group.add(bl.mesh)
        blobs.push({ u: bl.uPx, r })
      }
      const MW: [number, number] = [-0.2, -0.12], M31: [number, number] = [0.25, 0.12]
      gal('milkyway', MW[0], MW[1], 0.01, SPECS.milkyway as GalaxySpec)
      gal('andromeda', M31[0], M31[1], 0.0152, SPECS.andromeda as GalaxySpec)
      gal('triangulum', M31[0] + 0.1, M31[1] - 0.08, 0.006, { type: 'galaxy', arms: 2, pitch: 0.4, bar: 0, bulge: 0.06, dust: 0.6, seed: 5.3, floc: 0.9, clump: 1.2, ring: 0, tilt: -0.9, pa: 0.4, pal: { ...(SPECS.andromeda as GalaxySpec).pal!, grey: [0.62, 0.68, 0.9], knot: [1, 0.35, 0.5], gold: [1, 0.92, 0.8] } })
      // dwarfs: [x, y, r, kind, brightness, aspect, angle]
      const dw: [number, number, number, number, number, number?, number?][] = [
        [MW[0] + 0.018, MW[1] - 0.028, 0.0014, 1, 1.2, 0.8, 0.3], // lmc
        [MW[0] + 0.03, MW[1] - 0.027, 0.0008, 1, 1.0, 0.7, 0.8],  // smc
        [MW[0] - 0.05, MW[1] + 0.077, 0.0006, 0, 0.55],           // fornax
        [MW[0] + 0.04, MW[1] + 0.042, 0.0005, 0, 0.45],           // sculptor
        [MW[0] - 0.045, MW[1] - 0.025, 0.0004, 0, 0.4],           // draco
        [MW[0] + 0.02, MW[1] + 0.16, 0.0005, 0, 0.45],             // leo i
        [MW[0] + 0.003, MW[1] + 0.006, 0.0006, 0, 0.35, 0.4, 1.2], // sagittarius dsph
        [M31[0] - 0.004, M31[1] - 0.007, 0.0009, 0, 0.8, 0.6, 0.9], // m110
        [M31[0] + 0.011, M31[1] + 0.04, 0.0005, 0, 0.55],         // ngc 185
        [M31[0] - 0.006, M31[1] + 0.05, 0.0005, 0, 0.5, 0.7],     // ngc 147
        [-0.35, 0.13, 0.0007, 1, 0.9, 0.8, 0.2],                  // ngc 6822
        [0.05, 0.35, 0.0008, 1, 0.7, 0.9, 0.5],                   // ic 1613
        [-0.55, -0.55, 0.0006, 1, 0.8, 0.45, 1.3],                // wlm
      ]
      for (const [x, y, r, k, br, asp, ang] of dw) blob(x, y, r, k, br, asp ?? 1, ang ?? 0)
      // soft glows so the tiny members read, plus the faint, unnamed rest of the ~80 members
      const pts: Pt[] = [
        { x: MW[0], y: MW[1], s: 60, c: WARM, a: 0.16 },
        { x: M31[0], y: M31[1], s: 76, c: [0.9, 0.86, 1], a: 0.16 },
      ]
      for (const [x, y, , k] of dw) pts.push({ x, y, s: k ? 14 : 9, c: k ? [0.82, 0.8, 1] : WARM, a: k ? 0.45 : 0.35 })
      for (let i = 0; i < 60; i++) {
        const host = i < 22 ? MW : i < 44 ? M31 : [0, 0]
        const sp = i < 44 ? 0.06 : 0.4
        pts.push({ x: host[0] + gauss(r1) * sp, y: host[1] + gauss(r1) * sp, s: 1.3 + r1() * 1.4, c: WARM, a: 0.35 + r1() * 0.4 })
      }
      addPointsTracked(pts)
      obj.labels = [
        { x: MW[0], y: MW[1], r: 0.01, name: 'milky way', major: true, left: true },
        { x: M31[0], y: M31[1], r: 0.0152, name: 'andromeda', major: true },
        { x: M31[0] + 0.1, y: M31[1] - 0.08, r: 0.006, name: 'triangulum' },
        { x: MW[0] + 0.024, y: MW[1] - 0.028, r: 0.008, name: 'magellanic clouds' },
        { x: MW[0] + 0.02, y: MW[1] + 0.16, r: 0.001, name: 'leo i' },
        { x: -0.35, y: 0.13, r: 0.001, name: 'ngc 6822' },
        { x: 0.05, y: 0.35, r: 0.001, name: 'ic 1613' },
        { x: -0.55, y: -0.55, r: 0.001, name: 'wlm' },
      ]
      // faint subgroup halos + the 2.5m ly span, so the slide reads at true scale
      group.add(softGlow(obj, MW[0], MW[1], 0.09, [0.85, 0.8, 0.7], 0.05))
      group.add(softGlow(obj, M31[0], M31[1], 0.11, [0.78, 0.74, 0.95], 0.05))
      const segs: number[] = []
      const dx = M31[0] - MW[0], dy = M31[1] - MW[1], L = Math.hypot(dx, dy)
      for (let t0 = 0.05; t0 < 0.95; t0 += 0.02) {
        const t1 = t0 + 0.01
        segs.push(MW[0] + dx * t0, MW[1] + dy * t0, 0, MW[0] + dx * t1, MW[1] + dy * t1, 0)
      }
      group.add(makeLines(obj, segs, 0x9a7a55, 0.9))
      obj.labels.push({ x: MW[0] + dx * 0.62, y: MW[1] + dy * 0.62, r: 0, name: `${(L * 5).toFixed(1)}m light-years` })
      extraUpdate = (t, dt, rs, reduced, auto) => {
        for (const s2 of subs) s2.o.update?.(t, dt, rs * s2.r, reduced, auto)
        for (const bl of blobs) bl.u.value = rs * bl.r * GLScene.dpr
      }
      break
    }
    case 'dwarf': {
      // segue 2: barely a thousand old stars, a sparse cloud with almost no glow
      const pts: Pt[] = []
      for (let i = 0; i < 650; i++) {
        // plummer profile, scale ~ the half-light radius (1 = half-light here)
        const m = Math.max(1e-4, r1() * 0.97)
        const rad = 0.62 / Math.sqrt(Math.pow(m, -2 / 3) - 1)
        if (rad > 1.7) continue
        const a = r1() * Math.PI * 2
        const hot = r1() < 0.04
        const giant = r1() < 0.08
        pts.push({ x: Math.cos(a) * rad, y: Math.sin(a) * rad * 0.92, s: giant ? 3.2 + r1() * 1.8 : 1.5 + r1() * 1.3, c: hot ? [0.75, 0.84, 1] : giant ? [1, 0.78, 0.52] : [1, 0.9, 0.76], a: giant ? 1 : 0.6 + r1() * 0.4 })
      }
      addPointsTracked(pts)
      group.add(softGlow(obj, 0, 0, 0.8, [1, 0.88, 0.72], 0.1))
      break
    }
    case 'elliptical': {
      // ic 1101: a vast smooth golden haze at the heart of abell 2029, with cluster members around it
      const blobs: { u: { value: number }; r: number }[] = []
      const blob = (x: number, y: number, r: number, bright: number, asp: number, ang: number, tint: [number, number, number]) => {
        const bl = makeBlob(obj, 0, x * 91 + y * 37 + 5, bright, asp, tint)
        bl.mesh.position.set(x, y, 0)
        bl.mesh.scale.setScalar(r * 2.4)
        bl.mesh.rotation.z = ang
        group.add(bl.mesh)
        blobs.push({ u: bl.uPx, r })
      }
      group.add(softGlow(obj, 0, 0, 1.25, [1, 0.8, 0.5], 0.09))
      blob(0, 0, 1.0, 1.25, 0.56, 0.62, [1.0, 0.8, 0.52])
      // a few neighbours (sizes loosely in scale), mostly ellipticals and a couple of spirals
      for (let i = 0; i < 26; i++) {
        const a = r1() * Math.PI * 2, rad = 0.45 + Math.pow(r1(), 0.7) * 1.1
        const r = 0.012 + r1() * r1() * 0.07
        blob(Math.cos(a) * rad, Math.sin(a) * rad * 0.8, r, 0.8 + r1() * 0.6, 0.55 + r1() * 0.45, r1() * 3.14, r1() < 0.2 ? [0.86, 0.88, 1] : [1, 0.86, 0.66])
      }
      const pts: Pt[] = []
      for (let i = 0; i < 260; i++) {
        const a = r1() * Math.PI * 2, rad = Math.sqrt(r1()) * 1.9
        pts.push({ x: Math.cos(a) * rad, y: Math.sin(a) * rad * 0.8, s: 0.9 + r1() * 0.9, c: r1() < 0.7 ? WARM : [0.85, 0.88, 1], a: 0.15 + r1() * 0.3 })
      }
      addPointsTracked(pts)
      extraUpdate = (_t, _dt, rs) => { for (const bl of blobs) bl.u.value = rs * bl.r * GLScene.dpr }
      break
    }
    case 'supercluster': {
      const nodes = nodesIn(r1, 90, 0.72)
      nodes.push([0.05, 0, 1])
      const segs: number[] = []
      const pts: Pt[] = []
      for (const [i, j] of web(nodes, 0.42)) {
        segs.push(nodes[i][0], nodes[i][1], 0, nodes[j][0], nodes[j][1], 0)
        const L = Math.hypot(nodes[i][0] - nodes[j][0], nodes[i][1] - nodes[j][1])
        for (let k = 0; k < 260 * L; k++) {
          const t = r1()
          pts.push({ x: nodes[i][0] + (nodes[j][0] - nodes[i][0]) * t + gauss(r1) * 0.01, y: nodes[i][1] + (nodes[j][1] - nodes[i][1]) * t + gauss(r1) * 0.01, s: 1 + r1(), c: r1() < 0.7 ? WARM : TAN, a: 0.25 + r1() * 0.4 })
        }
      }
      for (const [x, y, w] of nodes) for (let k = 0; k < 30 + w * 90; k++) pts.push({ x: x + gauss(r1) * 0.013, y: y + gauss(r1) * 0.013, s: 1.1 + r1() * 1.3, c: WARM, a: 0.4 + r1() * 0.5 })
      group.add(makeLines(obj, segs, 0x6a5238, 0.8))
      addPointsTracked(pts)
      group.add(makeHalo(obj, TAN, { rim: 0, rimW: 0.1, fill: 0.05, noise: 1 }))
      break
    }
    case 'laniakea': {
      const ax = 0.08, ay = 0.05
      const segs: number[] = []
      for (let i = 0; i < 220; i++) {
        const a = r1() * Math.PI * 2, rad = 0.5 + r1() * 0.48
        let x = Math.cos(a) * rad, y = Math.sin(a) * rad * 0.86
        const curl = (r1() - 0.5) * 1.5
        for (let s = 0; s < 80; s++) {
          const dx = ax - x, dy = ay - y, d = Math.hypot(dx, dy)
          if (d < 0.03) break
          const vx = dx / d + (-dy / d) * curl * d, vy = dy / d + (dx / d) * curl * d
          const nx = x + vx * 0.016, ny = y + vy * 0.016
          segs.push(x, y, 0, nx, ny, 0)
          x = nx; y = ny
        }
      }
      group.add(makeLines(obj, segs, 0x4a4032, 0.9))
      const pts: Pt[] = []
      for (let i = 0; i < 16000; i++) {
        const a = r1() * Math.PI * 2, rad = Math.pow(r1(), 0.7) * 0.98
        pts.push({ x: Math.cos(a) * rad, y: Math.sin(a) * rad * 0.86, s: 0.9 + r1() * 1.1, c: r1() < 0.8 ? WARM : TAN, a: 0.15 + r1() * 0.4 })
      }
      pts.push({ x: ax, y: ay, s: 30, c: TAN, a: 0.3 })
      addPointsTracked(pts)
      group.add(makeHalo(obj, TAN, { rim: 0.14, rimW: 0.008, fill: 0.04 }))
      break
    }
    case 'universe': {
      group.add(makeHalo(obj, TAN, { rim: 0.5, rimW: 0.05, fill: 0.05, noise: 1 }))
      const nodes: [number, number, number][] = []
      for (let i = 0; i < 700; i++) {
        const u = r1() * 2 - 1, th = r1() * Math.PI * 2
        const rad = Math.cbrt(r1()) * 0.985
        const s = Math.sqrt(1 - u * u)
        nodes.push([rad * s * Math.cos(th), rad * u, r1()])
      }
      const segs: number[] = []
      const pts: Pt[] = []
      for (const [i, j] of web(nodes, 0.16)) {
        segs.push(nodes[i][0], nodes[i][1], 0, nodes[j][0], nodes[j][1], 0)
        const L = Math.hypot(nodes[i][0] - nodes[j][0], nodes[i][1] - nodes[j][1])
        for (let k = 0; k < 500 * L; k++) {
          const t = r1()
          pts.push({ x: nodes[i][0] + (nodes[j][0] - nodes[i][0]) * t + gauss(r1) * 0.004, y: nodes[i][1] + (nodes[j][1] - nodes[i][1]) * t + gauss(r1) * 0.004, s: 0.8 + r1() * 0.8, c: r1() < 0.6 ? WARM : TAN, a: 0.1 + r1() * 0.18 })
        }
      }
      for (const [x, y, w] of nodes) pts.push({ x, y, s: 3 + w * 6, c: WARM, a: 0.12 + w * 0.14 })
      pts.push({ x: 0, y: 0, s: 3, c: [0.96, 0.95, 0.92], a: 1 })
      group.add(makeLines(obj, segs, 0x5e4a33, 0.5))
      addPointsTracked(pts)
      break
    }
  }
  obj.update = (t, dt, rs, reduced, auto) => {
    extraUpdate?.(t, dt, rs, reduced, auto)
    // points shrink with the object once it's small, so a distant cluster doesn't turn into a blob
    const sc = Math.min(1, Math.max(0.35, rs / 260))
    for (const u of ptsU) u.value = sc
    for (const u of dprUs) u.value = GLScene.dpr
  }
  return obj
}

// ---------- scene ----------
export class GLScene {
  static dpr = 1
  renderer: THREE.WebGLRenderer
  scene = new THREE.Scene()
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)
  private objs = new Map<number, BodyObj>()
  private st = new Map<number, { vx: number; vy: number; last: number; dragging: boolean; tx: number; ty: number; gx: number; gy: number }>()
  private now = 0
  private state(i: number) {
    let s = this.st.get(i)
    if (!s) { s = { vx: 0, vy: 0, last: -1e9, dragging: false, tx: 0, ty: 0, gx: 0, gy: 0 }; this.st.set(i, s) }
    return s
  }
  private static qa = new THREE.Quaternion()
  private static ax = new THREE.Vector3()
  private turn(rot: THREE.Group, ax: number, ay: number) {
    // screen-space trackball: horizontal drag spins about screen-up, vertical about screen-right
    const q = GLScene.qa
    if (ax) { q.setFromAxisAngle(GLScene.ax.set(0, 1, 0), ax); rot.quaternion.premultiply(q) }
    if (ay) { q.setFromAxisAngle(GLScene.ax.set(1, 0, 0), ay); rot.quaternion.premultiply(q) }
  }
  /** can this body be grabbed? 'rotate' for spheres, 'tilt' for flat things */
  grabKind(i: number): 'rotate' | 'tilt' | null {
    const o = this.objs.get(i)
    if (!o) return null
    return o.rot ? 'rotate' : o.flat ? 'tilt' : null
  }
  grab(i: number) {
    const s = this.state(i)
    s.dragging = true; s.vx = 0; s.vy = 0; s.last = this.now
  }
  /** dx, dy in css px; rs = on-screen radius; dt seconds */
  drag(i: number, dx: number, dy: number, rs: number, dt: number) {
    const o = this.objs.get(i), s = this.state(i)
    if (!o) return
    s.last = this.now
    if (o.rot) {
      const ax = dx / Math.max(rs, 40), ay = dy / Math.max(rs, 40)
      this.turn(o.rot, ax, ay)
      const k = Math.min(1, dt * 18)
      s.vx += (ax / Math.max(dt, 1 / 240) - s.vx) * k
      s.vy += (ay / Math.max(dt, 1 / 240) - s.vy) * k
    } else if (o.flat) {
      s.gx = Math.max(-0.35, Math.min(0.35, s.gx + dx / Math.max(rs, 80) * 0.5))
      s.gy = Math.max(-0.35, Math.min(0.35, s.gy + dy / Math.max(rs, 80) * 0.5))
    }
  }
  release(i: number, reduced: boolean) {
    const s = this.state(i)
    s.dragging = false; s.last = this.now
    s.gx = 0; s.gy = 0
    if (reduced) { s.vx = 0; s.vy = 0 }
    const cap = 12
    s.vx = Math.max(-cap, Math.min(cap, s.vx)); s.vy = Math.max(-cap, Math.min(cap, s.vy))
  }
  private w = 1
  private h = 1

  constructor(canvas: HTMLCanvasElement, private bodies: Body[]) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.15
    maxAniso = this.renderer.capabilities.getMaxAnisotropy()
    // hard space light: one strong key, almost no fill, so night sides fall to black
    const key = new THREE.DirectionalLight(0xfff8ee, 3.7)
    key.position.set(-1, 0.75, 0.85)
    this.scene.add(key)
    this.scene.add(new THREE.AmbientLight(0x8890a0, 0.006))
  }

  resize(w: number, h: number, dpr: number) {
    this.w = w; this.h = h
    GLScene.dpr = dpr
    this.renderer.setPixelRatio(dpr)
    this.renderer.setSize(w, h, false)
  }

  obj(i: number): BodyObj {
    let o = this.objs.get(i)
    if (!o) {
      const b = this.bodies[i]
      const spec = SPECS[b.id]
      o = spec.type === 'planet' ? makePlanet(b, spec) : spec.type === 'star' ? makeStar(b, spec) : spec.type === 'image' ? makeImage(b, spec) : spec.type === 'galaxy' ? makeGalaxy(b, spec) : spec.type === 'bh' ? makeBlackHole(b, spec) : makeProc(b, spec)
      o.group.visible = false
      this.scene.add(o.group)
      this.objs.set(i, o)
    }
    return o
  }

  has(i: number) { return this.objs.has(i) }

  /** items: bodies to show this frame */
  // ---- depth of field: everything but the focused body goes through a soft blur ----
  private rtA: THREE.WebGLRenderTarget | null = null
  private rtB: THREE.WebGLRenderTarget | null = null
  private rtC: THREE.WebGLRenderTarget | null = null
  private fsScene = new THREE.Scene()
  private fsCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  private fsQuad: THREE.Mesh | null = null
  private blurMat: THREE.ShaderMaterial | null = null
  private compMat: THREE.ShaderMaterial | null = null
  private setupDof() {
    const pw = Math.max(1, Math.round(this.w * GLScene.dpr)), ph = Math.max(1, Math.round(this.h * GLScene.dpr))
    const mk = (w: number, h: number, samples: number) => {
      const rt = new THREE.WebGLRenderTarget(w, h, { samples, depthBuffer: samples > 0 })
      // shaders here write display-ready values, so store them as-is (like the canvas does)
      rt.texture.colorSpace = THREE.SRGBColorSpace
      rt.texture.internalFormat = 'RGBA8'
      return rt
    }
    if (!this.rtA || this.rtA.width !== pw || this.rtA.height !== ph) {
      this.rtA?.dispose(); this.rtB?.dispose(); this.rtC?.dispose()
      this.rtA = mk(pw, ph, 4)
      // tone mapping + output encoding into this target, exactly as on screen
      ;(this.rtA as unknown as { isXRRenderTarget: boolean }).isXRRenderTarget = true
      this.rtB = mk(Math.ceil(pw / 2), Math.ceil(ph / 2), 0)
      this.rtC = mk(Math.ceil(pw / 2), Math.ceil(ph / 2), 0)
    }
    if (!this.fsQuad) {
      const vs = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy*2.0, 0.0, 1.0); }`
      this.blurMat = new THREE.ShaderMaterial({
        uniforms: { tMap: { value: null }, uDir: { value: new THREE.Vector2() } },
        vertexShader: vs,
        fragmentShader: `uniform sampler2D tMap; uniform vec2 uDir; varying vec2 vUv;
          void main(){
            vec4 c = texture2D(tMap, vUv)*0.2270;
            c += (texture2D(tMap, vUv + uDir*1.3846) + texture2D(tMap, vUv - uDir*1.3846))*0.3162;
            c += (texture2D(tMap, vUv + uDir*3.2308) + texture2D(tMap, vUv - uDir*3.2308))*0.0703;
            gl_FragColor = c;
          }`,
        depthTest: false, depthWrite: false, blending: THREE.NoBlending, toneMapped: false,
      })
      this.compMat = new THREE.ShaderMaterial({
        uniforms: { tSharp: { value: null }, tSoft: { value: null }, uAmt: { value: 0 } },
        vertexShader: vs,
        fragmentShader: `uniform sampler2D tSharp, tSoft; uniform float uAmt; varying vec2 vUv;
          void main(){ gl_FragColor = mix(texture2D(tSharp, vUv), texture2D(tSoft, vUv), uAmt); }`,
        depthTest: false, depthWrite: false, blending: THREE.NoBlending, toneMapped: false,
      })
      this.fsQuad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), this.blurMat)
      this.fsQuad.frustumCulled = false
      this.fsScene.add(this.fsQuad)
    }
  }
  private renderDof(focus: BodyObj, amt: number) {
    this.setupDof()
    const r = this.renderer, c = this.camera
    const rtA = this.rtA!, rtB = this.rtB!, rtC = this.rtC!
    const q = this.fsQuad!, bm = this.blurMat!, cm = this.compMat!
    // 1) everything out of focus -> A
    focus.group.visible = false
    r.setRenderTarget(rtA); r.clear(); r.render(this.scene, c)
    focus.group.visible = true
    // 2) separable blur at half res, radius ~ 2.6 css px at full strength
    const rad = 2.6 * GLScene.dpr * amt / 2
    q.material = bm
    bm.uniforms.tMap.value = rtA.texture; bm.uniforms.uDir.value.set(rad / rtB.width * 0.5, 0)
    r.setRenderTarget(rtB); r.render(this.fsScene, this.fsCam)
    bm.uniforms.tMap.value = rtB.texture; bm.uniforms.uDir.value.set(0, rad / rtC.height * 0.5)
    r.setRenderTarget(rtC); r.render(this.fsScene, this.fsCam)
    bm.uniforms.tMap.value = rtC.texture; bm.uniforms.uDir.value.set(rad / rtB.width * 0.5, 0)
    r.setRenderTarget(rtB); r.render(this.fsScene, this.fsCam)
    bm.uniforms.tMap.value = rtB.texture; bm.uniforms.uDir.value.set(0, rad / rtC.height * 0.5)
    r.setRenderTarget(rtC); r.render(this.fsScene, this.fsCam)
    // 3) composite to the canvas, then the focused body on top, sharp
    r.setRenderTarget(null); r.clear()
    q.material = cm
    cm.uniforms.tSharp.value = rtA.texture; cm.uniforms.tSoft.value = rtC.texture; cm.uniforms.uAmt.value = Math.min(1, amt * 1.4)
    r.render(this.fsScene, this.fsCam)
    const hidden: BodyObj[] = []
    for (const o of this.objs.values()) if (o !== focus && o.group.visible) { o.group.visible = false; hidden.push(o) }
    r.autoClear = false
    r.render(this.scene, c)
    r.autoClear = true
    for (const o of hidden) o.group.visible = true
  }

  render(items: { i: number; x: number; y: number; rs: number; alpha: number }[], time: number, dt: number, reduced: boolean, hiRes: boolean, current: number, dof = 0) {
    this.now = time
    for (const o of this.objs.values()) o.group.visible = false
    let maxR = 10
    let z = 0
    for (const it of items) {
      const o = this.obj(it.i)
      o.wantTex?.(hiRes && Math.abs(it.i - current) <= 1)
      o.group.visible = true
      // screen px -> world (y up, origin at center)
      o.group.position.set(it.x - this.w / 2, this.h / 2 - it.y, z)
      o.group.scale.setScalar(it.rs)
      for (const f of o.fades) {
        const v = f.base * it.alpha
        f.material.opacity = v
        const u = (f.material as THREE.ShaderMaterial).uniforms
        if (u && u.opacity) u.opacity.value = v
      }
      const st = this.state(it.i)
      if (o.rot && !st.dragging && (st.vx || st.vy)) {
        // inertia with damping
        this.turn(o.rot, st.vx * dt, st.vy * dt)
        const damp = Math.exp(-dt * 2.4)
        st.vx *= damp; st.vy *= damp
        if (Math.abs(st.vx) + Math.abs(st.vy) < 0.002) { st.vx = 0; st.vy = 0 }
        if (st.vx || st.vy) st.last = time
      }
      if (o.flat) {
        const k = 1 - Math.exp(-dt * (st.dragging ? 14 : 5))
        st.tx += (st.gx - st.tx) * k; st.ty += (st.gy - st.ty) * k
        o.group.rotation.set(st.ty, st.tx, 0)
      }
      // auto-spin eases back in a few seconds after the last touch
      const idle = time - st.last
      const auto = reduced ? 0 : Math.min(1, Math.max(0, (idle - 3) / 2))
      o.update?.(time, dt, it.rs, reduced, auto)
      maxR = Math.max(maxR, it.rs * 3)
      z += 0 // bodies never overlap in xy, so a shared depth is fine
    }
    const c = this.camera
    c.left = -this.w / 2; c.right = this.w / 2; c.top = this.h / 2; c.bottom = -this.h / 2
    c.near = -maxR * 1.1; c.far = maxR * 1.1
    c.position.set(0, 0, 0)
    c.updateProjectionMatrix()
    const focus = this.objs.get(current)
    if (dof > 0.01 && focus && focus.group.visible && items.length > 1) this.renderDof(focus, dof)
    else this.renderer.render(this.scene, c)
  }

  /** first-load warmup: wait for the nearby textures, then compile every shader they need */
  async warm(i: number, hiRes: boolean) {
    this.prefetch(i, hiRes)
    // textures kick off more loads as they land (e.g. clouds), so settle until the set stops growing
    for (let k = 0; k < 4; k++) {
      const n = texCache.size
      await Promise.allSettled([...texCache.values()])
      if (texCache.size === n) break
    }
    const near = [i - 1, i, i + 1, i + 2].filter((j) => j >= 0 && j < this.bodies.length).map((j) => this.obj(j))
    const vis = near.map((o) => o.group.visible)
    near.forEach((o) => { o.group.visible = true })
    try {
      const r = this.renderer as THREE.WebGLRenderer & { compileAsync?: (s: THREE.Object3D, c: THREE.Camera) => Promise<unknown> }
      // compileAsync warns without the parallel-compile extension, so fall back to a plain compile
      if (r.compileAsync && r.extensions.has('KHR_parallel_shader_compile')) await r.compileAsync(this.scene, this.camera)
      else r.compile(this.scene, this.camera)
    } catch { /* compile is only a warmup */ }
    near.forEach((o, k) => { o.group.visible = vis[k] })
  }

  /** preload textures for slides near i */
  prefetch(i: number, hiRes: boolean) {
    for (const j of [i, i + 1, i - 1, i + 2]) {
      if (j < 0 || j >= this.bodies.length) continue
      this.obj(j).wantTex?.(hiRes && Math.abs(j - i) <= 1)
    }
  }
}
