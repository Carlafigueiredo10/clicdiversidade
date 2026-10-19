// Version en espanol de data.pt.js — mismos nombres de exportacion.
// Los prompts piden la interfaz en espanol: sin eso, Lovable tiende a
// generar la app en ingles.

export const INITIAL_PROMPT = `Quiero construir una aplicación simple.
¿Me ayudas a estructurar la idea como un MVP?

Primero, hazme preguntas cortas para entender mejor el proyecto.

Pregunta sobre:

1. Qué problema resuelve la aplicación
2. Quiénes son las personas usuarias
3. Cuál es la acción principal que la persona usuaria debe poder realizar
4. Qué información hay que registrar
5. Si la aplicación solo necesita registrar datos o también consultar, editar o eliminar
6. Si tendrá inicio de sesión o no

Cuando yo responda, organiza la propuesta en un formato práctico que contenga:

• objetivo de la aplicación
• público principal
• producto mínimo viable (MVP)
• páginas principales
• funcionalidades esenciales
• flujo mínimo de navegación entre las pantallas
• modelo de datos principal (campos que hay que registrar)
• sugerencia concreta de interfaz inicial

Para la interfaz, describe elementos reales de interfaz, como:

• lista en tarjetas
• botones de acción
• formularios
• indicadores de estado
• navegación simple entre pantallas

Considera siempre una solución simple, pensada para el celular, con lenguaje claro e interfaz intuitiva. Toda la interfaz debe estar en español.

Al final, pregúntame si quiero que conviertas esta definición en un prompt listo para usar en Lovable.`

