// A escada "Além do chat": 4 formas de ensinar a IA a trabalhar do seu jeito.
// Passo a passo no Gemini, conferido nas paginas oficiais do Google em
// 23/10/2026 (ver CONFERIDO_EM e `fonte` de cada degrau). O Gemini esta em
// transicao (Gems -> skills, NotebookLM -> Gemini Notebook): revisar antes de
// cada turma. Rotulos de menu vem da ajuda em ingles; ficam entre parenteses
// porque a tela pode mostrar o nome traduzido.
import { tr } from '../../../i18n'

export const CONFERIDO_EM = '23/10/2026'

export const DEGRAUS = [
  {
    n: 1,
    id: 'projeto',
    icon: '🗂️',
    nome: tr({ pt: 'Projeto', es: 'Proyecto' }),
    resolve: tr({
      pt: '“Toda vez eu preciso reexplicar o contexto.”',
      es: '“Cada vez tengo que volver a explicar el contexto.”',
    }),
    oque: tr({
      pt: 'Um espaço com documentos e instruções fixas para um tema. Toda conversa aberta ali já começa sabendo do que se trata.',
      es: 'Un espacio con documentos e instrucciones fijas para un tema. Cada conversación que abres ahí ya empieza sabiendo de qué se trata.',
    }),
    noGemini: tr({
      pt: 'Notebooks no Gemini — ou o Gemini Notebook (o antigo NotebookLM), que responde só com base nas fontes que você sobe.',
      es: 'Notebooks en Gemini — o Gemini Notebook (el antiguo NotebookLM), que responde solo con base en las fuentes que subes.',
    }),
    plano: tr({ pt: 'Gratuito', es: 'Gratuito' }),
    passos: tr({
      pt: [
        'Abra gemini.google.com.',
        'No menu lateral, em Notebooks, clique em Novo notebook (New notebook) e dê um nome.',
        'Clique em Adicionar fontes (Add sources) e anexe os documentos de referência.',
        'Para fixar instruções: em Todos os notebooks (All notebooks), abra Mais (More) → Configurações do notebook (Notebook settings), escreva e salve.',
      ],
      es: [
        'Abre gemini.google.com.',
        'En el menú lateral, en Notebooks, haz clic en Nuevo notebook (New notebook) y ponle un nombre.',
        'Haz clic en Agregar fuentes (Add sources) y adjunta los documentos de referencia.',
        'Para fijar instrucciones: en Todos los notebooks (All notebooks), abre Más (More) → Configuración del notebook (Notebook settings), escribe y guarda.',
      ],
    }),
    compartilhar: tr({
      pt: 'Notebooks com conversas do Gemini são privados. Para trabalhar em equipe, use o Gemini Notebook, que permite compartilhar.',
      es: 'Los notebooks con conversaciones de Gemini son privados. Para trabajar en equipo, usa Gemini Notebook, que permite compartir.',
    }),
    risco: tr({
      pt: 'Baixo — desde que as fontes sejam públicas ou da sua conta institucional. Nada de dado pessoal em conta pessoal.',
      es: 'Bajo — siempre que las fuentes sean públicas o de tu cuenta institucional. Nada de datos personales en una cuenta personal.',
    }),
    outras: tr({
      pt: 'Projetos no Claude e no ChatGPT seguem a mesma ideia.',
      es: 'Los Proyectos de Claude y de ChatGPT siguen la misma idea.',
    }),
    fonte: 'https://support.google.com/gemini/answer/16972047',
  },
  {
    n: 2,
    id: 'assistente',
    icon: '🤖',
    nome: tr({ pt: 'Assistente', es: 'Asistente' }),
    resolve: tr({
      pt: '“Quero que a equipe toda use o mesmo especialista.”',
      es: '“Quiero que todo el equipo use el mismo especialista.”',
    }),
    oque: tr({
      pt: 'Uma persona com instruções, regras e base de conhecimento, reutilizável e compartilhável. É a peça que mais depende de um bom prompt — com os Limites do PTCFSL.',
      es: 'Una persona con instrucciones, reglas y base de conocimiento, reutilizable y compartible. Es la pieza que más depende de un buen prompt — con los Límites del PTCFSL.',
    }),
    noGemini: tr({
      pt: 'Os Gems — mas eles estão acabando. Em contas pessoais saem a partir de novembro de 2026; em contas Workspace, não antes de março de 2027. Eles viram skills automaticamente.',
      es: 'Los Gems — pero se están terminando. En cuentas personales salen a partir de noviembre de 2026; en cuentas Workspace, no antes de marzo de 2027. Se convierten en skills automáticamente.',
    }),
    plano: tr({ pt: 'Em transição', es: 'En transición' }),
    passos: tr({
      pt: [
        'Conta pessoal: pule direto para o degrau 3 — crie como skill.',
        'Conta Workspace (pelo menos até março de 2027): menu lateral → Gems → Novo Gem (New Gem), cole as instruções, anexe arquivos em Conhecimento (Knowledge) e salve.',
        'Copilot (Microsoft 365): o passo a passo está no CLIC Prisma — card 10 da grade de módulos.',
      ],
      es: [
        'Cuenta personal: salta directo al escalón 3 — créalo como skill.',
        'Cuenta Workspace (al menos hasta marzo de 2027): menú lateral → Gems → Nuevo Gem (New Gem), pega las instrucciones, adjunta archivos en Conocimiento (Knowledge) y guarda.',
        'Copilot (Microsoft 365): el paso a paso está en CLIC Prisma — tarjeta 10 de la grilla de módulos.',
      ],
    }),
    compartilhar: tr({
      pt: 'Um Gem compartilhado mostra as instruções e os arquivos para quem recebe. Revise o que está anexado antes de compartilhar.',
      es: 'Un Gem compartido muestra las instrucciones y los archivos a quien lo recibe. Revisa lo adjunto antes de compartir.',
    }),
    risco: tr({
      pt: 'Médio — o risco está no que vai anexado como conhecimento e em quem recebe o compartilhamento.',
      es: 'Medio — el riesgo está en lo que se adjunta como conocimiento y en quién recibe lo compartido.',
    }),
    outras: tr({
      pt: 'Agentes do Copilot e GPTs do ChatGPT são assistentes deste degrau.',
      es: 'Los agentes de Copilot y los GPT de ChatGPT son asistentes de este escalón.',
    }),
    fonte: 'https://support.google.com/gemini/answer/18560919',
  },
  {
    n: 3,
    id: 'skill',
    icon: '🧩',
    nome: tr({ pt: 'Skill', es: 'Skill' }),
    resolve: tr({
      pt: '“Quero que ela faça esta tarefa sempre do mesmo jeito.”',
      es: '“Quiero que haga esta tarea siempre de la misma manera.”',
    }),
    oque: tr({
      pt: 'Um procedimento que a IA carrega só quando precisa — redigir um ofício no padrão do órgão, auditar um critério de seleção. Você chama pelo nome, ou ela reconhece sozinha quando é a hora.',
      es: 'Un procedimiento que la IA carga solo cuando lo necesita — redactar un oficio con el formato del organismo, auditar un criterio de selección. La llamas por su nombre, o ella reconoce sola cuándo es el momento.',
    }),
    noGemini: tr({
      pt: 'Skills — chamadas com “/” na conversa. É o que substitui os Gems. Aceita subir um arquivo SKILL.md pronto, como os do catálogo abaixo.',
      es: 'Skills — se llaman con “/” en la conversación. Es lo que reemplaza a los Gems. Acepta subir un archivo SKILL.md listo, como los del catálogo de abajo.',
    }),
    plano: tr({ pt: 'Gratuito (18+)', es: 'Gratuito (18+)' }),
    passos: tr({
      pt: [
        'Abra gemini.google.com e clique em Personalizar (Customize) — se não aparecer, antes em Mais (More).',
        'Clique em Skills → Criar (Create).',
        'Escolha Criar com o Gemini, Criar manualmente ou Enviar (Upload) — para usar um SKILL.md do catálogo.',
        'Na conversa, digite “/” e escolha a skill.',
      ],
      es: [
        'Abre gemini.google.com y haz clic en Personalizar (Customize) — si no aparece, antes en Más (More).',
        'Haz clic en Skills → Crear (Create).',
        'Elige Crear con Gemini, Crear manualmente o Subir (Upload) — para usar un SKILL.md del catálogo.',
        'En la conversación, escribe “/” y elige la skill.',
      ],
    }),
    compartilhar: tr({
      pt: 'Ainda não dá para compartilhar skills no Gemini (o Google anunciou para “as próximas semanas”). Por enquanto, compartilhe o arquivo SKILL.md.',
      es: 'Todavía no se pueden compartir skills en Gemini (Google lo anunció para “las próximas semanas”). Por ahora, comparte el archivo SKILL.md.',
    }),
    risco: tr({
      pt: 'Médio — skills exigem a opção “Manter atividade” ligada. Em conta pessoal, isso libera o uso das conversas para treinar modelos.',
      es: 'Medio — las skills exigen la opción “Mantener actividad” activada. En una cuenta personal, eso habilita el uso de las conversaciones para entrenar modelos.',
    }),
    outras: tr({
      pt: 'O Claude usa o mesmo formato SKILL.md (lá, envie a pasta da skill compactada em .zip).',
      es: 'Claude usa el mismo formato SKILL.md (allí, sube la carpeta de la skill comprimida en .zip).',
    }),
    fonte: 'https://support.google.com/gemini/answer/17094296',
  },
  {
    n: 4,
    id: 'conector',
    icon: '🔌',
    nome: tr({ pt: 'Conector', es: 'Conector' }),
    resolve: tr({
      pt: '“Quero que ela busque e aja nos meus sistemas.”',
      es: '“Quiero que busque y actúe en mis sistemas.”',
    }),
    oque: tr({
      pt: 'Dá à IA acesso a outros aplicativos — e-mail, agenda, arquivos — e, com a sua permissão, a capacidade de agir neles: criar um evento, editar um documento.',
      es: 'Le da a la IA acceso a otras aplicaciones — correo, agenda, archivos — y, con tu permiso, la capacidad de actuar en ellas: crear un evento, editar un documento.',
    }),
    noGemini: tr({
      pt: 'Conectores — você chama com “@” na conversa (@Gmail, @Drive, @Agenda). Conectores personalizados ainda não existem no Brasil nem no Uruguai.',
      es: 'Conectores — los llamas con “@” en la conversación (@Gmail, @Drive, @Calendar). Los conectores personalizados todavía no existen en Brasil ni en Uruguay.',
    }),
    plano: tr({ pt: 'Gratuito', es: 'Gratuito' }),
    passos: tr({
      pt: [
        'Abra gemini.google.com → Personalizar (Customize) → Conectores (Connectors).',
        'Encontre o app e clique em Adicionar (Add); siga as instruções na tela.',
        'Na conversa, digite “@” e escolha o app — por exemplo: “@Gmail resuma os e-mails de hoje sobre o processo X”.',
        'Para desligar: Mais opções (More options) → Desconectar (Disconnect).',
      ],
      es: [
        'Abre gemini.google.com → Personalizar (Customize) → Conectores (Connectors).',
        'Busca la aplicación y haz clic en Agregar (Add); sigue las instrucciones en pantalla.',
        'En la conversación, escribe “@” y elige la aplicación — por ejemplo: “@Gmail resume los correos de hoy sobre el expediente X”.',
        'Para desactivarlo: Más opciones (More options) → Desconectar (Disconnect).',
      ],
    }),
    compartilhar: tr({
      pt: 'Não se aplica: a conexão é individual, conta por conta. Na conta Workspace, quem libera ou bloqueia é a administração de TI do órgão.',
      es: 'No aplica: la conexión es individual, cuenta por cuenta. En una cuenta Workspace, quien habilita o bloquea es la administración de TI del organismo.',
    }),
    risco: tr({
      pt: 'Alto — aqui os dados do órgão passam a circular entre sistemas. Antes de conectar, passe pelo Módulo 06 (Governança).',
      es: 'Alto — aquí los datos del organismo empiezan a circular entre sistemas. Antes de conectar, pasa por el Módulo 06 (Gobernanza).',
    }),
    outras: tr({
      pt: 'Claude e ChatGPT também têm conectores; o padrão técnico por trás de muitos deles chama-se MCP.',
      es: 'Claude y ChatGPT también tienen conectores; el estándar técnico detrás de muchos de ellos se llama MCP.',
    }),
    fonte: 'https://support.google.com/gemini/answer/13695044',
  },
]

