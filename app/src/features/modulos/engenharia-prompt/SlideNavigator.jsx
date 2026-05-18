import { useEffect, useState } from 'react'
import { slides } from './index'

export default function SlideNavigator() {
  const [i, setI] = useState(0)
  const total = slides.length
  const Slide = slides[i]

  const prev = () => setI((v) => Math.max(0, v - 1))
  const next = () => setI((v) => Math.min(total - 1, v + 1))

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [total])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [i])

  return (
    <div>
      <div className="min-h-[400px]">
        <Slide />
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={prev}
          disabled={i === 0}
          className="rounded-full border border-line px-5 py-2.5 text-sm text-ink-soft hover:bg-card disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          ← Anterior
        </button>

        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-ink-soft font-medium">
            {i + 1} / {total}
          </span>
          <div className="flex gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={
                  'h-1.5 rounded-full transition ' +
                  (idx === i
                    ? 'w-6 bg-accent'
                    : 'w-1.5 bg-line hover:bg-muted')
                }
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          disabled={i === total - 1}
          className="rounded-full bg-ink text-page px-5 py-2.5 text-sm hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          Próximo →
        </button>
      </div>
    </div>
  )
}
