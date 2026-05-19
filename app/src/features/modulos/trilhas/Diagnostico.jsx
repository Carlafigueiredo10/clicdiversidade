import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { submeterDiagnostico } from '../../../services/diagnosticos'

// 5 blocos × 10 perguntas (3 + 2 + 2 + 2 + 1)
const BLOCOS = [
  {
    label: 'Bloco 1 — Experiência Atual',
    perguntas: [
      {
        id: 'q1',
        texto: '1. Você já utiliza IA no trabalho?',
        tipo: 'radio',
        opcoes: [
          { val: '0', label: 'Nunca usei' },
          { val: '1', label: 'Uso ocasionalmente (resumos, textos, ideias)' },
          { val: '2', label: 'Uso com frequência' },
          { val: '3', label: 'Já uso para estruturar fluxos ou organizar tarefas' },
        ],
      },
      {
        id: 'q2',
        texto: '2. Você já criou algum fluxo automatizado (mesmo simples)?',
        tipo: 'radio',
        opcoes: [
          { val: '0', label: 'Não' },
          { val: '1', label: 'Já usei algo pronto' },
          { val: '2', label: 'Já configurei uma automação simples' },
          { val: '3', label: 'Já criei algo do zero' },
        ],
      },
      {
        id: 'q3',
        texto: '3. Você já estruturou dados em tabela para resolver um problema?',
        tipo: 'radio',
        opcoes: [
          { val: '0', label: 'Não' },
          { val: '1', label: 'Sim, mas sem regra clara' },
          { val: '2', label: 'Sim, com regras básicas' },
          { val: '3', label: 'Sim, com lógica de status/condição' },
        ],
      },
    ],
  },
  {
    label: 'Bloco 2 — Objetivo',
    perguntas: [
      {
        id: 'q4',
        texto: '4. O que você quer alcançar agora?',
        tipo: 'radio',
        opcoes: [
          { val: 'entender', label: 'Entender melhor o que é IA' },
          { val: 'produtividade', label: 'Ganhar produtividade' },
          { val: 'analise', label: 'Melhorar relatórios e análise' },
          { val: 'criar', label: 'Criar uma solução digital para meu setor' },
          { val: 'programar', label: 'Aprender a programar' },
        ],
      },
      {
        id: 'q5',
        texto: '5. Se pudesse escolher, você preferiria:',
        tipo: 'radio',
        opcoes: [
          { val: 'usar', label: 'Usar ferramentas prontas' },
          { val: 'adaptar', label: 'Adaptar ferramentas' },
          { val: 'criar', label: 'Criar sua própria solução' },
        ],
      },
    ],
  },
  {
    label: 'Bloco 3 — Mentalidade Tecnológica',
    perguntas: [
      {
        id: 'q6',
        texto:
          '6. Quando surge um problema repetitivo no trabalho, você tende a:',
        tipo: 'radio',
        opcoes: [
          { val: '0', label: 'Resolver manualmente' },
          { val: '1', label: 'Criar um modelo padrão' },
          { val: '2', label: 'Organizar numa planilha' },
          { val: '3', label: 'Pensar em automatizar' },
        ],
      },
      {
        id: 'q7',
        texto: '7. Você se vê como alguém capaz de criar tecnologia?',
        tipo: 'slider',
        min: 1,
        max: 5,
        labelMin: '1 — Não me vejo capaz',
        labelMax: '5 — Totalmente capaz',
      },
    ],
  },
  {
    label: 'Bloco 4 — Disponibilidade',
    perguntas: [
      {
        id: 'q8',
        texto: '8. Quanto tempo por semana você pode dedicar?',
        tipo: 'radio',
        opcoes: [
          { val: '1h', label: 'Até 1 hora' },
          { val: '2-3h', label: '2 a 3 horas' },
          { val: '4-6h', label: '4 a 6 horas' },
          { val: '6h+', label: 'Mais de 6 horas' },
        ],
      },
      {
        id: 'q9',
        texto: '9. Você tem acesso a ferramentas no seu órgão?',
        tipo: 'radio',
        opcoes: [
          { val: 'navegador', label: 'Apenas navegador' },
          { val: 'm365', label: 'Microsoft 365' },
          { val: 'automacao', label: 'Ferramentas de automação' },
          { val: 'naosei', label: 'Não sei' },
        ],
      },
    ],
  },
  {
    label: 'Bloco 5 — Provocação',
    perguntas: [
      {
        id: 'q10',
        texto:
          '10. Se você aprendesse a construir uma ferramenta simples, você aplicaria no seu setor?',
        tipo: 'radio',
        opcoes: [
          { val: 'naosei', label: 'Não sei' },
          { val: 'talvez', label: 'Talvez' },
          { val: 'sim', label: 'Sim' },
          { val: 'sim-problema', label: 'Sim, já tenho um problema em mente' },
        ],
      },
    ],
  },
]

