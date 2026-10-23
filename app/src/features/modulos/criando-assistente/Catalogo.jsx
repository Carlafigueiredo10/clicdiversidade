import { useState } from 'react'
import { AGENTES, TIPOS, skillMarkdown } from './catalogo-dados'
import { LANG, tr } from '../../../i18n'

const T = tr({
  pt: {
    eyebrow: 'O catálogo',
    titulo: 'Agentes prontos do CLIC',
    intro:
      'Escolha um agente, copie as instruções para qualquer IA ou baixe o arquivo de skill e suba no Gemini. O catálogo cresce: novos agentes entram aqui.',
    todos: 'Todos',
    copiar: 'Copiar instruções',
    copiado: '✓ Copiado',
    baixar: 'Baixar SKILL.md',
    ficha: 'Ver ficha completa',
    fechar: 'Fechar',
    verInstrucoes: 'Ver instruções',
    cuidado: 'Cuidado',
    comoUsar:
      'Gemini: Personalizar → Skills → Criar → Enviar, e escolha o SKILL.md. Claude: coloque o SKILL.md numa pasta com o nome da skill, compacte em .zip e envie em Personalizar → Skills. Qualquer outra IA: use “Copiar instruções”.',
  },
  es: {
    eyebrow: 'El catálogo',
    titulo: 'Agentes listos de CLIC',
    intro:
      'Elige un agente, copia las instrucciones para cualquier IA o descarga el archivo de skill y súbelo a Gemini. El catálogo crece: los nuevos agentes entran aquí.',
    todos: 'Todos',
    copiar: 'Copiar instrucciones',
    copiado: '✓ Copiado',
    baixar: 'Descargar SKILL.md',
    ficha: 'Ver ficha completa',
    fechar: 'Cerrar',
    verInstrucoes: 'Ver instrucciones',
    cuidado: 'Cuidado',
    comoUsar:
      'Gemini: Personalizar → Skills → Crear → Subir, y elige el SKILL.md. Claude: pon el SKILL.md en una carpeta con el nombre de la skill, comprímela en .zip y súbela en Personalizar → Skills. Cualquier otra IA: usa “Copiar instrucciones”.',
  },
})

function baixar(agente) {
  const blob = new Blob([skillMarkdown(agente)], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'SKILL.md'
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

function Card({ agente, aberto, onAbrir }) {
  const [copiado, setCopiado] = useState(false)

  async function copiar() {
    try {
      await navigator.clipboard.writeText(agente.prompt)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch (e) {
      console.error('Copy failed:', e)
    }
  }

  // A ficha anotada existe so em portugues; em espanhol mostramos as instrucoes.
  const temFicha = LANG === 'pt' && agente.Ficha

  return (
    <article className="bg-card border border-line rounded-2xl p-6 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <span className="text-3xl" aria-hidden>
          {agente.icon}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-accent-fg border border-accent/30 bg-accent/10 rounded-full px-2.5 py-0.5">
          {TIPOS[agente.tipo]}
        </span>
      </div>
      <h3 className="mt-4 font-display font-semibold text-xl text-ink leading-tight">
        {agente.nome}
      </h3>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{agente.paraQue}</p>
      {agente.nota && <p className="mt-3 text-xs text-muted leading-relaxed">{agente.nota}</p>}
      <p className="mt-4 text-xs text-ink-soft bg-page border border-line rounded-lg px-3 py-2 leading-relaxed">
        <strong className="text-ink">{T.cuidado}:</strong> {agente.cuidado}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={copiar}
          className="rounded-full bg-ink text-page px-4 py-2 text-xs font-medium hover:opacity-90 transition"
        >
          {copiado ? T.copiado : T.copiar}
        </button>
        <button
          type="button"
          onClick={() => baixar(agente)}
          className="rounded-full border border-line px-4 py-2 text-xs font-medium text-ink hover:bg-page transition"
        >
          {T.baixar}
        </button>
        <button
          type="button"
          onClick={onAbrir}
          aria-expanded={aberto}
          className="rounded-full px-3 py-2 text-xs font-medium text-accent-fg hover:opacity-70 transition"
        >
          {aberto ? T.fechar : temFicha ? T.ficha : T.verInstrucoes} {aberto ? '↑' : '↓'}
        </button>
      </div>
    </article>
  )
}

export default function Catalogo() {
  const [filtro, setFiltro] = useState('todos')
  const [aberto, setAberto] = useState(null)
  const lista = AGENTES.filter((a) => filtro === 'todos' || a.tipo === filtro)
  const atual = AGENTES.find((a) => a.id === aberto)

  return (
    <div>
      <header className="text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
          {T.eyebrow}
        </p>
        <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
          {T.titulo}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-ink-soft leading-relaxed">{T.intro}</p>
      </header>

      <div className="mt-8 flex flex-wrap justify-center gap-2" role="group">
        {['todos', ...Object.keys(TIPOS)].map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={filtro === t}
            onClick={() => setFiltro(t)}
            className={
              filtro === t
                ? 'text-xs px-3.5 py-1.5 rounded-full border border-accent bg-accent/10 text-accent-fg font-medium transition'
                : 'text-xs px-3.5 py-1.5 rounded-full border border-line text-ink-soft hover:bg-card hover:text-ink transition'
            }
          >
            {t === 'todos' ? T.todos : TIPOS[t]}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lista.map((a) => (
          <Card
            key={a.id}
            agente={a}
            aberto={aberto === a.id}
            onAbrir={() => setAberto(aberto === a.id ? null : a.id)}
          />
        ))}
      </div>

      <p className="mt-6 max-w-3xl mx-auto text-center text-xs text-muted leading-relaxed">
        {T.comoUsar}
      </p>

      {atual && (
        <section className="mt-12 pt-10 border-t border-line" id={`ficha-${atual.id}`}>
          {LANG === 'pt' && atual.Ficha ? (
            <atual.Ficha />
          ) : (
            <div className="bg-card rounded-2xl border border-line overflow-hidden">
              <div className="px-5 py-3 border-b border-line font-mono text-[11px] uppercase tracking-widest text-muted">
                {atual.nome}
              </div>
              <pre className="font-mono text-xs md:text-sm p-5 md:p-7 whitespace-pre-wrap break-words text-ink-soft leading-relaxed max-h-[600px] overflow-auto">
                {atual.prompt}
              </pre>
            </div>
          )}
        </section>
      )}
    </div>
  )
}
