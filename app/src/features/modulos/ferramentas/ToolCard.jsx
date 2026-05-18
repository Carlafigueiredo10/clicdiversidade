import { CATEGORIAS } from './data'

const STARS = {
  0: null,
  1: '★☆☆☆☆',
  2: '★★☆☆☆',
  3: '★★★☆☆',
  4: '★★★★☆',
  5: '★★★★★',
}

const TAG_BADGES = {
  br: {
    label: '🇧🇷 Brasil',
    className: 'border-emerald-300/60 bg-emerald-50 text-emerald-800',
  },
  cn: {
    label: '🇨🇳 China',
    className: 'border-rose-300/60 bg-rose-50 text-rose-800',
  },
  os: {
    label: 'Open Source',
    className: 'border-sky-300/60 bg-sky-50 text-sky-800',
  },
}

export default function ToolCard({ n, d, c, g, data, url, tags }) {
  return (
    <article className="bg-card rounded-2xl border border-line p-5 flex flex-col h-full transition hover:border-accent/50 hover:shadow-sm">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-display font-semibold text-lg text-ink leading-tight">
          {n}
        </h3>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        <span className="text-[10px] uppercase tracking-wider bg-page text-ink-soft border border-line rounded px-2 py-0.5">
          {CATEGORIAS[c]}
        </span>
        {tags.map((t) => {
          const badge = TAG_BADGES[t]
          if (!badge) return null
          return (
            <span
              key={t}
              className={
                'text-[10px] uppercase tracking-wider rounded px-2 py-0.5 border ' +
                badge.className
              }
            >
              {badge.label}
            </span>
          )
        })}
      </div>

      <p className="text-ink-soft text-sm leading-relaxed flex-1">{d}</p>

      <div className="mt-4 pt-4 border-t border-line flex items-end justify-between gap-3">
        <div className="flex flex-col gap-1 text-xs">
          {STARS[g] ? (
            <span className="text-amber-600 tracking-wider">{STARS[g]}</span>
          ) : (
            <span className="text-muted">? não confirmado</span>
          )}
          <span
            className={
              data === 'sim'
                ? 'text-emerald-700 font-medium'
                : 'text-muted'
            }
          >
            {data === 'sim' ? '🛡 Controle' : '? s/ info'}
          </span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent-fg hover:opacity-70 transition whitespace-nowrap"
        >
          Acessar
          <span aria-hidden>↗</span>
        </a>
      </div>
    </article>
  )
}
