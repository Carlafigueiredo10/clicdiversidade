import { useState } from 'react'
import CopyButton from './CopyButton'
import { INITIAL_PROMPT, BOAS_PRATICAS, BIBLIOTECA_GROUPS } from './data'
import { tr } from '../../../i18n'

const T = tr({
  pt: {
    heroEyebrow: '✦ Prompts para construir apps',
    heroTitulo: ['Construindo Aplicativos', 'com bons prompts.'],
    heroIntro: 'Tudo o que você precisa para conversar com a IA na hora de criar um app: o prompt de partida, boas práticas de escrita e uma biblioteca de prompts prontos por fase do projeto.',
    tag1: 'Pense antes',
    titulo1: 'Antes de gerar código, estruture a ideia.',
    desc1: 'Copie o prompt abaixo e cole na IA que você estiver usando. Ele ajuda a estruturar a ideia do app antes de pedir qualquer implementação.',
    promptInicio: 'Prompt de início',
    copiar: 'Copiar',
    dica: 'Dica:',
    dicaTexto: 'não tente criar o aplicativo inteiro de uma vez. Comece pela estrutura inicial, responda às perguntas da IA e evolua o projeto passo a passo.',
    etapa2: ['Etapa 2', 'Aprenda a orientar a IA'],
    tag2: 'Arsenal',
    titulo2: 'Boas Práticas de Prompt para Apps',
    desc2: 'Pequenos ajustes na forma de pedir melhoram muito o resultado. Estas práticas ajudam a obter respostas mais precisas e reduzir retrabalho na construção do aplicativo.',
    dicaN: 'Dica',
    melhor: '✓ Melhor:',
    evite: '✗ Evite:',
    etapa3: ['Etapa 3', 'Use prompts que funcionam'],
    tag3: 'Console',
    titulo3: 'Biblioteca de Prompts para Apps',
    desc3: 'Copie, cole e adapte. Organizados pela ordem natural de construção de um app — do início ao lançamento.',
  },
  es: {
    heroEyebrow: '✦ Prompts para construir apps',
    heroTitulo: ['Construyendo Aplicaciones', 'con buenos prompts.'],
    heroIntro: 'Todo lo que necesitas para conversar con la IA a la hora de crear una app: el prompt de partida, buenas prácticas de escritura y una biblioteca de prompts listos por fase del proyecto.',
    tag1: 'Piensa antes',
    titulo1: 'Antes de generar código, estructura la idea.',
    desc1: 'Copia el prompt de abajo y pégalo en la IA que estés usando. Te ayuda a estructurar la idea de la app antes de pedir cualquier implementación.',
    promptInicio: 'Prompt de inicio',
    copiar: 'Copiar',
    dica: 'Consejo:',
    dicaTexto: 'no intentes crear la aplicación entera de una vez. Empieza por la estructura inicial, responde las preguntas de la IA y haz evolucionar el proyecto paso a paso.',
    etapa2: ['Etapa 2', 'Aprende a orientar a la IA'],
    tag2: 'Arsenal',
    titulo2: 'Buenas Prácticas de Prompt para Apps',
    desc2: 'Pequeños ajustes en la forma de pedir mejoran mucho el resultado. Estas prácticas ayudan a obtener respuestas más precisas y a reducir el retrabajo al construir la aplicación.',
    dicaN: 'Consejo',
    melhor: '✓ Mejor:',
    evite: '✗ Evita:',
    etapa3: ['Etapa 3', 'Usa prompts que funcionan'],
    tag3: 'Consola',
    titulo3: 'Biblioteca de Prompts para Apps',
    desc3: 'Copia, pega y adapta. Organizados según el orden natural de construcción de una app — del inicio al lanzamiento.',
  },
})

function Eyebrow({ idx, tag }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="font-mono text-xs tracking-widest text-accent-fg font-semibold">
        {idx}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-muted">
        {tag}
      </span>
    </div>
  )
}

function EtapaDivider({ step, label }) {
  return (
    <div className="my-20 flex items-center gap-4">
      <span className="flex-1 h-px bg-line" />
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        {step}
      </span>
      <span className="text-sm text-ink-soft font-display">{label}</span>
      <span className="flex-1 h-px bg-line" />
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink text-center leading-[1.1] tracking-tight">
      {children}
    </h2>
  )
}

