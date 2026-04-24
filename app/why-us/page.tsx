import type { Metadata } from "next";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/premium/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Why Choose BPOlytix as Your BPO Partner in India",
  description:
    "See why businesses choose BPOlytix as their BPO partner for accountable delivery, transparent reporting, and quality-driven customer engagement workflows.",
  path: "/why-us",
  keywords: ["why choose BPO", "domestic contact center", "BPO partner India", "bpo company"],
});

const differentiators = [
  {
    title: "Domain-Focused Teams",
    text: "Dedicated agents trained around your scripts, process edge-cases, and quality expectations.",
  },
  {
    title: "Data-Driven Execution",
    text: "Daily dashboards and call analytics transform campaign data into practical action plans.",
  },
  {
    title: "Cost-Effective Scaling",
    text: "Lean launch model with strong controls, designed to expand quickly without quality drops.",
  },
  {
    title: "Customer Experience Mindset",
    text: "Every conversation is engineered to protect brand trust while improving conversion outcomes.",
  },
  {
    title: "Transparent Communication",
    text: "Clear weekly reviews, campaign notes, and action logs keep leadership aligned at every stage.",
  },
  {
    title: "Operational Reliability",
    text: "Structured staffing, backup infrastructure, and escalation coverage reduce delivery risk.",
  },
];

const trustPrinciples = [
  {
    title: "Data Responsibility",
    text: "Access controls, role-based handling, and controlled information flow are built into daily operations.",
  },
  {
    title: "Quality Governance",
    text: "Sampling, QA scorecards, and corrective coaching loops maintain service consistency.",
  },
  {
    title: "SLA Commitment",
    text: "Response timelines and escalation standards are defined before campaign go-live.",
  },
  {
    title: "Process Documentation",
    text: "Scripts, disposition logic, and policy updates are documented to prevent execution drift.",
  },
];

const engagementModel = [
  "Discovery call to align goals, audience, and communication standards",
  "Pilot rollout with monitoring checkpoints and script refinements",
  "Steady-state execution with QA cadence and stakeholder updates",
  "Scale planning based on validated process stability",
];

const whyUsBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Why Us", path: "/why-us" },
]);

const whyUsFaqs = [
  {
    question: "What makes BPOlytix different from generic call centers?",
    answer:
      "BPOlytix combines domain-focused teams, daily analytics visibility, and governance-led quality systems instead of only focusing on call volume.",
  },
  {
    question: "How does BPOlytix reduce campaign execution risk?",
    answer:
      "Execution risk is reduced using documented scripts, escalation standards, role-based controls, and routine QA feedback loops.",
  },
  {
    question: "Is BPOlytix suitable for scaling campaigns after pilot stage?",
    answer:
      "Yes. The delivery model is designed to launch lean, validate stability, and then scale while preserving process discipline.",
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
        description="Top BPO leaders combine talent, technology, and accountability. BPOlytix follows the same principle with a compact, execution-first model tailored to real business growth."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Team", href: "/team" }}
      />

      <section className="section pt-0">
      <div className="container-premium grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item) => (
          <article key={item.title} className="card p-6">
            <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">
              {item.title}
            </h2>
            <p className="mt-3 leading-7 text-[var(--text-soft)]">{item.text}</p>
          </article>
        ))}
      </div>
      </section>

      <section className="section pt-0">
      <div className="container-premium card p-6 md:p-8">
        <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">
          Operational Edge
        </h2>
        <div className="mt-5 grid gap-4 text-sm leading-7 text-[var(--text-soft)] sm:grid-cols-2 lg:grid-cols-4">
          <p className="rounded-xl bg-[var(--surface-soft)] p-4">300 to 500 sq ft smart office setup</p>
          <p className="rounded-xl bg-[var(--surface-soft)] p-4">High-speed internet with power backup</p>
          <p className="rounded-xl bg-[var(--surface-soft)] p-4">Structured 10 AM to 6 PM operations model</p>
          <p className="rounded-xl bg-[var(--surface-soft)] p-4">Quality coaching and incentive-led culture</p>
        </div>
      </div>
      </section>

      <section className="section pt-0">
      <div className="container-premium card p-6 md:p-8">
        <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">
          Trust Framework
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-soft)]">
          Trust is built through repeatable systems, not promises. Our operations are structured to
          protect client brand reputation while keeping campaign quality measurable.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {trustPrinciples.map((item) => (
            <article key={item.title} className="rounded-xl bg-[var(--surface-soft)] p-4">
              <p className="font-semibold text-[var(--text-strong)]">{item.title}</p>
              <p className="mt-1 text-sm leading-7 text-[var(--text-soft)]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
      </section>

      <section className="section pt-0">
      <div className="container-premium card p-6 md:p-8">
        <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">
          How We Engage
        </h2>
        <div className="mt-5 grid gap-3 text-sm leading-7 text-[var(--text-soft)]">
          {engagementModel.map((step) => (
            <p key={step} className="rounded-xl bg-[var(--surface-soft)] p-4">
              {step}
            </p>
          ))}
        </div>
      </div>
      </section>

      <section className="section pt-0">
      <div className="container-premium card p-6 md:p-8">
        <p className="badge">Decision FAQs</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
          Straight answers for leadership teams evaluating a BPO partner
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {whyUsFaqs.map((item) => (
            <article key={item.question} className="rounded-xl bg-[var(--surface-soft)] p-4">
              <h3 className="font-semibold text-[var(--text-strong)]">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}