// Onde criar um agente em cada uma das quatro plataformas mais usadas hoje.
// Deliberadamente curto: rotulo de botao muda a cada poucos meses, e passo a
// passo desatualizado trava a pessoa no meio da oficina. O que nao envelhece
// — o prompt — fica nos templates; aqui fica so onde colar.
const PLATAFORMAS = [
  {
    id: 'copilot',
    nome: 'Microsoft Copilot',
    chamaSe: 'agente',
    plano: 'Depende da licença do seu órgão',
    planoTom: 'neutro',
    caminho: 'Construtor de agentes do Copilot',
    passos: [
      'Nome, ícone e descrição',
      'Escreva as instruções — é onde o template entra',
      'Anexe o modelo como fonte de conhecimento',
      'Teste na aba Visualizar e salve',
    ],
    nota: 'É o único com passo a passo completo aqui embaixo, com os nove passos e as duas chaves que limitam a busca do agente.',
    ancora: '#passo-a-passo-copilot',
    ctaAncora: 'Ver o passo a passo completo',
  },
  {
    id: 'gemini',
    nome: 'Google Gemini',
    chamaSe: 'Gem',
    plano: 'Gratuito',
    planoTom: 'bom',
    caminho: 'Barra lateral → Explorar Gems → Novo Gem',
    passos: [
      'Dê um nome ao Gem',
      'Cole o template no campo de instruções',
      'Anexe arquivos de conhecimento, se tiver',
      'Teste na prévia à direita e clique em Salvar',
    ],
    nota: 'A prévia não salva sozinha — se sair sem salvar, perde o que escreveu.',
    url: 'https://gemini.google.com/',
    ctaUrl: 'Abrir o Gemini',
  },
  {
    id: 'chatgpt',
    nome: 'ChatGPT',
    chamaSe: 'GPT',
    plano: 'Confira na sua conta',
    planoTom: 'atencao',
    caminho: 'Explorar GPTs → + Criar → aba Configurar',
    passos: [
      'Preencha Nome e Descrição',
      'Cole o template em Instruções',
      'Anexe arquivos em Conhecimento, se tiver',
      'Clique em Criar, no canto superior direito',
    ],
    nota: 'O editor abre em duas abas: Criar conversa com você para montar o GPT; Configurar é onde você cola o prompt inteiro de uma vez. Se a sua conta não oferecer a criação, use Instruções personalizadas nas configurações do ChatGPT — o mesmo template funciona lá.',
    url: 'https://chatgpt.com/gpts/editor',
    ctaUrl: 'Abrir o editor',
  },
  {
    id: 'claude',
    nome: 'Claude',
    chamaSe: 'Project',
    plano: 'Gratuito, até 5 projetos',
    planoTom: 'bom',
    caminho: 'claude.ai/projects → + New Project',
    passos: [
      'Dê nome e descrição ao projeto',
      'Clique em Set project instructions e cole o template',
      'Use o + à direita para anexar arquivos',
      'Toda conversa aberta dentro do projeto já nasce com as instruções',
    ],
    nota: 'As instruções valem para todas as conversas do projeto — você não precisa recolar o prompt a cada vez.',
    url: 'https://claude.ai/projects',
    ctaUrl: 'Abrir o Claude',
  },
]

const TOM = {
  bom: 'bg-success/10 text-success-fg border-success/30',
  neutro: 'bg-card text-ink-soft border-line',
  atencao: 'bg-amber-50 text-amber-800 border-amber-200',
}

export default function GuiaAgentes() {
  return (
    <div className="space-y-10">
      <header className="text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
          Parte 2 · Onde colar
        </p>
        <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
          O mesmo prompt, quatro lugares
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-ink-soft leading-relaxed">
          O prompt é a parte transferível.{' '}
          <strong className="text-ink">A interface é a parte descartável.</strong>{' '}
          Os três templates deste módulo funcionam igual nas quatro plataformas
          — o que muda é onde você cola e como a função se chama ali.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {PLATAFORMAS.map((p) => (
          <article
            key={p.id}
            className="bg-card border border-line rounded-2xl p-6 flex flex-col"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display font-semibold text-xl text-ink leading-tight">
                {p.nome}
              </h3>
              <span
                className={
                  'rounded-full border px-3 py-1 text-[11px] ' + TOM[p.planoTom]
                }
              >
                {p.plano}
              </span>
            </div>

            <p className="mt-2 text-sm text-ink-soft">
              Aqui o agente se chama{' '}
              <strong className="text-ink">{p.chamaSe}</strong>.
            </p>

            <p className="mt-4 font-mono text-xs text-accent-fg bg-page border border-line rounded-lg px-3 py-2 break-words">
              {p.caminho}
            </p>

            <ol className="mt-4 space-y-1.5 flex-1">
              {p.passos.map((s, i) => (
                <li key={s} className="flex gap-2.5 text-sm text-ink-soft">
                  <span className="font-mono text-[11px] text-muted mt-0.5 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>

            <p className="mt-4 text-xs text-muted leading-relaxed">{p.nota}</p>

            <a
              href={p.ancora || p.url}
              {...(p.url
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="mt-5 pt-4 border-t border-line text-sm font-medium text-accent-fg hover:text-ink transition"
            >
              {p.ctaAncora || p.ctaUrl} {p.ancora ? '↓' : '→'}
            </a>
          </article>
        ))}
      </div>

      <p className="text-center text-xs text-muted max-w-2xl mx-auto leading-relaxed">
        Interfaces mudam. Se um botão não estiver onde está escrito aqui,
        procure pelo nome da função — <em>Gem</em>, <em>GPT</em>,{' '}
        <em>Project</em>, <em>agente</em> — que o caminho aparece. O prompt
        continua o mesmo.
      </p>
    </div>
  )
}
