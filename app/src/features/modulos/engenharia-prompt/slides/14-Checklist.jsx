import SlideShell from '../SlideShell'

const ITENS = [
  {
    titulo: 'Persona',
    desc: 'Defini quem a IA deve ser?',
  },
  {
    titulo: 'Tarefa',
    desc: 'Usei um verbo de ação claro?',
  },
  {
    titulo: 'Contexto',
    desc: 'Dei informações suficientes para evitar alucinação?',
  },
  {
    titulo: 'Formato',
    desc: 'Especifiquei a saída (tabela, texto, lista)?',
  },
  {
    titulo: 'Segurança',
    desc: 'Removi dados pessoais (CPF) e sensíveis?',
  },
]

export default function Checklist() {
  return (
    <SlideShell
      eyebrow="Antes de enviar"
      titulo="Checklist de decolagem"
    >
      <ul className="space-y-3 max-w-2xl mx-auto">
        {ITENS.map((item) => (
          <li
            key={item.titulo}
            className="bg-page border border-line rounded-2xl p-4 flex items-start gap-4"
          >
            <span
              className="mt-0.5 h-6 w-6 rounded-md bg-success/30 text-success-fg flex items-center justify-center text-sm font-bold shrink-0"
              aria-hidden
            >
              ✓
            </span>
            <div>
              <p className="font-display font-semibold text-ink">{item.titulo}</p>
              <p className="text-sm text-ink-soft mt-0.5">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </SlideShell>
  )
}
