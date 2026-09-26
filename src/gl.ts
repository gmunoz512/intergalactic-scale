import * as THREE from 'three'
import type { Body } from './data'

const BASE = import.meta.env.BASE_URL + 'tex/'

// ---------- per-body visual specs ----------
type PlanetSpec = { type: 'planet'; tex: string; hi?: boolean; clouds?: boolean; ring?: boolean; atmo?: [number, number, number, number]; tilt?: number; spin?: number }
type StarSpec = { type: 'star'; cells: number; contrast: number; map?: string }
type ImageSpec = { type: 'image'; src: string; fill: number; aspect: number; mask: [number, number]; sat?: number; gain?: number }
type ProcSpec = { type: 'proc'; kind: 'heliosphere' | 'oort' | 'group' | 'supercluster' | 'laniakea' | 'universe' }
type Spec = PlanetSpec | StarSpec | ImageSpec | ProcSpec

const SPECS: Record<string, Spec> = {
  moon: { type: 'planet', tex: 'moon', hi: true, spin: 0.02 },
  mercury: { type: 'planet', tex: 'mercury', hi: true, spin: 0.02 },
  mars: { type: 'planet', tex: 'mars', hi: true, atmo: [0.9, 0.55, 0.4, 0.35], tilt: 0.44, spin: 0.03 },
  venus: { type: 'planet', tex: 'venus', hi: true, atmo: [1, 0.9, 0.7, 0.5], spin: 0.01 },
  earth: { type: 'planet', tex: 'earth', hi: true, clouds: true, atmo: [0.35, 0.6, 1, 1], tilt: 0.41, spin: 0.03 },
  neptune: { type: 'planet', tex: 'neptune', atmo: [0.4, 0.55, 1, 0.8], tilt: 0.49, spin: 0.03 },
  uranus: { type: 'planet', tex: 'uranus', atmo: [0.6, 0.9, 0.95, 0.8], tilt: 1.7, spin: 0.03 },
  saturn: { type: 'planet', tex: 'saturn', hi: true, ring: true, atmo: [0.95, 0.85, 0.6, 0.3], tilt: 0.47, spin: 0.04 },
  jupiter: { type: 'planet', tex: 'jupiter', hi: true, atmo: [0.95, 0.8, 0.6, 0.3], tilt: 0.05, spin: 0.04 },
  sun: { type: 'star', cells: 5, contrast: 0.25, map: 'sun' },
  sirius: { type: 'star', cells: 9, contrast: 0.12 },
  pollux: { type: 'star', cells: 6, contrast: 0.2 },
  arcturus: { type: 'star', cells: 5, contrast: 0.22 },
  aldebaran: { type: 'star', cells: 4, contrast: 0.28 },
  rigel: { type: 'star', cells: 8, contrast: 0.12 },
  antares: { type: 'star', cells: 2.2, contrast: 0.45 },
  betelgeuse: { type: 'star', cells: 1.8, contrast: 0.5 },
  uyscuti: { type: 'star', cells: 2, contrast: 0.48 },
  heliosphere: { type: 'proc', kind: 'heliosphere' },
  oort: { type: 'proc', kind: 'oort' },
  // fill = object diameter / image width. mask = ellipse radii (uv units, 0.5 = edge)
  orion: { type: 'image', src: 'orion.webp', fill: 1.0, aspect: 1, mask: [0.5, 0.5], sat: 0.85, gain: 0.95 },
  omega: { type: 'image', src: 'omega.webp', fill: 0.62, aspect: 1, mask: [0.46, 0.46], sat: 0.8, gain: 1.05 },
  milkyway: { type: 'image', src: 'milkyway.webp', fill: 0.86, aspect: 1, mask: [0.5, 0.5], sat: 0.8, gain: 1.0 },
  andromeda: { type: 'image', src: 'andromeda.webp', fill: 0.68, aspect: 0.5, mask: [0.47, 0.34], sat: 0.85, gain: 1.1 },
  localgroup: { type: 'proc', kind: 'group' },
  virgo: { type: 'proc', kind: 'supercluster' },
  laniakea: { type: 'proc', kind: 'laniakea' },
  universe: { type: 'proc', kind: 'universe' },
}

/** how far past radiusKm the visible thing reaches (for spacing) */
export const EXTENT: Record<string, number> = { saturn: 2.3 }

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
  update?: (time: number, dt: number, rs: number, reduced: boolean) => void
  /** texture loader hook: hi = wants 4k */
  wantTex?: (hi: boolean) => void
  /** dot color for when it's sub-pixel */
  dot: string
}

