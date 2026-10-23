import { Link } from 'react-router-dom'
import Tabs from '../../features/modulos/Tabs'
import Escada from '../../features/modulos/criando-assistente/Escada'
import Catalogo from '../../features/modulos/criando-assistente/Catalogo'
import { tr } from '../../i18n'

// Modulo 07 "Ensinando a IA a trabalhar do seu jeito — Alem do chat".
// Rota mantida (/modulos/criando-assistente) para nao quebrar links antigos.
// O passo a passo de Copilot saiu daqui: mora no CLIC Prisma (card 10).
const T = tr({
  pt: {
    voltar: '← Voltar aos módulos',
    eyebrow: 'Módulo 07 · Além do chat',
    titulo: ['Ensinando a IA a', 'trabalhar do seu jeito'],
    intro:
      'Projeto, assistente, skill e conector: quatro formas de parar de reexplicar tudo a cada conversa. Passo a passo no Gemini, com instruções que funcionam em qualquer IA.',
    abas: ['A escada', 'O catálogo'],
  },
  es: {
    voltar: '← Volver a los módulos',
    eyebrow: 'Módulo 07 · Más allá del chat',
    titulo: ['Enseñarle a la IA a', 'trabajar a tu manera'],
    intro:
      'Proyecto, asistente, skill y conector: cuatro formas de dejar de explicarlo todo en cada conversación. Paso a paso en Gemini, con instrucciones que funcionan en cualquier IA.',
    abas: ['La escalera', 'El catálogo'],
  },
})

const TABS = [
  { id: 'escada', label: T.abas[0], render: () => <Escada /> },
  { id: 'catalogo', label: T.abas[1], render: () => <Catalogo /> },
]

export default function CriandoAssistente() {
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
            {T.eyebrow}
          </p>
          <h1 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
            {T.titulo[0]}
            <br />
            <span className="italic text-accent-fg">{T.titulo[1]}</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-ink-soft text-sm md:text-base leading-relaxed">
            {T.intro}
          </p>
        </div>

        <div className="mt-10">
          <Tabs tabs={TABS} />
        </div>
      </div>
    </main>
  )
}
