export default function CTA() {
  return (
    <section id="cta" className="px-6 py-24 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display font-light text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink">
          Comece a jornada de letramento que reconfigura a relação entre{' '}
          <span className="italic text-accent-fg">
            IA, instituição e cidadania
          </span>{' '}
          — uma decisão consciente por vez.
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contato"
            className="rounded-full bg-ink text-background px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Entrar em contato
          </a>
          <a
            href="#percurso"
            className="rounded-full hairline px-8 py-3 text-sm text-ink-soft hover:bg-white/50 transition-colors"
          >
            Rever o percurso
          </a>
        </div>
      </div>
    </section>
  )
}
