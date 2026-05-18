import { Link } from 'react-router-dom'
import ModuloCard from '../features/modulos/ModuloCard'

const MODULOS = [
  {
    numero: '01',
    titulo: 'Engenharia de Prompt',
    descricao:
      'Do comando à maestria: aprenda o método PTCF, técnicas avançadas e construa sua biblioteca de assistentes para o serviço público.',
    duracao: '15 slides · ~20 min',
    to: '/modulos/engenharia-prompt',
    disponivel: true,
  },
]

export default function Modulos() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Trilha de aprendizado
        </p>

        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          Módulos
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          Conteúdo prático de IA generativa para gestoras públicas. Cada módulo
          é independente — comece pelo que fizer mais sentido para você.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MODULOS.map((m) => (
            <ModuloCard key={m.numero} {...m} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink-soft hover:bg-card transition"
          >
            ← Voltar ao formulário
          </Link>
        </div>
      </div>
    </main>
  )
}
