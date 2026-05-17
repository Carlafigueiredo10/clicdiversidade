export default function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-hairline">
      <div className="mx-auto max-w-5xl flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm text-ink font-medium">
            CLIC<span className="font-display italic text-accent-fg">_</span>diversidade
          </div>
          <p className="mt-2 max-w-md text-xs text-ink-soft font-light leading-relaxed">
            Letramento digital aplicado à IA com diversidade, inclusão e
            responsabilidade.
          </p>
        </div>
        <div className="text-xs tracking-[0.2em] uppercase text-accent-fg">
          Letramento · Inclusão · Consciência
        </div>
      </div>

      <div className="mx-auto max-w-5xl mt-12 pt-8 border-t border-hairline flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
        <span className="font-mono">© {new Date().getFullYear()} CLIC_diversidade</span>
        <span className="font-display italic text-accent-fg">
          em silêncio, com intenção.
        </span>
      </div>
    </footer>
  )
}
