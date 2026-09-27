/**
 * a crisp, dry plastic click, synthesized per call (modeled on the cassette carousel reference:
 * ~1.5ms attack, a bright ~3.8khz shell resonance, a ~940hz body, a tiny latch hit ~5ms later,
 * -20db by ~9ms, gone by ~25ms). slight random pitch/level/timing so a run of them doesn't sound robotic.
 */
export function renderClick(sr: number, rnd: () => number = Math.random): Float32Array {
  const len = Math.floor(sr * 0.032)
  const out = new Float32Array(len)
  const pitch = 1 + (rnd() - 0.5) * 0.12 // ±6%
  const latchAt = Math.floor(sr * (0.0045 + rnd() * 0.002))
  const latchAmp = 0.22 + rnd() * 0.12
  // excitation: a sub-millisecond noise impulse, plus the latch
  const exc = new Float32Array(len)
  const tauE = sr * 0.0006
  for (let i = 0; i < len; i++) {
    let e = (rnd() * 2 - 1) * Math.exp(-i / tauE)
    const j = i - latchAt
    if (j >= 0) e += latchAmp * (rnd() * 2 - 1) * Math.exp(-j / tauE)
    exc[i] = e
  }
  // two damped resonators (2-pole), driven by the excitation
  const res = (f: number, tau: number, gain: number) => {
    const r = Math.exp(-1 / (tau * sr)), w = (2 * Math.PI * f) / sr
    const a1 = 2 * r * Math.cos(w), a2 = -r * r
    let y1 = 0, y2 = 0
    for (let i = 0; i < len; i++) {
      const y = exc[i] * (1 - r) + a1 * y1 + a2 * y2
      y2 = y1; y1 = y
      out[i] += y * gain
    }
  }
  res(3800 * pitch, 0.0028, 2.4) // shell
  res(940 * pitch, 0.0034, 0.3) // body
  res(2100 * pitch, 0.0012, 0.8) // plastic snap, broad
  res(7200, 0.0006, 0.45) // edge, broad
  // a little raw, high-passed air on the very front edge for snap
  let px = 0
  for (let i = 0; i < len; i++) { const hp = exc[i] - px; px = exc[i]; out[i] += hp * 0.006 }
  // normalize, soft fade at the tail
  let pk = 0
  for (let i = 0; i < len; i++) pk = Math.max(pk, Math.abs(out[i]))
  const fade = Math.floor(sr * 0.006)
  for (let i = 0; i < len; i++) out[i] = (out[i] / (pk || 1)) * (i > len - fade ? (len - i) / fade : 1)
  return out
}
