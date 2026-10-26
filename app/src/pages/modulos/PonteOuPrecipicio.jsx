import { Link } from 'react-router-dom'
import SlideNavigator from '../../components/SlideNavigator'
import { tr } from '../../i18n'

const T = tr({
  pt: {
    voltar: '← Voltar ao material da oficina',
    eyebrow: 'Democracias del futuro · Montevidéu · 29.10.2026',
    titulo: ['Ponte ou ', 'precipício.'],
    sub: 'Inteligência artificial, dados e quem decide o futuro. Setas ou Page Up/Page Down para avançar, N para as notas, L para trocar o idioma.',
    deckTitle: 'Ponte ou precipício — Carla Figueiredo',
  },
  es: {
    voltar: '← Volver al material del taller',
    eyebrow: 'Democracias del futuro · Montevideo · 29.10.2026',
    titulo: ['Puente o ', 'precipicio.'],
    sub: 'Inteligencia artificial, datos y quién decide el futuro. Flechas o Re Pág/Av Pág para avanzar, N para las notas, L para cambiar el idioma.',
    deckTitle: 'Puente o precipicio — Carla Figueiredo',
  },
})

// Palestra de Montevideu (29/10/2026). Deck com versao em espanhol
// (ponte-ou-precipicio.es.html); a tecla L troca de idioma no mesmo slide.
export default function PonteOuPrecipicio() {
  return (
    <main className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/modulos/oficina"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition"
        >
          {T.voltar}
        </Link>

        <div className="mt-8 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            {T.eyebrow}
          </p>
          <h1 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
            {T.titulo[0]}<span className="italic text-accent-fg">{T.titulo[1]}</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-ink-soft text-sm md:text-base leading-relaxed">
            {T.sub}
          </p>
        </div>

        <div className="mt-10">
          <SlideNavigator
            src="apresentacoes/ponte-ou-precipicio.html"
            title={T.deckTitle}
            slideCount={21}
          />
        </div>
      </div>
    </main>
  )
}
