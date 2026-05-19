// Barra horizontal segmentada — uma linha unica dividida em 4 cores,
// largura proporcional ao % de votos por nivel. Atualiza em tempo real.

const LEVELS = [
  {
    id: 'nunca_usei',
    label: 'Nunca usei IA',
    short: 'Nunca usei',
    icon: '\u{1F331}',
    color: 'oklch(72% 0.14 35)', // coral — comeco da jornada
  },
  {
    id: 'perguntas_simples',
    label: 'Perguntas simples',
    short: 'Perguntas',
    icon: '\u{1F4AC}',
    color: 'oklch(78% 0.14 80)', // ambar
  },
  {
    id: 'produzo_conteudo',
    label: 'Produzo conteúdo',
    short: 'Produz',
    icon: '\u{1F4DD}',
    color: 'oklch(70% 0.13 160)', // verde sage
  },
  {
    id: 'ja_criei',
    label: 'Já criei algo com IA',
    short: 'Criou',
    icon: '\u{1F680}',
    color: 'oklch(60% 0.15 285)', // violeta (accent, dominio)
  },
]

export default function ChartLevelLine({ distribuicao, nivelDoUsuario }) {
  const total = LEVELS.reduce(
    (s, l) => s + (distribuicao?.[l.id] ?? 0),
    0,
  )
  const vazio = total === 0

  return (
    <div className="space-y-6">
      {/* Linha segmentada */}
      <div
        className="relative h-4 rounded-full overflow-hidden flex bg-line/40"
        role="img"
        aria-label={
          vazio
            ? 'Aguardando respostas'
            : `Distribuição de ${total} participantes por nível`
        }
      >
        {!vazio &&
          LEVELS.map((level) => {
            const count = distribuicao[level.id] ?? 0
            const pct = (count / total) * 100
            const isUser = level.id === nivelDoUsuario
            if (pct === 0) return null
            return (
              <div
                key={level.id}
                className="h-full transition-[width] duration-1000 ease-out relative"
                style={{
                  width: `${pct}%`,
                  background: level.color,
                  boxShadow: isUser
                    ? '0 0 0 2px var(--color-page), 0 0 0 4px ' + level.color
                    : undefined,
                  zIndex: isUser ? 2 : 1,
                }}
                title={`${level.label}: ${count} (${pct.toFixed(0)}%)`}
              />
            )
          })}
      </div>

      {/* Legenda + numeros */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {LEVELS.map((level) => {
          const count = distribuicao?.[level.id] ?? 0
          const pct = total > 0 ? (count / total) * 100 : 0
          const isUser = level.id === nivelDoUsuario
          return (
            <div
              key={level.id}
              className={
                'flex items-start gap-3 p-3 rounded-xl transition ' +
                (isUser
                  ? 'bg-card border border-line shadow-sm'
                  : 'border border-transparent')
              }
            >
              <span
                aria-hidden
                className="w-2.5 h-2.5 rounded-full mt-2 shrink-0"
                style={{ background: level.color }}
              />
              <div className="min-w-0">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-semibold text-ink text-2xl tabular-nums leading-none">
                    {count}
                  </span>
                  <span className="text-xs text-muted tabular-nums">
                    {total > 0 ? pct.toFixed(0) + '%' : '—'}
                  </span>
                </div>
                <p
                  className={
                    'mt-1.5 text-xs leading-snug ' +
                    (isUser ? 'text-accent-fg font-medium' : 'text-ink-soft')
                  }
                >
                  <span aria-hidden className="mr-1">
                    {level.icon}
                  </span>
                  {level.label}
                  {isUser && (
                    <span className="ml-1 text-accent-fg">· você</span>
                  )}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {vazio && (
        <p className="text-center text-sm text-ink-soft">
          Aguardando a primeira resposta da oficina.
        </p>
      )}
    </div>
  )
}
