import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { industries } from "@/lib/content/industries";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "BPO Industries — Healthcare, EdTech, Ecommerce & Financial Services BPO | BPOlytix",
  description:
    "BPOlytix delivers industry-specific BPO services for Healthcare, EdTech, Ecommerce, and Financial Services. Vertical BPO playbooks built for real-world constraints across India.",
  path: "/industries",
  keywords: [
    "bpo industries",
    "industry bpo services india",
    "healthcare bpo",
    "healthcare bpo india",
    "edtech bpo",
    "education bpo india",
    "ecommerce bpo",
    "d2c bpo india",
    "financial services bpo",
    "fintech bpo india",
    "vertical bpo india",
    "sector specific bpo",
    "bpolytix industries",
  ],
});

const industriesBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
]);

const industryColors: Record<string, string> = {
  healthcare: "bg-emerald-600",
  edtech: "bg-sky-600",
  ecommerce: "bg-violet-600",
  "financial-services": "bg-amber-600",
};

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesBreadcrumb) }}
      />

      <PageHero
        badge="Industries"
        title="Sector-specific operations designed for real-world constraints"
        description="Each vertical has unique communication rules, response expectations, and quality risks. Our industry playbooks are built around that reality — not generic BPO templates."
        primaryCta={{ label: "Discuss Your Industry", href: "/contact" }}
        stats={[
          { value: "4", label: "Industry verticals" },
          { value: "Healthcare", label: "Patient-first workflows" },
          { value: "EdTech", label: "Enrollment conversion" },
          { value: "D2C", label: "Post-purchase support" },
        ]}
      />

      <section className="section pt-0">
        <div className="container-premium">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Vertical Playbooks</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--text-strong)]">
              Built for your industry's specific demands
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              Generic BPO models fail because they ignore the nuances of each vertical. Our
              playbooks are designed around the real constraints, compliance requirements, and
              customer expectations of each industry we serve.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <article
                key={industry.slug}
                className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_22px_52px_rgba(99,102,241,0.1)]"
              >
                {/* Top accent bar */}
                <div className={`h-1.5 w-full ${industryColors[industry.slug] ?? "bg-indigo-600"}`} />

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white ${industryColors[industry.slug] ?? "bg-indigo-600"}`}>
                        {industry.name}
                      </span>
                      <h2 className="mt-4 font-display text-2xl text-[var(--text-strong)] transition-colors group-hover:text-indigo-700">
                        {industry.name}
                      </h2>
                    </div>
                  </div>

                  <p className="mt-3 leading-7 text-[var(--text-soft)]">{industry.summary}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-500">
                        Key Priorities
                      </p>
                      <ul className="mt-3 space-y-2">
                        {industry.priorities.map((priority) => (
                          <li key={priority} className="flex items-start gap-2 text-sm text-[var(--text-soft)]">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                            {priority}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-500">
                        Delivery Playbooks
                      </p>
                      <ul className="mt-3 space-y-2">
                        {industry.playbooks.map((playbook) => (
                          <li key={playbook} className="flex items-start gap-2 text-sm text-[var(--text-soft)]">
                            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-400" />
                            {playbook}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={`/industries/${industry.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-transform group-hover:translate-x-1"
                  >
                    View Industry Detail
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Need an industry-ready support model?"
        body="We align scripts, workflows, and governance to your market context and customer expectations — so your team launches with confidence, not guesswork."
        cta={{ label: "Schedule Consultation", href: "/contact" }}
      />
    </>
  );
}
