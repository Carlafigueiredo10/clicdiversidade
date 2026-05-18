// Client para a function /api/lelia (Netlify Functions).
// Em producao: chamada same-origin. Em dev (vite + netlify dev), proxy via /api.

const ENDPOINT = '/api/lelia'

export async function conversarComLelia({ messages, page }) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, page }),
  })

  if (!res.ok) {
    let detail = ''
    try {
      const body = await res.json()
      detail = body?.detail || body?.error || ''
    } catch {
      // ignora
    }
    throw new Error(`lelia_http_${res.status}${detail ? ': ' + detail : ''}`)
  }

  return res.json()
}
