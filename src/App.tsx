import { useCallback, useEffect, useRef, useState } from 'react'
import { BODIES, EARTH, formatLength, times } from './data'
import { Scene } from './scene'

const N = BODIES.length
const pad2 = (n: number) => String(n).padStart(2, '0')
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))

function indexFromHash() {
  const id = decodeURIComponent(location.hash.slice(1))
  const i = BODIES.findIndex((b) => b.id === id)
  return i >= 0 ? i : 0
}

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const initial = useRef(indexFromHash())
  const pos = useRef(initial.current)
  const vel = useRef(0)
  const target = useRef(initial.current)
  const dragging = useRef<null | { x: number; y: number; start: number; axis: 0 | 1 | -1; lastT: number; lastP: number; v: number }>(null)
  const reduced = useRef(false)
  const [active, setActive] = useState(initial.current)

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
    const scene = new Scene(canvas)
    const mq = matchMedia('(prefers-reduced-motion: reduce)')
    const setReduced = () => { reduced.current = mq.matches; scene.reduced = mq.matches }
    setReduced()
    mq.addEventListener('change', setReduced)
    const onResize = () => { scene.resize(innerWidth, innerHeight); scene.warm(target.current) }
    onResize()
    addEventListener('resize', onResize)

    let raf = 0
    let last = performance.now()
    let shown = -1
    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      if (!dragging.current) {
        if (reduced.current) {
          pos.current = target.current
          vel.current = 0
        } else {
          // critically damped spring toward the target slide
          const w = 6.2
          const x = target.current - pos.current
          vel.current += (w * w * x - 2 * w * vel.current) * dt
          pos.current += vel.current * dt
          if (Math.abs(x) < 0.0004 && Math.abs(vel.current) < 0.001) { pos.current = target.current; vel.current = 0 }
        }
      }
      scene.draw(pos.current, now / 1000)
      scene.idleWork(pos.current === target.current ? 14 : 4)
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
      cancelAnimationFrame(raf)
      removeEventListener('resize', onResize)
      mq.removeEventListener('change', setReduced)
    }
  }, [])

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
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    dragging.current = { x: e.clientX, y: e.clientY, start: pos.current, axis: 0, lastT: performance.now(), lastP: pos.current, v: 0 }
    vel.current = 0
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragging.current
    if (!d) return
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

  return (
    <div className="fixed inset-0 select-none bg-ink text-mist">
      <div
        ref={stageRef}
        className="absolute inset-0 cursor-grab touch-none active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="group"
        aria-roledescription="carousel"
        aria-label="scale tour, from the moon to the observable universe"
        tabIndex={0}
      >
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>

      {/* top bar */}
      <header className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between px-5 pt-5 md:px-10 md:pt-8">
        <div className="pointer-events-auto">
          <a href="https://gmunoz512.github.io/german-plus/" className="font-serif text-2xl leading-none text-paper">
            german<span className="text-accent">+</span>
          </a>
          <p className="mt-1.5 font-mono text-[11px] tracking-wide text-fog">scale tour</p>
        </div>
        <p className="font-mono text-xs text-fog" aria-hidden>
          <span className="text-paper">{pad2(active + 1)}</span> / {pad2(N)}
        </p>
      </header>

      {/* info panel */}
      <section
        className="pointer-events-none absolute inset-x-5 bottom-[104px] md:inset-x-auto md:bottom-auto md:left-10 md:top-1/2 md:w-[340px] md:-translate-y-1/2 lg:left-16"
        aria-live="polite"
        aria-atomic="true"
      >
        <div key={body.id}>
          <p className="fade-swap font-mono text-xs text-accent">{pad2(active + 1)}</p>
          <h1 className="fade-swap mt-1 font-serif text-[44px] leading-[1.02] text-paper text-balance md:text-[64px]">{body.name}</h1>
          <dl className="fade-swap-2 mt-4 text-[13px] md:mt-6">
            <Row label={body.sphere ? 'radius' : 'across'} value={<>{size.value} <span className="text-fog">{size.unit}</span></>} />
            <Row label="vs previous" value={vsPrev ? <>{times(vsPrev)} <span className="text-fog">{prev!.name.replace(/^the /, '')}</span></> : <span className="text-fog">where i start</span>} />
            <Row label="vs earth" value={times(vsEarth)} last />
          </dl>
          <p className="fade-swap-3 mt-4 font-serif text-lg italic leading-snug text-paper-dim md:mt-5 md:text-xl">{body.fact}</p>
          {body.note && <p className="fade-swap-3 mt-2 hidden text-xs leading-relaxed text-fog md:block">{body.note}</p>}
        </div>
      </section>

      {/* bottom bar */}
      <footer className="absolute inset-x-0 bottom-0 px-5 pb-6 md:px-10 md:pb-8">
        <div className="relative h-px w-full bg-line" aria-hidden>
          <div className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-700 ease-out" style={{ width: `${progress * 100}%` }} />
          {BODIES.map((b, i) => (
            <button
              key={b.id}
              onClick={() => go(i)}
              tabIndex={-1}
              title={b.name}
              className="absolute -top-2 h-4 w-3 -translate-x-1/2 cursor-pointer"
              style={{ left: `${(i / (N - 1)) * 100}%` }}
            >
              <span className={`mx-auto block h-1.5 w-px ${i <= active ? 'bg-accent' : 'bg-fog/60'} ${i === active ? 'h-2.5' : ''}`} />
            </button>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-mono text-[11px] text-fog">
            <span className="hidden md:inline">scroll, drag, or use ← → </span>
            <span className="md:hidden">swipe to grow</span>
          </p>
          <div className="flex items-center gap-2">
            <NavButton label="previous" disabled={active === 0} onClick={() => step(-1)}>←</NavButton>
            <NavButton label="next" disabled={active === N - 1} onClick={() => step(1)}>→</NavButton>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Row({ label, value, last }: { label: string; value: React.ReactNode; last?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between gap-4 border-t border-line py-2 ${last ? 'border-b' : ''}`}>
      <dt className="text-fog">{label}</dt>
      <dd className="text-right font-mono text-[12.5px] text-mist">{value}</dd>
    </div>
  )
}

function NavButton({ label, disabled, onClick, children }: { label: string; disabled: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-ink-raised/70 font-mono text-sm text-paper transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-line disabled:hover:text-paper"
    >
      {children}
    </button>
  )
}
