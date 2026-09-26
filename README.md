# scale tour

a quiet walk from the moon to the observable universe, one size at a time. each slide
brings in something bigger, and the thing before it shrinks down to its true relative
size next to it — sometimes just a dot.

inspired by the disc carousel at a24.raviklaassens.com, dressed in german+ colors.

- vite + react + typescript + tailwind v4
- three.js (webgl) spheres with real texture maps for planets, shader-based photospheres
  for stars (limb darkening, granulation, corona by temperature), toned public imagery for
  nebula / cluster / galaxies, and procedural point-cloud renders for the largest structures
- renders at device pixel ratio (up to 3, capped around a 4k×1.6 pixel budget) with adaptive
  resolution fallback; 4k maps load lazily for the current slide, 2k otherwise
- crisp starfield with a faint milky way band, plus a shooting star every 6–15s
- scroll / drag / swipe / arrow keys / home & end, deep links via `#earth`, `#sun`…
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

- planet & sun maps: [solar system scope](https://www.solarsystemscope.com/textures/), cc by 4.0
  (downloaded via wikimedia commons, resized to 4k/2k webp)
- orion nebula: nasa, esa, m. robberto (stsci/esa) and the hubble space telescope orion treasury
  project team — public domain
- omega centauri: eso/inaf-vst/omegacam, acknowledgement a. grado, l. limatola/inaf-capodimonte
  observatory — cc by 4.0
- milky way (artist's impression): nasa/jpl-caltech/eso/r. hurt
- andromeda: adam evans, cc by 2.0 (cropped, rotated, toned)
