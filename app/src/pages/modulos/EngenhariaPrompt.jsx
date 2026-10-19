import { Link } from 'react-router-dom'
import Tabs from '../../features/modulos/Tabs'
import SlideNavigator from '../../components/SlideNavigator'
import SemaforoHumanosComando from '../../features/modulos/engenharia-prompt/SemaforoHumanosComando'
import { tr } from '../../i18n'

const T = tr({
  pt: {
    aba: 'Apresentação',
    deckTitle: 'Bloco 2 — Engenharia de Prompt',
    voltar: '← Voltar aos módulos',
    modulo: 'Módulo 01',
    titulo: 'Engenharia de Prompt',
    sub: 'Do comando à maestria: guia prático para gestoras públicas.',
  },
  es: {
    aba: 'Presentación',
    deckTitle: 'Bloque 2 — Ingeniería de Prompts',
    voltar: '← Volver a los módulos',
    modulo: 'Módulo 01',
    titulo: 'Ingeniería de Prompts',
    sub: 'De la instrucción a la maestría: guía práctica para la gestión pública.',
  },
})

const TABS = [
  {
    id: 'apresentacao',
    label: T.aba,
    render: () => (
      <SlideNavigator
        src="apresentacoes/bloco2-engenharia-prompt.html"
        title={T.deckTitle}
        slideCount={9}
      />
    ),
  },
]

export default function EngenhariaPrompt() {
  return (
    <main className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/#modulos"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition"
        >
          {T.voltar}
        </Link>

        <div className="mt-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            {T.modulo}
          </p>
          <h1 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
            {T.titulo}
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-ink-soft text-sm md:text-base leading-relaxed">
            {T.sub}
          </p>
        </div>

        <div className="mt-10">
          <Tabs tabs={TABS} />
        </div>

        <SemaforoHumanosComando />
      </div>
    </main>
  )
}
