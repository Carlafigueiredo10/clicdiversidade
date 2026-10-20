import { Link } from 'react-router-dom'
import { LANG, tr } from '../../i18n'

// Na versao em espanhol: exemplos e normas uruguaios (ver memoria do marco
// de IA do Uruguai) e a secao "Referenciales" com a AIE e a EIA da AGESIC.
const T = tr({
  pt: {
    eyebrow: 'Módulo 06 · Governança de IA',
    titulo: ['Governança de IA', 'no setor público'],
    intro: 'Avalie riscos no uso de IA e gere um rastro decisório para processos institucionais.',
    iniciarLelia: 'Iniciar análise com a Lélia ↗',
    fazerAie: 'Fazer autoavaliação (AIE)',
    leliaSub: 'assistente de mediação de risco em IA para o setor público',
    leliaIdioma: null,
    meta: ['Leva cerca de 5 minutos', 'Gera documento exportável', 'Requer revisão humana final'],
    entregaEyebrow: 'O que a ferramenta entrega',
    entregaTitulo: 'Três entregas',
    comoEyebrow: 'Como funciona',
    comoTitulo: 'Quatro passos',
    classEyebrow: 'As cinco classificações',
    classTitulo: 'O que a Lélia te devolve',
    classDica: 'Clique em cada classificação para ver descrição e exemplo.',
    exemplo: 'Exemplo',
    limEyebrow: 'Limites da ferramenta',
    limTitulo: 'O que ela não faz',
    ctaTitulo: 'Iniciar análise de uso de IA',
    ctaTexto: 'Descreva o caso e receba uma análise estruturada com classificação e rastreabilidade.',
    ctaBotao: 'Iniciar análise ↗',
    rodGov: 'Governança',
    rodBase: 'Base teórica e normativa',
    rodComo: 'Como funciona',
    rodMetodo: 'Metodologia de classificação',
    rodLimites: 'Limites da ferramenta',
    rodMarcos: 'Marcos normativos',
    marcos: ['Portaria MGI 3.485/2026', 'Framework AIE/MGI', 'LGPD · Lei 13.709/2018', 'LAI · Lei 12.527/2011'],
    rodModelo: 'Modelo',
    modelo: ['Persona Lélia v9', 'Claude Opus 4.7 (Anthropic)', 'Sem treinamento sobre os dados', 'Identificação obrigatória de IA'],
    rodNav: 'Navegação',
    rodModulos: 'Todos os módulos',
    rodGlossario: 'Glossário',
  },
  es: {
    eyebrow: 'Módulo 06 · Gobernanza de IA',
    titulo: ['Gobernanza de IA', 'en el sector público'],
    intro: 'Evalúa los riesgos del uso de IA y genera un registro de decisiones para los procesos institucionales.',
    iniciarLelia: 'Iniciar análisis con Lélia ↗',
    fazerAie: 'Hacer la autoevaluación (AIE)',
    leliaSub: 'asistente de mediación de riesgos de IA para el sector público',
    leliaIdioma: 'Por ahora, Lélia funciona en portugués y con el marco normativo brasileño. La versión en español está en preparación.',
    meta: ['Lleva unos 5 minutos', 'Genera un documento exportable', 'Requiere revisión humana final'],
    entregaEyebrow: 'Lo que entrega la herramienta',
    entregaTitulo: 'Tres entregas',
    comoEyebrow: 'Cómo funciona',
    comoTitulo: 'Cuatro pasos',
    classEyebrow: 'Las cinco clasificaciones',
    classTitulo: 'Lo que te devuelve Lélia',
    classDica: 'Haz clic en cada clasificación para ver la descripción y un ejemplo.',
    exemplo: 'Ejemplo',
    limEyebrow: 'Límites de la herramienta',
    limTitulo: 'Lo que no hace',
    ctaTitulo: 'Iniciar el análisis de un uso de IA',
    ctaTexto: 'Describe el caso y recibe un análisis estructurado, con clasificación y trazabilidad.',
    ctaBotao: 'Iniciar análisis ↗',
    rodGov: 'Gobernanza',
    rodBase: 'Base teórica y normativa',
    rodComo: 'Cómo funciona',
    rodMetodo: 'Metodología de clasificación',
    rodLimites: 'Límites de la herramienta',
    rodMarcos: 'Marco normativo (Uruguay)',
    marcos: ['Ley 18.331 · Protección de Datos Personales', 'Ley 18.381 · Acceso a la Información Pública', 'Estrategia Nacional de IA 2024–2030', 'Guía EIA · AGESIC'],
    rodModelo: 'Modelo',
    modelo: ['Persona Lélia v9', 'Claude Opus 4.7 (Anthropic)', 'Sin entrenamiento con los datos', 'Identificación obligatoria del uso de IA'],
    rodNav: 'Navegación',
    rodModulos: 'Todos los módulos',
    rodGlossario: 'Glosario',
  },
})

