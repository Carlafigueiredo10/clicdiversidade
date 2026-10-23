import { useState } from 'react'
import { enviarAvaliacao } from '../../services/avaliacoes'
import { tr } from '../../i18n'

// Valores gravados no Firestore (notas, true/false, textos livres) sao os
// mesmos nos dois idiomas; so os rotulos mudam.
const T = tr({
  pt: {
    sim: 'Sim', nao: 'Não', opcional: ' · opcional',
    erro: 'Não foi possível enviar agora. Tente novamente em alguns segundos.',
    enviada: 'Avaliação enviada. Obrigada!', ajuda: 'Sua resposta ajuda a desenhar as próximas oficinas.',
    grupoTexto: 'A conversa continua no grupo do programa — trocas, dúvidas e avisos das próximas oficinas.',
    grupoCta: 'Entrar no grupo do WhatsApp ↗',
    notaGeral: 'Nota geral da oficina', notaGeralAria: 'Nota geral da oficina, de 1 a 5',
    conteudo: 'O conteúdo ajudou no seu trabalho?', conteudoAria: 'O conteúdo ajudou no seu trabalho, nota de 1 a 5',
    funcionou: 'O que mais funcionou?', funcionouPh: 'O que você levou de mais valioso da oficina.',
    melhorar: 'O que poderia melhorar?', melhorarPh: 'Ritmo, exemplos, duração, sala — o que você ajustaria.',
    recomenda: 'Recomendaria a oficina?',
    assunto: 'Sugestão de assunto para a próxima oficina', assuntoPh: 'Que tema você gostaria de ver numa próxima edição.',
    nomeOrgao: 'Nome e órgão', nomePh: 'Seu nome', nomeAria: 'Seu nome (opcional)',
    orgaoPh: 'Órgão / instituição', orgaoAria: 'Órgão ou instituição (opcional)',
    deNota: 'Dê ao menos a nota geral', pronto: 'Pronto para enviar',
    enviando: 'Enviando…', enviar: 'Enviar avaliação',
  },
  es: {
    sim: 'Sí', nao: 'No', opcional: ' · opcional',
    erro: 'No fue posible enviar en este momento. Inténtalo de nuevo en unos segundos.',
    enviada: 'Evaluación enviada. ¡Gracias!', ajuda: 'Tu respuesta ayuda a diseñar los próximos talleres.',
    grupoTexto: 'La conversación sigue en el grupo del programa — intercambios, dudas y avisos de los próximos talleres. El grupo es en portugués.',
    grupoCta: 'Entrar al grupo de WhatsApp (en portugués) ↗',
    notaGeral: 'Nota general del taller', notaGeralAria: 'Nota general del taller, de 1 a 5',
    conteudo: '¿El contenido te ayudó en tu trabajo?', conteudoAria: 'El contenido te ayudó en tu trabajo, nota de 1 a 5',
    funcionou: '¿Qué funcionó mejor?', funcionouPh: 'Lo más valioso que te llevaste del taller.',
    melhorar: '¿Qué se podría mejorar?', melhorarPh: 'Ritmo, ejemplos, duración, sala — qué ajustarías.',
    recomenda: '¿Recomendarías el taller?',
    assunto: 'Sugerencia de tema para el próximo taller', assuntoPh: 'Qué tema te gustaría ver en una próxima edición.',
    nomeOrgao: 'Nombre y organismo', nomePh: 'Tu nombre', nomeAria: 'Tu nombre (opcional)',
    orgaoPh: 'Organismo / institución', orgaoAria: 'Organismo o institución (opcional)',
    deNota: 'Pon al menos la nota general', pronto: 'Listo para enviar',
    enviando: 'Enviando…', enviar: 'Enviar evaluación',
  },
})

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
            'w-11 h-11 rounded-xl border text-sm font-semibold transition ' +
            (value === n
              ? 'border-ink bg-ink text-page shadow-sm'
              : 'border-line text-ink-soft hover:border-ink/40 hover:text-ink')
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
        {T.sim}
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
        {T.nao}
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
          <span className="text-muted font-normal">{T.opcional}</span>
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
      setErro(T.erro)
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
          {T.enviada}
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          {T.ajuda}
        </p>

        <div className="mt-8 pt-6 border-t border-line">
          <p className="text-sm text-ink-soft leading-relaxed max-w-sm mx-auto">
            {T.grupoTexto}
          </p>
          <a
            href="https://chat.whatsapp.com/Fto3ZuFagxrEF5EBRfUpIN"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-emerald-600 text-white px-7 py-3 text-sm font-medium hover:bg-emerald-700 transition"
          >
            {T.grupoCta}
          </a>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-line rounded-2xl p-6 md:p-8 space-y-7"
    >
      <Campo label={T.notaGeral} obrigatorio>
        <Nota
          value={form.nota_geral}
          onChange={set('nota_geral')}
          ariaLabel={T.notaGeralAria}
        />
      </Campo>

      <Campo label={T.conteudo}>
        <Nota
          value={form.nota_conteudo}
          onChange={set('nota_conteudo')}
          ariaLabel={T.conteudoAria}
        />
      </Campo>

      <Campo label={T.funcionou}>
        <textarea
          value={form.funcionou}
          onChange={(e) => set('funcionou')(e.target.value)}
          rows={3}
          maxLength={MAX}
          placeholder={T.funcionouPh}
          className={textareaCls}
        />
      </Campo>

      <Campo label={T.melhorar}>
        <textarea
          value={form.melhorar}
          onChange={(e) => set('melhorar')(e.target.value)}
          rows={3}
          maxLength={MAX}
          placeholder={T.melhorarPh}
          className={textareaCls}
        />
      </Campo>

      <Campo label={T.recomenda}>
        <SimNao value={form.recomenda} onChange={set('recomenda')} />
      </Campo>

      <Campo label={T.assunto}>
        <textarea
          value={form.assunto_proximo}
          onChange={(e) => set('assunto_proximo')(e.target.value)}
          rows={2}
          maxLength={MAX}
          placeholder={T.assuntoPh}
          className={textareaCls}
        />
      </Campo>

      <Campo label={T.nomeOrgao}>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            value={form.nome}
            onChange={(e) => set('nome')(e.target.value)}
            maxLength={200}
            placeholder={T.nomePh}
            aria-label={T.nomeAria}
            className={inputCls}
          />
          <input
            type="text"
            value={form.orgao}
            onChange={(e) => set('orgao')(e.target.value)}
            maxLength={200}
            placeholder={T.orgaoPh}
            aria-label={T.orgaoAria}
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
            ? T.deNota
            : T.pronto}
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
