import { useState } from 'react'
import CopyButton from './CopyButton'
import {
  INITIAL_PROMPT,
  PIPELINE,
  GLOSSARIO,
  RESUMO_GLOSSARIO,
  BOAS_PRATICAS,
  BIBLIOTECA_GROUPS,
  STACK_ITEMS,
  LOVABLE_CLOUD,
  RESUMO_STACK,
  ERROS_COMUNS,
  CREDITOS_STATS,
  CREDITOS_DICAS,
  HERO_STATS,
} from './data'

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

function ResumoTable({ rows, title }) {
  return (
    <div className="bg-card rounded-2xl border border-line p-6 md:p-8">
      <div className="font-display font-semibold text-base text-ink mb-4">
        {title}
      </div>
      <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
        {rows.map(([key, val]) => (
          <div
            key={key}
            className="flex gap-3 border-b border-line/60 py-1.5"
          >
            <dt className="font-medium text-ink min-w-32">{key}</dt>
            <dd className="text-ink-soft">{val}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function Roteiro() {
  const [grupoAtivo, setGrupoAtivo] = useState(BIBLIOTECA_GROUPS[0].id)
  const grupo = BIBLIOTECA_GROUPS.find((g) => g.id === grupoAtivo)

  return (
    <div className="mx-auto max-w-5xl">
      {/* Hero stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {HERO_STATS.map((s) => (
          <div
            key={s.l}
            className="bg-card rounded-2xl border border-line p-4 text-center"
          >
            <div className="font-display font-semibold text-xl md:text-2xl text-ink">
              {s.n}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-muted mt-1">
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://lovable.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-ink text-page px-7 py-3 text-sm font-medium hover:opacity-90 transition inline-flex items-center gap-2"
        >
          Abrir Lovable
          <span aria-hidden>↗</span>
        </a>
      </div>

      {/* Comece agora */}
      <section className="mt-20">
        <Eyebrow idx="00" tag="Comece agora" />
        <SectionTitle>Antes de continuar lendo, dê o primeiro passo.</SectionTitle>
        <SectionDesc>
          Copie o prompt abaixo e cole na IA que você estiver usando. Ele ajuda
          a estruturar a ideia do app antes de gerar qualquer código.
        </SectionDesc>

        <div className="mt-10 bg-card rounded-2xl border border-line overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-line">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
              Prompt de início
            </span>
            <CopyButton
              text={INITIAL_PROMPT}
              className="text-xs px-3 py-1.5 rounded-full border border-line text-ink-soft hover:bg-page transition"
            >
              Copiar
            </CopyButton>
          </div>
          <pre className="font-mono text-xs md:text-sm p-5 md:p-7 whitespace-pre-wrap break-words text-ink-soft leading-relaxed max-h-96 overflow-auto">
            {INITIAL_PROMPT}
          </pre>
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 text-sm text-amber-900">
          <span aria-hidden className="text-xl shrink-0">💡</span>
          <div>
            <strong>Dica:</strong> não tente criar o aplicativo inteiro de uma
            vez. Comece pela estrutura inicial, responda às perguntas da IA e
            evolua o projeto passo a passo.
          </div>
        </div>
      </section>

      {/* Etapa 1 — Pipeline */}
      <EtapaDivider step="Etapa 1" label="Entenda o processo" />
      <section>
        <Eyebrow idx="01" tag="Processo" />
        <SectionTitle>Do Zero ao Deploy</SectionTitle>
        <SectionDesc>
          Um método simples para transformar uma ideia em um aplicativo
          publicado na internet, usando apenas prompts e alguns ajustes
          visuais.
        </SectionDesc>

        <ol className="mt-14 space-y-8">
          {PIPELINE.map((p) => (
            <li key={p.num} className="grid grid-cols-[auto_1fr] gap-5 md:gap-8">
              <div className="font-mono text-2xl md:text-3xl text-accent-fg font-semibold tabular-nums">
                {p.num}
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-widest text-accent-fg">
                  {p.phase}
                </div>
                <h3 className="mt-2 font-display font-semibold text-xl md:text-2xl text-ink leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Etapa 2 — Glossário */}
      <EtapaDivider step="Etapa 2" label="Aprenda o vocabulário" />
      <section>
        <Eyebrow idx="02" tag="Glossário" />
        <SectionTitle>Vocabulário Essencial</SectionTitle>
        <SectionDesc>
          Antes de construir, é preciso falar a mesma língua. Oito conceitos
          que aparecem em todo projeto digital.
        </SectionDesc>

        <div className="mt-12 bg-card rounded-2xl border border-line divide-y divide-line overflow-hidden">
          {GLOSSARIO.map((g) => (
            <details key={g.name} className="group">
              <summary className="cursor-pointer flex items-center gap-4 px-5 py-4 list-none [&::-webkit-details-marker]:hidden hover:bg-page transition">
                <span className="text-2xl shrink-0" aria-hidden>
                  {g.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-base text-ink">
                    {g.name}
                  </div>
                  <div className="text-xs text-muted">{g.hint}</div>
                </div>
                <span
                  aria-hidden
                  className="text-ink-soft transition-transform group-open:rotate-180"
                >
                  ↓
                </span>
              </summary>
              <div className="px-5 pb-5 pl-16 space-y-3 text-sm">
                <p className="text-ink-soft leading-relaxed">{g.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider bg-page border border-line text-ink-soft rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="italic text-accent-fg">{g.analogy}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8">
          <ResumoTable title="Resumo rápido" rows={RESUMO_GLOSSARIO} />
        </div>
      </section>

      {/* Etapa 3 — Boas práticas */}
      <EtapaDivider step="Etapa 3" label="Aprenda a orientar a IA" />
      <section>
        <Eyebrow idx="03" tag="Arsenal" />
        <SectionTitle>Boas Práticas de Prompt</SectionTitle>
        <SectionDesc>
          Pequenos ajustes na forma de pedir melhoram muito o resultado. Estas
          práticas ajudam a obter respostas mais precisas e reduzir
          retrabalho.
        </SectionDesc>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {BOAS_PRATICAS.map((b) => (
            <div
              key={b.num}
              className="bg-card rounded-2xl border border-line p-6 flex flex-col gap-3"
            >
              <span className="font-mono text-xs tracking-widest text-accent-fg font-semibold">
                Dica {b.num}
              </span>
              <h3 className="font-display font-semibold text-lg text-ink">
                {b.title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">{b.body}</p>
              {b.bom && (
                <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-900">
                  <span className="font-semibold">✓ Melhor:</span> {b.bom}
                </div>
              )}
              {b.ruim && (
                <div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-900">
                  <span className="font-semibold">✗ Evite:</span> {b.ruim}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Etapa 4 — Biblioteca de Prompts */}
      <EtapaDivider step="Etapa 4" label="Use prompts que funcionam" />
      <section>
        <Eyebrow idx="04" tag="Console" />
        <SectionTitle>Prompts Prontos</SectionTitle>
        <SectionDesc>
          Copie, cole e adapte. Organizados pela ordem natural de construção
          de um app — do início ao lançamento.
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
                  Copiar
                </CopyButton>
              </div>
              <pre className="font-mono text-xs p-5 whitespace-pre-wrap break-words text-ink-soft leading-relaxed flex-1">
                {p.text}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Etapa 5 — Stack */}
      <EtapaDivider step="Etapa 5" label="Entenda o que está por trás" />
      <section>
        <Eyebrow idx="05" tag="Fundamentos" />
        <SectionTitle>Stack & Arquitetura</SectionTitle>
        <SectionDesc>
          Tudo que você constrói na Lovable roda sobre uma base tecnológica já
          pronta. Você não precisa dominar essas ferramentas para começar, mas
          entender o papel de cada uma ajuda a tomar decisões melhores.
        </SectionDesc>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STACK_ITEMS.map((s) => (
            <div
              key={s.name}
              className="bg-card rounded-2xl border border-line p-5"
            >
              <div className="font-display font-semibold text-ink">
                {s.name}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-accent-fg mt-1">
                {s.role}
              </div>
              <p className="mt-3 text-xs text-ink-soft leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-card rounded-2xl border border-line p-6 md:p-8">
          <div className="font-display font-semibold text-base text-ink">
            Componentes UI — shadcn/ui
          </div>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            A Lovable já trabalha com uma biblioteca de componentes prontos.
            Você não começa do zero: já tem botões, cards, modais, abas e
            tabelas estilizados, o que acelera muito a construção da interface.
          </p>
        </div>

        <div className="mt-4 bg-card rounded-2xl border border-line p-6 md:p-8">
          <div className="font-display font-semibold text-base text-ink mb-4">
            Lovable Cloud — estrutura já integrada
          </div>
          <p className="text-sm text-ink-soft leading-relaxed mb-5">
            A Lovable também entrega a parte estrutural do sistema já
            integrada. Isso reduz bastante a complexidade para quem está
            começando.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {LOVABLE_CLOUD.map((c) => (
              <div key={c.name} className="flex gap-3 items-start">
                <span className="text-xl shrink-0" aria-hidden>
                  {c.icon}
                </span>
                <div>
                  <div className="font-medium text-sm text-ink">{c.name}</div>
                  <div className="text-xs text-ink-soft leading-relaxed">
                    {c.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <ResumoTable title="Resumo simples" rows={RESUMO_STACK} />
          <p className="mt-4 text-sm text-ink-soft leading-relaxed">
            A plataforma já entrega toda essa base técnica. Seu foco principal,
            no começo, é aprender a descrever bem o que quer construir.
          </p>
        </div>
      </section>

      {/* Etapa 6 — Erros comuns */}
      <EtapaDivider step="Etapa 6" label="Evite os erros mais comuns" />
      <section>
        <Eyebrow idx="06" tag="Contenção" />
        <SectionTitle>Erros Comuns</SectionTitle>
        <SectionDesc>
          Alguns erros parecem pequenos, mas costumam gerar retrabalho e perda
          de tempo. Evitá-los desde o início deixa a construção muito mais
          simples.
        </SectionDesc>

        <div className="mt-12 bg-card rounded-2xl border border-line overflow-hidden">
          <div className="grid grid-cols-2 border-b border-line">
            <div className="px-5 py-3 text-xs uppercase tracking-widest text-rose-700 font-semibold border-r border-line">
              ✗ Não faça
            </div>
            <div className="px-5 py-3 text-xs uppercase tracking-widest text-emerald-700 font-semibold">
              ✓ Faça
            </div>
          </div>
          {ERROS_COMUNS.map(([nao, sim], i) => (
            <div
              key={i}
              className={
                'grid grid-cols-2 text-sm ' +
                (i < ERROS_COMUNS.length - 1 ? 'border-b border-line/60' : '')
              }
            >
              <div className="px-5 py-4 text-ink-soft border-r border-line/60">
                {nao}
              </div>
              <div className="px-5 py-4 text-ink">{sim}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Etapa 7 — Créditos */}
      <EtapaDivider step="Etapa 7" label="Cuide dos seus recursos" />
      <section>
        <Eyebrow idx="07" tag="Recursos" />
        <SectionTitle>Créditos & Plano Free</SectionTitle>
        <SectionDesc>
          Créditos são escassos — use-os com intenção, não com pressa.
        </SectionDesc>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {CREDITOS_STATS.map((s) => (
            <div
              key={s.label}
              className="bg-card rounded-2xl border border-line p-5 text-center"
            >
              <div className="font-display font-semibold text-2xl md:text-3xl text-ink">
                {s.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-muted mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <blockquote className="mt-8 italic text-center text-lg md:text-xl text-accent-fg max-w-xl mx-auto font-display">
          "Créditos são escassos — use-os com intenção, não com pressa."
        </blockquote>

        <ul className="mt-8 space-y-3">
          {CREDITOS_DICAS.map((d, i) => (
            <li
              key={i}
              className="bg-card rounded-2xl border border-line p-4 flex gap-4 items-start"
            >
              <span className="font-mono text-xs text-accent-fg font-semibold tabular-nums w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <p className="text-sm text-ink leading-relaxed">{d}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Final */}
      <section className="mt-32 text-center">
        <span className="inline-block text-[10px] uppercase tracking-widest text-accent-fg font-semibold mb-6">
          ✦ Hora de construir
        </span>
        <h2 className="font-display font-semibold text-4xl md:text-6xl text-ink leading-[1.05]">
          Agora
          <br />é <span className="italic text-accent-fg">com você.</span>
        </h2>
        <p className="mt-8 max-w-md mx-auto text-ink-soft leading-relaxed">
          Abra a Lovable, crie um projeto novo e use os prompts desta página.
          Em 20 minutos você tem um app publicado.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink text-page px-7 py-3 text-sm font-medium hover:opacity-90 transition inline-flex items-center gap-2"
          >
            Abrir Lovable
            <span aria-hidden>↗</span>
          </a>
          <a
            href="/jornada/#modulos"
            className="rounded-full border border-line px-7 py-3 text-sm text-ink-soft hover:bg-card transition"
          >
            ← Voltar aos módulos
          </a>
        </div>
      </section>
    </div>
  )
}