// Referenciales (solo ES): el instrumento propio y el oficial de Uruguay.
const REFERENCIALES = [
  {
    selo: 'Herramienta interactiva · CLIC',
    titulo: 'Autoevaluación de Impacto Ético (AIE)',
    descricao:
      'Cuestionario en dos partes que se responde aquí mismo: clasifica el nivel de riesgo del proyecto, puntúa las respuestas y recomienda próximos pasos. Adaptado a la normativa uruguaya. Todo se procesa en tu navegador.',
    cta: 'Hacer la autoevaluación',
    to: '/modulos/governanca/aie',
  },
  {
    selo: 'Instrumento oficial · AGESIC (Uruguay)',
    titulo: 'Guía para el Estudio de Impacto Algorítmico (EIA)',
    descricao:
      'Preguntas de la AGESIC para equipos que desarrollan sistemas automatizados de toma de decisiones: impacto social, datos, explicabilidad e imparcialidad procesal. Pensada para discutir en equipo; no asigna puntaje ni nivel de riesgo.',
    cta: 'Ver la guía en gub.uy',
    href: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/publicaciones/guia-para-estudio-impacto-algoritmico',
  },
]

const ENTREGAS_PT = [
  {
    titulo: 'Mediação de risco',
    descricao:
      'Analisa o uso pretendido de IA e identifica riscos jurídicos, éticos e operacionais.',
  },
  {
    titulo: 'Autoavaliação AIE',
    descricao:
      'Aplica o framework do MGI para classificar o nível de risco do caso.',
  },
  {
    titulo: 'Rastro Decisório',
    descricao:
      'Gera documentação estruturada pronta para anexar ao processo.',
  },
]

const ENTREGAS_ES = [
  {
    titulo: 'Mediación de riesgos',
    descricao:
      'Analiza el uso previsto de la IA e identifica riesgos jurídicos, éticos y operativos.',
  },
  {
    titulo: 'Autoevaluación AIE',
    descricao:
      'Aplica un marco de autoevaluación de impacto ético para clasificar el nivel de riesgo del caso.',
  },
  {
    titulo: 'Registro de decisiones',
    descricao:
      'Genera documentación estructurada, lista para adjuntar al expediente.',
  },
]

const ENTREGAS = tr({ pt: ENTREGAS_PT, es: ENTREGAS_ES })

const PASSOS_PT = [
  {
    n: '01',
    titulo: 'Descreva o uso',
    descricao: 'Conte para a Lélia o que você quer fazer com IA, em linguagem natural.',
  },
  {
    n: '02',
    titulo: 'Informe o ambiente',
    descricao: 'Aberta, por API, contratada ou própria. A régua de risco muda com isso.',
  },
  {
    n: '03',
    titulo: 'Receba a análise',
    descricao: 'Classificação, problema, motivo, caminhos e perguntas para aprofundar.',
  },
  {
    n: '04',
    titulo: 'Gere o documento',
    descricao: 'Baixe o Rastro Decisório em Markdown e anexe ao processo.',
  },
]

const PASSOS_ES = [
  { n: '01', titulo: 'Describe el uso', descricao: 'Cuéntale a Lélia qué quieres hacer con IA, en lenguaje natural.' },
  { n: '02', titulo: 'Indica el entorno', descricao: 'Abierta, por API, contratada o propia. La vara del riesgo cambia según eso.' },
  { n: '03', titulo: 'Recibe el análisis', descricao: 'Clasificación, problema, motivo, caminos y preguntas para profundizar.' },
  { n: '04', titulo: 'Genera el documento', descricao: 'Descarga el registro de decisiones en Markdown y adjúntalo al expediente.' },
]

const PASSOS = tr({ pt: PASSOS_PT, es: PASSOS_ES })

