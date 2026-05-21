import { useState } from 'react'
import { enviarSugestao } from '../../services/sugestoes'

const CATEGORIAS = [
  { id: 'conteudo', label: 'Conteúdo / trilhas' },
  { id: 'erro', label: 'Algo com erro' },
  { id: 'ideia', label: 'Ideia nova' },
  { id: 'outro', label: 'Outro' },
]

const MAX = 2000

export default function SugestaoForm() {
  const [categoria, setCategoria] = useState('ideia')
  const [mensagem, setMensagem] = useState('')
  const [contato, setContato] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState(null)
  const [enviado, setEnviado] = useState(false)

  const podeEnviar = mensagem.trim().length > 0 && !enviando

  async function handleSubmit(e) {
    e.preventDefault()
    if (!podeEnviar) return
    setEnviando(true)
    setErro(null)
    try {
      await enviarSugestao({ categoria, mensagem, contato })
      setEnviado(true)
    } catch (err) {
      console.error(err)
      setErro(
        'Não foi possível enviar agora. Tente novamente em alguns segundos.',
      )
    } finally {
      setEnviando(false)
    }
  }

  function novaSugestao() {
    setEnviado(false)
    setMensagem('')
    setContato('')
    setCategoria('ideia')
  }

  if (enviado) {
    return (
      <div className="bg-card border border-line rounded-2xl p-8 text-center">
        <span aria-hidden className="text-3xl">
          💜
        </span>
        <h3 className="mt-3 font-display font-semibold text-xl text-ink">
          Sugestão enviada. Obrigada!
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          Toda sugestão é lida. O CLIC melhora com gente como você.
        </p>
        <button
          type="button"
          onClick={novaSugestao}
          className="mt-5 text-sm text-accent-fg font-medium hover:opacity-70"
        >
          Enviar outra →
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-line rounded-2xl p-6 md:p-8 space-y-5"
    >
      <div className="flex flex-wrap gap-2">
        {CATEGORIAS.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategoria(c.id)}
            className={
              categoria === c.id
                ? 'text-xs px-3.5 py-1.5 rounded-full border border-accent bg-accent/10 text-accent-fg font-medium transition'
                : 'text-xs px-3.5 py-1.5 rounded-full border border-line text-ink-soft hover:bg-page hover:text-ink transition'
            }
          >
            {c.label}
          </button>
        ))}
      </div>

      <textarea
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        rows={5}
        maxLength={MAX}
        required
        placeholder="O que você mudaria, adicionaria ou tiraria? Pode ser um detalhe ou uma ideia grande."
        aria-label="Sua sugestão"
        className="w-full bg-page border border-line rounded-xl px-4 py-3.5 text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-y"
      />

      <input
        type="text"
        value={contato}
        onChange={(e) => setContato(e.target.value)}
        maxLength={200}
        placeholder="Nome, e-mail ou WhatsApp — só se quiser resposta (opcional)"
        aria-label="Contato (opcional)"
        className="w-full bg-page border border-line rounded-xl px-4 py-3.5 text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
      />

      {erro && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl py-3 px-4">
          {erro}
        </p>
      )}

      <div className="flex items-center justify-between gap-4">
        <span className="text-xs text-muted tabular-nums">
          {mensagem.length}/{MAX}
        </span>
        <button
          type="submit"
          disabled={!podeEnviar}
          className="rounded-full bg-ink text-page px-7 py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {enviando ? 'Enviando…' : 'Enviar sugestão'}
        </button>
      </div>
    </form>
  )
}
