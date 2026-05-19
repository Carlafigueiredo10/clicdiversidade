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
    to: 'https://clicedu.com.br/ferramentas',
    external: true,
    disponivel: true,
  },
  {
    numero: '02',
    icon: '\u{1F9ED}',
    titulo: 'Trilhas de Aprendizagem',
    descricao:
      '7 trilhas independentes com 5 módulos + projeto final cada uma. Do fundamento em dados à programação com IA e governança.',
    stats: [
      { value: '7', label: 'Trilhas' },
      { value: '35', label: 'Módulos' },
    ],
    ctaText: 'Descobrir sua trilha',
    to: '/modulos/trilhas',
    disponivel: true,
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
      'Roteiro completo da oficina Humanos no Comando. 4 blocos, apresentação cinematográfica de abertura e ponteiros para os módulos.',
    stats: [
      { value: '4', label: 'Blocos' },
      { value: '80min', label: 'Oficina' },
    ],
    ctaText: 'Ver roteiro',
    to: '/modulos/oficina',
    disponivel: true,
  },
  {
    numero: '06',
    icon: '\u{2696}\u{FE0F}',
    titulo: 'Governança de IA',
    descricao:
      'Agente de mediação de risco, autoavaliação de impacto ético (AIE) e base teórica unificada para IA responsável no setor público.',
    stats: [
      { value: '3', label: 'Frentes' },
      { value: '24+', label: 'Refs' },
    ],
    ctaText: 'Acessar governança',
    to: '/modulos/governanca',
    disponivel: true,
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
