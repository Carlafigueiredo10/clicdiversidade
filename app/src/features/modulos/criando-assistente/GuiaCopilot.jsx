export default function GuiaCopilot() {
  return (
    <div className="space-y-10">
      <header className="text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
          Parte 2 · Microsoft 365 Copilot
        </p>
        <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
          Crie seu primeiro agente no Copilot
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-ink-soft leading-relaxed">
          Com o Copilot contratado, você pode anexar documentos de trabalho ao
          seu agente. Vamos montar juntos, do zero, um assistente que ajuda a
          redigir Notas Técnicas a partir do modelo oficial.
        </p>
      </header>

      {/* Ficha do exemplo */}
      <div className="bg-ink text-page rounded-3xl p-7 md:p-8 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.16em] text-page/70 font-semibold">
          Agente-exemplo desta oficina
        </p>
        <p className="mt-3 font-display text-xl md:text-2xl">
          🗂️ Assistente de Criação de Notas Técnicas
        </p>
        <p className="mt-2 text-page/80 text-sm md:text-base leading-relaxed">
          O servidor anexa o modelo de NT em PDF e descreve o caso; o agente
          devolve um rascunho estruturado seguindo o padrão institucional.
        </p>
      </div>

      {/* Trilha de passos */}
      <ol className="relative max-w-3xl mx-auto space-y-8">
        <span
          aria-hidden
          className="absolute left-[1.375rem] top-3 bottom-3 w-px bg-line"
        />

        <Passo n="01" titulo="Abra o construtor de agentes">
          <p>
            No aplicativo <strong className="text-ink">Microsoft 365 Copilot</strong>,
            vá ao painel lateral, encontre <strong className="text-ink">Agentes</strong>{' '}
            e clique em <strong className="text-ink">Novo Agente</strong>. O
            Agent Builder abre em duas abas no topo:{' '}
            <strong className="text-ink">Configurar</strong> e{' '}
            <strong className="text-ink">Visualizar</strong>.
          </p>
        </Passo>

        <Passo n="02" titulo="Escolha o caminho de criação">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="bg-card border-2 border-accent/40 rounded-xl p-4">
              <p className="text-xs font-mono uppercase tracking-wide text-accent-fg">
                Recomendado
              </p>
              <strong className="block mt-1 text-ink">Linguagem natural</strong>
              <span className="text-sm">
                Descreva o que o agente faz na caixa de chat. O Copilot preenche
                nome, descrição e instruções para você ajustar depois.
              </span>
            </div>
            <div className="bg-card border border-line rounded-xl p-4">
              <p className="text-xs font-mono uppercase tracking-wide text-muted">
                Manual
              </p>
              <strong className="block mt-1 text-ink">Aba Configurar</strong>
              <span className="text-sm">
                Preencha cada campo na mão. Use quando quiser controle total — é
                o que faremos aqui, para você conhecer tudo.
              </span>
            </div>
          </div>
        </Passo>

        <Passo n="03" titulo="Dê nome, ícone e descrição">
          <p>
            No topo da aba <strong className="text-ink">Configurar</strong>,
            defina como o agente se apresenta. A descrição é curta e explica o
            propósito; serve de vitrine para quem for usar.
          </p>
          <Code>{`Nome: Assistente de Criação de Notas Técnicas
Descrição: Apoia servidores na redação de Notas Técnicas seguindo o modelo institucional.`}</Code>
        </Passo>

        <Passo
          n="04"
          titulo="Escreva as instruções"
          sub="É o campo mais importante — define persona, regras e limites"
        >
          <p>
            Pense nas instruções como o briefing que você daria a um estagiário
            caprichoso: quem ele é, o que faz, como faz e o que{' '}
            <strong className="text-ink">não</strong> deve fazer.
          </p>
          <Code>{`Você é um assistente que ajuda servidores a redigir Notas Técnicas.

• Siga sempre a estrutura do modelo em PDF anexado.
• Use linguagem formal, impessoal e objetiva, no padrão do serviço público.
• Peça os dados que faltarem antes de redigir (objeto, contexto, base legal).
• Nunca invente fundamentação legal: se não tiver a informação, pergunte.
• Apresente o resultado pronto para revisão humana — não é a versão final.`}</Code>
          <Dica>
            <strong className="text-accent-fg">Dica de oficina:</strong>{' '}
            instruções claras valem mais que mil ajustes depois. Quanto mais
            específico o “o que não fazer”, menos o agente improvisa.
          </Dica>
        </Passo>

        <Passo
          n="05"
          titulo="Anexe o modelo como fonte de conhecimento"
          sub="O agente lê os documentos que você anexa"
        >
          <p>
            Na seção <strong className="text-ink">Fontes de conhecimento</strong>,
            adicione o <strong className="text-ink">modelo de NT em PDF</strong>.
            É daqui que o agente vai tirar a estrutura. Dois interruptores
            controlam o alcance da busca:
          </p>
          <div className="mt-3 bg-card border border-line rounded-xl p-4">
            <Toggle on={false}>
              <strong className="text-ink">Pesquisar em todos os sites</strong>{' '}
              — desligado. O agente não sai consultando a web aberta.
            </Toggle>
            <Toggle on={true}>
              <strong className="text-ink">Usar somente as fontes especificadas</strong>{' '}
              — ligado. O agente responde apenas com base no que você anexou.
              Para uso institucional, mantenha assim.
            </Toggle>
          </div>
        </Passo>

        <Passo n="06" titulo="Ative as funcionalidades certas">
          <p>
            Na seção <strong className="text-ink">Funcionalidades</strong>,
            deixe ligado{' '}
            <strong className="text-ink">Criar documentos, gráficos e códigos</strong>{' '}
            — é o que permite ao agente entregar a Nota Técnica em arquivo Word.
            A criação de imagens pode ficar desligada neste caso, já que não é
            necessária.
          </p>
        </Passo>

        <Passo n="07" titulo="Sugira prompts de partida">
          <p>
            Cadastre frases prontas para o usuário começar com um clique —
            mostram de cara o que dá para pedir.
          </p>
          <Code>{`• "Quero redigir uma NT sobre [tema]"
• "Quais informações você precisa de mim para começar?"
• "Revise minha NT seguindo o modelo anexado"`}</Code>
        </Passo>

        <Passo n="08" titulo="Teste na aba Visualizar">
          <p>
            Antes de liberar, abra a aba{' '}
            <strong className="text-ink">Visualizar</strong> e converse com o
            agente como se fosse um servidor. Anexe um caso real, veja se ele
            pede os dados certos e respeita a estrutura. Ajuste as instruções e
            teste de novo — quantas vezes precisar.
          </p>
        </Passo>

        <Passo n="09" titulo="Salve e compartilhe">
          <p>
            Clique em <strong className="text-ink">Criar</strong> no canto
            superior. Pronto: o agente fica disponível na sua conta e pode ser
            compartilhado com a equipe. A autenticação institucional já vem
            configurada, então quem acessa entra com a própria conta do órgão.
          </p>
        </Passo>
      </ol>
    </div>
  )
}

