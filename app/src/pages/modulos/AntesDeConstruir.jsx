import ModuloCard from '../../features/modulos/ModuloCard'
import { tr } from '../../i18n'

// Modulo 08 — landing dos dois guias que antecedem a decisao.
// Mesmo padrao do Modulo 06: uma landing que apresenta caminhos, cada um
// abrindo em pagina propria. Os guias sao HTML standalone com design de
// pagina inteira, por isso nao viram abas.
// Os guias em PT redirecionam sozinhos para a versao .es.html quando o idioma e ES.
const T = tr({
  pt: {
    eyebrow: 'Módulo 08 · Antes de construir ou contratar',
    titulo: ['As perguntas que', 'vêm antes.'],
    intro: 'Dois guias para o momento da decisão: como estruturar um projeto antes de tirá-lo do papel, e o que perguntar antes de assinar um contrato de IA. São perguntas para levar à reunião — não exercício para fazer sozinha.',
    abrir: 'Abrir guia',
    voltar: '← Voltar aos módulos',
  },
  es: {
    eyebrow: 'Módulo 08 · Antes de construir o contratar',
    titulo: ['Las preguntas que', 'vienen antes.'],
    intro: 'Dos guías para el momento de decidir: cómo estructurar un proyecto antes de ponerlo en marcha, y qué preguntar antes de firmar un contrato de IA. Son preguntas para llevar a la reunión — no un ejercicio para hacer en soledad.',
    abrir: 'Abrir guía',
    voltar: '← Volver a los módulos',
  },
})

const GUIAS = [
  {
    icon: '🧭',
    titulo: tr({ pt: 'Estruturando projetos de IA', es: 'Estructurando proyectos de IA' }),
    descricao: tr({
      pt: 'As perguntas que o órgão faz a si mesmo, do problema ao projeto. Sete passos e três portões de decisão onde parar é uma resposta legítima.',
      es: 'Las preguntas que el organismo se hace a sí mismo, del problema al proyecto. Siete pasos y tres puertas de decisión donde detenerse es una respuesta legítima.',
    }),
    stats: [
      { value: '7', label: tr({ pt: 'Passos', es: 'Pasos' }) },
      { value: '3', label: tr({ pt: 'Portões', es: 'Puertas' }) },
    ],
    to: '/jornada/modulos/estruturando-projetos-de-ia.html',
  },
  {
    icon: '📋',
    titulo: tr({ pt: 'Contratando soluções de IA', es: 'Contratando soluciones de IA' }),
    descricao: tr({
      pt: 'As perguntas que o gestor público precisa fazer antes de assinar um contrato de IA. Cinco eixos e a pergunta que quase ninguém faz.',
      es: 'Las preguntas que la gestión pública tiene que hacer antes de firmar un contrato de IA. Cinco ejes y la pregunta que casi nadie hace.',
    }),
    stats: [
      { value: '5', label: tr({ pt: 'Eixos', es: 'Ejes' }) },
      { value: '24', label: tr({ pt: 'Perguntas', es: 'Preguntas' }) },
    ],
    to: '/jornada/modulos/contratando-solucoes-de-ia.html',
  },
]

export default function AntesDeConstruir() {
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

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {GUIAS.map((g) => (
            <ModuloCard key={g.titulo} {...g} ctaText={T.abrir} external />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/jornada/#modulos"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink-soft hover:bg-card transition"
          >
            {T.voltar}
          </a>
        </div>
      </div>
    </main>
  )
}
