import Tabs from '../../features/modulos/Tabs'
import SlideNavigator from '../../features/modulos/construindo-tecnologia/SlideNavigator'
import MeuAplicativo from '../../features/modulos/construindo-tecnologia/MeuAplicativo'
import PainelGovernanca from '../../features/modulos/construindo-tecnologia/PainelGovernanca'
import ConectandoBase from '../../features/modulos/construindo-tecnologia/ConectandoBase'
import ConstruindoAplicativos from '../../features/modulos/construindo-tecnologia/ConstruindoAplicativos'
import { tr } from '../../i18n'

const T = tr({
  pt: {
    abas: ['O Processo', 'Painel de Tarefas', 'Painel de Governança', 'Conectando uma base', 'Construindo Aplicativos'],
    eyebrow: 'Módulo 04 · Construindo Tecnologia',
    titulo: ['Crie seu primeiro app', 'em 20 min.'],
    intro: 'Guia prático para usar a Lovable na oficina — do primeiro prompt ao deploy, sem precisar saber programar.',
  },
  es: {
    abas: ['El Proceso', 'Panel de Tareas', 'Panel de Gobernanza', 'Conectando una base', 'Construyendo Aplicaciones'],
    eyebrow: 'Módulo 04 · Construyendo Tecnología',
    titulo: ['Crea tu primera app', 'en 20 min.'],
    intro: 'Guía práctica para usar Lovable en el taller — del primer prompt a la publicación, sin necesidad de saber programar.',
  },
})

const TABS = [
  { id: 'processo', label: T.abas[0], render: () => <SlideNavigator /> },
  { id: 'painel-tarefas', label: T.abas[1], render: () => <MeuAplicativo /> },
  { id: 'painel-governanca', label: T.abas[2], render: () => <PainelGovernanca /> },
  { id: 'base-de-dados', label: T.abas[3], render: () => <ConectandoBase /> },
  { id: 'construindo', label: T.abas[4], render: () => <ConstruindoAplicativos /> },
]

export default function ConstruindoTecnologia() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          {T.eyebrow}
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          {T.titulo[0]}
          <br />
          <span className="italic text-accent-fg">{T.titulo[1]}</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          {T.intro}
        </p>

        <div className="mt-12">
          <Tabs tabs={TABS} defaultId="processo" />
        </div>
      </div>
    </main>
  )
}
