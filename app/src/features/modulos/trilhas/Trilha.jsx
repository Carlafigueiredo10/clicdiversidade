import { useEffect, useState } from 'react'

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

  useEffect(() => {
    saveProgress(data.slug, completed)
  }, [data.slug, completed])

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
  const accentStyle = { '--trilha-accent': data.accentColor }
  const isStarted = completed.size > 0

  return (
    <div style={accentStyle} className="relative">
      {/* Sidebar HUD (xl only) */}
      <aside
        className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-30"
        aria-label="Navegação dos módulos"
      >
        {data.modulos.map((m) => (
          <a
            key={m.numero}
            href={`#modulo${m.numero}`}
            className="group flex items-center gap-3 text-xs text-ink-soft hover:text-ink transition"
          >
            <span
              aria-hidden
              className={
                'w-2.5 h-2.5 rounded-full border transition shrink-0 ' +
                (completed.has(m.numero)
                  ? 'bg-[var(--trilha-accent)] border-[var(--trilha-accent)]'
                  : 'bg-card border-line group-hover:border-ink-soft')
              }
            />
            <span className="opacity-0 group-hover:opacity-100 transition whitespace-nowrap bg-card border border-line rounded px-2 py-1 shadow-sm">
              {m.navLabel}
            </span>
          </a>
        ))}
      </aside>

      <main className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <p
            className="text-xs tracking-[0.25em] uppercase font-semibold text-center"
            style={{ color: data.accentColor }}
          >
            Trilha {String(data.numero).padStart(2, '0')} de 7
          </p>
          <h1 className="mt-6 font-display font-semibold text-3xl md:text-5xl text-ink text-center leading-[1.1]">
            {data.titulo}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
            {data.subtitulo}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-ink-soft">
            <span className="bg-card border border-line rounded-full px-3 py-1.5">
              {data.duracao}
            </span>
            <span className="bg-card border border-line rounded-full px-3 py-1.5">
              {data.modulosCount}
            </span>
            <span className="bg-card border border-line rounded-full px-3 py-1.5">
              {data.projetoMeta}
            </span>
          </div>

          {/* Progress */}
          <div className="mt-12 bg-card rounded-2xl border border-line p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-ink-soft">Progresso da trilha</span>
              <span
                className="text-sm font-medium tabular-nums"
                style={{ color: data.accentColor }}
              >
                {Math.round(pct)}%
              </span>
            </div>
            <div className="h-2 bg-page rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-700"
                style={{
                  width: `${pct}%`,
                  background: data.accentColor,
                }}
              />
            </div>
            <div className="mt-2 text-xs text-muted">
              {completed.size} de {total} módulos concluídos
            </div>
          </div>

          {/* Módulos */}
          <div className="mt-16 space-y-16">
            {data.modulos.map((m) => (
              <article
                key={m.numero}
                id={`modulo${m.numero}`}
                className="scroll-mt-8"
              >
                <div
                  className="font-mono text-xs tracking-widest font-semibold"
                  style={{ color: data.accentColor }}
                >
                  MÓDULO {String(m.numero).padStart(2, '0')}
                </div>
                <h2 className="mt-3 font-display font-semibold text-2xl md:text-4xl text-ink leading-tight">
                  {m.titulo}
                </h2>
                {m.subtitulo && (
                  <p className="mt-2 italic text-ink-soft">{m.subtitulo}</p>
                )}
                <p className="mt-6 text-ink-soft leading-relaxed">
                  {m.descricao}
                </p>

                {/* Recursos */}
                {m.recursos.length > 0 && (
                  <div className="mt-8 grid gap-3 md:grid-cols-3">
                    {m.recursos.map((r, i) => {
                      const Body = (
                        <>
                          <div className="text-[10px] uppercase tracking-wider text-muted">
                            {r.instituicao}
                          </div>
                          <div className="mt-2 font-medium text-sm text-ink leading-snug">
                            {r.nome}
                          </div>
                          <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-[10px] text-ink-soft">
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
                            className="bg-card rounded-xl border border-line p-4 block transition hover:-translate-y-0.5 hover:shadow-sm"
                            style={{
                              transition: 'all 0.2s, border-color 0.2s',
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.borderColor =
                                data.accentColor)
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.borderColor = '')
                            }
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
                )}

                {/* Exercício */}
                <div className="mt-8 bg-card rounded-2xl border border-line p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span aria-hidden className="text-lg">
                      ✏️
                    </span>
                    <h3 className="font-display font-semibold text-base text-ink">
                      Exercício prático
                    </h3>
                  </div>
                  <p className="text-sm text-ink leading-relaxed">
                    {m.exercicio.descricao}
                  </p>
                  {m.exercicio.meta.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ink-soft">
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

                {/* Checkbox */}
                <label className="mt-6 flex items-center gap-3 cursor-pointer select-none w-fit">
                  <input
                    type="checkbox"
                    checked={completed.has(m.numero)}
                    onChange={() => toggle(m.numero)}
                    className="w-5 h-5 rounded border-line"
                    style={{ accentColor: data.accentColor }}
                  />
                  <span
                    className={
                      completed.has(m.numero)
                        ? 'text-ink font-medium'
                        : 'text-ink-soft'
                    }
                  >
                    {completed.has(m.numero)
                      ? 'Módulo concluído'
                      : 'Marcar módulo como concluído'}
                  </span>
                </label>
              </article>
            ))}
          </div>

          {/* Projeto Final */}
          <section className="mt-24 bg-card rounded-2xl border border-line p-6 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <span aria-hidden>🎯</span>
              <span
                className="text-[10px] uppercase tracking-widest font-semibold"
                style={{ color: data.accentColor }}
              >
                {data.projetoFinal.badge}
              </span>
            </div>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
              {data.projetoFinal.titulo}
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              {data.projetoFinal.intro}
            </p>
            <ol className="mt-8 space-y-4">
              {data.projetoFinal.etapas.map((e) => (
                <li
                  key={e.numero}
                  className="grid grid-cols-[auto_1fr] gap-4 items-start"
                >
                  <span
                    className="font-mono text-sm font-semibold tabular-nums w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      color: data.accentColor,
                      border: `1px solid ${data.accentColor}`,
                    }}
                  >
                    {e.numero}
                  </span>
                  <div>
                    <div className="font-display font-medium text-ink">
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
              <div className="mt-8 pt-6 border-t border-line text-sm text-ink-soft">
                <strong className="text-ink">Entrega:</strong>{' '}
                {data.projetoFinal.entrega}
              </div>
            )}
          </section>

          {/* CTA Final */}
          <section className="mt-20 text-center">
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.1]">
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
                className="rounded-full bg-ink text-page px-7 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                {isStarted ? 'Continuar trilha' : 'Começar a trilha'}
              </a>
              <a
                href="/jornada/modulos/trilhas"
                className="rounded-full border border-line px-7 py-3 text-sm text-ink-soft hover:bg-card transition"
              >
                Outras trilhas
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
