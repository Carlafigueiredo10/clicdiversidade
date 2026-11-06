import ModuloCard from './ModuloCard'
import { tr } from '../../i18n'

const MODULOS = [
  {
    numero: '01',
    icon: '\u{1F9F0}',
    titulo: tr({ pt: 'Ferramentas de IA', es: 'Herramientas de IA' }),
    descricao: tr({
      pt: 'Catálogo curado com 120+ ferramentas de IA separadas por categoria, nível de gratuidade e controle de dados.',
      es: 'Catálogo curado con más de 120 herramientas de IA organizadas por categoría, nivel de gratuidad y control de datos. (Contenido en portugués.)',
    }),
    stats: [
      { value: 'Catálogo', label: tr({ pt: 'Ferramentas', es: 'Herramientas' }) },
      { value: '↗', label: 'ClicEdu' },
    ],
    ctaText: tr({ pt: 'Explorar catálogo', es: 'Explorar catálogo' }),
    to: 'https://clicedu.com.br/ferramentas',
    external: true,
    disponivel: true,
  },
  {
    numero: '02',
    icon: '\u{1F9ED}',
    titulo: tr({ pt: 'Trilhas de Aprendizagem', es: 'Rutas de Aprendizaje' }),
    descricao: tr({
      pt: '7 trilhas independentes com 5 módulos + projeto final cada uma. Do fundamento em dados à programação com IA e governança.',
      es: '7 rutas independientes, cada una con 5 módulos y un proyecto final. Desde los fundamentos de datos hasta la programación con IA y la gobernanza.',
    }),
    stats: [
      { value: tr({ pt: 'Trilhas', es: 'Rutas' }), label: tr({ pt: '+ projeto final', es: '+ proyecto final' }) },
    ],
    ctaText: tr({ pt: 'Descobrir sua trilha', es: 'Descubrir tu ruta' }),
    to: '/modulos/trilhas',
    disponivel: true,
  },
  {
    numero: '03',
    icon: '\u{1F393}',
    titulo: tr({ pt: 'Material da Oficina', es: 'Material del Taller' }),
    descricao: tr({
      pt: 'As apresentações da oficina Humanos no Comando: a visão que abre o programa, a abertura cinematográfica e as palestras — da lógica invisível por trás do código a quem decide o futuro da IA.',
      es: 'Las presentaciones del taller Humanos al Mando: la visión que abre el programa, la apertura cinematográfica y las conferencias — de la lógica invisible detrás del código a quién decide el futuro de la IA.',
    }),
    // Sem contagem de proposito: apresentacao nova entra em oficina/data.js e
    // o card continua certo, sem ninguem precisar lembrar de atualizar numero.
    stats: [
      {
        value: tr({ pt: 'Apresentações', es: 'Presentaciones' }),
        label: tr({ pt: 'base', es: 'base' }),
      },
    ],
    ctaText: tr({ pt: 'Ver material', es: 'Ver material' }),
    to: '/modulos/oficina',
    disponivel: true,
  },
  {
    numero: '04',
    icon: '\u{1FA84}',
    titulo: tr({ pt: 'Engenharia de Prompts', es: 'Ingeniería de Prompts' }),
    descricao: tr({
      pt: 'Técnicas para conversar com IAs e obter resultados precisos e profissionais.',
      es: 'Técnicas para conversar con las IA y obtener resultados precisos y profesionales.',
    }),
    stats: [
      { value: tr({ pt: 'Método', es: 'Método' }), label: 'PTCFSL' },
      { value: '~20min', label: tr({ pt: 'Módulo', es: 'Módulo' }) },
    ],
    ctaText: tr({ pt: 'Acessar conteúdo', es: 'Ver contenido' }),
    to: '/modulos/engenharia-prompt',
    disponivel: true,
  },
  {
    numero: '05',
    icon: '\u{1F3D7}\u{FE0F}',
    titulo: tr({ pt: 'Construindo Tecnologia', es: 'Construyendo Tecnología' }),
    descricao: tr({
      pt: 'O módulo prático da oficina — crie seu primeiro app na Lovable em 20 minutos. Roteiro com prompts prontos do zero ao deploy.',
      es: 'El módulo práctico del taller — crea tu primera app en Lovable en 20 minutos. Guía con prompts listos, desde cero hasta la publicación.',
    }),
    stats: [
      { value: tr({ pt: 'Roteiro', es: 'Guía' }), label: tr({ pt: 'com prompts prontos', es: 'con prompts listos' }) },
    ],
    ctaText: tr({ pt: 'Começar a construir', es: 'Empezar a construir' }),
    to: '/modulos/construindo-tecnologia',
    disponivel: true,
  },
  {
    numero: '06',
    icon: '\u{2696}\u{FE0F}',
    titulo: tr({ pt: 'Governança de IA', es: 'Gobernanza de IA' }),
    descricao: tr({
      pt: 'Agente de mediação de risco, autoavaliação de impacto ético (AIE) e base teórica unificada para IA responsável no setor público.',
      es: 'Agente de mediación de riesgos, autoevaluación de impacto ético (AIE) y base teórica unificada para una IA responsable en el sector público.',
    }),
    stats: [
      { value: 'Framework', label: '+ agente + AIE' },
    ],
    ctaText: tr({ pt: 'Acessar governança', es: 'Ver gobernanza' }),
    to: '/modulos/governanca',
    disponivel: true,
  },
  {
    numero: '07',
    icon: '\u{1F916}',
    titulo: tr({ pt: 'Ensinando a IA a trabalhar do seu jeito', es: 'Enseñarle a la IA a trabajar a tu manera' }),
    descricao: tr({
      pt: 'Além do chat: projeto, assistente, skill e conector — quando usar cada um, passo a passo no Gemini e um catálogo de agentes prontos para copiar ou baixar.',
      es: 'Más allá del chat: proyecto, asistente, skill y conector — cuándo usar cada uno, paso a paso en Gemini y un catálogo de agentes listos para copiar o descargar.',
    }),
    stats: [
      { value: tr({ pt: 'Degraus', es: 'Escalones' }), label: tr({ pt: 'do chat ao agente', es: 'del chat al agente' }) },
    ],
    ctaText: tr({ pt: 'Subir a escada', es: 'Subir la escalera' }),
    to: '/modulos/criando-assistente',
    disponivel: true,
  },
  {
    numero: '08',
    icon: '\u{1F9ED}',
    titulo: tr({ pt: 'Antes de construir ou contratar', es: 'Antes de construir o contratar' }),
    descricao: tr({
      pt: 'Dois guias para o momento da decisão: como estruturar um projeto antes de tirá-lo do papel, e o que perguntar antes de assinar um contrato de IA.',
      es: 'Dos guías para el momento de decidir: cómo estructurar un proyecto antes de ponerlo en marcha, y qué preguntar antes de firmar un contrato de IA.',
    }),
    stats: [
      { value: tr({ pt: 'Guias', es: 'Guías' }), label: tr({ pt: 'antes de decidir', es: 'antes de decidir' }) },
    ],
    ctaText: tr({ pt: 'Ver os guias', es: 'Ver las guías' }),
    to: '/modulos/antes-de-construir',
    disponivel: true,
  },
  {
    numero: '09',
    icon: '\u{1F50D}',
    titulo: tr({ pt: 'Auditando dados e decisões', es: 'Auditando datos y decisiones' }),
    descricao: tr({
      pt: 'Para o sistema que já existe: as perguntas técnicas que revelam o viés antes que ele decida por você. Origem, proxy, erro e decisão.',
      es: 'Para el sistema que ya existe: las preguntas técnicas que revelan el sesgo antes de que decida por ti. Origen, proxy, error y decisión.',
    }),
    stats: [
      { value: tr({ pt: 'Perguntas', es: 'Preguntas' }), label: tr({ pt: 'técnicas de auditoria', es: 'técnicas de auditoría' }) },
    ],
    ctaText: tr({ pt: 'Abrir guia', es: 'Abrir guía' }),
    to: '/jornada/modulos/auditando-dados-e-decisoes.html',
    external: true,
    disponivel: true,
  },
  {
    // Copilot / Microsoft 365 vive no CLIC Prisma (plataforma irma), como as
    // ferramentas vivem no clicedu da Dorina.
    numero: '10',
    icon: '\u{1FA9F}',
    titulo: tr({ pt: 'Ecossistema Copilot', es: 'Ecosistema Copilot' }),
    descricao: tr({
      pt: 'O Microsoft 365 aplicativo por aplicativo — o que cada um resolve e o que a sua conta já abre — e como criar assistentes no Copilot. Conteúdo no CLIC Prisma, a plataforma irmã dedicada ao ecossistema Microsoft.',
      es: 'Microsoft 365 aplicación por aplicación — qué resuelve cada una y qué ya abre tu cuenta — y cómo crear asistentes en Copilot. Contenido en CLIC Prisma, la plataforma hermana dedicada al ecosistema Microsoft (en portugués).',
    }),
    stats: [
      { value: 'M365', label: tr({ pt: 'Ecossistema', es: 'Ecosistema' }) },
      { value: '↗', label: 'CLIC Prisma' },
    ],
    ctaText: tr({ pt: 'Abrir no CLIC Prisma', es: 'Abrir en CLIC Prisma' }),
    to: 'https://clicprisma.ia.br/modulos/conhecendo-o-ecossistema',
    external: true,
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
