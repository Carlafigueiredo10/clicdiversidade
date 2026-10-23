import { CONFERIDO_EM, CONTAS, DEGRAUS } from './escada-dados'
import { tr } from '../../../i18n'

const T = tr({
  pt: {
    eyebrow: 'A escada',
    titulo: 'Quatro formas de ensinar a IA',
    intro:
      'Do mais simples ao mais poderoso. Cada degrau resolve um problema diferente — e o risco cresce a cada um. Comece pelo que resolve o seu problema, não pelo mais sofisticado.',
    degrau: 'Degrau',
    resolve: 'Resolve',
    oque: 'O que é',
    noGemini: 'No Gemini',
    passos: 'Passo a passo',
    compartilhar: 'Compartilhar',
    risco: 'Risco',
    outras: 'Em outras plataformas',
    conferido: (d) => `Conferido em ${d} na ajuda oficial do Google. O Gemini muda com frequência: os nomes dos menus podem aparecer traduzidos ou diferentes na sua tela.`,
    fonte: 'Fonte oficial',
    contaTitulo: 'Conta pessoal ou institucional?',
    contaIntro: 'A mesma ferramenta trata os seus dados de jeitos diferentes conforme a conta. Antes de subir qualquer documento, saiba em qual você está.',
    pessoal: 'Conta pessoal (Gmail)',
    institucional: 'Conta institucional (Workspace)',
    nunca: 'Nunca',
  },
  es: {
    eyebrow: 'La escalera',
    titulo: 'Cuatro formas de enseñarle a la IA',
    intro:
      'De lo más simple a lo más potente. Cada escalón resuelve un problema distinto — y el riesgo crece en cada uno. Empieza por el que resuelve tu problema, no por el más sofisticado.',
    degrau: 'Escalón',
    resolve: 'Resuelve',
    oque: 'Qué es',
    noGemini: 'En Gemini',
    passos: 'Paso a paso',
    compartilhar: 'Compartir',
    risco: 'Riesgo',
    outras: 'En otras plataformas',
    conferido: (d) => `Verificado el ${d} en la ayuda oficial de Google. Gemini cambia con frecuencia: los nombres de los menús pueden aparecer traducidos o distintos en tu pantalla.`,
    fonte: 'Fuente oficial',
    contaTitulo: '¿Cuenta personal o institucional?',
    contaIntro: 'La misma herramienta trata tus datos de forma distinta según la cuenta. Antes de subir cualquier documento, sabe en cuál estás.',
    pessoal: 'Cuenta personal (Gmail)',
    institucional: 'Cuenta institucional (Workspace)',
    nunca: 'Nunca',
  },
})

const RISCO_COR = {
  1: 'bg-emerald-500',
  2: 'bg-amber-400',
  3: 'bg-amber-500',
  4: 'bg-red-500',
}

export default function Escada() {
  return (
    <div>
      <header className="text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
          {T.eyebrow}
        </p>
        <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">
          {T.titulo}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-ink-soft leading-relaxed">
          {T.intro}
        </p>
      </header>

      <ol className="mt-12 space-y-6">
        {DEGRAUS.map((d) => (
          <li
            key={d.id}
            id={`degrau-${d.id}`}
            className="scroll-mt-24 bg-card border border-line rounded-3xl p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-xs tracking-widest text-accent-fg font-semibold">
                {T.degrau} {d.n}
              </span>
              <h3 className="font-display font-semibold text-2xl text-ink leading-tight flex items-center gap-2">
                <span aria-hidden>{d.icon}</span> {d.nome}
              </h3>
              <span className="text-[11px] uppercase tracking-wider text-muted border border-line rounded-full px-2.5 py-0.5">
                {d.plano}
              </span>
            </div>

            <p className="mt-4 font-display text-lg text-ink">
              <span className="sr-only">{T.resolve}: </span>
              {d.resolve}
            </p>
            <p className="mt-2 text-ink-soft leading-relaxed">{d.oque}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-[11px] uppercase tracking-widest text-accent-fg font-semibold">
                  {T.noGemini}
                </h4>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{d.noGemini}</p>
                <h4 className="mt-5 text-[11px] uppercase tracking-widest text-accent-fg font-semibold">
                  {T.passos}
                </h4>
                <ol className="mt-2 space-y-2 text-sm text-ink-soft leading-relaxed list-decimal list-inside">
                  {d.passos.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ol>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest text-accent-fg font-semibold">
                    {T.compartilhar}
                  </h4>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{d.compartilhar}</p>
                </div>
                <div className="bg-page border border-line rounded-2xl p-4">
                  <h4 className="text-[11px] uppercase tracking-widest text-ink font-semibold flex items-center gap-2">
                    <span aria-hidden className={'inline-block w-2.5 h-2.5 rounded-full ' + RISCO_COR[d.n]} />
                    {T.risco}
                  </h4>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{d.risco}</p>
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest text-accent-fg font-semibold">
                    {T.outras}
                  </h4>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{d.outras}</p>
                </div>
              </div>
            </div>

            <p className="mt-6 pt-4 border-t border-line text-xs text-muted">
              <a
                href={d.fonte}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-fg underline underline-offset-4 hover:text-ink transition"
              >
                {T.fonte} ↗
              </a>
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-4 text-center text-xs text-muted">{T.conferido(CONFERIDO_EM)}</p>

      <section className="mt-14 bg-page border-2 border-accent/30 rounded-3xl p-6 md:p-8">
        <h3 className="font-display font-semibold text-2xl text-ink">{T.contaTitulo}</h3>
        <p className="mt-2 text-ink-soft leading-relaxed">{T.contaIntro}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            [T.pessoal, CONTAS.pessoal, 'border-amber-300'],
            [T.institucional, CONTAS.institucional, 'border-emerald-300'],
          ].map(([titulo, itens, borda]) => (
            <div key={titulo} className={'bg-card border rounded-2xl p-5 ' + borda}>
              <h4 className="font-semibold text-ink">{titulo}</h4>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft leading-relaxed list-disc list-inside">
                {itens.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink leading-relaxed">
          <strong className="text-red-700">{T.nunca}:</strong> {CONTAS.nunca.replace(/^[^:]*:\s*/, '')}
        </p>
        <p className="mt-4 text-xs text-muted">
          {CONTAS.fontes.map((f, i) => (
            <a
              key={f}
              href={f}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-accent-fg underline underline-offset-4 hover:text-ink transition"
            >
              {T.fonte} {i + 1} ↗
            </a>
          ))}
        </p>
      </section>
    </div>
  )
}
