import { useEffect, useRef, useState } from 'react'
import FormField from '../components/FormField'
import HeadlineCinematic from '../components/HeadlineCinematic'
import LevelCard from '../components/LevelCard'
import PillToggle from '../components/PillToggle'
import ChartLevelLine from '../components/ChartLevelLine'
import ModulosGrid from '../features/modulos/ModulosGrid'
import {
  submeterParticipante,
  onDistribuicao,
} from '../services/participantes'

const NIVEIS = [
  {
    id: 'nunca_usei',
    title: 'Nunca usei IA',
    description:
      'Ouvi falar, mas ainda não experimentei nenhuma ferramenta de inteligência artificial.',
  },
  {
    id: 'perguntas_simples',
    title: 'Perguntas simples',
    description:
      'Já usei ChatGPT ou similar para tirar dúvidas básicas ou curiosidades.',
  },
  {
    id: 'produzo_conteudo',
    title: 'Produzo conteúdo',
    description:
      'Uso IA para redigir textos, resumir documentos ou auxiliar em tarefas do trabalho.',
  },
  {
    id: 'ja_criei',
    title: 'Já criei algo com IA',
    description:
      'Construí assistentes, automatizei processos ou desenvolvi soluções com ferramentas de IA.',
  },
]

export default function Jornada() {
  const [form, setForm] = useState({
    nome: '',
    orgao: '',
    email: '',
    whatsapp: '',
    quer_grupo_whatsapp: null,
    nivel: null,
  })
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState(null)
  const [enviado, setEnviado] = useState(false)
  const [nivelEnviado, setNivelEnviado] = useState(null)
  const [dist, setDist] = useState(null)
  const [distErro, setDistErro] = useState(null)
  const chartRef = useRef(null)

  // Listener real-time da distribuicao — atualiza enquanto a pagina esta aberta.
  useEffect(() => {
    const unsub = onDistribuicao(
      (d) => {
        setDist(d)
        setDistErro(null)
      },
      (err) => {
        console.error(err)
        setDistErro('Não foi possível conectar ao termômetro agora.')
      },
    )
    return unsub
  }, [])

  const dadosOk =
    form.nome.trim() && form.orgao.trim() && form.email.trim()
  const podeSubmeter =
    dadosOk &&
    form.nivel &&
    form.quer_grupo_whatsapp !== null &&
    !enviando

  function set(field) {
    return (value) =>
      setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!podeSubmeter) return
    setEnviando(true)
    setErro(null)
    try {
      await submeterParticipante(form)
      // Marca diagnostico como concluido (gate do certificado).
      // Pre-oficina: localStorage. Pos-oficina: trocar por gate via login.
      try {
        localStorage.setItem(
          'clic_diagnostico',
          JSON.stringify({
            nome: form.nome.trim(),
            email: form.email.trim().toLowerCase(),
            nivel: form.nivel,
            criado_em: new Date().toISOString(),
          }),
        )
      } catch {
        // localStorage indisponivel (modo privado) -- silenciar; pessoa
        // refaz pra liberar cert.
      }
      setNivelEnviado(form.nivel)
      setEnviado(true)
      setEnviando(false)
      requestAnimationFrame(() => {
        chartRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      })
    } catch (err) {
      console.error(err)
      setErro(
        'Não foi possível enviar agora. Tente novamente em alguns segundos.',
      )
      setEnviando(false)
    }
  }

  const total = dist?.total ?? 0

  return (
    <main className="px-5 py-16 md:py-24">
      <section className="mx-auto max-w-3xl">
        <HeadlineCinematic
          eyebrow="Ponto de partida"
          lines={['Onde você está na', 'jornada digital?']}
        />

        <p className="mt-6 max-w-xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Informe seus dados abaixo e entre no grupo de WhatsApp para troca de
          experiências.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-8">
          <fieldset
            disabled={enviado}
            className="space-y-8 disabled:opacity-70 transition-opacity"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <FormField
                id="nome"
                label="Seu nome"
                value={form.nome}
                onChange={set('nome')}
                required
              />
              <FormField
                id="orgao"
                label="Órgão / Instituição"
                value={form.orgao}
                onChange={set('orgao')}
                required
              />
              <FormField
                id="email"
                label="E-mail"
                type="email"
                value={form.email}
                onChange={set('email')}
                required
              />
              <FormField
                id="whatsapp"
                label="WhatsApp (opcional)"
                type="tel"
                value={form.whatsapp}
                onChange={set('whatsapp')}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 px-2">
              <span className="text-accent-fg text-sm">
                Quer entrar no grupo de WhatsApp do programa?
              </span>
              <PillToggle
                value={form.quer_grupo_whatsapp}
                onChange={set('quer_grupo_whatsapp')}
              />
            </div>

            <p className="text-center text-muted text-sm">
              Preencha acima e selecione seu nível abaixo.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {NIVEIS.map((n) => (
                <LevelCard
                  key={n.id}
                  id={n.id}
                  title={n.title}
                  description={n.description}
                  selected={form.nivel === n.id}
                  onSelect={set('nivel')}
                />
              ))}
            </div>
          </fieldset>

          {erro && (
            <p className="text-center text-red-700 bg-red-50 border border-red-200 rounded-xl py-3 px-4">
              {erro}
            </p>
          )}

          {!enviado ? (
            <div className="flex flex-col items-center gap-3 pt-4">
              <button
                type="submit"
                disabled={!podeSubmeter}
                className="rounded-full bg-ink text-page px-8 py-3.5 font-medium hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {enviando ? 'Enviando…' : 'Entrar na jornada'}
              </button>
              <p className="text-xs text-muted max-w-md text-center leading-relaxed">
                Ao enviar, você autoriza o uso dos seus dados para contato sobre
                o programa CLIC_diversidade. Não compartilhamos com terceiros.
              </p>
            </div>
          ) : (
            <div className="flex justify-center pt-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-success bg-success/10 text-success-fg px-5 py-2 text-sm font-medium">
                <span aria-hidden>✓</span> Registrado
              </span>
            </div>
          )}
        </form>

        {/* Termometro — aparece apos entrar na jornada, antes dos modulos.
            Listener real-time mantem a barra atualizando enquanto outros votam. */}
        {enviado && (
          <div
            ref={chartRef}
            className="mt-20 pt-12 border-t border-line"
            aria-live="polite"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
              Bem-vinda à jornada
            </p>
            <h2 className="mt-6 font-display font-semibold text-3xl md:text-5xl text-ink text-center leading-[1.05]">
              Onde você está nessa sala.
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
              Você faz parte de uma comunidade plural. O termômetro abaixo
              atualiza em tempo real conforme outras pessoas respondem.
            </p>

            <div className="mt-12 bg-card rounded-2xl border border-line p-6 md:p-8 shadow-sm">
              <div className="flex items-baseline justify-between mb-5">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-accent-fg font-semibold">
                    Termômetro da oficina
                  </p>
                  <h3 className="mt-1.5 font-display font-semibold text-lg text-ink">
                    Distribuição em tempo real
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-display font-semibold text-3xl text-ink tabular-nums">
                    {total}
                  </span>
                  <p className="text-[10px] uppercase tracking-wider text-muted">
                    {total === 1 ? 'resposta' : 'respostas'}
                  </p>
                </div>
              </div>
              {distErro ? (
                <p className="text-ink-soft text-sm">{distErro}</p>
              ) : (
                <ChartLevelLine
                  distribuicao={dist || {}}
                  nivelDoUsuario={nivelEnviado}
                />
              )}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="#modulos"
                className="rounded-full bg-ink text-page px-7 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Começar pelos módulos ↓
              </a>
            </div>
          </div>
        )}
      </section>

      <section
        id="modulos"
        className="mx-auto max-w-5xl mt-28 pt-16 border-t border-line scroll-mt-8"
      >
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Trilha de aprendizado
        </p>

        <h2 className="mt-6 font-display font-semibold text-4xl md:text-5xl text-ink text-center leading-[1.05]">
          Módulos
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Conteúdo prático de IA generativa para gestoras públicas. Cada módulo
          é independente — comece pelo que fizer mais sentido para você.
        </p>

        <div className="mt-14">
          <ModulosGrid />
        </div>
      </section>
    </main>
  )
}
