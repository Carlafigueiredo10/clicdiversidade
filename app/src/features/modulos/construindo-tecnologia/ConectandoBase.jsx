import CopyButton from './CopyButton'

// Tres caminhos para o app parar de perder os dados. Dados conferidos na
// documentacao oficial da Lovable: o conector de Sheets le e escreve de volta,
// o Supabase traz Table Editor em formato de planilha, e o Cloud e backend
// embutido. Os caminhos de interface sao os que a doc oficial descreve.
const CAMINHOS = [
  {
    id: 'sheets',
    numero: '01',
    nome: 'Google Sheets',
    chamada: 'Quando você quer continuar enxergando uma planilha',
    quando:
      'A planilha segue sendo a fonte de verdade: a equipe alimenta pelo Drive, como já faz hoje, e o aplicativo lê e grava de volta na mesma aba.',
    caminho: 'Connectors → Google Sheets → Add connection',
    prompt: `Conecte esta aplicação à planilha [NOME DA PLANILHA].
Use a aba "Registros" como fonte de dados.
Cada linha representa um registro.
Quero listar, pesquisar, criar e editar registros pela interface.
Toda alteração feita no aplicativo deve ser salva de volta na planilha.`,
    saida: 'A planilha é sua. Você sai levando o arquivo.',
  },
  {
    id: 'cloud',
    numero: '02',
    nome: 'Lovable Cloud',
    chamada: 'Quando você só quer que os dados fiquem guardados',
    quando:
      'Sem planilha externa e sem configurar outro serviço: banco, login e arquivos vêm embutidos na própria Lovable. É o caminho de menos passos.',
    caminho: 'More → Cloud',
    prompt: `Ative o Lovable Cloud e crie uma tabela "projetos" com os campos:
nome, órgão, responsável, status, descrição e data de atualização.
Crie as telas para listar, criar, editar e excluir registros.`,
    saida: 'É o mais preso: os dados moram dentro da Lovable.',
    alerta:
      'A documentação não informa se está incluso no plano ou é cobrado à parte — confira antes de apoiar algo importante nisso.',
  },
  {
    id: 'supabase',
    numero: '03',
    nome: 'Supabase',
    chamada: 'Quando o protótipo começa a virar sistema',
    quando:
      'Banco PostgreSQL de verdade, com login, permissões e tabelas relacionadas. O Table Editor mostra as linhas em formato de planilha, então dá para conferir e corrigir sem escrever SQL. Tem camada gratuita para começar.',
    caminho: 'More → Cloud → conectar projeto Supabase',
    prompt: `Crie no Supabase a tabela "solucoes" com os campos:
id, nome, descrição, órgão, responsável, status, categoria,
data_criacao e data_atualizacao.
Conecte a tabela às telas existentes e implemente criação,
consulta e edição.`,
    saida: 'PostgreSQL padrão: exporta e leva para outro lugar.',
  },
]

const DECISAO = [
  ['Quero mexer nos dados numa planilha, como já faço', 'Google Sheets'],
  ['A equipe alimenta os dados pelo Drive', 'Google Sheets'],
  ['Quero o caminho mais curto e não preciso de planilha', 'Lovable Cloud'],
  ['Vou precisar de login, permissões e várias tabelas', 'Supabase'],
  ['Quero sensação de planilha, com estrutura de banco', 'Supabase'],
  ['Quero poder levar os dados embora depois', 'Sheets ou Supabase'],
]

