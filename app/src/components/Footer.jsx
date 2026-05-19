import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    title: 'Programa',
    items: [
      { label: 'Trilhas', to: '/modulos/trilhas' },
      { label: 'Materiais adicionais', soon: true },
      { label: 'Certificação', external: '/jornada/certificado.html' },
    ],
  },
  {
    title: 'Conteúdo',
    items: [
      { label: 'Glossário', to: '/glossario' },
      { label: 'Base Teórica', to: '/base-teorica' },
      { label: 'Conheça Lélia', external: '/lelia/' },
      { label: 'Governança de IA', to: '/modulos/governanca' },
    ],
  },
  {
    title: 'Institucional',
    items: [
      { label: 'Manifesto', soon: true },
      { label: 'Equipe', soon: true },
      { label: 'Parcerias', soon: true },
      { label: 'Contato', soon: true },
    ],
  },
]

function Item({ item }) {
  if (item.soon) {
    return (
      <span className="text-sm text-muted/70 cursor-not-allowed inline-flex items-center gap-2">
        {item.label}
        <span className="text-[9px] uppercase tracking-widest text-muted/60 border border-line rounded-full px-1.5 py-0.5">
          Em breve
        </span>
      </span>
    )
  }
  if (item.external) {
    return (
      <a
        href={item.external}
        className="text-sm text-ink-soft hover:text-ink transition"
      >
        {item.label}
      </a>
    )
  }
  return (
    <Link
      to={item.to}
      className="text-sm text-ink-soft hover:text-ink transition"
    >
      {item.label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-muted font-semibold mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Item item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
          <div className="flex items-center gap-2">
            <span aria-hidden className="inline-block w-1.5 h-1.5 rounded-full bg-ink/70" />
            <span className="font-mono">CLIC_diversidade</span>
            <span aria-hidden>·</span>
            <span>Letramento em IA para o setor público</span>
          </div>
          <div>© {new Date().getFullYear()} · Feito com cuidado</div>
        </div>
      </div>
    </footer>
  )
}