const DESFECHOS_PT = [
  {
    emoji: '✅',
    titulo: 'Permitido',
    descricao: 'Uso compatível com boas práticas. Pode prosseguir.',
    exemplo: 'Traduzir trechos de uma norma já publicada no DOU para envio a parceiro internacional.',
    borda: 'border-emerald-500/40',
  },
  {
    emoji: '⚠️',
    titulo: 'Permitido com condições',
    descricao: 'Exige mitigações (anonimização, ambiente institucional, revisão humana, cláusulas contratuais). É onde cai a maior parte dos casos.',
    exemplo: 'Resumir atas de reunião interna usando versão enterprise da IA, identificando o uso de IA no documento.',
    borda: 'border-amber-400/50',
  },
  {
    emoji: '⚠️',
    titulo: 'Alto risco — viabilizar exige redesenho',
    descricao: 'Risco alto, mas viabilizável mudando o escopo do que a IA faz.',
    exemplo: 'Chatbot decidindo automaticamente respostas LAI. Caminho: triar casos simples + encaminhar complexos a servidor humano.',
    borda: 'border-orange-500/50',
  },
  {
    emoji: '❌',
    titulo: 'Não recomendado no formato atual',
    descricao: 'Desenho incompatível com princípios institucionais — a Lélia indica caminho alternativo.',
    exemplo: 'Analisar prontuários médicos no Gemini público. Caminho: ambiente segregado + base legal + supervisão técnica.',
    borda: 'border-red-500/40',
  },
  {
    emoji: '🛑',
    titulo: 'Risco Excessivo',
    descricao: 'Uso vedado por contrariar direitos fundamentais. Recomenda interrupção do projeto.',
    exemplo: 'Reconhecimento facial em massa em manifestações públicas. Vigilância biométrica indiscriminada é Red Line do AIE.',
    borda: 'border-red-700/50',
  },
]

const DESFECHOS_ES = [
  {
    emoji: '✅',
    titulo: 'Permitido',
    descricao: 'Uso compatible con las buenas prácticas. Puede seguir adelante.',
    exemplo: 'Traducir fragmentos de una norma ya publicada en el Diario Oficial para enviarla a un socio internacional.',
    borda: 'border-emerald-500/40',
  },
  {
    emoji: '⚠️',
    titulo: 'Permitido con condiciones',
    descricao: 'Exige medidas de mitigación (anonimización, entorno institucional, revisión humana, cláusulas contractuales). Es donde cae la mayoría de los casos.',
    exemplo: 'Resumir actas de reuniones internas con la versión corporativa de la IA, indicando en el documento que se usó IA.',
    borda: 'border-amber-400/50',
  },
  {
    emoji: '⚠️',
    titulo: 'Alto riesgo — viabilizarlo exige rediseño',
    descricao: 'Riesgo alto, pero viable si se cambia el alcance de lo que hace la IA.',
    exemplo: 'Un chatbot que responde automáticamente las solicitudes de acceso a la información pública (Ley 18.381). Camino: clasificar los casos simples y derivar los complejos a una persona funcionaria.',
    borda: 'border-orange-500/50',
  },
  {
    emoji: '❌',
    titulo: 'No recomendado en el formato actual',
    descricao: 'Diseño incompatible con los principios institucionales — Lélia indica un camino alternativo.',
    exemplo: 'Analizar historias clínicas en Gemini público. Camino: entorno segregado + base legal + supervisión técnica.',
    borda: 'border-red-500/40',
  },
  {
    emoji: '🛑',
    titulo: 'Riesgo Excesivo',
    descricao: 'Uso vedado por contrariar derechos fundamentales. Recomienda interrumpir el proyecto.',
    exemplo: 'Reconocimiento facial masivo en manifestaciones públicas. La vigilancia biométrica indiscriminada es una línea roja de la AIE.',
    borda: 'border-red-700/50',
  },
]

const DESFECHOS = tr({ pt: DESFECHOS_PT, es: DESFECHOS_ES })

const LIMITES_PT = [
  {
    titulo: 'Não substitui parecer jurídico',
    descricao: 'Decisões com efeito jurídico definitivo seguem com a consultoria do órgão.',
  },
  {
    titulo: 'Classificação é orientativa',
    descricao: 'Detalhes não declarados mudam a régua. Por isso a Lélia faz perguntas para aprofundar.',
  },
  {
    titulo: 'Exige revisão humana',
    descricao: 'Toda recomendação é insumo. A decisão final cabe ao servidor responsável.',
  },
  {
    titulo: 'Sobre os dados que você envia',
    descricao: 'Uso "Por API" do Claude (Anthropic), sem treinamento. Mesmo assim, não insira dados sensíveis ou sigilosos.',
  },
]

