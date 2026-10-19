import { NavLink } from 'react-router-dom'
import { signOutUser, useAuthUser } from '../services/auth'
import { tr } from '../i18n'
import LangToggle from './LangToggle'

const T = tr({
  pt: { jornada: 'Jornada', glossario: 'Glossário', voce: 'Você', entrar: 'Entrar', sair: 'Sair', inicio: '← Início', modulos: 'Módulos' },
  es: { jornada: 'Recorrido', glossario: 'Glosario', voce: 'Tú', entrar: 'Ingresar', sair: 'Salir', inicio: '← Inicio', modulos: 'Módulos' },
})

const NAV_ITEMS = [
  { to: '/', label: T.jornada, end: true },
  { to: '/glossario', label: T.glossario },
]

function shortName(user) {
  if (user.displayName) return user.displayName.split(' ')[0]
  return user.email?.split('@')[0] ?? T.voce
}

function AuthSlot() {
  const { user, loading } = useAuthUser()
  // Enquanto o Firebase resolve o estado de auth, mostramos o botao "Entrar"
  // como padrao otimista (pra evitar flash vazio). Se houver sessao, troca pro pill do usuario.
  if (!user) {
    return (
      <NavLink
        to="/login"
        className={
          'shrink-0 text-sm px-4 py-2 md:py-2.5 rounded-full transition border border-line text-ink hover:bg-card ' +
          (loading ? 'opacity-60' : '')
        }
      >
        {T.entrar}
      </NavLink>
    )
  }
  return (
    <div className="shrink-0 flex items-center gap-1 ml-1 pl-2 border-l border-line">
      <span
        className="text-sm text-ink-soft px-2 truncate max-w-[140px]"
        title={user.email}
      >
        {shortName(user)}
      </span>
      <button
        type="button"
        onClick={() => signOutUser()}
        className="text-xs text-ink-soft hover:text-ink underline px-2"
      >
        {T.sair}
      </button>
    </div>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-page/85 backdrop-blur-md border-b border-line">
      {/* Mobile: 2 linhas (logo + idioma em cima, links embaixo). md+: 1 linha. */}
      <div className="mx-auto max-w-6xl flex flex-wrap md:flex-nowrap items-center justify-between gap-y-2 px-5 py-3">
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
        <nav className="order-3 md:order-2 w-full md:w-auto md:ml-auto flex items-center gap-1 overflow-x-auto md:overflow-visible -mx-2 md:mx-0">
          {/* Voltar pra landing legacy (fora do React Router) */}
          <a
            href="/"
            className="hidden md:inline-block text-sm px-4 py-2.5 rounded-full transition text-ink-soft hover:text-ink"
          >
            {T.inicio}
          </a>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                'shrink-0 text-sm px-3 md:px-4 py-2 md:py-2.5 rounded-full transition ' +
                (isActive
                  ? 'bg-ink text-page font-medium'
                  : 'text-ink-soft hover:text-ink')
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="/jornada/#modulos"
            className="shrink-0 text-sm px-3 md:px-4 py-2 md:py-2.5 rounded-full transition text-ink-soft hover:text-ink"
          >
            {T.modulos}
          </a>
          <AuthSlot />
        </nav>
        <LangToggle className="order-2 md:order-3 md:ml-3 shrink-0" />
      </div>
    </header>
  )
}