// Mapeia o resultado do scoring (0-5) para o slug da trilha no projeto
const SCORE_TO_SLUG = {
  0: 'fundamental-dados',
  1: 'autonomia-digital',
  2: 'produtividade-automacao',
  3: 'dados-decisao',
  4: 'construcao',
  5: 'programacao',
}

const PERFIS = {
  0: {
    perfil: 'Analista em Formação',
    leitura:
      'Você demonstra curiosidade analítica e busca transformar informação em evidência prática. O próximo passo é estruturar raciocínio com dados.',
    complementar: 'produtividade-automacao',
  },
  1: {
    perfil: 'Exploração em Transição',
    leitura:
      'Você ainda está formando repertório tecnológico. O momento é entender como a IA funciona e ganhar autonomia no uso diário.',
    complementar: 'produtividade-automacao',
  },
  2: {
    perfil: 'Operação Estratégica',
    leitura:
      'Você já usa IA. O próximo salto é transformar uso pontual em fluxos de produtividade.',
    complementar: 'construcao',
  },
  3: {
    perfil: 'Analítico orientado por dados',
    leitura:
      'Você demonstra interesse em análise e evidência. O próximo passo é usar IA para ampliar sua capacidade analítica.',
    complementar: 'fundamental-dados',
  },
  4: {
    perfil: 'Criação de Soluções',
    leitura:
      'Você já pensa em aplicação prática. Seu momento é construir soluções digitais.',
    complementar: 'dados-decisao',
  },
  5: {
    perfil: 'Arquitetura Técnica',
    leitura:
      'Você busca autonomia técnica profunda. O próximo passo é programar e integrar sistemas.',
    complementar: 'construcao',
  },
}

function calcularRecomendacao(answers) {
  const q1 = parseInt(answers.q1 || '0', 10)
  const q2 = parseInt(answers.q2 || '0', 10)
  const q3 = parseInt(answers.q3 || '0', 10)
  const q4 = answers.q4 || 'entender'
  const q5 = answers.q5 || 'usar'
  const q6 = parseInt(answers.q6 || '0', 10)
  const q7 = parseInt(answers.q7 || '3', 10)
  const q10 = answers.q10 || 'naosei'

  const scores = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }

  // Trilha 0 (Fundamental): curiosidade analítica + dados
  if (q3 >= 2) scores[0] += 3
  if (q4 === 'analise') scores[0] += 2
  if (q1 === 0) scores[0] += 1

  // Trilha 1 (Autonomia): baixa experiência + quer entender
  if (q1 === 0) scores[1] += 3
  if (q4 === 'entender') scores[1] += 2
  if (q2 === 0) scores[1] += 1

  // Trilha 2 (Produtividade): já usa IA + quer produtividade
  if (q1 >= 1) scores[2] += 2
  if (q4 === 'produtividade') scores[2] += 3
  if (q5 === 'usar') scores[2] += 1

  // Trilha 3 (Dados & Decisão): análise + dados + usa IA
  if (q3 >= 2) scores[3] += 2
  if (q4 === 'analise') scores[3] += 3
  if (q1 >= 1) scores[3] += 1

  // Trilha 4 (Construção): quer criar + autoeficácia + automação
  if (q4 === 'criar' || q5 === 'criar') scores[4] += 3
  if (q7 >= 3) scores[4] += 2
  if (q6 >= 3) scores[4] += 1
  if (q10 === 'sim' || q10 === 'sim-problema') scores[4] += 2

  // Trilha 5 (Programação): quer programar
  if (q4 === 'programar') scores[5] += 5
  if (q7 >= 4) scores[5] += 1

  let maxScore = 0
  let maxTrilha = 1
  for (const t in scores) {
    if (scores[t] > maxScore) {
      maxScore = scores[t]
      maxTrilha = parseInt(t, 10)
    }
  }

  // Refino: evitar salto precoce pra Construção
  if (
    maxTrilha === 4 &&
    q4 !== 'criar' &&
    q5 !== 'criar' &&
    q10 !== 'sim-problema'
  ) {
    if (scores[0] >= scores[4] - 1) maxTrilha = 0
    else if (scores[2] >= scores[4] - 1) maxTrilha = 2
  }

  // Refino: priorizar Fundamental se ainda não usa IA
  if (maxTrilha === 3 && q1 === 0 && scores[0] >= scores[3] - 1) {
    maxTrilha = 0
  }

  const aderencia = Math.min(
    94,
    Math.max(65, Math.round((maxScore / 10) * 100)),
  )

  return { trilhaIdx: maxTrilha, aderencia, scores }
}