const LIMITES_ES = [
  { titulo: 'No reemplaza un dictamen jurídico', descricao: 'Las decisiones con efecto jurídico definitivo siguen pasando por la asesoría jurídica del organismo.' },
  { titulo: 'La clasificación es orientativa', descricao: 'Los detalles no declarados cambian la vara. Por eso Lélia hace preguntas para profundizar.' },
  { titulo: 'Exige revisión humana', descricao: 'Toda recomendación es un insumo. La decisión final corresponde a la persona funcionaria responsable.' },
  { titulo: 'Sobre los datos que envías', descricao: 'Uso de Claude (Anthropic) "por API", sin entrenamiento. Aun así, no ingreses datos sensibles ni reservados.' },
]

const LIMITES = tr({ pt: LIMITES_PT, es: LIMITES_ES })

function MetaCTA() {
  return (
    <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-soft">
      <li className="flex items-center gap-2">
        <span aria-hidden>⏱</span>
        <span>{T.meta[0]}</span>
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden>📄</span>
        <span>{T.meta[1]}</span>
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden>👤</span>
        <span>{T.meta[2]}</span>
      </li>
    </ul>
  )
}

function MetaCTADark() {
  return (
    <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-page/70">
      <li className="flex items-center gap-2">
        <span aria-hidden>⏱</span>
        <span>{T.meta[0]}</span>
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden>📄</span>
        <span>{T.meta[1]}</span>
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden>👤</span>
        <span>{T.meta[2]}</span>
      </li>
    </ul>
  )
}

