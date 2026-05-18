import { Link } from 'react-router-dom'
import Tabs from '../../features/modulos/Tabs'
import SlideNavigator from '../../features/modulos/engenharia-prompt/SlideNavigator'
import TemplateAgenteAdmin from '../../features/modulos/engenharia-prompt/TemplateAgenteAdmin'

const TABS = [
  {
    id: 'apresentacao',
    label: 'Apresentação',
    render: () => <SlideNavigator />,
  },
  {
    id: 'template',
    label: 'Template Agente Admin',
    render: () => <TemplateAgenteAdmin />,
  },
]

export default function EngenhariaPrompt() {
  return (
    <main className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/modulos"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition"
        >
          ← Voltar aos módulos
        </Link>

        <div className="mt-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            Módulo 01
          </p>
          <h1 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
            Engenharia de Prompt
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-ink-soft text-sm md:text-base leading-relaxed">
            Do comando à maestria: guia prático para gestoras públicas.
          </p>
        </div>

        <div className="mt-10">
          <Tabs tabs={TABS} />
        </div>
      </div>
    </main>
  )
}
