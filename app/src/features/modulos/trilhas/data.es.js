// Version en espanol de data.js (Uruguay). data.js es generado por un extractor; este archivo es manual.
// Mantener la misma estructura, claves, slugs, numeros y colores que data.js.

export const TRILHAS = [
  {
    "slug": "fundamental-dados",
    "numero": 1,
    "accentColor": "#38BDF8",
    "titulo": "La IA es tan inteligente como los datos que le das",
    "subtitulo": "Esta ruta transforma a funcionarias y funcionarios públicos: de personas usuarias de sistemas a personas que entienden los datos que hay detrás de ellos.",
    "duracao": "⏱️ 30–40 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Proyecto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "El Despertar Analítico",
        "subtitulo": "Datos en Todas Partes",
        "descricao": "El primer paso no tiene que ver con herramientas, sino con cómo pensar el problema. Vas a aprender la diferencia entre dato bruto e información útil, entender el ciclo de vida de los datos y desarrollar pensamiento analítico aplicado a la función pública.",
        "navLabel": "Despertar analítico",
        "recursos": [
          {
            "instituicao": "Google • Coursera (en español)",
            "nome": "Aspectos básicos: Datos, datos, en todas partes",
            "meta": [
              "~20 h",
              "Inicial",
              "Gratuito (auditar)",
              "Certificado pago"
            ],
            "url": "https://www.coursera.org/learn/aspectos-basicos-datos-datos-en-todas-partes"
          },
          {
            "instituicao": "BID • edX",
            "nome": "Datos para la efectividad de las políticas públicas",
            "meta": [
              "~40 h",
              "Para funcionariado",
              "Gratuito (auditar)",
              "Certificado pago"
            ],
            "url": "https://knowledge.iadb.org/es/curso/datos-para-la-efectividad-de-las-politicas-publicas"
          }
        ],
        "exercicio": {
          "descricao": "Haz una lista de 5 informaciones que tu área registra todos los días. Ahora piensa: ¿qué preguntas podrían responder esas informaciones si estuvieran organizadas?",
          "meta": [
            "⏱️ 1 hora",
            "📝 Papel y lápiz",
            "🎯 Pensamiento crítico"
          ]
        },
        "dica": "Este módulo es perfecto si sientes que \"no entiendes de datos\" o si ya escuchaste hablar de análisis de datos pero no sabes por dónde empezar. Empieza por los cursos básicos y practica identificando datos en tu trabajo diario."
      },
      {
        "numero": 2,
        "titulo": "Lo Básico Bien Hecho",
        "subtitulo": "Dominando las Planillas",
        "descricao": "La tecnología no tiene por qué dar miedo. Empezamos por lo que ya conoces (o casi conoces). Dominar las planillas es dominar el 80% de los análisis del día a día.",
        "navLabel": "Lo básico bien hecho",
        "recursos": [
          {
            "instituicao": "ONSC • ENAP Uruguay",
            "nome": "Excel – nivel básico, intermedio y avanzado (virtual asincrónico)",
            "meta": [
              "Para funcionariado",
              "Por convocatoria",
              "Gratuito"
            ],
            "url": "https://www.gub.uy/oficina-nacional-servicio-civil/politicas-y-gestion/excel-nivel-basico-virtual-asincronico"
          },
          {
            "instituicao": "ONSC • ENAP Uruguay",
            "nome": "Introducción al uso de la Hoja de Cálculo (autogestionado)",
            "meta": [
              "Inicial",
              "Inscripción vía SIGED",
              "Gratuito"
            ],
            "url": "https://www.gub.uy/oficina-nacional-servicio-civil/politicas-y-gestion/introduccion-uso-hoja-calculo-autogestionado-0"
          },
          {
            "instituicao": "Escuela de Datos • SocialTIC",
            "nome": "Curso de Análisis de Datos con Hojas de Cálculo",
            "meta": [
              "A tu ritmo",
              "Inicial",
              "Contenido abierto"
            ],
            "url": "https://escueladedatos.online/curso/curso-de-analisis-de-datos-con-hojas-de-calculo/"
          }
        ],
        "exercicio": {
          "descricao": "Descarga una planilla de gasto público del Catálogo Nacional de Datos Abiertos (catalogodatos.gub.uy). Identifica y corrige: valores faltantes, errores de formato y duplicados. Después, crea una tabla dinámica que muestre el gasto por categoría.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Excel o Google Sheets",
            "📂 catalogodatos.gub.uy"
          ]
        },
        "dica": "Si ya trabajas con Excel todos los días, ¡este módulo te va a dar superpoderes! Aprende fórmulas como BUSCARV, SUMAR.SI y tablas dinámicas: eliminan trabajo manual repetitivo."
      },
      {
        "numero": 3,
        "titulo": "El Punto de Inflexión",
        "subtitulo": "De Planillas a Bases de Datos",
        "descricao": "Este es el momento en que entiendes la lógica detrás de los sistemas del Estado. ¿Por qué el sistema de expedientes electrónicos usa una base de datos? ¿Cómo se conectan las informaciones? ¿Qué es SQL?",
        "navLabel": "Punto de inflexión",
        "recursos": [
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Exploración de conceptos fundamentales de datos relacionales",
            "meta": [
              "< 1 h",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/modules/explore-relational-data-offerings/"
          },
          {
            "instituicao": "Google • Coursera (en español)",
            "nome": "Proceso de datos sucios a datos limpios (hojas de cálculo + SQL)",
            "meta": [
              "~20 h",
              "Gratuito (auditar)",
              "Certificado pago"
            ],
            "url": "https://www.coursera.org/learn/proceso-de-datos-sucios-a-datos-limpios"
          }
        ],
        "exercicio": {
          "descricao": "Arma una pequeña base de datos con 3 tablas relacionadas usando datos públicos (por ejemplo: departamentos, población, indicadores sociales). Escribe 5 consultas SQL para extraer informaciones específicas.",
          "meta": [
            "⏱️ 2-3 horas",
            "💻 SQLite o MySQL",
            "📊 Datos del INE"
          ]
        },
        "dica": "Si trabajas con el sistema de expedientes, de recursos humanos o de planificación de tu organismo, te va a encantar entender cómo funcionan \"por dentro\". SQL es el lenguaje que esos sistemas usan para consultar datos estructurados. Aunque no programes, entender la lógica de SQL mejora tu capacidad de análisis."
      },
      {
        "numero": 4,
        "titulo": "Visualización y Comunicación",
        "subtitulo": "Data Storytelling: Datos que Convencen",
        "descricao": "Los datos solo generan impacto cuando quien toma la decisión los comprende. Vas a aprender a transformar números en narrativas visuales que defienden presupuestos y justifican políticas públicas.",
        "navLabel": "Visualización",
        "recursos": [
          {
            "instituicao": "Google • Coursera (en español)",
            "nome": "Compartir datos a través del arte de la visualización",
            "meta": [
              "~24 h",
              "Inicial",
              "Gratuito (auditar)",
              "Certificado pago"
            ],
            "url": "https://www.coursera.org/learn/compartir-datos-a-traves-del-arte-de-la-visualizacion"
          },
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Introducción al análisis de datos de Microsoft (Power BI)",
            "meta": [
              "~3 h",
              "Intermedio",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/paths/data-analytics-microsoft/"
          }
        ],
        "exercicio": {
          "descricao": "Crea un tablero completo con datos de catalogodatos.gub.uy que muestre indicadores de desempeño. Incluye: título, 3-5 visualizaciones y conclusiones escritas. Trabajo en parejas.",
          "meta": [
            "⏱️ 2-3 horas",
            "💻 Power BI o Looker Studio",
            "👥 En parejas"
          ]
        },
        "dica": "Este módulo es transformador si tienes que presentar informes a autoridades o defender proyectos en reuniones. Las visualizaciones claras comunican hallazgos mejor que las tablas de números. Concéntrate en: elegir el gráfico correcto, usar colores con propósito y destacar el mensaje principal."
      },
      {
        "numero": 5,
        "titulo": "Datos + IA",
        "subtitulo": "El Futuro de la Gestión Pública",
        "descricao": "Conectar datos con herramientas de IA. Entender que la calidad de la base de datos define la calidad de la respuesta de la IA. Datos sesgados generan IAs discriminatorias. Ley 18.331 de Protección de Datos Personales, ética y preparación de datos para Machine Learning.",
        "navLabel": "Datos + IA",
        "recursos": [
          {
            "instituicao": "AGESIC • URCDP • Uruguay",
            "nome": "Introducción a la Protección de Datos Personales (Ley 18.331)",
            "meta": [
              "~4 h",
              "Requiere ID Uruguay",
              "Certificado"
            ],
            "url": "https://capacitacion.agesic.gub.uy/course/index.php?categoryid=15"
          },
          {
            "instituicao": "Escuela de Datos • SocialTIC",
            "nome": "Curso Tubería de Datos (Data Pipeline)",
            "meta": [
              "A tu ritmo",
              "Inicial",
              "Contenido abierto"
            ],
            "url": "https://escueladedatos.online/curso/curso-tuberia-de-datos-data-pipeline/"
          }
        ],
        "exercicio": {
          "descricao": "Flujo completo de preparación de datos: recibir un archivo bruto, unir conjuntos de datos, limpiar columnas, transformar formatos, documentar cada etapa y comparar la calidad antes y después.",
          "meta": [
            "⏱️ 2-3 horas",
            "💻 Python (Jupyter) o Excel avanzado",
            "📊 Datos INE/Salud"
          ]
        },
        "dica": "Este es el módulo final y conecta todo. Vas a entender por qué \"garbage in, garbage out\" (si entra basura, sale basura): datos malos generan análisis e IAs malos. La Ley 18.331 no es burocracia: es protección de la ciudadanía y responsabilidad institucional. Las funcionarias y los funcionarios públicos manejan datos sensibles: conocer la Ley 18.331 es obligatorio."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Proyecto Final",
      "titulo": "Tablero de Datos de tu Área",
      "intro": "Ahora que completaste los 5 módulos, es hora de aplicar todo en un proyecto real. Vas a crear un tablero de datos simple y relevante para tu área usando datos públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Elegir datos públicos",
          "desc": "Selecciona un conjunto de datos relevante para tu trabajo (INE, Catálogo Nacional de Datos Abiertos, datos abiertos de tu organismo)."
        },
        {
          "numero": "2",
          "titulo": "Organizar y limpiar",
          "desc": "Usa las técnicas de Excel/planillas aprendidas en el Módulo 2 para organizar, limpiar y preparar los datos."
        },
        {
          "numero": "3",
          "titulo": "Crear la visualización",
          "desc": "Construye un tablero simple en Power BI o Looker Studio con las visualizaciones más importantes (aplicando el Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escribir el análisis",
          "desc": "Elabora un análisis de 1-2 páginas con los hallazgos principales y recomendaciones prácticas basadas en los datos."
        }
      ],
      "entrega": "Tablero de datos + documento de análisis con recomendaciones para las autoridades de tu área."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "No solo usas sistemas.",
        "Ahora entiendes cómo piensan."
      ],
      "descricao": "Completar esta ruta es transformarte: de operadora de sistemas a analista que entiende el sistema. De consumidora de informes a tomadora de decisiones basadas en evidencia."
    },
    "unlockText": "Pensamiento analítico en datos"
  },
  {
    "slug": "autonomia-digital",
    "numero": 2,
    "accentColor": "#A78BFA",
    "titulo": "Ya usas IA. Ahora aprende a dirigirla.",
    "subtitulo": "Esta ruta transforma a funcionarias y funcionarios públicos: de personas usuarias ocasionales a profesionales que entienden, cuestionan y dirigen la IA con intención.",
    "duracao": "⏱️ 20–30 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Proyecto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "IA sin Misterio",
        "subtitulo": "¿Qué es la IA, al Final?",
        "descricao": "La IA no es magia ni amenaza: es estadística, patrones y probabilidad. Este módulo desarma mitos, presenta los tipos de IA que ya usas sin saberlo y explica qué está en juego para las funcionarias y los funcionarios públicos.",
        "navLabel": "Despertar analítico",
        "recursos": [
          {
            "instituicao": "BID • AGESIC • ENAP Uruguay",
            "nome": "Curso virtual sobre Inteligencia Artificial Generativa (IAGen) para la función pública",
            "meta": [
              "~7 h",
              "Por convocatoria",
              "Insignia BID"
            ],
            "url": "https://www.gub.uy/oficina-nacional-servicio-civil/politicas-y-gestion/curso-virtual-sobre-inteligencia-artificial-generativa-iagen"
          },
          {
            "instituicao": "Universidad de Oxford • UNESCO",
            "nome": "IA y transformación digital en el gobierno (opción en español)",
            "meta": [
              "~12 h",
              "Gratuito",
              "Certificado"
            ],
            "url": "https://secure.sbs.ox.ac.uk/corporate/landingPage.do?method=load&corporateGroupId=2294264"
          },
          {
            "instituicao": "Universidad de Helsinki • MinnaLearn",
            "nome": "Elements of AI – Introducción a la IA",
            "meta": [
              "A tu ritmo",
              "Inicial",
              "Gratuito",
              "Certificado"
            ],
            "url": "https://www.elementsofai.com/es"
          }
        ],
        "exercicio": {
          "descricao": "Identifica 3 situaciones de tu rutina de trabajo en las que una IA podría ayudarte. Para cada una, escribe: qué tarea, qué tipo de IA (¿texto, imagen, automatización?) y qué riesgo tendrías que considerar.",
          "meta": [
            "⏱️ 45 min",
            "📝 Papel y lápiz",
            "🎯 Reflexión crítica"
          ]
        },
        "dica": "No necesitas saber programar para entender la IA. Lo que importa es saber preguntar: \"¿Cómo llegó este sistema a esta respuesta?\" y \"¿Puedo confiar en este resultado?\". Son las preguntas que una funcionaria pública necesita hacerse."
      },
      {
        "numero": 2,
        "titulo": "Prompts que Funcionan",
        "subtitulo": "Ingeniería de Prompts Aplicada",
        "descricao": "La diferencia entre una IA mediocre y una IA poderosa está en cómo preguntas. Este módulo enseña la estructura de un prompt eficaz: rol, contexto, tarea, formato y restricciones. Con práctica.",
        "navLabel": "Lo básico bien hecho",
        "recursos": [
          {
            "instituicao": "DAIR.AI",
            "nome": "Guía de Ingeniería de Prompt",
            "meta": [
              "Lectura",
              "En español",
              "Gratuito"
            ],
            "url": "https://www.promptingguide.ai/es"
          },
          {
            "instituicao": "Anthropic (en español)",
            "nome": "Documentación de Claude: ingeniería de prompts",
            "meta": [
              "Lectura",
              "Intermedio",
              "Gratuito"
            ],
            "url": "https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/overview"
          }
        ],
        "exercicio": {
          "descricao": "Toma una tarea real de tu trabajo (un informe, un dictamen, una respuesta por correo). Escribe 3 versiones del prompt para la misma tarea: simple, estructurada y avanzada con persona. Compara los resultados.",
          "meta": [
            "⏱️ 1–2 horas",
            "💻 Claude, ChatGPT o Gemini",
            "🎯 Tarea real del trabajo"
          ]
        },
        "dica": "Un buen prompt es como una instrucción de trabajo bien escrita: quién eres, qué quieres, qué formato esperas y qué se debe evitar. Entrena ese patrón hasta que se vuelva instinto."
      },
      {
        "numero": 3,
        "titulo": "Creando Asistentes",
        "subtitulo": "Asistentes Inteligentes en el Trabajo",
        "descricao": "Vas a configurar un asistente de IA para una necesidad real de tu área: clasificación de documentos, respuestas estandarizadas, resúmenes de reuniones o análisis de textos jurídicos. Del concepto al uso.",
        "navLabel": "Punto de inflexión",
        "recursos": [
          {
            "instituicao": "Anthropic (en español)",
            "nome": "Centro de ayuda de Claude: ¿Qué son los proyectos?",
            "meta": [
              "Lectura",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://support.claude.com/es/articles/9517075-que-son-los-proyectos"
          },
          {
            "instituicao": "Escuela de Datos • SocialTIC",
            "nome": "Introducción al uso de Agentes de Servicios de IA Generativa (IAG)",
            "meta": [
              "A tu ritmo",
              "Inicial",
              "Contenido abierto"
            ],
            "url": "https://escueladedatos.online/curso/curso-introduccion-al-uso-de-agentes-de-servicios-de-inteligencia-artificial-generativa-iag/"
          }
        ],
        "exercicio": {
          "descricao": "Configura un asistente personalizado para tu cargo. Define: persona, restricciones y formato de salida. Pruébalo con 5 situaciones reales y registra qué funcionó y qué necesitó ajustes.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Claude o ChatGPT",
            "🎯 Situación real del área"
          ]
        },
        "dica": "Un asistente bien configurado es como tener una pasante con experiencia disponible las 24 horas. Pero necesitas saber dar instrucciones claras. De eso se trata este módulo: ser una buena gestora de la IA que usas."
      },
      {
        "numero": 4,
        "titulo": "IA en la Rutina",
        "subtitulo": "Automatización del Día a Día",
        "descricao": "Ahora integras la IA en procesos reales: redactar documentos, preparar reuniones, resumir normativa, organizar respuestas a oficios. El objetivo es ganar horas en la semana sin renunciar al criterio propio.",
        "navLabel": "Visualización",
        "recursos": [
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Redactar, analizar y presentar con Microsoft Copilot (MS-4018)",
            "meta": [
              "~3-4 h",
              "Intermedio",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/paths/draft-analyze-present-microsoft-365-copilot/"
          },
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Crear un flujo de Microsoft Power Automate",
            "meta": [
              "~1 h",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/modules/build-microsoft-power-automate-flow/"
          }
        ],
        "exercicio": {
          "descricao": "Elige 3 tareas repetitivas de tu semana. Para cada una, describe un flujo con IA: qué herramienta, qué prompt y qué verificación humana mantendrías. Implementa al menos una.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Copilot, Claude o Power Automate",
            "🎯 Proceso real del área"
          ]
        },
        "dica": "Automatizar no es reemplazar el criterio. Es liberarlo para lo que importa. La lista de control de este módulo: identificar la tarea, elegir la herramienta, definir el punto de control humano y documentar el flujo."
      },
      {
        "numero": 5,
        "titulo": "Agentes y el Futuro",
        "subtitulo": "Hacia Dónde Va la IA",
        "descricao": "Agentes de IA, multimodalidad, razonamiento autónomo. Este módulo presenta el horizonte cercano y te prepara para seguir la evolución sin depender de terceros para interpretar lo que está pasando.",
        "navLabel": "Datos + IA",
        "recursos": [
          {
            "instituicao": "AGESIC • Uruguay",
            "nome": "Temática Inteligencia Artificial: publicaciones, estudios y noticias",
            "meta": [
              "Referencia",
              "Uruguay"
            ],
            "url": "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/tematica/inteligencia-artificial"
          },
          {
            "instituicao": "DotCSV • YouTube",
            "nome": "¿Qué es una Red Neuronal? Parte 1: La Neurona",
            "meta": [
              "~15 min",
              "Visual e intuitivo"
            ],
            "url": "https://www.youtube.com/watch?v=MRIv2IwFTPg"
          },
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Introducción a la inteligencia artificial y los agentes generativos",
            "meta": [
              "< 1 h",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/modules/fundamentals-generative-ai/"
          }
        ],
        "exercicio": {
          "descricao": "Mapea 5 innovaciones en IA de los últimos 12 meses. Para cada una, responde: ¿qué impacto puede tener en la función pública? ¿Cómo te prepararías para ese cambio? Comparte tus respuestas con tu comunidad de práctica.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Lectura + reflexión",
            "🌐 Comunidad de práctica"
          ]
        },
        "dica": "Seguir la evolución de la IA no exige leerlo todo: exige leer bien. Sigue fuentes confiables, cuestiona el sensacionalismo y mantén el foco en: \"¿qué significa esto para mi trabajo y para la ciudadana a la que sirvo?\""
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Proyecto Final",
      "titulo": "Tablero de Datos de tu Área",
      "intro": "Ahora que completaste los 5 módulos, es hora de aplicar todo en un proyecto real. Vas a crear un tablero de datos simple y relevante para tu área usando datos públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Elegir datos públicos",
          "desc": "Selecciona un conjunto de datos relevante para tu trabajo (INE, Catálogo Nacional de Datos Abiertos, datos abiertos de tu organismo)."
        },
        {
          "numero": "2",
          "titulo": "Organizar y limpiar",
          "desc": "Usa las técnicas de Excel/planillas aprendidas en el Módulo 2 para organizar, limpiar y preparar los datos."
        },
        {
          "numero": "3",
          "titulo": "Crear la visualización",
          "desc": "Construye un tablero simple en Power BI o Looker Studio con las visualizaciones más importantes (aplicando el Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escribir el análisis",
          "desc": "Elabora un análisis de 1-2 páginas con los hallazgos principales y recomendaciones prácticas basadas en los datos."
        }
      ],
      "entrega": "Tablero de datos + documento de análisis con recomendaciones para las autoridades de tu área."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Entiendes la IA.",
        "Ahora la diriges."
      ],
      "descricao": "Completar esta ruta es pasar de consumidora de tecnología a profesional que sabe usar, cuestionar y dirigir la IA con intención estratégica."
    },
    "unlockText": "Pensamiento analítico en datos"
  },
  {
    "slug": "produtividade-automacao",
    "numero": 3,
    "accentColor": "#F5A623",
    "titulo": "Ya usas IA. Ahora recupera horas.",
    "subtitulo": "Esta ruta transforma tareas repetitivas en flujos automatizados, para que pongas tu energía donde importa.",
    "duracao": "⏱️ 8–12 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Proyecto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "Mapea lo que te Roba el Tiempo",
        "subtitulo": "Diagnóstico de Productividad",
        "descricao": "Antes de automatizar, necesitas ver. Este módulo enseña a mapear tu semana de trabajo, identificar cuellos de botella y priorizar lo que la IA puede eliminar primero, con impacto real. La documentación de Zapier está en inglés, pero la herramienta entiende instrucciones (prompts) en español.",
        "navLabel": "Despertar analítico",
        "recursos": [
          {
            "instituicao": "Zapier Learn",
            "nome": "Automatización para principiantes (en inglés)",
            "meta": [
              "~2 h",
              "Gratuito"
            ],
            "url": "https://learn.zapier.com/"
          },
          {
            "instituicao": "Google Skills (en español)",
            "nome": "Introducción a la IA generativa (microcurso)",
            "meta": [
              "45 min",
              "Inicial",
              "Insignia"
            ],
            "url": "https://www.skills.google/course_templates/536?locale=es"
          }
        ],
        "exercicio": {
          "descricao": "Registra cada tarea que hiciste durante 2 días de trabajo. Al final, clasifica cada una: repetitiva, creativa o relacional. Calcula cuánto tiempo va a tareas repetitivas y prioriza las 3 que la IA puede asumir primero.",
          "meta": [
            "⏱️ 2 días de observación",
            "📝 Cualquier libreta",
            "🎯 Diagnóstico real"
          ]
        },
        "dica": "La productividad con IA empieza por la claridad sobre adónde va el tiempo. Sin mapeo, automatizas lo que es fácil, no lo que importa. Este ejercicio de 2 días va a cambiar lo que ves en tu rutina."
      },
      {
        "numero": 2,
        "titulo": "Redactar con IA",
        "subtitulo": "Oficios, Informes Técnicos y Dictámenes Más Rápidos",
        "descricao": "La IA hace el borrador; tú revisas y firmas. Este módulo enseña a usar IA para elaborar oficios, informes técnicos, dictámenes y correos institucionales, manteniendo tu voz, tu estilo y tu responsabilidad.",
        "navLabel": "Lo básico bien hecho",
        "recursos": [
          {
            "instituicao": "Anthropic (en español)",
            "nome": "Documentación de Claude: ingeniería de prompts",
            "meta": [
              "Lectura",
              "Gratuito"
            ],
            "url": "https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/overview"
          },
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Redactar, analizar y presentar con Microsoft Copilot (MS-4018)",
            "meta": [
              "~3-4 h",
              "Intermedio",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/paths/draft-analyze-present-microsoft-365-copilot/"
          }
        ],
        "exercicio": {
          "descricao": "Toma un oficio o informe técnico que hayas redactado hace poco. Usa IA para reescribirlo en la mitad del tiempo. Compara: tono, precisión, claridad. Registra qué parte editaste y por qué.",
          "meta": [
            "⏱️ 1 hora",
            "💻 Claude o ChatGPT",
            "📄 Documento real del área"
          ]
        },
        "dica": "La responsabilidad de la firma es siempre tuya. La IA es una redactora de borradores rápida e incansable; tú eres la revisora con criterio institucional. Esa división de roles es el secreto para usar IA con seguridad en documentos públicos."
      },
      {
        "numero": 3,
        "titulo": "Automatizando Flujos",
        "subtitulo": "Make, Zapier y Automatización sin Código",
        "descricao": "Si pasa esto → haz aquello. La lógica de la automatización es simple y poderosa. Vas a crear flujos reales usando herramientas sin código que conectan formularios, correos, planillas y notificaciones sin escribir una línea de código. La documentación de Make y Zapier está en inglés, pero las herramientas entienden instrucciones (prompts) en español.",
        "navLabel": "Punto de inflexión",
        "recursos": [
          {
            "instituicao": "Make Academy",
            "nome": "Automatización con Make (en inglés)",
            "meta": [
              "~5 h",
              "Gratuito"
            ],
            "url": "https://academy.make.com/"
          },
          {
            "instituicao": "Zapier Learn",
            "nome": "Automatización para el trabajo (en inglés)",
            "meta": [
              "Variable",
              "Gratuito"
            ],
            "url": "https://learn.zapier.com/"
          },
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Crear un flujo de Microsoft Power Automate",
            "meta": [
              "~1 h",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/modules/build-microsoft-power-automate-flow/"
          }
        ],
        "exercicio": {
          "descricao": "Crea una automatización simple: formulario de recolección → planilla → notificación por correo. Usa Make, Zapier o Power Automate. Documenta cada etapa y prueba con datos reales del área.",
          "meta": [
            "⏱️ 2–3 horas",
            "💻 Make, Zapier o Power Automate",
            "🔗 Google Forms + Sheets"
          ]
        },
        "dica": "Automatizar no exige programar. Exige lógica de proceso: \"si X, entonces Y\". Si ya creaste un formulario de Google o una planilla con fórmulas, ya tienes el razonamiento. Make y Zapier son la interfaz visual de esa lógica."
      },
      {
        "numero": 4,
        "titulo": "IA en Reuniones",
        "subtitulo": "Actas, Resúmenes y Síntesis Automáticas",
        "descricao": "Grabar, transcribir, resumir y distribuir actas en minutos. Este módulo muestra cómo usar IA para transformar reuniones largas en documentos accionables, sin perder nada relevante.",
        "navLabel": "Visualización",
        "recursos": [
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Haga que sus reuniones sean más productivas con IA (Copilot en Teams)",
            "meta": [
              "< 1 h",
              "Intermedio",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/modules/make-your-meetings-more-productive-ai/"
          },
          {
            "instituicao": "Anthropic (en español)",
            "nome": "Claude: proyectos para resúmenes y síntesis",
            "meta": [
              "Gratuito",
              "Pega transcripciones directo"
            ],
            "url": "https://support.claude.com/es/articles/9517075-que-son-los-proyectos"
          }
        ],
        "exercicio": {
          "descricao": "Graba (con permiso) una reunión interna corta. Transcríbela con IA. Pídele a la IA que genere: (1) resumen ejecutivo, (2) lista de decisiones tomadas, (3) próximos pasos con responsables. Compara con el acta que harías manualmente.",
          "meta": [
            "⏱️ 1–2 horas",
            "💻 Transcripción + Claude",
            "🎙️ Reunión real autorizada"
          ]
        },
        "dica": "Las actas automáticas no son pereza: son eficiencia que libera tiempo para pensar. El punto de control eres tú: revisa siempre antes de distribuir. La IA transcribió; la responsabilidad institucional es tuya."
      },
      {
        "numero": 5,
        "titulo": "Tu Sistema Personal",
        "subtitulo": "IA que Trabaja para Ti",
        "descricao": "Vas a armar tu propio conjunto de herramientas de productividad: cuáles, para qué tareas y con qué límites. El resultado es un sistema personal de IA que aumenta tu capacidad sin aumentar tu dependencia.",
        "navLabel": "Datos + IA",
        "recursos": [
          {
            "instituicao": "ONSC • ENAP Uruguay",
            "nome": "Ciberseguridad e Inteligencia Artificial en el Ámbito de la Administración Pública",
            "meta": [
              "Virtual sincrónico",
              "Por convocatoria",
              "Para funcionariado"
            ],
            "url": "https://www.gub.uy/oficina-nacional-servicio-civil/politicas-y-gestion/ciberseguridad-inteligencia-artificial-ambito-administracion-publica-virtual"
          },
          {
            "instituicao": "Universidad de Oxford • UNESCO",
            "nome": "IA y transformación digital en el gobierno (opción en español)",
            "meta": [
              "~12 h",
              "Gratuito",
              "Certificado"
            ],
            "url": "https://secure.sbs.ox.ac.uk/corporate/landingPage.do?method=load&corporateGroupId=2294264"
          }
        ],
        "exercicio": {
          "descricao": "Documenta tu sistema personal de IA: lista de las 5 herramientas que usas, para qué tareas y con qué límites definidos. Compártelo con una colega y pídele su opinión. Ese documento es tu política de uso de IA.",
          "meta": [
            "⏱️ 2 horas",
            "📝 Documento de referencia",
            "👥 Compartir con una colega"
          ]
        },
        "dica": "Un sistema personal de IA es dinámico: lo actualizas a medida que aparecen nuevas herramientas y nuevas demandas. El objetivo no es el conjunto perfecto de herramientas: es tener claro por qué usas cada una y qué no debe hacer por ti."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Proyecto Final",
      "titulo": "Tablero de Datos de tu Área",
      "intro": "Ahora que completaste los 5 módulos, es hora de aplicar todo en un proyecto real. Vas a crear un tablero de datos simple y relevante para tu área usando datos públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Elegir datos públicos",
          "desc": "Selecciona un conjunto de datos relevante para tu trabajo (INE, Catálogo Nacional de Datos Abiertos, datos abiertos de tu organismo)."
        },
        {
          "numero": "2",
          "titulo": "Organizar y limpiar",
          "desc": "Usa las técnicas de Excel/planillas aprendidas en el Módulo 2 para organizar, limpiar y preparar los datos."
        },
        {
          "numero": "3",
          "titulo": "Crear la visualización",
          "desc": "Construye un tablero simple en Power BI o Looker Studio con las visualizaciones más importantes (aplicando el Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escribir el análisis",
          "desc": "Elabora un análisis de 1-2 páginas con los hallazgos principales y recomendaciones prácticas basadas en los datos."
        }
      ],
      "entrega": "Tablero de datos + documento de análisis con recomendaciones para las autoridades de tu área."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Recuperaste tu tiempo.",
        "Úsalo en lo que importa."
      ],
      "descricao": "Completar esta ruta es transformar tu relación con el trabajo repetitivo: ya no es algo que soportas, es algo que delegas, con criterio y responsabilidad."
    },
    "unlockText": "Pensamiento analítico en datos"
  },
  {
    "slug": "dados-decisao",
    "numero": 4,
    "accentColor": "#38BDF8",
    "titulo": "Del informe a la evidencia. Del número a la decisión.",
    "subtitulo": "Esta ruta transforma a funcionarias y funcionarios públicos que trabajan con datos en analistas capaces de usar IA para generar evidencia y apoyar decisiones de política pública.",
    "duracao": "⏱️ 12–15 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Proyecto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "Leer Datos con Mirada Crítica",
        "subtitulo": "Lo que los Números Esconden",
        "descricao": "Antes de analizar, necesitas cuestionar. ¿Quién recolectó los datos? ¿Con qué método? ¿Qué sesgo puede haber? Este módulo desarrolla la mirada analítica que distingue a una funcionaria que lee un informe de una que lo cuestiona.",
        "navLabel": "Despertar analítico",
        "recursos": [
          {
            "instituicao": "INE • Uruguay",
            "nome": "Instituto Nacional de Estadística: estadísticas, microdatos y datos abiertos",
            "meta": [
              "Referencia",
              "Datos reales"
            ],
            "url": "https://www.gub.uy/instituto-nacional-estadistica/"
          },
          {
            "instituicao": "Google • Coursera (en español)",
            "nome": "Formula preguntas para tomar decisiones basadas en datos",
            "meta": [
              "~20 h",
              "Inicial",
              "Gratuito (auditar)",
              "Certificado pago"
            ],
            "url": "https://www.coursera.org/learn/formula-preguntas-para-tomar-decisiones-basadas-en-datos"
          }
        ],
        "exercicio": {
          "descricao": "Toma un informe o tablero de datos que uses en el trabajo. Responde: ¿quién lo produjo? ¿Qué período cubre? ¿Qué metodología se usó? ¿Qué falta? Presenta tu análisis crítico en media página.",
          "meta": [
            "⏱️ 1 hora",
            "📝 Informe real de tu área",
            "🎯 Mirada analítica"
          ]
        },
        "dica": "Datos sin contexto son ruido. Datos con contexto son evidencia. La diferencia está en quién lee y con qué preguntas. Este módulo te transforma en esa lectora."
      },
      {
        "numero": 2,
        "titulo": "IA para Analizar",
        "subtitulo": "Claude y ChatGPT como Analistas",
        "descricao": "Puedes pegar una planilla en una IA y pedirle análisis, cruces y patrones en segundos. Este módulo enseña exactamente cómo hacerlo con precisión y sin perder el control de los resultados.",
        "navLabel": "Lo básico bien hecho",
        "recursos": [
          {
            "instituicao": "Escuela de Datos • SocialTIC",
            "nome": "Introducción al uso de Agentes de Servicios de IA Generativa (IAG)",
            "meta": [
              "A tu ritmo",
              "Inicial",
              "Contenido abierto"
            ],
            "url": "https://escueladedatos.online/curso/curso-introduccion-al-uso-de-agentes-de-servicios-de-inteligencia-artificial-generativa-iag/"
          },
          {
            "instituicao": "Google • Coursera (en español)",
            "nome": "Analizar datos para responder preguntas",
            "meta": [
              "~26-30 h",
              "Gratuito (auditar)",
              "Certificado pago"
            ],
            "url": "https://www.coursera.org/learn/analizar-datos-para-responder-preguntas"
          }
        ],
        "exercicio": {
          "descricao": "Descarga una planilla de datos abiertos de catalogodatos.gub.uy. Pégala en una IA y pídele: (1) identificar patrones; (2) señalar inconsistencias; (3) sugerir 3 análisis posibles. Evalúa la calidad de las respuestas y refina con prompts adicionales.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Claude o ChatGPT",
            "📂 catalogodatos.gub.uy"
          ]
        },
        "dica": "La IA analiza patrones en segundos, pero necesita que sepas hacer las preguntas correctas. \"¿Qué tendencia ves en estos datos?\" es distinto de \"Identifica anomalías en los meses pares comparando con el promedio anual\". El nivel de la pregunta determina la calidad del análisis."
      },
      {
        "numero": 3,
        "titulo": "Tableros con IA",
        "subtitulo": "Power BI y Looker Studio con Asistencia de IA",
        "descricao": "La visualización de datos es comunicación estratégica. Este módulo enseña a crear tableros que convencen a las autoridades, usando IA para sugerir gráficos, identificar métricas y generar automáticamente el texto de contexto.",
        "navLabel": "Punto de inflexión",
        "recursos": [
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Introducción al análisis de datos de Microsoft (Power BI)",
            "meta": [
              "~3 h",
              "Intermedio",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/paths/data-analytics-microsoft/"
          },
          {
            "instituicao": "Google Cloud (en español)",
            "nome": "Documentación de Data Studio (ex Looker Studio)",
            "meta": [
              "Referencia",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://docs.cloud.google.com/looker/docs/studio?hl=es"
          }
        ],
        "exercicio": {
          "descricao": "Crea un tablero en Looker Studio o Power BI con datos presupuestales del Catálogo Nacional de Datos Abiertos. Usa IA para: elegir qué métricas mostrar, escribir los títulos de los gráficos y redactar el párrafo de contexto de la página principal.",
          "meta": [
            "⏱️ 3 horas",
            "💻 Power BI o Looker Studio",
            "📊 catalogodatos.gub.uy"
          ]
        },
        "dica": "Un tablero bien hecho defiende presupuestos, justifica políticas y sostiene la rendición de cuentas. La IA acelera la construcción, pero la elección de qué indicadores mostrar es siempre tuya. Eso es criterio analítico que ninguna IA reemplaza."
      },
      {
        "numero": 4,
        "titulo": "Evidencia para Política Pública",
        "subtitulo": "Del Dato a la Recomendación",
        "descricao": "Análisis sin recomendación es curiosidad. Recomendación sin análisis es opinión. Este módulo cierra el ciclo: transformar datos en evidencia sólida, estructurar argumentos analíticos y comunicar con claridad a quien decide.",
        "navLabel": "Visualización",
        "recursos": [
          {
            "instituicao": "BID • edX",
            "nome": "Datos para la efectividad de las políticas públicas",
            "meta": [
              "~40 h",
              "Por ediciones",
              "Gratuito (auditar)",
              "Certificado pago"
            ],
            "url": "https://knowledge.iadb.org/es/curso/datos-para-la-efectividad-de-las-politicas-publicas"
          },
          {
            "instituicao": "BID • edX",
            "nome": "Gobierno digital",
            "meta": [
              "~10 h",
              "Por ediciones",
              "Gratuito (auditar)",
              "Certificado pago"
            ],
            "url": "https://knowledge.iadb.org/es/curso/gobierno-digital"
          }
        ],
        "exercicio": {
          "descricao": "A partir de datos reales de tu área, elabora un informe técnico de 2 páginas con: contextualización, análisis de los datos, 3 hallazgos y 1 recomendación de política. Usa IA para el borrador y tu criterio para revisarlo con rigor técnico.",
          "meta": [
            "⏱️ 3–4 horas",
            "💻 Claude + editor de texto",
            "📄 Datos reales del área"
          ]
        },
        "dica": "Un buen informe técnico con datos cambia presupuestos. La estructura es: problema + datos + análisis + recomendación. La IA ayuda a redactar cada parte, pero el análisis y la recomendación dependen de tu criterio técnico y del contexto institucional que solo tú conoces."
      },
      {
        "numero": 5,
        "titulo": "Datos Abiertos y Transparencia",
        "subtitulo": "Gobierno Abierto e IA al Servicio de la Ciudadanía",
        "descricao": "Los datos públicos son el insumo de la IA aplicada al gobierno. Este módulo conecta la política de datos abiertos con la práctica analítica: dónde encontrarlos, cómo usarlos con ética, cómo citarlos y cómo contribuir a la calidad de los datos en tu organismo.",
        "navLabel": "Datos + IA",
        "recursos": [
          {
            "instituicao": "AGESIC • Uruguay",
            "nome": "Catálogo Nacional de Datos Abiertos",
            "meta": [
              "Referencia",
              "Datos reales"
            ],
            "url": "https://catalogodatos.gub.uy/"
          },
          {
            "instituicao": "AGESIC • UAIP • Uruguay",
            "nome": "Acceso a la Información Pública (curso básico, Ley 18.381)",
            "meta": [
              "~6 h",
              "Requiere ID Uruguay",
              "Gratuito"
            ],
            "url": "https://capacitacion.agesic.gub.uy/course/index.php?categoryid=17"
          },
          {
            "instituicao": "AGESIC • Uruguay",
            "nome": "Plan de Gobierno Abierto (6º Plan de Acción Nacional 2025–2029)",
            "meta": [
              "Referencia",
              "Uruguay"
            ],
            "url": "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/tematica/plan-gobierno-abierto"
          }
        ],
        "exercicio": {
          "descricao": "Encuentra en catalogodatos.gub.uy un conjunto de datos abiertos de tu organismo o área de actuación. Analiza su calidad: completitud, actualización, documentación. Escribe una recomendación de mejora para quien publica esos datos.",
          "meta": [
            "⏱️ 2 horas",
            "💻 catalogodatos.gub.uy",
            "📋 Informe de calidad"
          ]
        },
        "dica": "Los datos abiertos de baja calidad generan malos análisis y malas decisiones. Las funcionarias y los funcionarios públicos no son solo consumidores de datos abiertos: son responsables de la calidad de los datos que producen sus sistemas. Esa responsabilidad es estratégica."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Proyecto Final",
      "titulo": "Tablero de Datos de tu Área",
      "intro": "Ahora que completaste los 5 módulos, es hora de aplicar todo en un proyecto real. Vas a crear un tablero de datos simple y relevante para tu área usando datos públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Elegir datos públicos",
          "desc": "Selecciona un conjunto de datos relevante para tu trabajo (INE, Catálogo Nacional de Datos Abiertos, datos abiertos de tu organismo)."
        },
        {
          "numero": "2",
          "titulo": "Organizar y limpiar",
          "desc": "Usa las técnicas de Excel/planillas aprendidas en el Módulo 2 para organizar, limpiar y preparar los datos."
        },
        {
          "numero": "3",
          "titulo": "Crear la visualización",
          "desc": "Construye un tablero simple en Power BI o Looker Studio con las visualizaciones más importantes (aplicando el Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escribir el análisis",
          "desc": "Elabora un análisis de 1-2 páginas con los hallazgos principales y recomendaciones prácticas basadas en los datos."
        }
      ],
      "entrega": "Tablero de datos + documento de análisis con recomendaciones para las autoridades de tu área."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Transformas datos",
        "en decisiones."
      ],
      "descricao": "Completar esta ruta es dominar el ciclo completo: dato → análisis → evidencia → recomendación. Es ser la funcionaria que no solo entiende el informe: es a quien llaman las autoridades cuando necesitan un diagnóstico confiable."
    },
    "unlockText": "Pensamiento analítico en datos"
  },
  {
    "slug": "construcao",
    "numero": 5,
    "accentColor": "#FB7185",
    "titulo": "No usas la herramienta. Construyes la herramienta.",
    "subtitulo": "Esta ruta transforma a funcionarias y funcionarios públicos de personas usuarias en creadoras, con herramientas sin código e IA para construir soluciones reales para tu área.",
    "duracao": "⏱️ 10–15 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Proyecto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "De Usuaria a Creadora",
        "subtitulo": "El Cambio de Mentalidad",
        "descricao": "El mayor obstáculo no es técnico: es la creencia de que \"construir herramientas no es para mí\". Este módulo desarma esa creencia con ejemplos reales de funcionarias y funcionarios que crearon soluciones digitales sin saber programar. La documentación de Lovable está en inglés, pero la herramienta entiende instrucciones (prompts) en español.",
        "navLabel": "Despertar analítico",
        "recursos": [
          {
            "instituicao": "Lovable",
            "nome": "Construye apps con IA: introducción (en inglés)",
            "meta": [
              "Gratuito para empezar",
              "Sin código"
            ],
            "url": "https://lovable.dev"
          },
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Demostrar las capacidades de Microsoft Power Apps (apps sin código con Copilot)",
            "meta": [
              "~2 h",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/paths/demonstrate-capabilities-power-apps/"
          }
        ],
        "exercicio": {
          "descricao": "Escribe 3 problemas reales de tu área que una herramienta digital podría resolver. Para cada uno, define: quién la usaría, qué información necesitaría registrar y qué resultado esperas. Esa es tu lista de proyectos pendientes.",
          "meta": [
            "⏱️ 1 hora",
            "📝 Cualquier libreta",
            "🎯 Problemas reales del área"
          ]
        },
        "dica": "Construir herramientas empieza por identificar problemas, no por aprender tecnología. Conoces los problemas de tu área mejor que cualquier desarrolladora externa. Ese conocimiento es tu recurso más valioso."
      },
      {
        "numero": 2,
        "titulo": "Sin Código con IA",
        "subtitulo": "Lovable, Glide y Bolt: Primeros Pasos",
        "descricao": "Lovable, Glide, Bolt.new. Herramientas que transforman una descripción en texto en una aplicación que funciona. Este módulo muestra las 3 más didácticas, con orientación sobre cuándo usar cada una. La documentación de Lovable, Glide y Bolt está en inglés, pero las herramientas entienden instrucciones (prompts) en español.",
        "navLabel": "Lo básico bien hecho",
        "recursos": [
          {
            "instituicao": "Lovable",
            "nome": "Crea apps con IA generativa (en inglés)",
            "meta": [
              "Gratuito",
              "Sin código"
            ],
            "url": "https://lovable.dev"
          },
          {
            "instituicao": "StackBlitz",
            "nome": "Bolt.new: apps en el navegador (en inglés)",
            "meta": [
              "Gratuito para empezar",
              "Publicación en segundos"
            ],
            "url": "https://bolt.new"
          },
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Demostrar las capacidades de Microsoft Power Apps (apps sin código con Copilot)",
            "meta": [
              "~2 h",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/paths/demonstrate-capabilities-power-apps/"
          }
        ],
        "exercicio": {
          "descricao": "En Lovable, crea una app en 30 minutos: un formulario de solicitud simple para tu área. Debe tener al menos 3 campos, botón de envío y listado de las respuestas. Documenta el prompt que usaste para crearla.",
          "meta": [
            "⏱️ 1–2 horas",
            "💻 Lovable.dev",
            "🎯 Formulario real del área"
          ]
        },
        "dica": "El prompt para construir una app sigue la misma lógica que un brief: describe a la persona usuaria, la función principal, los campos necesarios y el aspecto visual esperado. Cuanto más específica la descripción, mejor el resultado."
      },
      {
        "numero": 3,
        "titulo": "Formularios y Bases",
        "subtitulo": "Recolectar, Almacenar y Mostrar Datos",
        "descricao": "Todo sistema útil tiene tres partes: entrada de datos, almacenamiento y visualización. Este módulo enseña a construir esas tres partes con herramientas sin código, sin bases de datos complejas y sin código. La documentación de Glide y Airtable está en inglés, pero las herramientas entienden instrucciones (prompts) en español.",
        "navLabel": "Punto de inflexión",
        "recursos": [
          {
            "instituicao": "Glide",
            "nome": "Apps a partir de planillas de Google (en inglés)",
            "meta": [
              "Gratuito",
              "Sheets como base"
            ],
            "url": "https://glideapps.com/"
          },
          {
            "instituicao": "Airtable",
            "nome": "Documentación oficial de Airtable (en inglés)",
            "meta": [
              "Referencia",
              "Base sin código"
            ],
            "url": "https://support.airtable.com/"
          },
          {
            "instituicao": "Escuela de Datos • SocialTIC",
            "nome": "Curso de Análisis de Datos con Hojas de Cálculo",
            "meta": [
              "A tu ritmo",
              "Inicial",
              "Contenido abierto"
            ],
            "url": "https://escueladedatos.online/curso/curso-de-analisis-de-datos-con-hojas-de-calculo/"
          }
        ],
        "exercicio": {
          "descricao": "Amplía el formulario del módulo anterior: agrega una base de datos (Airtable o Lovable Cloud), crea una pantalla de listado con filtros y prueba con datos ficticios del área. El sistema debe funcionar desde el punto de vista del flujo.",
          "meta": [
            "⏱️ 2–3 horas",
            "💻 Lovable o Glide",
            "🗃️ Airtable o Lovable Cloud"
          ]
        },
        "dica": "Los sistemas públicos, como los de expedientes electrónicos o de recursos humanos, tienen exactamente esta estructura: formulario + base + listado. Entender esta lógica no te convierte en programadora: te convierte en una funcionaria capaz de especificar, evaluar y mejorar sistemas."
      },
      {
        "numero": 4,
        "titulo": "Tu App Funcionando",
        "subtitulo": "Microsistema Real para el Sector Público",
        "descricao": "Este módulo es el corazón de la ruta: vas a construir un microsistema completo y funcional para resolver un problema real de tu área. Formulario + base + regla de negocio + salida. La documentación de Lovable está en inglés, pero la herramienta entiende instrucciones (prompts) en español.",
        "navLabel": "Visualización",
        "recursos": [
          {
            "instituicao": "Lovable",
            "nome": "Build: proyecto completo con IA (en inglés)",
            "meta": [
              "Gratuito",
              "Publicación automática"
            ],
            "url": "https://lovable.dev"
          },
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Crear un flujo de Microsoft Power Automate",
            "meta": [
              "~1 h",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/modules/build-microsoft-power-automate-flow/"
          }
        ],
        "exercicio": {
          "descricao": "Construye tu microsistema: elige el problema, define los 4 componentes (formulario, base, regla, salida), constrúyelo con Lovable o Glide y pruébalo con colegas del área. Registra los errores y las soluciones que encontraste.",
          "meta": [
            "⏱️ 4–6 horas",
            "💻 Lovable, Glide o Bolt",
            "👥 Con una colega que lo pruebe"
          ]
        },
        "dica": "La entrega obligatoria de esta ruta es un microsistema funcional: no tiene que ser perfecto, tiene que funcionar y resolver un problema real. Hecho es mejor que perfecto. Publica, prueba, itera."
      },
      {
        "numero": 5,
        "titulo": "Entrega y Documentación",
        "subtitulo": "Publicar, Comunicar y Sostener",
        "descricao": "Una app que nadie sabe que existe no resuelve nada. Este módulo trata sobre publicación, documentación mínima, incorporación de personas usuarias y el ciclo de mejora continua, para que tu herramienta sobreviva después del lanzamiento. La documentación de Lovable y Glide está en inglés, pero las herramientas entienden instrucciones (prompts) en español.",
        "navLabel": "Datos + IA",
        "recursos": [
          {
            "instituicao": "Lovable",
            "nome": "Publicación de apps (en inglés)",
            "meta": [
              "Gratuito",
              "URL automática"
            ],
            "url": "https://lovable.dev"
          },
          {
            "instituicao": "Glide",
            "nome": "Publicar y compartir apps (en inglés)",
            "meta": [
              "Gratuito",
              "Enlace directo"
            ],
            "url": "https://glideapps.com/"
          },
          {
            "instituicao": "AGESIC • Uruguay",
            "nome": "Accesibilidad digital: sensibilización, documentos accesibles y validaciones",
            "meta": [
              "Autoasistido",
              "Requiere ID Uruguay",
              "Gratuito"
            ],
            "url": "https://capacitacion.agesic.gub.uy/course/index.php?categoryid=33"
          }
        ],
        "exercicio": {
          "descricao": "Publica tu microsistema con una URL pública. Escribe una documentación mínima de 1 página: qué hace el sistema, cómo usarlo, a quién contactar si hay un problema. Distribuye el enlace a por lo menos 3 colegas y recoge sus comentarios de forma estructurada.",
          "meta": [
            "⏱️ 2 horas",
            "💻 Lovable o Glide",
            "👥 3 personas usuarias de prueba"
          ]
        },
        "dica": "La documentación no es burocracia: es lo que hace que tu herramienta sobreviva cuando estás de vacaciones. Una página clara sobre \"qué es, cómo se usa y a quién recurrir\" es todo lo que necesitas para lanzar con responsabilidad."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Proyecto Final",
      "titulo": "Tablero de Datos de tu Área",
      "intro": "Ahora que completaste los 5 módulos, es hora de aplicar todo en un proyecto real. Vas a crear un tablero de datos simple y relevante para tu área usando datos públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Elegir datos públicos",
          "desc": "Selecciona un conjunto de datos relevante para tu trabajo (INE, Catálogo Nacional de Datos Abiertos, datos abiertos de tu organismo)."
        },
        {
          "numero": "2",
          "titulo": "Organizar y limpiar",
          "desc": "Usa las técnicas de Excel/planillas aprendidas en el Módulo 2 para organizar, limpiar y preparar los datos."
        },
        {
          "numero": "3",
          "titulo": "Crear la visualización",
          "desc": "Construye un tablero simple en Power BI o Looker Studio con las visualizaciones más importantes (aplicando el Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escribir el análisis",
          "desc": "Elabora un análisis de 1-2 páginas con los hallazgos principales y recomendaciones prácticas basadas en los datos."
        }
      ],
      "entrega": "Tablero de datos + documento de análisis con recomendaciones para las autoridades de tu área."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Construiste algo",
        "que antes no existía."
      ],
      "descricao": "Completar esta ruta es cruzar la frontera entre personas usuarias y creadoras de tecnología. Ya no necesitas esperar una compra pública o un proyecto de TI para resolver un problema de tu área."
    },
    "unlockText": "Pensamiento analítico en datos"
  },
  {
    "slug": "programacao",
    "numero": 6,
    "accentColor": "#34D399",
    "titulo": "Autonomía técnica real. Código + IA.",
    "subtitulo": "Esta ruta es para quien quiere el nivel más alto: escribir código, integrar APIs y construir aplicaciones con IA desde cero.",
    "duracao": "⏱️ 20–30 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Proyecto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "Lógica de Programación",
        "subtitulo": "Cómo Piensan las Computadoras",
        "descricao": "Variables, condiciones, bucles, funciones. Estos conceptos son la gramática de cualquier lenguaje de programación. Este módulo enseña la lógica fundamental, con Python como idioma de entrada.",
        "navLabel": "Despertar analítico",
        "recursos": [
          {
            "instituicao": "Harvard • CS50",
            "nome": "CS50x en Español: Introducción a la Ciencia de la Computación (clases dobladas)",
            "meta": [
              "~20 h+",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://cs50.ly/es"
          },
          {
            "instituicao": "Universidad de Michigan • Coursera (en español)",
            "nome": "Programación para todos (Introducción a Python)",
            "meta": [
              "~19 h",
              "Inicial",
              "Gratuito (auditar)",
              "Certificado pago"
            ],
            "url": "https://www.coursera.org/learn/python-es"
          },
          {
            "instituicao": "Dr. Chuck • PY4E",
            "nome": "Python para Todos (sitio en español)",
            "meta": [
              "Variable",
              "Gratuito"
            ],
            "url": "https://es.py4e.com/"
          }
        ],
        "exercicio": {
          "descricao": "En CS50 o en Python para Todos, completa los primeros 3 ejercicios de Python. Muéstrale el código a una colega y explícale qué hace cada línea. Enseñar es la prueba definitiva de que aprendiste.",
          "meta": [
            "⏱️ 3–5 horas",
            "💻 Replit, Colab o VS Code",
            "🐍 Python"
          ]
        },
        "dica": "Python es uno de los lenguajes de programación más cercanos al lenguaje humano. Con una IA como Cursor o Copilot al lado, aprendes y ejecutas al mismo tiempo. La curva de aprendizaje nunca fue tan accesible."
      },
      {
        "numero": 2,
        "titulo": "Python con IA",
        "subtitulo": "Cursor, Copilot y Programación en Pareja con IA",
        "descricao": "Programar con una IA al lado es distinto de programar sola. La IA sugiere, completa, explica y corrige. Este módulo enseña a trabajar en pareja con herramientas como Cursor y GitHub Copilot, acelerando el aprendizaje sin crear dependencia.",
        "navLabel": "Lo básico bien hecho",
        "recursos": [
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Introducción a GitHub Copilot",
            "meta": [
              "< 1 h",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/modules/introduction-to-github-copilot/"
          },
          {
            "instituicao": "Python Software Foundation",
            "nome": "El tutorial de Python (traducción oficial al español)",
            "meta": [
              "Lectura",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://docs.python.org/es/3/tutorial/index.html"
          }
        ],
        "exercicio": {
          "descricao": "Abre Cursor, Replit o Google Colab con IA. Pídele que cree un script de Python que lea un CSV de catalogodatos.gub.uy y genere un resumen estadístico simple. Intenta entender cada línea del código generado antes de ejecutarlo.",
          "meta": [
            "⏱️ 2–3 horas",
            "💻 Cursor, Replit o Colab",
            "📂 CSV de catalogodatos.gub.uy"
          ]
        },
        "dica": "No aceptes código que no entiendes. Usa la IA para que te lo explique línea por línea. \"¿Qué hace este bucle for?\" es una pregunta legítima y esencial. Entender el código es lo que diferencia a una desarrolladora de alguien que solo copia."
      },
      {
        "numero": 3,
        "titulo": "APIs e Integraciones",
        "subtitulo": "Conectando Sistemas con Python",
        "descricao": "Las APIs son el vocabulario de los sistemas modernos. Este módulo enseña a consumir APIs públicas del Estado, como la del Catálogo Nacional de Datos Abiertos, integrar servicios externos y automatizar flujos mediante código, sin depender de herramientas de terceros.",
        "navLabel": "Punto de inflexión",
        "recursos": [
          {
            "instituicao": "AGESIC • Uruguay",
            "nome": "API CKAN del Catálogo Nacional de Datos Abiertos (package_search)",
            "meta": [
              "Práctico",
              "Intermedio",
              "API pública oficial"
            ],
            "url": "https://catalogodatos.gub.uy/api/3/action/package_search?q=presupuesto&rows=1"
          },
          {
            "instituicao": "Google Colab",
            "nome": "Cuadernos de Python en el navegador (interfaz en español)",
            "meta": [
              "Gratuito",
              "Sin instalar nada"
            ],
            "url": "https://colab.research.google.com/?hl=es"
          }
        ],
        "exercicio": {
          "descricao": "Consume una API pública del Estado (por ejemplo, la API CKAN de catalogodatos.gub.uy). Escribe un script de Python que haga la llamada, procese la respuesta y la guarde en CSV. Documenta cada etapa.",
          "meta": [
            "⏱️ 3–4 horas",
            "💻 Python + requests",
            "🔌 API de catalogodatos.gub.uy"
          ]
        },
        "dica": "Consumir una API del Estado con código propio es un salto de autonomía: dejas de depender de portales con interfaz limitada y pasas a acceder a los datos directamente, en el formato que necesitas y cuando lo necesitas."
      },
      {
        "numero": 4,
        "titulo": "Aplicaciones con LLMs",
        "subtitulo": "Integrando la API de Anthropic u OpenAI",
        "descricao": "Vas a escribir código que conversa con modelos de lenguaje. Este módulo enseña a llamar a la API de Anthropic u OpenAI con Python, construir flujos de prompts programáticos y crear herramientas internas con IA.",
        "navLabel": "Visualización",
        "recursos": [
          {
            "instituicao": "Anthropic (en español)",
            "nome": "Comienza con Claude: primera llamada a la API",
            "meta": [
              "~1 h",
              "Intermedio",
              "Oficial"
            ],
            "url": "https://platform.claude.com/docs/es/get-started"
          },
          {
            "instituicao": "Microsoft Learn (en español)",
            "nome": "Introducción a la inteligencia artificial y los agentes generativos",
            "meta": [
              "< 1 h",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://learn.microsoft.com/es-es/training/modules/fundamentals-generative-ai/"
          }
        ],
        "exercicio": {
          "descricao": "Construye un script de Python que reciba un texto (por ejemplo: normativa, oficios) y genere automáticamente: resumen, puntos principales y sugerencia de acción, usando la API de Anthropic u OpenAI. Pruébalo con documentos reales del área.",
          "meta": [
            "⏱️ 3–5 horas",
            "💻 Python + API LLM",
            "📄 Documentos reales del área"
          ]
        },
        "dica": "Llamar a una API de IA con código es el nivel más alto de control: defines el modelo, el prompt, el formato de salida, el límite de tokens y el manejo de errores. Ninguna interfaz gráfica ofrece ese nivel de personalización."
      },
      {
        "numero": 5,
        "titulo": "Publicación y Mantenimiento",
        "subtitulo": "Publicar y Mantener tu Aplicación",
        "descricao": "Una aplicación que solo corre en tu computadora no le sirve a nadie. Este módulo enseña a publicar en Netlify, GitHub Pages o Replit, configurar variables de entorno con seguridad, monitorear errores y planificar actualizaciones: el ciclo completo. La documentación de Netlify está en inglés; GitHub Pages tiene documentación en español.",
        "navLabel": "Datos + IA",
        "recursos": [
          {
            "instituicao": "Netlify",
            "nome": "Publicación de aplicaciones web, gratuita (en inglés)",
            "meta": [
              "Gratuito",
              "CI/CD automático"
            ],
            "url": "https://www.netlify.com/"
          },
          {
            "instituicao": "GitHub Docs (en español)",
            "nome": "Creación de un sitio de GitHub Pages",
            "meta": [
              "~1 h",
              "Inicial",
              "Gratuito"
            ],
            "url": "https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site"
          }
        ],
        "exercicio": {
          "descricao": "Publica tu aplicación de Python en Netlify o Replit con una URL pública. Configura variables de entorno para proteger tus claves de API. Escribe un README con instrucciones de instalación y uso. Comparte el repositorio.",
          "meta": [
            "⏱️ 3–4 horas",
            "💻 Netlify o Replit",
            "📁 GitHub u otro repositorio"
          ]
        },
        "dica": "Nunca pongas claves de API en el código. Las variables de entorno existen para proteger credenciales sensibles. En la función pública, la seguridad del código es tan importante como la seguridad de los documentos. Buenas prácticas desde la primera publicación."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Proyecto Final",
      "titulo": "Tablero de Datos de tu Área",
      "intro": "Ahora que completaste los 5 módulos, es hora de aplicar todo en un proyecto real. Vas a crear un tablero de datos simple y relevante para tu área usando datos públicos.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Elegir datos públicos",
          "desc": "Selecciona un conjunto de datos relevante para tu trabajo (INE, Catálogo Nacional de Datos Abiertos, datos abiertos de tu organismo)."
        },
        {
          "numero": "2",
          "titulo": "Organizar y limpiar",
          "desc": "Usa las técnicas de Excel/planillas aprendidas en el Módulo 2 para organizar, limpiar y preparar los datos."
        },
        {
          "numero": "3",
          "titulo": "Crear la visualización",
          "desc": "Construye un tablero simple en Power BI o Looker Studio con las visualizaciones más importantes (aplicando el Módulo 4)."
        },
        {
          "numero": "4",
          "titulo": "Escribir el análisis",
          "desc": "Elabora un análisis de 1-2 páginas con los hallazgos principales y recomendaciones prácticas basadas en los datos."
        }
      ],
      "entrega": "Tablero de datos + documento de análisis con recomendaciones para las autoridades de tu área."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Sabes programar.",
        "Con la IA a tu lado."
      ],
      "descricao": "Completar esta ruta es alcanzar el nivel más alto de autonomía tecnológica: no dependes de herramientas de terceros para resolver problemas complejos. Creas las tuyas."
    },
    "unlockText": "Pensamiento analítico en datos"
  },
  {
    "slug": "governanca",
    "numero": 7,
    "accentColor": "#60A5FA",
    "titulo": "La IA responsable no es una restricción. Es una competencia.",
    "subtitulo": "Esta ruta forma a funcionarias y funcionarios públicos capaces de usar IA con seguridad jurídica, ética institucional y responsabilidad sobre los datos de la ciudadanía.",
    "duracao": "⏱️ 15–20 horas",
    "modulosCount": "📦 5 módulos",
    "projetoMeta": "🎯 Proyecto final",
    "modulos": [
      {
        "numero": 1,
        "titulo": "La Ley 18.331 en el Día a Día",
        "subtitulo": "Protección de Datos Personales Aplicada a la Función Pública",
        "descricao": "Trabajas con datos de la ciudadanía todos los días. Cédula de identidad, domicilio, salud, ingresos: datos personales, algunos sensibles, que la Ley 18.331 de Protección de Datos Personales protege. Este módulo traduce la ley a situaciones reales de la función pública: qué se puede, qué no se puede y cómo protegerte.",
        "navLabel": "Despertar analítico",
        "recursos": [
          {
            "instituicao": "AGESIC • URCDP • Uruguay",
            "nome": "Introducción a la Protección de Datos Personales (Ley 18.331)",
            "meta": [
              "~4 h",
              "Requiere ID Uruguay",
              "Certificado"
            ],
            "url": "https://capacitacion.agesic.gub.uy/course/index.php?categoryid=15"
          },
          {
            "instituicao": "IMPO • Uruguay",
            "nome": "Ley N° 18.331 de Protección de Datos Personales (texto actualizado)",
            "meta": [
              "Lectura",
              "Texto oficial"
            ],
            "url": "https://www.impo.com.uy/bases/leyes/18331-2008"
          },
          {
            "instituicao": "URCDP • Uruguay",
            "nome": "Unidad Reguladora y de Control de Datos Personales: guías, derechos y obligaciones",
            "meta": [
              "Referencia",
              "Oficial"
            ],
            "url": "https://www.gub.uy/unidad-reguladora-control-datos-personales/"
          }
        ],
        "exercicio": {
          "descricao": "Haz una lista de 5 tipos de datos que tu área recolecta o procesa. Para cada uno, responde: ¿hay base legal para el tratamiento? ¿Se necesita consentimiento? ¿Cómo garantizarías la seguridad de esos datos si usaras IA para procesarlos?",
          "meta": [
            "⏱️ 1 hora",
            "📝 Procesos reales del área",
            "⚖️ Análisis jurídico práctico"
          ]
        },
        "dica": "La Ley 18.331 no es burocracia: es el marco jurídico que protege a la ciudadanía y te protege a ti. Una funcionaria que usa IA sin conocer la normativa de protección de datos se expone a responsabilidades. Conocer la ley es parte del cargo."
      },
      {
        "numero": 2,
        "titulo": "Ética en IA",
        "subtitulo": "Sesgos, Discriminación y Responsabilidad Algorítmica",
        "descricao": "La IA aprende de datos históricos, y los datos históricos cargan con discriminación histórica. Este módulo enseña a identificar sesgos algorítmicos, cuestionar resultados automatizados y defender los derechos de las personas afectadas por decisiones de IA.",
        "navLabel": "Lo básico bien hecho",
        "recursos": [
          {
            "instituicao": "AGESIC • Uruguay",
            "nome": "Guía técnica: Recomendación del Consejo sobre IA de la OCDE (Uruguay adhirió en 2024)",
            "meta": [
              "Lectura",
              "Referencia"
            ],
            "url": "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/recomendacion-del-consejo-sobre-inteligencia-artificial-ocde"
          },
          {
            "instituicao": "UNESCO",
            "nome": "Recomendación sobre la ética de la inteligencia artificial",
            "meta": [
              "Lectura",
              "Internacional"
            ],
            "url": "https://www.unesco.org/es/artificial-intelligence/recommendation-ethics"
          },
          {
            "instituicao": "BID • fAIr LAC • edX",
            "nome": "¿Cómo hacer uso responsable de la inteligencia artificial?",
            "meta": [
              "Sector público",
              "Por ediciones",
              "Gratuito (auditar)"
            ],
            "url": "https://www.edx.org/learn/artificial-intelligence/inter-american-development-bank-como-hacer-uso-responsable-de-la-inteligencia-artificial"
          }
        ],
        "exercicio": {
          "descricao": "Toma una tarea real de tu trabajo (un informe, un dictamen, una respuesta por correo). Escribe 3 versiones del prompt para la misma tarea: simple, estructurada y avanzada con persona. Compara los resultados.",
          "meta": [
            "⏱️ 1–2 horas",
            "💻 Claude, ChatGPT o Gemini",
            "🎯 Tarea real del trabajo"
          ]
        },
        "dica": "Un buen prompt es como una instrucción de trabajo bien escrita: quién eres, qué quieres, qué formato esperas y qué se debe evitar. Entrena ese patrón hasta que se vuelva instinto."
      },
      {
        "numero": 3,
        "titulo": "Gestión de Riesgos",
        "subtitulo": "Estudio de Impacto Algorítmico y Marcos de Riesgo Aplicados al Gobierno",
        "descricao": "Toda implementación de IA en el sector público conlleva riesgos: de precisión, de privacidad, de discriminación, de rendición de cuentas. Este módulo enseña a identificar, clasificar y mitigar esos riesgos antes de poner cualquier sistema en producción, con apoyo de la Guía para el Estudio de Impacto Algorítmico (EIA) de AGESIC.",
        "navLabel": "Punto de inflexión",
        "recursos": [
          {
            "instituicao": "AGESIC • Uruguay",
            "nome": "Guía para el Estudio de Impacto Algorítmico (EIA)",
            "meta": [
              "Lectura (11 pág.)",
              "Intermedio"
            ],
            "url": "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/sites/agencia-gobierno-electronico-sociedad-informacion-conocimiento/files/documentos/publicaciones/Gu%C3%ADa%20para%20el%20estudio%20de%20Impacto%20Algor%C3%ADtmico%20%28EIA%29_0.pdf"
          },
          {
            "instituicao": "BID • fAIr LAC",
            "nome": "Herramientas fAIr LAC: auditoría algorítmica, formulación de proyectos de IA y autoevaluación ética",
            "meta": [
              "Lectura",
              "Intermedio",
              "Gratuito"
            ],
            "url": "https://fairlac.iadb.org/taxonomy/term/2"
          },
          {
            "instituicao": "GobLab UAI • Chile",
            "nome": "Algoritmos Públicos: herramientas de algoritmos éticos",
            "meta": [
              "Referencia",
              "Regional"
            ],
            "url": "https://www.algoritmospublicos.cl/"
          }
        ],
        "exercicio": {
          "descricao": "Elige una iniciativa de IA existente en tu organismo o en otro organismo público. Aplica una matriz de riesgo simple (probabilidad × impacto) a los principales riesgos identificados, apoyándote en las preguntas de la guía EIA. Propón 3 medidas de mitigación concretas.",
          "meta": [
            "⏱️ 2–3 horas",
            "📊 Matriz de riesgo",
            "🏛️ Iniciativa real de IA pública"
          ]
        },
        "dica": "La pregunta no es \"¿la IA funciona?\" sino \"¿funciona para quién y a qué costo?\". La gestión de riesgos en la IA pública exige pensar primero en los grupos más vulnerables: las personas que tienen menos recursos para impugnar una decisión equivocada."
      },
      {
        "numero": 4,
        "titulo": "Uso Responsable en el Trabajo",
        "subtitulo": "Límites, Validación Humana y Rendición de Cuentas",
        "descricao": "¿Dónde puede la IA decidir sola? ¿Dónde necesita validación humana? ¿Dónde no debe usarse? Este módulo establece los criterios para esas respuestas y cómo documentar tus decisiones de forma que te protejan a ti y a la institución.",
        "navLabel": "Visualización",
        "recursos": [
          {
            "instituicao": "ONSC • ENAP Uruguay",
            "nome": "Ciberseguridad e Inteligencia Artificial en el Ámbito de la Administración Pública",
            "meta": [
              "Virtual sincrónico",
              "Por convocatoria",
              "Para funcionariado"
            ],
            "url": "https://www.gub.uy/oficina-nacional-servicio-civil/politicas-y-gestion/ciberseguridad-inteligencia-artificial-ambito-administracion-publica-virtual"
          },
          {
            "instituicao": "AGESIC • UAIP • Uruguay",
            "nome": "Acceso a la Información Pública (curso básico, Ley 18.381)",
            "meta": [
              "~6 h",
              "Requiere ID Uruguay",
              "Gratuito"
            ],
            "url": "https://capacitacion.agesic.gub.uy/course/index.php?categoryid=17"
          }
        ],
        "exercicio": {
          "descricao": "Elabora una política de uso de IA para tu área de no más de 1 página. Debe incluir: qué está permitido, qué requiere aprobación superior, qué está prohibido y cómo registrar el uso. Compártela con tu jefatura para recibir comentarios.",
          "meta": [
            "⏱️ 2 horas",
            "📝 Editor de texto",
            "🏛️ Política de IA del área"
          ]
        },
        "dica": "Documentar el uso de IA no es burocracia adicional: es protección. Si se cuestiona un resultado generado por IA, necesitas demostrar que ejerciste criterio humano. Ese registro es tu prueba de responsabilidad profesional."
      },
      {
        "numero": 5,
        "titulo": "Gobernanza Institucional",
        "subtitulo": "Políticas, Normas y Estructuras de Gobernanza de IA",
        "descricao": "La gobernanza de IA no es solo tecnología: es política pública, estructura organizacional y cultura institucional. Este módulo presenta los marcos normativos uruguayos e internacionales, como la Estrategia Nacional de IA 2024–2030 de AGESIC, y cómo puedes ser agente de cambio en tu institución.",
        "navLabel": "Datos + IA",
        "recursos": [
          {
            "instituicao": "AGESIC • Uruguay",
            "nome": "Estrategia Nacional de Inteligencia Artificial 2024–2030",
            "meta": [
              "Referencia",
              "Política nacional"
            ],
            "url": "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/estrategia-nacional-inteligencia-artificial-2024-2030"
          },
          {
            "instituicao": "Índice regional • América Latina",
            "nome": "Índice Latinoamericano de Inteligencia Artificial (ILIA) 2025",
            "meta": [
              "Lectura",
              "Regional"
            ],
            "url": "https://indicelatam.cl/"
          }
        ],
        "exercicio": {
          "descricao": "Investiga si tu organismo tiene una política o directriz interna sobre el uso de IA. Si la tiene, analiza: ¿está alineada con la Estrategia Nacional de IA 2024–2030 y con la Ley 18.331? ¿Tiene vacíos? Si no existe, escribe una propuesta de 1 página para tu responsable de TI o tu jefatura directa.",
          "meta": [
            "⏱️ 2–3 horas",
            "📝 Investigación interna + escritura",
            "🏛️ Propuesta para el organismo"
          ]
        },
        "dica": "Las funcionarias que entienden la gobernanza de IA tienen una ventaja estratégica: son las que logran traducir riesgos para las autoridades, proponer políticas internas y liderar la transición responsable de sus áreas. Ese es el perfil que necesita la función pública."
      }
    ],
    "projetoFinal": {
      "badge": "🎯 Proyecto Final",
      "titulo": "Política de IA para tu Área",
      "intro": "Vas a elaborar una política de uso de IA para tu área: un documento real, que puedes presentar a tu jefatura y usar como referencia en tu organismo.",
      "etapas": [
        {
          "numero": "1",
          "titulo": "Mapear el contexto",
          "desc": "Identifica qué procesos de tu área ya usan o podrían usar IA. Documenta los datos involucrados y las bases legales aplicables."
        },
        {
          "numero": "2",
          "titulo": "Clasificar riesgos",
          "desc": "Aplica la matriz de riesgo del Módulo 3 a los procesos mapeados. Clasifícalos por probabilidad e impacto."
        },
        {
          "numero": "3",
          "titulo": "Redactar la política",
          "desc": "Escribe la política con: alcance, qué está permitido, qué requiere validación humana, qué está prohibido y cómo registrar el uso."
        },
        {
          "numero": "4",
          "titulo": "Presentar y validar",
          "desc": "Presenta la propuesta a tu jefatura o equipo. Registra los comentarios y prepara una versión revisada lista para usar."
        }
      ],
      "entrega": "Política de uso de IA del área: documento de 2 a 3 páginas, listo para presentar a la jefatura de tu organismo."
    },
    "ctaFinal": {
      "tituloLinhas": [
        "Usas la IA con seguridad jurídica,",
        "ética y responsabilidad."
      ],
      "descricao": "Completar esta ruta es convertirte en la funcionaria que tu institución necesita: capaz de adoptar IA con responsabilidad, proteger los datos de la ciudadanía y liderar la gobernanza digital de tu área."
    },
    "unlockText": "Pensamiento analítico en datos"
  }
]