export const MEU_APP_PROMPT = `PERSONA
Eres Product Designer sénior, UX Strategist y Arquitecto de Aplicaciones no-code, especializado en crear sistemas web de gran claridad, alto valor percibido y experiencia visual profesional para equipos del sector público.
Tu especialidad es transformar necesidades administrativas en aplicaciones modernas, intuitivas y visualmente impactantes, con apariencia de producto real listo para usar.
Tu tono debe ser objetivo, elegante, confiable y profesional. Diseñas interfaces que generan un efecto "WOW" sin exceso visual, priorizando:
claridad
credibilidad
facilidad de uso
excelente organización de la información

IDIOMA
Toda la interfaz, los textos, las etiquetas y los datos de ejemplo deben estar en español.

MISIÓN PRINCIPAL
Crea una aplicación web completa de gestión de tareas para funcionarias y funcionarios públicos, sus equipos y sus unidades.
El sistema debe permitir:
registrar tareas
dar seguimiento a las demandas
priorizar actividades
visualizar la productividad
gestionar el equipo
distribuir responsabilidades
La aplicación debe parecer un producto real, moderno y listo para usar, aunque no tenga integración con base de datos en esta primera versión.

PRINCIPIOS DEL PRODUCTO
El sistema debe construirse con foco en:
simplicidad de uso
organización visual impecable
sensación de herramienta profesional
navegación intuitiva
valor percibido desde la primera pantalla
fuerte impacto visual para la demostración en el taller

ESTRUCTURA DE LA APLICACIÓN
La aplicación debe tener las siguientes áreas principales:
Panel
Tareas
Equipo
Kanban
Calendario o Línea de tiempo
Alta / edición de tarea

1) PANEL PRINCIPAL
Crear una pantalla inicial con visión ejecutiva de la operación de la unidad.
Debe incluir:
Indicadores principales
total de tareas
tareas completadas
tareas en curso
tareas atrasadas
tareas próximas al plazo
tareas por criticidad
tareas por responsable
total de integrantes del equipo
integrantes activos
Paneles visuales
Agregar visualizaciones claras y elegantes:
gráfico de distribución de tareas por estado
gráfico de tareas por criticidad
gráfico de tareas por responsable
panel de productividad del equipo
panel de carga de tareas por responsable
Bloques estratégicos
Prioridades del día
Tareas más urgentes
Riesgo de atraso
Actividades recientes
Todo debe presentarse en tarjetas bien diseñadas, con excelente jerarquía visual.

2) GESTIÓN DE TAREAS
Crear una página de tareas con aspecto profesional, organizada en una tabla moderna o lista inteligente.
Cada tarea debe tener:
título
descripción
responsable (seleccionado de la pestaña Equipo)
unidad o equipo
fecha de creación
plazo de entrega
estado
criticidad
observaciones opcionales

3) ESTADO OPERATIVO
Cada tarea debe tener un estado operativo:
En curso
Completada
Atrasada
Estos estados deben mostrarse con etiquetas visuales claras.

4) ETIQUETA AUTOMÁTICA DE PLAZO
El sistema debe calcular automáticamente el estado del plazo según la fecha actual.
Mostrar las siguientes etiquetas:
🟢 En plazo
🟡 Plazo próximo
🔴 Vencida
Esta lógica debe ser visual y automática.

5) CRITICIDAD
Cada tarea puede tener un nivel de criticidad:
Baja
Media
Alta
Presentarlo con colores elegantes y etiquetas visuales claras.
Ejemplo:
Baja → gris o azul suave
Media → amarillo o naranja
Alta → rojo

6) FORMULARIO DE CREACIÓN Y EDICIÓN DE TAREAS
Crear un formulario simple y profesional que contenga:
título
descripción
responsable
unidad
plazo
criticidad
estado
observaciones
Botones disponibles:
guardar tarea
limpiar formulario
cancelar edición
El campo responsable debe listar automáticamente a las personas registradas en la pestaña Equipo.

7) PESTAÑA EQUIPO
Crear una página llamada Equipo para registrar y gestionar a las personas de la unidad.
Esta pestaña debe permitir adaptar la aplicación a la realidad de cada participante del taller.
Cada integrante del equipo debe tener:
nombre completo
cargo o función
unidad o equipo
correo institucional opcional
teléfono opcional
estado del integrante:
Activo
Con licencia
De vacaciones
observaciones opcionales
Funcionalidades de la pestaña Equipo
Permitir:
registrar integrante
editar integrante
eliminar integrante
buscar por nombre
filtrar por unidad
filtrar por estado
ver la lista del equipo
ver la carga de tareas por integrante
Integración con tareas
Las personas registradas deben alimentar automáticamente el campo responsable de las tareas.
Reglas:
mostrar preferentemente a integrantes activos
mostrar nombre y unidad
integrar los datos a los gráficos de productividad
integrar los datos al panel de carga por responsable

8) FILTROS Y PRODUCTIVIDAD
Agregar filtros por:
responsable
unidad
estado
criticidad
plazo
búsqueda por palabra clave
Ordenar por:
plazo más próximo
mayor criticidad
más recientes
responsable
mayor carga de tareas

9) VISTAS ALTERNATIVAS
Para elevar el impacto visual de la aplicación, incluir:
Kanban
Columnas:
En curso
Completada
Atrasada
Tarjetas con:
título
responsable
plazo
criticidad
Calendario o Línea de tiempo
Mostrar las tareas distribuidas por fecha.
Permitir ver:
tareas de la semana
tareas del mes
plazos próximos

10) SECCIONES DE INTELIGENCIA OPERATIVA
Agregar también:
Prioridades de la semana
Lista automática con las tareas de mayor criticidad y plazo próximo.
Riesgo de atraso
Lista de tareas que están por vencer o ya vencieron.
Carga por responsable
Mostrar cuántas tareas tiene cada integrante.

11) DATOS SIMULADOS
La aplicación debe abrir con datos de ejemplo ya cargados para que se vea viva en la demostración.
Crear:
Tareas
Al menos 12 tareas, incluyendo:
elaboración del informe mensual
respuesta a un oficio
actualización de la planilla de seguimiento
consolidación de indicadores
revisión de un expediente administrativo
preparación de la reunión de la unidad
organización de documentos institucionales
actualización del tablero de monitoreo
apoyo a una solicitud de la jefatura
revisión del borrador de un documento
relevamiento de datos para un informe
actualización del control interno
Distribuir las tareas entre:
distintos plazos
distintas criticidades
distintos responsables
distintos estados
Integrantes del equipo
Crear al menos 6 integrantes:
Ejemplos:
Ana Rodríguez — Coordinadora de la Unidad
Carla Méndez — Analista Administrativa
Julia Fernández — Técnica de Planificación
Laura Silva — Asistente de Gestión
Fernanda Pereira — Apoyo Administrativo
Patricia Gómez — Asesora Técnica
Crear 3 unidades diferentes.
Incluir al menos:
1 integrante de vacaciones
1 integrante con licencia

12) ESTRUCTURA VISUAL
La aplicación debe tener:
barra lateral moderna
panel inicial
página de tareas
página de equipo
formulario de tarea
vista Kanban
vista de calendario o línea de tiempo

13) ESTILO VISUAL
Diseño:
moderno
limpio
elegante
profesional
responsivo
Aplicar:
tarjetas bien diseñadas
buena tipografía
espaciado generoso
uso inteligente del color
indicadores visuales claros
apariencia de software institucional moderno
La aplicación debe transmitir eficiencia, organización y control operativo.

RESULTADO ESPERADO
El resultado debe ser una aplicación de gestión de tareas con apariencia de producto real, que contenga:
panel ejecutivo
gestión de tareas
registro del equipo
filtros e inteligencia operativa
vista Kanban
vista temporal
datos simulados realistas
La primera pantalla debe generar impacto visual inmediato, transmitiendo:
control de la operación
organización de las demandas
priorización clara
productividad del equipo
La interfaz debe parecer una plataforma moderna de gestión pública, y no un simple formulario.`

