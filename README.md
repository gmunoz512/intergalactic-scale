# intergalactic scale tour

a quiet walk from ceres to the observable universe, one size at a time. each slide
brings in something bigger, and the thing before it shrinks down to its true relative
size next to it — sometimes just a dot.

inspired by the disc carousel at a24.raviklaassens.com, dressed in german+ colors.

- vite + react + typescript + tailwind v4
- three.js (webgl) spheres with real texture maps for planets; shader stars with boiling
  multi-scale turbulence, crisp cellular granulation, active regions with loop filaments,
  sunspots (sun), limb darkening with a bright rim, a tight saturated corona, and animated 3d
  flares that emerge from their footpoints, rise, stream, then drain or erupt (a few alive per
  star, sized by type; static under reduced motion), tinted by spectral type; toned public imagery for the orion nebula and omega
  centauri, the helix, the pillars of creation (webb), the horsehead, the tarantula and the black eye
  galaxy (m64); live lensed black holes (sagittarius a*, s5 0014+81, ton 618: a per-pixel schwarzschild
  ray march with a thin disk sampled at every plane crossing, doppler beaming, keplerian flow, a photon
  ring and a quasar glow; drag to tilt them); live procedural shader galaxies (a barred milky way, andromeda with m32/m110) and point-cloud renders for the largest structures
- drag (or touch) the current body to spin it: trackball rotation with inertia, auto-spin
  resumes after a few idle seconds; dragging empty space still changes slides
- renders at device pixel ratio (up to 3, capped around a 4k×1.6 pixel budget) with adaptive
  resolution fallback; 4k maps load lazily for the current slide, 2k otherwise
- crisp starfield with a faint milky way band, plus a shooting star every 6–15s
- scroll / drag / swipe / arrow keys / home & end, deep links via `#earth`, `#sun`…
- framed layout: hairline rounded frame on black margins with corner marks, bracketed mono stats,
  instant title/stat swaps, spring-physics slide changes (tension 150, friction 16)
- first load waits on ink for textures, compiled shaders and fonts while the frame draws itself in,
  then the scene and ui fade up (6s fallback)
- hard single-key lighting (night sides go dark), depth of field that softens everything but the
  focused body (off on phones / slow devices), 10% faster auto-spin
- 48 slides, ceres → the observable universe, in true size order (dwarf planets, moons, kepler-22b,
  giant stars, black holes by event horizon, nebulae, segue 2, ic 1101…); textures and images load
  lazily, only for the slides around the current one
- typewriter face (courier prime) for titles and all ui text; the previous body keeps only a thin ring
- optional synthesized tick on slide change: `sound [off]` toggle, remembered in localStorage
- respects `prefers-reduced-motion` (instant cuts, no drift or twinkle)

```sh
npm install
npm run dev      # http://localhost:5173/intergalactic-scale/
npm run build && npm run preview   # http://localhost:4173/intergalactic-scale/
```

sizes and their sources live in [`src/data.ts`](src/data.ts). planets use nasa fact sheet
mean radii; stars use published interferometric radii; structures use quoted diameters
(nasa / published papers / wikipedia summaries). several are genuinely uncertain
(betelgeuse, antares, uy scuti, stephenson 2-18, kepler-22b, the black hole masses, the tarantula's
edge, ic 1101's halo, the oort cloud's edge, andromeda's size) — notes are in the data.

## image credits

- planet maps: [solar system scope](https://www.solarsystemscope.com/textures/), cc by 4.0
  (downloaded via wikimedia commons, resized to 4k/2k webp)
- orion nebula: nasa, esa, m. robberto (stsci/esa) and the hubble space telescope orion treasury
  project team — public domain
- omega centauri: eso/inaf-vst/omegacam, acknowledgement a. grado, l. limatola/inaf-capodimonte
  observatory — cc by 4.0
- ceres and makemake: solar system scope's illustrative maps (cc by 4.0)
- pluto: nasa/jhuapl/swri (new horizons global color mosaic; the unimaged south is filled in) —
  public domain · europa: usgs/pds voyager–galileo mosaic — public domain · titan: nasa/jpl-caltech/
  space science institute (cassini global map, toned to its orange haze) — public domain
- helix nebula: eso — cc by 4.0
- pillars of creation: nasa, esa, csa, stsci; j. depasquale, a. koekemoer, a. pagan (stsci) — cc by 4.0
- horsehead nebula: nasa, esa and the hubble heritage team (aura/stsci) — cc by 4.0
- tarantula nebula: nasa, esa, eso, d. lennon and e. sabbi (esa/stsci) et al. — cc by 4.0
- black eye galaxy (m64): nasa, esa, hubble (2026 wfc3 image) — public domain
- kepler-22b (surface unknown), the black holes, segue 2 and ic 1101 are procedural illustrations
- the sun and stars, the milky way and andromeda are procedural illustrations
  (no imagery), styled after eso / hubble / amateur astrophotography references
