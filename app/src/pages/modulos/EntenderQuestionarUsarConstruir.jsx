import { Link } from 'react-router-dom'
import SlideNavigator from '../../components/SlideNavigator'
import { tr } from '../../i18n'

const T = tr({
  pt: {
    voltar: '← Voltar ao material da oficina',
    eyebrow: 'Inteligência artificial',
    titulo: ['Entender, questionar, ', 'usar e construir.'],
    sub: 'Decidindo seu lugar no futuro. Setas ou Page Up/Page Down para avançar, N para as notas, F para tela cheia.',
    deckTitle: 'Entender, questionar, usar e construir — Carla Figueiredo',
  },
  es: {
    voltar: '← Volver al material del taller',
    eyebrow: 'Inteligencia artificial',
    titulo: ['Entender, cuestionar, ', 'usar y construir.'],
    sub: 'Decidiendo tu lugar en el futuro. Flechas o Re Pág/Av Pág para avanzar, N para las notas, F para pantalla completa.',
    deckTitle: 'Entender, cuestionar, usar y construir — Carla Figueiredo',
  },
})

// Deck de palestra. Tem notas de orador (tecla N) e passos internos por slide:
// a contagem do proprio deck conta slides, nao passos. Sem versao em espanhol
// por enquanto — o SlideNavigator cai no arquivo em portugues.
export default function EntenderQuestionarUsarConstruir() {
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
            {T.titulo[0]}
            <span className="italic text-accent-fg">{T.titulo[1]}</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-ink-soft text-sm md:text-base leading-relaxed">
            {T.sub}
          </p>
        </div>

        <div className="mt-10">
          <SlideNavigator
            src="apresentacoes/entender-questionar-usar-construir.html"
            title={T.deckTitle}
            slideCount={22}
          />
        </div>
      </div>
    </main>
  )
}
