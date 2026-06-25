const CASOS = [
  {
    icon: '📝',
    titulo: 'Redigir documentos',
    texto: 'Notas técnicas, despachos e ofícios seguindo um modelo institucional.',
  },
  {
    icon: '📚',
    titulo: 'Responder dúvidas',
    texto: 'Sobre normas, portarias e procedimentos, a partir de fontes confiáveis.',
  },
  {
    icon: '🔎',
    titulo: 'Resumir e localizar',
    texto: 'Extrair pontos-chave de documentos longos e encontrar informação.',
  },
  {
    icon: '🧭',
    titulo: 'Orientar processos',
    texto: 'Guiar o servidor passo a passo em um fluxo de trabalho conhecido.',
  },
]

const PECAS = [
  {
    icon: '🎯',
    titulo: 'Instruções',
    papel: 'o cérebro',
    texto: (
      <>
        O texto que define quem o agente é, o que faz, em que tom e —
        principalmente — o que <strong className="text-ink">não</strong> deve
        fazer. É a peça que mais determina a qualidade das respostas.
      </>
    ),
  },
  {
    icon: '📎',
    titulo: 'Fontes de conhecimento',
    papel: 'a memória',
    texto: (
      <>
        Documentos, PDFs, sites ou pastas do SharePoint que o agente consulta.
        Você decide se ele pode buscar na web aberta ou usar{' '}
        <strong className="text-ink">somente</strong> o que você anexou.
      </>
    ),
  },
  {
    icon: '🛠️',
    titulo: 'Funcionalidades',
    papel: 'as mãos',
    texto: (
      <>
        O que o agente consegue produzir: arquivos do Word, Excel e PowerPoint,
        gráficos, trechos de código ou imagens. Você liga apenas o que faz
        sentido para o caso.
      </>
    ),
  },
  {
    icon: '💬',
    titulo: 'Prompts sugeridos',
    papel: 'a porta de entrada',
    texto: (
      <>
        Frases prontas que aparecem no início da conversa. Diminuem o “medo da
        página em branco” e mostram ao usuário o que dá para pedir.
      </>
    ),
  },
]

export default function AgentesConceitos() {
  return (
    <div className="space-y-10">
      <header className="text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
          Parte 1 · Conceito
        </p>
        <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
          O que é um agente
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-ink-soft leading-relaxed">
          Antes de colocar a mão na massa, vale entender o que é um agente, no
          que ele ajuda no dia a dia do serviço público e quais peças o compõem.
          Na próxima aba, criamos um juntos.
        </p>
      </header>

      {/* Em uma frase */}
      <div className="bg-ink text-page rounded-3xl p-8 md:p-10 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.16em] text-page/70 font-semibold">
          Em uma frase
        </p>
        <p className="mt-4 font-display text-xl md:text-2xl leading-snug">
          Um agente é uma versão do Copilot{' '}
          <strong className="font-semibold">especializada por você</strong>:
          você dá instruções, conecta fontes de confiança e ele passa a
          responder dentro desse escopo — sem precisar de uma linha de código.
        </p>
      </div>

      {/* 01 · Para que serve */}
      <section>
        <h3 className="font-display font-semibold text-2xl text-ink">
          <span className="text-accent-fg font-mono text-base mr-3">01</span>
          Para que serve
        </h3>
        <p className="mt-2 max-w-2xl text-ink-soft leading-relaxed">
          O agente brilha em tarefas repetitivas que exigem seguir um padrão ou
          consultar sempre as mesmas fontes. Alguns usos típicos no setor
          público:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {CASOS.map((c) => (
            <div
              key={c.titulo}
              className="bg-card border border-line rounded-2xl p-5"
            >
              <span className="text-xl block">{c.icon}</span>
              <h4 className="mt-2 font-display font-semibold text-ink">
                {c.titulo}
              </h4>
              <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                {c.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 · Anatomia */}
      <section>
        <h3 className="font-display font-semibold text-2xl text-ink">
          <span className="text-accent-fg font-mono text-base mr-3">02</span>
          A anatomia de um agente
        </h3>
        <p className="mt-2 max-w-2xl text-ink-soft leading-relaxed">
          Todo agente, por mais simples que seja, é feito das mesmas quatro
          peças. Entender o que cada uma faz é metade do caminho.
        </p>
        <ul className="mt-6 bg-card border border-line rounded-3xl p-6 md:p-8 divide-y divide-line">
          {PECAS.map((p) => (
            <li key={p.titulo} className="flex gap-4 py-4 first:pt-0 last:pb-0">
              <span className="flex-none h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center text-xl">
                {p.icon}
              </span>
              <div>
                <h4 className="font-display font-semibold text-ink">
                  {p.titulo}
                  <span className="ml-2 font-sans font-normal text-xs uppercase tracking-wide text-muted">
                    {p.papel}
                  </span>
                </h4>
                <p className="mt-1 text-sm md:text-base text-ink-soft leading-relaxed">
                  {p.texto}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 03 · Dois jeitos de criar */}
      <section>
        <h3 className="font-display font-semibold text-2xl text-ink">
          <span className="text-accent-fg font-mono text-base mr-3">03</span>
          Dois jeitos de criar
        </h3>
        <p className="mt-2 max-w-2xl text-ink-soft leading-relaxed">
          Ao clicar em <strong className="text-ink">Novo Agente</strong>, você
          escolhe entre montar conversando ou preencher os campos na mão. Os
          dois levam ao mesmo resultado.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="bg-card border-2 border-accent/40 rounded-2xl p-6">
            <p className="text-xs font-mono uppercase tracking-wide text-accent-fg">
              Recomendado para começar
            </p>
            <h4 className="mt-2 font-display font-semibold text-lg text-ink">
              Linguagem natural
            </h4>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              Você descreve o agente em uma conversa e o Copilot preenche nome,
              descrição e instruções automaticamente. Rápido e intuitivo — ótimo
              para o primeiro contato.
            </p>
          </div>
          <div className="bg-card border border-line rounded-2xl p-6">
            <p className="text-xs font-mono uppercase tracking-wide text-muted">
              Controle total
            </p>
            <h4 className="mt-2 font-display font-semibold text-lg text-ink">
              Configurar manualmente
            </h4>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
              Você preenche cada campo: nome, instruções, fontes e
              funcionalidades. Mais trabalhoso, mas mostra todas as peças — é o
              caminho que usaremos para aprender.
            </p>
          </div>
        </div>
      </section>

      {/* Nota de governança */}
      <aside className="bg-page border-2 border-accent/30 rounded-2xl p-6 max-w-3xl mx-auto flex gap-3">
        <span className="text-accent-fg font-bold text-lg leading-none mt-0.5">
          ✱
        </span>
        <p className="text-sm text-ink leading-relaxed">
          <strong className="text-accent-fg">Lembre sempre:</strong> o agente
          entrega rascunhos para revisão humana, nunca a palavra final. Em uso
          institucional, prefira limitar as fontes ao que você anexou — assim o
          agente não improvisa com informação de fora.
        </p>
      </aside>
    </div>
  )
}
