const ICONES = {
  nunca_usei: '\u{1F331}',
  perguntas_simples: '\u{1F4AC}',
  produzo_conteudo: '\u{1F4DD}',
  ja_criei: '\u{1F680}',
}

export default function LevelCard({ id, title, description, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      aria-pressed={selected}
      className={
        'text-left bg-card rounded-2xl p-7 border transition focus:outline-none focus:ring-2 focus:ring-accent/40 ' +
        (selected
          ? 'border-accent ring-2 ring-accent/30 shadow-md'
          : 'border-line hover:border-ink-soft/40 hover:shadow-sm')
      }
    >
      <div className="text-3xl mb-5" aria-hidden>
        {ICONES[id]}
      </div>
      <h3 className="font-display font-semibold text-xl text-ink leading-tight">
        {title}
      </h3>
      <p className="mt-2 text-ink-soft text-sm leading-relaxed">{description}</p>
    </button>
  )
}
