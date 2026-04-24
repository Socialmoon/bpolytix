import type { Metadata } from "next";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Delivery Process and Methodology",
  description: "Understand how BPOlytix plans, launches, governs, and scales BPO delivery with quality and transparency.",
  path: "/process",
  keywords: ["bpo process", "bpo implementation", "delivery methodology"],
});

const processBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Process", path: "/process" },
]);

const phases = [
  {
    title: "Discovery and Scope Design",
    body: "Align objectives, volume assumptions, scripts, and KPI definitions before launch.",
  },
  {
    title: "Pilot and Quality Baseline",
    body: "Deploy a controlled pilot, calibrate quality scoring, and validate performance assumptions.",
  },
  {
    title: "Steady-State Operations",
    body: "Run governed delivery with weekly reporting, escalation rhythm, and continuous coaching.",
  },
  {
    title: "Scale and Optimization",
    body: "Expand headcount and channels with workforce planning and outcome-led refinement cycles.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processBreadcrumb) }}
      />

      <PageHero
        badge="Methodology"
        title="A process architecture built for control and scale"
        description="Our operating method focuses on measurable outcomes, clear governance, and repeatable quality systems."
        primaryCta={{ label: "Start a Pilot", href: "/contact" }}
      />

      <section className="section pt-0">
        <div className="container-premium grid gap-4 md:grid-cols-2">
          {phases.map((phase, index) => (
            <article key={phase.title} className="card p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-soft)]">
                Phase {index + 1}
              </p>
              <h2 className="mt-2 font-display text-2xl text-[var(--text-strong)]">{phase.title}</h2>
              <p className="mt-3 leading-7 text-[var(--text-soft)]">{phase.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Need a delivery model tailored to your workflow?"
        body="We can define phased rollout milestones and governance checkpoints around your SLA and business goals."
        cta={{ label: "Talk to Delivery Team", href: "/contact" }}
      />
    </>
  );
}
