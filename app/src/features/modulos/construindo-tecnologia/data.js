export const INITIAL_PROMPT = `Quero construir um aplicativo simples.
Pode me ajudar a estruturar a ideia como um MVP?

Primeiro, faça perguntas curtas para entender melhor o projeto.

Pergunte sobre:

1. Qual problema o aplicativo resolve
2. Quem são as pessoas usuárias
3. Qual é a principal ação que a pessoa usuária deve conseguir realizar
4. Quais informações precisam ser registradas
5. Se o aplicativo precisa apenas registrar dados ou também consultar, editar ou excluir
6. Se haverá login ou não

Depois que eu responder, organize a proposta em um formato prático contendo:

• objetivo do aplicativo
• público principal
• versão mínima viável (MVP)
• páginas principais
• funcionalidades essenciais
• fluxo mínimo de navegação entre as telas
• modelo de dados principal (campos que precisam ser registrados)
• sugestão concreta de interface inicial

Para a interface, descreva elementos reais de interface, como:

• lista em cards
• botões de ação
• formulários
• indicadores de status
• navegação simples entre telas

Considere sempre uma solução simples, com foco em celular, linguagem clara e interface intuitiva.

No final, pergunte se eu quero que você transforme essa definição em um prompt pronto para usar na Lovable.`

