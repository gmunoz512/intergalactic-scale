# scale tour

a quiet walk from the moon to the observable universe, one size at a time. each slide
brings in something bigger, and the thing before it shrinks down to its true relative
size next to it — sometimes just a dot.

inspired by the disc carousel at a24.raviklaassens.com, dressed in german+ colors.

- vite + react + typescript + tailwind v4
- three.js (webgl) spheres with real texture maps for planets; shader stars with boiling
  multi-scale turbulence, crisp cellular granulation, active regions with loop filaments,
  sunspots (sun), limb darkening with a bright rim, a tight saturated corona, and animated 3d
  flares that emerge from their footpoints, rise, stream, then drain or erupt (a few alive per
  star, sized by type; static under reduced motion), tinted by spectral type; toned public imagery for the orion nebula and omega
  centauri; live procedural shader galaxies (a barred milky way, andromeda with m32/m110, the
  local group's dwarfs) and point-cloud renders for the largest structures
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
- optional synthesized tick on slide change: `sound [off]` toggle, remembered in localStorage
- respects `prefers-reduced-motion` (instant cuts, no drift or twinkle)

```sh
npm install
npm run dev      # http://localhost:5173/scale-tour/
npm run build && npm run preview   # http://localhost:4173/scale-tour/
```

sizes and their sources live in [`src/data.ts`](src/data.ts). planets use nasa fact sheet
mean radii; stars use published interferometric radii; structures use quoted diameters
(nasa / published papers / wikipedia summaries). several are genuinely uncertain
(betelgeuse, antares, uy scuti, the oort cloud's edge, andromeda's size) — notes are in the data.

## image credits

- planet maps: [solar system scope](https://www.solarsystemscope.com/textures/), cc by 4.0
  (downloaded via wikimedia commons, resized to 4k/2k webp)
- orion nebula: nasa, esa, m. robberto (stsci/esa) and the hubble space telescope orion treasury
  project team — public domain
- omega centauri: eso/inaf-vst/omegacam, acknowledgement a. grado, l. limatola/inaf-capodimonte
  observatory — cc by 4.0
- the sun and stars, the milky way, andromeda and the local group are procedural illustrations
  (no imagery), styled after eso / hubble / amateur astrophotography references
