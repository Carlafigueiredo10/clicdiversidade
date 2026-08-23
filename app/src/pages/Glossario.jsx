import { useMemo, useState } from 'react'
import { CATEGORIAS, TERMOS } from '../features/glossario/data'

const FILTER_OPTIONS = [
  { value: 'all', label: 'Todos' },
  ...Object.entries(CATEGORIAS).map(([value, { label, icon }]) => ({
    value,
    label: `${icon} ${label}`,
  })),
]

const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function normalize(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

export default function Glossario() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('all')
  const [abertos, setAbertos] = useState(() => new Set())

  function alternar(nome) {
    setAbertos((prev) => {
      const proximo = new Set(prev)
      if (proximo.has(nome)) proximo.delete(nome)
      else proximo.add(nome)
      return proximo
    })
  }

  const filtered = useMemo(() => {
    const q = normalize(search.trim())
    return TERMOS.filter((t) => {
      if (cat !== 'all' && t.cat !== cat) return false
      if (!q) return true
      const hay = normalize(`${t.name} ${t.mini} ${t.def}`)
      return hay.includes(q)
    })
  }, [search, cat])

  // Com busca ativa, todo verbete filtrado abre: o filtro varre name+mini+def,
  // entao o resultado pode ter vindo de um trecho que estaria escondido.
  const buscando = search.trim().length > 0

  const grouped = useMemo(() => {
    const map = new Map()
    for (const t of filtered) {
      if (!map.has(t.letter)) map.set(t.letter, [])
      map.get(t.letter).push(t)
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]))
  }, [filtered])

  const usedLetters = new Set(grouped.map(([l]) => l))

  function limparFiltros() {
    setSearch('')
    setCat('all')
  }

  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Hero */}
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          📖 Vocabulário Digital
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          Soletrando
          <br />
          <span className="italic text-accent-fg">Tecnologia</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          O vocabulário mínimo para entrar em qualquer conversa sobre
          tecnologia sem se perder. Definição simples, como se fala e como usar
          numa frase.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-3 max-w-md mx-auto">
          <div className="bg-card border border-line rounded-2xl p-4 text-center">
            <div className="font-display font-semibold text-2xl text-ink">
              {TERMOS.length}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted mt-1">
              Termos
            </div>
          </div>
          <div className="bg-card border border-line rounded-2xl p-4 text-center">
            <div className="font-display font-semibold text-2xl text-ink">
              {Object.keys(CATEGORIAS).length}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted mt-1">
              Categorias
            </div>
          </div>
          <div className="bg-card border border-line rounded-2xl p-4 text-center">
            <div className="font-display font-semibold text-2xl text-ink">
              A→Z
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted mt-1">
              Ordenados
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mt-12 relative">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar termo... ex: algoritmo, API, nuvem"
            aria-label="Buscar termo"
            className="w-full bg-card border border-line rounded-xl pl-11 pr-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
          />
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>

        {/* Filtros */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setCat(opt.value)}
              className={
                cat === opt.value
                  ? 'text-xs px-3.5 py-1.5 rounded-full border border-accent bg-accent/10 text-accent-fg font-medium transition'
                  : 'text-xs px-3.5 py-1.5 rounded-full border border-line text-ink-soft hover:bg-card hover:text-ink transition'
              }
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Alfabeto */}
        <nav
          className="mt-8 flex flex-wrap gap-1 justify-center"
          aria-label="Pular para letra"
        >
          {ALFABETO.map((L) =>
            usedLetters.has(L) ? (
              <a
                key={L}
                href={`#letter-${L}`}
                className="w-7 h-7 rounded-md text-xs font-medium text-accent-fg hover:bg-accent/10 transition flex items-center justify-center"
              >
                {L}
              </a>
            ) : (
              <span
                key={L}
                className="w-7 h-7 rounded-md text-xs text-muted/40 flex items-center justify-center"
                aria-hidden
              >
                {L}
              </span>
            ),
          )}
        </nav>

        {/* Contador */}
        <p className="mt-8 text-center text-sm text-muted">
          {filtered.length} {filtered.length === 1 ? 'termo' : 'termos'}
          {search && ` para "${search}"`}
          {cat !== 'all' && ` em ${CATEGORIAS[cat].label}`}
        </p>

        {/* Listagem agrupada */}
        {grouped.length > 0 ? (
          <div className="mt-12 space-y-12">
            {grouped.map(([letter, terms]) => (
              <section
                key={letter}
                id={`letter-${letter}`}
                className="scroll-mt-8"
              >
                <h2 className="font-display font-semibold text-5xl text-accent-fg/30 leading-none">
                  {letter}
                </h2>
                {/* Lista de definicao: <dl>/<dt>/<dd> e o par semantico
                    correto — leitor de tela anuncia termo e definicao como
                    relacionados, o que <article>/<h3> nao entrega.
                    A linha fechada ja mostra o resumo (campo `mini`), entao
                    da pra varrer sem abrir nada. Com busca ativa tudo abre:
                    o filtro varre a definicao inteira, e o resultado pode ter
                    vindo justamente do texto escondido. */}
                <dl className="mt-4 border-t border-line">
                  {terms.map((t) => {
                    const aberto = buscando || abertos.has(t.name)
                    return (
                      <div key={t.name} className="border-b border-line">
                        <dt>
                          <button
                            type="button"
                            onClick={() => alternar(t.name)}
                            aria-expanded={aberto}
                            className="w-full text-left flex items-baseline gap-3 py-3.5 px-2 -mx-2 rounded-lg hover:bg-card transition group"
                          >
                            <span className="font-display font-semibold text-ink shrink-0">
                              {t.name}
                            </span>
                            <span className="text-sm text-ink-soft flex-1 leading-snug">
                              {t.mini}
                            </span>
                            {CATEGORIAS[t.cat] && (
                              <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-muted shrink-0">
                                {CATEGORIAS[t.cat].icon}
                              </span>
                            )}
                            <span
                              aria-hidden
                              className={
                                'text-muted text-xs shrink-0 transition-transform ' +
                                (aberto ? 'rotate-90' : '')
                              }
                            >
                              &#9656;
                            </span>
                          </button>
                        </dt>
                        {aberto && (
                          <dd className="pb-5 pl-2 pr-2 -mt-0.5">
                            <p
                              className="text-sm text-ink leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: t.def }}
                            />
                            <p className="mt-3 text-sm italic text-ink-soft leading-relaxed">
                              &ldquo;{t.example}&rdquo;
                            </p>
                            <p className="mt-3 text-[11px] text-muted font-mono">
                              {t.pronunc}
                              {CATEGORIAS[t.cat] && (
                                <span className="ml-3">
                                  {CATEGORIAS[t.cat].icon}{' '}
                                  {CATEGORIAS[t.cat].label}
                                </span>
                              )}
                            </p>
                          </dd>
                        )}
                      </div>
                    )
                  })}
                </dl>
              </section>
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center py-16 border border-line rounded-2xl bg-card">
            <span aria-hidden className="text-4xl">
              🔍
            </span>
            <p className="mt-3 text-ink-soft">Nenhum termo encontrado.</p>
            <button
              type="button"
              onClick={limparFiltros}
              className="mt-4 text-sm text-accent-fg font-medium hover:opacity-70"
            >
              Limpar filtros →
            </button>
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <a
            href="/jornada/"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink-soft hover:bg-card transition"
          >
            ← Voltar à jornada
          </a>
        </div>
      </div>
    </main>
  )
}
