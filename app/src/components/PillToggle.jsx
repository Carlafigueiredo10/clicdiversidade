export default function PillToggle({ value, onChange }) {
  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(true)}
        aria-pressed={value === true}
        className={
          value === true
            ? 'px-5 py-2 rounded-full border-2 border-success text-success-fg font-medium bg-success/10 transition'
            : 'px-5 py-2 rounded-full border-2 border-transparent text-ink-soft hover:text-ink transition'
        }
      >
        Sim, quero!
      </button>
      <button
        type="button"
        onClick={() => onChange(false)}
        aria-pressed={value === false}
        className={
          value === false
            ? 'px-5 py-2 rounded-full text-ink font-medium underline underline-offset-4 transition'
            : 'px-5 py-2 rounded-full text-ink-soft hover:text-ink transition'
        }
      >
        Agora não
      </button>
    </div>
  )
}
