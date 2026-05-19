import { useEffect, useRef, useState } from 'react'
import { consultarGovernanca } from '../../../services/governanca'
import { CASOS, SEVERIDADE } from './casos'

const AMBIENTES = [
  { value: '', label: 'Não informado' },
  { value: 'aberta', label: 'Aberta (ChatGPT/Gemini/Claude.ai sem contrato)' },
  { value: 'api', label: 'Por API (sistema do órgão chama provedor)' },
  { value: 'contratada', label: 'Contratada (solução de mercado com cláusulas)' },
  { value: 'propria', label: 'Própria (on-premise / nuvem privada)' },
]

const AMBIENTE_HELP =
  'Selecione o ambiente para a Lélia já incorporar na análise e não pedir esclarecimento.'

// Captura do marcador 📄 até o fim da mensagem (o rastro e' sempre o ultimo
// bloco estruturado da resposta da Lelia).
const EXTRATO_RE = /📄[^\n]*EXTRATO DE GOVERNAN[ÇC]A DE IA[\s\S]+$/

export default function AgenteGovernanca() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [ambiente, setAmbiente] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [mostrarCasos, setMostrarCasos] = useState(false)
  const scrollerRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const el = scrollerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, loading])

  async function enviar(texto) {
    const t = (texto ?? input).trim()
    if (!t || loading) return

    const novas = [...messages, { role: 'user', content: t }]
    setMessages(novas)
    setInput('')
    setLoading(true)
    setError(null)
    setMostrarCasos(false)

    try {
      const { reply } = await consultarGovernanca({
        messages: novas,
        ambiente: ambiente || undefined,
      })
      setMessages([...novas, { role: 'assistant', content: reply }])
    } catch (err) {
      setError(err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    enviar()
  }

  function escolherCaso(caso) {
    setInput(caso.pergunta)
    setMostrarCasos(false)
    inputRef.current?.focus()
  }

  function limpar() {
    setMessages([])
    setError(null)
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Painel operacional */}
      <div className="bg-card border border-line rounded-2xl p-5 md:p-6">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex-1 min-w-[260px]">
            <label className="block text-xs uppercase tracking-wider text-ink-soft font-semibold mb-2">
              Ambiente tecnológico
            </label>
            <select
              value={ambiente}
              onChange={(e) => setAmbiente(e.target.value)}
              className="w-full rounded-lg border border-line bg-page px-3 py-2 text-sm text-ink"
            >
              {AMBIENTES.map((a) => (
                <option key={a.value} value={a.value}>
                  {a.label}
                </option>
              ))}
            </select>
            <p className="mt-2 text-xs text-muted">{AMBIENTE_HELP}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMostrarCasos((v) => !v)}
              className="rounded-full border border-line bg-page px-4 py-2 text-xs font-medium text-ink-soft hover:text-ink hover:border-accent/40 transition"
            >
              {mostrarCasos ? 'Ocultar' : 'Casos de teste'}
            </button>
            <button
              type="button"
              onClick={limpar}
              disabled={messages.length === 0}
              className="rounded-full border border-line bg-page px-4 py-2 text-xs font-medium text-ink-soft hover:text-ink disabled:opacity-40 transition"
            >
              Limpar conversa
            </button>
          </div>
        </div>

        {mostrarCasos && (
          <div className="mt-5 pt-5 border-t border-line">
            <p className="text-xs text-ink-soft mb-3">
              Casos canônicos para experimentar. Clique para preencher.
            </p>
            <div className="grid gap-2 md:grid-cols-2">
              {CASOS.map((c, i) => {
                const sev = SEVERIDADE[c.severidade]
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => escolherCaso(c)}
                    className="text-left rounded-xl border border-line bg-page p-3 hover:border-accent/40 transition"
                  >
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-ink-soft mb-1">
                      <span className={'inline-block w-2 h-2 rounded-full ' + sev.cor} />
                      <span>{sev.label}</span>
                    </div>
                    <div className="text-sm font-medium text-ink leading-snug">
                      {c.titulo}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Área de conversa */}
      <div
        ref={scrollerRef}
        className="mt-6 min-h-[420px] max-h-[640px] overflow-y-auto rounded-2xl border border-line bg-card p-5 md:p-6 space-y-5"
      >
        {messages.length === 0 && !loading && (
          <EmptyState />
        )}
        {messages.map((m, i) => (
          <MessageBubble key={i} message={m} />
        ))}
        {loading && (
          <div className="flex items-center gap-3 text-ink-soft text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-accent-fg animate-pulse" />
            Lélia está analisando o caso...
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm px-4 py-3">
          <strong>Erro:</strong> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              enviar()
            }
          }}
          rows={2}
          placeholder="Descreva o uso de IA que você está considerando..."
          className="flex-1 resize-none rounded-xl border border-line bg-card px-4 py-3 text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:border-accent/60"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="self-stretch rounded-xl bg-ink text-page px-5 text-sm font-medium disabled:opacity-40 transition"
        >
          Enviar
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-muted leading-relaxed max-w-2xl mx-auto">
        Esta ferramenta é apoiada por IA (modelo Claude, API Anthropic). Pelos termos
        comerciais da API, o conteúdo enviado não é usado para treinar modelos. Na
        taxonomia do próprio agente é um uso <em>Por API</em>: use com informação
        pública ou de baixa sensibilidade, não insira dados sensíveis ou sigilosos.
      </p>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="py-6 md:py-10 text-center">
      <img
        src="/jornada/lelia.png"
        alt="Lélia"
        className="mx-auto w-16 h-16 rounded-full border border-line bg-page object-cover opacity-90"
      />
      <p className="mt-4 text-ink-soft text-sm md:text-base leading-relaxed max-w-md mx-auto">
        Descreva o caso para a Lélia analisar, ou escolha um caso de teste no
        painel acima.
      </p>
    </div>
  )
}

function MessageBubble({ message }) {
  const isUser = message.role === 'user'

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-ink text-page px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap">
          {message.content}
        </div>
      </div>
    )
  }

  const rastro = extrairRastro(message.content)
  const corpo = rastro ? message.content.replace(rastro, '').trim() : message.content

  return (
    <div className="flex gap-3">
      <img
        src="/jornada/lelia.png"
        alt="Lélia"
        className="shrink-0 w-9 h-9 rounded-full border border-line bg-card object-cover"
      />
      <div className="flex-1 space-y-4 min-w-0">
        <div className="text-sm md:text-[0.95rem] text-ink leading-relaxed">
          <Markdown text={corpo} />
        </div>
        {rastro && <RastroExtrato texto={rastro} />}
      </div>
    </div>
  )
}

