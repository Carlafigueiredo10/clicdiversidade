import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ChartBars from '../components/ChartBars'
import { getDistribuicao } from '../services/participantes'

export default function Obrigado() {
  const [params] = useSearchParams()
  const nivel = params.get('nivel')
  const [dist, setDist] = useState(null)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    getDistribuicao()
      .then(setDist)
      .catch((e) => {
        console.error(e)
        setErro('Não foi possível carregar a distribuição agora.')
      })
  }, [])

  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Bem-vinda à jornada
        </p>

        <h1 className="mt-6 font-display font-semibold text-4xl md:text-5xl text-ink text-center leading-[1.05]">
          Seu ponto de partida foi registrado.
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Você é parte de uma comunidade plural construindo IA com
          responsabilidade. Veja onde estão os outros participantes.
        </p>

        <div className="mt-14 bg-card rounded-2xl border border-line p-6 md:p-10">
          <h2 className="font-display font-semibold text-xl text-ink mb-6">
            Distribuição dos participantes
          </h2>
          {dist ? (
            <ChartBars distribuicao={dist} nivelDoUsuario={nivel} />
          ) : erro ? (
            <p className="text-ink-soft text-sm">{erro}</p>
          ) : (
            <p className="text-ink-soft text-sm">Carregando…</p>
          )}
          {dist && (
            <p className="mt-6 text-xs text-muted text-center">
              Total: {dist.total}{' '}
              {dist.total === 1 ? 'participante' : 'participantes'}
            </p>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            to="/modulos"
            className="rounded-full bg-ink text-page px-7 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Começar pelos módulos →
          </Link>
          <a
            href="/"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink-soft hover:bg-card transition"
          >
            Voltar à página inicial
          </a>
        </div>
      </div>
    </main>
  )
}
