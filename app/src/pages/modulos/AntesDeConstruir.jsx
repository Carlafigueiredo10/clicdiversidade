import ModuloCard from '../../features/modulos/ModuloCard'

// Modulo 08 — landing dos dois guias que antecedem a decisao.
// Mesmo padrao do Modulo 06: uma landing que apresenta caminhos, cada um
// abrindo em pagina propria. Os guias sao HTML standalone com design de
// pagina inteira, por isso nao viram abas.
const GUIAS = [
  {
    icon: '🧭',
    titulo: 'Estruturando projetos de IA',
    descricao:
      'As perguntas que o órgão faz a si mesmo, do problema ao projeto. Sete passos e três portões de decisão onde parar é uma resposta legítima.',
    stats: [
      { value: '7', label: 'Passos' },
      { value: '3', label: 'Portões' },
    ],
    to: '/jornada/modulos/estruturando-projetos-de-ia.html',
  },
  {
    icon: '📋',
    titulo: 'Contratando soluções de IA',
    descricao:
      'As perguntas que o gestor público precisa fazer antes de assinar um contrato de IA. Cinco eixos e a pergunta que quase ninguém faz.',
    stats: [
      { value: '5', label: 'Eixos' },
      { value: '24', label: 'Perguntas' },
    ],
    to: '/jornada/modulos/contratando-solucoes-de-ia.html',
  },
]

export default function AntesDeConstruir() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Módulo 08 · Antes de construir ou contratar
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          As perguntas que
          <br />
          <span className="italic text-accent-fg">vêm antes.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Dois guias para o momento da decisão: como estruturar um projeto antes
          de tirá-lo do papel, e o que perguntar antes de assinar um contrato de
          IA. São perguntas para levar à reunião — não exercício para fazer
          sozinha.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {GUIAS.map((g) => (
            <ModuloCard key={g.titulo} {...g} ctaText="Abrir guia" external />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/jornada/#modulos"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink-soft hover:bg-card transition"
          >
            ← Voltar aos módulos
          </a>
        </div>
      </div>
    </main>
  )
}
