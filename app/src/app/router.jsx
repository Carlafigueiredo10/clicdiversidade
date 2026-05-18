import { createBrowserRouter } from 'react-router-dom'
import Jornada from '../pages/Jornada'
import Obrigado from '../pages/Obrigado'

export const router = createBrowserRouter(
  [
    { path: '/', element: <Jornada /> },
    { path: '/obrigado', element: <Obrigado /> },
  ],
  { basename: '/jornada' },
)
