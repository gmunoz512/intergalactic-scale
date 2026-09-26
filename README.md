# scale tour

a quiet walk from the moon to the observable universe, one size at a time. each slide
brings in something bigger, and the thing before it shrinks down to its true relative
size next to it — sometimes just a dot.

inspired by the disc carousel at a24.raviklaassens.com, dressed in german+ colors.

- vite + react + typescript + tailwind v4
- bodies are drawn procedurally on a 2d canvas (no image assets)
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
