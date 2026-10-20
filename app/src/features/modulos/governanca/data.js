// Base Teorica por idioma. data.pt.js e data.es.js exportam EIXOS; na versao
// em espanhol o eixo de marco normativo e o uruguaio (o brasileiro fica como
// referencia). Ao mudar uma referencia em um, conferir o outro.
import * as pt from './data.pt'
import * as es from './data.es'
import { tr } from '../../../i18n'

export const EIXOS = tr({ pt, es }).EIXOS
