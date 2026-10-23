// Catalogo unico de agentes do CLIC. Para incluir um agente novo, acrescente
// um objeto: o card, o "copiar instrucoes" e o "baixar SKILL.md" saem daqui.
// `skill.nome` segue a regra do Gemini: minusculas, palavras com hifen.
// `Ficha` (opcional) e a pagina anotada em PT que explica cada instrucao.
import { tr } from '../../../i18n'
import TemplateAgenteAdmin, { PROMPT as ADMIN_PT } from './TemplateAgenteAdmin'
import TemplateAgenteAuditor, { PROMPT as AUDITOR_PT } from './TemplateAgenteAuditor'
import TemplateAgenteContraditorio, { PROMPT as CONTRADITORIO_PT } from './TemplateAgenteContraditorio'
import { PROMPT_ADMIN_ES, PROMPT_AUDITOR_ES, PROMPT_CONTRADITORIO_ES } from './prompts.es'

export const TIPOS = {
  assistente: tr({ pt: 'Assistente', es: 'Asistente' }),
  skill: tr({ pt: 'Skill', es: 'Skill' }),
}

export const AGENTES = [
  {
    id: 'admin',
    icon: '📝',
    tipo: 'assistente',
    nome: tr({ pt: 'Agente Admin', es: 'Agente Administrativo' }),
    paraQue: tr({
      pt: 'Redige, revisa e analisa documentos administrativos e comunicações oficiais, sem inventar norma, número de processo ou competência.',
      es: 'Redacta, revisa y analiza documentos administrativos y comunicaciones oficiales, sin inventar normas, números de expediente ni competencias.',
    }),
    cuidado: tr({
      pt: 'Não cole dados pessoais de cidadãos nem documentos sigilosos. Toda norma citada precisa ser conferida na fonte oficial.',
      es: 'No pegues datos personales de la ciudadanía ni documentos reservados. Toda norma citada debe verificarse en la fuente oficial.',
    }),
    nota: tr({
      pt: null,
      es: 'Versión adaptable a cualquier país: el agente pregunta el organismo y el país antes de aplicar cualquier norma.',
    }),
    prompt: tr({ pt: ADMIN_PT, es: PROMPT_ADMIN_ES }),
    skill: {
      nome: tr({ pt: 'agente-admin', es: 'agente-administrativo' }),
      descricao: tr({
        pt: 'Use para redigir, revisar ou analisar documentos administrativos e comunicações oficiais do setor público (ofício, nota técnica, despacho, relatório), identificando o órgão e a norma aplicável antes de redigir.',
        es: 'Úsala para redactar, revisar o analizar documentos administrativos y comunicaciones oficiales del sector público (oficio, nota, informe técnico, resolución), identificando el organismo y la norma aplicable antes de redactar.',
      }),
    },
    Ficha: TemplateAgenteAdmin,
  },
  {
    id: 'contraditorio',
    icon: '⚖️',
    tipo: 'assistente',
    nome: tr({ pt: 'Debatedor Crítico', es: 'Debatidor Crítico' }),
    paraQue: tr({
      pt: 'Discorda de você com método: aponta o ponto cego da ideia, traz três alternativas realmente diferentes e as referências que sustentam a crítica.',
      es: 'Discrepa contigo con método: señala el punto ciego de la idea, propone tres alternativas realmente distintas y las referencias que sostienen la crítica.',
    }),
    cuidado: tr({
      pt: 'Use antes de decidir, não depois. Ele não decide por você — a decisão final é humana.',
      es: 'Úsalo antes de decidir, no después. No decide por ti — la decisión final es humana.',
    }),
    nota: tr({ pt: null, es: null }),
    prompt: tr({ pt: CONTRADITORIO_PT, es: PROMPT_CONTRADITORIO_ES }),
    skill: {
      nome: tr({ pt: 'debatedor-critico', es: 'debatidor-critico' }),
      descricao: tr({
        pt: 'Use quando alguém apresentar uma ideia, projeto ou solução para decisão pública e pedir crítica: aponta o ponto cego, três alternativas distintas e referências críticas, sem inventar dados.',
        es: 'Úsala cuando alguien presente una idea, proyecto o solución para una decisión pública y pida crítica: señala el punto ciego, tres alternativas distintas y referencias críticas, sin inventar datos.',
      }),
    },
    Ficha: TemplateAgenteContraditorio,
  },
  {
    id: 'auditor',
    icon: '🔍',
    tipo: 'skill',
    nome: tr({ pt: 'Auditor de Equidade', es: 'Auditor de Equidad' }),
    paraQue: tr({
      pt: 'Examina um processo, norma ou critério de decisão e devolve, em tabela, onde ele pode produzir efeito desproporcional sobre grupos protegidos.',
      es: 'Examina un procedimiento, norma o criterio de decisión y devuelve, en una tabla, dónde puede producir un efecto desproporcionado sobre grupos protegidos.',
    }),
    cuidado: tr({
      pt: 'Descreva o critério em texto, sem dados pessoais. Hipótese de viés não é prova: a tabela diz que evidência confirmaria cada achado.',
      es: 'Describe el criterio en texto, sin datos personales. Una hipótesis de sesgo no es prueba: la tabla indica qué evidencia confirmaría cada hallazgo.',
    }),
    nota: tr({ pt: null, es: null }),
    prompt: tr({ pt: AUDITOR_PT, es: PROMPT_AUDITOR_ES }),
    skill: {
      nome: tr({ pt: 'auditor-de-equidade', es: 'auditor-de-equidad' }),
      descricao: tr({
        pt: 'Use para auditar um processo, norma, formulário ou critério de decisão do setor público em busca de efeito desproporcional sobre grupos protegidos e de variáveis proxy (CEP, escola, nome, horário).',
        es: 'Úsala para auditar un procedimiento, norma, formulario o criterio de decisión del sector público en busca de efectos desproporcionados sobre grupos protegidos y de variables proxy (barrio, escuela, nombre, horario).',
      }),
    },
    Ficha: TemplateAgenteAuditor,
  },
]

// Conteudo do SKILL.md: cabecalho com nome e descricao + as instrucoes.
export function skillMarkdown(agente) {
  const desc = agente.skill.descricao.replace(/\s+/g, ' ').trim()
  // Descricao entre aspas: ":" no meio do texto quebraria o cabecalho YAML.
  const yaml = '"' + desc.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"'
  return `---\nname: ${agente.skill.nome}\ndescription: ${yaml}\n---\n\n${agente.prompt.trim()}\n`
}
