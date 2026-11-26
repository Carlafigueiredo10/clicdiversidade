import CopyButton from './CopyButton'
import { MEU_APP_PROMPT, MEU_APP_PROXIMOS } from './data'
import { tr } from '../../../i18n'

const T = tr({
  pt: {
    titulo: 'Painel de tarefas',
    intro: 'O primeiro aplicativo da oficina: um gerenciador de tarefas profissional, construído na Lovable um passo por dia, só com os créditos gratuitos.',
    creditosTitulo: 'Por que um passo por dia',
    creditos: 'A Lovable cobra créditos pelo tamanho do que você pede, e o plano gratuito dá 5 créditos por dia (até 30 no mês). Um pedido grande demais consome tudo e para no meio. Por isso o app nasce pequeno no Dia 1 e cresce um pedido por dia: os créditos se renovam no dia seguinte.',
    dia: 'Dia',
    dia1Titulo: 'O app básico',
    dia1Desc: 'Dashboard, Tarefas e Equipe, já com dados de exemplo.',
    aguarde: 'Aguarde alguns minutos e seu app estará pronto.',
    rotulo: 'Prompt do Dia 1 — Gerenciador de Tarefas',
    seguintesTitulo: 'Nos dias seguintes',
    seguintes: 'Volte ao mesmo projeto na Lovable e cole um prompt por dia, na ordem que preferir. Mande um de cada vez e espere terminar.',
    copiar: 'Copiar',
    dica: 'Dica:',
    dicaTexto: 'para ver quanto um pedido custou, abra o menu de opções abaixo da resposta da Lovable e procure "Credits used".',
  },
  es: {
    titulo: 'Panel de tareas',
    intro: 'La primera aplicación del taller: un gestor de tareas profesional, construido en Lovable un paso por día, solo con los créditos gratuitos.',
    creditosTitulo: 'Por qué un paso por día',
    creditos: 'Lovable cobra créditos según el tamaño de lo que pides, y el plan gratuito da 5 créditos por día (hasta 30 en el mes). Un pedido demasiado grande los consume todos y se detiene a la mitad. Por eso la app nace pequeña el Día 1 y crece un pedido por día: los créditos se renuevan al día siguiente.',
    dia: 'Día',
    dia1Titulo: 'La app básica',
    dia1Desc: 'Panel, Tareas y Equipo, ya con datos de ejemplo.',
    aguarde: 'Espera unos minutos y tu app estará lista.',
    rotulo: 'Prompt del Día 1 — Gestor de Tareas',
    seguintesTitulo: 'En los días siguientes',
    seguintes: 'Vuelve al mismo proyecto en Lovable y pega un prompt por día, en el orden que prefieras. Envía uno a la vez y espera a que termine.',
    copiar: 'Copiar',
    dica: 'Consejo:',
    dicaTexto: 'para ver cuánto costó un pedido, abre el menú de opciones debajo de la respuesta de Lovable y busca "Credits used".',
  },
})

const COMO = tr({
  pt: {
    comoUsar: 'Como usar',
    abra: ['Abra', 'e faça login.'],
    copie: 'Clique no botão abaixo para copiar o prompt.',
    cole: ['Cole na Lovable e clique em', '.'],
    copiado: '✅ Prompt copiado!',
    copiar: '📋 Copiar prompt do Dia 1',
  },
  es: {
    comoUsar: 'Cómo usarlo',
    abra: ['Abre', 'e inicia sesión.'],
    copie: 'Haz clic en el botón de abajo para copiar el prompt.',
    cole: ['Pégalo en Lovable y haz clic en', '.'],
    copiado: '✅ ¡Prompt copiado!',
    copiar: '📋 Copiar prompt del Día 1',
  },
})

function DiaBadge({ n }) {
  return (
    <span className="inline-block text-[10px] uppercase tracking-widest text-accent-fg font-semibold">
      {T.dia} {n}
    </span>
  )
}

export default function MeuAplicativo() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center">
        <span className="text-3xl" aria-hidden>
          🚀
        </span>
        <h2 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
          {T.titulo}
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-ink-soft leading-relaxed">
          {T.intro}
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-accent/40 bg-accent/10 p-6 md:p-8">
        <h3 className="font-display font-semibold text-base text-ink mb-2">
          {T.creditosTitulo}
        </h3>
        <p className="text-sm text-ink-soft leading-relaxed">{T.creditos}</p>
      </div>

      {/* Dia 1 */}
      <div className="mt-12">
        <DiaBadge n={1} />
        <h3 className="mt-1 font-display font-semibold text-2xl text-ink">
          {T.dia1Titulo}
        </h3>
        <p className="mt-2 text-sm text-ink-soft">{T.dia1Desc}</p>
      </div>

      <div className="mt-6 bg-card rounded-2xl border border-line p-6 md:p-8">
        <h4 className="font-display font-semibold text-base text-ink mb-4">
          {COMO.comoUsar}
        </h4>
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
          text={MEU_APP_PROMPT}
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
          {MEU_APP_PROMPT}
        </pre>
      </div>

      {/* Dias seguintes */}
      <div className="mt-16">
        <h3 className="font-display font-semibold text-2xl text-ink">
          {T.seguintesTitulo}
        </h3>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed">
          {T.seguintes}
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {MEU_APP_PROXIMOS.map((p, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl border border-line overflow-hidden flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 p-5 border-b border-line">
              <div>
                <DiaBadge n={i + 2} />
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

      <p className="mt-8 text-sm text-ink-soft leading-relaxed">
        <strong className="text-ink">{T.dica}</strong> {T.dicaTexto}
      </p>
    </div>
  )
}
