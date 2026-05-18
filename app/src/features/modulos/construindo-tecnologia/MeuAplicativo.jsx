import CopyButton from './CopyButton'
import { MEU_APP_PROMPT } from './data'

export default function MeuAplicativo() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center">
        <span className="text-3xl" aria-hidden>
          🚀
        </span>
        <h2 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
          Crie seu aplicativo agora
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-ink-soft leading-relaxed">
          Use este prompt completo na Lovable para gerar um gerenciador de
          tarefas profissional em minutos.
        </p>
      </div>

      <div className="mt-10 bg-card rounded-2xl border border-line p-6 md:p-8">
        <h3 className="font-display font-semibold text-base text-ink mb-4">
          Como usar
        </h3>
        <ol className="space-y-2 text-sm text-ink-soft list-decimal list-inside">
          <li>
            Abra <strong className="text-ink">lovable.dev</strong> e faça login.
          </li>
          <li>Clique no botão abaixo para copiar o prompt.</li>
          <li>
            Cole na Lovable e clique em{' '}
            <strong className="text-ink">Generate</strong>.
          </li>
          <li>Aguarde ~8 minutos e seu app estará pronto.</li>
        </ol>
      </div>

      <div className="mt-8 flex justify-center">
        <CopyButton
          text={MEU_APP_PROMPT}
          copiedChildren={<span>✅ Prompt copiado!</span>}
          className="rounded-full bg-ink text-page px-7 py-3 text-sm font-medium hover:opacity-90 transition inline-flex items-center gap-2"
        >
          <span>📋 Copiar prompt completo</span>
        </CopyButton>
      </div>

      <div className="mt-10 bg-card rounded-2xl border border-line overflow-hidden">
        <div className="px-5 py-3 border-b border-line">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            Prompt pronto — Gerenciador de Tarefas
          </span>
        </div>
        <pre className="font-mono text-xs md:text-sm p-5 md:p-7 whitespace-pre-wrap break-words text-ink-soft leading-relaxed max-h-[500px] overflow-auto">
          {MEU_APP_PROMPT}
        </pre>
      </div>
    </div>
  )
}
