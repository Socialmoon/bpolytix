type ProofBandProps = {
  items: Array<{ label: string; value: string }>;
};

export function ProofBand({ items }: ProofBandProps) {
  return (
    <section className="section pt-0">
      <div className="container-premium">
        <div className="grid gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.label} className="rounded-xl bg-[var(--surface-soft)] p-4">
              <p className="text-2xl font-bold text-[var(--text-strong)]">{item.value}</p>
              <p className="mt-1 text-sm text-[var(--text-soft)]">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