export default function Diagnostico({ trilhas }) {
  const [iniciado, setIniciado] = useState(false)
  const [answers, setAnswers] = useState({ q7: '3' })
  const [bloco, setBloco] = useState(0)
  const [resultado, setResultado] = useState(null)

  const totalQ = 10
  const answeredCount = useMemo(() => {
    let c = 0
    for (let i = 1; i <= totalQ; i++) {
      if (answers[`q${i}`] !== undefined && answers[`q${i}`] !== '') c++
    }
    return c
  }, [answers])

  function set(qid, val) {
    setAnswers((prev) => ({ ...prev, [qid]: val }))
  }

  function avancar() {
    if (bloco < BLOCOS.length - 1) {
      setBloco(bloco + 1)
    } else {
      const r = calcularRecomendacao(answers)
      const slug = SCORE_TO_SLUG[r.trilhaIdx]
      const trilha = trilhas.find((t) => t.slug === slug)
      const perfilInfo = PERFIS[r.trilhaIdx]
      const complementar = trilhas.find(
        (t) => t.slug === perfilInfo.complementar,
      )
      setResultado({
        trilha,
        aderencia: r.aderencia,
        perfil: perfilInfo.perfil,
        leitura: perfilInfo.leitura,
        complementar,
      })
      submeterDiagnostico({
        respostas: answers,
        trilha_recomendada: slug,
        aderencia: r.aderencia,
      }).catch((err) => {
        console.error('Erro ao registrar diagnostico:', err)
      })
    }
  }

  function voltar() {
    if (bloco > 0) setBloco(bloco - 1)
  }

  function refazer() {
    setAnswers({ q7: '3' })
    setBloco(0)
    setResultado(null)
    setIniciado(false)
  }

  const blocoAtual = BLOCOS[bloco]
  const isUltimoBloco = bloco === BLOCOS.length - 1
  const pct = (answeredCount / totalQ) * 100

  // ━━━ ESTADO FECHADO — preview com CTA forte ━━━
  if (!iniciado && !resultado) {
    return (
      <section className="relative overflow-hidden rounded-2xl border border-accent/30 bg-card p-6 md:p-10 shadow-soft">
        {/* Halo de cor sutil no fundo */}
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-40 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, oklch(78% 0.12 285 / 0.3), transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Barra de cor no topo */}
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent"
        />

        <div className="relative flex flex-col md:flex-row md:items-center md:gap-8 gap-6">
          <div className="flex-1 min-w-0">
            <div className="text-[10px] tracking-[0.25em] uppercase text-accent-fg font-semibold flex items-center gap-2">
              <span aria-hidden>🧭</span> Diagnóstico rápido
            </div>
            <h3 className="mt-3 font-display font-semibold text-2xl md:text-3xl text-ink leading-tight">
              Descubra qual trilha combina com você
            </h3>
            <p className="mt-3 text-ink-soft text-sm md:text-base leading-relaxed">
              5 minutos · 10 perguntas ·{' '}
              <strong className="text-ink">
                sem respostas certas ou erradas
              </strong>
              . Recebe uma recomendação personalizada de trilha + leitura do seu
              perfil.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setIniciado(true)}
              className="group rounded-full bg-ink text-page px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition inline-flex items-center gap-2 shadow-soft"
            >
              Começar diagnóstico
              <span
                aria-hidden
                className="transition group-hover:translate-x-0.5"
              >
                →
              </span>
            </button>
            <div className="mt-2 text-[11px] text-muted text-center">
              Anônimo · sem cadastro
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (resultado) {
    const { trilha, aderencia, perfil, leitura, complementar } = resultado
    const accent = trilha?.accentColor || '#A78BFA'
    return (
      <section
        className="bg-card rounded-2xl border p-6 md:p-10"
        style={{ borderColor: `${accent}33` }}
      >
        <div
          className="text-xs uppercase tracking-widest font-semibold"
          style={{ color: accent }}
        >
          Trilha recomendada
        </div>
        <h3
          className="mt-2 font-display font-semibold text-2xl md:text-3xl leading-tight"
          style={{ color: accent }}
        >
          {trilha?.numero
            ? `Trilha ${String(trilha.numero).padStart(2, '0')} — ${trilha.titulo.split('.')[0]}`
            : 'Trilha recomendada'}
        </h3>
        <p className="mt-3 text-ink-soft leading-relaxed">{trilha?.subtitulo}</p>

        <div className="mt-6">
          <div className="text-[10px] uppercase tracking-widest text-muted">
            Perfil detectado
          </div>
          <div className="mt-1 font-display font-medium text-ink">
            {perfil}
          </div>
        </div>

        <div className="mt-5">
          <div className="text-[10px] uppercase tracking-widest text-muted">
            Leitura da sua jornada
          </div>
          <p className="mt-1 text-sm text-ink-soft leading-relaxed">
            {leitura}
          </p>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            to={`/modulos/trilhas/${trilha?.slug}`}
            className="rounded-full px-6 py-3 text-sm font-medium transition inline-flex items-center gap-2"
            style={{
              background: `${accent}1a`,
              color: accent,
              border: `1px solid ${accent}40`,
            }}
          >
            Começar minha trilha recomendada
            <span aria-hidden>→</span>
          </Link>
          <div className="flex items-baseline gap-1.5">
            <span
              className="font-display font-semibold text-2xl tabular-nums"
              style={{ color: accent }}
            >
              {aderencia}%
            </span>
            <span className="text-xs text-muted">de aderência</span>
          </div>
        </div>

        {complementar && (
          <div className="mt-6 pt-6 border-t border-line">
            <div className="text-[10px] uppercase tracking-widest text-muted">
              Trilha complementar
            </div>
            <Link
              to={`/modulos/trilhas/${complementar.slug}`}
              className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:opacity-70 transition"
            >
              Trilha {String(complementar.numero).padStart(2, '0')} —{' '}
              {complementar.titulo.split('.')[0]}
              <span aria-hidden>→</span>
            </Link>
          </div>
        )}

        <div className="mt-6 text-xs text-muted">
          Você pode explorar qualquer trilha — o diagnóstico é apenas uma
          sugestão.{' '}
          <button
            type="button"
            onClick={refazer}
            className="text-accent-fg font-medium hover:opacity-70 transition underline underline-offset-2"
          >
            Refazer diagnóstico
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-card rounded-2xl border border-line p-6 md:p-10">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h3 className="font-display font-semibold text-xl md:text-2xl text-ink">
          🧭 Diagnóstico rápido
        </h3>
        <span className="text-xs text-muted tabular-nums">
          {answeredCount}/{totalQ}
        </span>
      </div>
      <p className="text-sm text-ink-soft">
        5 minutos. 10 perguntas.{' '}
        <strong className="text-ink">Sem respostas certas ou erradas.</strong>
      </p>

      <div className="mt-5 h-1.5 bg-page rounded-full overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="mt-8 mb-8">
        <div className="text-[10px] uppercase tracking-widest text-accent-fg font-semibold mb-6">
          {blocoAtual.label}
        </div>
        <div className="space-y-7">
          {blocoAtual.perguntas.map((q) => (
            <div key={q.id}>
              <div className="font-display font-medium text-base text-ink mb-3">
                {q.texto}
              </div>

              {q.tipo === 'radio' && (
                <div className="grid gap-2">
                  {q.opcoes.map((opt) => {
                    const selected = answers[q.id] === opt.val
                    return (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => set(q.id, opt.val)}
                        className={
                          'flex items-center gap-3 text-left px-4 py-3 rounded-xl border transition text-sm ' +
                          (selected
                            ? 'border-accent bg-accent/10 text-ink'
                            : 'border-line text-ink-soft hover:bg-page hover:text-ink')
                        }
                      >
                        <span
                          aria-hidden
                          className={
                            'w-3.5 h-3.5 rounded-full border-2 shrink-0 transition ' +
                            (selected
                              ? 'border-accent bg-accent'
                              : 'border-line')
                          }
                        />
                        {opt.label}
                      </button>
                    )
                  })}
                </div>
              )}

              {q.tipo === 'slider' && (
                <div>
                  <div className="font-display font-semibold text-3xl text-accent-fg text-center mb-3">
                    {answers[q.id] || '3'}
                  </div>
                  <input
                    type="range"
                    min={q.min}
                    max={q.max}
                    value={answers[q.id] || '3'}
                    onChange={(e) => set(q.id, e.target.value)}
                    className="w-full accent-accent"
                  />
                  <div className="flex justify-between text-xs text-muted mt-2">
                    <span>{q.labelMin}</span>
                    <span>{q.labelMax}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 pt-4 border-t border-line">
        <button
          type="button"
          onClick={voltar}
          disabled={bloco === 0}
          className={
            'text-sm px-5 py-2.5 rounded-full transition inline-flex items-center gap-2 ' +
            (bloco === 0
              ? 'invisible'
              : 'border border-line text-ink-soft hover:bg-page')
          }
        >
          <span aria-hidden>←</span> Voltar
        </button>
        <button
          type="button"
          onClick={avancar}
          className="text-sm px-6 py-2.5 rounded-full bg-ink text-page font-medium hover:opacity-90 transition inline-flex items-center gap-2"
        >
          {isUltimoBloco ? 'Ver resultado' : 'Próximo'}
          <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  )
}
