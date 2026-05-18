import { useState } from 'react'
import { EIXOS } from '../../features/modulos/governanca/data'

const TABS = [
  { id: 'framework', label: 'Framework' },
  { id: 'aie', label: 'Autoavaliação (AIE)' },
  { id: 'base', label: 'Base Teórica' },
]

function FrameworkTab() {
  return (
    <div className="mx-auto max-w-3xl text-center py-12">
      <span aria-hidden className="text-4xl">
        🤖
      </span>
      <h2 className="mt-6 font-display font-semibold text-2xl md:text-4xl text-ink leading-tight">
        Agente de Governança de IA
      </h2>
      <p className="mt-6 max-w-2xl mx-auto text-ink-soft leading-relaxed">
        Em breve, esta aba terá o agente de mediação de risco integrado:
        chat com a Lélia em modo <strong>Mediação de Risco</strong>, com 3
        motores (Jurídico / Ético / Operacional), 5 camadas dedutivas e Rastro
        Decisório (extrato pronto para anexar ao SEI).
      </p>
      <div className="mt-10 bg-card border border-line rounded-2xl p-6 md:p-8 text-left">
        <h3 className="font-display font-semibold text-base text-ink mb-4">
          O que o agente faz
        </h3>
        <ul className="space-y-3 text-sm text-ink-soft leading-relaxed">
          <li>
            <strong className="text-ink">Classifica o caso</strong> em uma de
            cinco categorias (Permitido / Permitido com condições / Alto risco
            — exige redesenho / Não recomendado no formato atual / Risco
            Excessivo).
          </li>
          <li>
            <strong className="text-ink">Aponta o problema e o motivo</strong>{' '}
            com base normativa (LGPD, LAI, Portaria MGI, AIE) e ética
            (proporcionalidade, reversibilidade, diversidade arquitetural).
          </li>
          <li>
            <strong className="text-ink">Oferece o caminho</strong> de
            mitigação ou redesenho — viabilizadora, não censora.
          </li>
          <li>
            <strong className="text-ink">Provoca a reflexão</strong> com 2–5
            perguntas abertas sobre os pilares de diversidade que o caso não
            declarou.
          </li>
          <li>
            <strong className="text-ink">Gera o Rastro Decisório</strong> —
            extrato estruturado em Markdown que você anexa ao processo.
          </li>
        </ul>
      </div>
      <p className="mt-8 text-xs text-muted">
        Persona inspirada em Lélia Gonzalez. Princípios fundadores:{' '}
        <em>Supervisão por Design</em> e <em>Diversidade é Arquitetura</em>.
      </p>
    </div>
  )
}

function AIETab() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center mb-8">
        <h2 className="font-display font-semibold text-2xl md:text-4xl text-ink leading-tight">
          Autoavaliação de Impacto Ético (AIE)
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-ink-soft leading-relaxed">
          Jornada de reflexão em duas partes: avaliação de risco do projeto +
          questionário detalhado conforme o nível identificado. Versão BETA.
        </p>
      </div>
      <div className="bg-card border border-line rounded-2xl overflow-hidden">
        <iframe
          src="/jornada/aie.html"
          title="Autoavaliação de Impacto Ético (AIE)"
          className="w-full"
          style={{ height: '1600px', border: 0 }}
          loading="lazy"
        />
      </div>
      <p className="mt-6 text-center text-xs text-muted">
        Versão integrada do framework AIE-BR. Os dados são processados
        localmente no seu navegador — nada é enviado para servidores externos.
      </p>
    </div>
  )
}

function BaseTeoricaTab() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-8">
        <h2 className="font-display font-semibold text-2xl md:text-4xl text-ink leading-tight">
          Base Teórica e Normativa
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-ink-soft leading-relaxed">
          Tudo o que esta análise pisa, visível. Bibliografia não é enfeite:
          cada item está amarrado ao conceito que ele ancora.
        </p>
      </div>

      {/* Nav eixos */}
      <nav className="flex flex-wrap gap-2 justify-center mb-12">
        {EIXOS.map((e) => (
          <a
            key={e.id}
            href={`#eixo-${e.id}`}
            className="text-xs px-3 py-1.5 rounded-full border border-line text-ink-soft hover:bg-card hover:text-ink transition"
          >
            <span aria-hidden className="mr-1.5">
              {e.icon}
            </span>
            {e.titulo.split(',')[0].split('e ')[0].slice(0, 30)}
          </a>
        ))}
      </nav>

      <div className="space-y-16">
        {EIXOS.map((eixo) => (
          <section
            key={eixo.id}
            id={`eixo-${eixo.id}`}
            className="scroll-mt-8"
          >
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-line">
              <span aria-hidden className="text-2xl shrink-0">
                {eixo.icon}
              </span>
              <h3 className="font-display font-semibold text-lg md:text-xl text-ink leading-tight">
                {eixo.titulo}
              </h3>
            </div>
            <p className="text-sm text-ink-soft leading-relaxed mb-6">
              {eixo.subtitulo}
            </p>

            <div className="space-y-3">
              {eixo.refs.map((ref, i) => (
                <article
                  key={i}
                  className="bg-card border border-line rounded-xl p-5 transition hover:border-accent/40"
                >
                  <h4 className="font-display font-semibold text-base text-ink leading-snug">
                    {ref.titulo}
                  </h4>
                  {ref.meta && (
                    <div className="mt-2 text-xs text-muted">
                      {Object.entries(ref.meta).map(([k, v], j) => (
                        <span key={k}>
                          {j > 0 && ' · '}
                          <strong className="text-ink-soft font-medium">
                            {k}:
                          </strong>{' '}
                          {v}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                    {ref.descricao}
                  </p>
                  {ref.videos && (
                    <ul className="mt-3 space-y-1 text-xs text-ink-soft">
                      {ref.videos.map((v, j) => (
                        <li key={j} className="flex gap-2">
                          <span aria-hidden className="text-amber-600 shrink-0">
                            ▸
                          </span>
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {ref.link && (
                    <a
                      href={ref.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent-fg hover:opacity-70 transition"
                    >
                      {ref.linkText || 'Acessar'}
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-16 text-center text-xs text-muted">
        Referências unificadas do projeto Servidoras no Comando e do Agente de
        Governança de IA.
      </p>
    </div>
  )
}

export default function Governanca() {
  const [tab, setTab] = useState('framework')

  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Módulo 06 · Governança de IA
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          Governança de IA
          <br />
          <span className="italic text-accent-fg">no setor público</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Agente de mediação de risco, autoavaliação de impacto ético (AIE) e
          base teórica unificada para construir IAs mais justas, transparentes
          e responsáveis.
        </p>

        <div className="mt-12 flex justify-center">
          <div
            role="tablist"
            className="inline-flex rounded-full border border-line bg-card p-1"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={
                  'rounded-full px-5 py-2 text-sm font-medium transition ' +
                  (tab === t.id
                    ? 'bg-ink text-page'
                    : 'text-ink-soft hover:text-ink')
                }
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          {tab === 'framework' && <FrameworkTab />}
          {tab === 'aie' && <AIETab />}
          {tab === 'base' && <BaseTeoricaTab />}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/jornada/#modulos"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink-soft hover:bg-card transition"
          >
            ← Voltar aos módulos
          </a>
        </div>
      </div>
    </main>
  )
}
