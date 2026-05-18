import Anthropic from '@anthropic-ai/sdk'
import { PERSONA } from './_persona.js'

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

  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: [
        {
          type: 'text',
          text: PERSONA + contextHint,
          cache_control: { type: 'ephemeral' },
        },
      ],
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
