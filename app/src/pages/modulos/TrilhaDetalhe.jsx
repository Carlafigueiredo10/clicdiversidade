import { Navigate, useParams } from 'react-router-dom'
import Trilha from '../../features/modulos/trilhas/Trilha'
import { TRILHAS } from '../../features/modulos/trilhas/data'

export default function TrilhaDetalhe() {
  const { slug } = useParams()
  const data = TRILHAS.find((t) => t.slug === slug)
  if (!data) return <Navigate to="/modulos/trilhas" replace />
  return <Trilha data={data} />
}
