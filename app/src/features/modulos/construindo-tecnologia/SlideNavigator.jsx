import { useEffect, useRef, useState } from 'react'

const SRC = `${import.meta.env.BASE_URL}apresentacoes/bloco4-construindo-tecnologia.html`

// O deck foi desenhado para tela cheia: usa vh/vw em 73 lugares e cada slide
// tem overflow:hidden, entao o que nao cabe some sem aviso. Em vez de converter
// todas essas medidas para pixel, renderizamos o iframe sempre neste tamanho
// base e escalamos o resultado. Por dentro o deck continua enxergando uma
// janela 16:9 e resolve o vh/vw certo; por fora ele encolhe inteiro, sem cortar.
const BASE_W = 1440
const BASE_H = 810

export default function SlideNavigator() {
  const containerRef = useRef(null)
  const iframeRef = useRef(null)
  const [isPresenting, setIsPresenting] = useState(false)
  const [box, setBox] = useState({ scale: 1, left: 0, top: 0 })

  async function enterPresentation() {
    if (!containerRef.current) return
    try {
      await containerRef.current.requestFullscreen()
      iframeRef.current?.focus()
    } catch {
      setIsPresenting(true)
    }
  }

  async function exitPresentation() {
    if (document.fullscreenElement) {
      await document.exitFullscreen()
    } else {
      setIsPresenting(false)
    }
  }

  useEffect(() => {
    function onFsChange() {
      const now = Boolean(document.fullscreenElement)
      setIsPresenting(now)
      if (now) iframeRef.current?.focus()
    }
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  // Recalcula a escala sempre que o container muda de tamanho. Usa o menor
  // fator entre largura e altura para nunca estourar, e centraliza o que
  // sobrar — em tela nao-16:9 (projetor 4:3, por exemplo) fica tarja preta em
  // vez de conteudo cortado.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    function medir() {
      const { width, height } = el.getBoundingClientRect()
      if (!width || !height) return
      const scale = Math.min(width / BASE_W, height / BASE_H)
      setBox({
        scale,
        left: (width - BASE_W * scale) / 2,
        top: (height - BASE_H * scale) / 2,
      })
    }

    medir()
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', medir)
      return () => window.removeEventListener('resize', medir)
    }
    const ro = new ResizeObserver(medir)
    ro.observe(el)
    return () => ro.disconnect()
  }, [isPresenting])

  return (
    <div
      ref={containerRef}
      className={
        isPresenting
          ? 'relative bg-black w-screen h-screen overflow-hidden'
          : 'relative rounded-3xl overflow-hidden border border-line bg-black aspect-[16/9]'
      }
    >
      <iframe
        ref={iframeRef}
        src={SRC}
        title="Bloco 4 — Construindo Tecnologia"
        className="block border-0"
        style={{
          position: 'absolute',
          width: `${BASE_W}px`,
          height: `${BASE_H}px`,
          left: `${box.left}px`,
          top: `${box.top}px`,
          transform: `scale(${box.scale})`,
          transformOrigin: 'top left',
        }}
        allow="fullscreen"
        allowFullScreen
      />

      <div
        className={
          'absolute top-3 right-3 flex gap-2 ' + (isPresenting ? 'z-10' : '')
        }
      >
        {!isPresenting ? (
          <button
            type="button"
            onClick={enterPresentation}
            title="Apresentar em tela cheia"
            className="rounded-full bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 text-xs font-medium hover:bg-white/20 transition"
          >
            ▶ Apresentar
          </button>
        ) : (
          <button
            type="button"
            onClick={exitPresentation}
            title="Sair (ESC)"
            className="rounded-full bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 text-xs font-medium hover:bg-white/20 transition"
          >
            ⤬ Sair
          </button>
        )}
      </div>

      {!isPresenting && (
        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] tracking-wider uppercase text-white/40 font-mono pointer-events-none">
          Clique em ▶ Apresentar para tela cheia
        </p>
      )}
    </div>
  )
}
