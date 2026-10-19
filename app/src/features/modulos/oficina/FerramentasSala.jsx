// Ferramentas usadas durante a oficina — instrumento de sala, nao etapa da
// sequencia. Por isso ficam fora do array BLOCOS: o BlocoCard estampa
// "BLOCO NN" e leria como mais um passo do roteiro.
// A lista cresce: para incluir outra ferramenta, acrescente um objeto.
// Ferramenta sem `url` nao renderiza.
import { tr } from '../../../i18n'

const T = tr({
  pt: {
    eyebrow: 'A ferramenta de sala',
    titulo: 'Para a sala responder junto',
    externa: 'Ferramenta externa. Abre fora do CLIC.',
  },
  es: {
    eyebrow: 'La herramienta de sala',
    titulo: 'Para que la sala responda en conjunto',
    externa: 'Herramienta externa. Se abre fuera de CLIC.',
  },
})

const FERRAMENTAS = [
  {
    nome: 'VivaVoz',
    chamada: tr({ pt: 'Participação ao vivo, sem cadastro', es: 'Participación en vivo, sin registro' }),
    descricao: tr({
      pt: 'Você projeta um QR code, a sala responde pelo celular e os resultados aparecem na hora. Nas perguntas abertas, a IA agrupa as respostas em temas — e mostra o rastro de como chegou lá, para a sala poder discordar do que a máquina concluiu.',
      es: 'Proyectas un código QR, la sala responde desde el celular y los resultados aparecen al instante. En las preguntas abiertas, la IA agrupa las respuestas por temas — y muestra el rastro de cómo llegó ahí, para que la sala pueda discrepar de lo que concluyó la máquina.',
    }),
    selos: tr({
      pt: ['Gratuito', 'Open source', 'Sem cadastro para participar'],
      es: ['Gratuito', 'Código abierto', 'Sin registro para participar'],
    }),
    cta: tr({ pt: 'Abrir o VivaVoz', es: 'Abrir VivaVoz' }),
    url: 'https://vivavoz.app.br/',
  },
]

export default function FerramentasSala() {
  const ferramentas = FERRAMENTAS.filter((f) => f.url)
  if (ferramentas.length === 0) return null

  return (
    <section className="mt-20 pt-12 border-t border-line">
      <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
        {T.eyebrow}
      </p>
      <h2 className="mt-4 font-display font-semibold text-2xl md:text-3xl text-ink text-center leading-tight">
        {T.titulo}
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
        {T.externa}
      </p>
    </section>
  )
}
