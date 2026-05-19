import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import {
  isAdmin,
  signInWithGoogle,
  signOutUser,
  useAuthUser,
} from '../services/auth'

function GoogleIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 18 18"
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.71H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.167 6.656 3.58 9 3.58z"
      />
    </svg>
  )
}

export default function Login() {
  const { user, loading } = useAuthUser()
  const navigate = useNavigate()
  const location = useLocation()
  const [erro, setErro] = useState(null)
  const [entrando, setEntrando] = useState(false)

  // Se ja chegou logado, manda pra de onde veio (ou /admin se for admin).
  if (!loading && user) {
    const from = location.state?.from
    if (from) return <Navigate to={from} replace />
    if (isAdmin(user)) return <Navigate to="/admin" replace />
    return <Navigate to="/" replace />
  }

  async function entrar() {
    setErro(null)
    setEntrando(true)
    try {
      const cred = await signInWithGoogle()
      const from = location.state?.from
      if (from) navigate(from, { replace: true })
      else if (isAdmin(cred.user)) navigate('/admin', { replace: true })
      else navigate('/', { replace: true })
    } catch (e) {
      if (e.code === 'auth/popup-closed-by-user') {
        setErro(null)
      } else if (
        e.code === 'auth/operation-not-allowed' ||
        e.code === 'auth/configuration-not-found'
      ) {
        setErro(
          'Login com Google ainda não está habilitado no Firebase Console (Authentication → Sign-in method → Google → Enable).',
        )
      } else if (e.code === 'auth/unauthorized-domain') {
        setErro(
          'Este domínio não está autorizado. Adicione em Authentication → Settings → Authorized domains.',
        )
      } else if (e.code === 'auth/popup-blocked') {
        setErro('O navegador bloqueou o popup. Permita popups e tente de novo.')
      } else {
        setErro(e.message || 'Não foi possível entrar agora.')
      }
    } finally {
      setEntrando(false)
    }
  }

  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-md text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
          Entrar
        </p>
        <h1 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink">
          Acesse com sua conta Google
        </h1>
        <p className="mt-4 text-ink-soft text-sm leading-relaxed">
          Hoje o login é opcional. Em breve será necessário para acessar os
          conteúdos pós-oficina.
        </p>

        {erro && (
          <p className="mt-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg py-3 px-4 text-left">
            {erro}
          </p>
        )}

        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={entrar}
            disabled={entrando || loading}
            className="inline-flex items-center gap-3 rounded-full bg-ink text-page px-6 py-3 font-medium hover:opacity-90 transition disabled:opacity-40"
          >
            <span className="bg-page rounded-full p-1.5">
              <GoogleIcon />
            </span>
            {entrando ? 'Entrando…' : 'Entrar com Google'}
          </button>

          {user && (
            <button
              type="button"
              onClick={() => signOutUser()}
              className="text-xs text-ink-soft hover:text-ink underline"
            >
              Sair de {user.email}
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
