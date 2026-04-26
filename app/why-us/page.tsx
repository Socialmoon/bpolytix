import type { Metadata } from "next";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/premium/page-hero";
import { CtaStrip } from "@/components/premium/cta-strip";
import { CheckCircle2, ArrowRight, Shield, BarChart3, Users, Zap } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Why Choose BPOlytix — India's Accountable BPO Company",
  description:
    "See why businesses choose BPOlytix as their BPO company in India. Accountable BPO delivery, transparent reporting, quality-driven customer engagement, and a pilot-first model.",
  path: "/why-us",
  keywords: ["why choose bpo company", "best bpo company india", "bpo partner india", "bpo company india"],
});

const differentiators = [
  {
    icon: Users,
    title: "Domain-Focused Teams",
    text: "Dedicated agents trained around your scripts, process edge-cases, and quality expectations — not generic pools shared across unrelated campaigns. Your team knows your product, your customers, and your standards.",
    color: "bg-sky-600",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Execution",
    text: "Daily dashboards and interaction analytics transform campaign data into practical action plans. We track the metrics that predict outcomes — not just the ones that look good in a report.",
    color: "bg-indigo-600",
  },
  {
    icon: Zap,
    title: "Cost-Effective Scaling",
    text: "Lean launch model with strong controls, designed to expand quickly without quality drops. You get enterprise-grade talent at a fraction of the cost of in-house hiring — without the overhead.",
    color: "bg-emerald-600",
  },
  {
    icon: Shield,
    title: "Customer Experience Mindset",
    text: "Every conversation is engineered to protect brand trust while improving conversion outcomes. We train for empathy and process discipline simultaneously — because both matter.",
    color: "bg-violet-600",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Communication",
    text: "Clear weekly reviews, campaign notes, and action logs keep leadership aligned at every stage. No surprises, no hidden issues — just honest reporting and proactive escalation.",
    color: "bg-amber-600",
  },
  {
    icon: ArrowRight,
    title: "Operational Reliability",
    text: "Structured staffing, backup infrastructure, and escalation coverage reduce delivery risk. We plan for variability so your SLAs hold even during peak volume or team changes.",
    color: "bg-rose-600",
  },
];

const trustPrinciples = [
  {
    title: "Data Responsibility",
    text: "Access controls, role-based handling, and controlled information flow are built into daily operations — not added as a compliance afterthought.",
  },
  {
    title: "Quality Governance",
    text: "Sampling, QA scorecards, and corrective coaching loops maintain service consistency across every agent, every shift, every week.",
  },
  {
    title: "SLA Commitment",
    text: "Response timelines and escalation standards are defined and agreed before campaign go-live — so there is no ambiguity about what success looks like.",
  },
  {
    title: "Process Documentation",
    text: "Scripts, disposition logic, and policy updates are documented and version-controlled to prevent execution drift as teams grow.",
  },
];

const engagementModel = [
  {
    step: "01",
    title: "Discovery Call",
    detail: "Align on goals, audience, channel mix, and communication standards. We ask the hard questions upfront so there are no surprises later.",
  },
  {
    step: "02",
    title: "Pilot Rollout",
    detail: "Deploy a controlled pilot with monitoring checkpoints, script refinements, and QA calibration. Validate quality before committing to scale.",
  },
  {
    step: "03",
    title: "Steady-State Execution",
    detail: "Run governed delivery with weekly QA cadence, stakeholder updates, and continuous coaching. Performance is always visible and always improving.",
  },
  {
    step: "04",
    title: "Scale Planning",
    detail: "Expand headcount and channels based on validated process stability — with workforce planning that prevents quality drops during growth.",
  },
];

const whyUsBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Why Us", path: "/why-us" },
]);

