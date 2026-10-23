// Glossario por idioma. data.js (PT) veio do glossario.html do Drive;
// data.es.js e a versao em espanhol. A pagina importa daqui.
import * as pt from './data'
import * as es from './data.es'
import { tr } from '../../i18n'

const d = tr({ pt, es })

export const CATEGORIAS = d.CATEGORIAS
export const TERMOS = d.TERMOS
