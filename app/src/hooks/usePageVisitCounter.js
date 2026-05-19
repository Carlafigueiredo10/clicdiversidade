import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { registrarVisita } from '../services/visits'

// Hook que registra 1 visita por sessao por secao do site.
// Silencioso por design: erros so vao pro console (visitas nao podem
// derrubar a UI). Re-executa quando o pathname muda no Router.
export function usePageVisitCounter() {
  const { pathname } = useLocation()
  useEffect(() => {
    registrarVisita(pathname).catch((err) => {
      console.error('[visit-counter]', err)
    })
  }, [pathname])
}