const whyUsFaqs = [
  {
    question: "What makes BPOlytix different from generic call centers?",
    answer:
      "BPOlytix combines domain-focused teams, daily analytics visibility, and governance-led quality systems — instead of only optimizing for call volume. Every engagement is tied to measurable business outcomes.",
  },
  {
    question: "How does BPOlytix reduce campaign execution risk?",
    answer:
      "Execution risk is reduced through documented scripts, escalation standards, role-based controls, and routine QA feedback loops — all established before go-live.",
  },
  {
    question: "Is BPOlytix suitable for scaling campaigns after the pilot stage?",
    answer:
      "Yes. The delivery model is designed to launch lean, validate stability, and then scale while preserving process discipline and quality standards.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most engagements complete discovery and pilot launch within 2–4 weeks, depending on workflow complexity and script readiness.",
  },
];

const whyUsFaqSchema = faqJsonLd(whyUsFaqs);

export default function WhyUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whyUsBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(whyUsFaqSchema) }}
      />

      <PageHero
        badge="Why Us"
        title="Built for businesses that need results, not just activity"
        description="Top BPO leaders combine talent, technology, and accountability. BPOlytix follows the same principle with a compact, execution-first model tailored to real business growth — not vanity metrics."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Team", href: "/team" }}
        stats={[
          { value: "Pilot-first", label: "Engagement model" },
          { value: "Weekly", label: "Governance cadence" },
          { value: "100%", label: "Documented SOPs" },
          { value: "2–4 wks", label: "Launch time" },
        ]}
      />

      {/* Differentiators */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">What Sets Us Apart</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--text-strong)]">
              Six reasons clients choose BPOlytix
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              These are not marketing claims — they are the operational standards we hold ourselves
              to on every client program, every week.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="card p-6">
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.color} text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-[var(--text-strong)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operational edge */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="overflow-hidden rounded-2xl border border-indigo-100/60 bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/50 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Operational Edge</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
              The infrastructure behind reliable delivery
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-soft)]">
              Great delivery requires more than good intentions — it requires the right physical and
              operational infrastructure to support consistent, high-quality work every day.
            </p>
            <div className="mt-8 grid gap-4 text-sm leading-7 text-[var(--text-soft)] sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Smart Office", detail: "300–500 sq ft ergonomic workspace with structured team zones and supervisor visibility." },
                { label: "Infrastructure", detail: "High-speed internet with power backup and redundant connectivity for uninterrupted operations." },
                { label: "Operating Model", detail: "Structured 10 AM to 6 PM operations with defined shift governance and escalation coverage." },
                { label: "Team Culture", detail: "Quality coaching, performance incentives, and a growth-oriented environment for every team member." },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust framework */}
      <section className="section pt-0">
        <div className="container-premium card p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Trust Framework</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
            Trust is built through systems, not promises
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-soft)]">
            Our operations are structured to protect client brand reputation while keeping campaign
            quality measurable and improvable — week over week.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {trustPrinciples.map((item) => (
              <article key={item.title} className="rounded-xl bg-[var(--surface-soft)] p-5">
                <p className="font-semibold text-[var(--text-strong)]">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="section pt-0">
        <div className="container-premium card p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">How We Engage</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
            Four steps from conversation to delivery
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModel.map((item) => (
              <div key={item.step} className="rounded-xl bg-[var(--surface-soft)] p-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
                  {item.step}
                </span>
                <p className="mt-3 font-semibold text-[var(--text-strong)]">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section pt-0">
        <div className="container-premium card p-6 md:p-8">
          <p className="badge">Decision FAQs</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-[var(--text-strong)]">
            Straight answers for leadership teams evaluating a BPO partner
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {whyUsFaqs.map((item) => (
              <article key={item.question} className="rounded-xl bg-[var(--surface-soft)] p-5">
                <h3 className="font-semibold text-[var(--text-strong)]">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Ready to see the difference?"
        body="Book a free discovery call and we will show you exactly how BPOlytix would approach your specific operation — with a scoped pilot recommendation and clear KPIs."
        cta={{ label: "Book Discovery Call", href: "/contact" }}
      />
    </>
  );
}
