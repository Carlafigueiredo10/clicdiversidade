import Tabs from '../../features/modulos/Tabs'
import Roteiro from '../../features/modulos/construindo-tecnologia/Roteiro'
import MeuAplicativo from '../../features/modulos/construindo-tecnologia/MeuAplicativo'

const TABS = [
  { id: 'roteiro', label: 'Roteiro', render: () => <Roteiro /> },
  { id: 'meu-app', label: 'Meu Aplicativo', render: () => <MeuAplicativo /> },
]

export default function ConstruindoTecnologia() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Módulo 04 · Construindo Tecnologia
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          Crie seu primeiro app
          <br />
          <span className="italic text-accent-fg">em 20 min.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Guia prático para usar a Lovable na oficina — do primeiro prompt ao
          deploy, sem precisar saber programar.
        </p>

        <div className="mt-12">
          <Tabs tabs={TABS} defaultId="roteiro" />
        </div>
      </div>
    </main>
  )
}
