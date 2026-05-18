import SlideShell from '../SlideShell'

export default function OQueE() {
  return (
    <SlideShell
      eyebrow="Conceito"
      titulo="O que é Engenharia de Prompt? (A Arte de Delegar)"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-page border border-accent/30 rounded-2xl p-6">
            <p className="font-display font-semibold text-xl text-ink leading-snug">
              Prompt é a instrução. Engenharia de Prompt é a estratégia para
              obter o melhor resultado.
            </p>
            <p className="mt-3 text-ink-soft text-sm">
              A qualidade da resposta depende 100% da qualidade da sua pergunta.
            </p>
          </div>

          <div className="bg-page border border-line rounded-2xl p-6">
            <div className="flex items-center gap-3 text-2xl mb-4" aria-hidden>
              <span>🗣️</span>
              <span className="text-ink-soft">→</span>
              <span>🧠</span>
              <span className="text-ink-soft">→</span>
              <span>📄</span>
            </div>
            <p className="text-ink-soft text-sm leading-relaxed">
              <strong className="text-ink">Analogia:</strong> a IA é uma
              estagiária competente, culta e rápida, mas muito literal. Ela não
              tem bola de cristal.
            </p>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-page border border-line rounded-2xl p-5">
            <p className="text-xs uppercase tracking-wide text-accent-fg font-semibold">
              Nota técnica
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              A IA lê <strong className="text-ink">tokens</strong> (fragmentos),
              não palavras inteiras.
            </p>
          </div>
          <div className="bg-page border border-line rounded-2xl p-5">
            <p className="text-xs uppercase tracking-wide text-accent-fg font-semibold">
              Estatística
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Prompts eficazes ≈ <strong className="text-ink">21 palavras</strong>.
              Prompts ruins &lt; 9 palavras.
            </p>
          </div>
        </aside>
      </div>
    </SlideShell>
  )
}
