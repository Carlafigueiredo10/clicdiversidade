import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from '../components/FormField'
import LevelCard from '../components/LevelCard'
import PillToggle from '../components/PillToggle'
import { submeterParticipante } from '../services/participantes'

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
  const navigate = useNavigate()
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
      navigate(`/obrigado?nivel=${form.nivel}`)
    } catch (err) {
      console.error(err)
      setErro(
        'Não foi possível enviar agora. Tente novamente em alguns segundos.',
      )
      setEnviando(false)
    }
  }

  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Ponto de partida
        </p>

        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          Onde você está na
          <br />
          jornada digital?
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Informe seus dados abaixo e entre no grupo de WhatsApp para troca de
          experiências.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-8">
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

          {erro && (
            <p className="text-center text-red-700 bg-red-50 border border-red-200 rounded-xl py-3 px-4">
              {erro}
            </p>
          )}

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
        </form>
      </div>
    </main>
  )
}
