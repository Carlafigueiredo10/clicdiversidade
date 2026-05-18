import SlideShell from '../SlideShell'

const PASSOS = [
  { n: 1, titulo: 'Defina o objetivo', icone: '🎯' },
  { n: 2, titulo: 'Estruture o prompt base', icone: '📄' },
  { n: 3, titulo: 'Teste e refine', icone: '⚙️' },
  { n: 4, titulo: 'Salve na biblioteca', icone: '📥' },
]

export default function AssistentePersonalizado() {
  return (
    <SlideShell
      eyebrow="Próximo nível"
      titulo="Criação do assistente personalizado"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PASSOS.map((p) => (
          <div
            key={p.n}
            className="bg-page border border-line rounded-2xl p-5 text-center"
          >
            <div className="mx-auto h-10 w-10 rounded-full bg-accent/15 text-accent-fg flex items-center justify-center font-semibold">
              {p.n}
            </div>
            <div className="mt-4 text-3xl" aria-hidden>
              {p.icone}
            </div>
            <p className="mt-3 font-display font-semibold text-ink text-sm">
              {p.titulo}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-ink-soft text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
        <strong className="text-ink">Conceito:</strong> não digite do zero. Crie
        um ‘Prompt Mestre’ com Persona e Regras fixas, deixando espaços
        (placeholders) apenas para os dados novos.
      </p>
    </SlideShell>
  )
}
