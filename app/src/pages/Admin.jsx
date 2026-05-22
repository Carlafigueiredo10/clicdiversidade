import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { isAdmin, signOutUser, useAuthUser } from '../services/auth'
import { getAllVisitas } from '../services/visits'
import { getSugestoes } from '../services/sugestoes'
import { getAvaliacoes } from '../services/avaliacoes'

const SECOES = {
  home: { label: 'Landing', path: '/' },
  jornada: { label: 'Jornada', path: '/jornada' },
  lelia: { label: 'Lélia', path: '/lelia' },
}

const CATEGORIA_LABEL = {
  conteudo: 'Conteúdo / trilhas',
  erro: 'Algo com erro',
  ideia: 'Ideia nova',
  outro: 'Outro',
}

function formatDate(ts) {
  if (!ts || typeof ts.toDate !== 'function') return '—'
  return ts.toDate().toLocaleString('pt-BR')
}

function Carregando() {
  return <p className="text-ink-soft text-sm">Carregando…</p>
}

function Erro({ children }) {
  return (
    <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg py-3 px-4">
      {children}
    </p>
  )
}

function Metricas() {
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

  if (erro) return <Erro>{erro}</Erro>
  if (!visitas) return <Carregando />

  return (
    <div className="space-y-8">
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
                <td colSpan={3} className="py-6 px-5 text-center text-ink-soft">
                  Nenhuma visita registrada ainda.
                </td>
              </tr>
            )}
            {ordenado.map((v) => {
              const meta = SECOES[v.id] || { label: v.id, path: '/' + v.id }
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
    </div>
  )
}

function Sugestoes() {
  const [itens, setItens] = useState(null)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    let alive = true
    getSugestoes()
      .then((s) => alive && setItens(s))
      .catch((e) => alive && setErro(e.message || 'Erro ao ler sugestões'))
    return () => {
      alive = false
    }
  }, [])

  if (erro) return <Erro>{erro}</Erro>
  if (!itens) return <Carregando />
  if (itens.length === 0) {
    return (
      <p className="text-ink-soft text-sm">Nenhuma sugestão recebida ainda.</p>
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-soft">
        {itens.length} {itens.length === 1 ? 'sugestão' : 'sugestões'}
      </p>
      {itens.map((s) => (
        <article
          key={s.id}
          className="bg-card border border-line rounded-xl p-5"
        >
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-[10px] uppercase tracking-wider bg-page border border-line text-ink-soft rounded px-2 py-0.5">
              {CATEGORIA_LABEL[s.categoria] || s.categoria}
            </span>
            <span className="text-xs text-muted">{formatDate(s.criado_em)}</span>
          </div>
          <p className="text-sm text-ink leading-relaxed whitespace-pre-wrap">
            {s.mensagem}
          </p>
          {s.contato && (
            <p className="mt-3 pt-3 border-t border-line text-xs text-ink-soft">
              Contato: <span className="font-mono">{s.contato}</span>
            </p>
          )}
        </article>
      ))}
    </div>
  )
}

function mediaDe(itens, campo) {
  const vals = itens.map((i) => i[campo]).filter((v) => typeof v === 'number')
  if (vals.length === 0) return null
  return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1)
}

