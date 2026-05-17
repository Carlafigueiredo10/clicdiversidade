export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-24 px-6"
    >
      <div className="mx-auto max-w-5xl w-full">
        <p className="text-xs tracking-[0.2em] uppercase text-accent-fg font-medium">
          Iniciativa de letramento digital · IA pública
        </p>

        <h1 className="mt-8 font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.02] text-ink">
          IA com diversidade,
          <br />
          <span className="italic text-accent-fg">inclusão</span> e
          <br />
          responsabilidade.
        </h1>

        <p className="mt-10 max-w-2xl text-base sm:text-lg md:text-xl text-ink-soft font-light leading-relaxed">
          Uma iniciativa de letramento digital aplicada ao setor público para a
          construção de soluções mais inclusivas, transparentes e conscientes —
          a partir de quem decide, projeta e usa.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#cta"
            className="rounded-full bg-ink text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Começar a jornada
          </a>
          <a
            href="#percurso"
            className="rounded-full hairline px-6 py-3 text-sm text-ink-soft hover:bg-white/50 transition-colors"
          >
            Conhecer o percurso
          </a>
        </div>
      </div>
    </section>
  )
}
