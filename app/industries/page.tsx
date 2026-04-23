import type { Metadata } from "next";
import Link from "next/link";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { industries } from "@/lib/content/industries";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description: "Explore industry-specific BPOlytix operating playbooks for customer support, lead generation, and growth operations.",
  path: "/industries",
  keywords: ["bpo industries", "vertical bpo services", "industry playbooks"],
});

const industriesBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
]);

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
        description="Each vertical has unique communication rules, response expectations, and quality risks. Our industry playbooks are built around that reality."
        primaryCta={{ label: "Discuss Your Industry", href: "/contact" }}
      />

      <section className="section pt-0">
        <div className="container-premium grid gap-5 md:grid-cols-2">
          {industries.map((industry) => (
            <article key={industry.slug} className="card p-6 md:p-7">
              <h2 className="font-display text-2xl text-[var(--text-strong)]">{industry.name}</h2>
              <p className="mt-3 leading-7 text-[var(--text-soft)]">{industry.summary}</p>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.09em] text-[var(--text-soft)]">
                  Key Priorities
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-soft)]">
                  {industry.priorities.map((priority) => (
                    <li key={priority} className="rounded-lg bg-[var(--surface-soft)] px-3 py-2">
                      {priority}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/industries/${industry.slug}`}
                className="mt-6 inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-strong)] transition hover:border-[var(--brand)]"
              >
                View Industry Detail
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Need an industry-ready support model?"
        body="We align scripts, workflows, and governance to your market context and customer expectations."
        cta={{ label: "Schedule Consultation", href: "/contact" }}
      />
    </>
  );
}
