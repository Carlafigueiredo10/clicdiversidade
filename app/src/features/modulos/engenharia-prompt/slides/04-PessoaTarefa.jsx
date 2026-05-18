import SlideShell from '../SlideShell'

export default function PessoaTarefa() {
  return (
    <SlideShell
      eyebrow="Pilares 1 e 2"
      titulo="Definindo o ‘Quem’ e o ‘O Que’"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-page border border-line rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden>🎩</span>
            <h3 className="font-display font-semibold text-xl text-ink">
              Pessoa — o chapéu que a IA usa
            </h3>
          </div>
          <div className="mt-5 space-y-3 text-sm text-ink-soft leading-relaxed">
            <p>
              <strong className="text-ink">Sem persona:</strong> enciclopédia
              genérica.
            </p>
            <p>
              <strong className="text-ink">Com persona:</strong> postura de
              especialista.
            </p>
          </div>
          <ul className="mt-5 space-y-2 text-sm text-ink">
            <li>• Atue como Assessora de Comunicação Institucional</li>
            <li>• Atue como Gestora de Projetos Ágeis</li>
            <li>• Atue como Auditora Sênior</li>
          </ul>
        </div>

        <div className="bg-page border border-line rounded-2xl p-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden>⚙️</span>
            <h3 className="font-display font-semibold text-xl text-ink">
              Tarefa — o motor da ação
            </h3>
          </div>
          <p className="mt-5 text-sm text-ink-soft leading-relaxed">
            Seja diretiva. Use verbos de comando:
          </p>
          <ul className="mt-4 space-y-3 text-sm text-ink">
            <li>— Redija um despacho…</li>
            <li>— Extraia as datas de vencimento e início…</li>
            <li>— Simplifique a linguagem deste decreto…</li>
          </ul>
        </div>
      </div>
    </SlideShell>
  )
}
