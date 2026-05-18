export default function SlideShell({ eyebrow, titulo, children }) {
  return (
    <section className="bg-card border border-line rounded-3xl p-6 md:p-12">
      {eyebrow && (
        <p className="text-xs tracking-[0.25em] uppercase text-accent-fg font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-ink leading-[1.1]">
        {titulo}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  )
}