export default function ConectandoBase() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <header className="text-center">
        <span className="text-3xl" aria-hidden>
          🗄️
        </span>
        <h2 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
          Conectando uma base de dados
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-ink-soft leading-relaxed">
          Os aplicativos das abas anteriores guardam tudo no navegador de quem
          usa — o que é ótimo para demonstrar e some quando alguém limpa o
          histórico. Para os dados ficarem, o app precisa de uma base. Hoje há
          três caminhos que não exigem programar.
        </p>
      </header>

      <div className="space-y-4">
        {CAMINHOS.map((c) => (
          <article
            key={c.id}
            className="bg-card border border-line rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-xs text-accent-fg">
                {c.numero}
              </span>
              <h3 className="font-display font-semibold text-xl text-ink leading-tight">
                {c.nome}
              </h3>
              <span className="text-sm text-ink-soft">{c.chamada}</span>
            </div>

            <p className="mt-4 text-sm md:text-base text-ink-soft leading-relaxed">
              {c.quando}
            </p>

            <p className="mt-4 font-mono text-xs text-accent-fg bg-page border border-line rounded-lg px-3 py-2 break-words">
              {c.caminho}
            </p>

            {c.alerta && (
              <p className="mt-3 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 leading-relaxed">
                {c.alerta}
              </p>
            )}

            <div className="mt-5">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  O que pedir no chat da Lovable
                </span>
                <CopyButton
                  text={c.prompt}
                  copiedChildren={<span>✅ Copiado</span>}
                  className="text-xs text-accent-fg font-medium hover:text-ink transition"
                >
                  <span>Copiar</span>
                </CopyButton>
              </div>
              <pre className="font-mono text-xs p-4 bg-page border border-line rounded-xl whitespace-pre-wrap break-words text-ink-soft leading-relaxed">
                {c.prompt}
              </pre>
            </div>

            <p className="mt-4 pt-4 border-t border-line text-xs text-muted">
              <strong className="text-ink-soft">Quanto custa sair:</strong>{' '}
              {c.saida}
            </p>
          </article>
        ))}
      </div>

      <section>
        <h3 className="font-display font-semibold text-2xl text-ink text-center">
          Qual escolher
        </h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm border border-line rounded-xl overflow-hidden">
            <tbody>
              {DECISAO.map(([situacao, escolha], i) => (
                <tr
                  key={situacao}
                  className={i % 2 ? 'bg-card' : 'bg-page'}
                >
                  <td className="px-4 py-3 text-ink-soft border-b border-line">
                    {situacao}
                  </td>
                  <td className="px-4 py-3 font-medium text-ink border-b border-line whitespace-nowrap">
                    {escolha}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-sm text-ink-soft">
          Na dúvida, comece pelo <strong className="text-ink">Sheets</strong>.
          Se o projeto pedir login, histórico, permissões ou milhares de
          registros, migre para o{' '}
          <strong className="text-ink">Supabase</strong>.
        </p>
      </section>

      <aside className="bg-page border-2 border-accent/30 rounded-2xl p-6 md:p-8">
        <p className="text-xs uppercase tracking-wide text-accent-fg font-semibold">
          No protótipo, dado fictício ou público
        </p>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed">
          Os três caminhos guardam os dados{' '}
          <strong className="text-ink">fora do órgão</strong>, em servidor de
          outra empresa. Para aprender e demonstrar, isso é perfeito — use
          dados inventados ou públicos. No momento em que entrar dado pessoal,
          sigiloso ou de cidadão, o problema deixa de ser técnico e vira de
          governança: é a hora do{' '}
          <a
            href="/jornada/modulos/governanca"
            className="text-accent-fg underline underline-offset-4 hover:text-ink transition"
          >
            Módulo 06
          </a>
          , e das perguntas do guia{' '}
          <a
            href="/jornada/modulos/contratando-solucoes-de-ia.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-fg underline underline-offset-4 hover:text-ink transition"
          >
            contratando soluções de IA
          </a>
          .
        </p>
        <p className="mt-4 text-sm text-ink-soft leading-relaxed">
          <strong className="text-ink">Onde achar dado para testar:</strong> o{' '}
          <a
            href="https://bancobrasileiro.ia.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-fg underline underline-offset-4 hover:text-ink transition"
          >
            BBSIA
          </a>{' '}
          — Banco Brasileiro de Soluções de IA para a Gestão Pública — cataloga
          soluções já em uso no setor público e tem uma seção de{' '}
          <strong className="text-ink">bases reutilizáveis</strong>. Serve tanto
          para pegar dado de teste quanto para descobrir se alguém já resolveu o
          seu problema antes de você construir.
        </p>
      </aside>
    </div>
  )
}
