import type { Metadata } from "next";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Customer Support and Lead Generation Services",
  description:
    "Explore BPOlytix services including customer support, tele-calling, lead generation, CRM operations, and quality-monitored process management.",
  path: "/services",
  keywords: [
    "BPO services",
    "lead generation services India",
    "customer support outsourcing",
    "telecalling service Lucknow",
  ],
});

const serviceGroups = [
  {
    title: "Customer Interaction Services",
    points: [
      "Inbound and outbound calling",
      "Email and chat customer support",
      "Appointment scheduling and confirmations",
      "Feedback, survey, and verification calls",
    ],
  },
  {
    title: "Sales and Revenue Operations",
    points: [
      "Lead qualification and nurturing",
      "Conversion-focused tele-sales campaigns",
      "Order support and upsell workflows",
      "Daily KPI dashboards for sales teams",
    ],
  },
  {
    title: "Data and Process Management",
    points: [
      "CRM data hygiene and pipeline updates",
      "Call recording and interaction analytics",
      "Performance scorecards and quality audits",
      "Back-office process support",
    ],
  },
];

const servicesBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

const servicesFaqs = [
  {
    question: "Which BPO services are best for early growth-stage businesses?",
    answer:
      "A strong starting stack is inbound support, outbound lead qualification, and CRM data management so teams can improve customer response and conversion speed.",
  },
  {
    question: "Can BPOlytix run both support and sales workflows together?",
    answer:
      "Yes. BPOlytix can operate blended workflows where customer support and sales operations run with separate quality metrics and reporting visibility.",
  },
  {
    question: "How do you track campaign quality in service delivery?",
    answer:
      "Campaign quality is tracked through call analytics, QA sampling, scorecards, and daily KPI dashboards shared with stakeholders.",
  },
];

const servicesFaqSchema = faqJsonLd(servicesFaqs);
const servicesSchema = serviceJsonLd(
  "Domestic BPO, Customer Support, and Lead Generation Services",
  "BPOlytix provides customer support, telecalling, lead generation, and back-office process management for businesses in Lucknow, Uttar Pradesh, and India.",
);

export default function ServicesPage() {
  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <div className="max-w-3xl hero-reveal">
        <p className="badge">Services</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-[var(--text-strong)] md:text-5xl">
          End-to-end BPO services for customer growth and operational stability
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--text-soft)]">
          Inspired by high-performing global BPM models, BPOlytix combines human expertise,
          process discipline, and practical technology to improve customer outcomes at scale.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {serviceGroups.map((group) => (
          <article key={group.title} className="card p-6">
            <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--text-soft)]">
              {group.points.map((point) => (
                <li key={point} className="rounded-lg bg-[var(--surface-soft)] px-3 py-2">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 card p-6 md:p-8">
        <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">
          Technology Stack
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-soft)]">
          We run a practical stack with Zoho CRM, cloud dialers such as CallingPro or CloudTalk,
          and structured call analytics for manager visibility and agent performance improvement.
        </p>
      </div>

      <div className="mt-10 card p-6 md:p-8">
        <p className="badge">Service FAQs</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
          Direct answers to common service planning questions
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {servicesFaqs.map((item) => (
            <article key={item.question} className="rounded-xl bg-[var(--surface-soft)] p-4">
              <h3 className="font-semibold text-[var(--text-strong)]">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}