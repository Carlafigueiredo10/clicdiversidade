import { Link } from 'react-router-dom'
import { BLOCOS } from '../../features/modulos/oficina/data'

function BlocoCard({ bloco }) {
  const inner = (
    <>
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-xs tracking-widest text-accent-fg font-semibold">
          BLOCO {bloco.numero}
        </span>
        <span className="text-[11px] uppercase tracking-wider text-muted">
          {bloco.duracao}
        </span>
      </div>

      <h3 className="mt-4 font-display font-semibold text-xl md:text-2xl text-ink leading-tight">
        {bloco.titulo}
      </h3>

      <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">
        {bloco.descricao}
      </p>

      <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
        <span
          className={
            'text-sm font-medium ' +
            (bloco.placeholder ? 'text-muted' : 'text-accent-fg')
          }
        >
          {bloco.cta}
          {!bloco.placeholder && ' →'}
        </span>
        {bloco.tipo === 'apresentacao' && (
          <span className="text-[10px] uppercase tracking-wider text-muted">
            Apresentação
          </span>
        )}
      </div>
    </>
  )

  const baseClasses =
    'bg-card rounded-2xl border border-line p-6 transition flex flex-col h-full'

  if (bloco.placeholder) {
    return (
      <div className={baseClasses + ' opacity-70'}>{inner}</div>
    )
  }

  if (bloco.external) {
    return (
      <a
        href={bloco.href}
        target="_blank"
        rel="noopener noreferrer"
        className={
          baseClasses +
          ' hover:-translate-y-0.5 hover:shadow-md hover:border-accent'
        }
      >
        {inner}
      </a>
    )
  }

  return (
    <Link
      to={bloco.href}
      className={
        baseClasses +
        ' hover:-translate-y-0.5 hover:shadow-md hover:border-accent'
      }
    >
      {inner}
    </Link>
  )
}

export default function MaterialOficina() {
  return (
    <main className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          Módulo 05 · Material da Oficina
        </p>
        <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink text-center leading-[1.05]">
          Humanos no
          <br />
          <span className="italic text-accent-fg">Comando.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-center text-ink-soft text-base md:text-lg leading-relaxed">
          A apresentação de abertura da oficina presencial: o material próprio
          daqui, para abrir a sala e virar a chave.
        </p>

        <div className="mt-14 grid gap-5 max-w-xl mx-auto">
          {BLOCOS.map((b) => (
            <BlocoCard key={b.numero} bloco={b} />
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
