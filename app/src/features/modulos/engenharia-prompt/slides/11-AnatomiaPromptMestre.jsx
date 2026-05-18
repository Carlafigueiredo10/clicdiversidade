import SlideShell from '../SlideShell'

export default function AnatomiaPromptMestre() {
  return (
    <SlideShell
      eyebrow="Anatomia"
      titulo="A anatomia de um Prompt Mestre"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="bg-ink rounded-2xl p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <div className="flex gap-4">
              <pre className="text-muted/70 select-none">{`1
2
3
4
5
6
7
8
9
10`}</pre>
              <pre className="text-page whitespace-pre-wrap">
{``}<span className="text-accent">[PERSONA]</span>{` Você é uma assessora administrativa
especialista em redação oficial...

`}<span className="text-success">[TAREFA]</span>{` Redija um despacho de autorização
em linguagem oficial seguindo o padrão da
administração pública.

`}<span className="text-amber-300">[REGRAS]</span>{` Use linguagem formal, cite a base
legal, e mantenha tom impessoal.

`}<span className="text-accent">[PLACEHOLDERS]</span>{` [[NOME_SERVIDOR]],
[[NUMERO_PROCESSO_SEI]], [[JUSTIFICATIVA]]`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-page border border-line rounded-2xl p-6 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-wide text-accent-fg font-semibold">
            O pulo do gato
          </p>
          <p className="mt-3 text-ink leading-relaxed">
            Use{' '}
            <code className="bg-card border border-line rounded px-1.5 py-0.5 text-sm">
              [[colchetes duplos]]
            </code>{' '}
            para indicar onde colar a informação nova a cada uso.
          </p>
        </div>
      </div>
    </SlideShell>
  )
}
