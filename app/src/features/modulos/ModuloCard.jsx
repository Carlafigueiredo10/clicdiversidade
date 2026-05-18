import { Link } from 'react-router-dom'

export default function ModuloCard({
  to,
  numero,
  titulo,
  descricao,
  duracao,
  disponivel = true,
}) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs tracking-[0.2em] uppercase text-accent-fg font-semibold">
          Módulo {numero}
        </span>
        {!disponivel && (
          <span className="text-xs text-muted bg-page rounded-full px-3 py-1 border border-line">
            Em breve
          </span>
        )}
      </div>
      <h3 className="mt-4 font-display font-semibold text-2xl text-ink leading-tight">
        {titulo}
      </h3>
      <p className="mt-3 text-ink-soft text-sm leading-relaxed">{descricao}</p>
      {duracao && (
        <p className="mt-6 text-xs text-muted">{duracao}</p>
      )}
    </>
  )

  const baseClasses =
    'block text-left bg-card rounded-2xl p-7 border border-line transition h-full'

  if (!disponivel) {
    return <div className={baseClasses + ' opacity-60 cursor-not-allowed'}>{inner}</div>
  }

  return (
    <Link
      to={to}
      className={
        baseClasses +
        ' hover:border-accent hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/40'
      }
    >
      {inner}
    </Link>
  )
}
