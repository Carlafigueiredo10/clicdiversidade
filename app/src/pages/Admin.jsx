import { useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../services/firebase'
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

function LoginForm({ onSubmit, erro, enviando }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(email, senha)
      }}
      className="mx-auto max-w-sm space-y-4"
    >
      <div>
        <label className="block text-sm text-ink-soft mb-1" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-line bg-page px-4 py-2.5 text-ink focus:outline-none focus:border-ink"
        />
      </div>
      <div>
        <label className="block text-sm text-ink-soft mb-1" htmlFor="senha">
          Senha
        </label>
        <input
          id="senha"
          type="password"
          required
          autoComplete="current-password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full rounded-lg border border-line bg-page px-4 py-2.5 text-ink focus:outline-none focus:border-ink"
        />
      </div>
      {erro && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg py-2 px-3">
          {erro}
        </p>
      )}
      <button
        type="submit"
        disabled={enviando}
        className="w-full rounded-full bg-ink text-page px-6 py-3 font-medium hover:opacity-90 transition disabled:opacity-40"
      >
        {enviando ? 'Entrando…' : 'Entrar'}
      </button>
    </form>
  )
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

export default function Admin() {
  const [user, setUser] = useState(null)
  const [carregandoAuth, setCarregandoAuth] = useState(true)
  const [erro, setErro] = useState(null)
  const [enviando, setEnviando] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setCarregandoAuth(false)
    })
    return unsub
  }, [])

  async function entrar(email, senha) {
    setErro(null)
    setEnviando(true)
    try {
      await signInWithEmailAndPassword(auth, email, senha)
    } catch (e) {
      setErro(
        e.code === 'auth/invalid-credential'
          ? 'E-mail ou senha incorretos.'
          : e.message || 'Erro ao entrar.',
      )
    } finally {
      setEnviando(false)
    }
  }

  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        {carregandoAuth ? (
          <p className="text-center text-ink-soft">Carregando…</p>
        ) : user ? (
          <Metricas user={user} onSair={() => signOut(auth)} />
        ) : (
          <>
            <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
              Admin
            </p>
            <h1 className="mt-4 font-display font-semibold text-3xl text-ink text-center">
              Acesso restrito
            </h1>
            <p className="mt-3 text-center text-ink-soft text-sm">
              Métricas internas do programa.
            </p>
            <div className="mt-10">
              <LoginForm
                onSubmit={entrar}
                erro={erro}
                enviando={enviando}
              />
            </div>
          </>
        )}
      </div>
    </main>
  )
}
