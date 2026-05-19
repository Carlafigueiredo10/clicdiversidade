import { Link } from 'react-router-dom'
import AgenteGovernanca from '../../features/modulos/governanca/AgenteGovernanca'

export default function GovernancaAgente() {
  return (
    <main className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/modulos/governanca"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition"
          >
            ← Voltar
          </Link>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent-fg font-semibold">
              Lélia · Mediação de Risco
            </p>
            <p className="text-xs text-ink-soft mt-0.5">Módulo 06 · Governança de IA</p>
          </div>
        </div>

        <div className="mt-8">
          <AgenteGovernanca />
        </div>
      </div>
    </main>
  )
}
