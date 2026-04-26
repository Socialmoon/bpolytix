import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/content/services";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { ProofBand } from "@/components/premium/proof-band";

export const metadata: Metadata = buildMetadata({
  title: "BPO Services India — Customer Support, Lead Generation & Back-Office | BPOlytix",
  description:
    "Explore BPOlytix BPO services: customer support outsourcing, lead generation BPO, back-office processing, inside sales, quality analytics, and workforce management across India.",
  path: "/services",
  keywords: ["bpo services", "bpo services india", "customer support bpo", "lead generation bpo", "back office bpo", "call center outsourcing", "bpo outsourcing india"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Service architecture for growth-focused operations"
        description="Choose from modular service lines designed to improve customer outcomes, conversion quality, and operational reliability — each with documented delivery standards and weekly governance."
        primaryCta={{ label: "Talk to Experts", href: "/contact" }}
        secondaryCta={{ label: "View Industries", href: "/industries" }}
        stats={[
          { value: "6", label: "Service disciplines" },
          { value: "100%", label: "Outcome-led model" },
          { value: "Weekly", label: "Governance cadence" },
          { value: "2–4 wks", label: "Pilot launch" },
        ]}
      />

      <ProofBand
        items={[
          { label: "Delivery disciplines", value: "6" },
          { label: "Industry playbooks", value: "4" },
          { label: "Outcome-led model", value: "100%" },
          { label: "Governance cadence", value: "Weekly" },
        ]}
      />

      <section className="section pt-0">
        <div className="container-premium">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">All Services</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--text-strong)]">
              Every service line, built for measurable outcomes
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              Each service is a modular delivery unit with its own quality controls, reporting cadence, and escalation standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(99,102,241,0.12)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="rounded-xl border border-white/20 bg-black/40 px-3 py-2 backdrop-blur-md">
                      <p className="text-xl font-bold text-white">{service.stat.value}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">{service.stat.label}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl text-[var(--text-strong)] transition-colors group-hover:text-indigo-700">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{service.short}</p>

                  <ul className="mt-4 space-y-1.5">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-center gap-2 text-sm text-[var(--text-soft)]">
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.idealFor.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-full border border-[var(--line)] bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-[var(--text-soft)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-transform group-hover:translate-x-1"
                  >
                    View Service Detail <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visual trust strip */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="grid gap-4 overflow-hidden rounded-2xl sm:grid-cols-3">
            {[
              { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop", label: "Environment", title: "Smart Office Setup" },
              { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop", label: "Culture", title: "Team-First Delivery" },
              { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop", label: "Reporting", title: "Weekly Analytics" },
            ].map((img) => (
              <div key={img.title} className="relative h-56 overflow-hidden rounded-2xl sm:h-72">
                <Image src={img.src} alt={img.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">{img.label}</p>
                  <p className="mt-1 font-display text-xl font-bold text-white">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Need a bundled operating model?"
        body="We can combine support, lead generation, analytics, and workforce controls into a single phased delivery plan tailored to your business goals and timeline."
        cta={{ label: "Book Consultation", href: "/contact" }}
      />
    </>
  );
}
