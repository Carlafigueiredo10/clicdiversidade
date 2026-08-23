// Gerado a partir de servidoras-no-comando/glossario.html (Drive)
// Linguagem adaptada para inclusiva.

export const CATEGORIAS = {
  ia: { label: 'Inteligência Artificial', icon: '🤖' },
  dados: { label: 'Dados', icon: '📊' },
  dev: { label: 'Desenvolvimento', icon: '💻' },
  seg: { label: 'Segurança', icon: '🔒' },
  infra: { label: 'Infraestrutura', icon: '⚙️' },
  neg: { label: 'Gestão & Projetos', icon: '📋' },
}

export const TERMOS = [
  {
    "letter": "A",
    "name": "Acurácia",
    "cat": "dados",
    "mini": "Percentual de acertos de um sistema — e o que ele esconde",
    "def": "Proporção de decisões corretas que um sistema automatizado toma. Sozinha, é a métrica mais fácil de exibir e a mais fácil de se esconder atrás: um sistema com 95% de acerto pode estar errando sistematicamente sobre um mesmo grupo de pessoas. Peça sempre a acurácia <strong>desagregada por grupo</strong>.",
    "pronunc": "A-cu-RÁ-ci-a",
    "example": "O fornecedor apresentou 97% de acurácia geral, mas não soube informar a acurácia para pessoas negras."
  },
  {
    "letter": "A",
    "name": "Agente",
    "cat": "ia",
    "mini": "Uma IA de conversa especializada por você, sem código",
    "def": "Assistente montado a partir de uma IA de conversa: você escreve as instruções, conecta as fontes que ele pode consultar e ele passa a responder dentro desse escopo. Cada plataforma usa um nome — <strong>Gem</strong> no Gemini, <strong>GPT</strong> no ChatGPT, <strong>agente</strong> no Copilot — mas as peças são as mesmas: instruções, fontes de conhecimento, funcionalidades e prompts sugeridos.",
    "pronunc": "A-GEN-te",
    "example": "Criei um agente com o modelo de nota técnica do setor: agora ele já devolve o rascunho no formato certo."
  },
  {
    "letter": "A",
    "name": "Agile / Ágil",
    "cat": "neg",
    "mini": "Método de trabalho em ciclos curtos",
    "def": "Forma de organizar projetos em ciclos curtos chamados <strong>sprints</strong>, com entregas parciais frequentes em vez de esperar o produto completo.",
    "pronunc": "Ágil (port.) / \"éi-djail\" (ing.)",
    "example": "A equipe de TI adotou o método ágil e passou a entregar novas funcionalidades a cada duas semanas."
  },
  {
    "letter": "A",
    "name": "Algoritmo",
    "cat": "dev",
    "mini": "Sequência de passos para resolver um problema",
    "def": "Conjunto de instruções ordenadas que um computador segue para resolver um problema. Todo programa é, na essência, um algoritmo.",
    "pronunc": "Al-go-RÍT-mo",
    "example": "O algoritmo do feed de notícias decide quais publicações aparecem primeiro para cada pessoa usuária."
  },
  {
    "letter": "A",
    "name": "Alucinação",
    "cat": "ia",
    "mini": "Quando a IA inventa informação com aparência de verdade",
    "def": "Resposta que a IA produz com fluência e confiança, mas que não corresponde a nenhum fato, norma ou fonte real. Não é defeito pontual: o modelo é construído para completar texto de forma <strong>plausível</strong>, e o plausível às vezes é falso. Por isso toda lei, número ou decisão citada precisa ser conferida na fonte antes de entrar num documento.",
    "pronunc": "A-lu-ci-na-ÇÃO",
    "example": "O parecer citava um artigo que não existe — alucinação clássica, e só apareceu porque alguém foi conferir."
  },
  {
    "letter": "A",
    "name": "API",
    "cat": "dev",
    "mini": "Como sistemas diferentes conversam entre si",
    "def": "<strong>Application Programming Interface</strong>. Uma \"tomada padronizada\" que permite a sistemas diferentes trocar dados. Você não precisa saber como o outro sistema funciona por dentro — só usar a API dele.",
    "pronunc": "\"a-pê-í\" (sigla) ou \"éi-pii-ái\" (ing.)",
    "example": "O aplicativo de ponto eletrônico usa uma API do gov.br para verificar o CPF da pessoa servidora."
  },
  {
    "letter": "A",
    "name": "Automação",
    "cat": "dev",
    "mini": "Fazer a máquina repetir o que você faria",
    "def": "Uso de tecnologia para executar tarefas repetitivas sem intervenção humana. Pode ser simples (um script que renomeia arquivos) ou complexa (um robô que preenche formulários).",
    "pronunc": "Au-to-ma-ÇÃO",
    "example": "A automação do envio de relatórios mensais liberou três horas da minha semana."
  },
  {
    "letter": "B",
    "name": "Backend",
    "cat": "dev",
    "mini": "A parte invisível que faz o sistema funcionar",
    "def": "Toda a lógica que roda nos servidores: salvar dados, autenticar pessoas usuárias, processar regras de negócio. A pessoa usuária nunca vê, mas depende disso o tempo todo.",
    "pronunc": "\"bék-énd\"",
    "example": "Quando você envia um formulário, é o backend que valida os dados e os salva no banco."
  },
  {
    "letter": "B",
    "name": "Banco de Dados",
    "cat": "dados",
    "mini": "Onde o sistema guarda as informações",
    "def": "Sistema organizado para armazenar, buscar e atualizar dados. Funciona como uma planilha inteligente que o programa acessa em milissegundos.",
    "pronunc": "Ban-co de Da-dos",
    "example": "O banco de dados do sistema de ponto guarda o registro de cada entrada e saída de servidoras e servidores."
  },
  {
    "letter": "B",
    "name": "Big Data",
    "cat": "dados",
    "mini": "Volumes gigantes de dados demais para Excel",
    "def": "Conjunto de dados tão grande ou complexo que ferramentas convencionais não conseguem processar. Exige tecnologias específicas para armazenar, processar e analisar.",
    "pronunc": "\"big déi-ta\"",
    "example": "O Ministério analisa big data de saúde pública para identificar surtos antes que se alastrem."
  },
  {
    "letter": "B",
    "name": "Bug",
    "cat": "dev",
    "mini": "Erro no código que causa comportamento inesperado",
    "def": "Falha num programa que faz ele agir diferente do esperado. Pode ser um erro de lógica, um dado inesperado ou uma incompatibilidade entre sistemas.",
    "pronunc": "\"bâg\"",
    "example": "Tinha um bug no sistema que fazia o relatório mostrar datas no formato americano."
  },
  {
    "letter": "C",
    "name": "Cache",
    "cat": "infra",
    "mini": "Guardar o que já foi buscado para não buscar de novo",
    "def": "Mecanismo que guarda temporariamente resultados de operações custosas para servir mais rápido na próxima vez. Por isso às vezes o site \"congela\" numa versão antiga.",
    "pronunc": "\"cásh\"",
    "example": "O site lento melhorou depois que o time ativou o cache nas páginas mais acessadas."
  },
  {
    "letter": "C",
    "name": "ChatBot",
    "cat": "ia",
    "mini": "Sistema que simula uma conversa",
    "def": "Programa que conversa com pessoas usuárias via texto ou voz. Pode seguir roteiros fixos (chatbot de regras) ou usar IA para entender perguntas livres.",
    "pronunc": "\"shát-bot\"",
    "example": "O chatbot da ouvidoria responde perguntas frequentes às 3h da manhã, sem precisar de uma pessoa servidora disponível."
  },
  {
    "letter": "C",
    "name": "Cloud / Nuvem",
    "cat": "infra",
    "mini": "Computadores de outra empresa que você aluga pela internet",
    "def": "Infraestrutura de servidores remotos acessados pela internet. Em vez de ter servidores físicos no prédio, o órgão aluga capacidade de provedores como AWS, Azure ou Google Cloud.",
    "pronunc": "\"claud\" / Nu-vem",
    "example": "Migramos o sistema de folha de pagamento para a nuvem e paramos de perder dados em quedas de energia."
  },
  {
    "letter": "C",
    "name": "Código Aberto",
    "cat": "dev",
    "mini": "Software com o código disponível para qualquer pessoa ver e usar",
    "def": "Programa cujo código-fonte é publicado sob licença que permite usar, estudar, modificar e redistribuir. Para o setor público significa três coisas práticas: dá para <strong>auditar</strong> o que o sistema faz, dá para adaptar sem pedir autorização, e não se fica preso a um único fornecedor.",
    "pronunc": "CÓ-di-go a-BER-to",
    "example": "Escolhemos uma ferramenta de código aberto para poder auditar como as respostas são geradas."
  },
  {
    "letter": "C",
    "name": "Código-fonte",
    "cat": "dev",
    "mini": "O texto que o programador escreve para criar o programa",
    "def": "Conjunto de instruções escritas numa linguagem de programação (Python, JavaScript etc.) que, quando executadas, formam um software.",
    "pronunc": "\"có-di-go fon-te\"",
    "example": "A equipe publicou o código-fonte do sistema em repositório aberto para que outros órgãos possam reusá-lo."
  },
  {
    "letter": "C",
    "name": "Copilot",
    "cat": "ia",
    "mini": "IA da Microsoft integrada ao pacote Office",
    "def": "Assistente de IA da Microsoft disponível no Word, Excel, Outlook e Teams. Ajuda a redigir, resumir documentos, gerar fórmulas e criar apresentações por instrução em linguagem natural.",
    "pronunc": "\"có-pai-lot\"",
    "example": "Usei o Copilot no Outlook para resumir 40 e-mails acumulados durante o recesso."
  },
  {
    "letter": "C",
    "name": "Criptografia",
    "cat": "seg",
    "mini": "Transformar dados para que só quem tem a chave entenda",
    "def": "Técnica que embaralha informações usando algoritmos matemáticos. Sem a chave correta, os dados são ilegíveis. Base de toda comunicação segura na internet.",
    "pronunc": "Crip-to-GRA-fia",
    "example": "Os dados pessoais de servidoras e servidores são armazenados com criptografia para cumprir a LGPD."
  },
  {
    "letter": "C",
    "name": "CSV",
    "cat": "dados",
    "mini": "Formato simples de planilha em texto puro",
    "def": "<strong>Comma-Separated Values</strong>. Arquivo de texto onde cada linha é um registro e as colunas são separadas por vírgulas (ou ponto-e-vírgula). Qualquer sistema lê e exporta CSV.",
    "pronunc": "\"cê-es-vê\"",
    "example": "Exportei a lista de pessoas beneficiárias em CSV para cruzar com outra base em Python."
  },
  {
    "letter": "D",
    "name": "Dashboard",
    "cat": "dados",
    "mini": "Painel visual com indicadores em tempo real",
    "def": "Tela que concentra gráficos e métricas-chave de um sistema ou processo. Facilita a tomada de decisão ao mostrar o estado atual de algo de forma visual.",
    "pronunc": "\"dásh-bord\"",
    "example": "O dashboard de gestão de contratos mostra quantos vencem nos próximos 30 dias."
  },
  {
    "letter": "D",
    "name": "Dados Abertos",
    "cat": "dados",
    "mini": "Informações públicas disponíveis para qualquer pessoa usar",
    "def": "Dados publicados pelo governo ou organizações em formatos legíveis por máquina, sem restrição de uso. Base da transparência e do reuso de informação pública.",
    "pronunc": "Da-dos A-ber-tos",
    "example": "O Portal de Dados Abertos do governo federal tem bases que qualquer cidadão pode baixar e analisar."
  },
  {
    "letter": "D",
    "name": "Dados de Treinamento",
    "cat": "ia",
    "mini": "Os exemplos do passado com que a IA aprendeu",
    "def": "Conjunto de dados usado para ensinar um modelo de IA a reconhecer padrões. O sistema aprende a repetir o que está nesses dados — inclusive as desigualdades que eles registram. <strong>De quando são e qual passado reproduzem</strong> são perguntas de auditoria.",
    "pronunc": "Da-dos de Trei-na-MEN-to",
    "example": "Se os dados de treinamento vêm de dez anos de promoções do órgão, a IA aprende quem costumava ser promovido."
  },
  {
    "letter": "D",
    "name": "Deploy",
    "cat": "dev",
    "mini": "Colocar o sistema no ar para o mundo acessar",
    "def": "Processo de publicar uma versão do software no ambiente de produção — o servidor real que as pessoas usuárias acessam. Antes do deploy, só a equipe de desenvolvimento vê.",
    "pronunc": "\"di-PLÓI\"",
    "example": "Fizemos o deploy da nova versão do portal na quinta à noite para evitar impacto no horário de pico."
  },
  {
    "letter": "D",
    "name": "DevOps",
    "cat": "infra",
    "mini": "Cultura de integrar desenvolvimento e operações",
    "def": "Prática que une equipes de desenvolvimento (Dev) e operações de infraestrutura (Ops) para entregar software com mais velocidade e estabilidade, com automação e colaboração contínua.",
    "pronunc": "\"dév-ops\"",
    "example": "Com DevOps, o tempo entre escrever o código e ele chegar à produção caiu de semanas para horas."
  },
  {
    "letter": "E",
    "name": "Encriptação",
    "cat": "seg",
    "mini": "Bloquear dados com chave digital",
    "def": "Sinônimo prático de criptografar: converter dados legíveis em formato codificado. Usada em discos, arquivos e comunicações para proteger contra acesso não autorizado.",
    "pronunc": "En-crip-ta-ÇÃO",
    "example": "O notebook institucional tem encriptação de disco completo; se for roubado, os dados não são acessíveis."
  },
  {
    "letter": "E",
    "name": "Equidade",
    "cat": "ia",
    "mini": "Tratar de forma diferente para chegar a resultado justo",
    "def": "Não é sinônimo de igualdade. Igualdade é aplicar o mesmo critério a todas as pessoas; equidade é reconhecer que pontos de partida diferentes exigem tratamentos diferentes para produzir um resultado justo. Em IA, mede-se comparando o desempenho do sistema <strong>entre subgrupos</strong>, nunca na média.",
    "pronunc": "E-qui-DA-de",
    "example": "O critério era igual para todo mundo, mas o resultado não foi equitativo: exigia deslocamento até Brasília."
  },
  {
    "letter": "F",
    "name": "Falso Positivo / Falso Negativo",
    "cat": "dados",
    "mini": "Os dois jeitos de um sistema errar",
    "def": "<strong>Falso positivo</strong>: o sistema aponta algo que não é o caso — acusa fraude onde não há. <strong>Falso negativo</strong>: o sistema deixa passar o que deveria apontar — nega um benefício a quem tem direito. Todo sistema escolhe qual dos dois erros prefere cometer, e essa escolha recai sobre pessoas diferentes.",
    "pronunc": "Fal-so Po-si-TI-vo / Ne-ga-TI-vo",
    "example": "No corte automático de benefício, o falso positivo tira a renda de quem precisa; o falso negativo custa dinheiro ao Estado."
  },
  {
    "letter": "F",
    "name": "Firewall",
    "cat": "seg",
    "mini": "Barreira que filtra o que entra e sai da rede",
    "def": "Sistema (hardware ou software) que monitora e controla o tráfego de rede. Bloqueia acessos não autorizados e filtra ameaças antes que atinjam os sistemas internos.",
    "pronunc": "\"fáir-uôl\"",
    "example": "O firewall do órgão bloqueou o acesso ao servidor na tentativa de ataque detectada pelo CTIR."
  },
  {
    "letter": "F",
    "name": "Framework",
    "cat": "dev",
    "mini": "Estrutura pronta para construir software mais rápido",
    "def": "Conjunto de ferramentas, bibliotecas e convenções que aceleram o desenvolvimento. Em vez de construir tudo do zero, a equipe usa o framework como base.",
    "pronunc": "\"fréim-uôrk\"",
    "example": "O time escolheu o framework React para construir o portal porque ele tem vasta documentação em português."
  },
  {
    "letter": "F",
    "name": "Frontend",
    "cat": "dev",
    "mini": "Tudo que aparece na tela e a pessoa usuária interage",
    "def": "A parte visual e interativa de um sistema: botões, menus, formulários, gráficos. Roda no navegador da pessoa usuária e se comunica com o backend.",
    "pronunc": "\"frónt-énd\"",
    "example": "A equipe de frontend reformulou o portal para funcionar melhor em celular."
  },
  {
    "letter": "G",
    "name": "Git",
    "cat": "dev",
    "mini": "Sistema que guarda o histórico de cada alteração no código",
    "def": "Ferramenta de controle de versão que registra toda mudança feita no código. Permite voltar a versões anteriores, trabalhar em paralelo e identificar quem alterou o quê.",
    "pronunc": "\"git\"",
    "example": "Quando o novo código quebrou o sistema, usamos o Git para voltar à versão estável de ontem."
  },
  {
    "letter": "G",
    "name": "GPT",
    "cat": "ia",
    "mini": "Família de modelos de linguagem da OpenAI",
    "def": "<strong>Generative Pre-trained Transformer</strong>. Tipo de modelo de IA treinado em grandes volumes de texto para gerar linguagem natural. Base do ChatGPT e de outros produtos.",
    "pronunc": "\"gê-pê-tê\"",
    "example": "O ChatGPT é baseado no modelo GPT-4, treinado com textos da internet até 2023."
  },
  {
    "letter": "H",
    "name": "Hardware",
    "cat": "infra",
    "mini": "A parte física do computador",
    "def": "Componentes físicos de um sistema computacional: processador, memória, disco, teclado, monitor. Contrasta com software (programas e dados).",
    "pronunc": "\"rárduôr\"",
    "example": "O servidor caiu porque o hardware antigo superaqueceu durante o pico de acessos."
  },
  {
    "letter": "H",
    "name": "Hash",
    "cat": "seg",
    "mini": "Impressão digital de um arquivo ou senha",
    "def": "Resultado de uma função matemática que transforma qualquer dado em uma sequência fixa de caracteres. A mesma entrada sempre gera o mesmo hash; qualquer mudança gera um hash completamente diferente.",
    "pronunc": "\"rásh\"",
    "example": "O sistema guarda o hash da senha, nunca a senha em si — assim, mesmo quem acessa o banco não vê a senha real."
  },
  {
    "letter": "H",
    "name": "HTTP / HTTPS",
    "cat": "infra",
    "mini": "Protocolo pelo qual páginas web são transferidas",
    "def": "<strong>HyperText Transfer Protocol</strong>. Regras de comunicação entre navegador e servidor web. O S do HTTPS indica que a conexão é criptografada (segura).",
    "pronunc": "\"a-gá-tê-tê-pê\" / \"a-gá-tê-tê-pê-ésse\"",
    "example": "Sites que ainda usam HTTP (sem o S) podem expor dados das pessoas usuárias a interceptações."
  },
  {
    "letter": "I",
    "name": "IA (Inteligência Artificial)",
    "cat": "ia",
    "mini": "Sistemas que simulam capacidades cognitivas humanas",
    "def": "Campo da computação que cria sistemas capazes de aprender, raciocinar e executar tarefas que antes exigiam inteligência humana. Inclui reconhecimento de imagem, linguagem natural e tomada de decisão.",
    "pronunc": "\"í-a\" ou \"in-te-li-GÊN-cia ar-ti-fi-CI-al\"",
    "example": "A IA do sistema de triagem de processos reduziu em 60% o tempo de classificação inicial."
  },
  {
    "letter": "I",
    "name": "IA Generativa",
    "cat": "ia",
    "mini": "IA que cria conteúdo novo a partir de uma instrução",
    "def": "Categoria de IA capaz de gerar texto, imagem, código ou áudio a partir de um prompt. Exemplos: ChatGPT, Gemini, Claude, Midjourney.",
    "pronunc": "\"í-a je-ne-ra-TÍ-va\"",
    "example": "Com IA generativa, a servidora escreveu um primeiro rascunho de nota técnica em 5 minutos."
  },
  {
    "letter": "I",
    "name": "Infraestrutura",
    "cat": "infra",
    "mini": "A base tecnológica que sustenta os sistemas",
    "def": "Conjunto de servidores, redes, armazenamento e serviços de nuvem que mantêm os sistemas rodando. Quem cuida é a equipe de infraestrutura ou TI.",
    "pronunc": "In-fra-es-tru-TU-ra",
    "example": "A migração da infraestrutura para a nuvem reduziu em 30% o custo operacional de TI do órgão."
  },
  {
    "letter": "I",
    "name": "Interface",
    "cat": "dev",
    "mini": "Ponto de contato entre a pessoa usuária e o sistema",
    "def": "A camada por onde humanos interagem com um sistema. Pode ser visual (UI gráfica), por voz, linha de comando ou outra forma. Boa interface é aquela que não exige manual.",
    "pronunc": "In-ter-FA-ce",
    "example": "A nova interface do portal foi testada com servidoras de diferentes níveis de familiaridade digital."
  },
  {
    "letter": "I",
    "name": "IoT (Internet das Coisas)",
    "cat": "infra",
    "mini": "Objetos físicos conectados à internet",
    "def": "Rede de dispositivos físicos (sensores, câmeras, eletrodomésticos, veículos) que coletam e trocam dados pela internet. Cada objeto vira uma fonte de dados.",
    "pronunc": "\"i-ó-tê\" ou \"internet das coisas\"",
    "example": "Os sensores de presença nos prédios públicos são IoT: registram ocupação em tempo real para gestão de energia."
  },
  {
    "letter": "J",
    "name": "JSON",
    "cat": "dev",
    "mini": "Formato leve para trocar dados entre sistemas",
    "def": "<strong>JavaScript Object Notation</strong>. Formato de texto simples e legível por humanos para estruturar dados. Usado em APIs e arquivos de configuração.",
    "pronunc": "\"djéi-son\"",
    "example": "A API retorna os dados da pessoa servidora em JSON: nome, cargo, órgão, matrícula."
  },
  {
    "letter": "L",
    "name": "LGPD",
    "cat": "seg",
    "mini": "Lei que protege dados pessoais no Brasil",
    "def": "<strong>Lei Geral de Proteção de Dados</strong> (Lei nº 13.709/2018). Regula como dados pessoais devem ser coletados, armazenados e usados. Toda organização pública ou privada que trata dados pessoais deve segui-la.",
    "pronunc": "\"el-gê-pê-dê\"",
    "example": "O sistema não pode compartilhar dados de servidoras com outros órgãos sem base legal prevista na LGPD."
  },
  {
    "letter": "L",
    "name": "LLM",
    "cat": "ia",
    "mini": "Modelo de IA treinado para entender e gerar linguagem",
    "def": "<strong>Large Language Model</strong>. Tipo de IA treinado em enormes volumes de texto para compreender e produzir linguagem natural. Base do ChatGPT, Gemini, Claude e outros.",
    "pronunc": "\"el-el-em\"",
    "example": "Os LLMs aprenderam padrões de linguagem lendo bilhões de páginas da web, livros e artigos."
  },
  {
    "letter": "L",
    "name": "Log",
    "cat": "infra",
    "mini": "Registro automático do que aconteceu no sistema",
    "def": "Arquivo que registra eventos, erros e ações dentro de um sistema. Fundamental para diagnosticar problemas e rastrear acessos.",
    "pronunc": "\"lóg\"",
    "example": "Consultamos os logs do servidor e descobrimos que o erro começou depois da atualização das 2h."
  },
  {
    "letter": "M",
    "name": "Machine Learning",
    "cat": "ia",
    "mini": "IA que aprende com dados sem ser programada regra a regra",
    "def": "Subcampo da IA onde o sistema aprende padrões a partir de exemplos (dados), sem que cada regra seja programada manualmente. O aprendizado vale o que valem os dados: o sistema repete os padrões que encontrar neles, <strong>inclusive as desigualdades que eles registram</strong>.",
    "pronunc": "\"me-CHÍN ler-ning\"",
    "example": "O sistema de detecção de fraudes usa machine learning para aprender com casos passados."
  },
  {
    "letter": "M",
    "name": "Matriz de Confusão",
    "cat": "dados",
    "mini": "Tabela que mostra onde e como o sistema erra",
    "def": "Tabela que cruza o que o sistema previu com o que de fato aconteceu, separando acertos, falsos positivos e falsos negativos. Pedida <strong>por grupo</strong>, revela desigualdades que a acurácia geral esconde.",
    "pronunc": "Ma-triz de Con-fu-SÃO",
    "example": "Peça a matriz de confusão por grupo, não a acurácia geral: é nela que o viés aparece."
  },
  {
    "letter": "M",
    "name": "Metadados",
    "cat": "dados",
    "mini": "Dados que descrevem outros dados",
    "def": "Informações sobre um arquivo ou registro: quem criou, quando, onde, tamanho, formato. O conteúdo do documento é o dado; as informações sobre ele são os metadados.",
    "pronunc": "Me-ta-DA-dos",
    "example": "Mesmo sem ler o e-mail, os metadados revelam com quem você se comunicou e com que frequência."
  },
  {
    "letter": "M",
    "name": "Microsserviços",
    "cat": "dev",
    "mini": "Dividir um sistema grande em partes independentes",
    "def": "Arquitetura onde um sistema é composto por pequenos serviços autônomos que se comunicam via API. Cada serviço pode ser desenvolvido, implantado e escalado de forma independente.",
    "pronunc": "Mi-cros-ser-VI-ços",
    "example": "O portal do governo foi reestruturado em microsserviços para que a queda de um módulo não derrube todo o site."
  },
  {
    "letter": "M",
    "name": "Model Card",
    "cat": "ia",
    "mini": "A bula do modelo de IA",
    "def": "Documento que descreve um modelo de IA: para que serve, com quais dados e quais grupos foi treinado, onde costuma falhar e quais usos são desaconselhados. É o equivalente à bula de um medicamento. <strong>A ausência de model card já é informação</strong> sobre o fornecedor.",
    "pronunc": "\"mó-del cárd\"",
    "example": "Antes de assinar o contrato, a equipe pediu o model card e descobriu que o sistema nunca foi testado com dados brasileiros."
  },
  {
    "letter": "N",
    "name": "No-Code",
    "cat": "dev",
    "mini": "Construir sistemas sem escrever código",
    "def": "Plataformas que permitem criar aplicativos, automações e sites por meio de interfaces visuais, sem programação. Exemplos: Lovable, Glide, Notion, Power Automate.",
    "pronunc": "\"nô-cód\"",
    "example": "A servidora criou um formulário de pesquisa de satisfação sem precisar acionar a equipe de TI, usando no-code."
  },
  {
    "letter": "P",
    "name": "Phishing",
    "cat": "seg",
    "mini": "Golpe por e-mail ou mensagem que imita fonte confiável",
    "def": "Ataque onde o criminoso se passa por instituição legítima para roubar dados (senhas, CPF, cartão). Pode chegar por e-mail, SMS, WhatsApp ou sites falsos.",
    "pronunc": "\"fí-shing\"",
    "example": "A servidora recebeu um e-mail falso imitando o RH pedindo atualização de dados bancários — era phishing."
  },
  {
    "letter": "P",
    "name": "Pipeline",
    "cat": "dados",
    "mini": "Fluxo automático de transformação de dados ou código",
    "def": "Sequência de etapas automatizadas onde a saída de uma etapa é a entrada da próxima. Usado em processamento de dados (ETL) e entrega de software (CI/CD).",
    "pronunc": "\"páip-láin\"",
    "example": "O pipeline de dados captura as informações do sistema legado, limpa e carrega no data warehouse toda madrugada."
  },
  {
    "letter": "P",
    "name": "Prompt",
    "cat": "ia",
    "mini": "A instrução que você escreve para a IA executar",
    "def": "Texto de entrada que guia a IA. Quanto mais claro, específico e contextualizado, melhor a resposta. Escrever bons prompts é a habilidade central para usar IA generativa com eficiência.",
    "pronunc": "\"prómt\"",
    "example": "Meu prompt especificava o cargo, o objetivo do texto e o público-alvo — a resposta da IA foi muito mais útil."
  },
  {
    "letter": "P",
    "name": "Protocolo",
    "cat": "infra",
    "mini": "Conjunto de regras que define como sistemas se comunicam",
    "def": "Acordo sobre formato, sequência e regras de troca de mensagens entre sistemas. Sem protocolos, sistemas diferentes não conseguem se entender.",
    "pronunc": "Pro-to-CO-lo",
    "example": "O HTTPS é o protocolo que garante comunicação segura entre o navegador e o servidor."
  },
  {
    "letter": "R",
    "name": "Ransomware",
    "cat": "seg",
    "mini": "Vírus que sequestra seus arquivos e exige resgate",
    "def": "Tipo de malware que criptografa os dados da vítima e exige pagamento (geralmente em criptomoeda) para restaurar o acesso. Um dos ataques mais devastadores para órgãos públicos.",
    "pronunc": "\"rán-som-uôr\"",
    "example": "O órgão teve todos os sistemas paralisados por três dias após um ataque de ransomware via e-mail infectado."
  },
  {
    "letter": "R",
    "name": "Repositório",
    "cat": "dev",
    "mini": "Local centralizado onde o código-fonte é armazenado",
    "def": "Espaço (geralmente na nuvem) onde toda a equipe guarda, versiona e compartilha o código de um projeto. GitHub e GitLab são os mais usados.",
    "pronunc": "Re-po-si-TÓ-rio",
    "example": "O código do sistema de gestão foi publicado no repositório do governo federal para transparência."
  },
  {
    "letter": "R",
    "name": "Responsivo",
    "cat": "dev",
    "mini": "Site ou app que se adapta a qualquer tamanho de tela",
    "def": "Design que reorganiza automaticamente o layout dependendo do dispositivo — celular, tablet ou desktop. Padrão obrigatório desde que a maioria dos acessos vem do celular.",
    "pronunc": "Res-pon-SI-vo",
    "example": "O portal precisa ser responsivo porque 70% de servidoras e servidores acessam pelo celular."
  },
  {
    "letter": "S",
    "name": "SaaS",
    "cat": "infra",
    "mini": "Software que você usa pela internet, sem instalar nada",
    "def": "<strong>Software as a Service</strong>. Modelo onde o software é acessado via navegador e mantido pelo fornecedor. Pagamento geralmente por assinatura. Exemplos: Google Workspace, Microsoft 365, Zoom.",
    "pronunc": "\"sáas\" ou \"sê-a-a-ésse\"",
    "example": "O governo migrou para um SaaS de e-mail e eliminou a manutenção de servidores próprios de correio."
  },
  {
    "letter": "S",
    "name": "Servidor",
    "cat": "infra",
    "mini": "Computador poderoso que fornece serviços a outros computadores",
    "def": "Máquina (física ou virtual) que processa requisições e fornece dados ou serviços a clientes na rede. Todo site, app ou API precisa de um servidor rodando.",
    "pronunc": "Ser-VI-dor",
    "example": "O servidor ficou fora do ar durante a manutenção programada no domingo à noite."
  },
  {
    "letter": "S",
    "name": "Software",
    "cat": "dev",
    "mini": "O programa, o aplicativo, o sistema",
    "def": "Conjunto de instruções (código) que diz ao hardware o que fazer. Inclui sistemas operacionais, aplicativos, APIs, scripts — qualquer coisa não física num computador.",
    "pronunc": "\"sóft-uôr\"",
    "example": "O software de gestão documental precisa ser atualizado para corrigir a vulnerabilidade identificada."
  },
  {
    "letter": "S",
    "name": "Sprint",
    "cat": "neg",
    "mini": "Ciclo curto de trabalho com entrega definida",
    "def": "Período fixo (geralmente 1 a 4 semanas) em metodologias ágeis onde a equipe se compromete a entregar um conjunto específico de funcionalidades.",
    "pronunc": "\"sprint\"",
    "example": "No final da sprint, a equipe apresentou o módulo de relatórios funcionando para a gestora revisar."
  },
  {
    "letter": "S",
    "name": "SQL",
    "cat": "dados",
    "mini": "Linguagem para consultar e manipular bancos de dados",
    "def": "<strong>Structured Query Language</strong>. Linguagem padrão para interagir com bancos de dados relacionais. Com SQL, você busca, insere, atualiza e exclui dados.",
    "pronunc": "\"ésse-quê-el\" ou \"síquel\"",
    "example": "A analista escreveu uma consulta SQL para extrair todos os contratos com valor acima de R$ 1 milhão."
  },
  {
    "letter": "S",
    "name": "Supervisão Humana",
    "cat": "ia",
    "mini": "A pessoa que decide, revisa e responde pelo resultado",
    "def": "Arranjo em que a decisão final cabe a uma pessoa identificável, com poder real de revisar, discordar e reverter o que o sistema propôs. Para ser efetiva exige três condições: <strong>tempo</strong> para analisar, <strong>informação</strong> suficiente para julgar e <strong>autonomia</strong> para contrariar a máquina. Sem as três, vira carimbo.",
    "pronunc": "Su-per-vi-SÃO Hu-MA-na",
    "example": "O sistema sugere a triagem, mas a supervisão humana é quem assina — e quem responde."
  },
  {
    "letter": "T",
    "name": "Token",
    "cat": "ia",
    "mini": "Duas coisas diferentes usam esse mesmo nome",
    "def": "<strong>Em IA</strong>: o pedaço de texto que o modelo processa por vez — mais ou menos uma palavra curta, ou parte de uma longa. É a unidade em que se mede consumo e preço: contratos de IA costumam cobrar por token enviado e devolvido, então documento longo custa mais.<br /><br /><strong>Em segurança</strong>: sequência de caracteres gerada após a autenticação, usada para provar identidade nas requisições seguintes sem reenviar a senha a cada vez.",
    "pronunc": "\"tó-ken\"",
    "example": "O token de acesso expira em 24 horas; após isso, a pessoa usuária precisa autenticar novamente."
  },
  {
    "letter": "U",
    "name": "UX / UI",
    "cat": "dev",
    "mini": "Design centrado na experiência da pessoa usuária",
    "def": "<strong>UX</strong> (User Experience): estudo de como a pessoa se sente usando o produto. <strong>UI</strong> (User Interface): o design visual das telas. UX pesquisa e define; UI projeta e materializa.",
    "pronunc": "\"iú-éks\" / \"iú-ái\"",
    "example": "A equipe de UX realizou testes com servidoras reais antes de lançar a nova interface do portal."
  },
  {
    "letter": "V",
    "name": "Variável Proxy",
    "cat": "dados",
    "mini": "Um dado que carrega outro sem nomeá-lo",
    "def": "Variável que funciona como substituta de uma característica sensível sem citá-la. CEP, escola de origem, sobrenome, tempo de vínculo e exigência de deslocamento podem carregar raça, gênero e classe por procuração. Retirar a variável sensível da base não elimina o efeito — só o torna mais difícil de provar.",
    "pronunc": "Va-ri-Á-vel PRÓ-xi",
    "example": "O edital não menciona raça em nenhuma linha, mas usa CEP e escola de origem: são variáveis proxy."
  },
  {
    "letter": "V",
    "name": "Vibe Coding",
    "cat": "ia",
    "mini": "Criar software conversando com IA em linguagem natural",
    "def": "Prática emergente onde a pessoa descreve o que quer construir em linguagem natural e uma IA generativa escreve o código. Reduz a barreira técnica para criar soluções digitais.",
    "pronunc": "\"váib có-ding\"",
    "example": "Com vibe coding no Lovable, a servidora criou um formulário de cadastro sem saber programar."
  },
  {
    "letter": "V",
    "name": "Viés Algorítmico",
    "cat": "ia",
    "mini": "Erro sistemático que recai sempre sobre os mesmos grupos",
    "def": "Quando um sistema automatizado produz resultados consistentemente piores para determinados grupos de pessoas. Raramente vem de má intenção: vem dos dados que registraram desigualdades passadas e dos critérios que alguém escolheu incluir. Por isso é auditável — <strong>o viés está na decisão, não na máquina</strong>.",
    "pronunc": "Vi-ÉS Al-go-RÍT-mi-co",
    "example": "O viés algorítmico da triagem só apareceu quando os resultados foram separados por grupo."
  },
  {
    "letter": "V",
    "name": "Vulnerabilidade",
    "cat": "seg",
    "mini": "Fraqueza num sistema que pode ser explorada por atacantes",
    "def": "Falha de segurança em software, hardware ou configuração que um atacante pode explorar para acessar dados ou sistemas indevidamente. Deve ser corrigida o mais rápido possível.",
    "pronunc": "Vul-ne-ra-bi-li-DA-de",
    "example": "A vulnerabilidade no sistema de autenticação foi reportada ao CTIR Gov e corrigida em 48 horas."
  },
  {
    "letter": "W",
    "name": "Wi-Fi",
    "cat": "infra",
    "mini": "Rede sem fio de internet",
    "def": "Tecnologia que permite conectar dispositivos à internet (ou à rede local) sem fio, via ondas de rádio. A segurança da rede Wi-Fi é fundamental, especialmente em redes públicas.",
    "pronunc": "\"uái-fái\"",
    "example": "Conectar-se ao Wi-Fi público sem VPN expõe seus dados de navegação a interceptações."
  }
]
