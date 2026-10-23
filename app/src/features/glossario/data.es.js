// Versión en español (neutro latinoamericano) de data.js, para Uruguay.
// Mismo formato: CATEGORIAS ({key: {label, icon}}) y TERMOS.
// `letter` se calcula a partir del `name` en español (sin tilde) y TERMOS
// está ordenado con localeCompare(…, 'es', { sensitivity: 'base' }).
// Referencias brasileñas adaptadas a Uruguay (Ley N.º 18.331, URCDP,
// cédula de identidad, catalogodatos.gub.uy, organismo, funcionaria/o).

export const CATEGORIAS = {
  ia: { label: 'Inteligencia Artificial', icon: '🤖' },
  dados: { label: 'Datos', icon: '📊' },
  dev: { label: 'Desarrollo', icon: '💻' },
  seg: { label: 'Seguridad', icon: '🔒' },
  infra: { label: 'Infraestructura', icon: '⚙️' },
  neg: { label: 'Gestión y Proyectos', icon: '📋' },
}

export const TERMOS = [
  {
    "letter": "A",
    "name": "Agente",
    "cat": "ia",
    "mini": "Una IA conversacional que especializas tú, sin código",
    "def": "Asistente armado a partir de una IA conversacional: tú escribes las instrucciones, conectas las fuentes que puede consultar y pasa a responder dentro de ese alcance. Cada plataforma usa un nombre — <strong>agente</strong> en Copilot, <strong>GPT</strong> en ChatGPT, <strong>skill</strong> en Gemini (que reemplazó al Gem a partir de noviembre de 2026) —, pero las piezas son las mismas: instrucciones, fuentes de conocimiento, funcionalidades y prompts sugeridos.",
    "pronunc": "a-GEN-te",
    "example": "Creé un agente con la plantilla de informe técnico del sector: ahora ya me devuelve el borrador en el formato correcto."
  },
  {
    "letter": "A",
    "name": "Agile / Ágil",
    "cat": "neg",
    "mini": "Método de trabajo en ciclos cortos",
    "def": "Forma de organizar proyectos en ciclos cortos llamados <strong>sprints</strong>, con entregas parciales frecuentes en lugar de esperar el producto completo.",
    "pronunc": "Á-gil (esp.) / \"Á-yail\" (ingl.)",
    "example": "El equipo de TI adoptó la metodología ágil y empezó a entregar nuevas funcionalidades cada dos semanas."
  },
  {
    "letter": "A",
    "name": "Algoritmo",
    "cat": "dev",
    "mini": "Secuencia de pasos para resolver un problema",
    "def": "Conjunto de instrucciones ordenadas que una computadora sigue para resolver un problema. Todo programa es, en esencia, un algoritmo.",
    "pronunc": "al-go-RIT-mo",
    "example": "El algoritmo del feed de noticias decide qué publicaciones aparecen primero para cada persona usuaria."
  },
  {
    "letter": "A",
    "name": "Alucinación",
    "cat": "ia",
    "mini": "Cuando la IA inventa información con apariencia de verdad",
    "def": "Respuesta que la IA produce con fluidez y seguridad, pero que no corresponde a ningún hecho, norma o fuente real. No es un defecto puntual: el modelo está construido para completar texto de forma <strong>plausible</strong>, y lo plausible a veces es falso. Por eso toda ley, cifra o decisión citada tiene que verificarse en la fuente antes de entrar en un documento.",
    "pronunc": "a-lu-ci-na-CIÓN",
    "example": "El dictamen citaba un artículo que no existe — una alucinación clásica, y solo se descubrió porque alguien fue a verificar."
  },
  {
    "letter": "A",
    "name": "API",
    "cat": "dev",
    "mini": "Cómo sistemas diferentes conversan entre sí",
    "def": "<strong>Application Programming Interface</strong> (interfaz de programación de aplicaciones). Un \"enchufe estandarizado\" que permite a sistemas diferentes intercambiar datos. No necesitas saber cómo funciona el otro sistema por dentro — solo usar su API.",
    "pronunc": "\"a-pe-Í\" (sigla) o \"ei-pi-ÁI\" (ingl.)",
    "example": "La aplicación de control de asistencia usa una API para verificar la cédula de identidad de cada funcionaria y funcionario."
  },
  {
    "letter": "A",
    "name": "Automatización",
    "cat": "dev",
    "mini": "Hacer que la máquina repita lo que harías tú",
    "def": "Uso de tecnología para ejecutar tareas repetitivas sin intervención humana. Puede ser simple (un script que renombra archivos) o compleja (un robot que completa formularios).",
    "pronunc": "au-to-ma-ti-za-CIÓN",
    "example": "La automatización del envío de los informes mensuales me liberó tres horas por semana."
  },
  {
    "letter": "B",
    "name": "Backend",
    "cat": "dev",
    "mini": "La parte invisible que hace funcionar el sistema",
    "def": "Toda la lógica que corre en los servidores: guardar datos, autenticar a las personas usuarias, procesar reglas de negocio. La persona usuaria nunca la ve, pero depende de ella todo el tiempo.",
    "pronunc": "\"BAK-end\"",
    "example": "Cuando envías un formulario, es el backend el que valida los datos y los guarda en la base."
  },
  {
    "letter": "B",
    "name": "Base de datos",
    "cat": "dados",
    "mini": "Donde el sistema guarda la información",
    "def": "Sistema organizado para almacenar, buscar y actualizar datos. Funciona como una planilla inteligente a la que el programa accede en milisegundos.",
    "pronunc": "BA-se de DA-tos",
    "example": "La base de datos del sistema de control de asistencia guarda el registro de cada entrada y salida de funcionarias y funcionarios."
  },
  {
    "letter": "B",
    "name": "Big data",
    "cat": "dados",
    "mini": "Volúmenes gigantes de datos, demasiado para Excel",
    "def": "Conjunto de datos tan grande o complejo que las herramientas convencionales no logran procesarlo. Exige tecnologías específicas para almacenarlo, procesarlo y analizarlo.",
    "pronunc": "\"big DÉI-ta\"",
    "example": "El Ministerio analiza big data de salud pública para identificar brotes antes de que se propaguen."
  },
  {
    "letter": "B",
    "name": "Bug",
    "cat": "dev",
    "mini": "Error en el código que causa un comportamiento inesperado",
    "def": "Falla en un programa que hace que actúe distinto de lo esperado. Puede ser un error de lógica, un dato inesperado o una incompatibilidad entre sistemas.",
    "pronunc": "\"bag\"",
    "example": "Había un bug en el sistema que hacía que el informe mostrara las fechas en formato estadounidense."
  },
  {
    "letter": "C",
    "name": "Caché",
    "cat": "infra",
    "mini": "Guardar lo que ya se buscó para no buscarlo de nuevo",
    "def": "Mecanismo que guarda temporalmente resultados de operaciones costosas para servirlos más rápido la próxima vez. Por eso a veces el sitio se \"congela\" en una versión vieja.",
    "pronunc": "ca-CHÉ / \"kash\" (ingl.)",
    "example": "El sitio lento mejoró después de que el equipo activó la caché en las páginas más visitadas."
  },
  {
    "letter": "C",
    "name": "Chatbot",
    "cat": "ia",
    "mini": "Sistema que simula una conversación",
    "def": "Programa que conversa con personas usuarias por texto o voz. Puede seguir guiones fijos (chatbot de reglas) o usar IA para entender preguntas libres.",
    "pronunc": "\"CHAT-bot\"",
    "example": "El chatbot de atención a la ciudadanía responde preguntas frecuentes a las 3 de la mañana, sin necesitar a una funcionaria o un funcionario disponible."
  },
  {
    "letter": "C",
    "name": "Cloud / Nube",
    "cat": "infra",
    "mini": "Computadoras de otra empresa que alquilas por internet",
    "def": "Infraestructura de servidores remotos a los que se accede por internet. En lugar de tener servidores físicos en el edificio, el organismo alquila capacidad a proveedores como AWS, Azure o Google Cloud.",
    "pronunc": "\"klaud\" (ingl.) / NU-be",
    "example": "Migramos el sistema de liquidación de sueldos a la nube y dejamos de perder datos en los cortes de luz."
  },
  {
    "letter": "C",
    "name": "Código abierto",
    "cat": "dev",
    "mini": "Software con el código disponible para que cualquier persona lo vea y lo use",
    "def": "Programa cuyo código fuente se publica con una licencia que permite usarlo, estudiarlo, modificarlo y redistribuirlo. Para el sector público significa tres cosas prácticas: se puede <strong>auditar</strong> lo que hace el sistema, se puede adaptar sin pedir autorización y no se queda atado a un único proveedor.",
    "pronunc": "CÓ-di-go a-BIER-to",
    "example": "Elegimos una herramienta de código abierto para poder auditar cómo se generan las respuestas."
  },
  {
    "letter": "C",
    "name": "Código fuente",
    "cat": "dev",
    "mini": "El texto que escribe quien programa para crear el programa",
    "def": "Conjunto de instrucciones escritas en un lenguaje de programación (Python, JavaScript, etc.) que, al ejecutarse, forman un software.",
    "pronunc": "CÓ-di-go FUEN-te",
    "example": "El equipo publicó el código fuente del sistema en un repositorio abierto para que otros organismos puedan reutilizarlo."
  },
  {
    "letter": "C",
    "name": "Copilot",
    "cat": "ia",
    "mini": "IA de Microsoft integrada al paquete Office",
    "def": "Asistente de IA de Microsoft disponible en Word, Excel, Outlook y Teams. Ayuda a redactar, resumir documentos, generar fórmulas y crear presentaciones a partir de instrucciones en lenguaje natural.",
    "pronunc": "\"KÓ-pai-lot\"",
    "example": "Usé Copilot en Outlook para resumir 40 correos acumulados durante la licencia."
  },
  {
    "letter": "C",
    "name": "Criptografía",
    "cat": "seg",
    "mini": "Transformar datos para que solo quien tiene la clave los entienda",
    "def": "Técnica que mezcla la información usando algoritmos matemáticos. Sin la clave correcta, los datos son ilegibles. Es la base de toda comunicación segura en internet.",
    "pronunc": "crip-to-gra-FÍ-a",
    "example": "Los datos personales de funcionarias y funcionarios se almacenan con criptografía para cumplir la Ley N.º 18.331 de Protección de Datos Personales."
  },
  {
    "letter": "C",
    "name": "CSV",
    "cat": "dados",
    "mini": "Formato simple de planilla en texto plano",
    "def": "<strong>Comma-Separated Values</strong> (valores separados por comas). Archivo de texto donde cada línea es un registro y las columnas se separan con comas (o punto y coma). Cualquier sistema lee y exporta CSV.",
    "pronunc": "\"ce-e-se-VE\"",
    "example": "Exporté la lista de personas beneficiarias en CSV para cruzarla con otra base en Python."
  },
  {
    "letter": "D",
    "name": "Dashboard (tablero)",
    "cat": "dados",
    "mini": "Panel visual con indicadores en tiempo real",
    "def": "Pantalla que concentra gráficos y métricas clave de un sistema o proceso. Facilita la toma de decisiones al mostrar de forma visual el estado actual de algo.",
    "pronunc": "\"DASH-bord\" / ta-BLE-ro",
    "example": "El dashboard de gestión de contratos muestra cuántos vencen en los próximos 30 días."
  },
  {
    "letter": "D",
    "name": "Datos abiertos",
    "cat": "dados",
    "mini": "Información pública disponible para que cualquier persona la use",
    "def": "Datos publicados por el gobierno u otras organizaciones en formatos legibles por máquina, sin restricciones de uso. Base de la transparencia y de la reutilización de la información pública.",
    "pronunc": "DA-tos a-BIER-tos",
    "example": "El Catálogo Nacional de Datos Abiertos (catalogodatos.gub.uy) tiene bases que cualquier persona puede descargar y analizar."
  },
  {
    "letter": "D",
    "name": "Datos de entrenamiento",
    "cat": "ia",
    "mini": "Los ejemplos del pasado con los que aprendió la IA",
    "def": "Conjunto de datos usado para enseñarle a un modelo de IA a reconocer patrones. El sistema aprende a repetir lo que está en esos datos — incluidas las desigualdades que registran. <strong>De cuándo son y qué pasado reproducen</strong> son preguntas de auditoría.",
    "pronunc": "DA-tos de en-tre-na-MIEN-to",
    "example": "Si los datos de entrenamiento vienen de diez años de ascensos en el organismo, la IA aprende a quién se solía ascender."
  },
  {
    "letter": "D",
    "name": "Deploy",
    "cat": "dev",
    "mini": "Poner el sistema en línea para que el mundo acceda",
    "def": "Proceso de publicar una versión del software en el entorno de producción — el servidor real al que acceden las personas usuarias. Antes del deploy, solo lo ve el equipo de desarrollo.",
    "pronunc": "\"di-PLÓI\"",
    "example": "Hicimos el deploy de la nueva versión del portal el jueves de noche para no afectar el horario pico."
  },
  {
    "letter": "D",
    "name": "DevOps",
    "cat": "infra",
    "mini": "Cultura de integrar desarrollo y operaciones",
    "def": "Práctica que une a los equipos de desarrollo (Dev) y de operaciones de infraestructura (Ops) para entregar software con más velocidad y estabilidad, mediante automatización y colaboración continua.",
    "pronunc": "\"DEV-ops\"",
    "example": "Con DevOps, el tiempo entre escribir el código y que llegue a producción bajó de semanas a horas."
  },
  {
    "letter": "E",
    "name": "Encriptación (cifrado)",
    "cat": "seg",
    "mini": "Bloquear datos con una clave digital",
    "def": "Sinónimo práctico de cifrar: convertir datos legibles en un formato codificado. Se usa en discos, archivos y comunicaciones para protegerlos contra accesos no autorizados.",
    "pronunc": "en-crip-ta-CIÓN / ci-FRA-do",
    "example": "La computadora portátil institucional tiene el disco completamente cifrado; si la roban, los datos no son accesibles."
  },
  {
    "letter": "E",
    "name": "Equidad",
    "cat": "ia",
    "mini": "Tratar de forma distinta para llegar a un resultado justo",
    "def": "No es sinónimo de igualdad. Igualdad es aplicar el mismo criterio a todas las personas; equidad es reconocer que puntos de partida distintos exigen tratamientos distintos para producir un resultado justo. En IA se mide comparando el desempeño del sistema <strong>entre subgrupos</strong>, nunca en el promedio.",
    "pronunc": "e-qui-DAD",
    "example": "El criterio era igual para todo el mundo, pero el resultado no fue equitativo: exigía trasladarse hasta Montevideo."
  },
  {
    "letter": "E",
    "name": "Exactitud (accuracy)",
    "cat": "dados",
    "mini": "Porcentaje de aciertos de un sistema — y lo que esconde",
    "def": "Proporción de decisiones correctas que toma un sistema automatizado. Por sí sola, es la métrica más fácil de mostrar y la más fácil para esconderse detrás: un sistema con 95 % de aciertos puede estar fallando sistemáticamente con un mismo grupo de personas. Pide siempre la exactitud <strong>desagregada por grupo</strong>.",
    "pronunc": "ex-ac-ti-TUD / \"Á-kiu-ra-si\" (ingl.)",
    "example": "El proveedor presentó un 97 % de exactitud general, pero no supo informar la exactitud para personas afrodescendientes."
  },
  {
    "letter": "F",
    "name": "Falso positivo / Falso negativo",
    "cat": "dados",
    "mini": "Las dos maneras en que un sistema se equivoca",
    "def": "<strong>Falso positivo</strong>: el sistema señala algo que no es así — acusa fraude donde no lo hay. <strong>Falso negativo</strong>: el sistema deja pasar lo que debería señalar — niega una prestación a quien tiene derecho. Todo sistema elige cuál de los dos errores prefiere cometer, y esa elección recae sobre personas diferentes.",
    "pronunc": "FAL-so po-si-TI-vo / ne-ga-TI-vo",
    "example": "En el corte automático de prestaciones, el falso positivo le quita el ingreso a quien lo necesita; el falso negativo le cuesta dinero al Estado."
  },
  {
    "letter": "F",
    "name": "Firewall (cortafuegos)",
    "cat": "seg",
    "mini": "Barrera que filtra lo que entra y sale de la red",
    "def": "Sistema (hardware o software) que monitorea y controla el tráfico de red. Bloquea accesos no autorizados y filtra amenazas antes de que lleguen a los sistemas internos.",
    "pronunc": "\"FÁIR-uol\" / cor-ta-FUE-gos",
    "example": "El firewall del organismo bloqueó el acceso al servidor durante el intento de ataque detectado por el equipo de respuesta a incidentes."
  },
  {
    "letter": "F",
    "name": "Framework",
    "cat": "dev",
    "mini": "Estructura lista para construir software más rápido",
    "def": "Conjunto de herramientas, bibliotecas y convenciones que aceleran el desarrollo. En lugar de construir todo desde cero, el equipo usa el framework como base.",
    "pronunc": "\"FRÉIM-uork\"",
    "example": "El equipo eligió el framework React para construir el portal porque tiene amplia documentación en español."
  },
  {
    "letter": "F",
    "name": "Frontend",
    "cat": "dev",
    "mini": "Todo lo que aparece en pantalla y con lo que interactúa la persona usuaria",
    "def": "La parte visual e interactiva de un sistema: botones, menús, formularios, gráficos. Corre en el navegador de la persona usuaria y se comunica con el backend.",
    "pronunc": "\"FRONT-end\"",
    "example": "El equipo de frontend rediseñó el portal para que funcione mejor en el celular."
  },
  {
    "letter": "G",
    "name": "Git",
    "cat": "dev",
    "mini": "Sistema que guarda el historial de cada cambio en el código",
    "def": "Herramienta de control de versiones que registra cada cambio hecho en el código. Permite volver a versiones anteriores, trabajar en paralelo e identificar quién cambió qué.",
    "pronunc": "\"guit\" (con g de \"gato\")",
    "example": "Cuando el código nuevo rompió el sistema, usamos Git para volver a la versión estable de ayer."
  },
  {
    "letter": "G",
    "name": "GPT",
    "cat": "ia",
    "mini": "Familia de modelos de lenguaje de OpenAI",
    "def": "<strong>Generative Pre-trained Transformer</strong> (transformador generativo preentrenado). Tipo de modelo de IA entrenado con grandes volúmenes de texto para generar lenguaje natural. Base de ChatGPT y de otros productos.",
    "pronunc": "\"ge-pe-TÉ\"",
    "example": "ChatGPT funciona con modelos de la familia GPT, que OpenAI reemplaza por versiones nuevas con frecuencia — por eso la misma pregunta puede tener respuestas distintas de un mes a otro."
  },
  {
    "letter": "H",
    "name": "Hardware",
    "cat": "infra",
    "mini": "La parte física de la computadora",
    "def": "Componentes físicos de un sistema informático: procesador, memoria, disco, teclado, monitor. Se contrapone al software (programas y datos).",
    "pronunc": "\"JARD-uer\"",
    "example": "El servidor se cayó porque el hardware viejo se sobrecalentó durante el pico de accesos."
  },
  {
    "letter": "H",
    "name": "Hash",
    "cat": "seg",
    "mini": "La huella digital de un archivo o una contraseña",
    "def": "Resultado de una función matemática que transforma cualquier dato en una secuencia fija de caracteres. La misma entrada siempre genera el mismo hash; cualquier cambio genera un hash completamente distinto.",
    "pronunc": "\"jash\"",
    "example": "El sistema guarda el hash de la contraseña, nunca la contraseña en sí — así, ni siquiera quien accede a la base ve la contraseña real."
  },
  {
    "letter": "H",
    "name": "HTTP / HTTPS",
    "cat": "infra",
    "mini": "Protocolo con el que se transfieren las páginas web",
    "def": "<strong>HyperText Transfer Protocol</strong> (protocolo de transferencia de hipertexto). Reglas de comunicación entre el navegador y el servidor web. La S de HTTPS indica que la conexión está cifrada (segura).",
    "pronunc": "\"a-che-te-te-PE\" / \"a-che-te-te-pe-E-se\"",
    "example": "Los sitios que todavía usan HTTP (sin la S) pueden exponer los datos de las personas usuarias a interceptaciones."
  },
  {
    "letter": "I",
    "name": "IA (Inteligencia Artificial)",
    "cat": "ia",
    "mini": "Sistemas que simulan capacidades cognitivas humanas",
    "def": "Campo de la informática que crea sistemas capaces de aprender, razonar y ejecutar tareas que antes exigían inteligencia humana. Incluye reconocimiento de imágenes, lenguaje natural y toma de decisiones.",
    "pronunc": "\"Í-a\" o \"in-te-li-GEN-cia ar-ti-fi-CIAL\"",
    "example": "La IA del sistema de distribución de expedientes redujo en un 60 % el tiempo de la clasificación inicial."
  },
  {
    "letter": "I",
    "name": "IA generativa",
    "cat": "ia",
    "mini": "IA que crea contenido nuevo a partir de una instrucción",
    "def": "Categoría de IA capaz de generar texto, imagen, código o audio a partir de un prompt. Ejemplos: ChatGPT, Gemini, Claude, Midjourney.",
    "pronunc": "\"Í-a ge-ne-ra-TI-va\"",
    "example": "Con IA generativa, la funcionaria escribió un primer borrador de informe técnico en 5 minutos."
  },
  {
    "letter": "I",
    "name": "Infraestructura",
    "cat": "infra",
    "mini": "La base tecnológica que sostiene los sistemas",
    "def": "Conjunto de servidores, redes, almacenamiento y servicios en la nube que mantienen los sistemas funcionando. De eso se encarga el equipo de infraestructura o de TI.",
    "pronunc": "in-fra-es-truc-TU-ra",
    "example": "La migración de la infraestructura a la nube redujo en un 30 % el costo operativo de TI del organismo."
  },
  {
    "letter": "I",
    "name": "Interfaz",
    "cat": "dev",
    "mini": "Punto de contacto entre la persona usuaria y el sistema",
    "def": "La capa por la que las personas interactúan con un sistema. Puede ser visual (interfaz gráfica), por voz, por línea de comandos u otra forma. Una buena interfaz es la que no necesita manual.",
    "pronunc": "in-ter-FAZ",
    "example": "La nueva interfaz del portal se probó con funcionarias con distintos niveles de familiaridad digital."
  },
  {
    "letter": "I",
    "name": "IoT (Internet de las cosas)",
    "cat": "infra",
    "mini": "Objetos físicos conectados a internet",
    "def": "Red de dispositivos físicos (sensores, cámaras, electrodomésticos, vehículos) que recolectan e intercambian datos por internet. Cada objeto se convierte en una fuente de datos.",
    "pronunc": "\"i-o-TÉ\" o \"in-ter-NET de las CO-sas\"",
    "example": "Los sensores de presencia en los edificios públicos son IoT: registran la ocupación en tiempo real para gestionar la energía."
  },
  {
    "letter": "J",
    "name": "JSON",
    "cat": "dev",
    "mini": "Formato liviano para intercambiar datos entre sistemas",
    "def": "<strong>JavaScript Object Notation</strong>. Formato de texto simple y legible por personas para estructurar datos. Se usa en API y archivos de configuración.",
    "pronunc": "\"YÉI-son\"",
    "example": "La API devuelve los datos de cada funcionaria o funcionario en JSON: nombre, cargo, organismo y número de registro."
  },
  {
    "letter": "L",
    "name": "Ley de Protección de Datos (Ley N.º 18.331)",
    "cat": "seg",
    "mini": "Ley que protege los datos personales en Uruguay",
    "def": "<strong>Ley N.º 18.331 de Protección de Datos Personales</strong>. Regula cómo deben recolectarse, almacenarse y usarse los datos personales. Toda organización pública o privada que trate datos personales debe cumplirla. Su cumplimiento lo controla la URCDP.",
    "pronunc": "ley die-ci-O-cho mil tres-CIEN-tos TREIN-ta y U-no",
    "example": "El sistema no puede compartir datos de funcionarias con otros organismos sin una base legal prevista en la Ley N.º 18.331."
  },
  {
    "letter": "L",
    "name": "LLM",
    "cat": "ia",
    "mini": "Modelo de IA entrenado para entender y generar lenguaje",
    "def": "<strong>Large Language Model</strong> (modelo de lenguaje de gran tamaño). Tipo de IA entrenado con enormes volúmenes de texto para comprender y producir lenguaje natural. Base de ChatGPT, Gemini, Claude y otros.",
    "pronunc": "\"e-le e-le E-me\"",
    "example": "Los LLM aprendieron patrones de lenguaje leyendo miles de millones de páginas web, libros y artículos."
  },
  {
    "letter": "L",
    "name": "Log",
    "cat": "infra",
    "mini": "Registro automático de lo que pasó en el sistema",
    "def": "Archivo que registra eventos, errores y acciones dentro de un sistema. Fundamental para diagnosticar problemas y rastrear accesos.",
    "pronunc": "\"log\"",
    "example": "Revisamos los logs del servidor y descubrimos que el error empezó después de la actualización de las 2 de la mañana."
  },
  {
    "letter": "M",
    "name": "Machine learning (aprendizaje automático)",
    "cat": "ia",
    "mini": "IA que aprende de los datos sin que se la programe regla por regla",
    "def": "Subcampo de la IA en el que el sistema aprende patrones a partir de ejemplos (datos), sin que cada regla se programe manualmente. El aprendizaje vale lo que valen los datos: el sistema repite los patrones que encuentra en ellos, <strong>incluidas las desigualdades que registran</strong>.",
    "pronunc": "\"ma-SHÍN LÉR-ning\"",
    "example": "El sistema de detección de fraudes usa machine learning para aprender de casos pasados."
  },
  {
    "letter": "M",
    "name": "Matriz de confusión",
    "cat": "dados",
    "mini": "Tabla que muestra dónde y cómo se equivoca el sistema",
    "def": "Tabla que cruza lo que el sistema predijo con lo que de hecho ocurrió, separando aciertos, falsos positivos y falsos negativos. Pedida <strong>por grupo</strong>, revela desigualdades que la exactitud general esconde.",
    "pronunc": "ma-TRIZ de con-fu-SIÓN",
    "example": "Pide la matriz de confusión por grupo, no la exactitud general: es ahí donde aparece el sesgo."
  },
  {
    "letter": "M",
    "name": "Metadatos",
    "cat": "dados",
    "mini": "Datos que describen otros datos",
    "def": "Información sobre un archivo o registro: quién lo creó, cuándo, dónde, tamaño, formato. El contenido del documento es el dato; la información sobre él son los metadatos.",
    "pronunc": "me-ta-DA-tos",
    "example": "Aun sin leer el correo, los metadatos revelan con quién te comunicaste y con qué frecuencia."
  },
  {
    "letter": "M",
    "name": "Microservicios",
    "cat": "dev",
    "mini": "Dividir un sistema grande en partes independientes",
    "def": "Arquitectura en la que un sistema se compone de pequeños servicios autónomos que se comunican vía API. Cada servicio puede desarrollarse, desplegarse y escalarse de forma independiente.",
    "pronunc": "mi-cro-ser-VI-cios",
    "example": "El portal del gobierno se reestructuró en microservicios para que la caída de un módulo no tire abajo todo el sitio."
  },
  {
    "letter": "M",
    "name": "Model card (ficha del modelo)",
    "cat": "ia",
    "mini": "El prospecto del modelo de IA",
    "def": "Documento que describe un modelo de IA: para qué sirve, con qué datos y con qué grupos se entrenó, dónde suele fallar y qué usos se desaconsejan. Es el equivalente al prospecto de un medicamento. <strong>La ausencia de model card ya es información</strong> sobre el proveedor.",
    "pronunc": "\"MÓ-del card\"",
    "example": "Antes de firmar el contrato, el equipo pidió la model card y descubrió que el sistema nunca se había probado con datos uruguayos."
  },
  {
    "letter": "N",
    "name": "No-code",
    "cat": "dev",
    "mini": "Construir sistemas sin escribir código",
    "def": "Plataformas que permiten crear aplicaciones, automatizaciones y sitios mediante interfaces visuales, sin programación. Ejemplos: Lovable, Glide, Notion, Power Automate.",
    "pronunc": "\"nou-KOUD\"",
    "example": "La funcionaria creó un formulario de encuesta de satisfacción con no-code, sin necesidad de recurrir al equipo de TI."
  },
  {
    "letter": "P",
    "name": "Phishing",
    "cat": "seg",
    "mini": "Estafa por correo o mensaje que imita una fuente confiable",
    "def": "Ataque en el que el delincuente se hace pasar por una institución legítima para robar datos (contraseñas, cédula de identidad, tarjeta). Puede llegar por correo electrónico, SMS, WhatsApp o sitios falsos.",
    "pronunc": "\"FÍ-shing\"",
    "example": "La funcionaria recibió un correo falso que imitaba a Recursos Humanos y pedía actualizar los datos bancarios — era phishing."
  },
  {
    "letter": "P",
    "name": "Pipeline",
    "cat": "dados",
    "mini": "Flujo automático de transformación de datos o código",
    "def": "Secuencia de etapas automatizadas en la que la salida de una etapa es la entrada de la siguiente. Se usa en procesamiento de datos (ETL) y en la entrega de software (CI/CD).",
    "pronunc": "\"PÁIP-lain\"",
    "example": "El pipeline de datos captura la información del sistema heredado, la limpia y la carga en el data warehouse todas las madrugadas."
  },
  {
    "letter": "P",
    "name": "Prompt",
    "cat": "ia",
    "mini": "La instrucción que le escribes a la IA para que la ejecute",
    "def": "Texto de entrada que guía a la IA. Cuanto más claro, específico y contextualizado, mejor la respuesta. Escribir buenos prompts es la habilidad central para usar la IA generativa con eficiencia.",
    "pronunc": "\"prompt\"",
    "example": "Mi prompt especificaba el cargo, el objetivo del texto y el público destinatario — la respuesta de la IA fue mucho más útil."
  },
  {
    "letter": "P",
    "name": "Protocolo",
    "cat": "infra",
    "mini": "Conjunto de reglas que define cómo se comunican los sistemas",
    "def": "Acuerdo sobre el formato, la secuencia y las reglas de intercambio de mensajes entre sistemas. Sin protocolos, sistemas diferentes no logran entenderse.",
    "pronunc": "pro-to-CO-lo",
    "example": "HTTPS es el protocolo que garantiza la comunicación segura entre el navegador y el servidor."
  },
  {
    "letter": "R",
    "name": "Ransomware",
    "cat": "seg",
    "mini": "Virus que secuestra tus archivos y exige un rescate",
    "def": "Tipo de malware que cifra los datos de la víctima y exige un pago (generalmente en criptomonedas) para restaurar el acceso. Uno de los ataques más devastadores para los organismos públicos.",
    "pronunc": "\"RÁN-som-uer\"",
    "example": "El organismo tuvo todos sus sistemas paralizados durante tres días tras un ataque de ransomware que entró por un correo infectado."
  },
  {
    "letter": "R",
    "name": "Repositorio",
    "cat": "dev",
    "mini": "Lugar centralizado donde se almacena el código fuente",
    "def": "Espacio (generalmente en la nube) donde todo el equipo guarda, versiona y comparte el código de un proyecto. GitHub y GitLab son los más usados.",
    "pronunc": "re-po-si-TO-rio",
    "example": "El código del sistema de gestión se publicó en un repositorio público para dar transparencia."
  },
  {
    "letter": "R",
    "name": "Responsivo",
    "cat": "dev",
    "mini": "Sitio o app que se adapta a cualquier tamaño de pantalla",
    "def": "Diseño que reorganiza automáticamente la disposición de la página según el dispositivo — celular, tableta o computadora de escritorio. Estándar obligatorio desde que la mayoría de los accesos viene del celular.",
    "pronunc": "res-pon-SI-vo",
    "example": "El portal tiene que ser responsivo porque el 70 % de las funcionarias y los funcionarios accede desde el celular."
  },
  {
    "letter": "S",
    "name": "SaaS",
    "cat": "infra",
    "mini": "Software que usas por internet, sin instalar nada",
    "def": "<strong>Software as a Service</strong> (software como servicio). Modelo en el que se accede al software desde el navegador y el proveedor lo mantiene. El pago suele ser por suscripción. Ejemplos: Google Workspace, Microsoft 365, Zoom.",
    "pronunc": "\"sas\" o \"e-se-a-a-E-se\"",
    "example": "El gobierno migró a un SaaS de correo y eliminó el mantenimiento de servidores de correo propios."
  },
  {
    "letter": "S",
    "name": "Servidor",
    "cat": "infra",
    "mini": "Computadora potente que brinda servicios a otras computadoras",
    "def": "Máquina (física o virtual) que procesa solicitudes y entrega datos o servicios a clientes de la red. Todo sitio, app o API necesita un servidor funcionando.",
    "pronunc": "ser-vi-DOR",
    "example": "El servidor estuvo fuera de línea durante el mantenimiento programado del domingo a la noche."
  },
  {
    "letter": "S",
    "name": "Sesgo algorítmico",
    "cat": "ia",
    "mini": "Error sistemático que recae siempre sobre los mismos grupos",
    "def": "Cuando un sistema automatizado produce resultados sistemáticamente peores para determinados grupos de personas. Rara vez nace de la mala intención: viene de los datos que registraron desigualdades pasadas y de los criterios que alguien eligió incluir. Por eso es auditable — <strong>el sesgo está en la decisión, no en la máquina</strong>.",
    "pronunc": "SES-go al-go-RÍT-mi-co",
    "example": "El sesgo algorítmico de la clasificación solo apareció cuando se separaron los resultados por grupo."
  },
  {
    "letter": "S",
    "name": "Software",
    "cat": "dev",
    "mini": "El programa, la aplicación, el sistema",
    "def": "Conjunto de instrucciones (código) que le dice al hardware qué hacer. Incluye sistemas operativos, aplicaciones, API, scripts — cualquier cosa no física en una computadora.",
    "pronunc": "\"SÓFT-uer\"",
    "example": "El software de gestión documental tiene que actualizarse para corregir la vulnerabilidad detectada."
  },
  {
    "letter": "S",
    "name": "Sprint",
    "cat": "neg",
    "mini": "Ciclo corto de trabajo con una entrega definida",
    "def": "Período fijo (generalmente de 1 a 4 semanas) de las metodologías ágiles en el que el equipo se compromete a entregar un conjunto específico de funcionalidades.",
    "pronunc": "\"sprint\"",
    "example": "Al final del sprint, el equipo presentó el módulo de informes funcionando para que la responsable del área lo revisara."
  },
  {
    "letter": "S",
    "name": "SQL",
    "cat": "dados",
    "mini": "Lenguaje para consultar y manipular bases de datos",
    "def": "<strong>Structured Query Language</strong> (lenguaje de consulta estructurado). Lenguaje estándar para interactuar con bases de datos relacionales. Con SQL buscas, insertas, actualizas y eliminas datos.",
    "pronunc": "\"e-se-cu-E-le\" o \"SÍ-kuel\"",
    "example": "La analista escribió una consulta SQL para extraer todos los contratos con un monto superior a 10 millones de pesos."
  },
  {
    "letter": "S",
    "name": "Supervisión humana",
    "cat": "ia",
    "mini": "La persona que decide, revisa y responde por el resultado",
    "def": "Arreglo en el que la decisión final le corresponde a una persona identificable, con poder real para revisar, discrepar y revertir lo que propuso el sistema. Para ser efectiva exige tres condiciones: <strong>tiempo</strong> para analizar, <strong>información</strong> suficiente para juzgar y <strong>autonomía</strong> para contradecir a la máquina. Sin las tres, se vuelve un simple sello.",
    "pronunc": "su-per-vi-SIÓN hu-MA-na",
    "example": "El sistema sugiere la clasificación, pero es la supervisión humana la que firma — y la que responde."
  },
  {
    "letter": "T",
    "name": "Token",
    "cat": "ia",
    "mini": "Dos cosas diferentes usan este mismo nombre",
    "def": "<strong>En IA</strong>: el fragmento de texto que el modelo procesa cada vez — más o menos una palabra corta, o parte de una larga. Es la unidad con la que se miden el consumo y el precio: los contratos de IA suelen cobrar por token enviado y devuelto, así que un documento largo cuesta más.<br /><br /><strong>En seguridad</strong>: secuencia de caracteres generada después de la autenticación, que se usa para probar la identidad en las solicitudes siguientes sin reenviar la contraseña cada vez.",
    "pronunc": "\"TÓ-ken\"",
    "example": "El token de acceso vence en 24 horas; después, la persona usuaria tiene que autenticarse de nuevo."
  },
  {
    "letter": "U",
    "name": "UX / UI",
    "cat": "dev",
    "mini": "Diseño centrado en la experiencia de la persona usuaria",
    "def": "<strong>UX</strong> (User Experience, experiencia de usuario): estudio de cómo se siente la persona al usar el producto. <strong>UI</strong> (User Interface, interfaz de usuario): el diseño visual de las pantallas. UX investiga y define; UI diseña y materializa.",
    "pronunc": "\"iu-EKS\" / \"iu-ÁI\"",
    "example": "El equipo de UX hizo pruebas con funcionarias reales antes de lanzar la nueva interfaz del portal."
  },
  {
    "letter": "V",
    "name": "Variable proxy",
    "cat": "dados",
    "mini": "Un dato que carga otro sin nombrarlo",
    "def": "Variable que funciona como sustituta de una característica sensible sin mencionarla. El código postal, la escuela de origen, el apellido, la antigüedad en el cargo y la exigencia de traslado pueden cargar raza, género y clase de forma indirecta. Quitar la variable sensible de la base no elimina el efecto — solo lo hace más difícil de probar.",
    "pronunc": "va-RIA-ble PRÓK-si",
    "example": "El llamado no menciona la raza en ninguna línea, pero usa el código postal y la escuela de origen: son variables proxy."
  },
  {
    "letter": "V",
    "name": "Vibe coding",
    "cat": "ia",
    "mini": "Crear software conversando con la IA en lenguaje natural",
    "def": "Término acuñado por Andrej Karpathy en 2025 para el desarrollo en el que la persona le entrega la generación del código a la IA y <strong>deja de revisarlo</strong> — en su formulación, olvidarse de que el código existe. Él mismo decía que servía para proyectos descartables. En el uso corriente se volvió un paraguas para cualquier construcción mediante lenguaje natural, pero vale la distinción: describir lo que se quiere <strong>y verificar el resultado</strong> no es lo mismo que aceptar sin mirar.",
    "pronunc": "\"VÁIB KÓ-ding\"",
    "example": "Con vibe coding en Lovable, la funcionaria creó un formulario de registro sin saber programar."
  },
  {
    "letter": "V",
    "name": "Vulnerabilidad",
    "cat": "seg",
    "mini": "Debilidad de un sistema que pueden explotar atacantes",
    "def": "Falla de seguridad en software, hardware o configuración que un atacante puede explotar para acceder indebidamente a datos o sistemas. Debe corregirse lo antes posible.",
    "pronunc": "vul-ne-ra-bi-li-DAD",
    "example": "La vulnerabilidad del sistema de autenticación se reportó al equipo de respuesta a incidentes y se corrigió en 48 horas."
  },
  {
    "letter": "W",
    "name": "Wi-Fi",
    "cat": "infra",
    "mini": "Red inalámbrica de internet",
    "def": "Tecnología que permite conectar dispositivos a internet (o a la red local) sin cables, mediante ondas de radio. La seguridad de la red wifi es fundamental, sobre todo en redes públicas.",
    "pronunc": "\"uái-fái\"",
    "example": "Conectarte al wifi público sin VPN expone tus datos de navegación a interceptaciones."
  }
]