export const PAINEL_GOVERNANCA_PROMPT = `PERSONA

Eres Product Designer sénior, UX Strategist y Arquitecto de Aplicaciones no-code, especializado en crear sistemas web de gran claridad, alto valor percibido y experiencia visual profesional para organizaciones de cualquier tamaño y sector.

Tu especialidad es transformar exigencias normativas y de gobernanza en aplicaciones modernas, sobrias y visualmente impactantes, con apariencia de producto corporativo real listo para usar.

Tu tono debe ser objetivo, elegante, confiable y profesional. Diseñas interfaces que generan credibilidad inmediata en un contexto de reunión y auditoría, priorizando:
claridad
credibilidad
trazabilidad de las decisiones
excelente organización de la información

IDIOMA

Toda la interfaz, los textos, las etiquetas, los documentos generados y los datos de ejemplo deben estar en español.

MISIÓN PRINCIPAL

Crea una aplicación web completa de relevamiento y gestión de riesgos de sistemas de inteligencia artificial usados por organizaciones.

La aplicación la opera una persona de la organización que no participó en el desarrollo del sistema de IA. Puede ser alguien de cumplimiento, jurídico, riesgos, auditoría, datos, producto o de un área de negocio que usa el sistema. Esa persona es quien opera el relevamiento: responde lo que sabe, registra lo que no sabe e identifica a quién preguntarle el resto.

El sistema debe permitir:
registrar un sistema de IA en uso, en contratación o en evaluación
responder un cuestionario estructurado de gobernanza
registrar "no sé" como respuesta válida y productiva
generar automáticamente una matriz de riesgos a partir de las respuestas
clasificar cada riesgo en dos ejes de impacto: institucional y sobre las personas afectadas
decidir el tratamiento de cada riesgo
generar un dictamen técnico listo para llevar a una reunión
generar un oficio de consulta con las preguntas que siguen sin respuesta

La aplicación debe parecer un producto real, moderno y listo para usar, aunque no tenga integración con base de datos en esta primera versión. Usa el almacenamiento local del navegador para guardar los relevamientos.

PRINCIPIOS DEL PRODUCTO

El sistema debe construirse con foco en:
sobriedad institucional, no entusiasmo tecnológico
trazabilidad: toda clasificación tiene autoría y fecha
ausencia de cálculo oculto: la aplicación organiza y ubica, nunca puntúa por sí sola
"no sé" es un hallazgo, no una falla de quien opera
navegación lineal y predecible
valor percibido desde la primera pantalla

REGLA CENTRAL DEL PRODUCTO

La aplicación nunca asigna una nota de riesgo automáticamente.

Quien clasifica es siempre la persona. La aplicación solo sugiere un riesgo a partir de la respuesta, ubica la tarjeta en la matriz y registra quién clasificó y cuándo.

En todo texto generado, la aplicación debe tratar la clasificación como una decisión firmada, no como resultado de un cálculo. Ejemplo de redacción correcta: "clasificado como alto por [nombre], el [fecha]". Ejemplo de redacción prohibida: "el sistema lo clasificó como alto".

ESTRUCTURA DE LA APLICACIÓN

La aplicación debe tener las siguientes áreas principales:
Panel inicial
Nuevo relevamiento
Cuestionario
Matriz de riesgos
Dictamen
Oficio de consulta

1) PANEL INICIAL

Crear una pantalla inicial con visión ejecutiva de los relevamientos realizados.

Indicadores principales
total de sistemas de IA relevados
relevamientos en curso
relevamientos concluidos
total de riesgos identificados
riesgos sin responsable definido
riesgos clasificados como altos para las personas afectadas
preguntas que siguen sin respuesta

Paneles visuales
gráfico de riesgos por grupo temático
gráfico que compare el impacto institucional y el impacto sobre las personas
panel de riesgos por tipo de tratamiento decidido
panel de vacíos: preguntas respondidas con "no sé"

Bloques estratégicos
Ausencias de responsabilidad
Riesgos aceptados sobre terceros
Reevaluaciones vencidas
Relevamientos recientes

Si todavía no hay ningún relevamiento, la pantalla inicial debe mostrar una invitación clara a iniciar el primero, y no una pantalla vacía.

2) NUEVO RELEVAMIENTO

Formulario breve de identificación del sistema de IA analizado:
nombre del sistema
proveedor o desarrollador
área, dirección o unidad responsable del uso
finalidad declarada del sistema
tipo de decisión que el sistema apoya o automatiza
público afectado por la decisión
situación: en uso, en contratación, en evaluación, en desarrollo interno
fecha del relevamiento
nombre de quien opera el relevamiento

3) CUESTIONARIO ESTRUCTURADO

El cuestionario es el núcleo de la aplicación. Está organizado en seis grupos temáticos, y cada pregunta sigue una cadena de tres escalones:
quién responde por esto
dónde está registrado
qué pasa cuando falla

Cada pregunta debe mostrar, de forma visible en la interfaz:
el grupo al que pertenece
el destinatario sugerido de la pregunta
la norma de referencia
el riesgo que se generará si la respuesta es "no sé"

Destinatarios posibles, mostrados como etiqueta de color:
respondo yo
le pregunto al área técnica
le pregunto al proveedor

Opciones de respuesta para cada pregunta:
sí, con evidencia (abre un campo para indicar documento, enlace o expediente)
sí, sin evidencia documental
no
no sé o no hay responsable identificado

GRUPO 1 · RESPONSABILIDAD Y DECISIÓN
Quién responde institucionalmente por este sistema, con nombre y cargo
En qué política interna, norma o proceso formal está registrada esa responsabilidad
Qué pasa, y con quién, cuando el sistema produce un resultado indebido

GRUPO 2 · ORIGEN DE LOS DATOS
Quién responde por la base de datos que entrenó el modelo
En qué documento está registrado cómo se trató el sesgo en esa base
Cuál es la población de referencia del caso de uso y cuál es la población efectivamente presente en la base
La raza y otros marcadores son autodeclarados, asignados por terceros o inferidos por el sistema

GRUPO 3 · VARIABLES PROXY
Qué variables del modelo pueden cargar raza, género, ingresos o territorio sin nombrarlos
En qué documento está registrada la prueba de eliminación de esas variables y su efecto en el resultado

GRUPO 4 · ERROR Y DESEMPEÑO
El desempeño se informa de forma agregada o desagregada por subgrupo de población
Existe una matriz de confusión por grupo y dónde está disponible para consulta
Qué error prefiere cometer el sistema y sobre quién recae ese error
Quién definió el umbral de decisión y con qué fundamento técnico

GRUPO 5 · IMPUGNACIÓN Y REVISIÓN
La persona afectada es informada de que hubo una decisión apoyada o tomada por un sistema automatizado
Existe un canal de revisión por una persona humana, con plazo definido
Quién responde por la revisión y dónde está registrado ese flujo

GRUPO 6 · CONTRATACIÓN Y CICLO DE VIDA
El contrato o el pliego prevé auditoría y acceso a la documentación técnica
Con qué frecuencia se reevalúa el sistema, por quién, y cuándo fue la última reevaluación
Qué pasa con el sistema si la evaluación identifica un daño a un grupo específico

4) TRATAMIENTO DEL "NO SÉ"

Esta es la funcionalidad más importante de la aplicación.

Cuando quien opera responde "no sé" o "no hay responsable identificado", la aplicación:
genera automáticamente un riesgo asociado a esa pregunta
clasifica ese riesgo como riesgo de opacidad o riesgo de gobernanza, según el grupo
agrega la pregunta a la lista del oficio de consulta, ya con el destinatario sugerido
registra la fecha en que se identificó el vacío

La aplicación debe dejar explícito en la interfaz que "no sé" no es una falla de quien opera. Usa un mensaje de apoyo con este sentido: la falta de respuesta es una evidencia registrable, y es la que sustenta el pedido formal de información.

5) MATRIZ DE RIESGOS CON DOS EJES DE IMPACTO

Cada riesgo identificado se convierte en una tarjeta. Quien opera clasifica manualmente cada tarjeta en dos dimensiones independientes:

Probabilidad: baja, media, alta

Impacto institucional: bajo, medio, alto
(ejemplos de consecuencia: judicialización, sanción, retrabajo, daño reputacional)

Impacto sobre las personas afectadas: bajo, medio, alto, o no aplica
(ejemplos de consecuencia: negación indebida de un derecho o beneficio, exposición, discriminación, pérdida de oportunidad)

La matriz debe mostrarse de dos formas complementarias:
dos matrices de calor lado a lado, una para cada eje de impacto
una tabla consolidada con todos los riesgos y ambas clasificaciones

DIVERGENCIA ENTRE LOS EJES

Cuando un riesgo reciba impacto institucional bajo o medio e impacto sobre las personas alto, la aplicación debe destacar visualmente esa tarjeta y mostrar la siguiente pregunta, sin bloquear la navegación:

"Riesgo bajo para el organismo y alto para quien es afectado. ¿Quién decide si esto es aceptable, y con qué fundamento?"

Estos casos deben aparecer reunidos en una sección propia del dictamen.

6) TRATAMIENTO DEL RIESGO

Para cada riesgo, quien opera elige un tratamiento:
aceptar
evitar
mitigar
compartir
transferir

Cada tratamiento exige:
responsable de la decisión, con nombre y cargo
plazo de reevaluación
descripción de la acción, cuando corresponda

REGLA ESPECIAL DE ACEPTACIÓN

Cuando el tratamiento elegido sea "aceptar" y el impacto sobre las personas afectadas esté clasificado como medio o alto, la aplicación debe exigir que se completen obligatoriamente dos campos antes de continuar:
justificación de la aceptación
nombre de quien asume la decisión

La aplicación no debe impedir la aceptación ni emitir un juicio moral. Solo debe hacer que la decisión sea visible, atribuible y quede registrada en el dictamen.

7) DICTAMEN TÉCNICO

Generar un documento con formato, listo para copiar e imprimir, con esta estructura:

Identificación del sistema analizado
Identificación de quien operó el relevamiento, con fecha
Resumen ejecutivo, con el total de riesgos y la distribución por clasificación
Riesgos identificados, en tabla, con ambas clasificaciones de impacto y el tratamiento decidido
Divergencias entre el impacto institucional y el impacto sobre las personas
Riesgos aceptados sobre terceros, con justificación y responsable
Ausencias de responsabilidad identificadas
Preguntas sin respuesta y sus destinatarios
Base normativa de referencia
Recomendaciones y próximos pasos
Campo de firma y fecha

El dictamen debe incluir, al final de la base normativa, la siguiente salvedad, destacada:
"El cumplimiento normativo es un piso, no un techo. Cumplir la norma no significa que no haya riesgo."

El dictamen debe permitir copiarlo completo con un clic e imprimirlo limpio, sin elementos de interfaz.

8) OFICIO DE CONSULTA

Generar un segundo documento, separado del dictamen, que reúna todas las preguntas que quedaron sin respuesta.

El documento debe agruparse por destinatario:
área técnica interna
proveedor o desarrollador
otras unidades

Cada pregunta debe aparecer con:
el texto de la pregunta
la norma que fundamenta el pedido de información
el riesgo registrado por la falta de respuesta

El documento debe tener un encabezado simple, con espacio para el logotipo y el nombre de la organización, campo de destinatario, campo de plazo de respuesta y campo de firma. Debe poder copiarse e imprimirse.

9) BASE NORMATIVA

Cada pregunta del cuestionario debe estar asociada a una referencia normativa, mostrada en la interfaz y reproducida en los documentos generados.

Referencias a utilizar:
Ley de protección de datos personales aplicable (en Uruguay, Ley N.º 18.331), principios de transparencia y de no discriminación
Ley de protección de datos personales aplicable, derecho a impugnar decisiones basadas en tratamientos automatizados y a conocer los criterios utilizados
Evaluación de impacto en la protección de datos personales, cuando corresponda
Cláusulas contractuales de auditoría, acceso a la documentación técnica y responsabilidad del proveedor, para las preguntas de contratación
Regulación sectorial aplicable al ámbito de la organización, cuando exista
ISO/IEC 42001, sistema de gestión de inteligencia artificial
ISO/IEC 23894, gestión de riesgos en inteligencia artificial

Crear una pantalla de configuración de la base normativa, donde quien opera pueda editar, agregar o reemplazar las referencias y asociarlas a las preguntas. Esto permite adaptar la aplicación a la legislación de cada país y a normas sectoriales específicas, como las de salud, sistema financiero, educación, telecomunicaciones o administración pública.

10) DATOS SIMULADOS

La aplicación debe abrir con un relevamiento de ejemplo ya completado, para que se vea viva en la demostración.

Crear tres sistemas de IA ficticios, verosímiles para cualquier organización mediana o grande:
Sistema de preselección automatizada de postulaciones en un proceso de selección
Asistente de clasificación de denuncias recibidas por un canal de ética
Herramienta de priorización de atenciones mediante análisis de datos históricos

El primero debe tener el relevamiento concluido y contener:
al menos 10 riesgos identificados
al menos 3 preguntas respondidas con "no sé"
al menos 1 riesgo con impacto institucional bajo e impacto sobre las personas alto
al menos 1 riesgo aceptado con justificación registrada
al menos 1 riesgo sin responsable definido

El segundo debe estar en curso, parcialmente respondido.
El tercero debe estar solo registrado, sin respuestas.

Crear nombres ficticios de quienes operan, con cargos verosímiles: analista de cumplimiento, gerente de riesgos, coordinadora de datos, auditora interna, abogada corporativa.

11) ESTRUCTURA VISUAL

La aplicación debe tener:
barra lateral de navegación
panel inicial
flujo de relevamiento por etapas, con indicador de progreso
pantalla de matriz de riesgos
pantalla de dictamen
pantalla de oficio
pantalla de configuración de la base normativa

12) ESTILO VISUAL

Diseño:
sobrio
institucional
moderno
limpio
responsivo

Aplicar:
tarjetas bien diseñadas
tipografía legible y jerarquizada
espaciado generoso
paleta contenida, con color usado solo para la clasificación de riesgo y las etiquetas de destinatario
indicadores visuales claros
apariencia de sistema corporativo de gobernanza, no de startup

Evitar:
exceso de íconos decorativos
lenguaje promocional
degradados llamativos
cualquier elemento que sugiera que la aplicación calcula o decide por sí sola

La aplicación debe transmitir rigor, responsabilidad y trazabilidad.

RESULTADO ESPERADO

El resultado debe ser una aplicación de gobernanza de riesgos de inteligencia artificial con apariencia de producto institucional real, que contenga:
panel inicial con visión de los relevamientos
cuestionario estructurado en seis grupos, con destinatario y norma por pregunta
tratamiento del "no sé" como generador automático de riesgo y de pregunta formal
matriz de riesgos con dos ejes independientes de impacto
regla de justificación obligatoria para aceptar riesgos sobre terceros
dictamen técnico copiable e imprimible
oficio de consulta agrupado por destinatario
base normativa editable
datos simulados realistas

La primera pantalla debe generar credibilidad inmediata, transmitiendo:
control del proceso de gobernanza
trazabilidad de las decisiones tomadas
visibilidad de los vacíos de responsabilidad
preparación para llevar el resultado a una reunión

La interfaz debe parecer un sistema oficial de gestión de riesgos, y no un formulario de encuesta.`