function Passo({ n, titulo, sub, children }) {
  return (
    <li className="relative pl-16">
      <span className="absolute left-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-page font-mono text-sm ring-4 ring-page">
        {n}
      </span>
      <h3 className="font-display font-semibold text-xl text-ink leading-tight">
        {titulo}
      </h3>
      {sub && (
        <p className="mt-1 text-sm text-accent-fg font-medium">{sub}</p>
      )}
      <div className="mt-3 text-ink-soft text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </li>
  )
}

function Code({ children }) {
  return (
    <pre className="mt-3 bg-card border border-line border-l-4 border-l-accent/60 rounded-xl p-4 font-mono text-xs md:text-sm text-ink whitespace-pre-wrap leading-relaxed">
      {children}
    </pre>
  )
}

function Dica({ children }) {
  return (
    <div className="mt-3 bg-page border border-accent/30 rounded-xl p-4 text-sm text-ink leading-relaxed">
      {children}
    </div>
  )
}

function Toggle({ on, children }) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-t border-line first:border-t-0 first:pt-0">
      <span
        className={
          'relative mt-0.5 flex-none h-5 w-9 rounded-full transition-colors ' +
          (on ? 'bg-ink' : 'bg-line')
        }
      >
        <span
          className={
            'absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ' +
            (on ? 'left-[1.125rem]' : 'left-0.5')
          }
        />
      </span>
      <span className="text-sm text-ink-soft leading-relaxed">{children}</span>
    </div>
  )
}
