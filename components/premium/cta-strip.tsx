import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CtaStripProps = {
  title: string;
  body: string;
  cta: { label: string; href: string };
};

export function CtaStrip({ title, body, cta }: CtaStripProps) {
  return (
    <section className="section pt-0">
      <div className="container-premium">
        <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#1e1b4b_0%,#312e81_50%,#0e7490_100%)] p-8 shadow-[0_24px_60px_rgba(49,46,129,0.25)] md:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/8 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 left-1/4 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl tracking-tight text-white">{title}</h2>
              <p className="mt-3 leading-7 text-white/70">{body}</p>
            </div>
            <Link
              href={cta.href}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-[0_12px_28px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(255,255,255,0.2)]"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
