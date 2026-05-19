import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { usePageVisitCounter } from '../hooks/usePageVisitCounter'

export default function Layout() {
  usePageVisitCounter()
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
