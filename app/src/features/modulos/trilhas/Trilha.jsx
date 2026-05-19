import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// Cada trilha tem um par de cores pra montar o gradiente do título cinematográfico.
// Mantém o accentColor como base e pareia com uma cor complementar do palette.
const GRADIENT_PAIRS = {
  '#38BDF8': ['#38BDF8', '#A78BFA'], // sky → lavender (Fundamental)
  '#A78BFA': ['#A78BFA', '#FB7185'], // lavender → rose
  '#F5A623': ['#F5A623', '#FB7185'], // amber → rose
  '#FB7185': ['#FB7185', '#A78BFA'], // rose → lavender
  '#34D399': ['#34D399', '#38BDF8'], // green → sky
  '#60A5FA': ['#60A5FA', '#A78BFA'], // blue → lavender
}

function loadProgress(slug) {
  try {
    const raw = localStorage.getItem(`clic:trilha:${slug}:progress`)
    return new Set(JSON.parse(raw || '[]'))
  } catch {
    return new Set()
  }
}

function saveProgress(slug, set) {
  try {
    localStorage.setItem(
      `clic:trilha:${slug}:progress`,
      JSON.stringify([...set]),
    )
  } catch {}
}

export default function Trilha({ data }) {
  const [completed, setCompleted] = useState(() => loadProgress(data.slug))
  const [activeModulo, setActiveModulo] = useState(null)
  const heroRef = useRef(null)

  useEffect(() => {
    saveProgress(data.slug, completed)
  }, [data.slug, completed])

  // Scroll-spy do side rail (qual módulo está visível agora)
  useEffect(() => {
    const els = data.modulos
      .map((m) => document.getElementById(`modulo${m.numero}`))
      .filter(Boolean)
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          const num = parseInt(visible.target.id.replace('modulo', ''), 10)
          setActiveModulo(num)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [data.modulos])

  // Parallax sutil no glow do hero (segue o mouse, devagar)
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0

    function onMove(e) {
      const r = el.getBoundingClientRect()
      tx = (e.clientX - r.left - r.width / 2) / r.width
      ty = (e.clientY - r.top - r.height / 2) / r.height
      tx = Math.max(-1, Math.min(1, tx))
      ty = Math.max(-1, Math.min(1, ty))
      if (!raf) raf = requestAnimationFrame(tick)
    }
    function tick() {
      cx += (tx - cx) * 0.06
      cy += (ty - cy) * 0.06
      el.style.setProperty('--gx', `${50 + cx * 18}%`)
      el.style.setProperty('--gy', `${38 + cy * 22}%`)
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) {
        raf = requestAnimationFrame(tick)
      } else {
        raf = 0
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  function toggle(n) {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(n)) next.delete(n)
      else next.add(n)
      return next
    })
  }

  const total = data.modulos.length
  const pct = total > 0 ? (completed.size / total) * 100 : 0
  const isStarted = completed.size > 0
  const accent = data.accentColor
  const [gFrom, gTo] = GRADIENT_PAIRS[accent] || [accent, '#A78BFA']

  return (
    <div
      className="relative"
      style={{
        '--trilha-accent': accent,
        '--trilha-from': gFrom,
        '--trilha-to': gTo,
      }}
    >
      {/* Voltar (top-left) */}
      <Link
        to="/modulos/trilhas"
        className="fixed top-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-card/90 backdrop-blur border border-line px-4 py-2 text-xs font-medium text-ink-soft hover:text-ink hover:border-ink-soft transition shadow-soft"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Voltar para Trilhas
      </Link>

      {/* Side rail (xl+) — módulos sempre visíveis */}
      <aside
        className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-30 max-w-[200px]"
        aria-label="Navegação dos módulos"
      >
        <div className="text-[10px] tracking-[0.2em] uppercase text-muted font-semibold mb-1 pl-5">
          Módulos
        </div>
        {data.modulos.map((m) => {
          const done = completed.has(m.numero)
          const active = activeModulo === m.numero
          return (
            <a
              key={m.numero}
              href={`#modulo${m.numero}`}
              className="group flex items-center gap-3 text-xs leading-tight transition"
            >
              <span
                aria-hidden
                className={
                  'w-2.5 h-2.5 rounded-full border-2 shrink-0 transition ' +
                  (done
                    ? ''
                    : active
                      ? ''
                      : 'border-line bg-card group-hover:border-ink-soft')
                }
                style={
                  done
                    ? {
                        background: accent,
                        borderColor: accent,
                        boxShadow: `0 0 0 4px ${accent}1a`,
                      }
                    : active
                      ? {
                          background: 'white',
                          borderColor: accent,
                          boxShadow: `0 0 0 4px ${accent}26`,
                        }
                      : {}
                }
              />
              <span
                className={
                  'transition whitespace-nowrap ' +
                  (active
                    ? 'text-ink font-medium'
                    : done
                      ? 'text-ink-soft'
                      : 'text-muted group-hover:text-ink-soft')
                }
              >
                {m.navLabel}
              </span>
            </a>
          )
        })}
      </aside>

      <main className="px-5 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-4xl">
          {/* ━━━━━━━━━━━━━━━━━━━━ HERO CINEMATOGRÁFICO ━━━━━━━━━━━━━━━━━━━━ */}
          <section
            ref={heroRef}
            className="relative trilha-hero"
            style={{ '--gx': '50%', '--gy': '38%' }}
          >
            {/* Halo de cor atrás do card */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 trilha-hero-glow"
              style={{
                background: `radial-gradient(ellipse 60% 55% at var(--gx) var(--gy), ${gFrom}33 0%, ${gTo}1f 35%, transparent 70%)`,
                filter: 'blur(40px)',
                transform: 'translateY(-10%)',
              }}
            />

            {/* Frame com depth */}
            <div
              className="relative bg-card/70 backdrop-blur-sm border rounded-3xl px-6 py-12 md:px-14 md:py-20 text-center overflow-hidden"
              style={{
                borderColor: `${accent}33`,
                boxShadow: `0 1px 0 rgba(255,255,255,0.7) inset, 0 30px 80px -30px ${accent}40, 0 8px 30px -10px rgba(20,20,40,0.08)`,
              }}
            >
              {/* Barra de cor no topo do card */}
              <div
                aria-hidden
                className="absolute top-0 inset-x-0 h-[3px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${gFrom}, ${gTo}, transparent)`,
                }}
              />

              <p
                className="text-[11px] tracking-[0.32em] uppercase font-semibold"
                style={{ color: accent }}
              >
                Trilha {String(data.numero).padStart(2, '0')} de 7 · Trilhas de
                Aprendizagem
              </p>

              <h1 className="mt-7 font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-[#050816]">
                {data.titulo}
              </h1>

              <p className="mt-8 max-w-xl mx-auto text-ink-soft text-base md:text-lg leading-relaxed">
                {data.subtitulo}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-2.5">
                {[data.duracao, data.modulosCount, data.projetoMeta].map(
                  (t, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-page/70 border px-4 py-2 text-xs font-medium text-ink-soft"
                      style={{ borderColor: `${accent}22` }}
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>

              {/* Mini-CTA dentro do hero */}
              <div className="relative mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href="#modulo1"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{
                    background: `linear-gradient(135deg, ${gFrom}, ${gTo})`,
                    boxShadow: `0 8px 28px -6px ${accent}90, 0 0 0 1px rgba(255,255,255,0.06) inset`,
                  }}
                >
                  {isStarted ? 'Continuar trilha →' : 'Começar agora →'}
                </a>
              </div>
            </div>
          </section>

          {/* ━━━━━━━━━━━━━━━━━━━━ PROGRESSO ━━━━━━━━━━━━━━━━━━━━ */}
          <div
            className="mt-10 bg-card rounded-2xl border p-5"
            style={{ borderColor: `${accent}1f` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-ink-soft">Progresso da trilha</span>
              <span
                className="text-sm font-semibold tabular-nums"
                style={{ color: accent }}
              >
                {Math.round(pct)}%
              </span>
            </div>
            <div className="h-2 bg-page rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-700"
                style={{
                  width: `${pct}%`,
                  background: `linear-gradient(90deg, ${gFrom}, ${gTo})`,
                }}
              />
            </div>
            <div className="mt-2 text-xs text-muted">
              {completed.size} de {total} módulos concluídos
            </div>
          </div>

          {/* ━━━━━━━━━━━━━━━━━━━━ MÓDULOS (com timeline) ━━━━━━━━━━━━━━━━━━━━ */}
          <div className="mt-20 relative pl-10 md:pl-14">
            {/* Linha vertical conectando todos os módulos */}
            <div
              aria-hidden
              className="absolute top-2 bottom-2 w-px left-4 md:left-6"
              style={{
                background: `linear-gradient(180deg, ${accent}66 0%, ${accent}33 50%, ${accent}1a 100%)`,
              }}
            />

            <div className="space-y-20">
            {data.modulos.map((m) => {
              const done = completed.has(m.numero)
              const active = activeModulo === m.numero
              return (
                <article
                  key={m.numero}
                  id={`modulo${m.numero}`}
                  className="scroll-mt-24 relative"
                >
                  {/* Nó da timeline (alinhado com a linha vertical) */}
                  <span
                    aria-hidden
                    className="absolute top-5 w-3 h-3 rounded-full transition-all duration-300 -left-[29px] md:-left-[38px]"
                    style={{
                      background: done ? accent : 'var(--color-page)',
                      border: `2px solid ${accent}${done ? '' : '80'}`,
                      boxShadow: active
                        ? `0 0 0 6px ${accent}26, 0 0 18px ${accent}80`
                        : done
                          ? `0 0 0 4px ${accent}1f`
                          : `0 0 0 3px var(--color-page)`,
                      transform: active ? 'scale(1.25)' : 'scale(1)',
                    }}
                  />
                  {/* Header com chip numerado vívido */}
                  <div className="flex items-start gap-4 mb-2">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center font-display font-bold text-base md:text-lg shrink-0 transition"
                      style={{
                        background: done
                          ? `linear-gradient(135deg, ${gFrom}, ${gTo})`
                          : `${accent}14`,
                        border: `1.5px solid ${accent}${done ? '00' : '40'}`,
                        color: done ? '#fff' : accent,
                        boxShadow: done
                          ? `0 6px 20px -6px ${accent}80`
                          : 'none',
                      }}
                    >
                      {done ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        String(m.numero).padStart(2, '0')
                      )}
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <div
                        className="font-mono text-[10px] tracking-[0.25em] uppercase font-semibold"
                        style={{ color: accent }}
                      >
                        Módulo {String(m.numero).padStart(2, '0')}
                      </div>
                      <h2 className="mt-1.5 font-display font-semibold text-2xl md:text-3xl text-ink leading-tight">
                        {m.titulo}
                      </h2>
                      {m.subtitulo && (
                        <p className="mt-1 italic text-ink-soft text-sm md:text-base">
                          {m.subtitulo}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="mt-6 text-ink-soft leading-relaxed">
                    {m.descricao}
                  </p>

                  {/* Recursos */}
                  {m.recursos.length > 0 && (
                    <div className="mt-7">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted font-semibold mb-3">
                        Recursos verificados
                      </div>
                      <div className="grid gap-3 md:grid-cols-3">
                        {m.recursos.map((r, i) => {
                          const Body = (
                            <>
                              <div
                                className="text-[10px] uppercase tracking-wider font-semibold"
                                style={{ color: accent }}
                              >
                                {r.instituicao}
                              </div>
                              <div className="mt-2 font-medium text-sm text-ink leading-snug">
                                {r.nome}
                              </div>
                              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted">
                                {r.meta.map((t, j) => (
                                  <span key={j}>{t}</span>
                                ))}
                              </div>
                            </>
                          )
                          if (r.url) {
                            return (
                              <a
                                key={i}
                                href={r.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-card rounded-xl border border-line p-4 block transition hover:-translate-y-0.5"
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.borderColor = accent
                                  e.currentTarget.style.boxShadow = `0 12px 28px -16px ${accent}80`
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.borderColor = ''
                                  e.currentTarget.style.boxShadow = ''
                                }}
                              >
                                {Body}
                              </a>
                            )
                          }
                          return (
                            <div
                              key={i}
                              className="bg-card rounded-xl border border-line p-4"
                            >
                              {Body}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Exercício */}
                  <div
                    className="mt-7 rounded-2xl border p-6"
                    style={{
                      borderColor: `${accent}26`,
                      background: `linear-gradient(135deg, ${accent}06, ${accent}02)`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span aria-hidden className="text-lg">
                        ✏️
                      </span>
                      <h3
                        className="font-display font-semibold text-base"
                        style={{ color: accent }}
                      >
                        Exercício prático
                      </h3>
                    </div>
                    <p className="text-sm text-ink leading-relaxed">
                      {m.exercicio.descricao}
                    </p>
                    {m.exercicio.meta.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted">
                        {m.exercicio.meta.map((t, i) => (
                          <span key={i}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Dica */}
                  {m.dica && (
                    <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 text-sm text-amber-900">
                      <span aria-hidden className="text-xl shrink-0">
                        💡
                      </span>
                      <div>
                        <strong>Dica estratégica:</strong> {m.dica}
                      </div>
                    </div>
                  )}

                  {/* Checkbox concluir */}
                  <label className="mt-6 flex items-center gap-3 cursor-pointer select-none w-fit">
                    <input
                      type="checkbox"
                      checked={done}
                      onChange={() => toggle(m.numero)}
                      className="w-5 h-5 rounded border-line"
                      style={{ accentColor: accent }}
                    />
                    <span
                      className={
                        done ? 'text-ink font-medium' : 'text-ink-soft'
                      }
                    >
                      {done
                        ? 'Módulo concluído'
                        : 'Marcar módulo como concluído'}
                    </span>
                  </label>
                </article>
              )
            })}
            </div>
          </div>

          {/* ━━━━━━━━━━━━━━━━━━━━ PROJETO FINAL ━━━━━━━━━━━━━━━━━━━━ */}
          <section
            className="mt-28 rounded-3xl border p-6 md:p-12 overflow-hidden relative"
            style={{
              borderColor: `${accent}33`,
              background: `linear-gradient(135deg, ${gFrom}0d, ${gTo}0d), var(--color-card)`,
              boxShadow: `0 30px 80px -40px ${accent}40`,
            }}
          >
            <div
              aria-hidden
              className="absolute top-0 inset-x-0 h-[3px]"
              style={{
                background: `linear-gradient(90deg, ${gFrom}, ${gTo})`,
              }}
            />
            <div className="flex items-center gap-2 mb-4">
              <span aria-hidden>🎯</span>
              <span
                className="text-[10px] uppercase tracking-[0.25em] font-bold"
                style={{ color: accent }}
              >
                {data.projetoFinal.badge}
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.05] tracking-tight text-[#050816]">
              {data.projetoFinal.titulo}
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed max-w-2xl">
              {data.projetoFinal.intro}
            </p>
            <ol className="mt-10 space-y-5">
              {data.projetoFinal.etapas.map((e) => (
                <li
                  key={e.numero}
                  className="grid grid-cols-[auto_1fr] gap-4 items-start"
                >
                  <span
                    className="font-mono text-sm font-bold tabular-nums w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      color: accent,
                      border: `1.5px solid ${accent}66`,
                      background: `${accent}0d`,
                    }}
                  >
                    {e.numero}
                  </span>
                  <div>
                    <div className="font-display font-semibold text-ink text-lg">
                      {e.titulo}
                    </div>
                    <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            {data.projetoFinal.entrega && (
              <div
                className="mt-10 pt-6 border-t text-sm text-ink-soft"
                style={{ borderColor: `${accent}1f` }}
              >
                <strong className="text-ink">Entrega:</strong>{' '}
                {data.projetoFinal.entrega}
              </div>
            )}
          </section>

          {/* ━━━━━━━━━━━━━━━━━━━━ CTA FINAL ━━━━━━━━━━━━━━━━━━━━ */}
          <section className="mt-24 text-center">
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.05] tracking-tight text-[#050816]">
              {data.ctaFinal.tituloLinhas.map((linha, i) => (
                <span key={i}>
                  {linha}
                  {i < data.ctaFinal.tituloLinhas.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-ink-soft leading-relaxed">
              {data.ctaFinal.descricao}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="#modulo1"
                className="rounded-full px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
                style={{
                  background: `linear-gradient(135deg, ${gFrom}, ${gTo})`,
                  boxShadow: `0 12px 32px -10px ${accent}80`,
                }}
              >
                {isStarted ? 'Continuar trilha' : 'Começar a trilha'}
              </a>
              <Link
                to="/modulos/trilhas"
                className="rounded-full border border-line px-7 py-3.5 text-sm text-ink-soft hover:bg-card transition"
              >
                Outras trilhas
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
