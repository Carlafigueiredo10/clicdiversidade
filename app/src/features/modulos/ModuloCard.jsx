import { Link } from 'react-router-dom'

export default function ModuloCard({
  to,
  numero,
  icon,
  titulo,
  descricao,
  stats,
  ctaText,
  disponivel = true,
}) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
          <span className="text-2xl leading-none" aria-hidden>
            {icon}
          </span>
        </div>
        <span className="font-mono text-xs tracking-widest text-accent-fg font-semibold tabular-nums">
          {numero}
        </span>
      </div>

      <h3 className="mt-6 font-display font-semibold text-2xl text-ink leading-tight">
        {titulo}
      </h3>
      <p className="mt-3 text-ink-soft text-sm leading-relaxed">
        {descricao}
      </p>

      {stats && stats.length > 0 && (
        <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          {stats.map((s, i) => (
            <div key={i} className="flex items-baseline gap-1.5">
              <span className="font-display font-semibold text-ink">
                {s.value}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {disponivel && ctaText ? (
        <p className="mt-7 text-sm font-medium text-accent-fg">
          {ctaText} →
        </p>
      ) : (
        <p className="mt-7 text-xs uppercase tracking-wider text-muted">
          Em breve
        </p>
      )}
    </>
  )

  const baseClasses =
    'block text-left bg-card rounded-2xl p-7 border border-line transition h-full'

  if (!disponivel) {
    return <div className={baseClasses + ' opacity-70'}>{inner}</div>
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
