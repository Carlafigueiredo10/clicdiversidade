import { useState } from 'react'
import SlideShell from '../SlideShell'

const PROMPT = `Atue como especialista em [LEGISLAÇÃO DE DIÁRIAS]. Redija um despacho autorizando diárias para [[NOME]], matrícula [[MATRÍCULA]], para viagem a [[DESTINO]] nas datas [[DATA]]. O objetivo da missão é [[OBJETIVO]]. Estruture em: 1. Relatório, 2. Fundamentação Legal, 3. Conclusão. Mantenha tom impessoal e oficial.`

function Highlight({ children }) {
  return (
    <span className="bg-accent/15 text-accent-fg rounded px-1.5 py-0.5 border border-accent/30">
      {children}
    </span>
  )
}

export default function GeradorDespachos() {
  const [copiado, setCopiado] = useState(false)

  async function copiar() {
    await navigator.clipboard.writeText(PROMPT)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }

  return (
    <SlideShell
      eyebrow="Exemplo prático"
      titulo="O gerador de despachos"
    >
      <p className="text-ink-soft mb-6">
        Cole este texto na sua IA para gerar um despacho instantâneo:
      </p>

      <div className="bg-page border-2 border-accent/30 rounded-2xl p-6 md:p-8">
        <p className="text-ink leading-loose text-base md:text-lg">
          Atue como especialista em <Highlight>[LEGISLAÇÃO DE DIÁRIAS]</Highlight>.
          Redija um despacho autorizando diárias para <Highlight>[[NOME]]</Highlight>,
          matrícula <Highlight>[[MATRÍCULA]]</Highlight>, para viagem a{' '}
          <Highlight>[[DESTINO]]</Highlight> nas datas <Highlight>[[DATA]]</Highlight>.
          O objetivo da missão é <Highlight>[[OBJETIVO]]</Highlight>. Estruture
          em: 1. Relatório, 2. Fundamentação Legal, 3. Conclusão. Mantenha tom
          impessoal e oficial.
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={copiar}
          className="rounded-full bg-ink text-page px-6 py-3 text-sm font-medium hover:opacity-90 transition"
        >
          {copiado ? '✓ Copiado!' : '📋 Copiar prompt'}
        </button>
      </div>
    </SlideShell>
  )
}
