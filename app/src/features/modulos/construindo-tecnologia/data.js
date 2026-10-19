// Conteudo do modulo por idioma. data.pt.js e data.es.js exportam os mesmos
// nomes; ao mudar um prompt em um, atualizar o outro.
import * as pt from './data.pt'
import * as es from './data.es'
import { tr } from '../../../i18n'

const d = tr({ pt, es })

export const INITIAL_PROMPT = d.INITIAL_PROMPT
export const MEU_APP_PROMPT = d.MEU_APP_PROMPT
export const PAINEL_GOVERNANCA_PROMPT = d.PAINEL_GOVERNANCA_PROMPT
export const BOAS_PRATICAS = d.BOAS_PRATICAS
export const BIBLIOTECA_GROUPS = d.BIBLIOTECA_GROUPS
