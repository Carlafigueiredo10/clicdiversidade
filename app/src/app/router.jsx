import { createBrowserRouter } from 'react-router-dom'
import Jornada from '../pages/Jornada'
import Obrigado from '../pages/Obrigado'
import Modulos from '../pages/Modulos'
import EngenhariaPrompt from '../pages/modulos/EngenhariaPrompt'

export const router = createBrowserRouter(
  [
    { path: '/', element: <Jornada /> },
    { path: '/obrigado', element: <Obrigado /> },
    { path: '/modulos', element: <Modulos /> },
    { path: '/modulos/engenharia-prompt', element: <EngenhariaPrompt /> },
  ],
  { basename: '/jornada' },
)
