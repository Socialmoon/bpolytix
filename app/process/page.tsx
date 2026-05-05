import type { Metadata } from "next";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "BPO Delivery Process & Methodology — How BPOlytix Works",
  description:
    "Understand how BPOlytix, India's BPO company, plans, launches, governs, and scales BPO delivery with quality controls, transparent reporting, and a pilot-first model.",
  path: "/process",
  keywords: [
    "bpo process",
    "bpo delivery methodology",
    "bpo implementation india",
    "pilot bpo model",
    "bpolytix process",
    "bpo quality control india",
    "bpo sop india",
    "bpo governance model",
    "bpo pilot launch india",
    "how bpo works india",
  ],
});

const processBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Process", path: "/process" },
]);

const phases = [
  {
    number: "01",
    title: "Discovery & Scope Design",
    body: "We start every engagement with a structured discovery session to align on objectives, volume assumptions, channel mix, scripts, and KPI definitions. This phase produces a scoped delivery brief that both teams sign off on before any work begins.",
    deliverables: ["Delivery brief and scope document", "KPI definitions and SLA targets", "Script and workflow drafts", "Governance calendar"],
    color: "bg-sky-600",
  },
  {
    number: "02",
    title: "Pilot & Quality Baseline",
    body: "We deploy a controlled pilot with a defined team size, monitoring checkpoints, and script refinement cycles. Quality scoring is calibrated during this phase to establish the baseline that governs all future performance reviews.",
    deliverables: ["Pilot team deployment", "QA scorecard calibration", "Performance baseline report", "Script optimization notes"],
    color: "bg-indigo-600",
  },
  {
    number: "03",
    title: "Steady-State Operations",
    body: "Once the pilot validates quality and process stability, we transition to governed steady-state delivery. Weekly reporting, escalation rhythm, and continuous coaching keep performance consistent and leadership aligned.",
    deliverables: ["Weekly performance packs", "Escalation and issue logs", "Coaching and QA reviews", "Stakeholder update cadence"],
    color: "bg-emerald-600",
  },
  {
    number: "04",
    title: "Scale & Optimization",
    body: "With a stable operating baseline, we expand headcount and channels using workforce planning models that prevent quality drops during growth. Optimization cycles refine scripts, routing, and processes based on real performance data.",
    deliverables: ["Capacity and headcount plan", "Channel expansion roadmap", "Optimization action log", "Forecast and variance reports"],
    color: "bg-amber-600",
  },
];

const principles = [
  "Pilot before scale — validate quality before committing to full headcount",
  "Document everything — scripts, SOPs, and escalation paths are always written down",
  "Measure what matters — KPIs are tied to business outcomes, not just activity",
  "Govern weekly — regular reviews prevent drift and surface issues early",
  "Coach continuously — QA feedback loops improve performance over time",
  "Communicate proactively — no surprises, ever",
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
        description="Our operating method focuses on measurable outcomes, clear governance, and repeatable quality systems — so every engagement delivers predictable results from day one."
        primaryCta={{ label: "Start a Pilot", href: "/contact" }}
        stats={[
          { value: "4 phases", label: "Delivery framework" },
          { value: "2–4 wks", label: "Pilot launch time" },
          { value: "Weekly", label: "Governance cadence" },
          { value: "100%", label: "Documented SOPs" },
        ]}
      />

      <section className="section pt-0">
        <div className="container-premium">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">The Four Phases</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--text-strong)]">
              From discovery to scale — every step governed
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              Our delivery framework is designed to de-risk every stage of the engagement — with
              clear deliverables, defined checkpoints, and quality controls at each phase.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {phases.map((phase) => (
              <article
                key={phase.title}
                className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_22px_52px_rgba(99,102,241,0.1)]"
              >
                <div className={`h-1.5 w-full ${phase.color}`} />
                <div className="p-7">
                  <div className="flex items-start gap-4">
                    <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white ${phase.color}`}>
                      {phase.number}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl text-[var(--text-strong)] transition-colors group-hover:text-indigo-700">
                        {phase.title}
                      </h2>
                      <p className="mt-3 leading-7 text-[var(--text-soft)]">{phase.body}</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl bg-slate-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-500">
                      Phase Deliverables
                    </p>
                    <ul className="mt-3 space-y-2">
                      {phase.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-[var(--text-soft)]">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                          {d}
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

      {/* Principles */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="overflow-hidden rounded-2xl border border-indigo-100/60 bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/50 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Delivery Principles</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
              The rules we never break
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-soft)]">
              These principles are embedded in every engagement — from the first discovery call to
              steady-state operations at scale.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((p) => (
                <div key={p} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500" />
                  <p className="text-sm leading-6 text-[var(--text-soft)]">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Need a delivery model tailored to your workflow?"
        body="We can define phased rollout milestones and governance checkpoints around your SLA requirements and business goals — starting with a no-obligation discovery call."
        cta={{ label: "Talk to Delivery Team", href: "/contact" }}
      />
    </>
  );
}
