const pillars = [
  {
    n: '01',
    title: 'Letramento técnico',
    text: 'Letramento em IA, dados e linguagem das máquinas.',
  },
  {
    n: '02',
    title: 'Prototipagem',
    text: 'Construção colaborativa com prototipagem no-code.',
  },
  {
    n: '03',
    title: 'Casos reais',
    text: 'Estudos de caso reais em políticas e serviços.',
  },
  {
    n: '04',
    title: 'Inclusão e viés',
    text: 'Inclusão, acessibilidade e mitigação de viés.',
  },
  {
    n: '05',
    title: 'Entregáveis próprios',
    text: 'Cada participante sai com soluções próprias.',
  },
]

export default function Pillars() {
  return (
    <section id="percurso" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.2em] uppercase text-accent-fg font-medium">
          O percurso
        </p>
        <h2 className="mt-6 font-display font-light text-3xl md:text-5xl max-w-3xl leading-[1.1] tracking-tight text-ink">
          Cinco camadas que articulam teoria, prática e{' '}
          <span className="italic text-accent-fg">responsabilidade.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-ink-soft font-light leading-relaxed">
          Um percurso formativo que articula teoria crítica, prática técnica e
          responsabilidade institucional. Pensado para quem decide e implementa
          tecnologia no setor público.
        </p>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p) => (
            <li
              key={p.n}
              className="glass rounded-2xl p-6 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className="font-mono text-xs tracking-wider text-accent-fg">
                {p.n}
              </div>
              <h3 className="mt-8 font-display text-lg text-ink leading-snug">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft font-light leading-relaxed">
                {p.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
