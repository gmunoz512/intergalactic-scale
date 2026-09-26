import { useCallback, useEffect, useRef, useState } from 'react'
import { BODIES, EARTH, formatLength, times } from './data'
import { Scene, uiScale } from './scene'

const N = BODIES.length
const pad2 = (n: number) => String(n).padStart(2, '0')
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))

/** black margin around the frame */
function frameMargin(w: number) { return w < 768 ? 12 : Math.round(Math.max(32, Math.min(64, w * 0.026))) }
const viewport = () => ({ w: innerWidth, h: innerHeight, m: frameMargin(innerWidth) })

/** a short, dry, quiet mechanical tick, synthesized */
let audio: AudioContext | null = null
function tick() {
  if (!audio) return
  const t = audio.currentTime
  const len = Math.floor(audio.sampleRate * 0.03)
  const buf = audio.createBuffer(1, len, audio.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.09))
  const src = audio.createBufferSource(); src.buffer = buf
  const bp = audio.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3200; bp.Q.value = 1.4
  const g = audio.createGain(); g.gain.setValueAtTime(0.09, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.03)
  src.connect(bp).connect(g).connect(audio.destination)
  src.start(t); src.stop(t + 0.04)
}

function indexFromHash() {
  const id = decodeURIComponent(location.hash.slice(1))
  const i = BODIES.findIndex((b) => b.id === id)
  return i >= 0 ? i : 0
}

