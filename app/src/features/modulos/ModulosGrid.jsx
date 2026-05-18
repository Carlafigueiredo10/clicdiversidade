import ModuloCard from './ModuloCard'

const MODULOS = [
  {
    numero: '01',
    icon: '\u{1F9F0}',
    titulo: 'Ferramentas de IA',
    descricao:
      'Catálogo curado com 120+ ferramentas de IA separadas por categoria, nível de gratuidade e controle de dados.',
    stats: [
      { value: '120+', label: 'Ferramentas' },
      { value: '10', label: 'Categorias' },
    ],
    ctaText: 'Explorar catálogo',
    to: '/modulos/ferramentas',
    disponivel: true,
  },
  {
    numero: '02',
    icon: '\u{1F9ED}',
    titulo: 'Trilhas de Aprendizagem',
    descricao:
      '5 trilhas progressivas com diagnóstico inteligente que sugere seu caminho, de autonomia digital a programação com IA.',
    stats: [
      { value: '5', label: 'Trilhas' },
      { value: '6-30h', label: 'Duração' },
    ],
    ctaText: 'Descobrir sua trilha',
    disponivel: false,
  },
  {
    numero: '03',
    icon: '\u{1FA84}',
    titulo: 'Engenharia de Prompts',
    descricao:
      'Técnicas para conversar com IAs e obter resultados precisos e profissionais.',
    stats: [
      { value: '15', label: 'Slides' },
      { value: '~20min', label: 'Módulo' },
    ],
    ctaText: 'Acessar conteúdo',
    to: '/modulos/engenharia-prompt',
    disponivel: true,
  },
  {
    numero: '04',
    icon: '\u{1F3D7}\u{FE0F}',
    titulo: 'Construindo Tecnologia',
    descricao:
      'O módulo prático da oficina — crie seu primeiro app na Lovable em 20 minutos. Roteiro com prompts prontos do zero ao deploy.',
    stats: [
      { value: '7', label: 'Etapas' },
      { value: '15+', label: 'Prompts' },
    ],
    ctaText: 'Começar a construir',
    to: '/modulos/construindo-tecnologia',
    disponivel: true,
  },
  {
    numero: '05',
    icon: '\u{1F393}',
    titulo: 'Material da Oficina',
    descricao:
      'Slides, cards e conteúdo dos 3 blocos da oficina Servidoras no Comando Digital — Convergência.',
    stats: [
      { value: '5', label: 'Materiais' },
      { value: '80min', label: 'Oficina' },
    ],
    ctaText: 'Ver materiais',
    disponivel: false,
  },
  {
    numero: '06',
    icon: '\u{1F6A7}',
    titulo: 'Em construção',
    descricao:
      'Novo módulo em desenvolvimento. Tema será definido em breve com base nas necessidades da comunidade.',
    disponivel: false,
  },
]

export default function ModulosGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {MODULOS.map((m) => (
        <ModuloCard key={m.numero} {...m} />
      ))}
    </div>
  )
}
