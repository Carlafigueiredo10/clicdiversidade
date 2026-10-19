import { Link } from 'react-router-dom'
import SlideNavigator from '../components/SlideNavigator'
import { tr } from '../i18n'

const T = tr({
  pt: {
    voltar: '← Voltar ao material da oficina',
    eyebrow: 'Oficina Humanos no Comando · Visão',
    titulo: ['Desde a ', 'origem.'],
    sub: 'A visão que abre o programa: IA pública com diversidade, inclusão e responsabilidade desde o primeiro traço — não como ajuste posterior.',
    deckTitle: 'Desde a origem — A visão do CLIC_diversidade',
  },
  es: {
    voltar: '← Volver al material del taller',
    eyebrow: 'Taller Humanos al Mando · Visión',
    titulo: ['Desde el ', 'origen.'],
    sub: 'La visión que abre el programa: IA pública con diversidad, inclusión y responsabilidad desde el primer trazo — no como un ajuste posterior.',
    deckTitle: 'Desde el origen — La visión de CLIC_diversidade',
  },
})

// Apresentacao "Desde a origem" — keynote de visao do programa.
// Mora no Material da Oficina (/modulos/oficina/desde-a-origem); a rota
// antiga /visao redireciona pra ca.
export default function Visao() {
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
            src="apresentacoes/visao.html"
            title={T.deckTitle}
            slideCount={7}
          />
        </div>
      </div>
    </main>
  )
}
