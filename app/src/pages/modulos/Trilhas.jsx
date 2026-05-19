import { Link } from 'react-router-dom'
import { TRILHAS } from '../../features/modulos/trilhas/data'
import Diagnostico from '../../features/modulos/trilhas/Diagnostico'

function tituloCurto(titulo) {
  // Cortar na primeira frase ou em ~50 chars
  const sentenceEnd = titulo.search(/[.!?]/)
  if (sentenceEnd > 0 && sentenceEnd < 65) return titulo.slice(0, sentenceEnd)
  return titulo.length > 65 ? titulo.slice(0, 62) + '...' : titulo
}

export default function Trilhas() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Módulo 02 · Trilhas de Aprendizagem
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          7 trilhas progressivas
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Cada trilha é independente, com 5 módulos + projeto final. Comece
          pela Fundamental se quiser base sólida em dados, ou pule pra que
          combina mais com seu momento.
        </p>

        <div className="mt-14 max-w-3xl mx-auto">
          <Diagnostico trilhas={TRILHAS} />
        </div>

        <div className="mt-20 pt-12 border-t border-line">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink text-center">
            Ou explore todas as trilhas
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-center text-ink-soft text-sm">
            O diagnóstico é só uma sugestão. Toda trilha é livre.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TRILHAS.map((t) => (
            <Link
              key={t.slug}
              to={`/modulos/trilhas/${t.slug}`}
              className="bg-card rounded-2xl border border-line p-6 transition hover:-translate-y-0.5 hover:shadow-md flex flex-col h-full"
              style={{
                borderTopColor: t.accentColor,
                borderTopWidth: '4px',
              }}
            >
              <div
                className="font-mono text-xs tracking-widest font-semibold"
                style={{ color: t.accentColor }}
              >
                TRILHA {String(t.numero).padStart(2, '0')}
              </div>
              <h3 className="mt-3 font-display font-semibold text-lg text-ink leading-tight">
                {tituloCurto(t.titulo)}
              </h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">
                {t.subtitulo}
              </p>
              <div className="mt-5 pt-4 border-t border-line flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-ink-soft">
                <span>{t.duracao}</span>
                <span aria-hidden>•</span>
                <span>{t.modulos.length} módulos</span>
              </div>
              <div
                className="mt-3 text-sm font-medium"
                style={{ color: t.accentColor }}
              >
                Ver trilha →
              </div>
            </Link>
          ))}
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
