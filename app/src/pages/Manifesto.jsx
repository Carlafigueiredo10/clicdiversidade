export default function Manifesto() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Institucional · Manifesto
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          Por quem,
          <br />
          <span className="italic text-accent-fg">e para quem?</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Muito se fala em uso de inteligência artificial. Mas muito pouco se
          fala no essencial: por quem ela foi feita — e para quem ela trabalha.
        </p>

        <div className="mt-16 space-y-6 text-ink-soft text-lg leading-relaxed">
          <p>
            A inteligência artificial reúne todo o conhecimento do mundo
            produzido até uma certa data. E eu me pergunto: que conhecimento é
            esse? Produzido de quem, para quem?
          </p>
          <p>
            Uma tecnologia que reproduz o mundo como ele é não te angustia? O
            mundo ainda não é justo, nem diverso, nem plural, nem inclusivo.
          </p>
          <p>
            A ideia do CLIC Diversidade parte dessa realidade. Precisamos de
            técnicos que dominam a tecnologia — mas precisamos, também, de
            pessoas de outras áreas tensionando o processo e trazendo
            criticidade a ele.
          </p>
          <p>
            Essa tecnologia se impõe. Se não pelo Estado, ao Estado. Mas as
            perguntas certas vêm sendo feitas?
          </p>
          <p>
            Este projeto — e a oficina Humanos no Comando — reconhece essa
            realidade e parte de uma premissa:
          </p>

          <blockquote className="py-8">
            <p className="font-display font-semibold text-2xl md:text-4xl text-ink text-center leading-tight">
              Diversidade não é cliente nem produto.{' '}
              <span className="italic text-accent-fg">
                Diversidade é arquitetura.
              </span>
            </p>
          </blockquote>

          <p>
            E essa arquitetura se sustenta em ampliar as competências das
            pessoas para esse novo mundo. Este ecossistema acredita nisso.
          </p>
        </div>

        <div className="mt-14 pt-8 border-t border-line text-center">
          <p className="font-display font-semibold text-lg text-ink">
            Carla Cristine Soares
          </p>
          <p className="mt-1 text-sm text-muted">
            Idealizadora do CLIC Diversidade
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/jornada/"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink-soft hover:bg-card transition"
          >
            ← Voltar à jornada
          </a>
        </div>
      </div>
    </main>
  )
}
