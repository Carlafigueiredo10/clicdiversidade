import { Link } from 'react-router-dom'
import SlideNavigator from '../../components/SlideNavigator'

export default function QuebrandoOMito() {
  return (
    <main className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/modulos/oficina"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition"
        >
          ← Voltar ao material da oficina
        </Link>

        <div className="mt-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            Oficina Humanos no Comando · Bloco 01
          </p>
          <h1 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
            Quebrando o mito
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-ink-soft text-sm md:text-base leading-relaxed">
            Apresentação de abertura: tecnologia orientada por pessoas, a lógica
            invisível por trás do código e a virada de chave.
          </p>
        </div>

        <div className="mt-10">
          <SlideNavigator
            src="apresentacoes/bloco1-quebrando-o-mito.html"
            title="Quebrando o mito — Humanos no Comando"
            slideCount={7}
          />
        </div>
      </div>
    </main>
  )
}