function track(obj: BodyObj, m: THREE.Material & { opacity: number }) {
  m.transparent = true
  obj.fades.push({ material: m, base: m.opacity })
  return m
}

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
  const tiltG = new THREE.Group()
  tiltG.rotation.z = -(spec.tilt ?? 0)
  tiltG.rotation.x = 0.18
  group.add(tiltG)
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
          float lit = smoothstep(-0.35, 0.6, dot(normalize(vN), uLight));
          gl_FragColor = premul(uColor * rim * lit * uStrength * 1.4, opacity); }`,
      depthWrite: false, transparent: true,
    }))
    obj.fades.push({ material: am as unknown as THREE.Material & { opacity: number }, base: 1 })
    const atmo = new THREE.Mesh(sphere(), am)
    atmo.scale.setScalar(1.035)
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
  obj.update = (_t, dt, _rs, reduced) => {
    if (reduced) return
    mesh.rotation.y += dt * (spec.spin ?? 0.03)
    if (clouds) clouds.rotation.y += dt * (spec.spin ?? 0.03) * 1.25
  }
  return obj
}

// ---------- stars ----------
function makeStar(b: Body, spec: StarSpec): BodyObj {
  const group = new THREE.Group()
  const obj: BodyObj = { group, fades: [], dot: '#fff' }
  const [r0, g0, b0] = kelvinToRgb(b.tempK ?? 5800)
  // a blackbody color reads washed-out on screen; push saturation a bit
  const r = Math.pow(r0, 2.4), g = Math.pow(g0, 2.4), bl = Math.pow(b0, 2.4)
  const mx = Math.max(r, g, bl)
  const col = new THREE.Vector3(r / mx, g / mx, bl / mx)
  obj.dot = `rgb(${(r * 255) | 0},${(g * 255) | 0},${(bl * 255) | 0})`
  const cool = (b.tempK ?? 5800) < 4200
  const uniforms = {
    uColor: { value: col },
    uTime: { value: 0 },
    uCells: { value: spec.cells },
    uContrast: { value: spec.contrast },
    uMap: { value: null as THREE.Texture | null },
    uUseMap: { value: 0 },
    uCool: { value: cool ? 1 : 0 },
    uSeed: { value: (b.tempK ?? 1) * 0.001 },
    opacity: { value: 1 },
  }
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `varying vec3 vN; varying vec3 vP; varying vec2 vUv;
      void main(){ vN = normalize(normalMatrix*normal); vP = position; vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: NOISE + `
      uniform vec3 uColor; uniform float uTime, uCells, uContrast, uUseMap, uCool, uSeed, opacity; uniform sampler2D uMap;
      varying vec3 vN; varying vec3 vP; varying vec2 vUv;
      void main(){
        float mu = clamp(dot(normalize(vN), vec3(0.,0.,1.)), 0., 1.);
        // quadratic limb darkening
        float limb = 1.0 - 0.55*(1.0-mu) - 0.25*(1.0-mu)*(1.0-mu);
        vec3 p = vP*uCells + vec3(uSeed*13.0);
        float n = fbm(p + vec3(0.0, uTime*0.015, uTime*0.01));
        float cells = uCool > 0.5 ? smoothstep(-0.6, 0.7, n) : 0.5 + 0.5*n;
        float fine = snoise(vP*uCells*9.0 + uTime*0.03)*0.5+0.5;
        float gran = mix(cells, fine, uCool > 0.5 ? 0.18 : 0.45);
        if (uUseMap > 0.5) { vec3 t = texture2D(uMap, vUv).rgb; gran = mix(gran, smoothstep(0.25, 0.95, dot(t, vec3(0.33))), 0.8); }
        float I = limb * (1.0 - uContrast + uContrast*2.0*clamp(gran, 0.0, 1.0));
        // limb reddens, center runs a little hotter/whiter
        vec3 edge = uColor*vec3(1.0, 0.72, 0.55);
        vec3 core = mix(uColor, vec3(1.0), 0.28);
        vec3 c = mix(edge, core, pow(mu, 0.8)) * I * 0.95;
        gl_FragColor = vec4(c * opacity, opacity);
      }`,
    transparent: true,
    toneMapped: false,
    premultipliedAlpha: true,
  })
  obj.fades.push({ material: mat as unknown as THREE.Material & { opacity: number }, base: 1 })
  const disc = new THREE.Mesh(sphere(), mat)
  group.add(disc)
  if (spec.map) loadTex(`${spec.map}_4k.webp`).then((t) => { uniforms.uMap.value = t; uniforms.uUseMap.value = 1 })

  // corona / bloom: camera-facing quad, additive
  const G = 5
  const gu = { uColor: { value: col }, opacity: { value: 1 }, uG: { value: G }, uTime: { value: 0 } }
  const gm = glow(new THREE.ShaderMaterial({
    uniforms: gu,
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: PREMUL + NOISE + `uniform vec3 uColor; uniform float opacity, uG, uTime; varying vec2 vUv;
      void main(){
        vec2 q = (vUv-0.5)*2.0*uG; float d = length(q);
        if (d < 0.985) discard;
        float a = atan(q.y, q.x);
        float rays = 0.85 + 0.15*snoise(vec3(cos(a)*3.0, sin(a)*3.0, uTime*0.05 + d*0.4));
        float glow = 0.42*exp(-(d-1.0)*7.0) + 0.14*exp(-(d-1.0)*1.9)*rays + 0.03*exp(-(d-1.0)*0.7);
        glow *= smoothstep(uG, uG*0.6, d);
        vec3 c = mix(uColor, vec3(1.0), 0.15) * glow;
        gl_FragColor = premul(c, opacity);
      }`,
    depthWrite: false, transparent: true, toneMapped: false,
  }))
  obj.fades.push({ material: gm as unknown as THREE.Material & { opacity: number }, base: 1 })
  const glowMesh = new THREE.Mesh(quad(), gm)
  glowMesh.scale.set(2 * G, 2 * G, 1)
  glowMesh.position.z = 1.001 // in front of the disc's back half; discard handles the disc
  glowMesh.renderOrder = 2
  group.add(glowMesh)
  obj.update = (t, _dt, _rs, reduced) => {
    const tt = reduced ? 0 : t
    uniforms.uTime.value = tt
    gu.uTime.value = tt
    if (!reduced) disc.rotation.y = t * 0.01
  }
  return obj
}

