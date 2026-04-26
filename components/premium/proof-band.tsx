type ProofBandProps = {
  items: Array<{ label: string; value: string }>;
};

export function ProofBand({ items }: ProofBandProps) {
  return (
    <section className="section pt-0">
      <div className="container-premium">
        <div className="grid gap-4 rounded-2xl border border-indigo-100/60 bg-gradient-to-r from-indigo-50/60 via-white to-sky-50/60 p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <article
              key={item.label}
              className="relative overflow-hidden rounded-xl bg-white p-5 shadow-sm"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 opacity-60" />
              <p className="text-3xl font-bold text-[var(--text-strong)]">{item.value}</p>
              <p className="mt-1.5 text-sm text-[var(--text-soft)]">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
