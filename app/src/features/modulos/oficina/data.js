// Estrutura da oficina "Humanos no Comando".
// Cada bloco aponta para onde o conteúdo vive: apresentação HTML standalone,
// outro módulo do app (link interno), ou template específico dentro de um módulo.

export const BLOCOS = [
  {
    numero: '01',
    titulo: 'Quebrando o mito',
    descricao:
      'Tecnologia orientada por pessoas. Apresentação cinematográfica de abertura: pensamento estruturado, a lógica invisível por trás do código e a virada de chave.',
    duracao: '~15 min',
    cta: 'Abrir apresentação',
    href: '/modulos/oficina/quebrando-o-mito',
    external: false,
    tipo: 'apresentacao',
  },
  {
    numero: '03',
    titulo: 'Engenharia de prompt',
    descricao:
      'Da instrução à maestria: método PTCF, prompt mestre e técnicas avançadas. Conteúdo vive no Módulo 03.',
    duracao: '~25 min',
    cta: 'Acessar Módulo 03',
    href: '/modulos/engenharia-prompt',
    external: false,
    tipo: 'modulo',
  },
  {
    numero: '04',
    titulo: 'Criação de um assistente',
    descricao:
      'Como criar um Gem, Custom GPT ou Custom Instructions a partir de um Prompt Mestre. Conteúdo e templates copy/paste no Módulo 03.',
    duracao: '~15 min',
    cta: 'Acessar Módulo 03',
    href: '/modulos/engenharia-prompt',
    external: false,
    tipo: 'modulo',
  },
  {
    numero: '05',
    titulo: 'Criação de um app',
    descricao:
      'Do prompt ao deploy em 20 minutos com a Lovable. Roteiro completo no Módulo 04.',
    duracao: '~20 min',
    cta: 'Acessar Módulo 04',
    href: '/modulos/construindo-tecnologia',
    external: false,
    tipo: 'modulo',
  },
]
