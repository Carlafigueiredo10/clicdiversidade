const groups = [
  'Servidoras e servidores públicos',
  'Lideranças e gestão estratégica',
  'Laboratórios de inovação pública',
  'Pessoas sem formação técnica',
]

export default function Audience() {
  return (
    <section id="publico" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.2em] uppercase text-accent-fg font-medium">
          Para quem é
        </p>
        <h2 className="mt-6 font-display font-light text-3xl md:text-5xl max-w-3xl leading-[1.1] tracking-tight text-ink">
          Coexistência de perfis técnicos e{' '}
          <span className="italic text-accent-fg">não-técnicos.</span>
        </h2>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {groups.map((g) => (
            <li
              key={g}
              className="glass rounded-xl px-6 py-5 text-ink font-light"
            >
              {g}
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-ink-soft font-light leading-relaxed">
          A trilha foi desenhada para coexistirem perfis técnicos e não-técnicos.
          Não é preciso saber programar — é preciso querer construir tecnologia
          mais consciente.
        </p>
      </div>
    </section>
  )
}
