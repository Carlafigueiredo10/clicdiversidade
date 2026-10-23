import AvaliacaoForm from '../features/avaliacao/AvaliacaoForm'
import { tr } from '../i18n'

const T = tr({
  pt: {
    eyebrow: 'Oficina Humanos no Comando',
    titulo: 'Como foi a oficina?',
    intro: 'Sua avaliação molda as próximas oficinas. Leva um minuto — responda só o que quiser.',
  },
  es: {
    eyebrow: 'Taller Humanos al Mando',
    titulo: '¿Cómo te fue en el taller?',
    intro: 'Tu evaluación da forma a los próximos talleres. Lleva un minuto — responde solo lo que quieras.',
  },
})

// Avaliacao da oficina "Humanos no Comando" — pagina propria, rota /avaliacao.
// Anonima; dados vao pra collection 'avaliacoes' no Firestore.
export default function Avaliacao() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          {T.eyebrow}
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-5xl text-ink text-center leading-[1.05]">
          {T.titulo}
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          {T.intro}
        </p>

        <div className="mt-12">
          <AvaliacaoForm />
        </div>
      </div>
    </main>
  )
}
