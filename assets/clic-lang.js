/*
 * Idioma da plataforma (pt | es) — fonte unica pra landing, paginas
 * estaticas e app React (que le a mesma chave do localStorage).
 *
 * Ordem de decisao:
 *   1. ?lang=es na URL (link compartilhado) — tambem grava a preferencia
 *   2. preferencia salva (localStorage 'clic-lang')
 *   3. idioma do navegador (es-* -> espanhol)
 *   4. portugues
 *
 * Carregar SINCRONO no <head>, antes dos scripts que dependem de window.CLIC_LANG.
 */
(function () {
  'use strict'

  var KEY = 'clic-lang'
  var SUPPORTED = ['pt', 'es']

  function valid(l) {
    return SUPPORTED.indexOf(l) !== -1 ? l : null
  }

  function read() {
    var fromUrl = null
    try {
      fromUrl = valid(new URLSearchParams(location.search).get('lang'))
    } catch (e) {}
    if (fromUrl) {
      try { localStorage.setItem(KEY, fromUrl) } catch (e) {}
      return fromUrl
    }
    try {
      var saved = valid(localStorage.getItem(KEY))
      if (saved) return saved
    } catch (e) {}
    var nav = (navigator.language || '').toLowerCase()
    return nav.indexOf('es') === 0 ? 'es' : 'pt'
  }

  var lang = read()
  window.CLIC_LANG = lang
  document.documentElement.lang = lang === 'es' ? 'es' : 'pt-BR'

  // Troca de idioma recarrega a pagina: o conteudo de cada idioma e montado
  // no carregamento, e recarregar evita estado meio-traduzido.
  window.clicSetLang = function (next) {
    if (!valid(next) || next === lang) return
    try { localStorage.setItem(KEY, next) } catch (e) {}
    var url = new URL(location.href)
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', next)
      location.replace(url.toString())
    } else {
      location.reload()
    }
  }

  var STYLE = ''
    + '.__clic-lang{display:inline-flex;align-items:center;gap:2px;padding:3px;border-radius:9999px;'
    +   'border:1px solid rgba(14,26,43,.14);background:rgba(255,255,255,.55);font:500 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.12em}'
    + '.__clic-lang button{border:0;background:transparent;color:inherit;opacity:.55;padding:5px 8px;border-radius:9999px;cursor:pointer;font:inherit;letter-spacing:inherit}'
    + '.__clic-lang button:hover{opacity:1}'
    + '.__clic-lang button[aria-pressed="true"]{opacity:1;background:#0e1a2b;color:#fff}'
    + '.__clic-lang button:focus-visible{outline:2px solid #7b8fc4;outline-offset:1px}'

  function injectStyle() {
    if (document.getElementById('__clic-lang-style')) return
    var s = document.createElement('style')
    s.id = '__clic-lang-style'
    s.textContent = STYLE
    document.head.appendChild(s)
  }

  // Seletor PT | ES pronto pra ser inserido onde a pagina quiser.
  window.clicLangToggle = function () {
    injectStyle()
    var wrap = document.createElement('div')
    wrap.className = '__clic-lang'
    wrap.setAttribute('role', 'group')
    wrap.setAttribute('aria-label', 'Idioma')
    ;[['pt', 'PT', 'Português'], ['es', 'ES', 'Español']].forEach(function (o) {
      var b = document.createElement('button')
      b.type = 'button'
      b.textContent = o[1]
      b.title = o[2]
      b.setAttribute('lang', o[0])
      b.setAttribute('aria-pressed', String(o[0] === lang))
      b.addEventListener('click', function () { window.clicSetLang(o[0]) })
      wrap.appendChild(b)
    })
    return wrap
  }
})()
