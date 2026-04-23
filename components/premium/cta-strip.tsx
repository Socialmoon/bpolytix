import Link from "next/link";

type CtaStripProps = {
  title: string;
  body: string;
  cta: { label: string; href: string };
};

export function CtaStrip({ title, body, cta }: CtaStripProps) {
  return (
    <section className="section pt-0">
      <div className="container-premium">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-gradient-to-r from-blue-50 via-white to-amber-50 p-8 md:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-300/20 blur-2xl" />
          <div className="absolute -left-8 -bottom-10 h-36 w-36 rounded-full bg-amber-300/20 blur-2xl" />
          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">{title}</h2>
              <p className="mt-3 leading-7 text-[var(--text-soft)]">{body}</p>
            </div>
            <Link
              href={cta.href}
              className="inline-flex w-fit rounded-full bg-[var(--text-strong)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
