import { Link } from 'react-router-dom'

const ENTREGAS = [
  {
    titulo: 'Mediação de risco',
    descricao:
      'Analisa o uso pretendido de IA e identifica riscos jurídicos, éticos e operacionais.',
  },
  {
    titulo: 'Autoavaliação AIE',
    descricao:
      'Aplica o framework do MGI para classificar o nível de risco do caso.',
  },
  {
    titulo: 'Rastro Decisório',
    descricao:
      'Gera documentação estruturada pronta para anexar ao processo.',
  },
]

const PASSOS = [
  {
    n: '01',
    titulo: 'Descreva o uso',
    descricao: 'Conte para a Lélia o que você quer fazer com IA, em linguagem natural.',
  },
  {
    n: '02',
    titulo: 'Informe o ambiente',
    descricao: 'Aberta, por API, contratada ou própria. A régua de risco muda com isso.',
  },
  {
    n: '03',
    titulo: 'Receba a análise',
    descricao: 'Classificação, problema, motivo, caminhos e perguntas para aprofundar.',
  },
  {
    n: '04',
    titulo: 'Gere o documento',
    descricao: 'Baixe o Rastro Decisório em Markdown e anexe ao processo.',
  },
]

const DESFECHOS = [
  {
    emoji: '✅',
    titulo: 'Permitido',
    descricao: 'Uso compatível com boas práticas. Pode prosseguir.',
    exemplo: 'Traduzir trechos de uma norma já publicada no DOU para envio a parceiro internacional.',
    borda: 'border-emerald-500/40',
  },
  {
    emoji: '⚠️',
    titulo: 'Permitido com condições',
    descricao: 'Exige mitigações (anonimização, ambiente institucional, revisão humana, cláusulas contratuais). É onde cai a maior parte dos casos.',
    exemplo: 'Resumir atas de reunião interna usando versão enterprise da IA, identificando o uso de IA no documento.',
    borda: 'border-amber-400/50',
  },
  {
    emoji: '⚠️',
    titulo: 'Alto risco — viabilizar exige redesenho',
    descricao: 'Risco alto, mas viabilizável mudando o escopo do que a IA faz.',
    exemplo: 'Chatbot decidindo automaticamente respostas LAI. Caminho: triar casos simples + encaminhar complexos a servidor humano.',
    borda: 'border-orange-500/50',
  },
  {
    emoji: '❌',
    titulo: 'Não recomendado no formato atual',
    descricao: 'Desenho incompatível com princípios institucionais — a Lélia indica caminho alternativo.',
    exemplo: 'Analisar prontuários médicos no Gemini público. Caminho: ambiente segregado + base legal + supervisão técnica.',
    borda: 'border-red-500/40',
  },
  {
    emoji: '🛑',
    titulo: 'Risco Excessivo',
    descricao: 'Uso vedado por contrariar direitos fundamentais. Recomenda interrupção do projeto.',
    exemplo: 'Reconhecimento facial em massa em manifestações públicas. Vigilância biométrica indiscriminada é Red Line do AIE.',
    borda: 'border-red-700/50',
  },
]

const LIMITES = [
  {
    titulo: 'Não substitui parecer jurídico',
    descricao: 'Decisões com efeito jurídico definitivo seguem com a consultoria do órgão.',
  },
  {
    titulo: 'Classificação é orientativa',
    descricao: 'Detalhes não declarados mudam a régua. Por isso a Lélia faz perguntas para aprofundar.',
  },
  {
    titulo: 'Exige revisão humana',
    descricao: 'Toda recomendação é insumo. A decisão final cabe ao servidor responsável.',
  },
  {
    titulo: 'Sobre os dados que você envia',
    descricao: 'Uso "Por API" do Claude (Anthropic), sem treinamento. Mesmo assim, não insira dados sensíveis ou sigilosos.',
  },
]

function MetaCTA() {
  return (
    <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-soft">
      <li className="flex items-center gap-2">
        <span aria-hidden>⏱</span>
        <span>Leva cerca de 5 minutos</span>
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden>📄</span>
        <span>Gera documento exportável</span>
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden>👤</span>
        <span>Requer revisão humana final</span>
      </li>
    </ul>
  )
}

function MetaCTADark() {
  return (
    <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-page/70">
      <li className="flex items-center gap-2">
        <span aria-hidden>⏱</span>
        <span>Leva cerca de 5 minutos</span>
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden>📄</span>
        <span>Gera documento exportável</span>
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden>👤</span>
        <span>Requer revisão humana final</span>
      </li>
    </ul>
  )
}