export default function App() {
  const bgRef = useRef<HTMLCanvasElement>(null)
  const glRef = useRef<HTMLCanvasElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const initial = useRef(indexFromHash())
  const pos = useRef(initial.current)
  const vel = useRef(0)
  const target = useRef(initial.current)
  const dragging = useRef<null | { x: number; y: number; start: number; axis: 0 | 1 | -1; lastT: number; lastP: number; v: number }>(null)
  const reduced = useRef(false)
  const sceneRef = useRef<Scene | null>(null)
  const rotating = useRef<null | { i: number; x: number; y: number; t: number; rs: number; id: number }>(null)
  const [active, setActive] = useState(initial.current)
  const [credits, setCredits] = useState(false)
  // first load: hold on ink until textures + shaders + fonts are ready, then fade in
  const [loaded, setLoaded] = useState(false)
  const [ready, setReady] = useState(false)
  const [vp, setVp] = useState(viewport)
  const reducedAtStart = useRef(matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [frameAnim] = useState(() => !reducedAtStart.current)
  const [frameDrawn, setFrameDrawn] = useState(() => reducedAtStart.current)
  const [sound, setSound] = useState(() => { try { return localStorage.getItem('scale-tour-sound') === 'on' } catch { return false } })
  const toggleSound = useCallback(() => {
    setSound((v) => {
      const nv = !v
      try { localStorage.setItem('scale-tour-sound', nv ? 'on' : 'off') } catch { /* private mode */ }
      if (nv) { audio ??= new AudioContext(); audio.resume(); tick() }
      return nv
    })
  }, [])
  const [ui, setUi] = useState(() => { const v = viewport(); return uiScale(v.w - v.m * 2, v.h - v.m * 2) })

  const go = useCallback((i: number) => {
    target.current = clamp(Math.round(i), 0, N - 1)
    if (reduced.current) {
      pos.current = target.current
      vel.current = 0
    }
  }, [])
  const step = useCallback((d: number) => go(target.current + d), [go])

  // render loop + physics
  useEffect(() => {
    const canvas = canvasRef.current!
    const scene = new Scene(bgRef.current!, glRef.current!, canvas)
    sceneRef.current = scene
    const mq = matchMedia('(prefers-reduced-motion: reduce)')
    const setReduced = () => { reduced.current = mq.matches; scene.reduced = mq.matches }
    setReduced()
    mq.addEventListener('change', setReduced)
    const onResize = () => {
      const v = viewport()
      setVp(v)
      scene.resize(v.w - v.m * 2, v.h - v.m * 2)
      scene.prefetch(target.current)
      setUi(uiScale(v.w - v.m * 2, v.h - v.m * 2))
    }
    onResize()
    addEventListener('resize', onResize)

    // loading gate: min hold so it feels intentional, max timeout so it never hangs.
    // the render loop keeps running underneath, which also warms the gpu with real frames.
    let cancelled = false
    const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => r()))
    Promise.race([
      scene.ready(initial.current).then(nextFrame).then(nextFrame).then(nextFrame),
      new Promise<void>((r) => setTimeout(r, 6000)),
    ]).catch(() => {}).then(() => { if (!cancelled) setReady(true) })

    let raf = 0
    let last = performance.now()
    let shown = -1
    let lastPrefetch = -1
    let slowT = 0
    let sampleT = 0
    let slowFrames = 0
    let frames = 0
    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (!dragging.current) {
        if (reduced.current) {
          pos.current = target.current
          vel.current = 0
        } else {
          // spring (mass 1, tension 150, friction 16): glides, overshoots a touch, settles
          const steps = Math.max(1, Math.ceil(dt / (1 / 120)))
          const h = dt / steps
          for (let k = 0; k < steps; k++) {
            const x = target.current - pos.current
            vel.current += (150 * x - 16 * vel.current) * h
            pos.current += vel.current * h
          }
          const x = target.current - pos.current
          if (Math.abs(x) < 0.0004 && Math.abs(vel.current) < 0.002) { pos.current = target.current; vel.current = 0 }
        }
      }
      scene.draw(pos.current, now / 1000)
      // adaptive resolution: if we're well under 60fps for ~2s, render fewer pixels
      frames++
      if (dt > 1 / 45) slowFrames++
      sampleT += dt
      if (sampleT > 2) {
        if (slowFrames / frames > 0.5 && now - slowT > 3000) { scene.lowerQuality(); slowT = now }
        sampleT = 0; frames = 0; slowFrames = 0
      }
      if (target.current !== lastPrefetch) { lastPrefetch = target.current; scene.prefetch(target.current) }
      const r = clamp(Math.round(pos.current), 0, N - 1)
      if (r !== shown) {
        shown = r
        setActive(r)
        history.replaceState(null, '', `#${BODIES[r].id}`)
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      removeEventListener('resize', onResize)
      mq.removeEventListener('change', setReduced)
    }
  }, [])

  // load sequence: frame draws in, then (once ready) the scene fades up, then the ui
  useEffect(() => {
    if (frameDrawn) return
    const id = setTimeout(() => setFrameDrawn(true), 1150)
    return () => clearTimeout(id)
  }, [frameDrawn])
  useEffect(() => { if (ready && frameDrawn) setLoaded(true) }, [ready, frameDrawn])

  // optional tick on each slide step
  const lastTick = useRef(active)
  useEffect(() => {
    if (active === lastTick.current) return
    lastTick.current = active
    if (sound && loaded) tick()
  }, [active, sound, loaded])

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const k = e.key
      if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown' || k === ' ' || k === 'j') { e.preventDefault(); step(1) }
      else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp' || k === 'k') { e.preventDefault(); step(-1) }
      else if (k === 'Home') { e.preventDefault(); go(0) }
      else if (k === 'End') { e.preventDefault(); go(N - 1) }
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [go, step])

  // follow manual hash edits / back-forward (replaceState doesn't fire this)
  useEffect(() => {
    const onHash = () => go(indexFromHash())
    addEventListener('hashchange', onHash)
    return () => removeEventListener('hashchange', onHash)
  }, [go])

  // wheel: one slide per gesture, trackpad-momentum safe
  useEffect(() => {
    const el = stageRef.current!
    let acc = 0
    let lastEvt = 0
    let locked = false
    let lockedAt = 0
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const now = performance.now()
      const d = (Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX) * (e.deltaMode === 1 ? 30 : 1)
      if (now - lastEvt > 180) { locked = false; acc = 0 }
      if (locked && now - lockedAt > 900) { locked = false; acc = 0 }
      lastEvt = now
      if (locked) return
      acc += d
      if (Math.abs(acc) > 30) {
        step(Math.sign(acc))
        acc = 0
        locked = true
        lockedAt = now
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [step])

  // drag / swipe
  const local = (e: React.PointerEvent) => { const r = stageRef.current!.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top] as const }
  const setCursor = (c: string) => { if (stageRef.current && stageRef.current.style.cursor !== c) stageRef.current.style.cursor = c }
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    // a press that starts on the current body turns it instead of changing slides
    const hit = sceneRef.current?.hit(...local(e))
    if (hit && !rotating.current) {
      rotating.current = { i: hit.i, x: e.clientX, y: e.clientY, t: performance.now(), rs: hit.rs, id: e.pointerId }
      sceneRef.current!.grab(hit.i)
      setCursor('grabbing')
      return
    }
    setCursor('grabbing')
    dragging.current = { x: e.clientX, y: e.clientY, start: pos.current, axis: 0, lastT: performance.now(), lastP: pos.current, v: 0 }
    vel.current = 0
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const r = rotating.current
    if (r) {
      if (e.pointerId !== r.id) return
      const now = performance.now()
      sceneRef.current?.drag(r.i, e.clientX - r.x, e.clientY - r.y, r.rs, Math.max(0.001, (now - r.t) / 1000))
      r.x = e.clientX; r.y = e.clientY; r.t = now
      return
    }
    const d = dragging.current
    if (!d) {
      if (e.pointerType === 'mouse') setCursor(sceneRef.current?.hit(...local(e)) ? 'grab' : 'default')
      return
    }
    const dx = e.clientX - d.x, dy = e.clientY - d.y
    if (d.axis === 0 && Math.hypot(dx, dy) > 6) d.axis = Math.abs(dx) >= Math.abs(dy) ? 1 : -1
    if (d.axis === 0) return
    const span = Math.min(innerWidth, 900) * 0.45
    const delta = d.axis === 1 ? -dx / span : -dy / span
    if (reduced.current) return
    const p = clamp(d.start + delta, -0.25, N - 0.75)
    const now = performance.now()
    const dt = Math.max(1, now - d.lastT)
    d.v = 0.7 * d.v + 0.3 * ((p - d.lastP) / dt) * 1000
    d.lastT = now
    d.lastP = p
    pos.current = p
  }
  const onPointerUp = (e: React.PointerEvent) => {
    const r = rotating.current
    if (r) {
      if (e.pointerId !== r.id) return
      rotating.current = null
      // a still-held pointer means no fling
      if (performance.now() - r.t > 90) sceneRef.current?.drag(r.i, 0, 0, r.rs, 0.1)
      sceneRef.current?.release(r.i)
      setCursor(e.pointerType === 'mouse' && sceneRef.current?.hit(...local(e)) ? 'grab' : 'default')
      return
    }
    setCursor('default')
    const d = dragging.current
    dragging.current = null
    if (!d) return
    const dx = e.clientX - d.x, dy = e.clientY - d.y
    if (reduced.current) {
      const m = d.axis === 1 ? dx : dy
      if (Math.abs(m) > 40) step(m < 0 ? 1 : -1)
      return
    }
    if (d.axis === 0) return
    let t = Math.round(pos.current + d.v * 0.12)
    if (Math.abs(d.v) > 0.8 && t === Math.round(d.start)) t += Math.sign(d.v)
    vel.current = d.v * 0.5
    go(t)
  }

  const body = BODIES[active]
  const prev = active > 0 ? BODIES[active - 1] : null
  const size = formatLength(body.sphere ? body.radiusKm : body.radiusKm * 2)
  const vsPrev = prev ? body.radiusKm / prev.radiusKm : null
  const vsEarth = body.radiusKm / EARTH.radiusKm
  const progress = active / (N - 1)

  const { w: vw, h: vh, m } = vp
  const fw = vw - m * 2, fh = vh - m * 2
  const R = vw < 768 ? 12 : 16

  return (
    <div className="fixed inset-0 select-none bg-black text-mist">
      {/* the frame: canvas + ui live inside a hairline rounded rectangle on black margins */}
      <div className="absolute overflow-hidden bg-ink" style={{ left: m, top: m, width: fw, height: fh, borderRadius: R }}>
        <div
          ref={stageRef}
          className="scene-fade absolute inset-0 touch-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          role="group"
          aria-roledescription="carousel"
          aria-label="scale tour, from the moon to the observable universe"
          tabIndex={0}
          style={{ opacity: loaded ? 1 : 0 }}
          data-loaded={loaded || undefined}
        >
          <canvas ref={bgRef} className="absolute inset-0 block h-full w-full" />
          <canvas ref={glRef} className="absolute inset-0 block h-full w-full" />
          <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
        </div>

        {/* ui layer on a rigid grid pinned to the frame's inner corners; zoomed as a whole on 4k-at-1x */}
        <div className="ui-fade ui-legible pointer-events-none absolute left-0 top-0 font-mono text-[11px] tracking-[0.05em]" style={{ zoom: ui, width: fw / ui, height: fh / ui, opacity: loaded ? 1 : 0, visibility: loaded ? 'visible' : 'hidden' }}>
          <div className="absolute inset-0 p-5 md:p-7">
            {/* top-left: wordmark */}
            <div className="pointer-events-auto absolute left-5 top-5 md:left-7 md:top-7">
              <a href="https://gmunoz512.github.io/german-plus/" className="font-serif text-2xl leading-none tracking-normal text-paper">
                german<span className="text-accent">+</span>
              </a>
              <p className="mt-1.5 text-fog">scale tour</p>
            </div>
            {/* top-right: counter + sound */}
            <div className="absolute right-5 top-5 flex flex-col items-end gap-1.5 md:right-7 md:top-7">
              <p aria-hidden><span className="text-fog">[</span><span className="text-paper">{pad2(active + 1)}</span><span className="text-fog">/{pad2(N)}]</span></p>
              <button onClick={toggleSound} className="pointer-events-auto text-fog transition-colors hover:text-paper" aria-pressed={sound}>
                sound <span className={sound ? 'text-paper' : ''}>[{sound ? 'on' : 'off'}]</span>
              </button>
            </div>

            {/* info panel: swaps instantly */}
            <section
              className="absolute inset-x-5 bottom-[92px] md:inset-x-auto md:bottom-auto md:left-7 md:top-1/2 md:w-[320px] md:-translate-y-1/2"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="text-accent">[{pad2(active + 1)}]</p>
              <h1 className="mt-1.5 font-serif text-[42px] leading-[1.02] tracking-normal text-paper text-balance md:text-[60px]">{body.name}</h1>
              <dl className="mt-4 space-y-1 md:mt-5">
                <Stat label={body.sphere ? 'radius' : 'across'} value={`${size.value} ${size.unit}`} />
                <Stat label="vs previous" value={vsPrev ? times(vsPrev) : '—'} note={vsPrev ? prev!.name.replace(/^the /, '') : 'where i start'} />
                <Stat label="vs earth" value={times(vsEarth)} />
              </dl>
              <p className="mt-4 font-serif text-lg italic leading-snug tracking-normal text-paper-dim md:mt-5 md:text-xl">{body.fact}</p>
              {body.note && <p className="mt-2 hidden font-sans text-xs leading-relaxed tracking-normal text-fog md:block">{body.note}</p>}
            </section>

            {credits && (
              <div className="pointer-events-auto absolute bottom-20 left-5 right-5 z-10 max-w-md rounded-[10px] border border-line bg-ink-raised/95 p-5 font-sans text-xs leading-relaxed tracking-normal text-mist md:left-7 md:right-auto">
                <div className="flex items-baseline justify-between">
                  <p className="font-serif text-xl text-paper">credits</p>
                  <button onClick={() => setCredits(false)} className="font-mono text-[11px] tracking-[0.05em] text-fog hover:text-paper">[close]</button>
                </div>
                <ul className="mt-3 space-y-1.5">
                  <li>planet maps: <a className="text-paper-dim underline decoration-line underline-offset-2 hover:text-accent" href="https://www.solarsystemscope.com/textures/">solar system scope</a>, cc by 4.0 (based on nasa data)</li>
                  <li>orion nebula: nasa, esa, m. robberto (stsci/esa) &amp; the hubble orion treasury project team — public domain</li>
                  <li>omega centauri: eso/inaf-vst/omegacam, a. grado, l. limatola — cc by 4.0</li>
                  <li>the sun &amp; stars, the milky way, andromeda, the local group’s galaxies, the heliosphere, oort cloud, superclusters &amp; the observable universe are live procedural renders (illustrations, styled after eso, hubble &amp; amateur astrophotos). sizes &amp; sources in the repo’s src/data.ts.</li>
                </ul>
                <p className="mt-3 text-fog">made by german, for fun. images are toned to fit the page.</p>
              </div>
            )}

            {/* bottom: progress rail + hints + nav */}
            <footer className="pointer-events-auto absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7">
              <div className="relative h-px w-full bg-line" aria-hidden>
                <div className="absolute inset-y-0 left-0 bg-accent" style={{ width: `${progress * 100}%` }} />
                {BODIES.map((b, i) => (
                  <button
                    key={b.id}
                    onClick={() => go(i)}
                    tabIndex={-1}
                    title={b.name}
                    className="absolute -top-2 h-4 w-3 -translate-x-1/2 cursor-pointer"
                    style={{ left: `${(i / (N - 1)) * 100}%` }}
                  >
                    <span className={`mx-auto block w-px ${i <= active ? 'bg-accent' : 'bg-fog/50'} ${i === active ? 'h-2.5' : 'h-1.5'}`} />
                  </button>
                ))}
              </div>
              <div className="mt-3.5 flex items-center justify-between">
                <p className="text-fog">
                  <span className="hidden md:inline">[scroll · drag · ← →] <span className="text-fog/70">drag a body to spin it</span></span>
                  <span className="md:hidden">[swipe · touch to spin]</span>
                  <span className="mx-2 text-line">/</span>
                  <button onClick={() => setCredits((v) => !v)} className="text-fog transition-colors hover:text-paper" aria-expanded={credits}>
                    credits
                  </button>
                </p>
                <div className="flex items-center gap-1">
                  <NavButton label="previous" disabled={active === 0} onClick={() => step(-1)}>[←]</NavButton>
                  <NavButton label="next" disabled={active === N - 1} onClick={() => step(1)}>[→]</NavButton>
                </div>
              </div>
            </footer>
          </div>
        </div>

        {/* loading wordmark, only if the wait outlasts the frame drawing in */}
        <div className={`loader pointer-events-none absolute inset-0 flex items-center justify-center ${loaded || !frameDrawn ? 'loader-done' : ''}`} aria-hidden={loaded} role="status">
          <div className="flex flex-col items-center">
            <p className="font-serif text-lg leading-none text-paper/70">german<span className="text-accent/80">+</span></p>
            <div className="mt-3 h-px w-24 overflow-hidden bg-line/60"><div className="loader-bar h-full bg-accent/70" /></div>
            <span className="sr-only">loading</span>
          </div>
        </div>
      </div>

      {/* hairline frame, drawn in from the corners on first load */}
      <svg className="pointer-events-none absolute inset-0" width={vw} height={vh} aria-hidden>
        <g fill="none" stroke="#2a2a2e" strokeWidth="1" className={frameAnim ? 'frame-draw' : ''}>
          {framePaths(m + 0.5, m + 0.5, vw - m - 0.5, vh - m - 0.5, R).map((d, k) => <path key={k} d={d} pathLength={1} />)}
        </g>
        <g stroke="#4a4a50" strokeWidth="1" className={`frame-marks ${frameDrawn ? 'frame-marks-on' : ''}`}>
          {[[m + 14 * ui, m + 14 * ui], [vw - m - 14 * ui, m + 14 * ui], [m + 14 * ui, vh - m - 14 * ui], [vw - m - 14 * ui, vh - m - 14 * ui]].map(([x, y], k) => (
            <path key={k} d={`M${x - 4.5 * ui} ${y + 0.5}H${x + 0.5 + 5 * ui}M${x + 0.5} ${y - 4.5 * ui}V${y + 0.5 + 5 * ui}`} />
          ))}
          {vw >= 768 && [
            `M${vw / 2 + 0.5} ${m}v${7 * ui}`, `M${vw / 2 + 0.5} ${vh - m}v${-7 * ui}`, `M${m} ${vh / 2 + 0.5}h${7 * ui}`, `M${vw - m} ${vh / 2 + 0.5}h${-7 * ui}`,
          ].map((d, k) => <path key={`t${k}`} d={d} />)}
        </g>
      </svg>
    </div>
  )
}