function SectionDesc({ children }) {
  return (
    <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
      {children}
    </p>
  )
}

export default function ConstruindoAplicativos() {
  const [grupoAtivo, setGrupoAtivo] = useState(BIBLIOTECA_GROUPS[0].id)
  const grupo = BIBLIOTECA_GROUPS.find((g) => g.id === grupoAtivo)

  return (
    <div className="mx-auto max-w-5xl">
      {/* Hero */}
      <div className="text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
          {T.heroEyebrow}
        </p>
        <h2 className="mt-6 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
          {T.heroTitulo[0]}
          <br />
          <span className="italic text-accent-fg">{T.heroTitulo[1]}</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-ink-soft text-base md:text-lg leading-relaxed">
          {T.heroIntro}
        </p>
      </div>

      {/* Etapa 1 — Prompt inicial */}
      <section className="mt-20">
        <Eyebrow idx="01" tag={T.tag1} />
        <SectionTitle>{T.titulo1}</SectionTitle>
        <SectionDesc>
          {T.desc1}
        </SectionDesc>

        <div className="mt-10 bg-card rounded-2xl border border-line overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-line">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {T.promptInicio}
            </span>
            <CopyButton
              text={INITIAL_PROMPT}
              className="text-xs px-3 py-1.5 rounded-full border border-line text-ink-soft hover:bg-page transition"
            >
              {T.copiar}
            </CopyButton>
          </div>
          <pre className="font-mono text-xs md:text-sm p-5 md:p-7 whitespace-pre-wrap break-words text-ink-soft leading-relaxed max-h-[32rem] overflow-auto">
            {INITIAL_PROMPT}
          </pre>
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 text-sm text-amber-900">
          <span aria-hidden className="text-xl shrink-0">💡</span>
          <div>
            <strong>{T.dica}</strong> {T.dicaTexto}
          </div>
        </div>
      </section>

      {/* Etapa 2 — Boas práticas */}
      <EtapaDivider step={T.etapa2[0]} label={T.etapa2[1]} />
      <section>
        <Eyebrow idx="02" tag={T.tag2} />
        <SectionTitle>{T.titulo2}</SectionTitle>
        <SectionDesc>
          {T.desc2}
        </SectionDesc>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {BOAS_PRATICAS.map((b) => (
            <div
              key={b.num}
              className="bg-card rounded-2xl border border-line p-6 flex flex-col gap-3"
            >
              <span className="font-mono text-xs tracking-widest text-accent-fg font-semibold">
                {T.dicaN} {b.num}
              </span>
              <h3 className="font-display font-semibold text-lg text-ink">
                {b.title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">{b.body}</p>
              {b.bom && (
                <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-900">
                  <span className="font-semibold">{T.melhor}</span> {b.bom}
                </div>
              )}
              {b.ruim && (
                <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-900">
                  <span className="font-semibold">{T.evite}</span> {b.ruim}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Etapa 3 — Biblioteca de Prompts */}
      <EtapaDivider step={T.etapa3[0]} label={T.etapa3[1]} />
      <section>
        <Eyebrow idx="03" tag={T.tag3} />
        <SectionTitle>{T.titulo3}</SectionTitle>
        <SectionDesc>
          {T.desc3}
        </SectionDesc>

        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {BIBLIOTECA_GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setGrupoAtivo(g.id)}
              className={
                grupoAtivo === g.id
                  ? 'text-xs px-3.5 py-1.5 rounded-full border border-accent bg-accent/10 text-accent-fg font-medium transition'
                  : 'text-xs px-3.5 py-1.5 rounded-full border border-line text-ink-soft hover:bg-card hover:text-ink transition'
              }
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {grupo.prompts.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl border border-line overflow-hidden flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 p-5 border-b border-line">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-accent-fg font-semibold">
                    {grupo.label}
                  </div>
                  <h4 className="mt-1 font-display font-semibold text-base text-ink">
                    {p.title}
                  </h4>
                </div>
                <CopyButton
                  text={p.text}
                  className="text-xs px-3 py-1.5 rounded-full border border-line text-ink-soft hover:bg-page transition shrink-0"
                >
                  {T.copiar}
                </CopyButton>
              </div>
              <pre className="font-mono text-xs p-5 whitespace-pre-wrap break-words text-ink-soft leading-relaxed flex-1">
                {p.text}
              </pre>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
