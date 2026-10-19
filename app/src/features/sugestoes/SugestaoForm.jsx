import { useState } from 'react'
import { enviarSugestao } from '../../services/sugestoes'
import { tr } from '../../i18n'

const T = tr({
  pt: {
    categorias: [
      { id: 'conteudo', label: 'Conteúdo / trilhas' },
      { id: 'erro', label: 'Algo com erro' },
      { id: 'ideia', label: 'Ideia nova' },
      { id: 'outro', label: 'Outro' },
    ],
    erro: 'Não foi possível enviar agora. Tente novamente em alguns segundos.',
    enviada: 'Sugestão enviada. Obrigada!',
    lida: 'Toda sugestão é lida. O CLIC melhora com gente como você.',
    outra: 'Enviar outra →',
    placeholder: 'O que você mudaria, adicionaria ou tiraria? Pode ser um detalhe ou uma ideia grande.',
    mensagemLabel: 'Sua sugestão',
    contatoPlaceholder: 'Nome, e-mail ou WhatsApp — só se quiser resposta (opcional)',
    contatoLabel: 'Contato (opcional)',
    enviando: 'Enviando…',
    enviar: 'Enviar sugestão',
  },
  es: {
    categorias: [
      { id: 'conteudo', label: 'Contenido / rutas' },
      { id: 'erro', label: 'Algo con error' },
      { id: 'ideia', label: 'Idea nueva' },
      { id: 'outro', label: 'Otro' },
    ],
    erro: 'No fue posible enviar en este momento. Inténtalo de nuevo en unos segundos.',
    enviada: 'Sugerencia enviada. ¡Gracias!',
    lida: 'Leemos cada sugerencia. CLIC mejora con personas como tú.',
    outra: 'Enviar otra →',
    placeholder: '¿Qué cambiarías, agregarías o quitarías? Puede ser un detalle o una gran idea.',
    mensagemLabel: 'Tu sugerencia',
    contatoPlaceholder: 'Nombre, correo o WhatsApp — solo si quieres respuesta (opcional)',
    contatoLabel: 'Contacto (opcional)',
    enviando: 'Enviando…',
    enviar: 'Enviar sugerencia',
  },
})

const CATEGORIAS = T.categorias

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
      setErro(T.erro)
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
          {T.enviada}
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          {T.lida}
        </p>
        <button
          type="button"
          onClick={novaSugestao}
          className="mt-5 text-sm text-accent-fg font-medium hover:opacity-70"
        >
          {T.outra}
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
        placeholder={T.placeholder}
        aria-label={T.mensagemLabel}
        className="w-full bg-page border border-line rounded-xl px-4 py-3.5 text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-y"
      />

      <input
        type="text"
        value={contato}
        onChange={(e) => setContato(e.target.value)}
        maxLength={200}
        placeholder={T.contatoPlaceholder}
        aria-label={T.contatoLabel}
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
          {enviando ? T.enviando : T.enviar}
        </button>
      </div>
    </form>
  )
}
