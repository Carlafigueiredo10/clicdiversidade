import { tr } from '../i18n'

const T = tr({
  pt: {
    eyebrow: 'Institucional · Manifesto',
    titulo: ['Por quem,', 'e para quem?'],
    intro: 'Muito se fala em uso de inteligência artificial. Mas muito pouco se fala no essencial: por quem ela foi feita — e para quem ela trabalha.',
    paragrafos: [
      'A inteligência artificial reúne todo o conhecimento do mundo produzido até uma certa data. E eu me pergunto: que conhecimento é esse? Produzido de quem, para quem?',
      'Uma tecnologia que reproduz o mundo como ele é não te angustia? O mundo ainda não é justo, nem diverso, nem plural, nem inclusivo.',
      'A ideia do CLIC Diversidade parte dessa realidade. Precisamos de técnicos que dominam a tecnologia — mas precisamos, também, de pessoas de outras áreas tensionando o processo e trazendo criticidade a ele.',
      'Essa tecnologia se impõe. Se não pelo Estado, ao Estado. Mas as perguntas certas vêm sendo feitas?',
      'Este projeto — e a oficina Humanos no Comando — reconhece essa realidade e parte de uma premissa:',
    ],
    citacao: ['Diversidade não é cliente nem produto.', 'Diversidade é arquitetura.'],
    fecho: 'E essa arquitetura se sustenta em ampliar as competências das pessoas para esse novo mundo. Este ecossistema acredita nisso.',
    cargo: 'Idealizadora do CLIC Diversidade',
    voltar: '← Voltar à jornada',
  },
  es: {
    eyebrow: 'Institucional · Manifiesto',
    titulo: ['¿Por quién,', 'y para quién?'],
    intro: 'Se habla mucho del uso de la inteligencia artificial. Pero se habla muy poco de lo esencial: por quién fue hecha — y para quién trabaja.',
    paragrafos: [
      'La inteligencia artificial reúne todo el conocimiento del mundo producido hasta cierta fecha. Y yo me pregunto: ¿qué conocimiento es ese? ¿Producido por quién, para quién?',
      '¿No te angustia una tecnología que reproduce el mundo tal como es? El mundo todavía no es justo, ni diverso, ni plural, ni inclusivo.',
      'La idea de CLIC Diversidade parte de esa realidad. Necesitamos técnicos que dominen la tecnología — pero necesitamos, también, personas de otras áreas que tensionen el proceso y le aporten mirada crítica.',
      'Esta tecnología se impone. Si no la impulsa el Estado, se le impone al Estado. Pero ¿se están haciendo las preguntas correctas?',
      'Este proyecto — y el taller Humanos al Mando — reconoce esa realidad y parte de una premisa:',
    ],
    citacao: ['La diversidad no es cliente ni producto.', 'La diversidad es arquitectura.'],
    fecho: 'Y esa arquitectura se sostiene en ampliar las competencias de las personas para este nuevo mundo. Este ecosistema cree en eso.',
    cargo: 'Creadora de CLIC Diversidade',
    voltar: '← Volver al recorrido',
  },
})

export default function Manifesto() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          {T.eyebrow}
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          {T.titulo[0]}
          <br />
          <span className="italic text-accent-fg">{T.titulo[1]}</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          {T.intro}
        </p>

        <div className="mt-16 space-y-6 text-ink-soft text-lg leading-relaxed">
          {T.paragrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <blockquote className="py-8">
            <p className="font-display font-semibold text-2xl md:text-4xl text-ink text-center leading-tight">
              {T.citacao[0]}{' '}
              <span className="italic text-accent-fg">{T.citacao[1]}</span>
            </p>
          </blockquote>

          <p>
            {T.fecho}
          </p>
        </div>

        <div className="mt-14 pt-8 border-t border-line text-center">
          <p className="font-display font-semibold text-lg text-ink">
            Carla Cristine Soares
          </p>
          <p className="mt-1 text-sm text-muted">
            {T.cargo}
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/jornada/"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink-soft hover:bg-card transition"
          >
            {T.voltar}
          </a>
        </div>
      </div>
    </main>
  )
}
