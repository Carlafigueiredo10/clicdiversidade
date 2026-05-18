// Gerado a partir de servidoras-no-comando/trilhas/*.html (Drive)
// Linguagem ajustada para inclusiva (servidoras -> servidoras e servidores, etc).
// Edite com cuidado: rerodando o extractor sobrescreve este arquivo.

export const TRILHAS = [
  {
    "slug": "fundamental-dados",
    "numero": 1,
    "accentColor": "#38BDF8",
    "titulo": "A IA é tão inteligente quanto os dados que você fornece",
    "subtitulo": "Esta trilha transforma servidoras e servidores públicos de pessoas usuárias de sistemas em pessoas que entendem os dados por trás deles.",
    "duracao": "⏱️ 30–40 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Projeto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "O Despertar Analítico",
        "subtitulo": "Dados em Todos os Lugares",
        "descricao": "O primeiro passo não é sobre ferramentas, é sobre como pensar o problema. Você vai aprender a diferença entre dado bruto e informação útil, entender o ciclo de vida dos dados e desenvolver pensamento analítico aplicado ao serviço público.",
        "navLabel": "Despertar Analítico",
        "recursos": [
          {
            "instituicao": "Google • Coursera",
            "nome": "Fundamentos: Dados em Todos os Lugares",
            "meta": [
              "~15h",
              "Iniciante"
            ],
            "url": "https://www.coursera.org/learn/fundamentos-dados-dados-em-todos-os-lugares"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Introdução à Ciência de Dados",
            "meta": [
              "4h",
              "Gratuito"
            ],
            "url": "https://www.escolavirtual.gov.br/"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Resolução de Problemas com Base em Dados",
            "meta": [
              "87h",
              "Certificado"
            ],
            "url": "https://www.escolavirtual.gov.br/trilha/216"
          }
        ],
        "exercicio": {
          "descricao": "Liste 5 informações que seu setor registra todos os dias. Agora pense: que perguntas essas informações poderiam responder se estivessem organizadas?",
          "meta": [
            "⏱️ 1 hora",
            "📝 Papel e caneta",
            "🎯 Pensamento crítico"
          ]
        },
        "dica": "Este módulo é perfeito se você sente que \"não entende de dados\" ou se já ouviu falar em análise de dados mas não sabe por onde começar. Comece pelos cursos básicos e pratique identificando dados no seu dia a dia de trabalho."
      },
      {
        "numero": 2,
        "titulo": "O Básico Bem Feito",
        "subtitulo": "Dominando as Planilhas",
        "descricao": "A tecnologia não precisa ser assustadora. Começamos pelo que você já conhece (ou quase conhece). Dominar planilhas é dominar 80% das análises do dia a dia.",
        "navLabel": "Básico Bem Feito",
        "recursos": [
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Análise de Dados como Suporte à Decisão",
            "meta": [
              "30h",
              "Gratuito"
            ],
            "url": "https://www.escolavirtual.gov.br/"
          },
          {
            "instituicao": "Fundação Bradesco",
            "nome": "Introdução à Análise de Dados - Power BI",
            "meta": [
              "5h",
              "Certificado"
            ],
            "url": "https://www.ev.org.br/"
          }
        ],
        "exercicio": {
          "descricao": "Baixe uma planilha de gastos públicos de dados.gov.br. Identifique e corrija: valores faltantes, erros de formatação, duplicatas. Depois, crie uma tabela dinâmica mostrando gastos por categoria.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Excel ou Google Sheets",
            "📂 dados.gov.br"
          ]
        },
        "dica": "Se você já trabalha com Excel no dia a dia, este módulo vai te dar superpoderes! Aprenda fórmulas como PROCV, SOMASE e tabelas dinâmicas — elas eliminam trabalho manual repetitivo."
      },
      {
        "numero": 3,
        "titulo": "A Virada de Chave",
        "subtitulo": "De Planilhas para Bancos de Dados",
        "descricao": "Este é o momento em que você entende a lógica por trás dos sistemas governamentais. Por que o SEI usa banco de dados? Como as informações se conectam? O que é SQL?",
        "navLabel": "Virada de Chave",
        "recursos": [
          {
            "instituicao": "Microsoft Learn",
            "nome": "Fundamentos de Banco de Dados",
            "meta": [
              "~2h",
              "Português"
            ],
            "url": "https://learn.microsoft.com/pt-br/training/"
          },
          {
            "instituicao": "Fundação Bradesco",
            "nome": "Implementando Banco de Dados",
            "meta": [
              "15h",
              "Prático"
            ],
            "url": "https://www.ev.org.br/"
          }
        ],
        "exercicio": {
          "descricao": "Montar uma pequena base de dados com 3 tabelas relacionadas usando dados públicos (ex: municípios, população, IDH). Escrever 5 queries SQL para extrair informações específicas.",
          "meta": [
            "⏱️ 2-3 horas",
            "💻 SQLite ou MySQL",
            "📊 Dados IBGE"
          ]
        },
        "dica": "Se você trabalha com SEI, SIAPE ou SIGPLAN, vai adorar entender como eles funcionam \"por dentro\". SQL é a linguagem que esses sistemas usam para consultar dados estruturados. Mesmo sem programar, entender a lógica SQL melhora sua capacidade de análise."
      },
      {
        "numero": 4,
        "titulo": "Visualização e Comunicação",
        "subtitulo": "Data Storytelling - Dados que Convencem",
        "descricao": "Dados só geram impacto quando são compreendidos por quem toma a decisão. Você vai aprender a transformar números em narrativas visuais que defendem orçamentos e justificam políticas públicas.",
        "navLabel": "Visualização",
        "recursos": [
          {
            "instituicao": "Fundação Bradesco",
            "nome": "Fundamentos do Power BI",
            "meta": [
              "37h",
              "Completo"
            ],
            "url": "https://www.ev.org.br/"
          },
          {
            "instituicao": "Data Science Academy",
            "nome": "Power BI para BI e Data Science",
            "meta": [
              "~20h",
              "100% Grátis"
            ],
            "url": "https://www.datascienceacademy.com.br/"
          }
        ],
        "exercicio": {
          "descricao": "Criar um dashboard completo com dados de dados.gov.br mostrando indicadores de desempenho. Incluir: título, 3-5 visualizações, insights escritos. Trabalho em duplas.",
          "meta": [
            "⏱️ 2-3 horas",
            "💻 Power BI ou Looker Studio",
            "👥 Em duplas"
          ]
        },
        "dica": "Este módulo é transformador se você precisa apresentar relatórios para gestores ou defender projetos em reuniões. Visualizações claras comunicam insights de forma mais eficaz que tabelas de números. Foque em: escolher o gráfico certo, usar cores com propósito e destacar a mensagem principal."
      },
      {
        "numero": 5,
        "titulo": "Dados + IA",
        "subtitulo": "O Futuro da Gestão Pública",
        "descricao": "Conectar dados com ferramentas de IA. Entender que a qualidade do banco de dados define a qualidade da resposta da IA. Dados enviesados geram IAs discriminatórias. LGPD, ética e preparação de dados para Machine Learning.",
        "navLabel": "Dados + IA",
        "recursos": [
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Introdução à LGPD",
            "meta": [
              "10h",
              "Casos reais"
            ],
            "url": "https://www.escolavirtual.gov.br/"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Privacidade e Segurança da Informação",
            "meta": [
              "Variável",
              "Trilha completa"
            ],
            "url": "https://www.escolavirtual.gov.br/trilha/246"
          }
        ],
        "exercicio": {
          "descricao": "Pipeline completo de preparação de dados: receber arquivo bruto, juntar datasets, limpar colunas, transformar formatos, documentar cada etapa e comparar qualidade antes/depois.",
          "meta": [
            "⏱️ 2-3 horas",
            "💻 Python (Jupyter) ou Excel Avançado",
            "📊 Dados IBGE/Saúde"
          ]
        },
        "dica": "Este é o módulo final e conecta tudo. Você vai entender por que \"garbage in, garbage out\" — dados ruins geram análises e IAs ruins. LGPD não é burocracia: é proteção cidadã e responsabilidade institucional. Servidoras e servidores públicos lidam com dados sensíveis — conhecer LGPD é obrigatório."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Projeto Final",
      "titulo": "Painel de Dados do Seu Setor",
      "intro": "Agora que você completou os 5 módulos, é hora de aplicar tudo em um projeto real. Você vai criar um painel de dados simples e relevante para o seu setor usando dados públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Escolher dados públicos",
          "desc": "Selecione um conjunto de dados relevante para seu trabalho (IBGE, Portal da Transparência, dados abertos do seu órgão)."
        },
        {
          "numero": "2",
          "titulo": "Organizar e limpar",
          "desc": "Use as técnicas de Excel/Planilhas aprendidas no Módulo 2 para organizar, limpar e preparar os dados."
        },
        {
          "numero": "3",
          "titulo": "Criar visualização",
          "desc": "Construa um painel simples no Power BI ou Looker Studio com as visualizações mais importantes (aplicando Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escrever análise",
          "desc": "Produza uma análise de 1-2 páginas com insights principais e recomendações práticas baseadas nos dados."
        }
      ],
      "entrega": "Painel de dados + documento de análise com recomendações para gestores do seu setor."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Você não apenas usa sistemas.",
        "Agora você entende como eles pensam."
      ],
      "descricao": "Completar esta trilha é transformar-se: de operadora de sistema para analista que entende o sistema. De consumidora de relatórios para tomadora de decisão baseada em evidências."
    },
    "unlockText": "Pensamento Analítico em Dados"
  },
  {
    "slug": "autonomia-digital",
    "numero": 2,
    "accentColor": "#A78BFA",
    "titulo": "Você já usa IA. Agora aprenda a comandar.",
    "subtitulo": "Esta trilha transforma servidoras de pessoas usuárias ocasionais em profissionais que entendem, questionam e direcionam a IA com intenção.",
    "duracao": "⏱️ 20–30 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Projeto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "IA sem Mistério",
        "subtitulo": "O Que é IA, Afinal?",
        "descricao": "IA não é magia nem ameaça: é estatística, padrões e probabilidade. Este módulo desmonta mitos, apresenta os tipos de IA que você já usa sem saber e contextualiza o que está em jogo para servidoras e servidores públicos.",
        "navLabel": "Despertar Analítico",
        "recursos": [
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Inteligência Artificial para o Setor Público",
            "meta": [
              "10h",
              "Gratuito"
            ],
            "url": "https://www.escolavirtual.gov.br/curso/1063"
          },
          {
            "instituicao": "DeepLearning.AI • Coursera",
            "nome": "AI for Everyone",
            "meta": [
              "6h",
              "Inglês / PT disponível"
            ],
            "url": "https://www.coursera.org/learn/ai-for-everyone"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "IA Generativa: Conceitos e Aplicações",
            "meta": [
              "4h",
              "Certificado"
            ],
            "url": "https://www.escolavirtual.gov.br/curso/1081"
          }
        ],
        "exercicio": {
          "descricao": "Identifique 3 situações na sua rotina de trabalho onde uma IA poderia te ajudar. Para cada uma, escreva: qual tarefa, que tipo de IA (texto, imagem, automação?) e que risco precisaria considerar.",
          "meta": [
            "⏱️ 45 min",
            "📝 Papel e caneta",
            "🎯 Reflexão crítica"
          ]
        },
        "dica": "Não precisa entender de programação para entender IA. O que importa é saber perguntar: \"Como esse sistema chegou a essa resposta?\" e \"Posso confiar nessa saída?\" São as perguntas que uma servidora pública precisa fazer."
      },
      {
        "numero": 2,
        "titulo": "Prompts que Funcionam",
        "subtitulo": "Engenharia de Prompts Aplicada",
        "descricao": "A diferença entre uma IA medíocre e uma IA poderosa está em como você pergunta. Este módulo ensina a estrutura de um prompt eficaz: papel, contexto, tarefa, formato e restrições. Com prática.",
        "navLabel": "Básico Bem Feito",
        "recursos": [
          {
            "instituicao": "DAIR.AI",
            "nome": "Guia de Engenharia de Prompts",
            "meta": [
              "Leitura",
              "Português"
            ],
            "url": "https://www.promptingguide.ai/pt"
          },
          {
            "instituicao": "Learn Prompting",
            "nome": "Curso Livre de Prompting",
            "meta": [
              "~5h",
              "Gratuito"
            ],
            "url": "https://learnprompting.org/pt"
          }
        ],
        "exercicio": {
          "descricao": "Pegue uma tarefa real do seu trabalho (um relatório, um parecer, uma resposta de e-mail). Escreva 3 versões do prompt para a mesma tarefa — simples, estruturado e avançado com persona. Compare os resultados.",
          "meta": [
            "⏱️ 1–2 horas",
            "💻 Claude, ChatGPT ou Gemini",
            "🎯 Tarefa real do trabalho"
          ]
        },
        "dica": "Um bom prompt é como uma instrução de trabalho bem escrita: quem você é, o que quer, qual formato espera e o que deve ser evitado. Treine esse padrão até virar instinto."
      },
      {
        "numero": 3,
        "titulo": "Criando Assistentes",
        "subtitulo": "Assistentes Inteligentes no Trabalho",
        "descricao": "Você vai configurar um assistente de IA para uma necessidade real do seu setor: triagem de documentos, respostas padronizadas, resumos de reuniões ou análise de textos jurídicos. Do conceito ao uso.",
        "navLabel": "Virada de Chave",
        "recursos": [
          {
            "instituicao": "Anthropic",
            "nome": "Claude — Assistente de IA",
            "meta": [
              "Gratuito",
              "Português nativo"
            ],
            "url": "https://www.anthropic.com/claude"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Uso de IA Generativa na Gestão Pública",
            "meta": [
              "8h",
              "Casos práticos"
            ],
            "url": "https://www.escolavirtual.gov.br/curso/1063"
          }
        ],
        "exercicio": {
          "descricao": "Configure um assistente personalizado para o seu cargo. Defina: persona, restrições, formato de saída. Teste com 5 situações reais e registre o que funcionou e o que precisou de ajuste.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Claude ou ChatGPT",
            "🎯 Situação real do setor"
          ]
        },
        "dica": "Um assistente bem configurado é como ter uma estagiária experiente disponível 24h. Mas você precisa saber dar instruções claras. Este módulo é sobre isso: ser uma boa gestora da IA que você usa."
      },
      {
        "numero": 4,
        "titulo": "IA na Rotina",
        "subtitulo": "Automação do Dia a Dia",
        "descricao": "Agora você integra IA em processos reais: redigir documentos, preparar reuniões, resumir normativos, organizar respostas de ofício. O objetivo é ganhar horas na semana sem abrir mão do julgamento.",
        "navLabel": "Visualização",
        "recursos": [
          {
            "instituicao": "Microsoft Learn",
            "nome": "Introdução ao Microsoft 365 Copilot",
            "meta": [
              "~3h",
              "Português"
            ],
            "url": "https://learn.microsoft.com/pt-br/training/paths/get-started-with-microsoft-365-copilot/"
          },
          {
            "instituicao": "Zapier Learn",
            "nome": "Automatize com IA — Cursos Zapier",
            "meta": [
              "Variável",
              "Gratuito"
            ],
            "url": "https://learn.zapier.com/"
          }
        ],
        "exercicio": {
          "descricao": "Escolha 3 tarefas repetitivas da sua semana. Para cada uma, descreva um fluxo com IA: qual ferramenta, qual prompt, qual verificação humana você manteria. Implemente pelo menos uma.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Copilot, Claude ou Zapier",
            "🎯 Processo real do setor"
          ]
        },
        "dica": "Automatizar não é substituir o julgamento. É liberá-lo para o que importa. A checklist deste módulo: identificar a tarefa, escolher a ferramenta, definir o ponto de controle humano e documentar o fluxo."
      },
      {
        "numero": 5,
        "titulo": "Agentes e o Futuro",
        "subtitulo": "Para Onde a IA Está Indo",
        "descricao": "Agentes de IA, multimodalidade, raciocínio autônomo. Este módulo apresenta o horizonte próximo e prepara você para acompanhar a evolução sem depender de terceiros para interpretar o que está acontecendo.",
        "navLabel": "Dados + IA",
        "recursos": [
          {
            "instituicao": "3Blue1Brown",
            "nome": "But What is a Neural Network?",
            "meta": [
              "19 min",
              "Visual e intuitivo"
            ],
            "url": "https://www.youtube.com/watch?v=aircAruvnKk"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "IA e o Futuro do Trabalho Público",
            "meta": [
              "8h",
              "Certificado"
            ],
            "url": "https://www.escolavirtual.gov.br/curso/1063"
          }
        ],
        "exercicio": {
          "descricao": "Mapeie 5 inovações em IA que ocorreram nos últimos 12 meses. Para cada uma, responda: que impacto pode ter no serviço público? Como você se prepararia para essa mudança? Compartilhe suas respostas na rede ASCENDA.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Leitura + reflexão",
            "🌐 Rede ASCENDA"
          ]
        },
        "dica": "Acompanhar a evolução da IA não exige ler tudo — exige ler certo. Siga fontes confiáveis, questione o sensacionalismo e mantenha o foco em: \"o que isso significa para o meu trabalho e para a cidadã que eu sirvo?\""
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Projeto Final",
      "titulo": "Painel de Dados do Seu Setor",
      "intro": "Agora que você completou os 5 módulos, é hora de aplicar tudo em um projeto real. Você vai criar um painel de dados simples e relevante para o seu setor usando dados públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Escolher dados públicos",
          "desc": "Selecione um conjunto de dados relevante para seu trabalho (IBGE, Portal da Transparência, dados abertos do seu órgão)."
        },
        {
          "numero": "2",
          "titulo": "Organizar e limpar",
          "desc": "Use as técnicas de Excel/Planilhas aprendidas no Módulo 2 para organizar, limpar e preparar os dados."
        },
        {
          "numero": "3",
          "titulo": "Criar visualização",
          "desc": "Construa um painel simples no Power BI ou Looker Studio com as visualizações mais importantes (aplicando Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escrever análise",
          "desc": "Produza uma análise de 1-2 páginas com insights principais e recomendações práticas baseadas nos dados."
        }
      ],
      "entrega": "Painel de dados + documento de análise com recomendações para gestores do seu setor."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Você entende IA.",
        "Agora você comanda."
      ],
      "descricao": "Completar esta trilha é sair da posição de consumidora de tecnologia para a de profissional que sabe usar, questionar e direcionar a IA com intenção estratégica."
    },
    "unlockText": "Pensamento Analítico em Dados"
  },
  {
    "slug": "produtividade-automacao",
    "numero": 3,
    "accentColor": "#F5A623",
    "titulo": "Você já usa IA. Agora ganhe horas de volta.",
    "subtitulo": "Esta trilha transforma tarefas repetitivas em fluxos automatizados — para que você gaste energia onde importa.",
    "duracao": "⏱️ 8–12 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Projeto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "Mapeie o que Rouba seu Tempo",
        "subtitulo": "Diagnóstico de Produtividade",
        "descricao": "Antes de automatizar, você precisa enxergar. Este módulo ensina a mapear sua semana de trabalho, identificar gargalos e priorizar o que a IA pode eliminar primeiro — com impacto real.",
        "navLabel": "Despertar Analítico",
        "recursos": [
          {
            "instituicao": "Zapier Learn",
            "nome": "Automação para Iniciantes",
            "meta": [
              "~2h",
              "Gratuito"
            ],
            "url": "https://learn.zapier.com/"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "IA Generativa no Trabalho Público",
            "meta": [
              "10h",
              "Certificado"
            ],
            "url": "https://www.escolavirtual.gov.br/curso/1063"
          }
        ],
        "exercicio": {
          "descricao": "Registre cada tarefa que você fez durante 2 dias de trabalho. Ao final, classifique cada uma: repetitiva, criativa ou relacional. Calcule quanto tempo vai para tarefas repetitivas e priorize as 3 que a IA pode assumir primeiro.",
          "meta": [
            "⏱️ 2 dias de observação",
            "📝 Qualquer anotador",
            "🎯 Diagnóstico real"
          ]
        },
        "dica": "A produtividade com IA começa pela clareza sobre onde o tempo vai. Sem mapeamento, você automatiza o que é fácil — não o que importa. Este exercício de 2 dias vai mudar o que você enxerga na sua rotina."
      },
      {
        "numero": 2,
        "titulo": "Redigir com IA",
        "subtitulo": "Ofícios, Notas e Pareceres Mais Rápidos",
        "descricao": "IA rascunha, você revisa e assina. Este módulo ensina a usar IA para elaborar ofícios, notas técnicas, pareceres e e-mails institucionais — mantendo sua voz, seu estilo e sua responsabilidade.",
        "navLabel": "Básico Bem Feito",
        "recursos": [
          {
            "instituicao": "Anthropic",
            "nome": "Claude — Redação Institucional",
            "meta": [
              "Gratuito",
              "Português nativo"
            ],
            "url": "https://www.anthropic.com/claude"
          },
          {
            "instituicao": "Learn Prompting",
            "nome": "Prompts para Escrita Profissional",
            "meta": [
              "~2h",
              "Gratuito"
            ],
            "url": "https://learnprompting.org/pt"
          }
        ],
        "exercicio": {
          "descricao": "Pegue um ofício ou nota técnica que você redigiu recentemente. Use IA para reescrever em metade do tempo. Compare: tom, precisão, clareza. Registre qual parte você editou e por quê.",
          "meta": [
            "⏱️ 1 hora",
            "💻 Claude ou ChatGPT",
            "📄 Documento real do setor"
          ]
        },
        "dica": "A responsabilidade pela assinatura é sempre sua. IA é uma rascunhista rápida e incansável — você é a revisora com julgamento institucional. Essa divisão de papéis é o segredo para usar IA com segurança em documentos públicos."
      },
      {
        "numero": 3,
        "titulo": "Automatizando Fluxos",
        "subtitulo": "Make, Zapier e Automação sem Código",
        "descricao": "Se isso acontece → faça aquilo. A lógica de automação é simples e poderosa. Você vai criar fluxos reais usando ferramentas no-code que conectam formulários, e-mails, planilhas e notificações sem escrever uma linha de código.",
        "navLabel": "Virada de Chave",
        "recursos": [
          {
            "instituicao": "Make Academy",
            "nome": "Automação com Make (Integromat)",
            "meta": [
              "~5h",
              "Gratuito"
            ],
            "url": "https://academy.make.com/"
          },
          {
            "instituicao": "Zapier Learn",
            "nome": "Automação para o Trabalho",
            "meta": [
              "Variável",
              "Gratuito"
            ],
            "url": "https://learn.zapier.com/"
          }
        ],
        "exercicio": {
          "descricao": "Crie uma automação simples: formulário de coleta → planilha → notificação por e-mail. Use Make ou Zapier. Documente cada etapa e teste com dados reais do setor.",
          "meta": [
            "⏱️ 2–3 horas",
            "💻 Make ou Zapier",
            "🔗 Google Forms + Sheets"
          ]
        },
        "dica": "Automação não exige programação. Exige lógica de processo: \"se X, então Y\". Se você já criou um formulário do Google ou uma planilha com fórmulas, você já tem o raciocínio. Make e Zapier são a interface visual dessa lógica."
      },
      {
        "numero": 4,
        "titulo": "IA em Reuniões",
        "subtitulo": "Atas, Resumos e Sínteses Automáticas",
        "descricao": "Gravar, transcrever, resumir e distribuir atas em minutos. Este módulo mostra como usar IA para transformar reuniões longas em documentos acionáveis — sem perder nada relevante.",
        "navLabel": "Visualização",
        "recursos": [
          {
            "instituicao": "Microsoft Learn",
            "nome": "Copilot em Teams e Reuniões",
            "meta": [
              "~2h",
              "Português"
            ],
            "url": "https://learn.microsoft.com/pt-br/training/paths/get-started-with-microsoft-365-copilot/"
          },
          {
            "instituicao": "Anthropic",
            "nome": "Claude — Resumos e Sínteses",
            "meta": [
              "Gratuito",
              "Colar transcrições direto"
            ],
            "url": "https://www.anthropic.com/claude"
          }
        ],
        "exercicio": {
          "descricao": "Grave (com permissão) uma reunião interna curta. Transcreva com IA. Peça à IA que gere: (1) resumo executivo, (2) lista de decisões tomadas, (3) próximos passos com responsáveis. Compare com a ata que você faria manualmente.",
          "meta": [
            "⏱️ 1–2 horas",
            "💻 Transcrição + Claude",
            "🎙️ Reunião real autorizada"
          ]
        },
        "dica": "Atas automáticas não são preguiça: são eficiência que libera tempo para pensar. O ponto de controle é você — revise sempre antes de distribuir. A IA transcreveu; a responsabilidade institucional é sua."
      },
      {
        "numero": 5,
        "titulo": "Seu Sistema Pessoal",
        "subtitulo": "IA que Trabalha Para Você",
        "descricao": "Você vai montar seu próprio stack de produtividade: quais ferramentas, para quais tarefas, com quais limites. O resultado é um sistema pessoal de IA que aumenta sua capacidade sem aumentar sua dependência.",
        "navLabel": "Dados + IA",
        "recursos": [
          {
            "instituicao": "Zapier Learn",
            "nome": "Construindo Fluxos de Trabalho com IA",
            "meta": [
              "Variável",
              "Gratuito"
            ],
            "url": "https://learn.zapier.com/"
          },
          {
            "instituicao": "Make Academy",
            "nome": "Projetos avançados com Make",
            "meta": [
              "Variável",
              "Gratuito"
            ],
            "url": "https://academy.make.com/"
          }
        ],
        "exercicio": {
          "descricao": "Documente seu sistema pessoal de IA: lista das 5 ferramentas que usa, para quais tarefas, com quais limites definidos. Compartilhe com uma colega e peça feedback. Esse documento é sua política de uso de IA.",
          "meta": [
            "⏱️ 2 horas",
            "📝 Documento de referência",
            "👥 Compartilhar com colega"
          ]
        },
        "dica": "Um sistema pessoal de IA é dinâmico: você atualiza conforme surgem novas ferramentas e novas demandas. O objetivo não é o stack perfeito — é ter clareza sobre por que você usa cada ferramenta e o que ela não deve fazer por você."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Projeto Final",
      "titulo": "Painel de Dados do Seu Setor",
      "intro": "Agora que você completou os 5 módulos, é hora de aplicar tudo em um projeto real. Você vai criar um painel de dados simples e relevante para o seu setor usando dados públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Escolher dados públicos",
          "desc": "Selecione um conjunto de dados relevante para seu trabalho (IBGE, Portal da Transparência, dados abertos do seu órgão)."
        },
        {
          "numero": "2",
          "titulo": "Organizar e limpar",
          "desc": "Use as técnicas de Excel/Planilhas aprendidas no Módulo 2 para organizar, limpar e preparar os dados."
        },
        {
          "numero": "3",
          "titulo": "Criar visualização",
          "desc": "Construa um painel simples no Power BI ou Looker Studio com as visualizações mais importantes (aplicando Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escrever análise",
          "desc": "Produza uma análise de 1-2 páginas com insights principais e recomendações práticas baseadas nos dados."
        }
      ],
      "entrega": "Painel de dados + documento de análise com recomendações para gestores do seu setor."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Você recuperou seu tempo.",
        "Use-o no que importa."
      ],
      "descricao": "Completar esta trilha é transformar sua relação com o trabalho repetitivo: não é mais algo que você suporta, é algo que você delega — com critério e responsabilidade."
    },
    "unlockText": "Pensamento Analítico em Dados"
  },
  {
    "slug": "dados-decisao",
    "numero": 4,
    "accentColor": "#38BDF8",
    "titulo": "De relatório a evidência. De número a decisão.",
    "subtitulo": "Esta trilha transforma servidoras que lidam com dados em analistas capazes de usar IA para gerar evidências e apoiar decisões de política pública.",
    "duracao": "⏱️ 12–15 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Projeto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "Ler Dados com Olhar Crítico",
        "subtitulo": "O Que os Números Escondem",
        "descricao": "Antes de analisar, você precisa questionar. Quem coletou? Com que método? Que viés pode existir? Este módulo desenvolve o olhar analítico que distingue uma servidora que lê um relatório de uma que o questiona.",
        "navLabel": "Despertar Analítico",
        "recursos": [
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Resolução de Problemas com Base em Dados",
            "meta": [
              "87h",
              "Certificado"
            ],
            "url": "https://www.escolavirtual.gov.br/trilha/216"
          },
          {
            "instituicao": "Kaggle Learn",
            "nome": "Intro to Data Analysis",
            "meta": [
              "~4h",
              "Gratuito"
            ],
            "url": "https://www.kaggle.com/learn/data-analysis"
          }
        ],
        "exercicio": {
          "descricao": "Pegue um relatório ou painel de dados que você usa no trabalho. Responda: quem produziu? Qual o período? Que metodologia foi usada? O que está faltando? Apresente sua análise crítica em meia página.",
          "meta": [
            "⏱️ 1 hora",
            "📝 Relatório real do seu setor",
            "🎯 Olhar analítico"
          ]
        },
        "dica": "Dados sem contexto são ruído. Dados com contexto são evidência. A diferença está em quem lê e com que perguntas. Este módulo transforma você nessa leitora."
      },
      {
        "numero": 2,
        "titulo": "IA para Analisar",
        "subtitulo": "Claude e ChatGPT como Analistas",
        "descricao": "Você pode colar uma planilha numa IA e pedir análises, cruzamentos e padrões — em segundos. Este módulo ensina exatamente como fazer isso com precisão e sem perder o controle dos resultados.",
        "navLabel": "Básico Bem Feito",
        "recursos": [
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Análise de Dados como Suporte à Decisão",
            "meta": [
              "30h",
              "Gratuito"
            ],
            "url": "https://www.escolavirtual.gov.br/"
          },
          {
            "instituicao": "Kaggle Learn",
            "nome": "Data Analysis com Python e IA",
            "meta": [
              "~4h",
              "Gratuito"
            ],
            "url": "https://www.kaggle.com/learn"
          }
        ],
        "exercicio": {
          "descricao": "Baixe uma planilha de dados abertos de dados.gov.br. Cole numa IA e peça: (1) identificar padrões; (2) apontar inconsistências; (3) sugerir 3 análises possíveis. Avalie a qualidade das respostas e refine com prompts adicionais.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Claude ou ChatGPT",
            "📂 dados.gov.br"
          ]
        },
        "dica": "IA analisa padrões em segundos — mas precisa que você saiba fazer as perguntas certas. \"Que tendência você vê nesses dados?\" é diferente de \"Identifique anomalias nos meses pares comparando com a média anual.\" O nível da pergunta determina a qualidade da análise."
      },
      {
        "numero": 3,
        "titulo": "Dashboards com IA",
        "subtitulo": "Power BI e Looker Studio com Assistência de IA",
        "descricao": "Visualização de dados é comunicação estratégica. Este módulo ensina a criar dashboards que convencem gestores — usando IA para sugerir gráficos, identificar métricas e gerar o texto de contexto automaticamente.",
        "navLabel": "Virada de Chave",
        "recursos": [
          {
            "instituicao": "Fundação Bradesco",
            "nome": "Fundamentos do Power BI",
            "meta": [
              "37h",
              "Completo"
            ],
            "url": "https://www.ev.org.br/"
          },
          {
            "instituicao": "Data Science Academy",
            "nome": "Power BI — Curso Gratuito",
            "meta": [
              "~20h",
              "100% Grátis"
            ],
            "url": "https://www.datascienceacademy.com.br/"
          }
        ],
        "exercicio": {
          "descricao": "Crie um dashboard no Looker Studio ou Power BI com dados do Portal da Transparência. Use IA para: escolher quais métricas exibir, escrever os títulos dos gráficos e redigir o parágrafo de contexto da página principal.",
          "meta": [
            "⏱️ 3 horas",
            "💻 Power BI ou Looker Studio",
            "📊 Portal da Transparência"
          ]
        },
        "dica": "Um dashboard bem feito defende orçamento, justifica política e prestação de contas. IA acelera a construção — mas a escolha de quais indicadores mostrar é sempre sua. Isso é julgamento analítico que nenhuma IA substitui."
      },
      {
        "numero": 4,
        "titulo": "Evidência para Política Pública",
        "subtitulo": "Do Dado à Recomendação",
        "descricao": "Análise sem recomendação é curiosidade. Recomendação sem análise é opinião. Este módulo fecha o ciclo: transformar dados em evidências sólidas, estruturar argumentos analíticos e comunicar com clareza para quem decide.",
        "navLabel": "Visualização",
        "recursos": [
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Análise de Dados para Gestão Pública",
            "meta": [
              "~12h",
              "Gratuito"
            ],
            "url": "https://www.escolavirtual.gov.br/"
          },
          {
            "instituicao": "CGU",
            "nome": "Portal de Dados Abertos do Governo Federal",
            "meta": [
              "Referência",
              "Dados reais"
            ],
            "url": "https://www.gov.br/cgu/pt-br/assuntos/dados-abertos"
          }
        ],
        "exercicio": {
          "descricao": "A partir de dados reais do seu setor, produza uma nota técnica de 2 páginas com: contextualização, análise dos dados, 3 insights e 1 recomendação de política. Use IA para rascunhar e você para revisar com rigor técnico.",
          "meta": [
            "⏱️ 3–4 horas",
            "💻 Claude + Editor de texto",
            "📄 Dados reais do setor"
          ]
        },
        "dica": "Uma boa nota técnica com dados muda orçamentos. A estrutura é: problema + dados + análise + recomendação. IA ajuda a rascunhar cada parte — mas a análise e a recomendação dependem do seu julgamento técnico e do contexto institucional que só você conhece."
      },
      {
        "numero": 5,
        "titulo": "Dados Abertos e Transparência",
        "subtitulo": "Governo Aberto e IA a Serviço do Cidadão",
        "descricao": "Dados públicos são o insumo da IA aplicada ao governo. Este módulo conecta a política de dados abertos à prática analítica: onde encontrar, como usar com ética, como citar e como contribuir com qualidade de dados no seu órgão.",
        "navLabel": "Dados + IA",
        "recursos": [
          {
            "instituicao": "Gov.br",
            "nome": "Portal Brasileiro de Dados Abertos",
            "meta": [
              "Referência",
              "Dados reais"
            ],
            "url": "https://dados.gov.br/"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Governo Aberto e Dados Abertos",
            "meta": [
              "~8h",
              "Gratuito"
            ],
            "url": "https://www.escolavirtual.gov.br/"
          }
        ],
        "exercicio": {
          "descricao": "Encontre um conjunto de dados abertos do seu órgão ou área de atuação no dados.gov.br. Analise a qualidade: completude, atualização, documentação. Escreva uma recomendação de melhoria para quem publica esses dados.",
          "meta": [
            "⏱️ 2 horas",
            "💻 dados.gov.br",
            "📋 Relatório de qualidade"
          ]
        },
        "dica": "Dados abertos de baixa qualidade geram análises ruins e decisões ruins. Servidoras e servidores públicos não são apenas consumidoras de dados abertos — são responsáveis pela qualidade dos dados que seus sistemas produzem. Essa responsabilidade é estratégica."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Projeto Final",
      "titulo": "Painel de Dados do Seu Setor",
      "intro": "Agora que você completou os 5 módulos, é hora de aplicar tudo em um projeto real. Você vai criar um painel de dados simples e relevante para o seu setor usando dados públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Escolher dados públicos",
          "desc": "Selecione um conjunto de dados relevante para seu trabalho (IBGE, Portal da Transparência, dados abertos do seu órgão)."
        },
        {
          "numero": "2",
          "titulo": "Organizar e limpar",
          "desc": "Use as técnicas de Excel/Planilhas aprendidas no Módulo 2 para organizar, limpar e preparar os dados."
        },
        {
          "numero": "3",
          "titulo": "Criar visualização",
          "desc": "Construa um painel simples no Power BI ou Looker Studio com as visualizações mais importantes (aplicando Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escrever análise",
          "desc": "Produza uma análise de 1-2 páginas com insights principais e recomendações práticas baseadas nos dados."
        }
      ],
      "entrega": "Painel de dados + documento de análise com recomendações para gestores do seu setor."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Você transforma dados",
        "em decisões."
      ],
      "descricao": "Completar esta trilha é dominar o ciclo completo: dado → análise → evidência → recomendação. É ser a servidora que não só entende o relatório — é quem os gestores ligam quando precisam de um diagnóstico confiável."
    },
    "unlockText": "Pensamento Analítico em Dados"
  },
  {
    "slug": "construcao",
    "numero": 5,
    "accentColor": "#FB7185",
    "titulo": "Você não usa a ferramenta. Você constrói a ferramenta.",
    "subtitulo": "Esta trilha transforma servidoras de pessoas usuárias em criadoras — com ferramentas no-code e IA para construir soluções reais para o seu setor.",
    "duracao": "⏱️ 10–15 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Projeto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "De Usuária a Criadora",
        "subtitulo": "A Virada de Mentalidade",
        "descricao": "O maior obstáculo não é técnico — é a crença de que \"construir ferramentas não é para mim\". Este módulo desmonta essa crença com exemplos reais de servidoras e servidores que criaram soluções digitais sem saber programar.",
        "navLabel": "Despertar Analítico",
        "recursos": [
          {
            "instituicao": "Lovable",
            "nome": "Construa apps com IA — Introdução",
            "meta": [
              "Gratuito para começar",
              "No-code"
            ],
            "url": "https://lovable.dev"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "IA Generativa — Aplicações Práticas",
            "meta": [
              "10h",
              "Certificado"
            ],
            "url": "https://www.escolavirtual.gov.br/curso/1063"
          }
        ],
        "exercicio": {
          "descricao": "Escreva 3 problemas reais do seu setor que uma ferramenta digital poderia resolver. Para cada um, defina: quem usaria, qual informação precisaria registrar, qual resultado esperado. Esse é o seu backlog de projetos.",
          "meta": [
            "⏱️ 1 hora",
            "📝 Qualquer anotador",
            "🎯 Problemas reais do setor"
          ]
        },
        "dica": "Construir ferramentas começa com identificar problemas. Não com aprender tecnologia. Você já conhece os problemas do seu setor melhor do que qualquer desenvolvedora externa. Esse conhecimento é o seu recurso mais valioso."
      },
      {
        "numero": 2,
        "titulo": "No-Code com IA",
        "subtitulo": "Lovable, Glide e Bolt — Primeiros Passos",
        "descricao": "Lovable, Glide, Bolt.new. Ferramentas que transformam uma descrição em texto num aplicativo funcionando. Este módulo mostra as 3 mais didáticas, com orientação sobre quando usar cada uma.",
        "navLabel": "Básico Bem Feito",
        "recursos": [
          {
            "instituicao": "Lovable",
            "nome": "Crie apps com IA generativa",
            "meta": [
              "Gratuito",
              "No-code completo"
            ],
            "url": "https://lovable.dev"
          },
          {
            "instituicao": "StackBlitz",
            "nome": "Bolt.new — Apps no navegador",
            "meta": [
              "Gratuito para começar",
              "Deploy em segundos"
            ],
            "url": "https://bolt.new"
          }
        ],
        "exercicio": {
          "descricao": "No Lovable, crie um app em 30 minutos: formulário de solicitação simples para o seu setor. Deve ter pelo menos 3 campos, botão de envio e listagem das respostas. Documente o prompt que usou para criá-lo.",
          "meta": [
            "⏱️ 1–2 horas",
            "💻 Lovable.dev",
            "🎯 Formulário real do setor"
          ]
        },
        "dica": "O prompt para construir um app segue a mesma lógica de um briefing: descreva o usuário, a função principal, os campos necessários e o visual esperado. Quanto mais específica a descrição, melhor o resultado."
      },
      {
        "numero": 3,
        "titulo": "Formulários e Bases",
        "subtitulo": "Coletando, Armazenando e Exibindo Dados",
        "descricao": "Todo sistema útil tem três partes: entrada de dados, armazenamento e exibição. Este módulo ensina a construir essas três partes com ferramentas no-code — sem banco de dados complexo, sem código.",
        "navLabel": "Virada de Chave",
        "recursos": [
          {
            "instituicao": "Glide",
            "nome": "Apps a partir de planilhas Google",
            "meta": [
              "Gratuito",
              "Sheets como banco"
            ],
            "url": "https://glideapps.com/"
          },
          {
            "instituicao": "Airtable",
            "nome": "Documentação Oficial do Airtable",
            "meta": [
              "Referência",
              "Banco no-code"
            ],
            "url": "https://support.airtable.com/"
          }
        ],
        "exercicio": {
          "descricao": "Expanda o formulário do módulo anterior: adicione uma base de dados (Airtable ou Lovable Cloud), crie uma tela de listagem com filtros e teste com dados fictícios do setor. O sistema deve ser funcional do ponto de vista de fluxo.",
          "meta": [
            "⏱️ 2–3 horas",
            "💻 Lovable ou Glide",
            "🗃️ Airtable ou Lovable Cloud"
          ]
        },
        "dica": "Sistemas públicos como SEI e SIAPE têm exatamente essa estrutura: formulário + banco + listagem. Entender essa lógica não te faz programadora — te faz uma servidora capaz de especificar, avaliar e melhorar sistemas."
      },
      {
        "numero": 4,
        "titulo": "Seu App Funcionando",
        "subtitulo": "Micro-Sistema Real para o Setor Público",
        "descricao": "Este módulo é o coração da trilha: você vai construir um micro-sistema completo e funcional para resolver um problema real do seu setor. Formulário + base + regra de negócio + saída.",
        "navLabel": "Visualização",
        "recursos": [
          {
            "instituicao": "Lovable",
            "nome": "Build — Projeto completo com IA",
            "meta": [
              "Gratuito",
              "Deploy automático"
            ],
            "url": "https://lovable.dev"
          },
          {
            "instituicao": "Make Academy",
            "nome": "Automação de Sistemas com Make",
            "meta": [
              "~5h",
              "Gratuito"
            ],
            "url": "https://academy.make.com/"
          }
        ],
        "exercicio": {
          "descricao": "Construa seu micro-sistema: escolha o problema, defina os 4 componentes (formulário, base, regra, saída), construa com Lovable ou Glide e teste com colegas do setor. Registre bugs e soluções encontradas.",
          "meta": [
            "⏱️ 4–6 horas",
            "💻 Lovable, Glide ou Bolt",
            "👥 Com colega testadora"
          ]
        },
        "dica": "A entrega obrigatória desta trilha é um micro-sistema funcional: não precisa ser perfeito — precisa funcionar e resolver um problema real. Feito é melhor que perfeito. Publique, teste, itere."
      },
      {
        "numero": 5,
        "titulo": "Entrega e Documentação",
        "subtitulo": "Publicar, Comunicar e Sustentar",
        "descricao": "Um app que ninguém sabe que existe não resolve nada. Este módulo trata de publicação, documentação mínima, onboarding de usuários e o ciclo de melhoria contínua — para que sua ferramenta sobreviva após o lançamento.",
        "navLabel": "Dados + IA",
        "recursos": [
          {
            "instituicao": "Lovable",
            "nome": "Deploy e publicação de apps",
            "meta": [
              "Gratuito",
              "URL automática"
            ],
            "url": "https://lovable.dev"
          },
          {
            "instituicao": "Glide",
            "nome": "Publicar e compartilhar apps",
            "meta": [
              "Gratuito",
              "Link direto"
            ],
            "url": "https://glideapps.com/"
          }
        ],
        "exercicio": {
          "descricao": "Publique seu micro-sistema com URL pública. Escreva uma documentação mínima de 1 página: o que o sistema faz, como usar, quem contatar em caso de problema. Distribua o link para pelo menos 3 colegas e colete feedback estruturado.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Lovable ou Glide",
            "👥 3 usuárias-teste"
          ]
        },
        "dica": "Documentação não é burocracia: é o que faz sua ferramenta sobreviver quando você está de férias. Uma página clara sobre \"o que é, como usar e quem acionar\" é tudo que você precisa para lançar com responsabilidade."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Projeto Final",
      "titulo": "Painel de Dados do Seu Setor",
      "intro": "Agora que você completou os 5 módulos, é hora de aplicar tudo em um projeto real. Você vai criar um painel de dados simples e relevante para o seu setor usando dados públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Escolher dados públicos",
          "desc": "Selecione um conjunto de dados relevante para seu trabalho (IBGE, Portal da Transparência, dados abertos do seu órgão)."
        },
        {
          "numero": "2",
          "titulo": "Organizar e limpar",
          "desc": "Use as técnicas de Excel/Planilhas aprendidas no Módulo 2 para organizar, limpar e preparar os dados."
        },
        {
          "numero": "3",
          "titulo": "Criar visualização",
          "desc": "Construa um painel simples no Power BI ou Looker Studio com as visualizações mais importantes (aplicando Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escrever análise",
          "desc": "Produza uma análise de 1-2 páginas com insights principais e recomendações práticas baseadas nos dados."
        }
      ],
      "entrega": "Painel de dados + documento de análise com recomendações para gestores do seu setor."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Você construiu algo",
        "que não existia antes."
      ],
      "descricao": "Completar esta trilha é cruzar a fronteira entre pessoas usuárias e criadoras de tecnologia. Você não precisa mais esperar uma licitação ou um projeto de TI para resolver um problema do seu setor."
    },
    "unlockText": "Pensamento Analítico em Dados"
  },
  {
    "slug": "programacao",
    "numero": 6,
    "accentColor": "#34D399",
    "titulo": "Autonomia técnica real. Código + IA.",
    "subtitulo": "Esta trilha é para quem quer o nível mais alto: escrever código, integrar APIs e construir aplicações com IA do zero.",
    "duracao": "⏱️ 20–30 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Projeto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "Lógica de Programação",
        "subtitulo": "Como Computadores Pensam",
        "descricao": "Variáveis, condições, loops, funções. Esses conceitos são a gramática de qualquer linguagem de programação. Este módulo ensina a lógica fundamental — com Python como idioma de entrada.",
        "navLabel": "Despertar Analítico",
        "recursos": [
          {
            "instituicao": "Harvard",
            "nome": "CS50 — Introdução à Ciência da Computação",
            "meta": [
              "~20h",
              "Gratuito"
            ],
            "url": "https://cs50.harvard.edu/x/"
          },
          {
            "instituicao": "freeCodeCamp",
            "nome": "Python — Computação Científica",
            "meta": [
              "~300h",
              "Certificado gratuito"
            ],
            "url": "https://www.freecodecamp.org/learn/scientific-computing-with-python/"
          },
          {
            "instituicao": "Dr. Chuck",
            "nome": "Python for Everybody",
            "meta": [
              "Variável",
              "Gratuito"
            ],
            "url": "https://www.py4e.com/"
          }
        ],
        "exercicio": {
          "descricao": "No CS50 ou freeCodeCamp, complete os primeiros 3 exercícios de Python. Mostre o código para uma colega e explique o que cada linha faz. Ensinar é a prova definitiva de que você aprendeu.",
          "meta": [
            "⏱️ 3–5 horas",
            "💻 Replit ou VS Code",
            "🐍 Python"
          ]
        },
        "dica": "Python é a linguagem mais próxima do português entre as linguagens de programação. Com IA como Cursor ou Copilot ao lado, você aprende e executa ao mesmo tempo. A curva de aprendizado nunca foi tão acessível."
      },
      {
        "numero": 2,
        "titulo": "Python com IA",
        "subtitulo": "Cursor, Copilot e Pair Programming com IA",
        "descricao": "Programar com IA ao lado é diferente de programar sozinha. IA sugere, completa, explica e corrige. Este módulo ensina a trabalhar em par com ferramentas como Cursor e GitHub Copilot — acelerando o aprendizado sem criar dependência.",
        "navLabel": "Básico Bem Feito",
        "recursos": [
          {
            "instituicao": "Cursor",
            "nome": "Editor de código com IA integrada",
            "meta": [
              "Gratuito para começar",
              "IA no editor"
            ],
            "url": "https://cursor.com/"
          },
          {
            "instituicao": "Kaggle Learn",
            "nome": "Python — Curso Prático",
            "meta": [
              "~5h",
              "Certificado gratuito"
            ],
            "url": "https://www.kaggle.com/learn/python"
          }
        ],
        "exercicio": {
          "descricao": "Abra o Cursor ou Replit com IA. Peça para criar um script Python que lê um CSV de dados.gov.br e gera um resumo estatístico simples. Tente entender cada linha do código gerado antes de executar.",
          "meta": [
            "⏱️ 2–3 horas",
            "💻 Cursor ou Replit",
            "📂 CSV de dados.gov.br"
          ]
        },
        "dica": "Não aceite código que você não entende. Use a IA para explicar linha por linha. \"O que faz esse for loop?\" é uma pergunta legítima e essencial. Entender o código é o que diferencia uma desenvolvedora de alguém que apenas copia."
      },
      {
        "numero": 3,
        "titulo": "APIs e Integrações",
        "subtitulo": "Conectando Sistemas com Python",
        "descricao": "APIs são o vocabulário dos sistemas modernos. Este módulo ensina a consumir APIs públicas do governo federal, integrar serviços externos e automatizar fluxos via código — sem depender de ferramentas de terceiros.",
        "navLabel": "Virada de Chave",
        "recursos": [
          {
            "instituicao": "Gov.br",
            "nome": "Catálogo de APIs do Governo Federal",
            "meta": [
              "Referência",
              "APIs públicas oficiais"
            ],
            "url": "https://www.gov.br/conecta/catalogo"
          },
          {
            "instituicao": "Replit",
            "nome": "IDE online — Python no navegador",
            "meta": [
              "Gratuito",
              "IA integrada"
            ],
            "url": "https://replit.com/"
          }
        ],
        "exercicio": {
          "descricao": "Consuma uma API pública do governo (ex: API de CEP, API do IBGE ou Portal da Transparência). Escreva um script Python que faz a chamada, processa a resposta e salva em CSV. Documente cada etapa.",
          "meta": [
            "⏱️ 3–4 horas",
            "💻 Python + requests",
            "🔌 API pública gov.br"
          ]
        },
        "dica": "Consumir uma API do governo com código próprio é um salto de autonomia: você deixa de depender de portais com interface limitada e passa a acessar os dados diretamente, no formato que precisa, quando precisa."
      },
      {
        "numero": 4,
        "titulo": "Aplicações com LLMs",
        "subtitulo": "Integrando a API da Anthropic ou OpenAI",
        "descricao": "Você vai escrever código que conversa com modelos de linguagem. Este módulo ensina a chamar a API da Anthropic ou OpenAI via Python, construir fluxos de prompt programáticos e criar ferramentas internas com IA.",
        "navLabel": "Visualização",
        "recursos": [
          {
            "instituicao": "Anthropic",
            "nome": "Documentação da API Claude",
            "meta": [
              "Referência",
              "Oficial"
            ],
            "url": "https://docs.anthropic.com/"
          },
          {
            "instituicao": "OpenAI",
            "nome": "Documentação da API OpenAI",
            "meta": [
              "Referência",
              "Oficial"
            ],
            "url": "https://platform.openai.com/docs"
          }
        ],
        "exercicio": {
          "descricao": "Construa um script Python que recebe um texto (ex: normativos, ofícios) e gera automaticamente: resumo, pontos principais e sugestão de ação — usando a API da Anthropic ou OpenAI. Teste com documentos reais do setor.",
          "meta": [
            "⏱️ 3–5 horas",
            "💻 Python + API LLM",
            "📄 Documentos reais do setor"
          ]
        },
        "dica": "Chamar uma API de IA com código é o nível mais alto de controle: você define o modelo, o prompt, o formato de saída, o limite de tokens e o tratamento de erro. Nenhuma interface gráfica oferece esse nível de personalização."
      },
      {
        "numero": 5,
        "titulo": "Deploy e Manutenção",
        "subtitulo": "Publicar e Manter sua Aplicação",
        "descricao": "Uma aplicação que roda só na sua máquina não serve a ninguém. Este módulo ensina a publicar no Netlify ou Replit, configurar variáveis de ambiente com segurança, monitorar erros e planejar atualizações — o ciclo completo.",
        "navLabel": "Dados + IA",
        "recursos": [
          {
            "instituicao": "Netlify",
            "nome": "Deploy de aplicações web — gratuito",
            "meta": [
              "Gratuito",
              "CI/CD automático"
            ],
            "url": "https://www.netlify.com/"
          },
          {
            "instituicao": "Replit",
            "nome": "Deploy direto do editor",
            "meta": [
              "Gratuito para começar",
              "Python + Node"
            ],
            "url": "https://replit.com/"
          }
        ],
        "exercicio": {
          "descricao": "Publique sua aplicação Python no Netlify ou Replit com URL pública. Configure variáveis de ambiente para proteger suas chaves de API. Escreva um README com instruções de instalação e uso. Compartilhe o repositório.",
          "meta": [
            "⏱️ 3–4 horas",
            "💻 Netlify ou Replit",
            "📁 GitHub ou repositório"
          ]
        },
        "dica": "Nunca coloque chaves de API no código. Variáveis de ambiente existem para proteger credenciais sensíveis. No serviço público, segurança de código é tão importante quanto segurança de documento. Boas práticas desde o primeiro deploy."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Projeto Final",
      "titulo": "Painel de Dados do Seu Setor",
      "intro": "Agora que você completou os 5 módulos, é hora de aplicar tudo em um projeto real. Você vai criar um painel de dados simples e relevante para o seu setor usando dados públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Escolher dados públicos",
          "desc": "Selecione um conjunto de dados relevante para seu trabalho (IBGE, Portal da Transparência, dados abertos do seu órgão)."
        },
        {
          "numero": "2",
          "titulo": "Organizar e limpar",
          "desc": "Use as técnicas de Excel/Planilhas aprendidas no Módulo 2 para organizar, limpar e preparar os dados."
        },
        {
          "numero": "3",
          "titulo": "Criar visualização",
          "desc": "Construa um painel simples no Power BI ou Looker Studio com as visualizações mais importantes (aplicando Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escrever análise",
          "desc": "Produza uma análise de 1-2 páginas com insights principais e recomendações práticas baseadas nos dados."
        }
      ],
      "entrega": "Painel de dados + documento de análise com recomendações para gestores do seu setor."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Você sabe programar.",
        "Com IA ao lado."
      ],
      "descricao": "Completar esta trilha é alcançar o nível mais alto de autonomia tecnológica: você não depende de ferramentas de terceiros para resolver problemas complexos. Você cria as suas."
    },
    "unlockText": "Pensamento Analítico em Dados"
  },
  {
    "slug": "governanca",
    "numero": 7,
    "accentColor": "#60A5FA",
    "titulo": "IA responsável não é restrição. É competência.",
    "subtitulo": "Esta trilha forma servidoras e servidores públicos capazes de usar IA com segurança jurídica, ética institucional e responsabilidade sobre os dados dos cidadãos.",
    "duracao": "⏱️ 15–20 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Projeto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "LGPD no Dia a Dia",
        "subtitulo": "Lei Geral de Proteção de Dados Aplicada ao Serviço Público",
        "descricao": "Você lida com dados de cidadãs todos os dias. CPF, endereço, saúde, renda — dados sensíveis que a LGPD protege. Este módulo traduz a lei em situações reais do serviço público: o que pode, o que não pode e como se proteger.",
        "navLabel": "Despertar Analítico",
        "recursos": [
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Introdução à LGPD",
            "meta": [
              "10h",
              "Gratuito"
            ],
            "url": "https://www.escolavirtual.gov.br/curso/527"
          },
          {
            "instituicao": "ANPD",
            "nome": "Portal da Autoridade Nacional de Proteção de Dados",
            "meta": [
              "Referência",
              "Oficial"
            ],
            "url": "https://www.gov.br/anpd/pt-br"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Privacidade e Segurança da Informação",
            "meta": [
              "Variável",
              "Trilha completa"
            ],
            "url": "https://www.escolavirtual.gov.br/trilha/246"
          }
        ],
        "exercicio": {
          "descricao": "Liste 5 tipos de dados que seu setor coleta ou processa. Para cada um, responda: há base legal para o tratamento? Existe necessidade de consentimento? Como você garantiria a segurança desses dados se usasse IA para processá-los?",
          "meta": [
            "⏱️ 1 hora",
            "📝 Processos reais do setor",
            "⚖️ Análise jurídica prática"
          ]
        },
        "dica": "LGPD não é burocracia — é a moldura jurídica que protege cidadãs e protege você. Uma servidora que usa IA sem conhecer a LGPD está exposta a responsabilização administrativa e penal. Conhecer a lei é parte do cargo."
      },
      {
        "numero": 2,
        "titulo": "Ética em IA",
        "subtitulo": "Vieses, Discriminação e Responsabilidade Algorítmica",
        "descricao": "IA aprende com dados históricos — e dados históricos carregam discriminação histórica. Este módulo ensina a identificar vieses algorítmicos, questionar resultados automatizados e defender os direitos das pessoas afetadas por decisões de IA.",
        "navLabel": "Básico Bem Feito",
        "recursos": [
          {
            "instituicao": "OCDE",
            "nome": "AI Principles — Princípios de IA Responsável",
            "meta": [
              "Referência",
              "Internacional"
            ],
            "url": "https://www.oecd.org/en/topics/sub-issues/ai-principles.html"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "IA Generativa: Ética e Limitações",
            "meta": [
              "~4h",
              "Gratuito"
            ],
            "url": "https://www.escolavirtual.gov.br/curso/1063"
          }
        ],
        "exercicio": {
          "descricao": "Pegue uma tarefa real do seu trabalho (um relatório, um parecer, uma resposta de e-mail). Escreva 3 versões do prompt para a mesma tarefa — simples, estruturado e avançado com persona. Compare os resultados.",
          "meta": [
            "⏱️ 1–2 horas",
            "💻 Claude, ChatGPT ou Gemini",
            "🎯 Tarefa real do trabalho"
          ]
        },
        "dica": "Um bom prompt é como uma instrução de trabalho bem escrita: quem você é, o que quer, qual formato espera e o que deve ser evitado. Treine esse padrão até virar instinto."
      },
      {
        "numero": 3,
        "titulo": "Gestão de Risco",
        "subtitulo": "NIST AI RMF e Frameworks de Risco Aplicados ao Governo",
        "descricao": "Toda implantação de IA no setor público carrega riscos: de precisão, de privacidade, de discriminação, de responsabilização. Este módulo ensina a identificar, classificar e mitigar esses riscos antes de colocar qualquer sistema em produção.",
        "navLabel": "Virada de Chave",
        "recursos": [
          {
            "instituicao": "NIST",
            "nome": "AI Risk Management Framework (AI RMF 1.0)",
            "meta": [
              "Referência técnica",
              "Internacional"
            ],
            "url": "https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf"
          },
          {
            "instituicao": "ANPD",
            "nome": "Radar Tecnológico — IA Generativa",
            "meta": [
              "Leitura",
              "Governo Federal"
            ],
            "url": "https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/documentos-de-publicacoes/radar_tecnologico_ia_generativa_anpd.pdf"
          }
        ],
        "exercicio": {
          "descricao": "Escolha uma iniciativa de IA existente no seu órgão ou em outro órgão federal. Aplique uma matriz de risco simples: probabilidade × impacto para os principais riscos identificados. Proponha 3 medidas de mitigação concretas.",
          "meta": [
            "⏱️ 2–3 horas",
            "📊 Matriz de risco",
            "🏛️ Iniciativa real de IA pública"
          ]
        },
        "dica": "A pergunta não é \"a IA funciona?\" mas \"funciona para quem e a que custo?\" Gestão de risco em IA pública exige pensar nos grupos mais vulneráveis primeiro — as pessoas que têm menos recursos para contestar uma decisão errada."
      },
      {
        "numero": 4,
        "titulo": "Uso Responsável no Trabalho",
        "subtitulo": "Limites, Validação Humana e Responsabilização",
        "descricao": "Onde a IA pode decidir sozinha? Onde precisa de validação humana? Onde não deve ser usada? Este módulo estabelece os critérios para essas respostas — e como documentar suas escolhas de forma a proteger você e a instituição.",
        "navLabel": "Visualização",
        "recursos": [
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Uso Responsável de IA no Setor Público",
            "meta": [
              "~8h",
              "Certificado"
            ],
            "url": "https://www.escolavirtual.gov.br/curso/1063"
          },
          {
            "instituicao": "CGU",
            "nome": "Integridade e Transparência no Serviço Público",
            "meta": [
              "Referência",
              "Governo Federal"
            ],
            "url": "https://www.gov.br/cgu/pt-br"
          }
        ],
        "exercicio": {
          "descricao": "Elabore uma política de uso de IA para o seu setor de no máximo 1 página. Deve conter: o que é permitido, o que requer aprovação superior, o que é proibido e como registrar o uso. Compartilhe com sua chefia para feedback.",
          "meta": [
            "⏱️ 2 horas",
            "📝 Editor de texto",
            "🏛️ Política setorial de IA"
          ]
        },
        "dica": "Documentar o uso de IA não é burocracia adicional: é proteção. Se um resultado gerado por IA for questionado, você precisa demonstrar que exerceu julgamento humano. Esse registro é sua prova de responsabilidade profissional."
      },
      {
        "numero": 5,
        "titulo": "Governança Institucional",
        "subtitulo": "Políticas, Normas e Estruturas de Governança de IA",
        "descricao": "Governança de IA não é só tecnologia — é política pública, estrutura organizacional e cultura institucional. Este módulo apresenta os marcos normativos brasileiros e internacionais e como você pode ser agente de mudança na sua instituição.",
        "navLabel": "Dados + IA",
        "recursos": [
          {
            "instituicao": "MCTI",
            "nome": "Estratégia Brasileira de Inteligência Artificial",
            "meta": [
              "Referência",
              "Política Nacional"
            ],
            "url": "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/inteligenciaartificial"
          },
          {
            "instituicao": "ENAP • EV.G",
            "nome": "Transformação Digital e Governança de IA",
            "meta": [
              "~8h",
              "Certificado"
            ],
            "url": "https://www.escolavirtual.gov.br/curso/1063"
          }
        ],
        "exercicio": {
          "descricao": "Pesquise se o seu órgão tem política ou diretriz interna sobre uso de IA. Se sim, analise: está alinhada com a EBIA e a LGPD? Tem lacunas? Se não existe, escreva uma proposta de 1 página para seu gestor de TI ou chefia imediata.",
          "meta": [
            "⏱️ 2–3 horas",
            "📝 Pesquisa interna + escrita",
            "🏛️ Proposta para o órgão"
          ]
        },
        "dica": "Servidoras que entendem governança de IA têm vantagem estratégica: são as que conseguem traduzir riscos para gestores, propor políticas internas e liderar a transição responsável dos seus setores. Esse é o perfil que o serviço público precisa."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Projeto Final",
      "titulo": "Política de IA para o Seu Setor",
      "intro": "Você vai elaborar uma política setorial de uso de IA — um documento real, que pode ser apresentado à sua chefia e usado como referência no seu órgão.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Mapear o contexto",
          "desc": "Identifique quais processos do seu setor já usam ou poderiam usar IA. Documente os dados envolvidos e as bases legais aplicáveis."
        },
        {
          "numero": "2",
          "titulo": "Classificar riscos",
          "desc": "Aplique a matriz de risco do Módulo 3 aos processos mapeados. Classifique por probabilidade e impacto."
        },
        {
          "numero": "3",
          "titulo": "Redigir a política",
          "desc": "Escreva a política com: escopo, o que é permitido, o que requer validação humana, o que é proibido e como registrar o uso."
        },
        {
          "numero": "4",
          "titulo": "Apresentar e validar",
          "desc": "Apresente a proposta para sua chefia ou equipe. Registre o feedback e faça uma versão revisada pronta para uso."
        }
      ],
      "entrega": "Política setorial de uso de IA — documento de 2 a 3 páginas, pronto para ser apresentado à chefia do seu órgão."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Você usa IA com segurança jurídica,",
        "ética e responsabilidade."
      ],
      "descricao": "Completar esta trilha é tornar-se a servidora que sua instituição precisa: capaz de adotar IA com responsabilidade, proteger dados de cidadãs e liderar a governança digital do seu setor."
    },
    "unlockText": "Pensamento Analítico em Dados"
  }
]
