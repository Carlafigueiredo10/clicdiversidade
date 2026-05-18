import SlideShell from '../SlideShell'

export default function ContextoFormato() {
  return (
    <SlideShell
      eyebrow="Pilares 3 e 4"
      titulo="Contexto e Formato: o segredo da precisão"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-page border border-line rounded-2xl p-6">
          <h3 className="font-display font-semibold text-xl text-ink">
            Contexto — o antídoto da alucinação
          </h3>
          <p className="mt-4 text-sm text-ink-soft leading-relaxed">
            A IA não sabe o que acontece na sua repartição.
          </p>
          <p className="mt-5 text-sm text-ink font-medium">O que incluir:</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>• Objetivo do documento</li>
            <li>• Público-alvo (cidadão vs. técnico)</li>
            <li>• Legislação específica (Lei nº X)</li>
            <li>• Dados do processo SEI</li>
          </ul>
        </div>

        <div className="bg-page border border-line rounded-2xl p-6">
          <h3 className="font-display font-semibold text-xl text-ink">
            Formato — pronto para usar
          </h3>
          <p className="mt-4 text-sm text-ink-soft leading-relaxed">
            Não aceite “paredes de texto”.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-ink">
            <li className="flex items-start gap-3">
              <span aria-hidden>📋</span>
              <span><strong>Tabela</strong> — comparações</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden>•</span>
              <span><strong>Lista</strong> — bullets</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden>📄</span>
              <span><strong>Minuta</strong> — ofício/memo</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden>✉️</span>
              <span><strong>E-mail</strong> — curto</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideShell>
  )
}
