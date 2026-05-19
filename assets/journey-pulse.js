/*
 * Journey pulse — cometa percorrendo a coluna de etapas.
 * Auto-deteccao da coluna no runtime (sem dependencia de classes do bundle).
 * Vanilla JS, sem dependencias.
 */
(function () {
  'use strict'

  if (window.__journeyPulseInit) return
  window.__journeyPulseInit = true

  var BALL = 10            // px diametro do cometa
  var TRAIL = 110          // px comprimento do rastro
  var DURATION = 4600      // ms descida completa
  var PAUSE = 700          // ms pausa no topo antes de descer
  var REDETECT_MS = 250    // debounce de redetect em scroll/resize

  // Cores ancoradas na paleta do site (navy + lavanda accent).
  var CORE = '#0e1a2b'
  var GLOW = 'rgba(123,143,196,'

  var STYLE = ''
    + '.__jp-layer{position:absolute;pointer-events:none;z-index:5;opacity:0;transition:opacity .5s ease}'
    + '.__jp-layer--ready{opacity:1}'
    + '.__jp-trail{position:absolute;left:50%;top:0;width:2px;height:' + TRAIL + 'px;'
    +   'transform:translate(-50%,-100%);border-radius:9999px;'
    +   'background:linear-gradient(to bottom,' + GLOW + '0) 0%,' + GLOW + '.18) 55%,' + GLOW + '.55) 90%,' + GLOW + '.85) 100%);'
    +   'filter:blur(.4px)}'
    + '.__jp-comet{position:absolute;left:50%;top:0;width:' + BALL + 'px;height:' + BALL + 'px;'
    +   'border-radius:50%;transform:translate(-50%,-50%);'
    +   'background:radial-gradient(circle,' + CORE + ' 0%,#3a4a6b 45%,' + GLOW + '0) 75%);'
    +   'box-shadow:0 0 12px 3px ' + GLOW + '.45),0 0 22px 6px ' + GLOW + '.18);'
    +   'animation:__jp-sparkle 1.8s ease-in-out infinite}'
    + '@keyframes __jp-sparkle{0%,100%{opacity:.85}50%{opacity:1}}'
    + '@media (prefers-reduced-motion:reduce){.__jp-layer{display:none}}'

  function injectStyle() {
    if (document.getElementById('__jp-style')) return
    var s = document.createElement('style')
    s.id = '__jp-style'
    s.textContent = STYLE
    document.head.appendChild(s)
  }

  // Heuristica: acha o conjunto mais denso de elementos circulares pequenos
  // alinhados verticalmente (mesmo x-centro, >= 3 nodes).
  function findColumn() {
    var nodes = document.querySelectorAll('div, span, i')
    var rounds = []
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i]
      if (el.closest('.__jp-layer')) continue
      var rect = el.getBoundingClientRect()
      var w = rect.width, h = rect.height
      if (w < 6 || w > 36) continue
      if (h < 6 || h > 36) continue
      if (Math.abs(w - h) > 3) continue
      var cs = getComputedStyle(el)
      if (cs.display === 'none' || cs.visibility === 'hidden') continue
      var br = cs.borderRadius || ''
      // border-radius >= 50% (round) — aceita "50%", "9999px", "999px"
      if (!/(^|\s)(5[0-9]|[6-9][0-9]|100)%/.test(br) && !/\d{3,}px/.test(br)) continue
      rounds.push({ el: el, rect: rect })
    }
    if (rounds.length < 3) return null

    // Bucket por x-centro com tolerancia (~8px)
    var buckets = {}
    rounds.forEach(function (r) {
      var cx = (r.rect.left + r.rect.right) / 2
      var key = Math.round(cx / 8) * 8
      ;(buckets[key] = buckets[key] || []).push(r)
    })

    // Escolhe a coluna com mais dots; em empate, a mais alta (maior extensao Y)
    var best = null, bestScore = 0
    for (var k in buckets) {
      var arr = buckets[k]
      if (arr.length < 3) continue
      arr.sort(function (a, b) { return a.rect.top - b.rect.top })
      var span = arr[arr.length - 1].rect.top - arr[0].rect.top
      // Score: prioriza colunas com 4-6 dots e bom espacamento (> 80px)
      var score = arr.length * 100 + Math.min(span, 1200)
      if (span < 60) continue // muito apertado, provavelmente nao e timeline
      if (score > bestScore) { bestScore = score; best = arr }
    }
    return best
  }

  var layer, comet, trail, raf, startedAt, currentCol

  function ensureLayer() {
    if (layer) return
    layer = document.createElement('div')
    layer.className = '__jp-layer'
    trail = document.createElement('div')
    trail.className = '__jp-trail'
    comet = document.createElement('div')
    comet.className = '__jp-comet'
    layer.appendChild(trail)
    layer.appendChild(comet)
    document.body.appendChild(layer)
  }

  function placeLayer(column) {
    var first = column[0].rect
    var last = column[column.length - 1].rect
    var cx = (first.left + first.right) / 2 + window.scrollX
    var top = (first.top + first.bottom) / 2 + window.scrollY
    var bottom = (last.top + last.bottom) / 2 + window.scrollY
    layer.style.left = cx + 'px'
    layer.style.top = top + 'px'
    layer.style.width = '0px'
    layer.style.height = (bottom - top) + 'px'
    layer.classList.add('__jp-layer--ready')
  }

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
  }

  function tick(now) {
    if (!startedAt) startedAt = now
    var cycle = DURATION + PAUSE
    var elapsed = (now - startedAt) % cycle
    var progress
    if (elapsed < PAUSE) progress = 0
    else progress = easeInOut((elapsed - PAUSE) / DURATION)
    var h = parseFloat(layer.style.height) || 0
    var y = progress * h
    comet.style.top = y + 'px'
    trail.style.top = y + 'px'
    raf = requestAnimationFrame(tick)
  }

  function sameColumn(a, b) {
    if (!a || !b || a.length !== b.length) return false
    for (var i = 0; i < a.length; i++) if (a[i].el !== b[i].el) return false
    return true
  }

  function start() {
    var col = findColumn()
    if (!col) { setTimeout(start, 1000); return }
    ensureLayer()
    currentCol = col
    placeLayer(col)
    cancelAnimationFrame(raf)
    startedAt = 0
    raf = requestAnimationFrame(tick)
  }

  function recheck() {
    var col = findColumn()
    if (!col) return
    if (!sameColumn(col, currentCol)) {
      currentCol = col
      ensureLayer()
      placeLayer(col)
    } else {
      // Mesma coluna; so reposiciona (scroll/resize mudou as coords absolutas)
      placeLayer(col)
    }
  }

  function debounce(fn, ms) {
    var t
    return function () { clearTimeout(t); t = setTimeout(fn, ms) }
  }

  function boot() {
    injectStyle()
    // Espera o bundle React montar a UI antes de procurar.
    setTimeout(start, 800)
    var deb = debounce(recheck, REDETECT_MS)
    window.addEventListener('resize', deb)
    window.addEventListener('scroll', deb, { passive: true })
    // Cobre re-renders do SPA (mudanca de rota, etc).
    new MutationObserver(deb).observe(document.documentElement, {
      childList: true, subtree: true,
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot)
  } else {
    boot()
  }
})()
