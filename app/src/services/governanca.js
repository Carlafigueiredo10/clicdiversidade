// Client para a function /api/governanca (Netlify Functions).
// Agente Lelia em modo Mediacao de Risco.

const ENDPOINT = '/api/governanca'

export async function consultarGovernanca({ messages, ambiente }) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, ambiente }),
  })

  if (!res.ok) {
    let detail = ''
    try {
      const body = await res.json()
      detail = body?.detail || body?.error || ''
    } catch {
      // ignora
    }
    throw new Error(`governanca_http_${res.status}${detail ? ': ' + detail : ''}`)
  }

  return res.json()
}
