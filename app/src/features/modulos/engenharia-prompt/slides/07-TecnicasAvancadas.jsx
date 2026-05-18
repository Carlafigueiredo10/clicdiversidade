import SlideShell from '../SlideShell'

export default function TecnicasAvancadas() {
  return (
    <SlideShell
      eyebrow="Nível avançado"
      titulo="Técnicas avançadas: elevando o nível"
    >
      <div className="space-y-6">
        <div className="bg-page border border-line rounded-2xl p-6 grid gap-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden>📑</span>
              <h3 className="font-display font-semibold text-xl text-ink">
                Few-Shot Prompting
              </h3>
            </div>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              A IA aprende copiando padrões. Mostre o que você quer através de
              um exemplo.
            </p>
          </div>
          <div className="bg-card border border-line rounded-xl p-4 text-sm text-ink leading-relaxed">
            “Analise este texto. <strong>Aqui está um exemplo</strong> de como
            eu quero o resumo: [Exemplo anterior]. Agora faça o mesmo com o
            novo texto.”
          </div>
        </div>

        <div className="bg-page border border-line rounded-2xl p-6 grid gap-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden>🧩</span>
              <h3 className="font-display font-semibold text-xl text-ink">
                Chain of Thought
              </h3>
            </div>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              Para tarefas complexas, peça para a IA ‘pensar alto’ antes de
              responder.
            </p>
          </div>
          <div className="bg-card border border-line rounded-xl p-4 text-sm text-ink leading-relaxed">
            “Antes de responder, <strong>explique o passo a passo</strong> do
            seu raciocínio lógico para chegar a essa conclusão.”
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
