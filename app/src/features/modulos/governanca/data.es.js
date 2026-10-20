// Version en espanol de data.pt.js (mismo formato: EIXOS).
// Los titulos de las obras quedan como fueron publicados; las descripciones
// se traducen. Obras solo en portugues llevan "Idioma: portugués".
// El eje de marco normativo es el uruguayo, con el brasileño como referencia.
// `curto` es la etiqueta del menú de ejes (BaseTeorica.jsx).

const PT = 'portugués'

export const EIXOS = [
  {
    id: 'mulheres-tecnologia',
    icon: '👩‍💻',
    titulo: 'Mujeres en la Tecnología, Efecto Matilda y Síndrome del Impostor',
    curto: 'Mujeres en la Tecnología',
    subtitulo:
      'Estudios que sustentan la comprensión de las barreras estructurales, la invisibilización histórica de las mujeres en la ciencia y los desafíos de permanencia en el sector tecnológico.',
    refs: [
      {
        titulo: 'Mulheres na informática: quais foram as pioneiras?',
        meta: {
          Autoras:
            'Juliana Schwartz, Lindamir S. Casagrande, Sonia A. C. Leszczynski, Marilia G. de Carvalho',
          Publicación: 'Cadernos Pagu / SciELO (2006)',
          Idioma: PT,
        },
        descricao:
          'Artículo fundamental que recupera la historia de mujeres como Ada Lovelace y las programadoras del ENIAC, y desmonta la idea de que la computación es un territorio intrínsecamente masculino.',
        link: 'https://www.scielo.br/',
        linkText: 'Ver en SciELO',
      },
      {
        titulo:
          'Julia Hall e o Desenvolvimento do Processo Hall-Héroult: o Efeito Matilda na História da Indústria Química',
        meta: {
          Autor: 'Lucas dos S. Fernandes',
          Publicación: 'Revista Química Nova na Escola (QNEsc)',
          Idioma: PT,
        },
        descricao:
          'Aborda el "Efecto Matilda" — el fenómeno por el cual los descubrimientos de científicas se atribuyen a hombres —, base teórica clave para entender la invisibilidad femenina en la tecnología.',
      },
      {
        titulo: 'Síndrome do Impostor no Mercado de Tecnologia da Informação',
        meta: {
          Autores:
            'Luan G. de Souza, Luana Morais, Cintia Kleine, Lucas Schreiber (Orientación: Mariana Neumann)',
          Publicación: 'Trabajo final de grado — Centro Universitário Unisociesc (2022)',
          Idioma: PT,
        },
        descricao:
          'Estudio sobre cómo el Fenómeno del Impostor afecta la salud mental de profesionales de TI, con base en la escala de Pauline Rose Clance.',
      },
      {
        titulo:
          'Barreiras e Desafios Enfrentados Pelas Mulheres no Ambiente Acadêmico e Organizacional do Setor de TI',
        meta: {
          Autoras: 'Patrícia Queiroz Ferreira y Janaina Maria Bueno',
          Publicación: 'Anais da ANPAD / Universidade Federal de Uberlândia',
          Idioma: PT,
        },
        descricao:
          'Mapea los desafíos cotidianos, la cultura androcéntrica (masculinizada) y el "laberinto organizacional" que dificultan el ascenso de las mujeres en TI.',
      },
      {
        titulo:
          'Por que as mulheres saem da área de tecnologia — e como evitar isso',
        meta: {
          Autora: 'Rachel Thomas (Traducción: Maria Lab / PrograMaria)',
          Publicación: 'Portal PrograMaria (2016)',
          Idioma: PT,
        },
        descricao:
          'Presenta datos estadísticos sobre el abandono femenino en la tecnología y propone estrategias de redes de apoyo y reconocimiento de ideas.',
      },
      {
        titulo:
          'O Fenômeno Teto de Vidro na Ascensão à Posição Hierárquica das Mulheres no Mercado Formal',
        meta: {
          Autores: 'Caroline Dantas Rocha et al.',
          Publicación:
            'XI Simpósio de Excelência em Gestão e Tecnologia (AEDB)',
          Idioma: PT,
        },
        descricao:
          'Analiza la barrera sutil y transparente (techo de cristal) que impide el acceso de las mujeres a los niveles jerárquicos más altos de liderazgo.',
      },
      {
        titulo: 'Agenda Transversal Mulheres no PPA 2024–2027',
        meta: {
          Publicación:
            'Ministério do Planejamento e Orçamento (MPO) / Gobierno Federal de Brasil',
          Idioma: PT,
        },
        descricao:
          'Documento oficial brasileño que vincula la alfabetización digital femenina con las políticas de Estado, con foco en la autonomía económica y la igualdad en la toma de decisiones y el poder.',
      },
    ],
  },
  {
    id: 'letramento-digital',
    icon: '🧠',
    titulo: 'Alfabetización Digital y Cibercultura',
    curto: 'Alfabetización Digital',
    subtitulo:
      'Estudios que definen la alfabetización digital no solo como el uso de herramientas, sino como el desarrollo de un pensamiento crítico, autoral y ciudadano frente a la máquina.',
    refs: [
      {
        titulo:
          'Novas Práticas de Leitura e Escrita: Letramento na Cibercultura',
        meta: {
          Autora: 'Magda Soares',
          Publicación: 'Revista Educação e Sociedade / SciELO (2002)',
          Idioma: PT,
        },
        descricao:
          'Obra inaugural en Brasil que distingue la cultura del papel de la cibercultura y define el concepto amplio de alfabetizaciones digitales ("letramentos").',
      },
      {
        titulo:
          'Literacia Digital: Um guia para promover práticas educativas com tecnologias digitais',
        meta: {
          Autores: 'Mauricio Capobianco Lopes y Bruna Hamann',
          Publicación:
            'Revista Brasileira de Ensino de Ciência e Tecnologia — RBECT (2025)',
          Idioma: PT,
        },
        descricao:
          'Guía que organiza la alfabetización digital en ejes prácticos (investigación, desarrollo, comunicación, colaboración y evaluación) para formar ciudadanía crítica.',
      },
      {
        titulo: 'BNCC e a Cultura Digital',
        meta: {
          Publicación:
            'CIEB (Centro de Inovação para a Educação Brasileira)',
          Idioma: PT,
        },
        descricao:
          'Base legal y curricular brasileña que fundamenta el paso de una enseñanza tradicional a la inclusión tecnológica, y sostiene que la tecnología debe servir para crear soluciones — no solo para consumir.',
      },
    ],
  },
  {
    id: 'ia-prompt-vibe-coding',
    icon: '🚀',
    titulo: 'Inteligencia Artificial, Ingeniería de Prompts y Vibe Coding',
    curto: 'Inteligencia Artificial',
    subtitulo:
      'Referencias prácticas y teóricas sobre el nuevo lenguaje de programación (el idioma natural) y la creación de software sin código (No-Code).',
    refs: [
      {
        titulo: 'IA Generativa para Liderazgos Públicos: De la Instrucción a la Maestría',
        meta: { Tipo: 'Material base del taller' },
        descricao:
          'Guía práctica de Ingeniería de Prompts para liderazgos de la gestión pública. Enseña el método PTCFSL (Persona, Tarea, Contexto, Formato, Sucesso · éxito y Límites) y la creación de "Prompts Maestros".',
      },
      {
        titulo:
          'Não é programador? Sem problemas: 5 caminhos para entrar no mundo da IA',
        meta: { Publicación: 'Portal Exame (octubre de 2025)', Idioma: PT },
        descricao:
          'Artículo que muestra que profesionales de áreas no técnicas (Derecho, Administración) pueden migrar a la tecnología mediante herramientas Low-Code/No-Code.',
      },
      {
        titulo: 'La Revolución del Vibe Coding y las Herramientas No-Code',
        meta: { Tipo: 'Material de apoyo técnico (videos en portugués)' },
        descricao:
          'Material sobre las plataformas Lovable y Base44 utilizadas en los talleres prácticos de creación de aplicaciones.',
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
    titulo: 'Innovación Pública y Metodología de Facilitación',
    curto: 'Innovación Pública',
    subtitulo:
      'Materiales que orientaron el diseño de la experiencia, la gestión del tiempo y las metodologías activas aplicadas en el taller presencial.',
    refs: [
      {
        titulo: 'Guia Prático para Planejamento de Reuniões e Oficinas',
        meta: {
          Autor: 'Rodrigo Mota Narcizo',
          Publicación:
            'Rede Conexão Inovação Pública (febrero de 2026)',
          Idioma: PT,
        },
        descricao:
          'Playbook interactivo que aportó las pautas de gobernanza, el Canvas de Planificación y las "reglas de oro" (como la carta bajo la manga / plan B logístico) aplicadas en el diseño del evento.',
      },
    ],
  },
  {
    id: 'marco-normativo-ia',
    icon: '⚖️',
    titulo: 'Marco Normativo de la IA en el Sector Público (Uruguay)',
    curto: 'Marco Normativo',
    subtitulo:
      'Marco legal y de política que sustenta el análisis de riesgos y la gobernanza de la IA en el Estado uruguayo. Uruguay no tiene una ley general de IA: la base combina la protección de datos, el acceso a la información, la estrategia nacional y las guías de la AGESIC. Fuentes oficiales (IMPO y gub.uy), relevadas en octubre de 2026.',
    refs: [
      {
        titulo: 'Ley N.º 18.331 — Protección de Datos Personales y Acción de Habeas Data',
        descricao:
          'Base del tratamiento de datos personales y sensibles en todo el análisis. El art. 16 garantiza el derecho a no quedar sujeto a decisiones con efectos jurídicos significativos basadas únicamente en tratamientos automatizados, a impugnarlas y a conocer los criterios de valoración utilizados.',
        link: 'https://www.impo.com.uy/bases/leyes/18331-2008',
        linkText: 'Ver en IMPO',
      },
      {
        titulo: 'Ley N.º 19.670 (arts. 37–40) y Decreto N.º 64/020',
        descricao:
          'Responsabilidad proactiva, notificación de incidentes de seguridad a la URCDP y delegado de protección de datos obligatorio en el sector público. El Decreto 64/020 (art. 6) exige una evaluación de impacto en protección de datos antes de tratamientos de riesgo, como la elaboración de perfiles o el tratamiento de datos sensibles o de gran volumen.',
        link: 'https://www.impo.com.uy/bases/decretos/64-2020',
        linkText: 'Ver en IMPO',
      },
      {
        titulo: 'Ley N.º 18.381 — Acceso a la Información Pública',
        descricao:
          'Transparencia activa y pasiva, supervisada por la UAIP. Sostiene el principio de que una decisión de impacto público tiene que poder explicarse y cuestionarse.',
        link: 'https://www.impo.com.uy/bases/leyes/18381-2008',
        linkText: 'Ver en IMPO',
      },
      {
        titulo: 'Ley N.º 20.212, art. 74, y Decreto N.º 276/025',
        descricao:
          'El art. 74 encomienda a la AGESIC la estrategia nacional de datos e IA, con principios de equidad, no discriminación, rendición de cuentas, transparencia y auditoría. El Decreto 276/025 lo reglamenta: define "sistema de IA" y crea los entornos de prueba controlados (sandboxes).',
        link: 'https://www.impo.com.uy/bases/leyes/20212-2023/74',
        linkText: 'Ver en IMPO',
      },
      {
        titulo: 'Estrategia Nacional de Inteligencia Artificial 2024–2030 (AGESIC)',
        descricao:
          'Diez principios rectores — entre ellos equidad y no discriminación, transparencia y explicabilidad, y responsabilidad y rendición de cuentas — y un enfoque basado en riesgos para identificar, evaluar y mitigar los impactos de la IA sobre los derechos humanos.',
        link: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/estrategia-nacional-inteligencia-artificial-del-uruguay-2024-2030',
        linkText: 'Ver en gub.uy',
      },
      {
        titulo: 'Guía para el Estudio de Impacto Algorítmico (EIA) — AGESIC',
        descricao:
          'Instrumento oficial de preguntas para proyectos de sistemas automatizados de toma de decisiones: impacto social, datos, explicabilidad e imparcialidad procesal. Es el referente uruguayo de la Autoevaluación de Impacto Ético (AIE) de este módulo.',
        link: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/guia-para-estudio-impacto-algoritmico',
        linkText: 'Ver en gub.uy',
      },
      {
        titulo: 'Recomendaciones sobre Transparencia Algorítmica (AGESIC y UAIP, 2024)',
        descricao:
          'Orientaciones para organismos públicos sobre documentación de sistemas, registro de casos en el Observatorio de IA en el Estado, respuesta a solicitudes de acceso a la información y evaluación de impacto.',
        link: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/book/8331/download',
        linkText: 'Descargar',
      },
      {
        titulo: 'Constitución de la República',
        descricao:
          'Igualdad (art. 8), protección de la vida, el honor y la libertad (art. 7), privacidad (arts. 10 y 28) y derechos inherentes a la personalidad humana (art. 72). Piso de todos los análisis.',
        link: 'https://www.impo.com.uy/bases/constitucion/1967-1967',
        linkText: 'Ver en IMPO',
      },
      {
        titulo: 'Ley N.º 17.817 y Ley N.º 19.122 — No discriminación y personas afrodescendientes',
        descricao:
          'La Ley 17.817 define y combate la discriminación; la Ley 19.122 establece acciones afirmativas para personas afrodescendientes en educación y empleo. Base para exigir metas de diversidad en contextos de selección, clasificación y asignación.',
        link: 'https://www.impo.com.uy/bases/leyes/19122-2013',
        linkText: 'Ver en IMPO',
      },
      {
        titulo: 'Ley N.º 18.651 — Protección integral de personas con discapacidad',
        descricao:
          'Accesibilidad y no discriminación como derechos transversales. Sostiene la composición representativa de la supervisión.',
        link: 'https://www.impo.com.uy/bases/leyes/18651-2010',
        linkText: 'Ver en IMPO',
      },
      {
        titulo: 'TOCAF — Texto Ordenado de Contabilidad y Administración Financiera (Decreto 150/012)',
        descricao:
          'Marco de las compras públicas. Relevante al contratar soluciones de IA del mercado.',
        link: 'https://www.impo.com.uy/bases/decretos/150-2012',
        linkText: 'Ver en IMPO',
      },
      {
        titulo: 'UNESCO — Recomendación sobre la Ética de la IA (2021)',
        descricao:
          'Uruguay adhirió en 2023 y publicó en 2024 su evaluación del estado de preparación (RAM). Supervisión humana, transparencia, proporcionalidad y enfoque de derechos humanos.',
        link: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/politicas-y-gestion/informe-evaluacion-sobre-estado-preparacion-inteligencia-artificial-uruguay',
        linkText: 'Informe RAM de Uruguay (gub.uy)',
      },
      {
        titulo: 'Consejo de Europa — Convenio Marco sobre IA y Derechos Humanos',
        descricao:
          'Uruguay lo firmó en septiembre de 2025, como primer país de América Latina. El enfoque de riesgos por niveles de la Unión Europea (AI Act) inspira también la escala de clasificación de este módulo: "Riesgo Excesivo" retoma la categoría de riesgo inaceptable.',
      },
      {
        titulo: 'Referencia brasileña del método',
        descricao:
          'El método de este módulo nació en Brasil, sobre la Ley General de Protección de Datos (LGPD), la Ley de Acceso a la Información y la Portaria MGI n.º 3.485/2026, que define la política de gobernanza de IA del Ministerio de Gestión. Las clasificaciones y las líneas rojas se mantienen; la base normativa de la versión en español es la uruguaya.',
      },
    ],
  },
  {
    id: 'justica-dados',
    icon: '🧭',
    titulo: 'Justicia de Datos y Crítica Algorítmica',
    curto: 'Justicia de Datos',
    subtitulo:
      'Base teórica que sustenta la tesis de que la diversidad es arquitectura, no accesorio — y de que las fallas algorítmicas reflejan desigualdades históricas, no accidentes.',
    refs: [
      {
        titulo: 'Tarcízio Silva — Racismo Algorítmico (2022)',
        meta: { Idioma: PT },
        descricao:
          'Sustenta el tratamiento del sesgo heredado de los datos de entrenamiento, la trampa de optimizar para el ajuste y la asignación distributiva que reproduce la segregación de perfiles por sector. Un algoritmo entrenado en el statu quo reproduce la desigualdad estructural.',
      },
      {
        titulo: 'Virginia Eubanks — Automating Inequality (2018)',
        descricao:
          'Sustenta la advertencia de no automatizar la burocracia: eficiencia para el organismo no es servicio para la persona, y la automatización en el sector público puede racionar el acceso, vigilar y castigar, vestida de modernización.',
      },
      {
        titulo: 'Sasha Costanza-Chock — Design Justice (2020)',
        descricao:
          'Sustenta la composición de la supervisión (representativa y epistémica), el "quien demanda ≠ quien ejecuta" y la propia tesis de que la diversidad es arquitectura. Quienes son afectados por el sistema tienen que estar en la sala donde se diseña.',
      },
      {
        titulo: 'Ruha Benjamin — Race After Technology (2019)',
        descricao:
          'Sustenta la idea de que la aparente neutralidad del modelo es el propio mecanismo del sesgo, y el "desconfía de lo pulido". Tecnología discriminatoria vestida de neutral o progresista.',
      },
      {
        titulo: 'Safiya Noble — Algorithms of Oppression (2018)',
        descricao:
          'Refuerza, junto con Benjamin, el mito de la neutralidad algorítmica en los sistemas de búsqueda y clasificación.',
      },
      {
        titulo: "Catherine D'Ignazio y Lauren Klein — Data Feminism (2020)",
        descricao:
          'Sustenta el paso de la "ética de datos" a la "justicia de datos": las fallas algorítmicas no son accidentes esporádicos, son evidencia de cómo opera normalmente un sistema desigual. Desplaza la pregunta de "¿los datos tienen sesgo?" a "¿la base refleja opresiones históricas?".',
      },
    ],
  },
]
