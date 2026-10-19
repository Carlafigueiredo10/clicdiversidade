import CopyButton from './CopyButton'
import { PAINEL_GOVERNANCA_PROMPT } from './data'
import { tr } from '../../../i18n'

const T = tr({
  pt: {
    titulo: 'Painel de governança de IA',
    intro: 'O segundo aplicativo da oficina: um sistema de levantamento e gestão de riscos de IA, com questionário estruturado, matriz de riscos, parecer técnico e ofício de questionamento. Mesmo processo, produto mais ambicioso.',
    aguarde: 'Aguarde ~10 minutos. Este app é maior que o gerenciador de tarefas — gere primeiro e refine depois, uma tela por vez.',
    rotulo: 'Prompt pronto — Painel de Governança de IA',
    rodape: ['Os grupos 2, 3 e 4 do questionário — origem dos dados, variáveis proxy e erro — são as mesmas frentes do guia', 'auditando dados e decisões', '. Aqui elas viram software.'],
  },
  es: {
    titulo: 'Panel de gobernanza de IA',
    intro: 'La segunda aplicación del taller: un sistema de relevamiento y gestión de riesgos de IA, con cuestionario estructurado, matriz de riesgos, dictamen técnico y oficio de consulta. El mismo proceso, un producto más ambicioso.',
    aguarde: 'Espera unos 10 minutos. Esta app es más grande que el gestor de tareas — genérala primero y ajústala después, una pantalla a la vez.',
    rotulo: 'Prompt listo — Panel de Gobernanza de IA',
    rodape: ['Los grupos 2, 3 y 4 del cuestionario — origen de los datos, variables proxy y error — son los mismos frentes de la guía', 'auditando datos y decisiones', '. Aquí se convierten en software.'],
  },
})

const COMO = tr({
  pt: {
    comoUsar: 'Como usar',
    abra: ['Abra', 'e faça login.'],
    copie: 'Clique no botão abaixo para copiar o prompt.',
    cole: ['Cole na Lovable e clique em', '.'],
    copiado: '✅ Prompt copiado!',
    copiar: '📋 Copiar prompt completo',
  },
  es: {
    comoUsar: 'Cómo usarlo',
    abra: ['Abre', 'e inicia sesión.'],
    copie: 'Haz clic en el botón de abajo para copiar el prompt.',
    cole: ['Pégalo en Lovable y haz clic en', '.'],
    copiado: '✅ ¡Prompt copiado!',
    copiar: '📋 Copiar prompt completo',
  },
})

const DIFERENCIAIS_PT = [
  {
    num: '01',
    title: 'Não pontua sozinho',
    body: 'O aplicativo sugere o risco e posiciona o cartão, mas quem classifica é sempre a pessoa. Toda classificação sai registrada como decisão assinada: "classificado como alto por [nome], em [data]".',
  },
  {
    num: '02',
    title: '"Não sei" vira achado',
    body: 'Responder "não sei" não é falha do operador: gera um risco de opacidade e joga a pergunta direto no ofício de questionamento, já com o destinatário sugerido.',
  },
  {
    num: '03',
    title: 'Dois eixos de impacto',
    body: 'Risco institucional e risco sobre pessoas afetadas são classificados separadamente. Quando um é baixo e o outro é alto, o app destaca o cartão e pergunta quem decide se aquilo é aceitável.',
  },
]

const DIFERENCIAIS_ES = [
  {
    num: '01',
    title: 'No puntúa por sí solo',
    body: 'La aplicación sugiere el riesgo y ubica la tarjeta, pero quien clasifica es siempre la persona. Toda clasificación queda registrada como decisión firmada: "clasificado como alto por [nombre], el [fecha]".',
  },
  {
    num: '02',
    title: '"No sé" se convierte en hallazgo',
    body: 'Responder "no sé" no es una falla de quien opera: genera un riesgo de opacidad y lleva la pregunta directo al oficio de consulta, ya con el destinatario sugerido.',
  },
  {
    num: '03',
    title: 'Dos ejes de impacto',
    body: 'El riesgo institucional y el riesgo sobre las personas afectadas se clasifican por separado. Cuando uno es bajo y el otro alto, la app destaca la tarjeta y pregunta quién decide si eso es aceptable.',
  },
]

const DIFERENCIAIS = tr({ pt: DIFERENCIAIS_PT, es: DIFERENCIAIS_ES })

export default function PainelGovernanca() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center">
        <span className="text-3xl" aria-hidden>
          🛡️
        </span>
        <h2 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
          {T.titulo}
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-ink-soft leading-relaxed">
          {T.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {DIFERENCIAIS.map((d) => (
          <div
            key={d.num}
            className="bg-card border border-line rounded-2xl p-5"
          >
            <span className="font-display font-semibold text-2xl text-accent-fg leading-none">
              {d.num}
            </span>
            <h3 className="mt-3 font-semibold text-sm text-ink">{d.title}</h3>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              {d.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-card rounded-2xl border border-line p-6 md:p-8">
        <h3 className="font-display font-semibold text-base text-ink mb-4">
          {COMO.comoUsar}
        </h3>
        <ol className="space-y-2 text-sm text-ink-soft list-decimal list-inside">
          <li>
            {COMO.abra[0]}{' '}
            <a
              href="https://lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-fg font-medium underline underline-offset-4 hover:text-ink transition"
            >
              lovable.dev
            </a>{' '}
            {COMO.abra[1]}
          </li>
          <li>{COMO.copie}</li>
          <li>
            {COMO.cole[0]}{' '}
            <strong className="text-ink">Generate</strong>{COMO.cole[1]}
          </li>
          <li>{T.aguarde}</li>
        </ol>
      </div>

      <div className="mt-8 flex justify-center">
        <CopyButton
          text={PAINEL_GOVERNANCA_PROMPT}
          copiedChildren={<span>{COMO.copiado}</span>}
          className="rounded-full bg-ink text-page px-7 py-3 text-sm font-medium hover:opacity-90 transition inline-flex items-center gap-2"
        >
          <span>{COMO.copiar}</span>
        </CopyButton>
      </div>

      <div className="mt-10 bg-card rounded-2xl border border-line overflow-hidden">
        <div className="px-5 py-3 border-b border-line">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            {T.rotulo}
          </span>
        </div>
        <pre className="font-mono text-xs md:text-sm p-5 md:p-7 whitespace-pre-wrap break-words text-ink-soft leading-relaxed max-h-[500px] overflow-auto">
          {PAINEL_GOVERNANCA_PROMPT}
        </pre>
      </div>

      <p className="mt-8 text-center text-sm text-muted leading-relaxed max-w-2xl mx-auto">
        {T.rodape[0]}{' '}
        <a
          href="/jornada/modulos/auditando-dados-e-decisoes.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-fg underline underline-offset-4 hover:text-ink transition"
        >
          {T.rodape[1]}
        </a>
        {T.rodape[2]}
      </p>
    </div>
  )
}