function Referenciales() {
  return (
    <section id="referenciales" className="bg-surface px-5 py-16 md:py-20 border-t border-line">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            Referenciales
          </p>
          <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
            Dos formas de evaluar el impacto
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-ink-soft text-sm md:text-base leading-relaxed">
            La herramienta del CLIC da un diagnóstico inmediato; la guía de la
            AGESIC es el instrumento oficial de Uruguay. Se complementan.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {REFERENCIALES.map((r) => {
            const inner = (
              <>
                <span className="text-[10px] uppercase tracking-wider text-accent-fg font-semibold">
                  {r.selo}
                </span>
                <h3 className="mt-3 font-display font-semibold text-xl text-ink leading-snug">
                  {r.titulo}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">
                  {r.descricao}
                </p>
                <span className="mt-5 pt-4 border-t border-line text-sm font-medium text-accent-fg">
                  {r.cta} {r.href ? '↗' : '→'}
                </span>
              </>
            )
            const cls =
              'bg-card border border-line rounded-2xl p-6 flex flex-col hover:border-accent/40 transition'
            return r.href ? (
              <a key={r.titulo} href={r.href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={r.titulo} to={r.to} className={cls}>
                {inner}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function Governanca() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-page px-5 pt-16 pb-20 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
            {T.eyebrow}
          </p>
          <h1 className="mt-6 font-display font-semibold text-4xl md:text-6xl text-ink leading-[1.05]">
            {T.titulo[0]}
            <br />
            <span className="italic text-accent-fg">{T.titulo[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-ink-soft text-base md:text-lg leading-relaxed">
            {T.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.lelia.ia.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink text-page px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              {T.iniciarLelia}
            </a>
            <Link
              to="/modulos/governanca/aie"
              className="rounded-full border border-line bg-card text-ink px-6 py-3 text-sm font-medium hover:border-accent/40 transition"
            >
              {T.fazerAie}
            </Link>
          </div>

          <MetaCTA />

          <div className="mt-12 inline-flex items-center gap-3 text-xs md:text-sm text-ink-soft">
            <img
              src="/jornada/lelia.png"
              alt=""
              aria-hidden
              className="w-9 h-9 rounded-full border border-line bg-card object-cover"
            />
            <span>
              <strong className="text-ink font-medium">Lélia</strong> · {T.leliaSub}
            </span>
          </div>
          {T.leliaIdioma && (
            <p className="mt-4 max-w-md mx-auto text-xs text-muted leading-relaxed">
              {T.leliaIdioma}
            </p>
          )}
        </div>
      </section>

      {LANG === 'es' && <Referenciales />}

      {/* SEÇÃO 1: O QUE A FERRAMENTA ENTREGA */}
      <section className="bg-page px-5 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
              {T.entregaEyebrow}
            </p>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
              {T.entregaTitulo}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {ENTREGAS.map((item) => (
              <article
                key={item.titulo}
                className="bg-card border border-line rounded-2xl p-6"
              >
                <h3 className="font-display font-semibold text-lg text-ink leading-snug">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {item.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: COMO FUNCIONA */}
      <section id="fluxo" className="bg-surface px-5 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
              {T.comoEyebrow}
            </p>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
              {T.comoTitulo}
            </h2>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PASSOS.map((p) => (
              <li
                key={p.n}
                className="bg-card border border-line rounded-2xl p-6"
              >
                <span className="block text-xs font-mono text-accent-fg tracking-wider">
                  {p.n}
                </span>
                <h3 className="mt-3 font-display font-semibold text-base text-ink leading-snug">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {p.descricao}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SEÇÃO 3: CLASSIFICAÇÕES (accordion) */}
      <section id="classificacoes" className="bg-page px-5 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
              {T.classEyebrow}
            </p>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
              {T.classTitulo}
            </h2>
            <p className="mt-4 text-ink-soft text-sm md:text-base leading-relaxed">
              {T.classDica}
            </p>
          </div>

          <ul className="mt-10 space-y-3">
            {DESFECHOS.map((d) => (
              <li key={d.titulo}>
                <details
                  className={
                    'group rounded-2xl border bg-card overflow-hidden ' + d.borda
                  }
                >
                  <summary className="flex items-center gap-3 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span aria-hidden className="text-xl shrink-0 leading-none">
                      {d.emoji}
                    </span>
                    <h3 className="font-display font-semibold text-base md:text-lg text-ink leading-snug flex-1">
                      {d.titulo}
                    </h3>
                    <span
                      aria-hidden
                      className="shrink-0 text-ink-soft text-sm transition-transform group-open:rotate-180"
                    >
                      ▾
                    </span>
                  </summary>
                  <div className="px-5 pb-5 -mt-1 ml-9 md:ml-10">
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {d.descricao}
                    </p>
                    <p className="mt-3 text-xs md:text-sm text-ink leading-relaxed">
                      <span className="text-[10px] uppercase tracking-wider text-accent-fg font-semibold mr-2">
                        {T.exemplo}
                      </span>
                      {d.exemplo}
                    </p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEÇÃO 4: LIMITES */}
      <section id="limites" className="bg-surface px-5 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
              {T.limEyebrow}
            </p>
            <h2 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
              {T.limTitulo}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {LIMITES.map((l) => (
              <article
                key={l.titulo}
                className="bg-card border border-line rounded-2xl p-5"
              >
                <h3 className="font-display font-semibold text-base text-ink leading-snug">
                  {l.titulo}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {l.descricao}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL (inverted) */}
      <section className="bg-ink text-page px-5 py-20 md:py-24 border-t border-line">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight">
            {T.ctaTitulo}
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-page/70 text-base md:text-lg leading-relaxed">
            {T.ctaTexto}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.lelia.ia.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-page text-ink px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              {T.ctaBotao}
            </a>
            <Link
              to="/modulos/governanca/aie"
              className="rounded-full border border-page/30 text-page px-6 py-3 text-sm font-medium hover:bg-page/10 transition"
            >
              {T.fazerAie}
            </Link>
          </div>
          <MetaCTADark />
        </div>
      </section>

      {/* FOOTER INSTITUCIONAL */}
      <section className="bg-page px-5 py-12 border-t border-line">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-accent-fg font-semibold">
                {T.rodGov}
              </p>
              <ul className="mt-3 space-y-2 text-ink-soft">
                <li>
                  <Link to="/base-teorica" className="hover:text-ink transition">
                    {T.rodBase}
                  </Link>
                </li>
                <li>
                  <a href="#fluxo" className="hover:text-ink transition">
                    {T.rodComo}
                  </a>
                </li>
                <li>
                  <a href="#classificacoes" className="hover:text-ink transition">
                    {T.rodMetodo}
                  </a>
                </li>
                <li>
                  <a href="#limites" className="hover:text-ink transition">
                    {T.rodLimites}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent-fg font-semibold">
                {T.rodMarcos}
              </p>
              <ul className="mt-3 space-y-2 text-ink-soft">
                {T.marcos.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent-fg font-semibold">
                {T.rodModelo}
              </p>
              <ul className="mt-3 space-y-2 text-ink-soft">
                {T.modelo.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-accent-fg font-semibold">
                {T.rodNav}
              </p>
              <ul className="mt-3 space-y-2 text-ink-soft">
                <li>
                  <a href="/jornada/#modulos" className="hover:text-ink transition">
                    {T.rodModulos}
                  </a>
                </li>
                <li>
                  <Link to="/glossario" className="hover:text-ink transition">
                    {T.rodGlossario}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
