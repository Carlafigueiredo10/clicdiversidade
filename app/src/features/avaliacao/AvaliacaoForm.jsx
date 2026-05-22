import { useState } from 'react'
import { enviarAvaliacao } from '../../services/avaliacoes'

const MAX = 2000

const textareaCls =
  'w-full bg-page border border-line rounded-xl px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition resize-y'
const inputCls =
  'w-full bg-page border border-line rounded-xl px-4 py-3 text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition'

// Seletor de nota 1-5 (botoes numerados).
function Nota({ value, onChange, ariaLabel }) {
  return (
    <div className="flex gap-2" role="group" aria-label={ariaLabel}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-pressed={value === n}
          className={
            'w-11 h-11 rounded-xl border text-sm font-medium transition ' +
            (value === n
              ? 'border-accent bg-accent/10 text-accent-fg'
              : 'border-line text-ink-soft hover:bg-page hover:text-ink')
          }
        >
          {n}
        </button>
      ))}
    </div>
  )
}

// Toggle Sim / Não.
function SimNao({ value, onChange }) {
  const base = 'px-5 py-2 rounded-full border text-sm font-medium transition'
  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(true)}
        aria-pressed={value === true}
        className={
          base +
          (value === true
            ? ' border-success bg-success/10 text-success-fg'
            : ' border-line text-ink-soft hover:text-ink')
        }
      >
        Sim
      </button>
      <button
        type="button"
        onClick={() => onChange(false)}
        aria-pressed={value === false}
        className={
          base +
          (value === false
            ? ' border-accent bg-accent/10 text-accent-fg'
            : ' border-line text-ink-soft hover:text-ink')
        }
      >
        Não
      </button>
    </div>
  )
}

function Campo({ label, obrigatorio, children }) {
  return (
    <div className="space-y-2.5">
      <label className="block text-sm font-medium text-ink">
        {label}
        {obrigatorio ? (
          <span className="text-accent-fg"> *</span>
        ) : (
          <span className="text-muted font-normal"> · opcional</span>
        )}
      </label>
      {children}
    </div>
  )
}

export default function AvaliacaoForm() {
  const [form, setForm] = useState({
    nota_geral: null,
    nota_conteudo: null,
    funcionou: '',
    melhorar: '',
    recomenda: null,
    assunto_proximo: '',
    nome: '',
    orgao: '',
  })
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState(null)
  const [enviado, setEnviado] = useState(false)

  function set(campo) {
    return (valor) => setForm((p) => ({ ...p, [campo]: valor }))
  }

  const podeEnviar = form.nota_geral != null && !enviando

  async function handleSubmit(e) {
    e.preventDefault()
    if (!podeEnviar) return
    setEnviando(true)
    setErro(null)
    try {
      await enviarAvaliacao(form)
      // Libera o portao do certificado (gate leve, por navegador via localStorage).
      try {
        localStorage.setItem(
          'clic_avaliacao',
          JSON.stringify({ nome: form.nome.trim(), em: new Date().toISOString() }),
        )
      } catch {
        // localStorage indisponivel (modo privado) — ignora.
      }
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

  if (enviado) {
    return (
      <div className="bg-card border border-line rounded-2xl p-8 text-center">
        <span aria-hidden className="text-3xl">
          💜
        </span>
        <h3 className="mt-3 font-display font-semibold text-xl text-ink">
          Avaliação enviada. Obrigada!
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          Sua resposta ajuda a desenhar as próximas oficinas.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-line rounded-2xl p-6 md:p-8 space-y-7"
    >
      <Campo label="Nota geral da oficina" obrigatorio>
        <Nota
          value={form.nota_geral}
          onChange={set('nota_geral')}
          ariaLabel="Nota geral da oficina, de 1 a 5"
        />
      </Campo>

      <Campo label="O conteúdo ajudou no seu trabalho?">
        <Nota
          value={form.nota_conteudo}
          onChange={set('nota_conteudo')}
          ariaLabel="O conteúdo ajudou no seu trabalho, nota de 1 a 5"
        />
      </Campo>

      <Campo label="O que mais funcionou?">
        <textarea
          value={form.funcionou}
          onChange={(e) => set('funcionou')(e.target.value)}
          rows={3}
          maxLength={MAX}
          placeholder="O que você levou de mais valioso da oficina."
          className={textareaCls}
        />
      </Campo>

      <Campo label="O que poderia melhorar?">
        <textarea
          value={form.melhorar}
          onChange={(e) => set('melhorar')(e.target.value)}
          rows={3}
          maxLength={MAX}
          placeholder="Ritmo, exemplos, duração, sala — o que você ajustaria."
          className={textareaCls}
        />
      </Campo>

      <Campo label="Recomendaria a oficina?">
        <SimNao value={form.recomenda} onChange={set('recomenda')} />
      </Campo>

      <Campo label="Sugestão de assunto para a próxima oficina">
        <textarea
          value={form.assunto_proximo}
          onChange={(e) => set('assunto_proximo')(e.target.value)}
          rows={2}
          maxLength={MAX}
          placeholder="Que tema você gostaria de ver numa próxima edição."
          className={textareaCls}
        />
      </Campo>

      <Campo label="Nome e órgão">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            value={form.nome}
            onChange={(e) => set('nome')(e.target.value)}
            maxLength={200}
            placeholder="Seu nome"
            aria-label="Seu nome (opcional)"
            className={inputCls}
          />
          <input
            type="text"
            value={form.orgao}
            onChange={(e) => set('orgao')(e.target.value)}
            maxLength={200}
            placeholder="Órgão / instituição"
            aria-label="Órgão ou instituição (opcional)"
            className={inputCls}
          />
        </div>
      </Campo>

      {erro && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl py-3 px-4">
          {erro}
        </p>
      )}

      <div className="flex items-center justify-between gap-4 pt-1">
        <span className="text-xs text-muted">
          {form.nota_geral == null
            ? 'Dê ao menos a nota geral'
            : 'Pronto para enviar'}
        </span>
        <button
          type="submit"
          disabled={!podeEnviar}
          className="rounded-full bg-ink text-page px-7 py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {enviando ? 'Enviando…' : 'Enviar avaliação'}
        </button>
      </div>
    </form>
  )
}
