import { LANG, setLang } from '../i18n'

const OPCOES = [
  { id: 'pt', label: 'PT', title: 'Português' },
  { id: 'es', label: 'ES', title: 'Español' },
]

// Seletor PT | ES. Mesma preferencia (localStorage 'clic-lang') da landing.
export default function LangToggle({ className = '' }) {
  return (
    <div
      role="group"
      aria-label="Idioma"
      className={
        'inline-flex items-center gap-0.5 p-[3px] rounded-full border border-line font-mono text-[11px] tracking-[0.12em] ' +
        className
      }
    >
      {OPCOES.map((o) => (
        <button
          key={o.id}
          type="button"
          lang={o.id}
          title={o.title}
          aria-pressed={LANG === o.id}
          onClick={() => setLang(o.id)}
          className={
            'px-2 py-1 rounded-full transition ' +
            (LANG === o.id ? 'bg-ink text-page' : 'text-ink-soft hover:text-ink')
          }
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
