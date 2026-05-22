import { Link } from 'react-router-dom'
import SlideNavigator from '../components/SlideNavigator'

// Apresentacao "Desde a origem" — keynote de visao do programa.
// Fora dos modulos: rota de topo /visao, ponto de entrada na pagina Jornada.
export default function Visao() {
  return (
    <main className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition"
        >
          ← Voltar à jornada
        </Link>

        <div className="mt-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            A visão do programa
          </p>
          <h1 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
            Desde a <span className="italic text-accent-fg">origem.</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-ink-soft text-sm md:text-base leading-relaxed">
            A visão que abre o programa: IA pública com diversidade, inclusão e
            responsabilidade desde o primeiro traço — não como ajuste posterior.
          </p>
        </div>

        <div className="mt-10">
          <SlideNavigator
            src="apresentacoes/visao.html"
            title="Desde a origem — A visão do CLIC_diversidade"
            slideCount={7}
          />
        </div>
      </div>
    </main>
  )
}
