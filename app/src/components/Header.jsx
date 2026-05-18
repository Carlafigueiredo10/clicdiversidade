import { Link, NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Jornada', end: true },
  { to: '/glossario', label: 'Glossário' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-page/85 backdrop-blur-md border-b border-line">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-3">
        <Link
          to="/"
          className="font-display font-semibold text-ink text-sm whitespace-nowrap"
        >
          CLIC
          <span className="italic text-accent-fg">_</span>
          diversidade
        </Link>
        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                'text-sm px-3 py-1.5 rounded-full transition ' +
                (isActive
                  ? 'bg-card text-ink font-medium'
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
