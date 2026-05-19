import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { isAdmin, signOutUser, useAuthUser } from '../services/auth'
import { getAllVisitas } from '../services/visits'

const SECOES = {
  home: { label: 'Landing', path: '/' },
  jornada: { label: 'Jornada', path: '/jornada' },
  lelia: { label: 'Lélia', path: '/lelia' },
}

function formatDate(ts) {
  if (!ts || typeof ts.toDate !== 'function') return '—'
  return ts.toDate().toLocaleString('pt-BR')
}

function Metricas({ user, onSair }) {
  const [visitas, setVisitas] = useState(null)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    let alive = true
    getAllVisitas()
      .then((v) => alive && setVisitas(v))
      .catch((e) => alive && setErro(e.message || 'Erro ao ler métricas'))
    return () => {
      alive = false
    }
  }, [])

  const ordenado = (visitas || [])
    .slice()
    .sort((a, b) => (b.total ?? 0) - (a.total ?? 0))
  const total = (visitas || []).reduce((acc, v) => acc + (v.total ?? 0), 0)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            Admin · {user.email}
          </p>
          <h1 className="mt-2 font-display font-semibold text-3xl text-ink">
            Métricas de visitas
          </h1>
        </div>
        <button
          onClick={onSair}
          className="text-sm text-ink-soft hover:text-ink underline"
        >
          Sair
        </button>
      </div>

      {erro && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg py-3 px-4">
          {erro}
        </p>
      )}

      {!visitas && !erro && (
        <p className="text-ink-soft text-sm">Carregando…</p>
      )}

      {visitas && (
        <>
          <div className="bg-card rounded-2xl border border-line p-6">
            <p className="text-xs tracking-[0.2em] uppercase text-ink-soft">
              Total acumulado
            </p>
            <p className="mt-2 font-display text-5xl text-ink">{total}</p>
          </div>

          <div className="bg-card rounded-2xl border border-line overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-page/50">
                <tr className="text-left text-ink-soft">
                  <th className="py-3 px-5 font-medium">Seção</th>
                  <th className="py-3 px-5 font-medium text-right">Visitas</th>
                  <th className="py-3 px-5 font-medium">Atualizado</th>
                </tr>
              </thead>
              <tbody>
                {ordenado.length === 0 && (
                  <tr>
                    <td
                      colSpan={3}
                      className="py-6 px-5 text-center text-ink-soft"
                    >
                      Nenhuma visita registrada ainda.
                    </td>
                  </tr>
                )}
                {ordenado.map((v) => {
                  const meta = SECOES[v.id] || {
                    label: v.id,
                    path: '/' + v.id,
                  }
                  return (
                    <tr key={v.id} className="border-t border-line">
                      <td className="py-3 px-5">
                        <span className="text-ink">{meta.label}</span>
                        <span className="ml-2 text-ink-soft text-xs">
                          {meta.path}
                        </span>
                      </td>
                      <td className="py-3 px-5 text-right font-mono text-ink">
                        {v.total ?? 0}
                      </td>
                      <td className="py-3 px-5 text-ink-soft">
                        {formatDate(v.updated_at)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

function AcessoNegado({ user, onSair }) {
  return (
    <div className="text-center">
      <p className="text-xs tracking-[0.25em] uppercase text-red-700 font-semibold">
        Acesso negado
      </p>
      <h1 className="mt-4 font-display font-semibold text-3xl text-ink">
        Essa conta não tem permissão de admin
      </h1>
      <p className="mt-4 text-ink-soft text-sm">
        Você entrou como <span className="font-mono">{user.email}</span>. Saia e
        entre com a conta autorizada.
      </p>
      <button
        onClick={onSair}
        className="mt-8 rounded-full border border-line px-6 py-3 text-sm text-ink-soft hover:bg-card transition"
      >
        Sair desta conta
      </button>
    </div>
  )
}

export default function Admin() {
  const { user, loading } = useAuthUser()

  if (loading) {
    return (
      <main className="px-5 py-16 md:py-24">
        <p className="text-center text-ink-soft">Carregando…</p>
      </main>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: '/admin' }} />
  }

  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        {isAdmin(user) ? (
          <Metricas user={user} onSair={signOutUser} />
        ) : (
          <AcessoNegado user={user} onSair={signOutUser} />
        )}
      </div>
    </main>
  )
}