function RastroExtrato({ texto }) {
  const [copiado, setCopiado] = useState(false)

  function copiar() {
    navigator.clipboard.writeText(texto).then(() => {
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    })
  }

  function baixar() {
    const blob = new Blob([texto], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `rastro_decisorio_${new Date().toISOString().slice(0, 10)}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <details className="rounded-xl border border-accent/40 bg-accent/[0.05] p-4">
      <summary className="cursor-pointer text-xs uppercase tracking-wider font-semibold text-accent-fg">
        📄 Extrato de Governança · Rastro Decisório
      </summary>
      <div className="mt-3 text-xs md:text-sm text-ink leading-relaxed">
        <Markdown text={texto} />
      </div>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={copiar}
          className="rounded-full border border-line bg-page px-4 py-1.5 text-xs font-medium text-ink hover:border-accent/40 transition"
        >
          {copiado ? '✓ Copiado' : 'Copiar'}
        </button>
        <button
          type="button"
          onClick={baixar}
          className="rounded-full border border-line bg-page px-4 py-1.5 text-xs font-medium text-ink hover:border-accent/40 transition"
        >
          Baixar .md
        </button>
      </div>
    </details>
  )
}

function extrairRastro(texto) {
  if (!texto) return null
  const m = texto.match(EXTRATO_RE)
  return m ? m[0].trim() : null
}

// Markdown minimo: paragrafos, headers, listas, **bold**, *italic*, `code`, code-fence.
// Suficiente para a saida estruturada do agente.
function Markdown({ text }) {
  return <div className="space-y-3">{renderBlocks(text)}</div>
}

function renderBlocks(text) {
  if (!text) return null
  const lines = text.split('\n')
  const blocks = []
  let buffer = []
  let inCode = false
  let codeBuffer = []
  let listType = null
  let listBuffer = []

  const flushParagraph = () => {
    if (buffer.length) {
      blocks.push({ type: 'p', content: buffer.join(' ') })
      buffer = []
    }
  }
  const flushList = () => {
    if (listBuffer.length) {
      blocks.push({ type: 'list', kind: listType, items: listBuffer })
      listBuffer = []
      listType = null
    }
  }

  for (const raw of lines) {
    const line = raw

    if (line.trim().startsWith('```')) {
      if (inCode) {
        flushParagraph()
        flushList()
        blocks.push({ type: 'code', content: codeBuffer.join('\n') })
        codeBuffer = []
        inCode = false
      } else {
        flushParagraph()
        flushList()
        inCode = true
      }
      continue
    }
    if (inCode) {
      codeBuffer.push(line)
      continue
    }

    const trimmed = line.trim()
    if (!trimmed) {
      flushParagraph()
      flushList()
      continue
    }

    const headerMatch = trimmed.match(/^(#{1,4})\s+(.*)$/)
    if (headerMatch) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'h', level: headerMatch[1].length, content: headerMatch[2] })
      continue
    }

    const bullet = trimmed.match(/^[-*]\s+(.*)$/)
    if (bullet) {
      flushParagraph()
      if (listType && listType !== 'ul') flushList()
      listType = 'ul'
      listBuffer.push(bullet[1])
      continue
    }
    const ordered = trimmed.match(/^\d+\.\s+(.*)$/)
    if (ordered) {
      flushParagraph()
      if (listType && listType !== 'ol') flushList()
      listType = 'ol'
      listBuffer.push(ordered[1])
      continue
    }

    flushList()
    buffer.push(trimmed)
  }
  flushParagraph()
  flushList()
  if (inCode && codeBuffer.length) {
    blocks.push({ type: 'code', content: codeBuffer.join('\n') })
  }

  return blocks.map((b, i) => renderBlock(b, i))
}

