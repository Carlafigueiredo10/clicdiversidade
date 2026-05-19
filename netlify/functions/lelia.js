import Anthropic from '@anthropic-ai/sdk'
import { PERSONA } from './_persona.js'
import { MAPA_PLATAFORMA } from './_mapa_plataforma.js'

const MODEL = process.env.LELIA_MODEL || 'claude-sonnet-4-6'
const MAX_TOKENS = parseInt(process.env.LELIA_MAX_TOKENS || '1024', 10)

const client = new Anthropic()

export default async (req) => {
  if (req.method !== 'POST') {
    return json({ error: 'method_not_allowed' }, 405)
  }

  let payload
  try {
    payload = await req.json()
  } catch {
    return json({ error: 'invalid_json' }, 400)
  }

  const { messages, page } = payload
  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: 'messages_required' }, 400)
  }

  const sanitized = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.slice(0, 8000) }))

  if (sanitized.length === 0 || sanitized[0].role !== 'user') {
    return json({ error: 'first_message_must_be_user' }, 400)
  }

  const contextHint = page
    ? `\n\n## Contexto desta conversa\n\nA pessoa esta na pagina: ${page}`
    : ''

  // Tres blocos system com cache_control independentes:
  //   1. PERSONA (raramente muda — cache mais durador)
  //   2. MAPA_PLATAFORMA (atualizado quando paginas mudam — cache separado evita invalidar persona)
  //   3. contextHint (efemero por requisicao — sem cache)
  const systemBlocks = [
    {
      type: 'text',
      text: PERSONA,
      cache_control: { type: 'ephemeral' },
    },
    {
      type: 'text',
      text: MAPA_PLATAFORMA,
      cache_control: { type: 'ephemeral' },
    },
  ]
  if (contextHint) {
    systemBlocks.push({ type: 'text', text: contextHint })
  }

  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: systemBlocks,
      messages: sanitized,
    })

    const text = response.content
      .filter((b) => b.type === 'text')
      .map((b) => b.text)
      .join('')

    return json({
      reply: text,
      stop_reason: response.stop_reason,
      usage: response.usage,
    })
  } catch (err) {
    console.error('[lelia] anthropic_error', err)
    const status = err?.status || 500
    return json({ error: 'upstream_error', detail: err?.message || String(err) }, status)
  }
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const config = {
  path: '/api/lelia',
}
