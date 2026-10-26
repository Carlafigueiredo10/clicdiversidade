import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from './Layout'
import Jornada from '../pages/Jornada'
import EngenhariaPrompt from '../pages/modulos/EngenhariaPrompt'
import CriandoAssistente from '../pages/modulos/CriandoAssistente'
import ConstruindoTecnologia from '../pages/modulos/ConstruindoTecnologia'
import Trilhas from '../pages/modulos/Trilhas'
import TrilhaDetalhe from '../pages/modulos/TrilhaDetalhe'
import Governanca from '../pages/modulos/Governanca'
import GovernancaAgente from '../pages/modulos/GovernancaAgente'
import GovernancaAIE from '../pages/modulos/GovernancaAIE'
import MaterialOficina from '../pages/modulos/MaterialOficina'
import AntesDeConstruir from '../pages/modulos/AntesDeConstruir'
import QuebrandoOMito from '../pages/modulos/QuebrandoOMito'
import Glossario from '../pages/Glossario'
import BaseTeorica from '../pages/BaseTeorica'
import Equipe from '../pages/Equipe'
import Manifesto from '../pages/Manifesto'
import Visao from '../pages/Visao'
import PonteOuPrecipicio from '../pages/modulos/PonteOuPrecipicio'
import Avaliacao from '../pages/Avaliacao'
import LeliaTest from '../pages/LeliaTest'
import Admin from '../pages/Admin'
import Login from '../pages/Login'

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Jornada /> },
        { path: '/modulos/engenharia-prompt', element: <EngenhariaPrompt /> },
        {
          path: '/modulos/criando-assistente',
          element: <CriandoAssistente />,
        },
        {
          path: '/modulos/construindo-tecnologia',
          element: <ConstruindoTecnologia />,
        },
        { path: '/modulos/trilhas', element: <Trilhas /> },
        { path: '/modulos/trilhas/:slug', element: <TrilhaDetalhe /> },
        { path: '/modulos/governanca', element: <Governanca /> },
        { path: '/modulos/governanca/agente', element: <GovernancaAgente /> },
        { path: '/modulos/governanca/aie', element: <GovernancaAIE /> },
        { path: '/modulos/oficina', element: <MaterialOficina /> },
        { path: '/modulos/antes-de-construir', element: <AntesDeConstruir /> },
        { path: '/modulos/oficina/desde-a-origem', element: <Visao /> },
        {
          path: '/modulos/oficina/quebrando-o-mito',
          element: <QuebrandoOMito />,
        },
        { path: '/modulos/oficina/ponte-ou-precipicio', element: <PonteOuPrecipicio /> },
        { path: '/glossario', element: <Glossario /> },
        { path: '/base-teorica', element: <BaseTeorica /> },
        { path: '/equipe', element: <Equipe /> },
        { path: '/manifesto', element: <Manifesto /> },
        // /visao era a rota antiga (fora dos modulos); mantida pra links ja compartilhados.
        { path: '/visao', element: <Navigate to="/modulos/oficina/desde-a-origem" replace /> },
        { path: '/avaliacao', element: <Avaliacao /> },
        { path: '/lelia-test', element: <LeliaTest /> },
        { path: '/admin', element: <Admin /> },
        { path: '/login', element: <Login /> },
      ],
    },
  ],
  { basename: '/jornada' },
)
