import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="section pt-24 md:pt-28">
      <div className="container-premium">
        <div className="hero-shell relative overflow-hidden rounded-[2.25rem] border border-[rgba(255,255,255,0.45)] p-8 shadow-[0_30px_90px_rgba(15,23,42,0.16)] md:p-12">
          <div className="hero-aurora absolute inset-0 opacity-95" />
          <div className="hero-grid absolute inset-0 opacity-25" />
          <div className="hero-noise absolute inset-0 opacity-[0.16]" />
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />
          <div className="hero-orb hero-orb-c" />
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.22),transparent_30%),radial-gradient(circle_at_88%_22%,rgba(165,243,252,0.20),transparent_28%),radial-gradient(circle_at_52%_100%,rgba(244,114,182,0.22),transparent_34%)]" />

          <div className="relative z-10 grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_320px]">
            <div className="max-w-4xl hero-reveal">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                {badge}
              </div>
              <h1 className="mt-5 max-w-4xl font-display text-4xl tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100/86">{description}</p>
              {(primaryCta || secondaryCta) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {primaryCta ? (
                    <Link
                      href={primaryCta.href}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(255,255,255,0.22)]"
                    >
                      {primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                  {secondaryCta ? (
                    <Link
                      href={secondaryCta.href}
                      className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/18"
                    >
                      {secondaryCta.label}
                    </Link>
                  ) : null}
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/90 backdrop-blur-sm">
                  Premium Delivery
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/90 backdrop-blur-sm">
                  Enterprise Ready
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/90 backdrop-blur-sm">
                  Outcome Focused
                </span>
              </div>
            </div>

            <div className="grid gap-4 lg:justify-self-end">
              <div className="hero-float rounded-[1.75rem] border border-white/20 bg-white/12 p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100/70">
                  Delivery Lens
                </p>
                <p className="mt-3 font-display text-2xl">
                  Designed for clarity from first click to execution.
                </p>
                <div className="mt-4 h-px bg-gradient-to-r from-white/40 to-transparent" />
                <p className="mt-4 text-sm leading-6 text-white/78">
                  Strong visuals, focused calls to action, and quieter supporting detail so each page opens with confidence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[1.5rem] border border-white/16 bg-black/12 p-4 text-white/92 backdrop-blur-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    Visual Style
                  </p>
                  <p className="mt-2 text-lg font-semibold">Layered motion</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/16 bg-black/12 p-4 text-white/92 backdrop-blur-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    Focus
                  </p>
                  <p className="mt-2 text-lg font-semibold">High-intent CTA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
