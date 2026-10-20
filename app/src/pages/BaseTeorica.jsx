import { EIXOS } from '../features/modulos/governanca/data'
import { tr } from '../i18n'

const T = tr({
  pt: {
    eyebrow: 'Base teórica e normativa',
    titulo: ['Tudo o que esta análise pisa,', 'visível'],
    intro:
      'Bibliografia não é enfeite: cada item está amarrado ao conceito que ele ancora. Referências unificadas do projeto Servidoras no Comando e do Agente de Governança de IA.',
    acessar: 'Acessar',
    voltar: '← Voltar aos módulos',
  },
  es: {
    eyebrow: 'Base teórica y normativa',
    titulo: ['Todo lo que sostiene este análisis,', 'a la vista'],
    intro:
      'La bibliografía no es adorno: cada ítem está vinculado al concepto que sustenta. Referencias unificadas del proyecto Servidoras no Comando y del Agente de Gobernanza de IA.',
    acessar: 'Ver',
    voltar: '← Volver a los módulos',
  },
})

export default function BaseTeorica() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          {T.eyebrow}
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          {T.titulo[0]}
          <br />
          <span className="italic text-accent-fg">{T.titulo[1]}</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          {T.intro}
        </p>

        {/* Nav eixos */}
        <nav className="mt-12 flex flex-wrap gap-2 justify-center">
          {EIXOS.map((e) => (
            <a
              key={e.id}
              href={`#eixo-${e.id}`}
              className="text-xs px-3 py-1.5 rounded-full border border-line text-ink-soft hover:bg-card hover:text-ink transition"
            >
              <span aria-hidden className="mr-1.5">
                {e.icon}
              </span>
              {e.curto ?? e.titulo.split(',')[0].split('e ')[0].slice(0, 30)}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-16">
          {EIXOS.map((eixo) => (
            <section
              key={eixo.id}
              id={`eixo-${eixo.id}`}
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-line">
                <span aria-hidden className="text-2xl shrink-0">
                  {eixo.icon}
                </span>
                <h2 className="font-display font-semibold text-lg md:text-xl text-ink leading-tight">
                  {eixo.titulo}
                </h2>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed mb-6">
                {eixo.subtitulo}
              </p>

              <div className="space-y-3">
                {eixo.refs.map((ref, i) => (
                  <article
                    key={i}
                    className="bg-card border border-line rounded-xl p-5 transition hover:border-accent/40"
                  >
                    <h3 className="font-display font-semibold text-base text-ink leading-snug">
                      {ref.titulo}
                    </h3>
                    {ref.meta && (
                      <div className="mt-2 text-xs text-muted">
                        {Object.entries(ref.meta).map(([k, v], j) => (
                          <span key={k}>
                            {j > 0 && ' · '}
                            <strong className="text-ink-soft font-medium">
                              {k}:
                            </strong>{' '}
                            {v}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                      {ref.descricao}
                    </p>
                    {ref.videos && (
                      <ul className="mt-3 space-y-1 text-xs text-ink-soft">
                        {ref.videos.map((v, j) => (
                          <li key={j} className="flex gap-2">
                            <span
                              aria-hidden
                              className="text-amber-600 shrink-0"
                            >
                              ▸
                            </span>
                            <span>{v}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {ref.link && (
                      <a
                        href={ref.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent-fg hover:opacity-70 transition"
                      >
                        {ref.linkText || T.acessar}
                        <span aria-hidden>↗</span>
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-line text-center">
          <a
            href="/jornada/#modulos"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink-soft hover:bg-card transition inline-block"
          >
            {T.voltar}
          </a>
        </div>
      </div>
    </main>
  )
}
