// Estrutura da oficina "Humanos no Comando".
// Aqui vive apenas o material proprio da oficina — as apresentacoes de abertura.
// Os demais conteudos usados em sala tem card proprio na grade de Modulos e
// nao sao reindexados aqui.
// `rotulo` substitui o "BLOCO NN" do card quando o item nao e um passo do
// roteiro (ex.: a visao do programa, que abre tudo).
import { tr } from '../../../i18n'

export const BLOCOS = [
  {
    numero: '00',
    rotulo: tr({ pt: 'VISÃO', es: 'VISIÓN' }),
    titulo: tr({ pt: 'Desde a origem', es: 'Desde el origen' }),
    descricao: tr({
      pt: 'A visão que abre o programa: IA pública com diversidade, inclusão e responsabilidade desde o primeiro traço — não como ajuste posterior.',
      es: 'La visión que abre el programa: IA pública con diversidad, inclusión y responsabilidad desde el primer trazo — no como un ajuste posterior.',
    }),
    duracao: tr({ pt: '7 slides', es: '7 diapositivas' }),
    cta: tr({ pt: 'Abrir apresentação', es: 'Abrir presentación' }),
    href: '/modulos/oficina/desde-a-origem',
    external: false,
    tipo: 'apresentacao',
  },
  {
    numero: '01',
    titulo: tr({ pt: 'Quebrando o mito', es: 'Rompiendo el mito' }),
    descricao: tr({
      pt: 'Tecnologia orientada por pessoas. Apresentação cinematográfica de abertura: pensamento estruturado, a lógica invisível por trás do código e a virada de chave.',
      es: 'Tecnología orientada por personas. Presentación cinematográfica de apertura: pensamiento estructurado, la lógica invisible detrás del código y el cambio de mirada.',
    }),
    duracao: '~15 min',
    cta: tr({ pt: 'Abrir apresentação', es: 'Abrir presentación' }),
    href: '/modulos/oficina/quebrando-o-mito',
    external: false,
    tipo: 'apresentacao',
  },
  {
    numero: '02',
    rotulo: tr({ pt: 'PALESTRA', es: 'CONFERENCIA' }),
    titulo: tr({ pt: 'Ponte ou precipício', es: 'Puente o precipicio' }),
    descricao: tr({
      pt: 'Palestra de Montevidéu: inteligência artificial, dados e quem decide o futuro.',
      es: 'Conferencia en Montevideo: inteligencia artificial, datos y quién decide el futuro.',
    }),
    duracao: tr({ pt: '21 slides', es: '21 diapositivas' }),
    cta: tr({ pt: 'Abrir apresentação', es: 'Abrir presentación' }),
    href: '/modulos/oficina/ponte-ou-precipicio',
    external: false,
    tipo: 'apresentacao',
  },
]
