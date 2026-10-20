import { Link } from 'react-router-dom'
import { tr } from '../../i18n'

// aie.html redireciona sozinho pra aie.es.html quando o idioma e ES.
const T = tr({
  pt: {
    voltar: '← Voltar',
    eyebrow: 'Autoavaliação de Impacto Ético (AIE)',
    modulo: 'Módulo 06 · Governança de IA',
    titulo: 'Autoavaliação de Impacto Ético',
    intro: 'Jornada de reflexão em duas partes: avaliação de risco do projeto + questionário detalhado conforme o nível identificado. Versão BETA.',
    rodape: 'Versão integrada do framework AIE-BR. Os dados são processados localmente no seu navegador — nada é enviado para servidores externos.',
  },
  es: {
    voltar: '← Volver',
    eyebrow: 'Autoevaluación de Impacto Ético (AIE)',
    modulo: 'Módulo 06 · Gobernanza de IA',
    titulo: 'Autoevaluación de Impacto Ético',
    intro: 'Un recorrido de reflexión en dos partes: evaluación del riesgo del proyecto + cuestionario detallado según el nivel identificado. Versión BETA, adaptada a la normativa uruguaya.',
    rodape: 'Los datos se procesan localmente en tu navegador — no se envía nada a servidores externos. El instrumento oficial de Uruguay es la Guía para el Estudio de Impacto Algorítmico (EIA) de la AGESIC.',
  },
})

export default function GovernancaAIE() {
  return (
    <main className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/modulos/governanca"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition"
          >
            {T.voltar}
          </Link>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-fg font-semibold">
              {T.eyebrow}
            </p>
            <p className="text-xs text-ink-soft mt-0.5">{T.modulo}</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-center mb-8">
            <h1 className="font-display font-semibold text-3xl md:text-5xl text-ink leading-tight">
              {T.titulo}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-ink-soft leading-relaxed">
              {T.intro}
            </p>
          </div>
          <div className="bg-card border border-line rounded-2xl overflow-hidden">
            <iframe
              src="/jornada/aie.html"
              title={T.eyebrow}
              className="w-full"
              style={{ height: '1600px', border: 0 }}
              loading="lazy"
            />
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            {T.rodape}
          </p>
        </div>
      </div>
    </main>
  )
}
