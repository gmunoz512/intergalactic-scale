/**
 * scale tour data.
 *
 * `radiusKm` is always half the size we compare (for structures that are not
 * spheres, it's half the quoted diameter / extent). ratios use radiusKm.
 *
 * sources (accessed sep 2026):
 * [nasa-fs]   nasa planetary fact sheets (mean volumetric radius)
 *             https://nssdc.gsfc.nasa.gov/planetary/factsheet/
 * [iau]       iau 2015 resolution b3, nominal solar radius 695,700 km
 *             https://www.iau.org/static/resolutions/IAU2015_English.pdf
 * [sirius]    liebert et al. 2005, apj 630 l69 — sirius a 1.711 r☉
 * [pollux]    wikipedia "pollux (star)" — 9.06 r☉ (interferometric, nordgren 2001 / hatzes 2012)
 * [arcturus]  wikipedia "arcturus" — 25.4 ± 0.2 r☉ (ramírez & allende prieto 2011)
 * [aldebaran] wikipedia "aldebaran" — 45.1 ± 0.1 r☉ (richichi & roccatagliata 2005)
 * [rigel]     moravveji et al. 2012, apj 747 108 — 78.9 r☉ (wikipedia "rigel")
 * [antares]   ohnaka et al. 2013, a&a 555 a24 — ~680 r☉ (wikipedia "antares")
 * [betel]     joyce et al. 2020, apj 902 63 — 764 (+116/−62) r☉
 * [uyscuti]   wikipedia "uy scuti" — ~909 r☉ using the gaia dr3 distance;
 *             older estimate 1,708 ± 192 r☉ (wittkowski et al. 2012, distance 2.9 kpc).
 *             vy canis majoris is ~1,420 r☉ (wittkowski et al. 2012). very uncertain.
 * [helio]     nasa voyager: voyager 1 crossed the heliopause at ~121.6 au (2012),
 *             voyager 2 at ~119 au (2018). https://science.nasa.gov/mission/voyager/
 *             modeled as a ~240 au wide bubble (it is really comet-shaped).
 * [oort]      nasa "oort cloud" — inner edge 2,000–5,000 au, outer edge
 *             10,000–100,000 au. https://science.nasa.gov/solar-system/oort-cloud/
 *             using ~100,000 au radius (~1.6 ly), so ~3.2 ly across.
 * [orion]     nasa/esa hubble, "orion nebula" ~24 light-years across
 *             https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-42/
 * [omega]     nasa hubble "omega centauri" ~150 light-years in diameter
 *             https://science.nasa.gov/missions/hubble/
 * [mw]        nasa "milky way" disc ~100,000 light-years across
 *             https://science.nasa.gov/resource/the-milky-way-galaxy/
 * [m31]       wikipedia "andromeda galaxy" — d25 isophotal diameter ~152,000 ly
 *             (the stellar halo reaches much farther, >1 million ly).
 * [lg]        wikipedia "local group" — ~3 mpc ≈ 10 million ly across.
 * [virgo]     wikipedia "virgo supercluster" — ~33 mpc ≈ 110 million ly across.
 * [lania]     tully et al. 2014, nature 513 71 — ~160 mpc ≈ 520 million ly across.
 * [ou]        wikipedia "observable universe" — comoving diameter ~93 billion ly
 *             (8.8 × 10^26 m).
 */

export type Kind =
  | 'rocky'
  | 'gas'
  | 'ice'
  | 'ringed'
  | 'earth'
  | 'star'
  | 'heliosphere'
  | 'oort'
  | 'nebula'
  | 'cluster'
  | 'galaxy'
  | 'group'
  | 'supercluster'
  | 'laniakea'
  | 'universe'

export interface Body {
  id: string
  name: string
  kind: Kind
  /** half of the compared size, km */
  radiusKm: number
  /** true = spherical body quoted by radius; false = structure quoted by diameter */
  sphere: boolean
  /** base color(s) */
  color: string
  color2?: string
  /** stars: effective temperature (kelvin) */
  tempK?: number
  /** galaxies: tilt (1 = face-on) */
  tilt?: number
  fact: string
  source: string
  note?: string
}

export const KM_PER_AU = 149_597_870.7
export const KM_PER_LY = 9_460_730_472_580.8
export const R_SUN = 695_700
const AU = KM_PER_AU
const LY = KM_PER_LY

