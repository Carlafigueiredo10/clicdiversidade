import { useEffect, useRef } from 'react'

// Headline cinematografica para a /jornada. Sem libs externas: CSS keyframes
// (breathing, grain shift) + mousemove com rAF pra parallax + glow.
// Respeita prefers-reduced-motion (CSS faz isso direto).
export default function HeadlineCinematic({
  eyebrow,
  lines,
  className = '',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let targetX = 0
    let targetY = 0
    let mx = 0
    let my = 0

    function onMove(e) {
      const rect = el.getBoundingClientRect()
      // normaliza pra -1..1 com origem no centro do bloco
      targetX = (e.clientX - rect.left - rect.width / 2) / rect.width
      targetY = (e.clientY - rect.top - rect.height / 2) / rect.height
      // clamp suave pra nao saturar quando o mouse esta longe
      targetX = Math.max(-1, Math.min(1, targetX * 1.2))
      targetY = Math.max(-1, Math.min(1, targetY * 1.2))
      if (!raf) raf = requestAnimationFrame(tick)
    }

    function onLeave() {
      targetX = 0
      targetY = 0
      if (!raf) raf = requestAnimationFrame(tick)
    }

    function tick() {
      // lerp lento — sensacao magnetica, nunca tracking 1:1
      mx += (targetX - mx) * 0.08
      my += (targetY - my) * 0.08
      el.style.setProperty('--mx', mx.toFixed(4))
      el.style.setProperty('--my', my.toFixed(4))
      if (Math.abs(targetX - mx) > 0.001 || Math.abs(targetY - my) > 0.001) {
        raf = requestAnimationFrame(tick)
      } else {
        raf = 0
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className={'headline-cinematic ' + className}>
      {eyebrow && (
        <p className="headline-eyebrow text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          {eyebrow}
        </p>
      )}
      <div className="headline-glow" aria-hidden />
      <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
        {lines.map((line, i) => (
          <span
            key={i}
            className="headline-line"
            style={{ '--i': i, '--total': lines.length }}
          >
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <div className="headline-grain" aria-hidden />
    </div>
  )
}
