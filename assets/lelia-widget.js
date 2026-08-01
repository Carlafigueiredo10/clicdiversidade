/*
 * Lelia widget — chat flutuante da agente CLIC.
 * Auto-injecao no DOM. Vanilla JS, sem dependencias.
 * Backend: /api/lelia (Netlify Function).
 */
(function () {
  'use strict'

  if (window.__leliaInit) return
  window.__leliaInit = true

  var STORAGE_KEY = 'clic_lelia_history_v1'
  var MAX_HISTORY = 30
  var AVATAR_SRC = '/assets/lelia.jpg' // troque o arquivo aqui se subir com outro nome

  var STYLE = ''
    + '.__lelia-fab{position:fixed;right:20px;bottom:20px;z-index:2147483646;display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1rem;border:0;border-radius:9999px;background:#1a1715;color:#fffaf0;font:600 .875rem/1 "Inter",system-ui,sans-serif;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.18);transition:transform .15s ease,box-shadow .15s ease}'
    + '.__lelia-fab:hover{transform:translateY(-1px);box-shadow:0 12px 28px rgba(0,0,0,.22)}'
    + '.__lelia-fab__dot{width:8px;height:8px;border-radius:9999px;background:#7cd1a3;box-shadow:0 0 0 3px rgba(124,209,163,.22)}'
    + '.__lelia-panel{position:fixed;right:20px;bottom:20px;z-index:2147483647;width:min(380px,calc(100vw - 32px));height:min(560px,calc(100vh - 40px));display:none;flex-direction:column;background:#fffaf0;border:1px solid rgba(26,23,21,.08);border-radius:18px;box-shadow:0 24px 60px rgba(0,0,0,.22);overflow:hidden;font:400 14px/1.5 "Inter",system-ui,sans-serif;color:#1a1715}'
    + '.__lelia-panel--open{display:flex}'
    + '.__lelia-header{display:flex;align-items:center;gap:.75rem;padding:.85rem 1rem;border-bottom:1px solid rgba(26,23,21,.06);background:linear-gradient(180deg,#fffaf0 0%,#fbf3e3 100%)}'
    + '.__lelia-avatar{width:36px;height:36px;border-radius:9999px;object-fit:cover;background:linear-gradient(135deg,#d97757 0%,#a3552d 100%);color:#fffaf0;display:inline-flex;align-items:center;justify-content:center;font:700 14px/1 "Fraunces",Georgia,serif;flex-shrink:0}'
    + '.__lelia-title{flex:1;min-width:0}'
    + '.__lelia-name{font:600 .95rem/1.2 "Fraunces",Georgia,serif;letter-spacing:-.01em}'
    + '.__lelia-sub{font:500 .68rem/1.2 "JetBrains Mono",ui-monospace,monospace;text-transform:uppercase;letter-spacing:.12em;color:#7a6f66;margin-top:2px}'
    + '.__lelia-sub__dot{display:inline-block;width:6px;height:6px;border-radius:9999px;background:#7cd1a3;margin-right:.4rem;vertical-align:middle}'
    + '.__lelia-close{background:none;border:0;color:#7a6f66;font-size:20px;line-height:1;cursor:pointer;padding:.25rem .5rem;border-radius:6px}'
    + '.__lelia-close:hover{background:rgba(26,23,21,.06);color:#1a1715}'
    + '.__lelia-body{flex:1;overflow-y:auto;padding:1rem;display:flex;flex-direction:column;gap:.6rem;background:#fffaf0}'
    + '.__lelia-msg{padding:.65rem .85rem;border-radius:14px;max-width:85%;white-space:pre-wrap;word-wrap:break-word;font-size:.9rem;line-height:1.5}'
    + '.__lelia-msg--user{align-self:flex-end;background:#1a1715;color:#fffaf0;border-bottom-right-radius:4px}'
    + '.__lelia-msg--assistant{align-self:flex-start;background:#f2e9d8;color:#1a1715;border-bottom-left-radius:4px}'
    + '.__lelia-msg--system{align-self:center;background:transparent;color:#7a6f66;font-size:.78rem;font-style:italic;text-align:center;max-width:100%}'
    + '.__lelia-md{white-space:normal}'
    + '.__lelia-md p{margin:0 0 .6em}'
    + '.__lelia-md p:last-child{margin-bottom:0}'
    + '.__lelia-md ul{margin:.2em 0 .6em;padding-left:1.15em}'
    + '.__lelia-md ul:last-child{margin-bottom:0}'
    + '.__lelia-md li{margin:.18em 0}'
    + '.__lelia-md strong{font-weight:600}'
    + '.__lelia-md a{color:#7a4a1f;text-decoration:underline;text-underline-offset:2px;word-break:break-word}'
    + '.__lelia-md a:hover{color:#1a1715}'
    + '.__lelia-md code{font:500 .85em/1.4 "JetBrains Mono",ui-monospace,monospace;background:rgba(26,23,21,.07);border-radius:4px;padding:.1em .35em}'
    + '.__lelia-typing{align-self:flex-start;padding:.5rem .85rem;color:#7a6f66;font-style:italic;font-size:.85rem}'
    + '.__lelia-typing__dots{display:inline-block;letter-spacing:2px}'
    + '@keyframes __lelia-bounce{0%,80%,100%{opacity:.3}40%{opacity:1}}'
    + '.__lelia-typing__dots span{animation:__lelia-bounce 1.2s infinite}'
    + '.__lelia-typing__dots span:nth-child(2){animation-delay:.15s}'
    + '.__lelia-typing__dots span:nth-child(3){animation-delay:.3s}'
    + '.__lelia-form{display:flex;gap:.5rem;padding:.75rem;border-top:1px solid rgba(26,23,21,.06);background:#fffaf0}'
    + '.__lelia-input{flex:1;padding:.6rem .8rem;border:1px solid rgba(26,23,21,.12);border-radius:10px;font:400 .9rem/1.4 "Inter",system-ui,sans-serif;color:#1a1715;background:#fff;outline:none}'
    + '.__lelia-input:focus{border-color:#1a1715}'
    + '.__lelia-send{padding:0 1rem;border:0;border-radius:10px;background:#1a1715;color:#fffaf0;font:600 .85rem/1 "Inter",system-ui,sans-serif;cursor:pointer}'
    + '.__lelia-send:disabled{opacity:.4;cursor:not-allowed}'
    + '.__lelia-footer{padding:.5rem 1rem;border-top:1px solid rgba(26,23,21,.04);font:500 .65rem/1.4 "JetBrains Mono",ui-monospace,monospace;text-transform:uppercase;letter-spacing:.12em;color:#a89e94;text-align:center;background:#fffaf0}'

  var SECTION_STYLE = ''
    + '.__lelia-section{padding:6rem 2rem;font-family:"Inter",system-ui,sans-serif;color:#1a2538}'
    + '.__lelia-section__inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.1fr 1fr;gap:4rem;align-items:start}'
    + '@media(max-width:880px){.__lelia-section__inner{grid-template-columns:1fr;gap:2.5rem;padding:0}}'
    + '@media(max-width:880px){.__lelia-section{padding:4rem 1.25rem}}'
    + '.__lelia-section__eyebrow{font:500 .72rem/1 "JetBrains Mono",ui-monospace,monospace;text-transform:uppercase;letter-spacing:.22em;color:#5a6f8a;margin-bottom:1.75rem}'
    + '.__lelia-section__title{font:400 clamp(2rem,4.5vw,3.25rem)/1.05 "Fraunces",Georgia,serif;letter-spacing:-.02em;margin:0 0 1.5rem;color:#0e1a2b}'
    + '.__lelia-section__title em{font-style:italic}'
    + '.__lelia-section__lead{font-size:1rem;line-height:1.65;color:#5a6275;max-width:480px;margin:0 0 2rem}'
    + '.__lelia-section__ctas{display:flex;gap:.75rem;flex-wrap:wrap}'
    + '.__lelia-section__btn{display:inline-flex;align-items:center;gap:.5rem;padding:.85rem 1.4rem;border-radius:9999px;font:600 .88rem/1 "Inter",system-ui,sans-serif;cursor:pointer;text-decoration:none;border:1px solid transparent;transition:background .15s ease,border-color .15s ease}'
    + '.__lelia-section__btn--primary{background:#0e1a2b;color:#fff;border:0}'
    + '.__lelia-section__btn--primary:hover{background:#1f2d44}'
    + '.__lelia-section__btn--secondary{background:transparent;color:#0e1a2b;border-color:rgba(14,26,43,.18)}'
    + '.__lelia-section__btn--secondary:hover{background:rgba(14,26,43,.04)}'
    + '.__lelia-section__card{background:#fff;border:1px solid rgba(14,26,43,.08);border-radius:24px;padding:1.75rem;box-shadow:0 8px 32px rgba(14,26,43,.06)}'
    + '.__lelia-section__card-header{display:flex;align-items:center;gap:.85rem;margin-bottom:1.5rem;padding-bottom:1.25rem;border-bottom:1px solid rgba(14,26,43,.08)}'
    + '.__lelia-section__card-avatar{width:48px;height:48px;border-radius:9999px;object-fit:cover;background:linear-gradient(135deg,#d97757,#a3552d);color:#fffaf0;display:inline-flex;align-items:center;justify-content:center;font:600 18px/1 "Fraunces",Georgia,serif;flex-shrink:0}'
    + '.__lelia-section__card-name{font:500 1.1rem/1.2 "Fraunces",Georgia,serif;letter-spacing:-.01em;color:#0e1a2b}'
    + '.__lelia-section__card-sub{font:500 .68rem/1.2 "JetBrains Mono",ui-monospace,monospace;text-transform:uppercase;letter-spacing:.14em;color:#5a6f8a;margin-top:3px}'
    + '.__lelia-section__card-dot{display:inline-block;width:6px;height:6px;border-radius:9999px;background:#7cd1a3;margin-right:.4rem;vertical-align:middle}'
    + '.__lelia-section__features{list-style:none;padding:0;margin:0;display:grid;gap:.95rem}'
    + '.__lelia-section__feature{display:flex;gap:.75rem;align-items:baseline;font-size:.92rem;line-height:1.5;color:#2d3a52}'
    + '.__lelia-section__feature-bullet{color:#7cd1a3;flex-shrink:0;font-size:.7rem;line-height:1.7}'
    + '.__lelia-section__feature-soft{color:#7a8a9f;margin-left:.25rem}'
    + '.__lelia-section__card-footer{margin-top:1.5rem;padding-top:1rem;border-top:1px solid rgba(14,26,43,.06);font:500 .68rem/1.4 "JetBrains Mono",ui-monospace,monospace;text-transform:uppercase;letter-spacing:.14em;color:#7a8a9f;text-align:center}'

  function el(tag, attrs, children) {
    var node = document.createElement(tag)
    if (attrs) {
      for (var k in attrs) {
        if (k === 'class') node.className = attrs[k]
        else if (k === 'html') node.innerHTML = attrs[k]
        else if (k.indexOf('on') === 0) node.addEventListener(k.slice(2), attrs[k])
        else node.setAttribute(k, attrs[k])
      }
    }
    if (children) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i]
        if (c == null) continue
        node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c)
      }
    }
    return node
  }

  function loadHistory() {
    try {
      var raw = sessionStorage.getItem(STORAGE_KEY)
      if (!raw) return []
      var parsed = JSON.parse(raw)
      return Array.isArray(parsed) ? parsed : []
    } catch (e) {
      return []
    }
  }

  function saveHistory(msgs) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(msgs.slice(-MAX_HISTORY)))
    } catch (e) {
      // sessionStorage cheio ou bloqueado — ignora
    }
  }

  function createAvatar() {
    var img = el('img', {
      class: '__lelia-avatar',
      src: AVATAR_SRC,
      alt: 'Lelia',
    })
    img.onerror = function () {
      // fallback: substitui img por div com inicial
      var fallback = el('div', { class: '__lelia-avatar' }, ['L'])
      if (img.parentNode) img.parentNode.replaceChild(fallback, img)
    }
    return img
  }

  function init() {
    // injeta estilo do widget + da secao
    var style = document.createElement('style')
    style.textContent = STYLE + SECTION_STYLE
    document.head.appendChild(style)

    var history = loadHistory()
    var loading = false

    // painel
    var body = el('div', { class: '__lelia-body' })
    var input = el('input', {
      class: '__lelia-input',
      type: 'text',
      placeholder: 'Escreva sua mensagem...',
      'aria-label': 'Mensagem para Lelia',
    })
    var sendBtn = el('button', { class: '__lelia-send', type: 'submit' }, ['enviar'])

    var form = el(
      'form',
      {
        class: '__lelia-form',
        onsubmit: function (e) {
          e.preventDefault()
          enviar()
        },
      },
      [input, sendBtn],
    )

    var closeBtn = el(
      'button',
      { class: '__lelia-close', 'aria-label': 'Fechar', onclick: toggle },
      ['×'],
    )

    var header = el('div', { class: '__lelia-header' }, [
      createAvatar(),
      el('div', { class: '__lelia-title' }, [
        el('div', { class: '__lelia-name' }, ['Lélia']),
        el('div', { class: '__lelia-sub', html: '<span class="__lelia-sub__dot"></span>Assistente IA · CLIC' }),
      ]),
      closeBtn,
    ])

    var footer = el('div', { class: '__lelia-footer' }, [
      'inspirada em Lélia Gonzalez',
    ])

    var panel = el('div', { class: '__lelia-panel' }, [header, body, form, footer])

    // botao FAB
    var fab = el(
      'button',
      { class: '__lelia-fab', type: 'button', onclick: toggle, 'aria-label': 'Falar com a Lelia' },
      [el('span', { class: '__lelia-fab__dot' }), 'Falar com a Lélia'],
    )

    document.body.appendChild(fab)
    document.body.appendChild(panel)

    // ESC fecha
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('__lelia-panel--open')) {
        toggle()
      }
    })

    render()

    // expoe abertura pra outros lugares da pagina (ex: botao da secao injetada)
    window.openLelia = function () {
      if (!panel.classList.contains('__lelia-panel--open')) toggle()
    }

    // so injeta a secao Lelia na landing principal
    if (location.pathname === '/' || location.pathname === '') {
      setupLandingSection()
    }

    function toggle() {
      var open = panel.classList.toggle('__lelia-panel--open')
      fab.style.display = open ? 'none' : 'inline-flex'
      if (open) {
        // O cumprimento ja foi renderizado por render() no init — nao
        // re-renderizar aqui (causava balao duplicado a cada abertura).
        setTimeout(function () {
          input.focus()
        }, 50)
      }
    }

    function render() {
      body.innerHTML = ''
      if (history.length === 0) {
        renderMessage('system', 'Oi. Sou a Lélia. Como posso te ajudar?')
      } else {
        for (var i = 0; i < history.length; i++) {
          renderMessage(history[i].role, history[i].content)
        }
      }
      scrollBottom()
    }

    // Markdown minimo da resposta da Lelia. A persona dela emite **negrito**,
    // *italico*, listas e links em markdown — sem isso tudo aparece cru na tela.
    // Escapa HTML ANTES de qualquer transformacao: o texto vem do modelo.
    function escapeHtml(s) {
      return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
    }

    // So http(s), mailto e caminho interno. Barra javascript:, data: etc.
    function urlSegura(u) {
      return /^(https?:\/\/|mailto:|\/)/i.test(u.replace(/&amp;/g, '&'))
    }

    function link(href, texto) {
      if (!urlSegura(href)) return texto
      var externo = /^https?:\/\//i.test(href)
      return (
        '<a href="' + href + '"' +
        (externo ? ' target="_blank" rel="noopener noreferrer"' : '') +
        '>' + texto + '</a>'
      )
    }

    function inline(s) {
      var guardados = []
      function guardar(html) {
        guardados.push(html)
        return '\u0000' + (guardados.length - 1) + '\u0000'
      }

      // Ordem importa: codigo primeiro (protege asteriscos internos),
      // depois links (protege URLs do autolink), depois enfase.
      s = s.replace(/`([^`]+)`/g, function (_, c) {
        return guardar('<code>' + c + '</code>')
      })
      s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, t, u) {
        return guardar(link(u, t))
      })
      s = s.replace(/(https?:\/\/[^\s<>()]+[^\s<>().,;:!?])/g, function (u) {
        return guardar(link(u, u))
      })
      s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      s = s.replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,;:!?]|$)/g, '$1<em>$2</em>')

      return s.replace(/\u0000(\d+)\u0000/g, function (_, i) {
        return guardados[Number(i)]
      })
    }

    function mdToHtml(texto) {
      var linhas = escapeHtml(String(texto)).split(/\r?\n/)
      var out = []
      var lista = null
      var paragrafo = []

      function fecharParagrafo() {
        if (paragrafo.length) {
          out.push('<p>' + inline(paragrafo.join('<br>')) + '</p>')
          paragrafo = []
        }
      }
      function fecharLista() {
        if (lista) {
          out.push('<ul>' + lista.join('') + '</ul>')
          lista = null
        }
      }

      for (var i = 0; i < linhas.length; i++) {
        var l = linhas[i]
        var item = l.match(/^\s*[-*+]\s+(.*)$/)
        var titulo = l.match(/^\s*#{1,6}\s+(.*)$/)

        if (item) {
          fecharParagrafo()
          if (!lista) lista = []
          lista.push('<li>' + inline(item[1]) + '</li>')
        } else if (titulo) {
          fecharParagrafo()
          fecharLista()
          out.push('<p><strong>' + inline(titulo[1]) + '</strong></p>')
        } else if (!l.trim()) {
          fecharParagrafo()
          fecharLista()
        } else {
          fecharLista()
          paragrafo.push(l)
        }
      }
      fecharParagrafo()
      fecharLista()
      return out.join('')
    }

    function renderMessage(role, text) {
      var cls = '__lelia-msg __lelia-msg--' + role
      if (role === 'assistant') {
        body.appendChild(el('div', { class: cls + ' __lelia-md', html: mdToHtml(text) }))
      } else {
        body.appendChild(el('div', { class: cls }, [text]))
      }
    }

    function showTyping() {
      var t = el('div', { class: '__lelia-typing', id: '__lelia-typing-active' }, [
        'Lélia está pensando',
        el('span', { class: '__lelia-typing__dots' }, [
          el('span', null, ['.']),
          el('span', null, ['.']),
          el('span', null, ['.']),
        ]),
      ])
      body.appendChild(t)
      scrollBottom()
    }

    function hideTyping() {
      var t = document.getElementById('__lelia-typing-active')
      if (t && t.parentNode) t.parentNode.removeChild(t)
    }

    function scrollBottom() {
      body.scrollTop = body.scrollHeight
    }

    function enviar() {
      if (loading) return
      var texto = input.value.trim()
      if (!texto) return

      history.push({ role: 'user', content: texto })
      saveHistory(history)
      renderMessage('user', texto)
      input.value = ''
      scrollBottom()

      loading = true
      sendBtn.disabled = true
      showTyping()

      fetch('/api/lelia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.map(function (m) {
            return { role: m.role, content: m.content }
          }),
          page: 'landing',
        }),
      })
        .then(function (res) {
          if (!res.ok) {
            return res.json().then(
              function (j) {
                throw new Error(j.error || 'http_' + res.status)
              },
              function () {
                throw new Error('http_' + res.status)
              },
            )
          }
          return res.json()
        })
        .then(function (data) {
          hideTyping()
          var reply = data.reply || '(resposta vazia)'
          history.push({ role: 'assistant', content: reply })
          saveHistory(history)
          renderMessage('assistant', reply)
          scrollBottom()
        })
        .catch(function (err) {
          hideTyping()
          renderMessage('system', 'Ops, deu erro: ' + (err.message || err) + '. Tenta de novo daqui a pouco.')
          scrollBottom()
        })
        .then(function () {
          loading = false
          sendBtn.disabled = false
        })
    }

    function setupLandingSection() {
      // tenta achar a secao "EXPERIENCIA PRATICA" agora e em qualquer mutacao
      // futura do DOM (React hydration, re-renders, etc). Quando achar, injeta
      // a secao Lelia antes dela e renumera "§ 03" -> "§ 04" daquela secao.
      var injected = false

      function findExpericiaPraticaSection() {
        var sections = document.querySelectorAll('section')
        for (var i = 0; i < sections.length; i++) {
          var t = (sections[i].textContent || '').toUpperCase()
          if (t.indexOf('EXPERI') !== -1 && t.indexOf('PR') !== -1 && t.indexOf('TICA') !== -1) {
            // confirmacao mais estrita: tem que ter o badge "§ 03"
            if (sections[i].textContent.indexOf('§') !== -1) {
              return sections[i]
            }
          }
        }
        return null
      }

      function buildLeliaSection() {
        var section = el('section', {
          class: '__lelia-section',
          'data-lelia-section': '1',
        })

        var avatar = el('img', {
          class: '__lelia-section__card-avatar',
          src: AVATAR_SRC,
          alt: 'Lelia',
        })
        avatar.onerror = function () {
          var fb = el('div', { class: '__lelia-section__card-avatar' }, ['L'])
          if (avatar.parentNode) avatar.parentNode.replaceChild(fb, avatar)
        }

        var card = el('div', { class: '__lelia-section__card' }, [
          el('div', { class: '__lelia-section__card-header' }, [
            avatar,
            el('div', null, [
              el('div', { class: '__lelia-section__card-name' }, ['Lélia']),
              el('div', {
                class: '__lelia-section__card-sub',
                html: '<span class="__lelia-section__card-dot"></span>Assistente IA · CLIC',
              }),
            ]),
          ]),
          el('ul', { class: '__lelia-section__features' }, [
            el('li', { class: '__lelia-section__feature' }, [
              el('span', { class: '__lelia-section__feature-bullet' }, ['●']),
              el('span', null, [
                'Tira dúvidas em tempo real',
                el('span', { class: '__lelia-section__feature-soft' }, [' — sobre IA, prompts ou seu diagnóstico']),
              ]),
            ]),
            el('li', { class: '__lelia-section__feature' }, [
              el('span', { class: '__lelia-section__feature-bullet' }, ['●']),
              el('span', null, [
                'Refina prompts com o método PTCF',
                el('span', { class: '__lelia-section__feature-soft' }, [' — Pessoa, Tarefa, Contexto, Formato']),
              ]),
            ]),
            el('li', { class: '__lelia-section__feature' }, [
              el('span', { class: '__lelia-section__feature-bullet' }, ['●']),
              el('span', null, [
                'Aponta vieses e limites',
                el('span', { class: '__lelia-section__feature-soft' }, [' — IA não é neutra, nem ela finge que é']),
              ]),
            ]),
          ]),
          el('div', { class: '__lelia-section__card-footer' }, [
            'inspirada em Lélia Gonzalez',
          ]),
        ])

        var falarBtn = el(
          'button',
          {
            class: '__lelia-section__btn __lelia-section__btn--primary',
            type: 'button',
            onclick: function () {
              if (typeof window.openLelia === 'function') window.openLelia()
            },
          },
          ['Falar com a Lélia'],
        )

        var conhecaLink = el(
          'a',
          {
            class: '__lelia-section__btn __lelia-section__btn--secondary',
            href: '/lelia/',
          },
          ['Conheça Lélia Gonzalez →'],
        )

        var left = el('div', null, [
          el('div', { class: '__lelia-section__eyebrow' }, ['§ 03 · A AGENTE LÉLIA']),
          el('h2', {
            class: '__lelia-section__title',
            html: 'Conversa <em>com a Lélia.</em>',
          }),
          el('p', { class: '__lelia-section__lead' }, [
            'A Lélia é a agente do CLIC. Inspirada em Lélia Gonzalez, ela ajuda você a entender IA, montar prompts e ler seu resultado no diagnóstico — sem jargão, sem promessa milagrosa.',
          ]),
          el('div', { class: '__lelia-section__ctas' }, [falarBtn, conhecaLink]),
        ])

        section.appendChild(el('div', { class: '__lelia-section__inner' }, [left, card]))
        return section
      }

      function renumberInSection(section, oldNum, newNum) {
        // walk text nodes da secao trocando "§ NN" por "§ MM"
        var oldStr = '§ ' + oldNum
        var newStr = '§ ' + newNum
        var walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT, null)
        var node
        while ((node = walker.nextNode())) {
          if (node.nodeValue && node.nodeValue.indexOf(oldStr) !== -1) {
            node.nodeValue = node.nodeValue.split(oldStr).join(newStr)
          }
        }
      }

      function tryInjectAndRenumber() {
        if (injected) {
          // Mesmo apos injetar, React pode re-renderizar e restaurar "§ 03" no
          // titulo da Experiencia Pratica. Reaplica o renumber se detectar.
          var ep = findExpericiaPraticaSection()
          if (ep && ep.textContent.indexOf('§ 03') !== -1) {
            renumberInSection(ep, '03', '04')
          }
          return
        }

        var target = findExpericiaPraticaSection()
        if (!target) return

        var leliaSec = buildLeliaSection()
        target.parentNode.insertBefore(leliaSec, target)
        renumberInSection(target, '03', '04')
        // Cascata simples: se houver secao seguinte com "§ 04", vira "§ 05".
        // (Ate "§ 09" pra cobrir o realista.)
        var allSections = document.querySelectorAll('section')
        var foundTarget = false
        var current = 4
        for (var i = 0; i < allSections.length; i++) {
          var s = allSections[i]
          if (s === target) { foundTarget = true; continue }
          if (!foundTarget) continue
          if (s === leliaSec) continue
          var nextNum = current + 1
          if (current < 9 && s.textContent && s.textContent.indexOf('§ 0' + current) !== -1) {
            renumberInSection(s, '0' + current, '0' + nextNum)
            current = nextNum
          }
        }
        injected = true
      }

      tryInjectAndRenumber()

      // observer pra cobrir hydration tardia do React e re-renders
      var pending = false
      var observer = new MutationObserver(function () {
        if (pending) return
        pending = true
        setTimeout(function () {
          pending = false
          tryInjectAndRenumber()
        }, 150)
      })
      observer.observe(document.body, { childList: true, subtree: true })
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
