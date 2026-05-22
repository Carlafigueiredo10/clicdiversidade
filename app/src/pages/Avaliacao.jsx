import AvaliacaoForm from '../features/avaliacao/AvaliacaoForm'

// Avaliacao da oficina "Humanos no Comando" — pagina propria, rota /avaliacao.
// Anonima; dados vao pra collection 'avaliacoes' no Firestore.
export default function Avaliacao() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Oficina Humanos no Comando
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-5xl text-ink text-center leading-[1.05]">
          Como foi a oficina?
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Sua avaliação molda as próximas oficinas. Leva um minuto — responda só
          o que quiser.
        </p>

        <div className="mt-12">
          <AvaliacaoForm />
        </div>
      </div>
    </main>
  )
}
