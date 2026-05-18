const LEVELS = [
  { id: 'nunca_usei', label: 'Nunca usei IA', icon: '\u{1F331}' },
  { id: 'perguntas_simples', label: 'Perguntas simples', icon: '\u{1F4AC}' },
  { id: 'produzo_conteudo', label: 'Produzo conteúdo', icon: '\u{1F4DD}' },
  { id: 'ja_criei', label: 'Já criei algo com IA', icon: '\u{1F680}' },
]

export default function ChartBars({ distribuicao, nivelDoUsuario }) {
  const max = Math.max(1, ...LEVELS.map((l) => distribuicao[l.id] ?? 0))

  return (
    <div className="space-y-4">
      {LEVELS.map((level) => {
        const count = distribuicao[level.id] ?? 0
        const pct = (count / max) * 100
        const isUser = level.id === nivelDoUsuario

        return (
          <div
            key={level.id}
            className="grid grid-cols-[1fr_auto] gap-x-3 items-center md:grid-cols-[auto_1fr_auto]"
          >
            <div className="flex items-center gap-2 min-w-0 col-span-2 md:col-span-1 md:min-w-44">
              <span aria-hidden className="text-lg">
                {level.icon}
              </span>
              <span
                className={
                  'text-sm ' +
                  (isUser ? 'font-semibold text-ink' : 'text-ink-soft')
                }
              >
                {level.label}
                {isUser && (
                  <span className="ml-2 text-xs text-accent-fg">você</span>
                )}
              </span>
            </div>
            <div className="h-3 bg-line/60 rounded-full overflow-hidden relative col-span-2 md:col-span-1">
              <div
                className={
                  'h-full rounded-full transition-all duration-700 ' +
                  (isUser ? 'bg-accent' : 'bg-ink-soft/50')
                }
                style={{ width: `${pct}%` }}
              />
            </div>
            <div
              className={
                'text-sm tabular-nums col-start-2 md:col-start-auto text-right ' +
                (isUser ? 'font-semibold text-ink' : 'text-ink-soft')
              }
            >
              {count}
            </div>
          </div>
        )
      })}
    </div>
  )
}