export const BODIES: Body[] = [
  { id: 'moon', name: 'the moon', kind: 'rocky', radiusKm: 1737.4, sphere: true, color: '#9c9a96', color2: '#6f6d6a', fact: "the only other world people have walked on. twelve of us, so far.", source: 'nasa-fs' },
  { id: 'mercury', name: 'mercury', kind: 'rocky', radiusKm: 2439.7, sphere: true, color: '#8f8577', color2: '#5e574e', fact: 'a year there is 88 days. a single day is 176.', source: 'nasa-fs' },
  { id: 'mars', name: 'mars', kind: 'rocky', radiusKm: 3389.5, sphere: true, color: '#b5623a', color2: '#7a3a22', fact: 'home to olympus mons, a volcano about 2.5× taller than everest.', source: 'nasa-fs' },
  { id: 'venus', name: 'venus', kind: 'rocky', radiusKm: 6051.8, sphere: true, color: '#d9bf8c', color2: '#b09366', fact: 'hot enough to melt lead, under clouds of sulfuric acid.', source: 'nasa-fs' },
  { id: 'earth', name: 'earth', kind: 'earth', radiusKm: 6371.0, sphere: true, color: '#2f5f8f', color2: '#4f7a3f', fact: 'everyone i know, and everyone i ever will, is on here.', source: 'nasa-fs' },
  { id: 'neptune', name: 'neptune', kind: 'ice', radiusKm: 24_622, sphere: true, color: '#3f63c7', color2: '#2d4799', fact: 'winds up to 2,000 km/h. the fastest we know of in the solar system.', source: 'nasa-fs' },
  { id: 'uranus', name: 'uranus', kind: 'ice', radiusKm: 25_362, sphere: true, color: '#8fcfd6', color2: '#6fb2bb', fact: 'it rolls around the sun on its side, tipped about 98°.', source: 'nasa-fs' },
  { id: 'saturn', name: 'saturn', kind: 'ringed', radiusKm: 58_232, sphere: true, color: '#d8c08a', color2: '#b39866', fact: 'its rings are ~280,000 km wide but mostly just tens of meters thick.', source: 'nasa-fs' },
  { id: 'jupiter', name: 'jupiter', kind: 'gas', radiusKm: 69_911, sphere: true, color: '#c9a27a', color2: '#8c6446', fact: 'the great red spot is a storm wider than earth, running for centuries.', source: 'nasa-fs' },
  { id: 'sun', name: 'the sun', kind: 'star', radiusKm: R_SUN, sphere: true, color: '#fff1d6', tempK: 5772, fact: 'about 99.8% of all the mass in our solar system.', source: 'iau' },
  { id: 'sirius', name: 'sirius a', kind: 'star', radiusKm: 1.711 * R_SUN, sphere: true, color: '#cfe0ff', tempK: 9940, fact: 'the brightest star in the night sky, 8.6 light-years away.', source: 'sirius' },
  { id: 'pollux', name: 'pollux', kind: 'star', radiusKm: 9.06 * R_SUN, sphere: true, color: '#ffc58a', tempK: 4586, fact: 'an orange giant with a planet of its own, thestias.', source: 'pollux' },
  { id: 'arcturus', name: 'arcturus', kind: 'star', radiusKm: 25.4 * R_SUN, sphere: true, color: '#ffb574', tempK: 4286, fact: 'its light opened the 1933 chicago world’s fair.', source: 'arcturus' },
  { id: 'aldebaran', name: 'aldebaran', kind: 'star', radiusKm: 45.1 * R_SUN, sphere: true, color: '#ffa865', tempK: 3900, fact: 'the red eye of taurus. pioneer 10 is drifting its way.', source: 'aldebaran' },
  { id: 'rigel', name: 'rigel', kind: 'star', radiusKm: 78.9 * R_SUN, sphere: true, color: '#bcd2ff', tempK: 12_100, fact: 'a blue supergiant, ~120,000 times brighter than the sun.', source: 'rigel' },
  { id: 'antares', name: 'antares', kind: 'star', radiusKm: 680 * R_SUN, sphere: true, color: '#ff9150', tempK: 3660, fact: 'put it where the sun is and it swallows mars’ orbit.', source: 'antares', note: 'radius estimates range ~680–880 r☉.' },
  { id: 'betelgeuse', name: 'betelgeuse', kind: 'star', radiusKm: 764 * R_SUN, sphere: true, color: '#ff8a48', tempK: 3600, fact: 'it will go supernova someday. someday could be 100,000 years.', source: 'betel', note: 'radius ~640–1,020 r☉ depending on the study.' },
  { id: 'uyscuti', name: 'uy scuti', kind: 'star', radiusKm: 909 * R_SUN, sphere: true, color: '#ff7f40', tempK: 3365, fact: 'one of the biggest stars we know, though nobody agrees how big.', source: 'uyscuti', note: 'uncertain: ~909 r☉ (gaia distance) vs 1,708 r☉ (older). vy canis majoris ~1,420 r☉ may be larger.' },
  { id: 'heliosphere', name: 'the heliosphere', kind: 'heliosphere', radiusKm: 120 * AU, sphere: false, color: '#9fb4d9', fact: 'the sun’s wind bubble. voyager 1 left it in 2012 and kept going.', source: 'helio', note: 'really comet-shaped, not round.' },
  { id: 'oort', name: 'the oort cloud', kind: 'oort', radiusKm: 100_000 * AU, sphere: false, color: '#c9d4e6', fact: 'a shell of trillions of icy bodies. nobody has seen it directly.', source: 'oort', note: 'outer edge estimates range 10,000–100,000 au.' },
  { id: 'orion', name: 'orion nebula', kind: 'nebula', radiusKm: 12 * LY, sphere: false, color: '#d98ab0', color2: '#6fb3c9', fact: 'a star nursery you can see with your eyes, under orion’s belt.', source: 'orion' },
  { id: 'omega', name: 'omega centauri', kind: 'cluster', radiusKm: 75 * LY, sphere: false, color: '#ffe2b8', fact: 'about 10 million stars packed into one ball of light.', source: 'omega' },
  { id: 'milkyway', name: 'the milky way', kind: 'galaxy', radiusKm: 50_000 * LY, sphere: false, color: '#e9dcc4', color2: '#9fb4d9', tilt: 0.62, fact: 'home. 100–400 billion stars, and we’re in the suburbs.', source: 'mw' },
  { id: 'andromeda', name: 'andromeda', kind: 'galaxy', radiusKm: 76_000 * LY, sphere: false, color: '#f0dcc0', color2: '#b8c4de', tilt: 0.34, fact: 'headed our way. we merge in roughly 4–5 billion years.', source: 'm31', note: 'disc size; its faint halo is far bigger.' },
  { id: 'localgroup', name: 'the local group', kind: 'group', radiusKm: 5_000_000 * LY, sphere: false, color: '#d4a574', fact: 'our neighborhood: two big spirals and 80-something small ones.', source: 'lg' },
  { id: 'virgo', name: 'virgo supercluster', kind: 'supercluster', radiusKm: 55_000_000 * LY, sphere: false, color: '#d4a574', fact: 'a hundred-ish galaxy groups and clusters, us somewhere on the edge.', source: 'virgo' },
  { id: 'laniakea', name: 'laniakea', kind: 'laniakea', radiusKm: 260_000_000 * LY, sphere: false, color: '#d4a574', fact: 'hawaiian for “immeasurable heaven.” 100,000 galaxies flowing one way.', source: 'lania' },
  { id: 'universe', name: 'the observable universe', kind: 'universe', radiusKm: 46.5e9 * LY, sphere: false, color: '#d4a574', fact: 'everything light has had time to reach us from. that’s the edge, for now.', source: 'ou', note: 'comoving size; the universe itself may be infinite.' },
]

