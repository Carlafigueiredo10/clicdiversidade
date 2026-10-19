import { useEffect, useRef, useState } from 'react'
import { tr } from '../i18n'

const T = tr({
  pt: { apresentarTitle: 'Apresentar em tela cheia', apresentar: '▶ Apresentar', sairTitle: 'Sair (ESC)', sair: '⤬ Sair', dica: 'Clique em ▶ Apresentar para tela cheia' },
  es: { apresentarTitle: 'Presentar en pantalla completa', apresentar: '▶ Presentar', sairTitle: 'Salir (ESC)', sair: '⤬ Salir', dica: 'Haz clic en ▶ Presentar para pantalla completa' },
})

// Embute um deck HTML standalone (app/public/...) num iframe, com controle de
// tela cheia (Apresentar / Sair). Usado pelas apresentacoes dos blocos da oficina.
// Deck com versao em espanhol (<nome>.es.html) se redireciona sozinho quando o
// idioma e ES — por isso o src aqui e sempre o do deck em portugues.
export default function SlideNavigator({ src, title, slideCount }) {
  const containerRef = useRef(null)
  const iframeRef = useRef(null)
  const [isPresenting, setIsPresenting] = useState(false)

  const fullSrc = `${import.meta.env.BASE_URL}${src}`

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

  return (
    <div
      ref={containerRef}
      className={
        isPresenting
          ? 'bg-page w-screen h-screen overflow-hidden'
          : 'relative rounded-3xl overflow-hidden border border-line bg-black'
      }
    >
      <iframe
        ref={iframeRef}
        src={fullSrc}
        title={title}
        className={
          isPresenting
            ? 'w-full h-full border-0 block'
            : 'w-full h-[70vh] min-h-[520px] border-0 block'
        }
        allow="fullscreen"
        allowFullScreen
      />

      <div
        className={
          'absolute top-3 right-3 flex gap-2 ' +
          (isPresenting ? 'z-10' : '')
        }
      >
        {!isPresenting ? (
          <button
            type="button"
            onClick={enterPresentation}
            title={T.apresentarTitle}
            className="rounded-full bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 text-xs font-medium hover:bg-white/20 transition"
          >
            {T.apresentar}
          </button>
        ) : (
          <button
            type="button"
            onClick={exitPresentation}
            title={T.sairTitle}
            className="rounded-full bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-2 text-xs font-medium hover:bg-white/20 transition"
          >
            {T.sair}
          </button>
        )}
      </div>

      {!isPresenting && (
        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] tracking-wider uppercase text-white/40 font-mono pointer-events-none">
          {T.dica}
          {slideCount ? ` · ${slideCount} slides` : ''}
        </p>
      )}
    </div>
  )
}
