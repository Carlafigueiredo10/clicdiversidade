import SlideShell from '../SlideShell'

export default function BibliotecaAssistentes() {
  return (
    <SlideShell
      eyebrow="Organização"
      titulo="Construindo sua biblioteca de assistentes"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-page border border-line rounded-2xl p-6">
          <p className="text-xs uppercase tracking-wide text-accent-fg font-semibold">
            Opção 1
          </p>
          <h3 className="mt-2 font-display font-semibold text-xl text-ink">
            Arquivo de texto
          </h3>
          <div className="mt-5 text-4xl" aria-hidden>📝</div>
          <p className="mt-5 text-sm text-ink-soft leading-relaxed">
            Mantenha uma lista de ‘Prompts Mestres’ no OneNote, Notion ou
            arquivo .txt para copiar e colar rapidamente.
          </p>
        </div>

        <div className="bg-page border border-line rounded-2xl p-6">
          <p className="text-xs uppercase tracking-wide text-accent-fg font-semibold">
            Opção 2
          </p>
          <h3 className="mt-2 font-display font-semibold text-xl text-ink">
            Instruções personalizadas
          </h3>
          <div className="mt-5 text-4xl" aria-hidden>⚙️</div>
          <p className="mt-5 text-sm text-ink-soft leading-relaxed">
            No Copilot/Gemini, vá em{' '}
            <strong className="text-ink">
              Configurações → Instruções Personalizadas (Custom Instructions)
            </strong>
            . Cole sua Persona e Regras lá. A IA sempre saberá quem você é.
          </p>
        </div>
      </div>

      <div className="mt-6 bg-page border border-line rounded-2xl p-5 text-center">
        <p className="text-sm text-ink">
          <strong>Iteração:</strong> se o resultado não for bom, refine o
          prompt e atualize sua biblioteca.
        </p>
      </div>
    </SlideShell>
  )
}
