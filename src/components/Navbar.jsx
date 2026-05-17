export default function Navbar() {
  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-4">
      <nav className="glass mx-auto max-w-5xl flex items-center justify-between rounded-full pl-5 pr-2 py-2">
        <a href="#top" className="text-sm tracking-wide whitespace-nowrap font-medium text-ink">
          CLIC<span className="text-accent-fg italic font-display">_</span>diversidade
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm text-ink-soft">
          <li><a href="#percurso" className="hover:text-ink transition-colors">Percurso</a></li>
          <li><a href="#principios" className="hover:text-ink transition-colors">Princípios</a></li>
          <li><a href="#publico" className="hover:text-ink transition-colors">Público</a></li>
        </ul>

        <a
          href="#cta"
          className="rounded-full bg-ink text-background text-sm px-4 py-1.5 hover:opacity-90 transition-opacity"
        >
          Inscrever
        </a>
      </nav>
    </header>
  )
}
