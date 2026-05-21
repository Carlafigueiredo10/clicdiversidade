const EMAIL = 'carlacristinesoares@gmail.com'
const PARCERIA_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent(
  'Parceria — CLIC Diversidade',
)}`

export default function Equipe() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Institucional · Equipe
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          Quem está por
          <br />
          <span className="italic text-accent-fg">trás do CLIC</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          O CLIC Diversidade é, hoje, um projeto conduzido por uma pessoa — com
          a ajuda de muita gente boa pelo caminho. Sem time grande, sem
          patrocínio: só a vontade de fazer o letramento em IA chegar a quem
          costuma ficar de fora dessa conversa.
        </p>

        {/* Perfil */}
        <article className="mt-14 bg-card border border-line rounded-2xl p-8 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div
              aria-hidden
              className="w-20 h-20 shrink-0 rounded-2xl bg-accent/10 border border-line flex items-center justify-center font-display font-semibold text-3xl text-accent-fg"
            >
              C
            </div>
            <div>
              <h2 className="font-display font-semibold text-2xl text-ink leading-tight">
                Carla Cristine Soares
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                Idealizadora e facilitadora
              </p>
              <p className="mt-4 text-sm md:text-base text-ink-soft leading-relaxed">
                Criou o CLIC Diversidade para que o letramento em inteligência
                artificial chegue a quem normalmente fica de fora: servidoras e
                servidores públicos, mulheres, pessoas que sentem que tecnologia
                "não é pra elas". A proposta é simples — ninguém precisa virar
                especialista, mas todo mundo merece entender o suficiente para
                não ser passado para trás.
              </p>
              <p className="mt-3 text-sm md:text-base text-ink-soft leading-relaxed">
                Antes de virar projeto, o CLIC foi oficina, conversa de corredor
                e muita pergunta sem resposta fácil. Hoje reúne trilhas,
                glossário, base teórica e a Lélia — a agente que dá a mão para
                quem está começando. Tudo construído com uma ideia fixa: humanos
                no comando.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink-soft hover:bg-page hover:text-ink transition"
                >
                  <span aria-hidden>✉</span> E-mail
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* CTA parcerias */}
        <div className="mt-12 bg-card border border-line rounded-2xl p-8 text-center">
          <h2 className="font-display font-semibold text-xl text-ink">
            Quer somar com o CLIC?
          </h2>
          <p className="mt-2 max-w-xl mx-auto text-sm text-ink-soft leading-relaxed">
            O projeto está aberto a parcerias — escolas, órgãos públicos,
            coletivos e quem mais acreditar que letramento em IA é direito, não
            privilégio.
          </p>
          <a
            href={PARCERIA_HREF}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink text-page px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Propor uma parceria →
          </a>
        </div>

        <div className="mt-16 flex justify-center">
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
