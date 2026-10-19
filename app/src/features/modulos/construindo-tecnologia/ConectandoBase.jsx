import CopyButton from './CopyButton'
import { LANG, tr } from '../../../i18n'

// Tres caminhos para o app parar de perder os dados. Dados conferidos na
// documentacao oficial da Lovable: o conector de Sheets le e escreve de volta,
// o Supabase traz Table Editor em formato de planilha, e o Cloud e backend
// embutido. Os caminhos de interface sao os que a doc oficial descreve.
const CAMINHOS_PT = [
  {
    id: 'sheets',
    numero: '01',
    nome: 'Google Sheets',
    chamada: 'Quando você quer continuar enxergando uma planilha',
    quando:
      'A planilha segue sendo a fonte de verdade: a equipe alimenta pelo Drive, como já faz hoje, e o aplicativo lê e grava de volta na mesma aba.',
    caminho: 'Connectors → Google Sheets → Add connection',
    prompt: `Conecte esta aplicação à planilha: [COLE AQUI O LINK DA PLANILHA]
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
    nota:
      'O uso do Cloud consome créditos, e há franquia mensal incluída: 20 créditos de Cloud por mês, em todos os planos, inclusive no gratuito. Acima disso, o consumo sai do saldo de créditos do workspace — o que costuma acontecer só quando o app ganha tráfego ou tamanho.',
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

// Caminhos de menu (campo `caminho`) ficam em ingles: e como a interface da
// Lovable aparece.
const CAMINHOS_ES = [
  {
    id: 'sheets',
    numero: '01',
    nome: 'Google Sheets',
    chamada: 'Cuando quieres seguir viendo una planilla',
    quando:
      'La planilla sigue siendo la fuente de verdad: el equipo la completa desde Drive, como ya lo hace hoy, y la aplicación lee y guarda de vuelta en la misma hoja.',
    caminho: 'Connectors → Google Sheets → Add connection',
    prompt: `Conecta esta aplicación a la planilla: [PEGA AQUÍ EL ENLACE DE LA PLANILLA]
Usa la hoja "Registros" como fuente de datos.
Cada fila representa un registro.
Quiero listar, buscar, crear y editar registros desde la interfaz.
Todo cambio hecho en la aplicación debe guardarse de vuelta en la planilla.
Toda la interfaz en español.`,
    saida: 'La planilla es tuya. Te llevas el archivo.',
  },
  {
    id: 'cloud',
    numero: '02',
    nome: 'Lovable Cloud',
    chamada: 'Cuando solo quieres que los datos queden guardados',
    quando:
      'Sin planilla externa y sin configurar otro servicio: base de datos, inicio de sesión y archivos vienen integrados en Lovable. Es el camino con menos pasos.',
    caminho: 'More → Cloud',
    prompt: `Activa Lovable Cloud y crea una tabla "proyectos" con los campos:
nombre, organismo, responsable, estado, descripción y fecha de actualización.
Crea las pantallas para listar, crear, editar y eliminar registros.
Toda la interfaz en español.`,
    saida: 'Es el más cerrado: los datos viven dentro de Lovable.',
    nota:
      'El uso de Cloud consume créditos, y hay una franquicia mensual incluida: 20 créditos de Cloud por mes, en todos los planes, incluso en el gratuito. Por encima de eso, el consumo sale del saldo de créditos del workspace — algo que suele pasar solo cuando la app gana tráfico o tamaño.',
  },
  {
    id: 'supabase',
    numero: '03',
    nome: 'Supabase',
    chamada: 'Cuando el prototipo empieza a convertirse en sistema',
    quando:
      'Una base PostgreSQL de verdad, con inicio de sesión, permisos y tablas relacionadas. El Table Editor muestra las filas como una planilla, así que puedes revisar y corregir sin escribir SQL. Tiene un nivel gratuito para empezar.',
    caminho: 'More → Cloud → conectar proyecto de Supabase',
    prompt: `Crea en Supabase la tabla "soluciones" con los campos:
id, nombre, descripción, organismo, responsable, estado, categoría,
fecha_creacion y fecha_actualizacion.
Conecta la tabla a las pantallas existentes e implementa creación,
consulta y edición. Toda la interfaz en español.`,
    saida: 'PostgreSQL estándar: lo exportas y lo llevas a otro lugar.',
  },
]

const CAMINHOS = tr({ pt: CAMINHOS_PT, es: CAMINHOS_ES })

const DECISAO_PT = [
  ['Quero mexer nos dados numa planilha, como já faço', 'Google Sheets'],
  ['A equipe alimenta os dados pelo Drive', 'Google Sheets'],
  ['Quero o caminho mais curto e não preciso de planilha', 'Lovable Cloud'],
  ['Vou precisar de login, permissões e várias tabelas', 'Supabase'],
  ['Quero sensação de planilha, com estrutura de banco', 'Supabase'],
  ['Quero poder levar os dados embora depois', 'Sheets ou Supabase'],
]

const DECISAO_ES = [
  ['Quiero trabajar los datos en una planilla, como ya lo hago', 'Google Sheets'],
  ['El equipo carga los datos desde Drive', 'Google Sheets'],
  ['Quiero el camino más corto y no necesito planilla', 'Lovable Cloud'],
  ['Voy a necesitar inicio de sesión, permisos y varias tablas', 'Supabase'],
  ['Quiero la sensación de una planilla, con estructura de base de datos', 'Supabase'],
  ['Quiero poder llevarme los datos después', 'Sheets o Supabase'],
]

const DECISAO = tr({ pt: DECISAO_PT, es: DECISAO_ES })

const T = tr({
  pt: {
    titulo: 'Conectando uma base de dados',
    intro:
      'Os aplicativos das abas anteriores guardam tudo no navegador de quem usa — o que é ótimo para demonstrar e some quando alguém limpa o histórico. Para os dados ficarem, o app precisa de uma base. Hoje há três caminhos que não exigem programar.',
    pedir: 'O que pedir no chat da Lovable',
    copiar: 'Copiar',
    copiado: '✅ Copiado',
    sair: 'Quanto custa sair:',
    qual: 'Qual escolher',
    duvida: ['Na dúvida, comece pelo ', '. Se o projeto pedir login, histórico, permissões ou milhares de registros, migre para o ', '.'],
    asideEyebrow: 'No protótipo, dado fictício ou público',
    aside: ['Os três caminhos guardam os dados ', 'fora do órgão', ', em servidor de outra empresa. Para aprender e demonstrar, isso é perfeito — use dados inventados ou públicos. No momento em que entrar dado pessoal, sigiloso ou de cidadão, o problema deixa de ser técnico e vira de governança: é a hora do ', 'Módulo 06', ', e das perguntas do guia ', 'contratando soluções de IA', '.'],
    ondeAchar: 'Onde achar dado para testar:',
  },
  es: {
    titulo: 'Conectando una base de datos',
    intro:
      'Las aplicaciones de las pestañas anteriores guardan todo en el navegador de quien las usa — ideal para demostrar, pero se pierde cuando alguien borra el historial. Para que los datos permanezcan, la app necesita una base de datos. Hoy hay tres caminos que no exigen programar.',
    pedir: 'Qué pedir en el chat de Lovable',
    copiar: 'Copiar',
    copiado: '✅ Copiado',
    sair: 'Cuánto cuesta salir:',
    qual: 'Cuál elegir',
    duvida: ['Si tienes dudas, empieza por ', '. Si el proyecto requiere inicio de sesión, historial, permisos o miles de registros, migra a ', '.'],
    asideEyebrow: 'En el prototipo, datos ficticios o públicos',
    aside: ['Los tres caminos guardan los datos ', 'fuera del organismo', ', en servidores de otra empresa. Para aprender y demostrar, es perfecto — usa datos inventados o públicos. En el momento en que entren datos personales, reservados o de la ciudadanía, el problema deja de ser técnico y pasa a ser de gobernanza: es el momento del ', 'Módulo 06', ' y de las preguntas de la guía ', 'contratando soluciones de IA', '.'],
    ondeAchar: 'Dónde encontrar datos para probar:',
  },
})

export default function ConectandoBase() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <header className="text-center">
        <span className="text-3xl" aria-hidden>
          🗄️
        </span>
        <h2 className="mt-4 font-display font-semibold text-3xl md:text-5xl text-ink leading-[1.05]">
          {T.titulo}
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-ink-soft leading-relaxed">
          {T.intro}
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

            {c.nota && (
              <p className="mt-3 text-xs text-ink-soft bg-page border border-line rounded-lg px-3 py-2 leading-relaxed">
                {c.nota}
              </p>
            )}

            <div className="mt-5">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {T.pedir}
                </span>
                <CopyButton
                  text={c.prompt}
                  copiedChildren={<span>{T.copiado}</span>}
                  className="text-xs text-accent-fg font-medium hover:text-ink transition"
                >
                  <span>{T.copiar}</span>
                </CopyButton>
              </div>
              <pre className="font-mono text-xs p-4 bg-page border border-line rounded-xl whitespace-pre-wrap break-words text-ink-soft leading-relaxed">
                {c.prompt}
              </pre>
            </div>

            <p className="mt-4 pt-4 border-t border-line text-xs text-muted">
              <strong className="text-ink-soft">{T.sair}</strong>{' '}
              {c.saida}
            </p>
          </article>
        ))}
      </div>

      <section>
        <h3 className="font-display font-semibold text-2xl text-ink text-center">
          {T.qual}
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
          {T.duvida[0]}<strong className="text-ink">Sheets</strong>
          {T.duvida[1]}
          <strong className="text-ink">Supabase</strong>
          {T.duvida[2]}
        </p>
      </section>

      <aside className="bg-page border-2 border-accent/30 rounded-2xl p-6 md:p-8">
        <p className="text-xs uppercase tracking-wide text-accent-fg font-semibold">
          {T.asideEyebrow}
        </p>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed">
          {T.aside[0]}
          <strong className="text-ink">{T.aside[1]}</strong>
          {T.aside[2]}
          <a
            href="/jornada/modulos/governanca"
            className="text-accent-fg underline underline-offset-4 hover:text-ink transition"
          >
            {T.aside[3]}
          </a>
          {T.aside[4]}
          <a
            href="/jornada/modulos/contratando-solucoes-de-ia.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-fg underline underline-offset-4 hover:text-ink transition"
          >
            {T.aside[5]}
          </a>
          {T.aside[6]}
        </p>
        <p className="mt-4 text-sm text-ink-soft leading-relaxed">
          <strong className="text-ink">{T.ondeAchar}</strong>{' '}
          {LANG === 'es' && (
            <>
              en Uruguay, el{' '}
              <a
                href="https://catalogodatos.gub.uy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-fg underline underline-offset-4 hover:text-ink transition"
              >
                Catálogo Nacional de Datos Abiertos
              </a>{' '}
              (AGESIC) reúne miles de conjuntos de datos públicos, listos para
              probar una app. Como referencia regional, en Brasil el{' '}
            </>
          )}
          {LANG !== 'es' && <>o </>}
          <a
            href="https://bancobrasileiro.ia.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-fg underline underline-offset-4 hover:text-ink transition"
          >
            BBSIA
          </a>{' '}
          {tr({
            pt: (
              <>
                — Banco Brasileiro de Soluções de IA para a Gestão Pública —
                cataloga soluções já em uso no setor público e tem uma seção de{' '}
                <strong className="text-ink">bases reutilizáveis</strong>. Serve
                tanto para pegar dado de teste quanto para descobrir se alguém já
                resolveu o seu problema antes de você construir.
              </>
            ),
            es: (
              <>
                — Banco Brasileño de Soluciones de IA para la Gestión Pública,
                en portugués — cataloga soluciones ya en uso en el sector público
                y tiene una sección de{' '}
                <strong className="text-ink">bases reutilizables</strong>. Sirve
                para descubrir si alguien ya resolvió tu problema antes de que
                construyas.
              </>
            ),
          })}
        </p>
      </aside>
    </div>
  )
}