// "Conta pessoal ou institucional?" — base: politica de privacidade do Gemini
// (support.google.com/gemini/answer/13594961) e privacy hub do Workspace.
export const CONTAS = {
  pessoal: tr({
    pt: [
      'Com “Manter atividade” ligado, o Google pode usar as conversas para treinar modelos.',
      'Parte das conversas passa por revisão humana e pode ficar guardada por até 3 anos.',
      'Desligar a opção protege as conversas, mas desativa skills, conectores e fontes do Drive.',
    ],
    es: [
      'Con “Mantener actividad” activado, Google puede usar las conversaciones para entrenar modelos.',
      'Parte de las conversaciones pasa por revisión humana y puede guardarse hasta 3 años.',
      'Desactivar la opción protege las conversaciones, pero desactiva skills, conectores y fuentes de Drive.',
    ],
  }),
  institucional: tr({
    pt: [
      'O Workspace não usa os dados do órgão para treinar modelos sem permissão.',
      'As conversas e os arquivos não passam por revisão humana.',
      'A administração de TI decide o que fica ligado: skills, conectores, compartilhamento.',
    ],
    es: [
      'Workspace no usa los datos del organismo para entrenar modelos sin permiso.',
      'Las conversaciones y los archivos no pasan por revisión humana.',
      'La administración de TI decide qué queda activado: skills, conectores, compartir.',
    ],
  }),
  nunca: tr({
    pt: 'Em nenhuma das duas: dados pessoais de cidadãs e cidadãos, documentos sigilosos, processos em instrução, senhas.',
    es: 'En ninguna de las dos: datos personales de la ciudadanía, documentos reservados, expedientes en trámite, contraseñas.',
  }),
  fontes: [
    'https://support.google.com/gemini/answer/13594961',
    'https://knowledge.workspace.google.com/admin/gemini/generative-ai-in-google-workspace-privacy-hub',
  ],
}
