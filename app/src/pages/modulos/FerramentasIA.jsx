import { useMemo, useState } from 'react'
import {
  FERRAMENTAS,
  CATEGORIAS,
} from '../../features/modulos/ferramentas/data'
import ToolCard from '../../features/modulos/ferramentas/ToolCard'

const CAT_OPTIONS = [
  { value: 'all', label: 'Todas' },
  ...Object.entries(CATEGORIAS).map(([value, label]) => ({ value, label })),
]

const GRATIS_OPTIONS = [
  { value: 'all', label: 'Todas' },
  { value: '5', label: '★★★★★' },
  { value: '4', label: '★★★★☆+' },
  { value: '3', label: '★★★☆☆+' },
  { value: 'pago', label: 'Só pago' },
]

const ORIGEM_OPTIONS = [
  { value: 'all', label: 'Todas' },
  { value: 'br', label: '🇧🇷 Brasil' },
  { value: 'cn', label: '🇨🇳 China' },
  { value: 'os', label: '🔓 Open Source' },
]

function FilterGroup({ label, options, active, onChange }) {
  return (
    <div>
      <span className="block text-xs uppercase tracking-widest text-muted mb-2.5">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={
              active === opt.value
                ? 'text-xs px-3.5 py-1.5 rounded-full border border-accent bg-accent/10 text-accent-fg font-medium transition'
                : 'text-xs px-3.5 py-1.5 rounded-full border border-line text-ink-soft hover:bg-card hover:text-ink transition'
            }
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function FerramentasIA() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('all')
  const [gratis, setGratis] = useState('all')
  const [origem, setOrigem] = useState('all')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return FERRAMENTAS.filter((t) => {
      if (
        q &&
        !t.n.toLowerCase().includes(q) &&
        !t.d.toLowerCase().includes(q)
      )
        return false
      if (cat !== 'all' && t.c !== cat) return false
      if (gratis === '5' && t.g !== 5) return false
      if (gratis === '4' && t.g < 4) return false
      if (gratis === '3' && t.g < 3) return false
      if (gratis === 'pago' && t.g !== 1) return false
      if (origem === 'br' && !t.tags.includes('br')) return false
      if (origem === 'cn' && !t.tags.includes('cn')) return false
      if (origem === 'os' && !t.tags.includes('os')) return false
      return true
    })
  }, [search, cat, gratis, origem])

  function limparFiltros() {
    setSearch('')
    setCat('all')
    setGratis('all')
    setOrigem('all')
  }

  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Módulo 01 · Ferramentas de IA
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          Catálogo de Ferramentas
          <br />
          de Inteligência Artificial
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Mais de 120 ferramentas organizadas por categoria de uso, nível de
          gratuidade e possibilidade de controle dos seus dados. Use os filtros
          pra encontrar a ferramenta certa — ou explore pra descobrir o que
          existe.
        </p>

        {/* Cards de orientacao */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="bg-card rounded-2xl border border-line p-6">
            <h3 className="font-display font-semibold text-base text-ink mb-3 flex items-center gap-2">
              <span aria-hidden className="text-amber-500">
                ★
              </span>
              Nível de gratuidade
            </h3>
            <ul className="space-y-1.5 text-sm text-ink-soft">
              <li>
                <span className="text-amber-600 tracking-wider">★★★★★</span>{' '}
                Open source ou grátis
              </li>
              <li>
                <span className="text-amber-600 tracking-wider">★★★★☆</span>{' '}
                Plano grátis contínuo
              </li>
              <li>
                <span className="text-amber-600 tracking-wider">★★★☆☆</span>{' '}
                Grátis com limites
              </li>
              <li>
                <span className="text-amber-600 tracking-wider">★★☆☆☆</span>{' '}
                Teste / créditos
              </li>
              <li>
                <span className="text-amber-600 tracking-wider">★☆☆☆☆</span>{' '}
                Só pago
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-2xl border border-line p-6">
            <h3 className="font-display font-semibold text-base text-ink mb-3 flex items-center gap-2">
              <span aria-hidden>🛡</span>
              Controle de dados
            </h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              <span className="text-emerald-700 font-medium">🛡 Controle</span>{' '}
              aparece quando a ferramenta documenta exclusão de dados, opt-out
              de treinamento ou self-host. <span className="text-muted">? s/ info</span>{' '}
              significa que não encontramos essa informação — não que seja
              insegura.
            </p>
            <p className="mt-3 text-xs text-ink-soft border-t border-line pt-3 italic">
              No serviço público, nunca insira CPF, RG, dados de saúde ou
              segredos de justiça em ferramentas de IA. Anonimize sempre.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-line p-6">
            <h3 className="font-display font-semibold text-base text-ink mb-3 flex items-center gap-2">
              <span aria-hidden>🔍</span>
              Como explorar
            </h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              Use a <span className="text-ink font-medium">busca</span> para
              nome ou descrição. Os{' '}
              <span className="text-ink font-medium">filtros</span> de
              categoria, gratuidade e origem funcionam combinados — vão
              refinando sua seleção.
            </p>
            <p className="mt-3 text-xs text-ink-soft">
              Dica: destaque ferramentas{' '}
              <span className="text-emerald-700 font-medium">brasileiras</span>,{' '}
              <span className="text-sky-700 font-medium">open source</span> ou{' '}
              <span className="text-rose-700 font-medium">chinesas</span> pelo
              filtro de Origem.
            </p>
          </div>
        </div>

        {/* Busca + contador */}
        <div className="mt-14 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex-1 min-w-[260px] relative">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar ferramenta por nome ou descrição..."
              className="w-full bg-card border border-line rounded-xl pl-11 pr-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
              aria-label="Buscar"
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
          <div className="text-sm text-muted tabular-nums">
            {filtered.length}{' '}
            {filtered.length === 1 ? 'ferramenta' : 'ferramentas'}
          </div>
        </div>

        {/* Filtros */}
        <div className="mt-8 space-y-5">
          <FilterGroup
            label="Categoria"
            options={CAT_OPTIONS}
            active={cat}
            onChange={setCat}
          />
          <FilterGroup
            label="Gratuidade"
            options={GRATIS_OPTIONS}
            active={gratis}
            onChange={setGratis}
          />
          <FilterGroup
            label="Origem"
            options={ORIGEM_OPTIONS}
            active={origem}
            onChange={setOrigem}
          />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <ToolCard key={t.n} {...t} />
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center py-16 border border-line rounded-2xl bg-card">
            <p className="text-ink-soft">
              Nenhuma ferramenta encontrada com esses filtros.
            </p>
            <button
              type="button"
              onClick={limparFiltros}
              className="mt-4 text-sm text-accent-fg font-medium hover:opacity-70"
            >
              Limpar filtros →
            </button>
          </div>
        )}

        {/* Voltar */}
        <div className="mt-16 flex justify-center">
          <a
            href="/jornada/#modulos"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink-soft hover:bg-card transition"
          >
            ← Voltar aos módulos
          </a>
        </div>

        <p className="mt-12 text-center text-xs text-muted leading-relaxed">
          Catálogo curado pela equipe CLIC_diversidade. Informações verificadas
          em fontes oficiais. Última atualização: 2025.
        </p>
      </div>
    </main>
  )
}