function Avaliacoes() {
  const [itens, setItens] = useState(null)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    let alive = true
    getAvaliacoes()
      .then((a) => alive && setItens(a))
      .catch((e) => alive && setErro(e.message || 'Erro ao ler avaliações'))
    return () => {
      alive = false
    }
  }, [])

  if (erro) return <Erro>{erro}</Erro>
  if (!itens) return <Carregando />
  if (itens.length === 0) {
    return (
      <p className="text-ink-soft text-sm">Nenhuma avaliação recebida ainda.</p>
    )
  }

  const mediaGeral = mediaDe(itens, 'nota_geral')
  const mediaConteudo = mediaDe(itens, 'nota_conteudo')
  const recomendam = itens.filter((i) => i.recomenda === true).length
  const opinaramRecomenda = itens.filter(
    (i) => typeof i.recomenda === 'boolean',
  ).length

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="bg-card rounded-2xl border border-line p-5">
          <p className="text-xs tracking-[0.2em] uppercase text-ink-soft">
            Nota geral · média
          </p>
          <p className="mt-2 font-display text-4xl text-ink">
            {mediaGeral ?? '—'}
            <span className="text-lg text-muted">/5</span>
          </p>
        </div>
        <div className="bg-card rounded-2xl border border-line p-5">
          <p className="text-xs tracking-[0.2em] uppercase text-ink-soft">
            Conteúdo · média
          </p>
          <p className="mt-2 font-display text-4xl text-ink">
            {mediaConteudo ?? '—'}
            <span className="text-lg text-muted">/5</span>
          </p>
        </div>
        <div className="bg-card rounded-2xl border border-line p-5">
          <p className="text-xs tracking-[0.2em] uppercase text-ink-soft">
            Recomendam
          </p>
          <p className="mt-2 font-display text-4xl text-ink">
            {recomendam}
            <span className="text-lg text-muted">/{opinaramRecomenda}</span>
          </p>
        </div>
      </div>

      <p className="text-sm text-ink-soft">
        {itens.length} {itens.length === 1 ? 'avaliação' : 'avaliações'}
      </p>

      {itens.map((a) => (
        <article
          key={a.id}
          className="bg-card border border-line rounded-xl p-5"
        >
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-ink">
                Geral {a.nota_geral}/5
              </span>
              {typeof a.nota_conteudo === 'number' && (
                <span className="text-xs text-ink-soft">
                  · Conteúdo {a.nota_conteudo}/5
                </span>
              )}
              {typeof a.recomenda === 'boolean' && (
                <span
                  className={
                    'text-[10px] uppercase tracking-wider rounded px-2 py-0.5 border ' +
                    (a.recomenda
                      ? 'border-success text-success-fg bg-success/10'
                      : 'border-line text-ink-soft bg-page')
                  }
                >
                  {a.recomenda ? 'Recomenda' : 'Não recomenda'}
                </span>
              )}
            </div>
            <span className="text-xs text-muted">{formatDate(a.criado_em)}</span>
          </div>

          <div className="space-y-2 text-sm text-ink leading-relaxed">
            {a.funcionou && (
              <p className="whitespace-pre-wrap">
                <span className="text-ink-soft">Funcionou: </span>
                {a.funcionou}
              </p>
            )}
            {a.melhorar && (
              <p className="whitespace-pre-wrap">
                <span className="text-ink-soft">Melhorar: </span>
                {a.melhorar}
              </p>
            )}
            {a.assunto_proximo && (
              <p className="whitespace-pre-wrap">
                <span className="text-ink-soft">Próxima oficina: </span>
                {a.assunto_proximo}
              </p>
            )}
          </div>

          {(a.nome || a.orgao) && (
            <p className="mt-3 pt-3 border-t border-line text-xs text-ink-soft">
              {[a.nome, a.orgao].filter(Boolean).join(' · ')}
            </p>
          )}
        </article>
      ))}
    </div>
  )
}

const ABAS = [
  { id: 'metricas', label: 'Métricas' },
  { id: 'sugestoes', label: 'Sugestões' },
  { id: 'avaliacoes', label: 'Avaliações' },
]

function Painel({ user, onSair }) {
  const [aba, setAba] = useState('metricas')

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            Admin · {user.email}
          </p>
          <h1 className="mt-2 font-display font-semibold text-3xl text-ink">
            Painel
          </h1>
        </div>
        <button
          onClick={onSair}
          className="text-sm text-ink-soft hover:text-ink underline"
        >
          Sair
        </button>
      </div>

      <div className="flex gap-1 border-b border-line">
        {ABAS.map((t) => (
          <button
            key={t.id}
            onClick={() => setAba(t.id)}
            className={
              aba === t.id
                ? 'px-4 py-2 text-sm font-medium text-ink border-b-2 border-ink -mb-px'
                : 'px-4 py-2 text-sm text-ink-soft hover:text-ink transition'
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {aba === 'metricas' && <Metricas />}
      {aba === 'sugestoes' && <Sugestoes />}
      {aba === 'avaliacoes' && <Avaliacoes />}
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
          <Painel user={user} onSair={signOutUser} />
        ) : (
          <AcessoNegado user={user} onSair={signOutUser} />
        )}
      </div>
    </main>
  )
}