// ---------- image structures ----------
function makeImage(b: Body, spec: ImageSpec): BodyObj {
  const group = new THREE.Group()
  const obj: BodyObj = { group, fades: [], dot: b.color }
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
  const obj: BodyObj = { group, fades: [], dot: b.color }
  const r1 = rng(b.id.length * 7919 + 17)
  const ptsU: { value: number }[] = []
  const addPts = (pts: Pt[]) => { const { points, u } = makePoints(obj, pts); group.add(points); ptsU.push(u.uScale); return u }
  const dprUs: { value: number }[] = []
  const addPointsTracked = (pts: Pt[]) => { const u = addPts(pts); dprUs.push(u.uDpr); return u }

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
      // true scale: milky way radius = 50k ly / 5M ly = 0.01, andromeda 0.0152
      const place = (src: string, x: number, y: number, r: number, aspect: number) => {
        const spec2: ImageSpec = { type: 'image', src, fill: src.startsWith('andromeda') ? 0.68 : 0.86, aspect, mask: aspect < 1 ? [0.47, 0.34] : [0.5, 0.5], sat: 0.9, gain: 1.4 }
        const im = makeImage(b, spec2)
        im.group.position.set(x, y, 0)
        im.group.scale.setScalar(r)
        im.group.rotation.z = src.startsWith('andromeda') ? 0.6 : 0
        im.fades.forEach((f) => obj.fades.push(f))
        im.wantTex!(false)
        group.add(im.group)
      }
      place('milkyway_sm.webp', -0.12, -0.06, 0.01, 1)
      place('andromeda_sm.webp', 0.13, 0.08, 0.0152, 0.5)
      const pts: Pt[] = [
        { x: -0.12, y: -0.06, s: 22, c: WARM, a: 0.25 },
        { x: 0.13, y: 0.08, s: 26, c: WARM, a: 0.25 },
        { x: 0.2, y: 0.02, s: 6, c: WARM, a: 0.6 }, // triangulum
      ]
      for (let i = 0; i < 90; i++) {
        const host = i < 35 ? [-0.12, -0.06] : i < 70 ? [0.13, 0.08] : [0, 0]
        const sp = i < 70 ? 0.07 : 0.42
        pts.push({ x: host[0] + gauss(r1) * sp, y: host[1] + gauss(r1) * sp, s: 1.6 + r1() * 2.2, c: WARM, a: 0.5 + r1() * 0.5 })
      }
      addPointsTracked(pts)
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
  obj.update = (_t, _dt, rs) => {
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
  private w = 1
  private h = 1

  constructor(canvas: HTMLCanvasElement, private bodies: Body[]) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.15
    maxAniso = this.renderer.capabilities.getMaxAnisotropy()
    const key = new THREE.DirectionalLight(0xfff6ea, 3.2)
    key.position.set(-1, 0.75, 0.85)
    this.scene.add(key)
    this.scene.add(new THREE.AmbientLight(0x8890a0, 0.05))
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
      o = spec.type === 'planet' ? makePlanet(b, spec) : spec.type === 'star' ? makeStar(b, spec) : spec.type === 'image' ? makeImage(b, spec) : makeProc(b, spec)
      o.group.visible = false
      this.scene.add(o.group)
      this.objs.set(i, o)
    }
    return o
  }

  has(i: number) { return this.objs.has(i) }

  /** items: bodies to show this frame */
  render(items: { i: number; x: number; y: number; rs: number; alpha: number }[], time: number, dt: number, reduced: boolean, hiRes: boolean, current: number) {
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
      o.update?.(time, dt, it.rs, reduced)
      maxR = Math.max(maxR, it.rs * 3)
      z += 0 // bodies never overlap in xy, so a shared depth is fine
    }
    const c = this.camera
    c.left = -this.w / 2; c.right = this.w / 2; c.top = this.h / 2; c.bottom = -this.h / 2
    c.near = -maxR * 1.1; c.far = maxR * 1.1
    c.position.set(0, 0, 0)
    c.updateProjectionMatrix()
    this.renderer.render(this.scene, c)
  }

  /** preload textures for slides near i */
  prefetch(i: number, hiRes: boolean) {
    for (const j of [i, i + 1, i - 1, i + 2]) {
      if (j < 0 || j >= this.bodies.length) continue
      this.obj(j).wantTex?.(hiRes && Math.abs(j - i) <= 1)
    }
  }
}
