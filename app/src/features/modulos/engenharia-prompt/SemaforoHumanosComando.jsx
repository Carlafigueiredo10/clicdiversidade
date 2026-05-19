const SINAIS = [
  {
    cor: 'red',
    bolinha: 'bg-red-500',
    borda: 'border-red-500/60',
    fundoFarol: 'bg-red-500/10',
    titulo: 'Pare',
    subtitulo: 'Dados sensíveis e decisões de alto risco',
    texto: (
      <>
        Proteja identidades e direitos. Além de nunca inserir{' '}
        <strong className="text-ink">
          dados sensíveis (CPF, saúde, justiça)
        </strong>{' '}
        em plataformas abertas, pare e questione antes de automatizar
        processos. A IA não deve ser usada para tomar decisões finais que
        afetem direitos do cidadão sem a{' '}
        <strong className="text-ink">Avaliação de Impacto Algorítmico</strong>.
        Lembre-se: os dados refletem a sociedade — cuidado com exclusões
        indiretas (ex.: o CEP ou bairro que a máquina associa à renda ou
        raça).
      </>
    ),
  },
  {
    cor: 'amber',
    bolinha: 'bg-amber-400',
    borda: 'border-amber-400/60',
    fundoFarol: 'bg-amber-400/10',
    titulo: 'Atenção',
    subtitulo: 'Alucinações, vieses e apagamentos',
    texto: (
      <>
        A máquina reproduz o passado. Além de inventar fatos e leis{' '}
        <em>(alucinações)</em>, os sistemas de IA herdam e automatizam{' '}
        <strong className="text-ink">preconceitos históricos</strong>, podendo
        gerar conteúdos enviesados ou apagar o contexto de grupos minorizados.
        A responsabilidade ética e jurídica pela assinatura do documento
        público é <strong className="text-ink">inteiramente sua</strong>.
        Exerça o discernimento e audite o resultado.
      </>
    ),
  },
  {
    cor: 'emerald',
    bolinha: 'bg-emerald-500',
    borda: 'border-emerald-500/60',
    fundoFarol: 'bg-emerald-500/10',
    titulo: 'Siga',
    subtitulo: 'Produtividade crítica',
    texto: (
      <>
        Autonomia tecnológica. Use a IA para ganhar tempo na estruturação de
        textos e resumos, mas vá além: transforme a IA em um{' '}
        <strong className="text-ink">Agente Crítico de Apoio</strong>.
        Utilize a tecnologia a seu favor para revisar a acessibilidade da
        linguagem do seu próprio texto, identificar jargões burocráticos
        excludentes e promover uma comunicação mais democrática e
        transparente com a sociedade.
      </>
    ),
  },
]

export default function SemaforoHumanosComando() {
  return (
    <section className="mt-16">
      <div className="flex items-center gap-4 justify-center">
        <span className="h-px flex-1 max-w-[120px] bg-line" />
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold text-center">
          O Novo Semáforo · Humanos no Comando
        </p>
        <span className="h-px flex-1 max-w-[120px] bg-line" />
      </div>

      <h2 className="mt-4 text-center font-display font-semibold text-2xl md:text-3xl text-ink leading-tight">
        Regras de ouro no serviço público
      </h2>
      <p className="mt-3 text-center text-ink-soft text-sm md:text-base max-w-2xl mx-auto">
        Use a IA para pensar melhor, não apenas mais rápido. Cada sinal abaixo
        traduz um princípio ético para o uso responsável da tecnologia no
        Estado.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {SINAIS.map((s) => (
          <article
            key={s.titulo}
            className={
              'relative bg-card border rounded-3xl p-6 md:p-7 flex flex-col ' +
              s.borda
            }
          >
            <div
              className={
                'absolute -top-3 left-6 right-6 h-1 rounded-full ' + s.bolinha
              }
            />

            <div className="flex items-center gap-3">
              <span
                className={
                  'inline-flex items-center justify-center w-10 h-10 rounded-full ' +
                  s.fundoFarol
                }
              >
                <span className={'block w-5 h-5 rounded-full ' + s.bolinha} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-xl text-ink leading-none">
                  {s.titulo}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft font-medium">
                  {s.subtitulo}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm md:text-[0.95rem] text-ink-soft leading-relaxed">
              {s.texto}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