export const MEU_APP_PROMPT = `PERSONA
Você é um Product Designer sênior, UX Strategist e Arquiteto de Aplicações no-code, especializado em criar sistemas web de alta clareza, alto valor percebido e experiência visual profissional para equipes do setor público.
Sua especialidade é transformar necessidades administrativas em aplicativos modernos, intuitivos e visualmente impressionantes, com aparência de produto real pronto para uso.
Seu tom deve ser objetivo, elegante, confiável e profissional. Você projeta interfaces que geram efeito "UAU" sem exagero visual, priorizando:
clareza
credibilidade
facilidade de uso
excelente organização da informação

MISSÃO PRINCIPAL
Crie um aplicativo web completo de gerenciamento de tarefas para servidores e servidoras públicas, suas equipes e suas unidades.
O sistema deve permitir:
cadastrar tarefas
acompanhar demandas
priorizar atividades
visualizar produtividade
gerenciar equipe
distribuir responsabilidades
O aplicativo precisa parecer um produto real, moderno e pronto para uso, mesmo sem integração com banco de dados nesta primeira versão.

PRINCÍPIOS DO PRODUTO
O sistema deve ser construído com foco em:
simplicidade de uso
organização visual impecável
sensação de ferramenta profissional
navegação intuitiva
valor percebido já na primeira tela
forte impacto visual para demonstração em oficina

ESTRUTURA DO APLICATIVO
O aplicativo deve possuir as seguintes áreas principais:
Dashboard
Tarefas
Equipe
Kanban
Calendário ou Timeline
Cadastro / edição de tarefa

1) DASHBOARD PRINCIPAL
Criar uma tela inicial com visão executiva da operação da unidade.
Ela deve incluir:
Indicadores principais
total de tarefas
tarefas concluídas
tarefas em andamento
tarefas atrasadas
tarefas próximas do prazo
tarefas por criticidade
tarefas por responsável
total de integrantes da equipe
integrantes ativos
Painéis visuais
Adicionar visualizações claras e elegantes:
gráfico de distribuição de tarefas por status
gráfico de tarefas por criticidade
gráfico de tarefas por responsável
painel de produtividade da equipe
painel de carga de tarefas por responsável
Blocos estratégicos
Prioridades do dia
Tarefas mais urgentes
Risco de atraso
Atividades recentes
Tudo deve ser apresentado em cards bem desenhados, com excelente hierarquia visual.

2) GESTÃO DE TAREFAS
Criar uma página de tarefas com visual profissional, organizada em tabela moderna ou lista inteligente.
Cada tarefa deve possuir:
título
descrição
responsável (selecionado da aba Equipe)
unidade ou equipe
data de criação
prazo de entrega
status
criticidade
observações opcionais

3) STATUS OPERACIONAL
Cada tarefa deve possuir um status operacional:
Em andamento
Concluída
Atrasada
Esses status devem ser exibidos com etiquetas visuais claras.

4) TAG AUTOMÁTICA DE PRAZO
O sistema deve calcular automaticamente o estado do prazo com base na data atual.
Mostrar as seguintes etiquetas:
🟢 No prazo
🟡 Prazo próximo
🔴 Vencida
Essa lógica deve ser visual e automática.

5) CRITICIDADE
Cada tarefa pode possuir nível de criticidade:
Baixa
Média
Alta
Apresentar isso com cores elegantes e etiquetas visuais claras.
Exemplo:
Baixa → cinza ou azul suave
Média → amarelo ou laranja
Alta → vermelho

6) FORMULÁRIO DE CRIAÇÃO E EDIÇÃO DE TAREFAS
Criar um formulário simples e profissional contendo:
título
descrição
responsável
unidade
prazo
criticidade
status
observações
Botões disponíveis:
salvar tarefa
limpar formulário
cancelar edição
O campo responsável deve listar automaticamente os integrantes cadastrados na aba Equipe.

7) ABA EQUIPE
Criar uma página chamada Equipe para cadastro e gerenciamento das pessoas da unidade.
Essa aba deve permitir personalizar o aplicativo para a realidade de cada participante da oficina.
Cada integrante da equipe deve possuir:
nome completo
cargo ou função
unidade ou equipe
e-mail institucional opcional
telefone opcional
status do integrante:
Ativo
Afastado
Férias
observações opcionais
Funcionalidades da aba Equipe
Permitir:
cadastrar integrante
editar integrante
remover integrante
buscar por nome
filtrar por unidade
filtrar por status
visualizar lista da equipe
visualizar carga de tarefas por integrante
Integração com tarefas
Os integrantes cadastrados devem alimentar automaticamente o campo responsável das tarefas.
Regras:
mostrar preferencialmente integrantes ativos
exibir nome e unidade
integrar dados aos gráficos de produtividade
integrar dados ao painel de carga por responsável

8) FILTROS E PRODUTIVIDADE
Adicionar filtros para:
responsável
unidade
status
criticidade
prazo
busca por palavra-chave
Ordenação por:
prazo mais próximo
maior criticidade
mais recentes
responsável
maior carga de tarefas

9) VISÕES ALTERNATIVAS
Para elevar o impacto visual do aplicativo, incluir:
Kanban
Colunas:
Em andamento
Concluída
Atrasada
Cartões com:
título
responsável
prazo
criticidade
Calendário ou Timeline
Exibir tarefas distribuídas por data.
Permitir visualizar:
tarefas da semana
tarefas do mês
prazos próximos

10) SEÇÕES DE INTELIGÊNCIA OPERACIONAL
Adicionar também:
Prioridades da semana
Lista automática com tarefas de maior criticidade e prazo próximo.
Risco de atraso
Lista de tarefas que estão próximas de vencer ou já vencidas.
Carga por responsável
Mostrar quantas tarefas cada integrante possui.

11) DADOS SIMULADOS
O aplicativo deve abrir com dados de exemplo já preenchidos para parecer vivo na demonstração.
Criar:
Tarefas
Pelo menos 12 tarefas, incluindo:
elaboração de relatório mensal
resposta a ofício
atualização de planilha de acompanhamento
consolidação de indicadores
revisão de processo administrativo
preparação de reunião da unidade
organização de documentos institucionais
atualização de painel de monitoramento
apoio à demanda da chefia
revisão de minuta de documento
levantamento de dados para relatório
atualização de controle interno
Distribuir tarefas entre:
diferentes prazos
diferentes criticidades
diferentes responsáveis
diferentes status
Integrantes da equipe
Criar pelo menos 6 integrantes:
Exemplos:
Ana Ribeiro — Coordenadora da Unidade
Carla Mendes — Analista Administrativa
Juliana Costa — Técnica de Planejamento
Renata Alves — Assistente de Gestão
Fernanda Rocha — Apoio Administrativo
Patrícia Gomes — Assessora Técnica
Criar 3 unidades diferentes.
Incluir pelo menos:
1 integrante em férias
1 integrante afastado

12) ESTRUTURA VISUAL
O aplicativo deve possuir:
sidebar lateral moderna
dashboard inicial
página de tarefas
página de equipe
formulário de tarefa
visão Kanban
visão calendário ou timeline

13) ESTILO VISUAL
Design:
moderno
limpo
elegante
profissional
responsivo
Aplicar:
cards bem desenhados
boa tipografia
espaçamento generoso
uso inteligente de cores
indicadores visuais claros
aparência de software institucional moderno
O aplicativo deve transmitir eficiência, organização e controle operacional.

RESULTADO ESPERADO
O resultado deve ser um aplicativo de gerenciamento de tarefas com aparência de produto real, contendo:
dashboard executivo
gestão de tarefas
cadastro de equipe
filtros e inteligência operacional
visão Kanban
visão temporal
dados simulados realistas
A primeira tela deve gerar impacto visual imediato, transmitindo:
controle da operação
organização das demandas
priorização clara
produtividade da equipe
A interface deve parecer uma plataforma moderna de gestão pública, e não apenas um formulário simples.`

