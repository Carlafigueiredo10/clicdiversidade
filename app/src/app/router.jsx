import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Jornada from '../pages/Jornada'
import EngenhariaPrompt from '../pages/modulos/EngenhariaPrompt'
import FerramentasIA from '../pages/modulos/FerramentasIA'
import ConstruindoTecnologia from '../pages/modulos/ConstruindoTecnologia'
import Trilhas from '../pages/modulos/Trilhas'
import TrilhaDetalhe from '../pages/modulos/TrilhaDetalhe'
import Governanca from '../pages/modulos/Governanca'
import Glossario from '../pages/Glossario'
import LeliaTest from '../pages/LeliaTest'
import Admin from '../pages/Admin'

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Jornada /> },
        { path: '/modulos/engenharia-prompt', element: <EngenhariaPrompt /> },
        { path: '/modulos/ferramentas', element: <FerramentasIA /> },
        {
          path: '/modulos/construindo-tecnologia',
          element: <ConstruindoTecnologia />,
        },
        { path: '/modulos/trilhas', element: <Trilhas /> },
        { path: '/modulos/trilhas/:slug', element: <TrilhaDetalhe /> },
        { path: '/modulos/governanca', element: <Governanca /> },
        { path: '/glossario', element: <Glossario /> },
        { path: '/lelia-test', element: <LeliaTest /> },
        { path: '/admin', element: <Admin /> },
      ],
    },
  ],
  { basename: '/jornada' },
)
