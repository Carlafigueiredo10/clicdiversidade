// Base Teórica unificada: Servidoras no Comando (eixos 1-4) + Agente de Governança de IA (eixos 5-6).
// Linguagem ajustada para inclusiva onde aplicável.

export const EIXOS = [
  {
    id: 'mulheres-tecnologia',
    icon: '👩‍💻',
    titulo: 'Mulheres na Tecnologia, Efeito Matilda e Síndrome do Impostor',
    subtitulo:
      'Estudos que embasam a compreensão sobre as barreiras estruturais, o apagamento histórico das mulheres na ciência e os desafios de permanência no setor tecnológico.',
    refs: [
      {
        titulo: 'Mulheres na informática: quais foram as pioneiras?',
        meta: {
          Autores:
            'Juliana Schwartz, Lindamir S. Casagrande, Sonia A. C. Leszczynski, Marilia G. de Carvalho',
          Publicação: 'Cadernos Pagu / SciELO (2006)',
        },
        descricao:
          'Artigo fundamental que resgata a história de mulheres como Ada Lovelace e as programadoras do ENIAC, desmistificando a ideia de que a computação é um território inerentemente masculino.',
        link: 'https://www.scielo.br/',
        linkText: 'Acessar no SciELO',
      },
      {
        titulo:
          'Julia Hall e o Desenvolvimento do Processo Hall-Héroult: o Efeito Matilda na História da Indústria Química',
        meta: {
          Autor: 'Lucas dos S. Fernandes',
          Publicação: 'Revista Química Nova na Escola (QNEsc)',
        },
        descricao:
          'Aborda o "Efeito Matilda" — fenômeno em que descobertas de cientistas mulheres são atribuídas a homens — base teórica crucial para entendermos a invisibilidade feminina na tecnologia.',
      },
      {
        titulo: 'Síndrome do Impostor no Mercado de Tecnologia da Informação',
        meta: {
          Autores:
            'Luan G. de Souza, Luana Morais, Cintia Kleine, Lucas Schreiber (Orientação: Mariana Neumann)',
          Publicação: 'TCC — Centro Universitário Unisociesc (2022)',
        },
        descricao:
          'Estudo focado em como o Fenômeno do Impostor afeta a saúde mental de profissionais na área de TI, com base na escala de Pauline Rose Clance.',
      },
      {
        titulo:
          'Barreiras e Desafios Enfrentados Pelas Mulheres no Ambiente Acadêmico e Organizacional do Setor de TI',
        meta: {
          Autores: 'Patrícia Queiroz Ferreira e Janaina Maria Bueno',
          Publicação: 'Anais da ANPAD / Universidade Federal de Uberlândia',
        },
        descricao:
          'Mapeia os desafios diários, a cultura androcêntrica (masculinizada) e o "labirinto organizacional" que dificultam a ascensão de mulheres em TI.',
      },
      {
        titulo:
          'Por que as mulheres saem da área de tecnologia — e como evitar isso',
        meta: {
          Autora: 'Rachel Thomas (Tradução: Maria Lab / PrograMaria)',
          Publicação: 'Portal PrograMaria (2016)',
        },
        descricao:
          'Traz dados estatísticos sobre a evasão feminina na tecnologia e propõe estratégias de rede de apoio e reconhecimento de ideias.',
      },
      {
        titulo:
          'O Fenômeno Teto de Vidro na Ascensão à Posição Hierárquica das Mulheres no Mercado Formal',
        meta: {
          Autores: 'Caroline Dantas Rocha et al.',
          Publicação:
            'XI Simpósio de Excelência em Gestão e Tecnologia (AEDB)',
        },
        descricao:
          'Analisa a barreira sutil e transparente (Glass Ceiling) que impede a passagem das mulheres aos níveis hierárquicos mais elevados de liderança.',
      },
      {
        titulo: 'Agenda Transversal Mulheres no PPA 2024–2027',
        meta: {
          Publicação:
            'Ministério do Planejamento e Orçamento (MPO) / Governo Federal',
        },
        descricao:
          'Documento oficial que alinha o letramento digital feminino com as políticas de Estado, focando na autonomia econômica e igualdade de decisão e poder.',
      },
    ],
  },
  {
    id: 'letramento-digital',
    icon: '🧠',
    titulo: 'Letramento Digital e Cibercultura',
    subtitulo:
      'Estudos que definem o letramento digital não apenas como o uso de ferramentas, mas como o desenvolvimento de um pensamento crítico, autoral e cidadão perante a máquina.',
    refs: [
      {
        titulo:
          'Novas Práticas de Leitura e Escrita: Letramento na Cibercultura',
        meta: {
          Autora: 'Magda Soares',
          Publicação: 'Revista Educação e Sociedade / SciELO (2002)',
        },
        descricao:
          'Obra inaugural no Brasil que diferencia a cultura do papel da cibercultura, definindo o conceito amplo de letramentos digitais.',
      },
      {
        titulo:
          'Literacia Digital: Um guia para promover práticas educativas com tecnologias digitais',
        meta: {
          Autores: 'Mauricio Capobianco Lopes e Bruna Hamann',
          Publicação:
            'Revista Brasileira de Ensino de Ciência e Tecnologia — RBECT (2025)',
        },
        descricao:
          'Guia que estrutura o letramento digital em eixos práticos (pesquisa, desenvolvimento, comunicação, colaboração e avaliação) para formar cidadãos críticos.',
      },
      {
        titulo: 'BNCC e a Cultura Digital',
        meta: {
          Publicação:
            'CIEB (Centro de Inovação para a Educação Brasileira)',
        },
        descricao:
          'Base legal e curricular que fundamenta a transição de um ensino tradicional para a inclusão tecnológica, defendendo que a tecnologia deve servir para criar soluções — e não apenas para consumo.',
      },
    ],
  },
  {
    id: 'ia-prompt-vibe-coding',
    icon: '🚀',
    titulo: 'Inteligência Artificial, Engenharia de Prompt e Vibe Coding',
    subtitulo:
      'Referências práticas e teóricas sobre a nova linguagem de programação (o português) e a criação de softwares sem código (No-Code).',
    refs: [
      {
        titulo: 'IA Generativa para Lideranças Públicas: Do Comando à Maestria',
        meta: { Tipo: 'Material base da oficina' },
        descricao:
          'Guia prático de Engenharia de Prompt para lideranças na gestão pública. Ensina o método PTCF (Persona, Tarefa, Contexto, Formato e Limites) e a criação de "Prompts Mestres".',
      },
      {
        titulo:
          'Não é programador? Sem problemas: 5 caminhos para entrar no mundo da IA',
        meta: { Publicação: 'Portal Exame (Outubro, 2025)' },
        descricao:
          'Artigo que comprova a viabilidade de profissionais de áreas não técnicas (Direito, Administração) migrarem para a tecnologia através de ferramentas Low-Code/No-Code.',
      },
      {
        titulo: 'A Revolução do Vibe Coding e Ferramentas No-Code',
        meta: { Tipo: 'Material de apoio técnico (vídeos)' },
        descricao:
          'Material sobre as plataformas Lovable e Base44 utilizadas nas oficinas práticas de criação de aplicativos.',
        videos: [
          'Crie sites e apps em menos de 5 minutos com o LOVABLE — Canal Karine Lago',
          'Curso Lovable Gratuito para Iniciantes — Canal NoCode StartUp',
          'BASE44, seria melhor que LOVABLE para criar APPs com IA? — Canal Codando Sem Codar',
        ],
      },
    ],
  },
  {
    id: 'inovacao-publica',
    icon: '📋',
    titulo: 'Inovação Pública e Metodologia de Facilitação',
    subtitulo:
      'Materiais que nortearam o design de experiência, gestão de tempo e metodologias ativas aplicadas durante a oficina presencial.',
    refs: [
      {
        titulo: 'Guia Prático para Planejamento de Reuniões e Oficinas',
        meta: {
          Autor: 'Rodrigo Mota Narcizo',
          Publicação:
            'Rede Conexão Inovação Pública (Fevereiro, 2026)',
        },
        descricao:
          'Playbook interativo que forneceu as diretrizes de governança, o Canvas de Planejamento e as "regras de ouro" (como a Carta na Manga/Plano B logístico) aplicados no design do evento.',
      },
    ],
  },
  {
    id: 'marco-normativo-ia',
    icon: '⚖️',
    titulo: 'Marco Normativo de IA no Setor Público',
    subtitulo:
      'Arcabouço legal e regulatório que sustenta a análise de risco e a governança de IA no Estado brasileiro. Cada item está amarrado ao conceito que ele ancora e ao ponto onde esse conceito opera.',
    refs: [
      {
        titulo: 'Lei nº 13.709/2018 — LGPD',
        descricao:
          'Finalidade, adequação, necessidade, não discriminação, prestação de contas. Base do tratamento de dados pessoais e sensíveis em toda a análise, e do direito à revisão de decisões automatizadas (art. 20).',
      },
      {
        titulo: 'Lei nº 12.527/2011 — LAI',
        descricao:
          'Transparência ativa e passiva, dever de motivação dos atos. Base do princípio de que decisão de impacto público precisa ser explicável e contestável.',
      },
      {
        titulo: 'Portaria MGI nº 3.485/2026',
        descricao:
          'Política de Governança de IA no MGI: o arcabouço normativo que o agente executa. Uso de IA generativa restrito a informação pública como regra, supervisão humana proporcional ao risco, identificação de conteúdo apoiado por IA, notificação de incidentes ao SCIA.',
      },
      {
        titulo: 'Framework AIE (Autoavaliação de Impacto Ético) — MGI',
        descricao:
          'Define o conceito de Risco Excessivo: usos vedados por contrariarem direitos fundamentais. Base das Red Lines do agente.',
      },
      {
        titulo: 'Plano Brasileiro de Inteligência Artificial (PBIA)',
        descricao:
          'Diretrizes éticas e meta de adoção de IA com critérios éticos nos órgãos do SISP.',
      },
      {
        titulo: 'Constituição Federal',
        descricao:
          'Legalidade, impessoalidade, moralidade, publicidade e eficiência (art. 37); devido processo (art. 5º, LIV); não discriminação (art. 3º, IV). Chão de todos os motores.',
      },
      {
        titulo: 'Lei nº 12.288/2010 — Estatuto da Igualdade Racial',
        descricao:
          'Base para exigir meta de diversidade declarada em contextos de seleção, ranqueamento e alocação.',
      },
      {
        titulo: 'Lei nº 13.146/2015 — Lei Brasileira de Inclusão',
        descricao:
          'Acessibilidade e não discriminação como direitos transversais. Sustenta o eixo representativo da composição da supervisão.',
      },
      {
        titulo: 'Lei nº 14.133/2021 — Lei de Licitações',
        descricao:
          'Promoção do desenvolvimento sustentável e da igualdade nos contratos públicos. Relevante na contratação de soluções de IA de mercado.',
      },
      {
        titulo: 'UNESCO — Recomendação sobre a Ética da IA (2021)',
        descricao:
          'Linhagem internacional do framework brasileiro. Supervisão humana, transparência, proporcionalidade e abordagem baseada em direitos humanos são influência upstream da Portaria e do AIE.',
      },
      {
        titulo:
          'União Europeia — Ethics Guidelines for Trustworthy AI (2019) e AI Act',
        descricao:
          'A abordagem de risco em camadas que inspira a escala de classificação do agente; "Risco Excessivo" ecoa a categoria de "unacceptable risk", e as Red Lines lembram as práticas proibidas.',
      },
    ],
  },
  {
    id: 'justica-dados',
    icon: '🧭',
    titulo: 'Justiça de Dados e Crítica Algorítmica',
    subtitulo:
      'Base teórica que fundamenta a tese de que diversidade é arquitetura, não acessório — e que falhas algorítmicas refletem desigualdades históricas, não acidentes.',
    refs: [
      {
        titulo: 'Tarcízio Silva — Racismo Algorítmico (2022)',
        descricao:
          'Ancora o tratamento de viés herdado dos dados de treinamento, a armadilha da otimização-para-fit e a alocação distributiva que reproduz segregação de perfis por setor. Algoritmo treinado no status quo reproduz desigualdade estrutural.',
      },
      {
        titulo: 'Virginia Eubanks — Automating Inequality (2018)',
        descricao:
          'Ancora o alerta de não automatizar a burocracia: eficiência para o órgão não é entrega para a pessoa, e a automação no setor público pode racionar acesso, vigiar e punir, vestida de modernização.',
      },
      {
        titulo: 'Sasha Costanza-Chock — Design Justice (2020)',
        descricao:
          'Ancora a composição da supervisão (representativa e epistêmica), o "demandante ≠ executor" e a própria tese de que diversidade é arquitetura. Quem o sistema afeta precisa estar na sala onde ele é desenhado.',
      },
      {
        titulo: 'Ruha Benjamin — Race After Technology (2019)',
        descricao:
          'Ancora a ideia de que a neutralidade aparente do modelo é o próprio mecanismo do viés, e o "desconfie do polido". Tecnologia discriminatória vestida de neutra ou progressista.',
      },
      {
        titulo: 'Safiya Noble — Algorithms of Oppression (2018)',
        descricao:
          'Reforça, junto com Benjamin, o mito da neutralidade algorítmica em sistemas de busca e ranqueamento.',
      },
      {
        titulo: "Catherine D'Ignazio e Lauren Klein — Data Feminism (2020)",
        descricao:
          'Ancora a passagem de "ética de dados" para "justiça de dados": falhas algorítmicas não são acidentes esporádicos, são evidência de como um sistema desigual opera normalmente. Sustenta a pergunta deslocada de "os dados têm viés?" para "a base reflete opressões históricas?".',
      },
    ],
  },
]
