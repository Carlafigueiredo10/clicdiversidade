// Ferramentas usadas durante a oficina — instrumento de sala, nao etapa da
// sequencia. Por isso ficam fora do array BLOCOS: o BlocoCard estampa
// "BLOCO NN" e leria como mais um passo do roteiro.
// A lista cresce: para incluir outra ferramenta, acrescente um objeto.
// Ferramenta sem `url` nao renderiza.
const FERRAMENTAS = [
  {
    nome: 'VivaVoz',
    chamada: 'Participação ao vivo, sem cadastro',
    descricao:
      'Você projeta um QR code, a sala responde pelo celular e os resultados aparecem na hora. Nas perguntas abertas, a IA agrupa as respostas em temas — e mostra o rastro de como chegou lá, para a sala poder discordar do que a máquina concluiu.',
    selos: ['Gratuito', 'Open source', 'Sem cadastro para participar'],
    cta: 'Abrir o VivaVoz',
    url: 'https://vivavoz.app.br/',
  },
]

export default function FerramentasSala() {
  const ferramentas = FERRAMENTAS.filter((f) => f.url)
  if (ferramentas.length === 0) return null

  return (
    <section className="mt-20 pt-12 border-t border-line">
      <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
        A ferramenta de sala
      </p>
      <h2 className="mt-4 font-display font-semibold text-2xl md:text-3xl text-ink text-center leading-tight">
        Para a sala responder junto
      </h2>

      <div className="mt-10 grid gap-4 max-w-3xl mx-auto">
        {ferramentas.map((f) => (
          <a
            key={f.nome}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-line rounded-2xl p-6 md:p-8 hover:border-accent/40 transition"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display font-semibold text-xl text-ink leading-tight">
                {f.nome}
              </h3>
              <span className="text-sm text-ink-soft">{f.chamada}</span>
            </div>

            <p className="mt-4 text-sm md:text-base text-ink-soft leading-relaxed">
              {f.descricao}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {f.selos.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-accent/15 text-accent-fg border border-accent/30 px-3 py-1 text-xs"
                >
                  {s}
                </span>
              ))}
            </div>

            <p className="mt-6 pt-4 border-t border-line text-sm font-medium text-accent-fg">
              {f.cta} →
            </p>
          </a>
        ))}
      </div>

      <p className="mt-5 text-center text-xs text-muted">
        Ferramenta externa. Abre fora do CLIC.
      </p>
    </section>
  )
}
