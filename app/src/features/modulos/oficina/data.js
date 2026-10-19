// Estrutura da oficina "Humanos no Comando".
// Aqui vive apenas o material proprio da oficina — as apresentacoes de abertura.
// Os demais conteudos usados em sala tem card proprio na grade de Modulos e
// nao sao reindexados aqui.
// `rotulo` substitui o "BLOCO NN" do card quando o item nao e um passo do
// roteiro (ex.: a visao do programa, que abre tudo).

export const BLOCOS = [
  {
    numero: '00',
    rotulo: 'VISÃO',
    titulo: 'Desde a origem',
    descricao:
      'A visão que abre o programa: IA pública com diversidade, inclusão e responsabilidade desde o primeiro traço — não como ajuste posterior.',
    duracao: '7 slides',
    cta: 'Abrir apresentação',
    href: '/modulos/oficina/desde-a-origem',
    external: false,
    tipo: 'apresentacao',
  },
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
]
