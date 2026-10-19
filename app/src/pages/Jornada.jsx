import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FormField from '../components/FormField'
import HeadlineCinematic from '../components/HeadlineCinematic'
import LevelCard from '../components/LevelCard'
import ChartLevelLine from '../components/ChartLevelLine'
import ModulosGrid from '../features/modulos/ModulosGrid'
import SugestaoForm from '../features/sugestoes/SugestaoForm'
import {
  submeterParticipante,
  onDistribuicao,
} from '../services/participantes'
import { tr } from '../i18n'

const NIVEIS = tr({
  pt: [
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
  ],
  es: [
    {
      id: 'nunca_usei',
      title: 'Nunca usé IA',
      description:
        'Escuché hablar de ella, pero todavía no probé ninguna herramienta de inteligencia artificial.',
    },
    {
      id: 'perguntas_simples',
      title: 'Preguntas simples',
      description:
        'Ya usé ChatGPT o similar para resolver dudas básicas o por curiosidad.',
    },
    {
      id: 'produzo_conteudo',
      title: 'Produzco contenido',
      description:
        'Uso IA para redactar textos, resumir documentos o apoyarme en tareas del trabajo.',
    },
    {
      id: 'ja_criei',
      title: 'Ya creé algo con IA',
      description:
        'Construí asistentes, automaticé procesos o desarrollé soluciones con herramientas de IA.',
    },
  ],
})

const T = tr({
  pt: {
    erroTermometro: 'Não foi possível conectar ao termômetro agora.',
    erroEnvio: 'Não foi possível enviar agora. Tente novamente em alguns segundos.',
    eyebrow: 'Ponto de partida',
    headline: ['Onde você está na', 'jornada digital?'],
    intro: 'Informe seus dados abaixo e escolha o nível que mais se parece com o seu momento hoje.',
    nome: 'Seu nome',
    orgao: 'Órgão / Instituição',
    email: 'E-mail',
    whatsapp: 'WhatsApp (opcional)',
    dica: 'Preencha acima e selecione seu nível abaixo.',
    enviando: 'Enviando…',
    entrar: 'Entrar na jornada',
    consentimento:
      'Ao enviar, você autoriza o uso dos seus dados para contato sobre o programa CLIC_diversidade. Não compartilhamos com terceiros.',
    registrado: 'Registrado',
    boasVindas: 'Bem-vinda à jornada',
    salaTitulo: 'Onde você está nessa sala.',
    salaTexto:
      'Você faz parte de uma comunidade plural. O termômetro abaixo atualiza em tempo real conforme outras pessoas respondem.',
    termometro: 'Termômetro da oficina',
    distribuicao: 'Distribuição em tempo real',
    resposta: 'resposta',
    respostas: 'respostas',
    comecarModulos: 'Começar pelos módulos ↓',
    certificado: 'Gerar certificado',
    trilhaEyebrow: 'Trilha de aprendizado',
    modulos: 'Módulos',
    modulosTexto:
      'Conteúdo prático de IA generativa para gestoras públicas. Cada módulo é independente — comece pelo que fizer mais sentido para você.',
    oficinaEyebrow: 'Oficina Humanos no Comando',
    oficinaTitulo: 'Como foi a oficina?',
    oficinaTexto:
      'Participou da oficina Humanos no Comando? Sua avaliação leva um minuto e ajuda a desenhar as próximas turmas.',
    avaliar: 'Avaliar a oficina →',
    sugestaoEyebrow: 'Constrói com a gente',
    sugestaoTitulo: 'Sugira uma melhoria',
    sugestaoTexto:
      'Achou algo confuso, sentiu falta de um conteúdo ou teve uma ideia? Conta pra gente — o CLIC é construído ouvindo quem usa.',
  },
  es: {
    erroTermometro: 'No fue posible conectarse al termómetro en este momento.',
    erroEnvio: 'No fue posible enviar en este momento. Inténtalo de nuevo en unos segundos.',
    eyebrow: 'Punto de partida',
    headline: ['¿Dónde estás en el', 'recorrido digital?'],
    intro: 'Completa tus datos abajo y elige el nivel que más se parece a tu momento actual.',
    nome: 'Tu nombre',
    orgao: 'Organismo / Institución',
    email: 'Correo electrónico',
    whatsapp: 'WhatsApp (opcional)',
    dica: 'Completa los datos de arriba y selecciona tu nivel abajo.',
    enviando: 'Enviando…',
    entrar: 'Entrar al recorrido',
    consentimento:
      'Al enviar, autorizas el uso de tus datos para contactarte sobre el programa CLIC_diversidade. No los compartimos con terceros.',
    registrado: 'Registrado',
    boasVindas: 'Te damos la bienvenida al recorrido',
    salaTitulo: 'Dónde estás en esta sala.',
    salaTexto:
      'Formas parte de una comunidad plural. El termómetro de abajo se actualiza en tiempo real a medida que otras personas responden.',
    termometro: 'Termómetro del taller',
    distribuicao: 'Distribución en tiempo real',
    resposta: 'respuesta',
    respostas: 'respuestas',
    comecarModulos: 'Empezar por los módulos ↓',
    certificado: 'Generar certificado',
    trilhaEyebrow: 'Ruta de aprendizaje',
    modulos: 'Módulos',
    modulosTexto:
      'Contenido práctico de IA generativa para quienes trabajan en la gestión pública. Cada módulo es independiente — empieza por el que tenga más sentido para ti.',
    oficinaEyebrow: 'Taller Humanos al Mando',
    oficinaTitulo: '¿Cómo te fue en el taller?',
    oficinaTexto:
      '¿Participaste en el taller Humanos al Mando? Tu evaluación lleva un minuto y ayuda a diseñar los próximos grupos.',
    avaliar: 'Evaluar el taller →',
    sugestaoEyebrow: 'Construyamos en conjunto',
    sugestaoTitulo: 'Sugiere una mejora',
    sugestaoTexto:
      '¿Encontraste algo confuso, echaste en falta un contenido o tuviste una idea? Cuéntanos — CLIC se construye escuchando a quienes lo usan.',
  },
})

