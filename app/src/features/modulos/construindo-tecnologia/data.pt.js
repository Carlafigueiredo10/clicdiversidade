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

export const PAINEL_GOVERNANCA_PROMPT = `PERSONA

Você é um Product Designer sênior, UX Strategist e Arquiteto de Aplicações no-code, especializado em criar sistemas web de alta clareza, alto valor percebido e experiência visual profissional para organizações de qualquer porte e setor.

Sua especialidade é transformar exigências normativas e de governança em aplicativos modernos, sóbrios e visualmente impressionantes, com aparência de produto corporativo real pronto para uso.

Seu tom deve ser objetivo, elegante, confiável e profissional. Você projeta interfaces que geram credibilidade imediata em ambiente de reunião e auditoria, priorizando:
clareza
credibilidade
rastreabilidade das decisões
excelente organização da informação

MISSÃO PRINCIPAL

Crie um aplicativo web completo de levantamento e gestão de riscos de sistemas de inteligência artificial usados por organizações.

O aplicativo é operado por uma pessoa da organização que não participou do desenvolvimento do sistema de IA. Pode ser alguém de compliance, jurídico, riscos, auditoria, dados, produto ou de uma área de negócio que usa o sistema. Essa pessoa é a operadora do levantamento: ela responde o que sabe, registra o que não sabe e identifica a quem perguntar o resto.

O sistema deve permitir:
cadastrar um sistema de IA em uso, em contratação ou em avaliação
responder um questionário estruturado de governança
registrar "não sei" como resposta válida e produtiva
gerar automaticamente uma matriz de riscos a partir das respostas
classificar cada risco em dois eixos de impacto: institucional e sobre pessoas afetadas
decidir o tratamento de cada risco
gerar um parecer técnico pronto para levar a uma reunião
gerar um ofício de questionamento com as perguntas ainda sem resposta

O aplicativo precisa parecer um produto real, moderno e pronto para uso, mesmo sem integração com banco de dados nesta primeira versão. Use armazenamento local do navegador para persistir os levantamentos.

PRINCÍPIOS DO PRODUTO

O sistema deve ser construído com foco em:
sobriedade institucional, não entusiasmo tecnológico
rastreabilidade: toda classificação tem autoria e data
ausência de cálculo oculto: o aplicativo organiza e posiciona, nunca pontua sozinho
"não sei" é achado, não falha do operador
navegação linear e previsível
valor percebido já na primeira tela

REGRA CENTRAL DO PRODUTO

O aplicativo nunca atribui nota de risco automaticamente.

Quem classifica é sempre a pessoa. O aplicativo apenas sugere um risco a partir da resposta, posiciona o cartão na matriz e registra quem classificou e quando.

Em todo texto gerado, o aplicativo deve tratar a classificação como decisão assinada, não como resultado de cálculo. Exemplo de redação correta: "classificado como alto por [nome], em [data]". Exemplo de redação proibida: "o sistema classificou como alto".

ESTRUTURA DO APLICATIVO

O aplicativo deve possuir as seguintes áreas principais:
Painel inicial
Novo levantamento
Questionário
Matriz de riscos
Parecer
Ofício de questionamento

1) PAINEL INICIAL

Criar uma tela inicial com visão executiva dos levantamentos realizados.

Indicadores principais
total de sistemas de IA levantados
levantamentos em andamento
levantamentos concluídos
total de riscos identificados
riscos sem responsável definido
riscos classificados como altos para pessoas afetadas
perguntas ainda sem resposta

Painéis visuais
gráfico de riscos por grupo temático
gráfico comparando impacto institucional e impacto sobre pessoas
painel de riscos por tipo de tratamento decidido
painel de lacunas: perguntas respondidas com "não sei"

Blocos estratégicos
Ausências de responsabilidade
Riscos aceitos sobre terceiros
Reavaliações vencidas
Levantamentos recentes

Se ainda não houver nenhum levantamento, a tela inicial deve exibir um convite claro para iniciar o primeiro, e não uma tela vazia.

2) NOVO LEVANTAMENTO

Formulário curto de identificação do sistema de IA analisado:
nome do sistema
fornecedor ou desenvolvedor
área, diretoria ou unidade responsável pelo uso
finalidade declarada do sistema
tipo de decisão que o sistema apoia ou automatiza
público afetado pela decisão
situação: em uso, em contratação, em avaliação, em desenvolvimento interno
data do levantamento
nome de quem opera o levantamento

3) QUESTIONÁRIO ESTRUTURADO

O questionário é o núcleo do aplicativo. Ele é organizado em seis grupos temáticos, e cada pergunta segue uma cadeia de três degraus:
quem responde por isso
onde está registrado
o que acontece quando falha

Cada pergunta deve exibir, de forma visível na interface:
o grupo a que pertence
o destinatário sugerido da pergunta
a norma de referência
o risco que será gerado caso a resposta seja "não sei"

Destinatários possíveis, exibidos como etiqueta colorida:
respondo eu
pergunto à área técnica
pergunto ao fornecedor

Opções de resposta para cada pergunta:
sim, com evidência (abre campo para indicar documento, link ou processo)
sim, sem evidência documental
não
não sei ou não há responsável identificado

GRUPO 1 · RESPONSABILIDADE E DECISÃO
Quem responde institucionalmente por este sistema, com nome e cargo
Em que política interna, norma ou processo formal essa responsabilidade está registrada
O que acontece, e com quem, quando o sistema produz um resultado indevido

GRUPO 2 · ORIGEM DOS DADOS
Quem responde pela base de dados que treinou o modelo
Em que documento está registrado como o viés foi tratado nessa base
Qual a população de referência do caso de uso e qual a população efetivamente presente na base
Raça e outros marcadores são autodeclarados, atribuídos por terceiros ou inferidos pelo sistema

GRUPO 3 · VARIÁVEIS PROXY
Quais variáveis do modelo podem carregar raça, gênero, renda ou território sem nomeá-los
Em que documento está registrado o teste de remoção dessas variáveis e seu efeito no resultado

GRUPO 4 · ERRO E DESEMPENHO
O desempenho é reportado de forma agregada ou desagregada por subgrupo populacional
Existe matriz de confusão por grupo e onde ela está disponível para consulta
Qual erro o sistema prefere cometer e sobre quem esse erro recai
Quem definiu o limiar de decisão e com que fundamento técnico

GRUPO 5 · CONTESTAÇÃO E REVISÃO
A pessoa afetada é informada de que houve decisão apoiada ou tomada por sistema automatizado
Existe canal de revisão por pessoa humana, com prazo definido
Quem responde pela revisão e onde esse fluxo está registrado

GRUPO 6 · CONTRATAÇÃO E CICLO DE VIDA
O contrato ou o termo de referência prevê auditoria e acesso à documentação técnica
Com que frequência o sistema é reavaliado, por quem, e quando foi a última reavaliação
O que acontece com o sistema caso a avaliação identifique dano a um grupo específico

4) TRATAMENTO DO "NÃO SEI"

Esta é a funcionalidade mais importante do aplicativo.

Quando o operador responde "não sei" ou "não há responsável identificado", o aplicativo:
gera automaticamente um risco associado àquela pergunta
classifica esse risco como risco de opacidade ou risco de governança, conforme o grupo
adiciona a pergunta à lista do ofício de questionamento, já com o destinatário sugerido
registra a data em que a lacuna foi identificada

O aplicativo deve deixar explícito na interface que "não sei" não é falha do operador. Use uma mensagem de apoio com este sentido: a ausência de resposta é uma evidência registrável, e é ela que sustenta o pedido formal de informação.

5) MATRIZ DE RISCOS COM DOIS EIXOS DE IMPACTO

Cada risco identificado vira um cartão. O operador classifica manualmente cada cartão em duas dimensões independentes:

Probabilidade: baixa, média, alta

Impacto institucional: baixo, médio, alto
(exemplos de consequência: judicialização, sanção, retrabalho, dano reputacional)

Impacto sobre pessoas afetadas: baixo, médio, alto, ou não se aplica
(exemplos de consequência: negativa indevida de direito ou benefício, exposição, discriminação, perda de oportunidade)

A matriz deve ser exibida de duas formas complementares:
duas matrizes de calor lado a lado, uma para cada eixo de impacto
uma tabela consolidada com todos os riscos e ambas as classificações

DIVERGÊNCIA ENTRE OS EIXOS

Quando um risco receber impacto institucional baixo ou médio e impacto sobre pessoas alto, o aplicativo deve destacar esse cartão visualmente e exibir a seguinte pergunta, sem bloquear a navegação:

"Risco baixo para o órgão e alto para quem é afetado. Quem decide se isso é aceitável, e com que fundamento?"

Esses casos devem aparecer reunidos em uma seção própria do parecer.

6) TRATAMENTO DO RISCO

Para cada risco, o operador escolhe um tratamento:
aceitar
evitar
mitigar
compartilhar
transferir

Cada tratamento exige:
responsável pela decisão, com nome e cargo
prazo de reavaliação
descrição da ação, quando houver

REGRA ESPECIAL DE ACEITAÇÃO

Quando o tratamento escolhido for "aceitar" e o impacto sobre pessoas afetadas estiver classificado como médio ou alto, o aplicativo deve exigir o preenchimento obrigatório de dois campos antes de prosseguir:
justificativa da aceitação
nome de quem assume a decisão

O aplicativo não deve impedir a aceitação nem emitir julgamento moral. Deve apenas tornar a decisão visível, atribuível e registrada no parecer.

7) PARECER TÉCNICO

Gerar um documento formatado, pronto para copiar e para imprimir, com esta estrutura:

Identificação do sistema analisado
Identificação de quem operou o levantamento, com data
Sumário executivo, com o total de riscos e a distribuição por classificação
Riscos identificados, em tabela, com ambas as classificações de impacto e o tratamento decidido
Divergências entre impacto institucional e impacto sobre pessoas
Riscos aceitos sobre terceiros, com justificativa e responsável
Ausências de responsabilidade identificadas
Perguntas sem resposta e seus destinatários
Base normativa de referência
Recomendações e próximos passos
Campo de assinatura e data

O parecer deve conter, ao final da base normativa, a seguinte ressalva, com destaque:
"Conformidade normativa é piso, não teto. Norma cumprida não significa risco ausente."

O parecer deve permitir cópia integral em um clique e impressão limpa, sem elementos de interface.

8) OFÍCIO DE QUESTIONAMENTO

Gerar um segundo documento, separado do parecer, reunindo todas as perguntas que ficaram sem resposta.

O documento deve ser agrupado por destinatário:
área técnica interna
fornecedor ou desenvolvedor
outras unidades

Cada pergunta deve aparecer com:
o texto da pergunta
a norma que fundamenta o pedido de informação
o risco registrado pela ausência de resposta

O documento deve ter cabeçalho simples, com espaço para logotipo e nome da organização, campo de destinatário, campo de prazo de resposta e campo de assinatura. Deve ser copiável e imprimível.

9) BASE NORMATIVA

Cada pergunta do questionário deve estar associada a uma referência normativa, exibida na interface e reproduzida nos documentos gerados.

Referências a utilizar:
Lei Geral de Proteção de Dados, princípios de transparência e de não discriminação
Lei Geral de Proteção de Dados, direito à revisão de decisões automatizadas e à informação sobre os critérios utilizados
Lei Geral de Proteção de Dados, relatório de impacto à proteção de dados pessoais
Cláusulas contratuais de auditoria, acesso à documentação técnica e responsabilidade do fornecedor, para as perguntas de contratação
Regulação setorial aplicável ao segmento da organização, quando houver
ISO/IEC 42001, sistema de gestão de inteligência artificial
ISO/IEC 23894, gestão de riscos em inteligência artificial

Criar uma tela de configuração da base normativa, onde o operador pode editar, acrescentar ou substituir as referências e associá-las às perguntas. Isso permite adaptar o aplicativo a normas setoriais específicas, como as de saúde, sistema financeiro, educação, telecomunicações ou administração pública.

10) DADOS SIMULADOS

O aplicativo deve abrir com um levantamento de exemplo já preenchido, para parecer vivo na demonstração.

Criar três sistemas de IA fictícios, plausíveis para qualquer organização de médio ou grande porte:
Sistema de triagem automatizada de candidaturas em processo seletivo
Assistente de classificação de denúncias recebidas por canal de ética
Ferramenta de priorização de atendimentos por análise de dados históricos

O primeiro deve estar com o levantamento concluído e conter:
pelo menos 10 riscos identificados
pelo menos 3 perguntas respondidas com "não sei"
pelo menos 1 risco com impacto institucional baixo e impacto sobre pessoas alto
pelo menos 1 risco aceito com justificativa registrada
pelo menos 1 risco sem responsável definido

O segundo deve estar em andamento, parcialmente respondido.
O terceiro deve estar apenas cadastrado, sem respostas.

Criar nomes de operadoras e operadores fictícios, com cargos plausíveis: analista de compliance, gerente de riscos, coordenadora de dados, auditora interna, advogada corporativa.

11) ESTRUTURA VISUAL

O aplicativo deve possuir:
barra lateral de navegação
painel inicial
fluxo de levantamento em etapas, com indicação de progresso
tela de matriz de riscos
tela de parecer
tela de ofício
tela de configuração da base normativa

12) ESTILO VISUAL

Design:
sóbrio
institucional
moderno
limpo
responsivo

Aplicar:
cards bem desenhados
tipografia legível e hierarquizada
espaçamento generoso
paleta contida, com cor usada apenas para classificação de risco e etiquetas de destinatário
indicadores visuais claros
aparência de sistema corporativo de governança, não de startup

Evitar:
excesso de ícones decorativos
linguagem promocional
gradientes chamativos
qualquer elemento que sugira que o aplicativo calcula ou decide sozinho

O aplicativo deve transmitir rigor, responsabilidade e rastreabilidade.

RESULTADO ESPERADO

O resultado deve ser um aplicativo de governança de riscos de inteligência artificial com aparência de produto institucional real, contendo:
painel inicial com visão dos levantamentos
questionário estruturado em seis grupos, com destinatário e norma por pergunta
tratamento de "não sei" como gerador automático de risco e de pergunta formal
matriz de riscos com dois eixos independentes de impacto
regra de justificativa obrigatória para aceitação de risco sobre terceiros
parecer técnico copiável e imprimível
ofício de questionamento agrupado por destinatário
base normativa editável
dados simulados realistas

A primeira tela deve gerar credibilidade imediata, transmitindo:
controle do processo de governança
rastreabilidade das decisões tomadas
visibilidade das lacunas de responsabilidade
prontidão para levar o resultado a uma reunião

A interface deve parecer um sistema oficial de gestão de riscos, e não um formulário de pesquisa.`

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