export const BOAS_PRATICAS = [
  {
    num: '01',
    title: 'Divide el sistema en partes',
    body:
      'Evita pedir páginas enteras de una vez. Pide componentes más pequeños y después combínalos. Construir por partes te da más control sobre el resultado.',
    bom: 'Crea una tarjeta de perfil con foto, nombre y botón seguir.',
    ruim: 'Crea toda la página de perfil.',
  },
  {
    num: '02',
    title: 'Usa contenido real',
    body:
      'Evita textos genéricos como "lorem ipsum". El contenido real ayuda a la IA a generar un diseño más coherente, espaciado correcto y botones realistas. Incluye ejemplos de títulos, descripciones y acciones.',
  },
  {
    num: '03',
    title: 'Pide preguntas antes de generar código',
    body:
      'Si el sistema es más complejo, pide a la IA que entienda mejor el problema antes de empezar. Eso mejora la arquitectura inicial.',
    bom: 'Antes de generar el código, hazme preguntas para entender por completo el sistema.',
  },
  {
    num: '04',
    title: 'Piensa primero en el celular',
    body:
      'Gran parte de las personas usa aplicaciones desde el celular. Incluye la instrucción de diseño responsivo en todo prompt de interfaz para evitar problemas de diseño después.',
    bom: 'El diseño debe ser responsivo, pensado primero para celular (mobile-first).',
  },
  {
    num: '05',
    title: 'Haz evolucionar la aplicación por etapas',
    body:
      'Las aplicaciones reales no se crean con un único prompt. El proceso ocurre en ciclos: crear la estructura inicial, agregar funcionalidades, mejorar la interfaz, corregir errores. Este proceso iterativo produce mejores resultados.',
  },
  {
    num: '06',
    title: 'Usa prompts específicos',
    body:
      'Los prompts muy vagos generan resultados genéricos. Cuanto más específico el pedido, mejor el resultado.',
    bom: 'Crea un panel con gráfico de ventas, tabla de pedidos y filtros por fecha.',
    ruim: 'Crea un panel.',
  },
  {
    num: '07',
    title: 'Pega los errores en el chat',
    body:
      'Si aparece un error en el sistema, copia el mensaje y envíaselo a la IA. Puede analizar mensajes de error y sugerir correcciones.',
    bom: 'Apareció este error al ejecutar la aplicación. ¿Puedes identificar el problema?',
  },
]

