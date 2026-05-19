import Anthropic from '@anthropic-ai/sdk'
import { PERSONA_GOVERNANCA } from './_persona_governanca.js'

const MODEL = process.env.GOVERNANCA_MODEL || 'claude-opus-4-7'
const MAX_TOKENS = parseInt(process.env.GOVERNANCA_MAX_TOKENS || '16000', 10)
const THINKING_BUDGET = parseInt(process.env.GOVERNANCA_THINKING_BUDGET || '8000', 10)

const AMBIENTES_VALIDOS = new Set(['aberta', 'api', 'contratada', 'propria'])

const AMBIENTE_LABEL = {
  aberta: 'Aberta',
  api: 'Por API',
  contratada: 'Contratada',
  propria: 'Própria',
}

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

  const { messages, ambiente } = payload
  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: 'messages_required' }, 400)
  }

  const sanitized = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.slice(0, 12000) }))

  if (sanitized.length === 0 || sanitized[0].role !== 'user') {
    return json({ error: 'first_message_must_be_user' }, 400)
  }

  const systemBlocks = [
    {
      type: 'text',
      text: PERSONA_GOVERNANCA,
      cache_control: { type: 'ephemeral' },
    },
  ]

  if (ambiente && AMBIENTES_VALIDOS.has(ambiente)) {
    systemBlocks.push({
      type: 'text',
      text:
        `CONTEXTO INFORMADO PELO USUÁRIO NA SELEÇÃO PRÉVIA: o ambiente tecnológico ` +
        `deste caso é '${AMBIENTE_LABEL[ambiente]}'. Já está definido — incorpore na ` +
        `análise e não pergunte sobre ambiente.`,
    })
  }

  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      thinking: { type: 'enabled', budget_tokens: THINKING_BUDGET },
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
    console.error('[governanca] anthropic_error', err)
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
  path: '/api/governanca',
}
