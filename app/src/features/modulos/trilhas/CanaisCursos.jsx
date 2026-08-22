// Canais externos que publicam cursos gratuitos com regularidade.
// A lista cresce: para incluir outro canal, acrescente um objeto aqui.
// `entrega` diz o que o canal faz com a atencao de quem segue — e o que
// diferencia um do outro para quem esta decidindo qual acompanhar.
const CANAIS = [
  {
    nome: 'Governatech',
    plataforma: 'Canal no WhatsApp',
    icon: '💬',
    entrega: 'Os cursos chegam no seu celular, junto com as outras mensagens.',
    url: 'https://www.whatsapp.com/channel/0029Vb6DD2AAu3aXBFT6So0R',
  },
  {
    nome: 'Governatech',
    plataforma: 'LinkedIn',
    icon: '💼',
    entrega: 'Posts públicos, sem entrar no seu telefone.',
    url: 'https://www.linkedin.com/company/governatech-brasil/',
  },
]

export default function CanaisCursos() {
  const canais = CANAIS.filter((c) => c.url)
  if (canais.length === 0) return null

  return (
    <section className="mt-20 pt-12 border-t border-line">
      <div className="mx-auto max-w-3xl bg-card border border-line rounded-3xl p-7 md:p-10">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
          A curadoria não para aqui
        </p>
        <h2 className="mt-3 font-display font-semibold text-2xl md:text-3xl text-ink leading-tight">
          As trilhas acima são uma foto
        </h2>
        <p className="mt-4 text-ink-soft text-sm md:text-base leading-relaxed max-w-xl">
          São os cursos que estavam de pé quando esta página foi montada. Curso
          sai do ar, link muda, coisa nova aparece. Estes canais publicam cursos
          gratuitos com regularidade — vale acompanhar enquanto você faz a sua
          trilha.
        </p>

        <div
          className={
            'mt-7 grid gap-3 ' + (canais.length > 1 ? 'sm:grid-cols-2' : 'max-w-sm')
          }
        >
          {canais.map((c) => (
            <a
              key={c.plataforma + c.nome}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-page border border-line rounded-2xl p-5 hover:border-accent/40 transition"
            >
              <div className="flex items-baseline gap-2.5">
                <span aria-hidden className="text-lg">
                  {c.icon}
                </span>
                <div>
                  <p className="font-semibold text-ink text-sm leading-tight">
                    {c.nome}
                  </p>
                  <p className="text-xs text-muted mt-0.5">{c.plataforma}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                {c.entrega}
              </p>
              <p className="mt-4 text-sm font-medium text-accent-fg">
                Acompanhar →
              </p>
            </a>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted">
          Canais externos. Abrem fora do CLIC.
        </p>
      </div>
    </section>
  )
}
