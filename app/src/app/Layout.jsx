import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { usePageVisitCounter } from '../hooks/usePageVisitCounter'

// Rotas onde o widget flutuante da Lelia (Tutora/Guia) deve sumir.
// Mais comum: pagina que ja tem chat dedicado da Lelia Governanca — dois
// chats simultaneos confundem.
const ROTAS_SEM_WIDGET = ['/modulos/governanca/agente']

function useEsconderWidgetEm(rotas) {
  const { pathname } = useLocation()
  useEffect(() => {
    const esconder = rotas.some((r) => pathname === r || pathname.startsWith(r + '/'))
    const fab = document.querySelector('.__lelia-fab')
    const panel = document.querySelector('.__lelia-panel')
    if (fab) fab.style.display = esconder ? 'none' : ''
    if (panel && esconder) panel.classList.remove('__lelia-panel--open')
  }, [pathname, rotas])
}

export default function Layout() {
  usePageVisitCounter()
  useEsconderWidgetEm(ROTAS_SEM_WIDGET)
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
