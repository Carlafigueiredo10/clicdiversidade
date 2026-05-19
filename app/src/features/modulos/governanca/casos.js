// Casos canônicos para experimentação no Agente de Governança de IA.
// Portados de agente-governanca-ia/agente/exemplos.py.

export const SEVERIDADE = {
  permitido: { label: 'Permitido', cor: 'bg-emerald-500' },
  permitido_com_condicoes: { label: 'Permitido com condições', cor: 'bg-amber-400' },
  alto_risco_redesenho: { label: 'Alto risco · exige redesenho', cor: 'bg-orange-500' },
  nao_recomendado: { label: 'Não recomendado', cor: 'bg-red-500' },
  risco_excessivo: { label: 'Risco excessivo', cor: 'bg-red-700' },
}

export const CASOS = [
  {
    titulo: 'Resumo de PAD via ChatGPT público',
    pergunta:
      'Quero usar o ChatGPT para gerar resumos dos processos de sindicância disciplinar (PAD) do meu setor. Os documentos têm nomes de servidores, descrição da conduta investigada e juízos sobre culpa. Posso?',
    severidade: 'nao_recomendado',
  },
  {
    titulo: 'Predição automatizada de fraude no Cadastro Único',
    pergunta:
      'Queremos usar IA para prever quais cidadãos têm mais chance de fraudar o Cadastro Único, usando o histórico deles, para bloquear o benefício preventivamente. A IA roda em nuvem corporativa contratada pelo órgão.',
    severidade: 'alto_risco_redesenho',
  },
  {
    titulo: 'Triagem de currículos por IA em processo seletivo',
    pergunta:
      'Posso usar IA para organizar e classificar currículos em um processo seletivo, separando por área de formação e tempo de experiência?',
    severidade: 'permitido_com_condicoes',
  },
  {
    titulo: 'Reconhecimento facial em massa em manifestação',
    pergunta:
      'Queremos instalar câmeras com reconhecimento facial em tempo real para identificar todas as pessoas presentes em manifestações públicas e cruzar com nossa base de dados.',
    severidade: 'risco_excessivo',
  },
  {
    titulo: 'Resumo de atas de reunião interna',
    pergunta:
      'Posso usar IA para gerar resumos das atas das reuniões da minha equipe? São atas de reunião administrativa interna, sem dados pessoais de cidadãos.',
    severidade: 'permitido_com_condicoes',
  },
  {
    titulo: 'Tradução de norma já publicada',
    pergunta:
      'Posso pedir para a IA traduzir trechos de uma instrução normativa já publicada no DOU para o inglês, para enviar a um parceiro internacional?',
    severidade: 'permitido',
  },
  {
    titulo: 'Chatbot de atendimento ao cidadão com decisão final',
    pergunta:
      'Posso colocar um chatbot de IA para atender o cidadão e responder pedidos via LAI de forma automática, inclusive decidindo o que pode ou não ser divulgado?',
    severidade: 'alto_risco_redesenho',
  },
  {
    titulo: 'Análise de prontuários médicos em IA pública',
    pergunta:
      'Quero usar o Gemini para analisar padrões em prontuários médicos de servidores afastados por motivo de saúde.',
    severidade: 'nao_recomendado',
  },
  {
    titulo: 'Triagem de bolsas com painel só de TI',
    pergunta:
      'Vamos usar IA para triar pedidos de bolsa de estudos em programa do órgão. O painel de revisão das decisões da IA será composto por três servidores da nossa equipe de TI.',
    severidade: 'alto_risco_redesenho',
  },
  {
    titulo: 'Ranqueamento de candidatos com base em histórico',
    pergunta:
      'Quero usar IA para ranquear candidatos em processo seletivo interno da minha equipe. Hoje a equipe é toda composta por engenheiros homens. A IA vai aprender com o histórico de contratações para sugerir os melhores.',
    severidade: 'alto_risco_redesenho',
  },
  {
    titulo: 'IA contratada sem informação sobre treinamento',
    pergunta:
      'Vamos contratar uma solução de IA de mercado para detectar indícios de irregularidade em pedidos administrativos. O fornecedor não informa com que base de dados o modelo foi treinado, alegando segredo comercial.',
    severidade: 'nao_recomendado',
  },
]
