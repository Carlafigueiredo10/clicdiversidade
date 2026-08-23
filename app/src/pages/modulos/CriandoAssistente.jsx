import { Link } from 'react-router-dom'
import Tabs from '../../features/modulos/Tabs'
import AgentesConceitos from '../../features/modulos/criando-assistente/AgentesConceitos'
import GuiaCopilot from '../../features/modulos/criando-assistente/GuiaCopilot'
import GuiaAgentes from '../../features/modulos/criando-assistente/GuiaAgentes'
import TemplateAgenteAdmin from '../../features/modulos/criando-assistente/TemplateAgenteAdmin'
import TemplateAgenteContraditorio from '../../features/modulos/criando-assistente/TemplateAgenteContraditorio'
import TemplateAgenteAuditor from '../../features/modulos/criando-assistente/TemplateAgenteAuditor'

const TABS = [
  {
    id: 'conceitos',
    label: 'O que é um agente',
    render: () => <AgentesConceitos />,
  },
  {
    id: 'agentes',
    label: 'Passo a passo pra agentes',
    render: () => (
      <div className="space-y-16">
        <GuiaAgentes />
        <div id="passo-a-passo-copilot" className="scroll-mt-24 pt-12 border-t border-line">
          <GuiaCopilot />
        </div>
      </div>
    ),
  },
  {
    id: 'template-admin',
    label: 'Template Agente Admin',
    render: () => <TemplateAgenteAdmin />,
  },
  {
    id: 'template-contraditorio',
    label: 'Template Debatedor Crítico',
    render: () => <TemplateAgenteContraditorio />,
  },
  {
    id: 'template-auditor',
    label: 'Template Auditor de Equidade',
    render: () => <TemplateAgenteAuditor />,
  },
]

export default function CriandoAssistente() {
  return (
    <main className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/#modulos"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition"
        >
          ← Voltar aos módulos
        </Link>

        <div className="mt-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            Módulo 07
          </p>
          <h1 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
            Criando um Assistente
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-ink-soft text-sm md:text-base leading-relaxed">
            Do prompt ao assistente que fica: entenda, construa no Copilot e use
            templates prontos.
          </p>
        </div>

        <div className="mt-10">
          <Tabs tabs={TABS} />
        </div>
      </div>
    </main>
  )
}
