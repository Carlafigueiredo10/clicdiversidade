import SlideShell from '../SlideShell'

const PILARES = [
  {
    letra: 'P',
    nome: 'Pessoa',
    pergunta: 'Quem é a IA? Define o tom.',
    exemplo: '“Atue como Especialista em Direito Administrativo.”',
  },
  {
    letra: 'T',
    nome: 'Tarefa',
    pergunta: 'O que fazer? Verbo de ação.',
    exemplo: '“Resuma”, “Redija”, “Analise”.',
  },
  {
    letra: 'C',
    nome: 'Contexto',
    pergunta: 'O cenário.',
    exemplo: '“Com base na Lei 14.133”, “Para público leigo”.',
  },
  {
    letra: 'F',
    nome: 'Formato',
    pergunta: 'A entrega.',
    exemplo: '“Tabela comparativa”, “Lista”, “Texto oficial”.',
  },
]

export default function MetodoPTCF() {
  return (
    <SlideShell
      eyebrow="Estrutura universal"
      titulo="O Método PTCF"
    >
      <p className="text-ink-soft mb-8">
        Quatro pilares que sustentam qualquer prompt eficaz.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {PILARES.map((p) => (
          <div
            key={p.letra}
            className="bg-page border border-line rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-display font-semibold text-4xl text-accent-fg">
                {p.letra}
              </span>
              <span className="font-display font-semibold text-lg text-ink">
                {p.nome}
              </span>
            </div>
            <p className="mt-4 text-sm text-ink leading-relaxed">
              {p.pergunta}
            </p>
            <p className="mt-4 text-xs text-ink-soft italic leading-relaxed">
              Ex: {p.exemplo}
            </p>
          </div>
        ))}
      </div>
    </SlideShell>
  )
}
