import type { Metadata } from "next";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Technology & Enablement Stack — BPOlytix",
  description:
    "Learn how BPOlytix uses CRM integration, quality tooling, performance analytics, and security controls to drive predictable, measurable BPO performance.",
  path: "/technology",
  keywords: ["bpo technology", "contact center analytics", "crm-enabled bpo", "quality monitoring"],
});

const technologyBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Technology", path: "/technology" },
]);

const technologyPillars = [
  {
    title: "CRM & Workflow Integration",
    body: "Structured tagging, status governance, and workflow automation keep handoffs clean and auditable. We integrate with your existing CRM or deploy a governed setup that fits your process — ensuring every lead, ticket, and case is tracked with full disposition discipline.",
    capabilities: [
      "CRM tagging and enrichment standards",
      "Workflow automation for handoffs",
      "Disposition hygiene and audit trails",
      "Integration with Salesforce, HubSpot, Zoho, and custom CRMs",
    ],
    color: "bg-sky-600",
  },
  {
    title: "Quality Monitoring & Coaching",
    body: "Scorecards, call sampling, and calibration cycles ensure service standards remain consistent at scale. Our QA framework is built to surface issues early — before they become patterns — and connect every finding to a coaching action.",
    capabilities: [
      "QA scorecards and calibration reviews",
      "Call sampling and interaction analysis",
      "Corrective coaching loops",
      "Compliance and script adherence tracking",
    ],
    color: "bg-indigo-600",
  },
  {
    title: "Performance Analytics",
    body: "Leadership dashboards translate interaction data into clear decisions on staffing, quality, and conversion. We build reporting frameworks that surface the quality, velocity, and conversion trends your team needs — not just activity counts.",
    capabilities: [
      "KPI architecture and governance",
      "Root-cause trend analysis",
      "Leadership-ready performance packs",
      "Conversion and quality dashboards",
    ],
    color: "bg-emerald-600",
  },
  {
    title: "Security & Access Controls",
    body: "Role-based access and process-level controls reduce operational risk and protect customer data handling. Our security posture is built into daily operations — not added as a compliance checkbox after the fact.",
    capabilities: [
      "Role-based access management",
      "Data handling and privacy controls",
      "Process-level audit logging",
      "Controlled information flow standards",
    ],
    color: "bg-amber-600",
  },
];

const toolingPhilosophy = [
  {
    title: "Tools serve process, not the other way around",
    body: "We select and configure technology based on your workflow requirements — not based on what is easiest for us to deploy.",
  },
  {
    title: "Visibility is a governance requirement",
    body: "Every client gets weekly reporting that is readable by leadership, not just analysts. Clarity in reporting is non-negotiable.",
  },
  {
    title: "Security is embedded, not bolted on",
    body: "Access controls, data handling standards, and audit trails are built into the operating model from day one.",
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
        description="Technology is useful only when embedded in daily execution. Our stack and governance approach focuses on clarity, control, and measurable outcomes — not tool complexity."
        primaryCta={{ label: "Discuss Tech Alignment", href: "/contact" }}
        stats={[
          { value: "4 pillars", label: "Technology framework" },
          { value: "CRM-native", label: "Workflow integration" },
          { value: "Weekly", label: "Analytics reporting" },
          { value: "Role-based", label: "Access controls" },
        ]}
      />

      <section className="section pt-0">
        <div className="container-premium">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Technology Pillars</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--text-strong)]">
              Four systems that keep delivery predictable
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              Our technology framework is built around four core pillars — each designed to reduce
              operational risk, improve visibility, and support consistent quality at scale.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {technologyPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_22px_52px_rgba(99,102,241,0.1)]"
              >
                <div className={`h-1.5 w-full ${pillar.color}`} />
                <div className="p-7">
                  <h2 className="font-display text-2xl text-[var(--text-strong)] transition-colors group-hover:text-indigo-700">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 leading-7 text-[var(--text-soft)]">{pillar.body}</p>
                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-500">
                      Capabilities
                    </p>
                    <ul className="mt-3 space-y-2">
                      {pillar.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2 text-sm text-[var(--text-soft)]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="overflow-hidden rounded-2xl border border-indigo-100/60 bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/50 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Our Philosophy</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
              Technology principles we never compromise on
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {toolingPhilosophy.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-5 shadow-sm">
                  <h3 className="font-semibold text-[var(--text-strong)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Looking for better reporting and control?"
        body="We can map your current systems and build an execution model with stronger visibility, cleaner data governance, and weekly reporting your leadership can actually use."
        cta={{ label: "Talk to Experts", href: "/contact" }}
      />
    </>
  );
}
