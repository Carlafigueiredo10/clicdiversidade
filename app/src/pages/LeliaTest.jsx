import { useEffect, useRef, useState } from 'react'
import { conversarComLelia } from '../services/lelia'

const PAGE_OPTIONS = [
  { value: '', label: 'sem contexto' },
  { value: 'home', label: 'home (tutora)' },
  { value: 'engenharia-prompt', label: 'engenharia-prompt (assistente)' },
  { value: 'jornada-resultado', label: 'jornada-resultado (avaliadora)' },
]

export default function LeliaTest() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [page, setPage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const scrollerRef = useRef(null)

  useEffect(() => {
    const el = scrollerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, loading])

  async function enviar(e) {
    e.preventDefault()
    const texto = input.trim()
    if (!texto || loading) return

    const novas = [...messages, { role: 'user', content: texto }]
    setMessages(novas)
    setInput('')
    setLoading(true)
    setError(null)

    try {
      const { reply } = await conversarComLelia({
        messages: novas,
        page: page || undefined,
      })
      setMessages([...novas, { role: 'assistant', content: reply }])
    } catch (err) {
      setError(err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  function limpar() {
    setMessages([])
    setError(null)
  }

  return (
    <main className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            Laboratorio
          </p>
          <h1 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-ink leading-[1.05]">
            Lelia — teste da agente
          </h1>
          <p className="mt-3 max-w-xl mx-auto text-ink-soft text-sm leading-relaxed">
            Pagina interna pra testar a persona da Lelia antes de plugar nos modulos.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          <label className="text-ink-soft">Contexto da pagina:</label>
          <select
            value={page}
            onChange={(e) => setPage(e.target.value)}
            className="rounded-md border border-ink/15 bg-white px-3 py-1.5 text-ink"
          >
            {PAGE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={limpar}
            className="ml-auto text-xs text-ink-soft hover:text-ink transition"
          >
            limpar conversa
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="mt-4 h-[420px] overflow-y-auto rounded-lg border border-ink/10 bg-white p-4 space-y-3"
        >
          {messages.length === 0 && (
            <p className="text-ink-soft text-sm italic">
              Manda uma mensagem pra Lelia comecar.
            </p>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              className={`rounded-md px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                m.role === 'user'
                  ? 'bg-accent/10 text-ink ml-8'
                  : 'bg-ink/[0.03] text-ink mr-8'
              }`}
            >
              <div className="text-[10px] uppercase tracking-wider text-ink-soft mb-1">
                {m.role === 'user' ? 'voce' : 'lelia'}
              </div>
              {m.content}
            </div>
          ))}
          {loading && (
            <div className="text-ink-soft text-xs italic">lelia esta pensando...</div>
          )}
        </div>

        {error && (
          <div className="mt-3 rounded-md bg-red-50 border border-red-200 text-red-800 text-xs px-3 py-2">
            erro: {error}
          </div>
        )}

        <form onSubmit={enviar} className="mt-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="escreve sua mensagem..."
            className="flex-1 rounded-md border border-ink/15 bg-white px-3 py-2 text-sm text-ink placeholder:text-ink-soft"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="rounded-md bg-ink text-white px-4 py-2 text-sm font-medium disabled:opacity-40"
          >
            enviar
          </button>
        </form>
      </div>
    </main>
  )
}
