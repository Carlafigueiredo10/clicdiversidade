// Idioma da plataforma (pt | es). Quem decide e /assets/clic-lang.js,
// carregado no index.html antes do app e compartilhado com a landing.
// Trocar idioma recarrega a pagina, entao o valor e constante na sessao.
export const LANG = typeof window !== 'undefined' && window.CLIC_LANG === 'es' ? 'es' : 'pt'

// Escolhe a versao do idioma atual: tr({ pt: 'Olá', es: 'Hola' }).
// Sem versao em espanhol, cai pro portugues.
export function tr(v) {
  return v[LANG] ?? v.pt
}

export function setLang(next) {
  window.clicSetLang?.(next)
}