export const EARTH = BODIES.find((b) => b.id === 'earth')!

/** format a length in km, switching km → au → ly */
export function formatLength(km: number): { value: string; unit: string } {
  if (km < 1e8) return { value: compact(km), unit: 'km' }
  const au = km / KM_PER_AU
  if (au < 20_000) return { value: compact(au), unit: 'au' }
  return { value: compact(km / KM_PER_LY), unit: 'light-years' }
}

const WORDS: [number, string][] = [
  [1e18, 'quintillion'],
  [1e15, 'quadrillion'],
  [1e12, 'trillion'],
  [1e9, 'billion'],
  [1e6, 'million'],
]

function sig(n: number): string {
  if (n >= 100) return Math.round(n).toLocaleString('en-US')
  if (n >= 10) return (Math.round(n * 10) / 10).toString()
  return (Math.round(n * 100) / 100).toString()
}

/** 1,737 / 24,622 / 1.3 million / 93 billion */
export function compact(n: number): string {
  if (n >= 1e21) {
    const e = Math.floor(Math.log10(n))
    return `${sig(n / 10 ** e)} × 10^${e}`
  }
  for (const [v, w] of WORDS) if (n >= v) return `${sig(n / v)} ${w}`
  return sig(n)
}

export function times(n: number): string {
  if (n < 1) return `${sig(n)}×`
  return `${compact(n)}×`
}
