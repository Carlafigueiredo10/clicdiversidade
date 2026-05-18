import SlideShell from '../SlideShell'

const REGRAS = [
  {
    cor: 'red',
    label: 'PARE',
    sub: 'Dados sensíveis',
    texto:
      'Nunca insira CPF, RG, dados de saúde ou segredos de justiça. Anonimize: use [[NOME]].',
    classes: 'border-red-300 bg-red-50',
    dot: 'bg-red-500',
  },
  {
    cor: 'amber',
    label: 'ATENÇÃO',
    sub: 'Alucinações',
    texto:
      'A IA pode inventar fatos ou leis. Você é responsável pela assinatura. Sempre revise.',
    classes: 'border-amber-300 bg-amber-50',
    dot: 'bg-amber-500',
  },
  {
    cor: 'green',
    label: 'SIGA',
    sub: 'Produtividade',
    texto:
      'Use para estruturar, resumir, redigir minutas, revisar ortografia e traduzir.',
    classes: 'border-green-300 bg-green-50',
    dot: 'bg-green-500',
  },
]

export default function RegrasOuro() {
  return (
    <SlideShell
      eyebrow="Segurança e ética"
      titulo="Regras de ouro no serviço público"
    >
      <div className="space-y-4">
        {REGRAS.map((r) => (
          <div
            key={r.label}
            className={`border-2 rounded-2xl p-5 flex items-start gap-4 ${r.classes}`}
          >
            <div className={`mt-1 h-4 w-4 rounded-full shrink-0 ${r.dot}`} aria-hidden />
            <div>
              <p className="font-display font-semibold text-lg text-ink">
                {r.label}{' '}
                <span className="font-sans font-normal text-ink-soft text-sm">
                  · {r.sub}
                </span>
              </p>
              <p className="mt-2 text-sm text-ink leading-relaxed">{r.texto}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center font-display italic text-ink text-lg">
        A IA é sua copiloto, não a comandante.
      </p>
    </SlideShell>
  )
}
