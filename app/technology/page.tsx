import type { Metadata } from "next";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Technology and Enablement Stack",
  description: "Learn how BPOlytix uses CRM integration, quality tooling, and analytics to drive predictable BPO performance.",
  path: "/technology",
  keywords: ["bpo technology", "contact center analytics", "crm-enabled bpo"],
});

const technologyBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Technology", path: "/technology" },
]);

const technologyPillars = [
  {
    title: "CRM and Workflow Integration",
    body: "Structured tagging, status governance, and workflow automation keep handoffs clean and auditable.",
  },
  {
    title: "Quality Monitoring and Coaching",
    body: "Scorecards, call sampling, and calibration cycles ensure service standards remain consistent at scale.",
  },
  {
    title: "Performance Analytics",
    body: "Leadership dashboards translate interaction data into clear decisions on staffing, quality, and conversion.",
  },
  {
    title: "Security and Access Controls",
    body: "Role-based access and process-level controls reduce operational risk and protect customer data handling.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(technologyBreadcrumb) }}
      />

      <PageHero
        badge="Technology"
        title="Enablement systems that make operations dependable"
        description="Technology is useful only when embedded in daily execution. Our stack and governance approach focuses on clarity, control, and measurable outcomes."
        primaryCta={{ label: "Discuss Tech Alignment", href: "/contact" }}
      />

      <section className="section pt-0">
        <div className="container-premium grid gap-4 md:grid-cols-2">
          {technologyPillars.map((pillar) => (
            <article key={pillar.title} className="card p-6 md:p-7">
              <h2 className="font-display text-2xl text-[var(--text-strong)]">{pillar.title}</h2>
              <p className="mt-3 leading-7 text-[var(--text-soft)]">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Looking for better reporting and control?"
        body="We can map your current systems and build an execution model with stronger visibility and governance."
        cta={{ label: "Talk to Experts", href: "/contact" }}
      />
    </>
  );
}