export const BIBLIOTECA_GROUPS = [
  {
    id: 'comecar',
    label: 'Empezar la app',
    prompts: [
      {
        title: 'Landing page — estructura inicial',
        text:
          'Crea una landing page moderna para [describe el producto]. El público objetivo es [quién]. La acción principal es [qué]. Usa un diseño minimalista con sección hero, sección de funcionalidades con íconos y llamado a la acción final. El diseño debe ser responsivo, pensado primero para celular. Todos los textos en español.',
      },
      {
        title: 'Página inicial con diseño base',
        text:
          'Crea la estructura base de la aplicación con: encabezado con logotipo y menú de navegación, área central de contenido, pie de página simple. El diseño debe ser responsivo, pensado primero para celular. Todos los textos en español.',
      },
      {
        title: 'Preguntas antes de empezar',
        text:
          'Antes de generar cualquier código, hazme preguntas para entender por completo el sistema que quiero construir. Espera mis respuestas antes de empezar.',
      },
    ],
  },
  {
    id: 'usuario',
    label: 'Área de usuario',
    prompts: [
      {
        title: 'Inicio de sesión y registro',
        text:
          'Agrega un sistema de inicio de sesión y registro con correo y contraseña. Crea las páginas /login y /signup con formularios validados. Después de iniciar sesión, redirige a /dashboard. Usa Lovable Cloud para la autenticación.',
      },
      {
        title: 'Panel de quien inició sesión',
        text:
          'Crea una página de panel para quien inició sesión. Debe tener: barra lateral con navegación, encabezado con avatar y botón de cerrar sesión, área central con tarjetas de métricas y una tabla de datos recientes. Diseño limpio y responsivo.',
      },
      {
        title: 'Perfil editable',
        text:
          'Crea una página de perfil con: foto, nombre, correo y campos editables. Botón guardar que actualiza los datos en la base. Mensaje visual de éxito o error.',
      },
    ],
  },
  {
    id: 'dados',
    label: 'Datos y CRUD',
    prompts: [
      {
        title: 'CRUD completo',
        text:
          'Crea un CRUD completo para [recurso] usando Lovable Cloud. Tabla en la base con RLS, listado con estado de carga, creación, edición en línea, confirmación de eliminación. user_id vinculado automáticamente.',
      },
      {
        title: 'Tabla con filtros y búsqueda',
        text:
          'Crea una tabla de datos con: búsqueda por texto, filtro por estado (desplegable), ordenamiento al hacer clic en las columnas, paginación. Datos de ejemplo con más de 20 ítems. Diseño limpio con resaltado al pasar el mouse por las filas.',
      },
      {
        title: 'Carga de archivos',
        text:
          'Agrega carga de archivos en la página [cuál]. Lovable Cloud Storage, bucket [público/privado]. Vista previa antes de subir, barra de progreso, manejo de errores. Límite de 5MB.',
      },
    ],
  },
  {
    id: 'experiencia',
    label: 'Experiencia',
    prompts: [
      {
        title: 'Animaciones de entrada',
        text:
          'Agrega animaciones de entrada suaves en tarjetas y secciones. Usa framer-motion con fade-in y slide-up. Retraso escalonado entre elementos. 0.4s con easing suave.',
      },
      {
        title: 'Modo oscuro',
        text:
          'Agrega la opción de alternar entre modo claro y oscuro. Botón de alternancia en el encabezado. La preferencia debe guardarse y aplicarse automáticamente en la próxima visita.',
      },
      {
        title: 'Diseño responsivo',
        text:
          'Revisa todas las páginas de la aplicación y ajusta el diseño para que funcione bien en celular, tablet y computadora. Prioriza la versión para celular. Corrige elementos cortados, letras pequeñas y botones difíciles de tocar.',
      },
    ],
  },
  {
    id: 'ia',
    label: 'Integración con IA',
    prompts: [
      {
        title: 'Funcionalidad con IA generativa',
        text:
          'Agrega una funcionalidad de IA que [describe lo que debe hacer]. Usa Lovable AI con el modelo gemini-2.5-flash. Estado de carga durante el procesamiento. Resultado mostrado como texto organizado, en español.',
      },
      {
        title: 'Análisis de texto',
        text:
          'Crea una funcionalidad donde la persona pega un texto y la IA devuelve: resumen en 3 líneas, puntos principales y nivel de claridad. Muestra el resultado en tarjetas separadas, en español.',
      },
      {
        title: 'Investigar un error',
        text:
          'Estoy recibiendo este error: [pega el error aquí]. Investiga, explica la causa raíz y corrígelo. Prueba la corrección.',
      },
    ],
  },
]
