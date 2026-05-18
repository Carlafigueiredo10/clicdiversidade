import { createBrowserRouter } from 'react-router-dom'
import Jornada from '../pages/Jornada'
import EngenhariaPrompt from '../pages/modulos/EngenhariaPrompt'
import FerramentasIA from '../pages/modulos/FerramentasIA'
import ConstruindoTecnologia from '../pages/modulos/ConstruindoTecnologia'
import LeliaTest from '../pages/LeliaTest'

export const router = createBrowserRouter(
  [
    { path: '/', element: <Jornada /> },
    { path: '/modulos/engenharia-prompt', element: <EngenhariaPrompt /> },
    { path: '/modulos/ferramentas', element: <FerramentasIA /> },
    { path: '/modulos/construindo-tecnologia', element: <ConstruindoTecnologia /> },
    { path: '/lelia-test', element: <LeliaTest /> },
  ],
  { basename: '/jornada' },
)
