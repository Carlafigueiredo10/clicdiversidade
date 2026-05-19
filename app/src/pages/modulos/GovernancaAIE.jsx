import { Link } from 'react-router-dom'

export default function GovernancaAIE() {
  return (
    <main className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/modulos/governanca"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition"
          >
            ← Voltar
          </Link>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-fg font-semibold">
              Autoavaliação de Impacto Ético (AIE)
            </p>
            <p className="text-xs text-ink-soft mt-0.5">Módulo 06 · Governança de IA</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-center mb-8">
            <h1 className="font-display font-semibold text-3xl md:text-5xl text-ink leading-tight">
              Autoavaliação de Impacto Ético
            </h1>
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
      </div>
    </main>
  )
}