export default function Jornada() {
  const [form, setForm] = useState({
    nome: '',
    orgao: '',
    email: '',
    whatsapp: '',
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
        setDistErro(T.erroTermometro)
      },
    )
    return unsub
  }, [])

  const dadosOk =
    form.nome.trim() && form.orgao.trim() && form.email.trim()
  const podeSubmeter = dadosOk && form.nivel && !enviando

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
      setErro(T.erroEnvio)
      setEnviando(false)
    }
  }

  const total = dist?.total ?? 0

  return (
    <main className="px-5 py-16 md:py-24">
      <section className="mx-auto max-w-3xl">
        <HeadlineCinematic
          eyebrow={T.eyebrow}
          lines={T.headline}
        />

        <p className="mt-6 max-w-xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          {T.intro}
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-8">
          <fieldset
            disabled={enviado}
            className="space-y-8 disabled:opacity-70 transition-opacity"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <FormField
                id="nome"
                label={T.nome}
                value={form.nome}
                onChange={set('nome')}
                required
              />
              <FormField
                id="orgao"
                label={T.orgao}
                value={form.orgao}
                onChange={set('orgao')}
                required
              />
              <FormField
                id="email"
                label={T.email}
                type="email"
                value={form.email}
                onChange={set('email')}
                required
              />
              <FormField
                id="whatsapp"
                label={T.whatsapp}
                type="tel"
                value={form.whatsapp}
                onChange={set('whatsapp')}
              />
            </div>

            <p className="text-center text-muted text-sm">
              {T.dica}
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
                {enviando ? T.enviando : T.entrar}
              </button>
              <p className="text-xs text-muted max-w-md text-center leading-relaxed">
                {T.consentimento}
              </p>
            </div>
          ) : (
            <div className="flex justify-center pt-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-success bg-success/10 text-success-fg px-5 py-2 text-sm font-medium">
                <span aria-hidden>✓</span> {T.registrado}
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
              {T.boasVindas}
            </p>
            <h2 className="mt-6 font-display font-semibold text-3xl md:text-5xl text-ink text-center leading-[1.05]">
              {T.salaTitulo}
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
              {T.salaTexto}
            </p>

            <div className="mt-12 bg-card rounded-2xl border border-line p-6 md:p-8 shadow-sm">
              <div className="flex items-baseline justify-between mb-5">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-accent-fg font-semibold">
                    {T.termometro}
                  </p>
                  <h3 className="mt-1.5 font-display font-semibold text-lg text-ink">
                    {T.distribuicao}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-display font-semibold text-3xl text-ink tabular-nums">
                    {total}
                  </span>
                  <p className="text-[10px] uppercase tracking-wider text-muted">
                    {total === 1 ? T.resposta : T.respostas}
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

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="#modulos"
                className="rounded-full bg-ink text-page px-7 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                {T.comecarModulos}
              </a>
              <a
                href="/jornada/certificado.html"
                className="rounded-full border border-line bg-card text-ink px-7 py-3 text-sm font-medium hover:border-accent/40 transition"
              >
                {T.certificado}
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
          {T.trilhaEyebrow}
        </p>

        <h2 className="mt-6 font-display font-semibold text-4xl md:text-5xl text-ink text-center leading-[1.05]">
          {T.modulos}
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          {T.modulosTexto}
        </p>

        <div className="mt-14">
          <ModulosGrid />
        </div>
      </section>

      <section className="mx-auto max-w-3xl mt-28 pt-16 border-t border-line">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          {T.oficinaEyebrow}
        </p>
        <h2 className="mt-6 font-display font-semibold text-3xl md:text-5xl text-ink text-center leading-[1.05]">
          {T.oficinaTitulo}
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          {T.oficinaTexto}
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            to="/avaliacao"
            className="rounded-full bg-ink text-page px-7 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            {T.avaliar}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl mt-28 pt-16 border-t border-line">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          {T.sugestaoEyebrow}
        </p>
        <h2 className="mt-6 font-display font-semibold text-3xl md:text-5xl text-ink text-center leading-[1.05]">
          {T.sugestaoTitulo}
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          {T.sugestaoTexto}
        </p>
        <div className="mt-10">
          <SugestaoForm />
        </div>
      </section>
    </main>
  )
}
