import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/premium/page-hero";
import { AboutSection } from "@/components/sections/about";
import { ContactCTASection } from "@/components/sections/contact-cta";
import { CtaStrip } from "@/components/premium/cta-strip";
import { Users, Target, Award, Globe } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About BPOlytix — India's Execution-First BPO Company",
  description:
    "BPOlytix is an India-based BPO company helping businesses improve customer operations, conversion quality, and process reliability through structured BPO delivery and transparent governance.",
  path: "/about",
  keywords: [
    "about bpolytix",
    "bpolytix company",
    "bpo company india",
    "bpo partner india",
    "domestic bpo company",
    "bpo company lucknow",
    "execution first bpo",
    "bpo company uttar pradesh",
    "bpo governance india",
    "pilot bpo model india",
  ],
});

const values = [
  {
    icon: Target,
    title: "Outcome Obsession",
    body: "We measure success by your KPIs — not our activity counts. Every process we design is tied to a measurable business outcome.",
    color: "bg-indigo-600",
  },
  {
    icon: Award,
    title: "Quality Without Compromise",
    body: "QA scorecards, calibration reviews, and coaching loops are built into every service line — not bolted on as an afterthought.",
    color: "bg-sky-600",
  },
  {
    icon: Users,
    title: "People-First Culture",
    body: "We invest in continuous skill development and incentive-led growth for every team member, because great delivery starts with great people.",
    color: "bg-emerald-600",
  },
  {
    icon: Globe,
    title: "Transparent Partnership",
    body: "Weekly governance reviews, clear escalation paths, and honest reporting keep your leadership aligned at every stage of the engagement.",
    color: "bg-amber-600",
  },
];

const officeHighlights = [
  { label: "Office Setup", detail: "300–500 sq ft smart office with ergonomic workstations and structured team zones." },
  { label: "Infrastructure", detail: "High-speed internet with power backup and redundant connectivity for uninterrupted operations." },
  { label: "Operating Hours", detail: "Structured 10 AM to 6 PM operations model with defined shift governance and supervisor coverage." },
  { label: "Team Culture", detail: "Quality coaching, performance incentives, and a growth-oriented environment for every team member." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About BPOlytix"
        title="A premium BPO partner built around clarity, quality, and scale"
        description="BPOlytix helps businesses improve customer operations, conversion quality, and process reliability through structured delivery and transparent governance — from pilot to full-scale execution."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
        stats={[
          { value: "2–4 wks", label: "Pilot launch time" },
          { value: "6", label: "Service lines" },
          { value: "4", label: "Industry verticals" },
          { value: "Weekly", label: "Governance cadence" },
        ]}
      />

      <AboutSection />

      {/* Core values */}
      <section className="section bg-slate-50 pt-0">
        <div className="container-premium">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Our Values</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--text-strong)]">
              The principles that guide every engagement
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              These are not aspirational statements — they are the operating standards we hold
              ourselves to on every client program, every week.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <article key={v.title} className="card p-6">
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${v.color} text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-[var(--text-strong)]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{v.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office & infrastructure */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="overflow-hidden rounded-2xl border border-indigo-100/60 bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/50 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Operational Edge</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
              Built for reliable, day-to-day delivery
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-soft)]">
              Our physical and operational infrastructure is designed to support consistent,
              high-quality delivery — not just during pilots, but at steady-state scale.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {officeHighlights.map((item) => (
                <div key={item.label} className="rounded-xl bg-white p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </>
  );
}