export const BOAS_PRATICAS = [
  {
    num: '01',
    title: 'Quebre o sistema em partes',
    body:
      'Evite pedir páginas inteiras de uma vez. Peça componentes menores e depois combine tudo. Construir por partes dá mais controle sobre o resultado.',
    bom: 'Crie um card de perfil com foto, nome e botão seguir.',
    ruim: 'Crie toda a página de perfil.',
  },
  {
    num: '02',
    title: 'Use conteúdo real',
    body:
      'Evite textos genéricos como "lorem ipsum". Conteúdo real ajuda a IA a gerar layout mais coerente, espaçamento correto e botões realistas. Inclua exemplos de títulos, descrições e ações.',
  },
  {
    num: '03',
    title: 'Peça perguntas antes de gerar código',
    body:
      'Se o sistema for mais complexo, peça para a IA entender melhor o problema antes de começar. Isso melhora a arquitetura inicial.',
    bom: 'Antes de gerar o código, me faça perguntas para entender completamente o sistema.',
  },
  {
    num: '04',
    title: 'Pense mobile-first',
    body:
      'Grande parte das pessoas usa aplicativos pelo celular. Inclua a instrução de responsividade em todo prompt de interface para evitar problemas de layout depois.',
    bom: 'O design deve ser responsivo com foco em mobile-first.',
  },
  {
    num: '05',
    title: 'Evolua o aplicativo em etapas',
    body:
      'Aplicativos reais não são criados em um único prompt. O processo acontece em ciclos: criar estrutura inicial, adicionar funcionalidades, melhorar interface, corrigir erros. Esse processo iterativo produz resultados melhores.',
  },
  {
    num: '06',
    title: 'Use prompts específicos',
    body:
      'Prompts muito vagos geram resultados genéricos. Quanto mais específico o pedido, melhor o resultado.',
    bom: 'Crie um dashboard com gráfico de vendas, tabela de pedidos e filtros por data.',
    ruim: 'Crie um dashboard.',
  },
  {
    num: '07',
    title: 'Copie erros no chat',
    body:
      'Se aparecer um erro no sistema, copie a mensagem e envie para a IA. Ela consegue analisar mensagens de erro e sugerir correções.',
    bom: 'Este erro apareceu ao executar o aplicativo. Pode identificar o problema?',
  },
]

