/*
 * Landing em espanhol + seletor PT | ES no header.
 *
 * O bundle da landing e pre-built (sem fonte neste repo), entao a traducao
 * e feita no DOM: cada no de texto renderizado e trocado pela versao em
 * espanhol por correspondencia exata (dicionario abaixo). Texto que nao
 * esta no dicionario fica como esta.
 *
 * Depende de /assets/clic-lang.js (window.CLIC_LANG).
 * Precisa carregar DEPOIS dos patches do index.html: eles reconhecem links
 * pelo texto em portugues, e a traducao roda num frame posterior a eles.
 */
(function () {
  'use strict'

  var ES = {
    // header
    'Por que importa': 'Por qué importa',
    'Proposta': 'Propuesta',
    'Experiência': 'Experiencia',
    'Princípios': 'Principios',
    'Para quem é': 'Para quién es',
    'Começar jornada': 'Comenzar el recorrido',
    'Módulos': 'Módulos',
    'Glossário': 'Glosario',
    'Entrar': 'Ingresar',

    // hero
    'Iniciativa de letramento digital · IA pública': 'Iniciativa de alfabetización digital · IA pública',
    'IA com': 'IA con',
    'diversidade': 'diversidad',
    'inclusão e responsabilidade': 'inclusión y responsabilidad',
    'desde a origem.': 'desde el origen.',
    'Uma iniciativa de letramento digital aplicada ao setor público para a construção de soluções mais inclusivas, transparentes e conscientes — a partir de quem decide, projeta e usa.':
      'Una iniciativa de alfabetización digital aplicada al sector público para construir soluciones más inclusivas, transparentes y conscientes — desde quienes deciden, diseñan y usan.',
    'Conhecer a proposta': 'Conocer la propuesta',
    'Explorar trilhas': 'Explorar rutas',
    'Conhecer módulos': 'Conocer los módulos',
    'trilhas formativas': 'rutas formativas',
    'de imersão prática': 'de inmersión práctica',
    'inteligência coletiva': 'inteligencia colectiva',
    'Acessibilidade': 'Accesibilidad',
    'Em deliberação…': 'En deliberación…',
    'Role para descobrir': 'Desliza para descubrir',

    // § 01 diagnostico
    'Diagnóstico': 'Diagnóstico',
    'Por que isso': 'Por qué esto',
    'importa agora.': 'importa ahora.',
    'A tecnologia que organiza políticas públicas não é neutra. Cada modelo, dataset e interface reflete escolhas — e essas escolhas precisam ser feitas com consciência, pluralidade e responsabilidade.':
      'La tecnología que organiza las políticas públicas no es neutral. Cada modelo, dataset e interfaz refleja decisiones — y esas decisiones deben tomarse con conciencia, pluralidad y responsabilidad.',
    'Vieses algorítmicos': 'Sesgos algorítmicos',
    'Modelos treinados em dados parciais reproduzem desigualdades históricas em escala — silenciosa e invisível.':
      'Los modelos entrenados con datos parciales reproducen desigualdades históricas a gran escala — de forma silenciosa e invisible.',
    'Opacidade tecnológica': 'Opacidad tecnológica',
    'Decisões automatizadas sem rastreabilidade corroem a confiança pública e a possibilidade de revisão.':
      'Las decisiones automatizadas sin trazabilidad erosionan la confianza pública y la posibilidad de revisión.',
    'Exclusão digital': 'Exclusión digital',
    'Interfaces e infraestruturas projetadas para poucos deixam públicos inteiros fora do serviço.':
      'Las interfaces e infraestructuras diseñadas para pocos dejan a poblaciones enteras fuera del servicio.',
    'Ausência de diversidade': 'Falta de diversidad',
    'Equipes homogêneas constroem soluções homogêneas — e a tecnologia herda esse ponto cego.':
      'Los equipos homogéneos construyen soluciones homogéneas — y la tecnología hereda ese punto ciego.',

    // § 02 proposta
    'A iniciativa': 'La iniciativa',
    'O que é o': 'Qué es',
    'Um percurso formativo em cinco camadas que articula teoria crítica, prática técnica e responsabilidade institucional. Pensado para quem decide e implementa tecnologia no setor público.':
      'Un recorrido formativo en cinco capas que articula teoría crítica, práctica técnica y responsabilidad institucional. Pensado para quienes deciden e implementan tecnología en el sector público.',
    'Fundamentos críticos': 'Fundamentos críticos',
    'Letramento em IA, dados e linguagem das máquinas.': 'Alfabetización en IA, datos y el lenguaje de las máquinas.',
    'Oficinas práticas': 'Talleres prácticos',
    'Construção colaborativa com prototipagem no-code.': 'Construcción colaborativa con prototipado no-code.',
    'IA aplicada ao público': 'IA aplicada a lo público',
    'Estudos de caso reais em políticas e serviços.': 'Estudios de caso reales en políticas y servicios.',
    'Diversidade como qualidade': 'La diversidad como calidad',
    'Inclusão, acessibilidade e mitigação de viés.': 'Inclusión, accesibilidad y mitigación de sesgos.',
    'Autonomia tecnológica': 'Autonomía tecnológica',
    'Cada participante sai com soluções próprias.': 'Cada participante se lleva soluciones propias.',

    // § 03 experiencia
    'Experiência prática': 'Experiencia práctica',
    'O que se constrói': 'Lo que se construye',
    'durante a jornada.': 'durante el recorrido.',
    'Cada participante conclui o percurso com artefatos reais — não apenas conhecimento. Um agente próprio, um protótipo navegável e uma leitura crítica afiada para sustentar decisões.':
      'Cada participante termina el recorrido con productos reales — no solo conocimiento. Un agente propio, un prototipo navegable y una lectura crítica afinada para sustentar decisiones.',
    'Agente · análise ética': 'Agente · análisis ético',
    'Avaliar risco de viés no modelo de triagem de benefícios.':
      'Evaluar el riesgo de sesgo en el modelo de selección de beneficiarios de programas sociales.',
    'parecer': 'dictamen',
    'Detectada sub-representação de população rural (12% vs. 27% real). Recomenda-se rebalanceamento estratificado e auditoria de sensibilidade.':
      'Se detectó subrepresentación de la población rural (12% vs. 27% real). Se recomienda un rebalanceo estratificado y una auditoría de sensibilidad.',
    'sensibilidade': 'sensibilidad',
    'transparência': 'transparencia',
    'Equidade': 'Equidad',
    'Explicabilidade': 'Explicabilidad',
    'Checklist de inclusão': 'Checklist de inclusión',
    'Linguagem simples auditada': 'Lenguaje claro auditado',
    'Acessibilidade WCAG 2.2 AA': 'Accesibilidad WCAG 2.2 AA',
    'Mecanismo de contestação': 'Mecanismo de impugnación',
    'Protótipo no-code': 'Prototipo no-code',
    'Construa sem escrever uma linha.': 'Construye sin escribir una sola línea.',
    'Fluxo': 'Flujo',
    'Coleta': 'Recolección',
    'Validação': 'Validación',

    // § 04 principios
    'Seis compromissos': 'Seis compromisos',
    'que sustentam tudo.': 'que lo sostienen todo.',
    'Transparência': 'Transparencia',
    'Toda decisão automatizada deve poder ser explicada.': 'Toda decisión automatizada debe poder explicarse.',
    'Inclusão': 'Inclusión',
    'Diferentes corpos, vozes e contextos no centro do projeto.': 'Diferentes cuerpos, voces y contextos en el centro del proyecto.',
    'Sofisticada, não acessória. Padrão, não exceção.': 'Sofisticada, no accesoria. La norma, no la excepción.',
    'Princípios verificáveis em cada etapa do ciclo.': 'Principios verificables en cada etapa del ciclo.',
    'Autonomia': 'Autonomía',
    'Capacidade real de criar, auditar e ajustar.': 'Capacidad real de crear, auditar y ajustar.',
    'Pensamento crítico': 'Pensamiento crítico',
    'Tecnologia se sustenta em discernimento humano.': 'La tecnología se sostiene en el discernimiento humano.',

    // § 05 publico
    'quem decide e quem faz.': 'quienes deciden y quienes hacen.',
    'A trilha foi desenhada para coexistirem perfis técnicos e não-técnicos. Não é preciso saber programar — é preciso querer construir tecnologia mais consciente.':
      'La ruta fue diseñada para que convivan perfiles técnicos y no técnicos. No hace falta saber programar — hace falta querer construir una tecnología más consciente.',
    'Servidoras e servidores públicos': 'Funcionarias y funcionarios públicos',
    'Equipes de inovação': 'Equipos de innovación',
    'Lideranças e gestão estratégica': 'Liderazgos y gestión estratégica',
    'RH e gestão de pessoas': 'RR. HH. y gestión de personas',
    'Laboratórios de inovação pública': 'Laboratorios de innovación pública',
    'Pessoas sem formação técnica': 'Personas sin formación técnica',

    // § 06 convite
    'Convite': 'Invitación',
    'Tecnologia mais diversa': 'Tecnología más diversa',
    'gera': 'genera',
    'decisões públicas': 'decisiones públicas',
    'melhores.': 'mejores.',
    'Comece a jornada de letramento que reconfigura a relação entre IA, instituição e cidadania — uma decisão consciente por vez.':
      'Comienza el recorrido de alfabetización que reconfigura la relación entre IA, instituciones y ciudadanía — una decisión consciente a la vez.',

    // footer
    'Letramento digital aplicado à IA com diversidade, inclusão e responsabilidade — para o setor público.':
      'Alfabetización digital aplicada a la IA con diversidad, inclusión y responsabilidad — para el sector público.',
    'Trilhas': 'Rutas',
    'Oficinas': 'Talleres',
    'Certificação': 'Certificación',
    'Base teórica': 'Base teórica',
    'Manifesto': 'Manifiesto',
    'Equipe': 'Equipo',
    'Parcerias': 'Alianzas',
    'Imprensa': 'Prensa',
    'Conexão': 'Conexión',
    'Contato': 'Contacto',
    'Letramento · Inclusão · Consciência': 'Alfabetización · Inclusión · Conciencia',
    'Brasil — em silêncio, com intenção.': 'Brasil — en silencio, con intención.',
  }

  var META_ES = {
    title: 'CLIC_diversidade — IA con diversidad, inclusión y responsabilidad',
    description:
      'Iniciativa de alfabetización digital aplicada a la IA en el sector público — diversidad, inclusión, ética y autonomía tecnológica.',
  }

  // "§ 03 · Experiência prática": o numero e renumerado pelo widget da Lelia,
  // entao traduz so o que vem depois do prefixo.
  var SECTION_PREFIX = /^(§\s*\d+\s*·\s*)(.+)$/

  function translate(text) {
    if (Object.prototype.hasOwnProperty.call(ES, text)) return ES[text]
    var m = text.match(SECTION_PREFIX)
    if (m && Object.prototype.hasOwnProperty.call(ES, m[2])) return m[1] + ES[m[2]]
    return null
  }

  function skip(node) {
    var p = node.parentElement
    if (!p) return true
    if (p.closest('script, style, .__lelia-panel, .__lelia-fab, .__lelia-section, .__clic-lang')) return true
    // "diversidade" do logo CLIC_diversidade e marca, nao traduz.
    if ((p.textContent || '').indexOf('CLIC_') !== -1 && node.nodeValue.trim() === 'diversidade') return true
    return false
  }

  function translateTree() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null)
    var node
    while ((node = walker.nextNode())) {
      var raw = node.nodeValue
      var core = raw.trim()
      if (!core) continue
      var out = translate(core)
      if (out == null || out === core || skip(node)) continue
      var lead = raw.slice(0, raw.indexOf(core))
      var trail = raw.slice(raw.indexOf(core) + core.length)
      node.nodeValue = lead + out + trail
    }
  }

  // Desktop: seletor no header, ao lado do CTA. Mobile (< md, onde o menu
  // some): o header nao tem espaco, entao o seletor vira pilula fixa no canto
  // inferior esquerdo (o direito e do botao da Lelia). Sao dois nos porque o
  // nav tem backdrop-filter, que prende position:fixed dentro dele.
  var TOGGLE_STYLE = ''
    + '.__clic-lang-float{position:fixed;left:16px;bottom:24px;z-index:2147483000;display:none}'
    + '.__clic-lang-float .__clic-lang{background:rgba(255,255,255,.92);box-shadow:0 6px 18px rgba(14,26,43,.12)}'
    + '@media (max-width:767px){.__clic-lang-slot .__clic-lang{display:none}.__clic-lang-float{display:block}}'

  function injectToggle() {
    if (document.querySelector('.__clic-lang-slot')) return
    // CTA = ultimo item do nav (o href "#cta" ja foi reescrito pro /jornada/).
    var nav = document.querySelector('header nav')
    var cta = nav && nav.lastElementChild
    if (!cta || cta.tagName !== 'A' || typeof window.clicLangToggle !== 'function') return

    var style = document.createElement('style')
    style.textContent = TOGGLE_STYLE
    document.head.appendChild(style)

    var slot = document.createElement('div')
    slot.className = '__clic-lang-slot'
    slot.style.cssText = 'display:flex;align-items:center;gap:10px'
    cta.parentNode.insertBefore(slot, cta)
    slot.appendChild(window.clicLangToggle())
    slot.appendChild(cta)

    var float = document.createElement('div')
    float.className = '__clic-lang-float'
    float.appendChild(window.clicLangToggle())
    document.body.appendChild(float)
  }

  var es = window.CLIC_LANG === 'es'

  if (es) {
    document.title = META_ES.title
    var desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', META_ES.description)
  }

  var scheduled = false
  function run() {
    scheduled = false
    injectToggle()
    if (es) translateTree()
  }
  // requestAnimationFrame garante que os patches do index.html (que leem o
  // texto em portugues) ja rodaram sobre o mesmo lote de mutacoes.
  function schedule() {
    if (scheduled) return
    scheduled = true
    requestAnimationFrame(run)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule)
  } else {
    schedule()
  }
  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true,
    subtree: true,
  })
})()
