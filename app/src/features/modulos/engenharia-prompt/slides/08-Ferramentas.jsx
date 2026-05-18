import SlideShell from '../SlideShell'

export default function Ferramentas() {
  return (
    <SlideShell
      eyebrow="Escolha"
      titulo="Escolhendo a ferramenta certa"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-page border border-line rounded-2xl p-6">
          <h3 className="font-display font-semibold text-xl text-ink">
            Microsoft Copilot
          </h3>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-accent-fg">Integração</dt>
              <dd className="text-ink-soft">Word, Excel, Teams.</dd>
            </div>
            <div>
              <dt className="font-semibold text-accent-fg">Uso ideal</dt>
              <dd className="text-ink-soft">
                Resumir documentos, analisar planilhas internas, criar slides.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-accent-fg">Segurança</dt>
              <dd className="text-ink-soft">
                Dados corporativos protegidos (M365).
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-page border border-line rounded-2xl p-6">
          <h3 className="font-display font-semibold text-xl text-ink">
            Google Gemini
          </h3>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-accent-fg">Foco</dt>
              <dd className="text-ink-soft">Pesquisa profunda e raciocínio.</dd>
            </div>
            <div>
              <dt className="font-semibold text-accent-fg">Uso ideal</dt>
              <dd className="text-ink-soft">
                ‘Deep Research’, comparação de fontes, brainstorming criativo.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-6 bg-page border-2 border-amber-300/60 rounded-2xl p-5 flex items-start gap-3">
        <span className="text-xl" aria-hidden>⚠️</span>
        <p className="text-sm text-ink leading-relaxed">
          <strong>Janela de contexto:</strong> a IA tem memória curta. Inicie um
          novo chat para novos assuntos.
        </p>
      </div>
    </SlideShell>
  )
}
