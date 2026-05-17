export default function Example() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.2em] uppercase text-accent-fg font-medium">
          Exemplo prático
        </p>
        <h2 className="mt-6 font-display font-light text-3xl md:text-5xl max-w-3xl leading-[1.1] tracking-tight text-ink">
          Construa <span className="italic text-accent-fg">sem escrever</span>{' '}
          uma linha.
        </h2>

        <div className="mt-12 glass rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-6 py-3 border-b border-hairline">
            <span className="w-2 h-2 rounded-full bg-[oklch(78%_0.06_285)]" aria-hidden />
            <span className="w-2 h-2 rounded-full bg-[oklch(85%_0.04_60)]" aria-hidden />
            <span className="w-2 h-2 rounded-full bg-[oklch(85%_0.08_150)]" aria-hidden />
            <span className="ml-3 font-mono text-xs text-ink-soft tracking-wide">
              auditoria-de-vies.agent
            </span>
          </div>

          <div className="p-6 md:p-10 space-y-7 font-light">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-accent-fg">
                $ tarefa
              </div>
              <p className="mt-2 text-ink text-lg leading-relaxed">
                Avaliar risco de viés no modelo de triagem de benefícios.
              </p>
            </div>

            <div className="h-px bg-hairline" />

            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-accent-fg">
                → diagnóstico
              </div>
              <p className="mt-2 text-ink text-lg leading-relaxed">
                Detectada{' '}
                <span className="italic font-display text-accent-fg">
                  sub-representação
                </span>{' '}
                de população rural.
              </p>
            </div>

            <div className="h-px bg-hairline" />

            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-accent-fg">
                → recomendação
              </div>
              <p className="mt-2 text-ink text-lg leading-relaxed">
                Rebalanceamento estratificado e auditoria de sensibilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