export default function Governanca() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-page px-5 pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            Módulo 06 · Governança de IA
          </p>
          <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink leading-[1.05]">
            Governança de IA
            <br />
            <span className="italic text-accent-fg">no setor público</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-ink-soft text-base md:text-lg leading-relaxed">
            Avalie riscos no uso de IA e gere um rastro decisório para processos
            institucionais.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://avaliadados.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink text-page px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Iniciar análise com a Lélia ↗
            </a>
            <Link
              to="/modulos/governanca/aie"
              className="rounded-full border border-line bg-card text-ink px-6 py-3 text-sm font-medium hover:border-accent/40 transition"
            >
              Fazer autoavaliação (AIE)
            </Link>
          </div>

          <MetaCTA />

          <div className="mt-12 inline-flex items-center gap-3 text-xs md:text-sm text-ink-soft">
            <img
              src="/jornada/lelia.png"
              alt=""
              aria-hidden
              className="w-9 h-9 rounded-full border border-line bg-card object-cover"
            />
            <span>
              <strong className="text-ink font-medium">Lélia</strong> · assistente
              de mediação de risco em IA para o setor público
            </span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 1: O QUE A FERRAMENTA ENTREGA */}
      <section className="bg-page px-5 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
              O que a ferramenta entrega
            </p>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
              Três entregas
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ENTREGAS.map((item) => (
              <article
                key={item.titulo}
                className="bg-card border border-line rounded-2xl p-6"
              >
                <h3 className="font-display font-semibold text-lg text-ink leading-snug">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {item.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: COMO FUNCIONA */}
      <section id="fluxo" className="bg-surface px-5 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
              Como funciona
            </p>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
              Quatro passos
            </h2>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PASSOS.map((p) => (
              <li
                key={p.n}
                className="bg-card border border-line rounded-2xl p-6"
              >
                <span className="block text-xs font-mono text-accent-fg tracking-wider">
                  {p.n}
                </span>
                <h3 className="mt-3 font-display font-semibold text-base text-ink leading-snug">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {p.descricao}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SEÇÃO 3: CLASSIFICAÇÕES (accordion) */}
      <section id="classificacoes" className="bg-page px-5 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
              As cinco classificações
            </p>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
              O que a Lélia te devolve
            </h2>
            <p className="mt-4 text-ink-soft text-sm md:text-base leading-relaxed">
              Clique em cada classificação para ver descrição e exemplo.
            </p>
          </div>

          <ul className="mt-10 space-y-3">
            {DESFECHOS.map((d) => (
              <li key={d.titulo}>
                <details
                  className={
                    'group rounded-2xl border bg-card overflow-hidden ' + d.borda
                  }
                >
                  <summary className="flex items-center gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span aria-hidden className="text-xl shrink-0 leading-none">
                      {d.emoji}
                    </span>
                    <h3 className="font-display font-semibold text-base md:text-lg text-ink leading-snug flex-1">
                      {d.titulo}
                    </h3>
                    <span
                      aria-hidden
                      className="shrink-0 text-ink-soft text-sm transition-transform group-open:rotate-180"
                    >
                      ▾
                    </span>
                  </summary>
                  <div className="px-5 pb-5 -mt-1 ml-9 md:ml-10">
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {d.descricao}
                    </p>
                    <p className="mt-3 text-xs md:text-sm text-ink leading-relaxed">
                      <span className="text-[10px] uppercase tracking-wider text-accent-fg font-semibold mr-2">
                        Exemplo
                      </span>
                      {d.exemplo}
                    </p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEÇÃO 4: LIMITES */}
      <section id="limites" className="bg-surface px-5 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
              Limites da ferramenta
            </p>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
              O que ela não faz
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {LIMITES.map((l) => (
              <article
                key={l.titulo}
                className="bg-card border border-line rounded-2xl p-5"
              >
                <h3 className="font-display font-semibold text-base text-ink leading-snug">
                  {l.titulo}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {l.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL (inverted) */}
      <section className="bg-ink text-page px-5 py-20 md:py-24 border-t border-line">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight">
            Iniciar análise de uso de IA
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-page/70 text-base md:text-lg leading-relaxed">
            Descreva o caso e receba uma análise estruturada com classificação e
            rastreabilidade.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://avaliadados.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-page text-ink px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Iniciar análise ↗
            </a>
            <Link
              to="/modulos/governanca/aie"
              className="rounded-full border border-page/30 text-page px-6 py-3 text-sm font-medium hover:bg-page/10 transition"
            >
              Fazer autoavaliação (AIE)
            </Link>
          </div>
          <MetaCTADark />
        </div>
      </section>

      {/* FOOTER INSTITUCIONAL */}
      <section className="bg-page px-5 py-12 border-t border-line">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-accent-fg font-semibold">
                Governança
              </p>
              <ul className="mt-3 space-y-2 text-ink-soft">
                <li>
                  <Link to="/base-teorica" className="hover:text-ink transition">
                    Base teórica e normativa
                  </Link>
                </li>
                <li>
                  <a href="#fluxo" className="hover:text-ink transition">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#classificacoes" className="hover:text-ink transition">
                    Metodologia de classificação
                  </a>
                </li>
                <li>
                  <a href="#limites" className="hover:text-ink transition">
                    Limites da ferramenta
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent-fg font-semibold">
                Marcos normativos
              </p>
              <ul className="mt-3 space-y-2 text-ink-soft">
                <li>Portaria MGI 3.485/2026</li>
                <li>Framework AIE/MGI</li>
                <li>LGPD · Lei 13.709/2018</li>
                <li>LAI · Lei 12.527/2011</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent-fg font-semibold">
                Modelo
              </p>
              <ul className="mt-3 space-y-2 text-ink-soft">
                <li>Persona Lélia v9</li>
                <li>Claude Opus 4.7 (Anthropic)</li>
                <li>Sem treinamento sobre os dados</li>
                <li>Identificação obrigatória de IA</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent-fg font-semibold">
                Navegação
              </p>
              <ul className="mt-3 space-y-2 text-ink-soft">
                <li>
                  <a href="/jornada/#modulos" className="hover:text-ink transition">
                    Todos os módulos
                  </a>
                </li>
                <li>
                  <Link to="/glossario" className="hover:text-ink transition">
                    Glossário
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