/** eight strokes, two per corner, each starting at the corner arc and running to an edge midpoint */
function framePaths(x0: number, y0: number, x1: number, y1: number, R: number) {
  const xm = (x0 + x1) / 2, ym = (y0 + y1) / 2
  const k = R * (1 - Math.SQRT1_2)
  const out: string[] = []
  for (const [cx, cy, dx, dy] of [[x0, y0, 1, 1], [x1, y0, -1, 1], [x0, y1, 1, -1], [x1, y1, -1, -1]]) {
    const px = cx + dx * k, py = cy + dy * k
    const sH = dx * dy > 0 ? 1 : 0
    out.push(`M${px} ${py}A${R} ${R} 0 0 ${sH} ${cx + dx * R} ${cy}L${xm} ${cy}`)
    out.push(`M${px} ${py}A${R} ${R} 0 0 ${1 - sH} ${cx} ${cy + dy * R}L${cx} ${ym}`)
  }
  return out
}

function Stat({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-fog">{label}</dt>
      <dd className="text-right">
        {note && <span className="mr-2 text-fog/70">{note}</span>}
        <span className="text-fog">[</span><span className="text-paper">{value}</span><span className="text-fog">]</span>
      </dd>
    </div>
  )
}

function NavButton({ label, disabled, onClick, children }: { label: string; disabled: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="px-1.5 py-1 font-mono text-[12px] text-paper transition-colors hover:text-accent disabled:text-fog/40 disabled:hover:text-fog/40"
    >
      {children}
    </button>
  )
}