export const BIBLIOTECA_GROUPS = [
  {
    id: 'comecar',
    label: 'Começar o app',
    prompts: [
      {
        title: 'Landing page — estrutura inicial',
        text:
          'Crie uma landing page moderna para [descreva o produto]. O público-alvo é [quem]. A ação principal é [o quê]. Use um design minimalista com hero section, seção de features com ícones, e CTA final. O design deve ser responsivo com foco em mobile-first.',
      },
      {
        title: 'Página inicial com layout base',
        text:
          'Crie a estrutura base do aplicativo com: header com logotipo e menu de navegação, área central de conteúdo, footer simples. O design deve ser responsivo com foco em mobile-first.',
      },
      {
        title: 'Perguntas antes de começar',
        text:
          'Antes de gerar qualquer código, me faça perguntas para entender completamente o sistema que quero construir. Aguarde minhas respostas antes de começar.',
      },
    ],
  },
  {
    id: 'usuario',
    label: 'Área do usuário',
    prompts: [
      {
        title: 'Login e cadastro',
        text:
          'Adicione um sistema de login e cadastro com email e senha. Crie as páginas /login e /signup com formulários validados. Após login, redirecione para /dashboard. Use Lovable Cloud para autenticação.',
      },
      {
        title: 'Dashboard de quem está logado',
        text:
          'Crie uma página de dashboard para quem está logado. Deve ter: sidebar com navegação, header com avatar e botão de logout, área central com cards de métricas e uma tabela de dados recentes. Design limpo e responsivo.',
      },
      {
        title: 'Perfil editável',
        text:
          'Crie uma página de perfil com: foto, nome, email e campos editáveis. Botão salvar que atualiza os dados no banco. Feedback visual de sucesso ou erro.',
      },
    ],
  },
  {
    id: 'dados',
    label: 'Dados e CRUD',
    prompts: [
      {
        title: 'CRUD completo',
        text:
          'Crie um CRUD completo para [recurso] usando Lovable Cloud. Tabela no banco com RLS, listagem com loading state, criação, edição inline, confirmação de exclusão. user_id vinculado automaticamente.',
      },
      {
        title: 'Tabela com filtros e busca',
        text:
          'Crie uma tabela de dados com: busca por texto, filtro por status (dropdown), ordenação clicável por colunas, paginação. Dados mockados com 20+ itens. Design clean com hover nas linhas.',
      },
      {
        title: 'Upload de arquivos',
        text:
          'Adicione upload de arquivos na página [qual]. Lovable Cloud Storage, bucket [público/privado]. Preview antes do upload, barra de progresso, tratamento de erro. Limite 5MB.',
      },
    ],
  },
  {
    id: 'experiencia',
    label: 'Experiência',
    prompts: [
      {
        title: 'Animações de entrada',
        text:
          'Adicione animações de entrada suaves em cards e seções. Use framer-motion com fade-in e slide-up. Delay escalonado entre elementos. 0.4s com easing suave.',
      },
      {
        title: 'Modo escuro',
        text:
          'Adicione alternância entre modo claro e escuro. Botão toggle no header. A preferência deve ser salva e aplicada automaticamente na próxima visita.',
      },
      {
        title: 'Responsividade',
        text:
          'Revise todas as páginas do aplicativo e ajuste o layout para funcionar bem em celular, tablet e desktop. Priorize a versão mobile. Corrija elementos cortados, fontes pequenas e botões difíceis de tocar.',
      },
    ],
  },
  {
    id: 'ia',
    label: 'Integração com IA',
    prompts: [
      {
        title: 'Funcionalidade com IA generativa',
        text:
          'Adicione uma funcionalidade de IA que [descreva o que deve fazer]. Use Lovable AI com modelo gemini-2.5-flash. Loading state durante processamento. Resultado exibido em formato de texto organizado.',
      },
      {
        title: 'Análise de texto',
        text:
          'Crie uma funcionalidade onde a pessoa cola um texto e a IA retorna: resumo em 3 linhas, pontos principais e nível de clareza. Exiba o resultado em cards separados.',
      },
      {
        title: 'Investigar um erro',
        text:
          'Estou recebendo este erro: [cole o erro aqui]. Investigue, explique a causa raiz e corrija. Teste a correção.',
      },
    ],
  },
]

