import type { Metadata } from "next";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { resourceFaqs } from "@/lib/content/faq";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Resources & FAQs — BPO Implementation Guidance",
  description:
    "Explore implementation FAQs and practical guidance for evaluating BPO operating models, launch readiness, channel strategy, quality governance, and scale planning.",
  path: "/resources",
  keywords: ["bpo resources", "bpo faqs", "outsourcing guide", "bpo implementation"],
});

const resourcesBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
]);

const resourcesFaqSchema = faqJsonLd(resourceFaqs);

const guides = [
  {
    title: "Evaluating a BPO Partner",
    body: "The key questions to ask before signing any BPO engagement — covering governance, quality controls, reporting depth, and scale readiness.",
    tag: "Vendor Selection",
    color: "bg-sky-600",
  },
  {
    title: "Designing Your Pilot",
    body: "How to structure a BPO pilot with clear KPIs, defined checkpoints, and quality baselines that give you real signal before committing to scale.",
    tag: "Pilot Design",
    color: "bg-indigo-600",
  },
  {
    title: "Building a Quality Framework",
    body: "The components of a QA system that actually improves performance — scorecards, calibration, coaching loops, and escalation standards.",
    tag: "Quality Management",
    color: "bg-emerald-600",
  },
  {
    title: "Scaling Without Quality Drops",
    body: "Workforce planning, capacity modeling, and process documentation practices that let you grow headcount without losing the quality you built in the pilot.",
    tag: "Scale Planning",
    color: "bg-amber-600",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesFaqSchema) }}
      />

      <PageHero
        badge="Resources"
        title="Decision support for operations and growth leaders"
        description="Answers to common questions on launch readiness, channel strategy, quality governance, and scale planning — plus practical guides for every stage of your BPO journey."
        primaryCta={{ label: "Get Expert Input", href: "/contact" }}
        stats={[
          { value: "4 guides", label: "Implementation topics" },
          { value: "FAQs", label: "Common questions answered" },
          { value: "Free", label: "Expert consultation" },
          { value: "2–4 wks", label: "Typical launch time" },
        ]}
      />

      {/* Guides */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Implementation Guides</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--text-strong)]">
              Practical guidance for every stage
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              Whether you are evaluating your first BPO partner or planning a scale-up, these
              guides cover the decisions that matter most.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((guide) => (
              <article key={guide.title} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm">
                <div className={`h-1.5 w-full ${guide.color}`} />
                <div className="p-6">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white ${guide.color}`}>
                    {guide.tag}
                  </span>
                  <h3 className="mt-4 font-semibold text-[var(--text-strong)]">{guide.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{guide.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Common Questions</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--text-strong)]">
              Frequently asked questions
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              Straight answers to the questions we hear most often from operations and growth
              leaders evaluating a BPO engagement.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {resourceFaqs.map((faq) => (
              <article
                key={faq.question}
                className="group rounded-2xl border border-[var(--line)] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_22px_52px_rgba(99,102,241,0.1)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl text-[var(--text-strong)] transition-colors group-hover:text-indigo-700">
                      {faq.question}
                    </h2>
                    <p className="mt-3 leading-7 text-[var(--text-soft)]">{faq.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Need a recommendation for your current stage?"
        body="Share your current setup and goals, and we will suggest a practical path for launch or scale — with a scoped pilot recommendation and clear KPIs."
        cta={{ label: "Schedule a Call", href: "/contact" }}
      />
    </>
  );
}
