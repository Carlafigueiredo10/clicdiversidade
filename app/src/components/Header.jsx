import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Jornada', end: true },
  { to: '/glossario', label: 'Glossário' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-page/85 backdrop-blur-md border-b border-line">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-3">
        {/* href absoluto (nao Link) — sai do basename /jornada e volta pra landing legacy em / */}
        <a
          href="/"
          className="flex items-center gap-2.5 text-ink whitespace-nowrap"
        >
          <span
            aria-hidden
            className="inline-block w-2.5 h-2.5 rounded-full bg-ink"
          />
          <span
            className="font-mono text-[13px] tracking-tight"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            CLIC_diversidade
          </span>
        </a>
        <nav className="flex items-center gap-1">
          {/* Voltar pra landing legacy (fora do React Router) */}
          <a
            href="/"
            className="text-sm px-4 py-2.5 rounded-full transition text-ink-soft hover:text-ink"
          >
            ← Início
          </a>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                'text-sm px-4 py-2.5 rounded-full transition ' +
                (isActive
                  ? 'bg-ink text-page font-medium'
                  : 'text-ink-soft hover:text-ink')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
