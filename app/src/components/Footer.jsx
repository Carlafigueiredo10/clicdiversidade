import { Link } from 'react-router-dom'
import { tr } from '../i18n'

const T = tr({
  pt: { emBreve: 'Em breve', tagline: 'Letramento em IA para o setor público', feito: 'Feito com cuidado' },
  es: { emBreve: 'Próximamente', tagline: 'Alfabetización en IA para el sector público', feito: 'Hecho con cuidado' },
})

const COLUMNS = [
  {
    title: tr({ pt: 'Programa', es: 'Programa' }),
    items: [
      { label: tr({ pt: 'Trilhas', es: 'Rutas' }), to: '/modulos/trilhas' },
      { label: tr({ pt: 'Materiais adicionais', es: 'Materiales adicionales' }), soon: true },
      { label: tr({ pt: 'Certificação', es: 'Certificación' }), external: '/jornada/certificado.html' },
    ],
  },
  {
    title: tr({ pt: 'Conteúdo', es: 'Contenido' }),
    items: [
      { label: tr({ pt: 'Glossário', es: 'Glosario' }), to: '/glossario' },
      { label: tr({ pt: 'Base Teórica', es: 'Base Teórica' }), to: '/base-teorica' },
      { label: tr({ pt: 'Conheça Lélia', es: 'Conoce a Lélia' }), external: '/lelia/' },
      { label: tr({ pt: 'Governança de IA', es: 'Gobernanza de IA' }), to: '/modulos/governanca' },
    ],
  },
  {
    title: tr({ pt: 'Institucional', es: 'Institucional' }),
    items: [
      { label: tr({ pt: 'Manifesto', es: 'Manifiesto' }), to: '/manifesto' },
      { label: tr({ pt: 'Equipe', es: 'Equipo' }), to: '/equipe' },
      {
        label: tr({ pt: 'Parcerias', es: 'Alianzas' }),
        mailto: 'carlacristinesoares@gmail.com',
        subject: tr({ pt: 'Parceria — CLIC Diversidade', es: 'Alianza — CLIC Diversidade' }),
      },
    ],
  },
]

function Item({ item }) {
  if (item.soon) {
    return (
      <span className="text-sm text-muted/70 cursor-not-allowed inline-flex items-center gap-2">
        {item.label}
        <span className="text-[9px] uppercase tracking-widest text-muted/60 border border-line rounded-full px-1.5 py-0.5">
          {T.emBreve}
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
  if (item.mailto) {
    const href = item.subject
      ? `mailto:${item.mailto}?subject=${encodeURIComponent(item.subject)}`
      : `mailto:${item.mailto}`
    return (
      <a href={href} className="text-sm text-ink-soft hover:text-ink transition">
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
            <span>{T.tagline}</span>
          </div>
          <div>© {new Date().getFullYear()} · {T.feito}</div>
        </div>
      </div>
    </footer>
  )
}
