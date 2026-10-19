import CopyButton from './CopyButton'
import { MEU_APP_PROMPT } from './data'
import { tr } from '../../../i18n'

const T = tr({
  pt: {
    titulo: 'Painel de tarefas',
    intro: 'O primeiro aplicativo da oficina: use este prompt completo na Lovable para gerar um gerenciador de tarefas profissional em minutos.',
    aguarde: 'Aguarde ~8 minutos e seu app estará pronto.',
    rotulo: 'Prompt pronto — Gerenciador de Tarefas',
  },
  es: {
    titulo: 'Panel de tareas',
    intro: 'La primera aplicación del taller: usa este prompt completo en Lovable para generar un gestor de tareas profesional en minutos.',
    aguarde: 'Espera unos 8 minutos y tu app estará lista.',
    rotulo: 'Prompt listo — Gestor de Tareas',
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

      <div className="mt-10 bg-card rounded-2xl border border-line p-6 md:p-8">
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
    </div>
  )
}
