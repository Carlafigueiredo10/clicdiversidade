const principles = [
  'Toda decisão automatizada deve poder ser explicada.',
  'Diferentes corpos, vozes e contextos no centro do projeto.',
  'Sofisticada, não acessória. Padrão, não exceção.',
  'Princípios verificáveis em cada etapa do ciclo.',
  'Capacidade real de criar, auditar e ajustar.',
  'Tecnologia se sustenta em discernimento humano.',
]

export default function Principles() {
  return (
    <section id="principios" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.2em] uppercase text-accent-fg font-medium">
          Princípios
        </p>
        <h2 className="mt-6 font-display font-light text-3xl md:text-5xl max-w-3xl leading-[1.1] tracking-tight text-ink">
          O que sustenta cada{' '}
          <span className="italic text-accent-fg">decisão técnica.</span>
        </h2>

        <ul className="mt-12 divide-y divide-[var(--color-hairline)]">
          {principles.map((p, i) => (
            <li key={i} className="flex items-start gap-6 py-6">
              <span className="font-mono text-sm text-accent-fg tabular-nums shrink-0 mt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-display font-light text-xl md:text-2xl text-ink leading-relaxed">
                {p}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
