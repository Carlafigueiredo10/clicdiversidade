const problems = [
  'Modelos treinados em dados parciais reproduzem desigualdades históricas em escala.',
  'Decisões automatizadas sem rastreabilidade corroem a confiança pública e a possibilidade de revisão.',
  'Interfaces e infraestruturas projetadas para poucos deixam públicos inteiros fora do serviço.',
  'Equipes homogêneas constroem soluções homogêneas — e a tecnologia herda esse ponto cego.',
]

export default function Problems() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.2em] uppercase text-accent-fg font-medium">
          O problema
        </p>
        <h2 className="mt-6 font-display font-light text-3xl md:text-5xl max-w-3xl leading-[1.1] tracking-tight text-ink">
          A tecnologia que organiza políticas públicas{' '}
          <span className="italic text-accent-fg">não é neutra.</span>
        </h2>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <li key={i} className="glass rounded-2xl p-7">
              <span className="font-mono text-xs tracking-wider text-accent-fg">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 text-ink-soft font-light leading-relaxed">
                {p}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
