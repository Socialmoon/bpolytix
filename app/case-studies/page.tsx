import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, TrendingUp } from "lucide-react";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/content/insights";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "BPO Case Studies — Customer Support & Lead Generation Outcomes | BPOlytix",
  description:
    "Review real BPO operating scenarios showing how BPOlytix improves conversion, support responsiveness, and process consistency across Healthcare, EdTech, and Ecommerce.",
  path: "/case-studies",
  keywords: [
    "bpo case studies",
    "bpolytix case studies",
    "customer support outcomes india",
    "lead conversion case study india",
    "bpo success stories india",
    "healthcare bpo case study",
    "edtech bpo case study",
    "ecommerce bpo case study",
    "bpo results india",
    "bpo roi india",
  ],
});

const caseStudiesBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Case Studies", path: "/case-studies" },
]);

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesBreadcrumb) }}
      />

      <PageHero
        badge="Case Studies"
        title="Outcome-driven BPO stories from real operating playbooks"
        description="These examples reflect the measurable impact BPOlytix is designed to deliver through disciplined execution and customer-first workflows."
        primaryCta={{ label: "Talk to BPOlytix", href: "/contact" }}
      />

      <section className="section pt-0">
        <div className="container-premium mt-2 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.slug} className="card overflow-hidden p-0">
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${study.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.34),transparent_34%),linear-gradient(145deg,transparent,rgba(15,23,42,0.24))]" />
                <div className="absolute inset-x-6 top-6 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                    {study.industry}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {new Date(study.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                    {study.statLabel}
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold tracking-tight">
                    {study.statValue}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${study.accent}`}>
                  {study.industry}
                </span>
                <h2 className="mt-4 font-display text-2xl font-semibold text-[var(--text-strong)]">
                  {study.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{study.summary}</p>

                <div className="mt-5 space-y-2 border-t border-[var(--line)] pt-4">
                  {study.outcomes.slice(0, 3).map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2 text-sm text-indigo-600">
                      <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-strong)] transition hover:border-[var(--brand)]"
                >
                  View Full Case Study
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Want similar business outcomes?"
        body="We can design a scoped pilot with clear KPIs and governance checkpoints tailored to your operation."
        cta={{ label: "Book Discovery", href: "/contact" }}
      />
    </>
  );
}