function renderBlock(b, key) {
  if (b.type === 'p') {
    return (
      <p key={key} className="leading-relaxed">
        <Inline text={b.content} />
      </p>
    )
  }
  if (b.type === 'h') {
    const size = b.level <= 2 ? 'text-base font-display font-semibold' : 'text-sm font-semibold'
    return (
      <p key={key} className={`${size} text-ink mt-1`}>
        <Inline text={b.content} />
      </p>
    )
  }
  if (b.type === 'code') {
    return (
      <pre
        key={key}
        className="rounded-lg bg-ink/[0.04] border border-line p-3 text-[11px] md:text-xs overflow-x-auto whitespace-pre-wrap font-mono text-ink"
      >
        {b.content}
      </pre>
    )
  }
  if (b.type === 'list') {
    const cls = b.kind === 'ol' ? 'list-decimal' : 'list-disc'
    return (
      <ul key={key} className={`${cls} pl-5 space-y-1`}>
        {b.items.map((it, i) => (
          <li key={i} className="leading-relaxed">
            <Inline text={it} />
          </li>
        ))}
      </ul>
    )
  }
  return null
}

// Inline: **bold**, *italic*, `code`. Sem links pra evitar dor.
function Inline({ text }) {
  const parts = []
  const re = /(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`\n]+`)/g
  let last = 0
  let m
  let key = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    const tok = m[0]
    if (tok.startsWith('**')) {
      parts.push(
        <strong key={key++} className="font-semibold text-ink">
          {tok.slice(2, -2)}
        </strong>
      )
    } else if (tok.startsWith('`')) {
      parts.push(
        <code key={key++} className="px-1 py-0.5 rounded bg-ink/[0.06] text-[0.9em] font-mono">
          {tok.slice(1, -1)}
        </code>
      )
    } else {
      parts.push(
        <em key={key++} className="italic">
          {tok.slice(1, -1)}
        </em>
      )
    }
    last = m.index + tok.length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}
