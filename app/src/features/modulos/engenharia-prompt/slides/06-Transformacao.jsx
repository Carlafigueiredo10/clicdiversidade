import SlideShell from '../SlideShell'

export default function Transformacao() {
  return (
    <SlideShell
      eyebrow="Antes e depois"
      titulo="A transformação: do genérico ao especialista"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-page border border-line rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <span className="text-xl" aria-hidden>❌</span>
            <h3 className="font-display font-semibold text-lg text-ink">
              Prompt preguiçoso
            </h3>
          </div>
          <div className="mt-5 bg-card border border-line rounded-xl p-4">
            <p className="text-sm text-ink-soft italic">
              “Escreva sobre a nova lei de licitações.”
            </p>
          </div>
          <p className="mt-5 text-xs text-muted leading-relaxed">
            Resultado: texto genérico, sem foco, possivelmente impreciso.
          </p>
        </div>

        <div className="bg-page border-2 border-accent/40 rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <span className="text-xl" aria-hidden>✅</span>
            <h3 className="font-display font-semibold text-lg text-ink">
              Prompt PTCF
            </h3>
          </div>
          <div className="mt-5 space-y-2 text-sm">
            <p>
              <span className="font-semibold text-accent-fg">[Persona]</span>{' '}
              <span className="text-ink">Aja como especialista em compras.</span>
            </p>
            <p>
              <span className="font-semibold text-accent-fg">[Tarefa]</span>{' '}
              <span className="text-ink">
                Crie uma tabela comparativa entre Lei 8.666 e Lei 14.133.
              </span>
            </p>
            <p>
              <span className="font-semibold text-accent-fg">[Contexto]</span>{' '}
              <span className="text-ink">Foque em obras de engenharia.</span>
            </p>
            <p>
              <span className="font-semibold text-accent-fg">[Formato]</span>{' '}
              <span className="text-ink">Tabela com 3 colunas.</span>
            </p>
          </div>

          <div className="mt-6 bg-card border border-line rounded-xl overflow-hidden text-xs">
            <table className="w-full">
              <thead className="bg-page text-ink">
                <tr>
                  <th className="text-left px-3 py-2 border-b border-line">Item</th>
                  <th className="text-left px-3 py-2 border-b border-line">Lei 8.666</th>
                  <th className="text-left px-3 py-2 border-b border-line">Lei 14.133</th>
                </tr>
              </thead>
              <tbody className="text-ink-soft">
                <tr>
                  <td className="px-3 py-2 border-b border-line">Modalidade</td>
                  <td className="px-3 py-2 border-b border-line">5 tipos</td>
                  <td className="px-3 py-2 border-b border-line">3 + diálogo</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Critério</td>
                  <td className="px-3 py-2">Menor preço</td>
                  <td className="px-3 py-2">Maior desconto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}
