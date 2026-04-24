import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/content/services";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { ProofBand } from "@/components/premium/proof-band";

export const metadata: Metadata = buildMetadata({
  title: "BPO Services and Delivery Capabilities",
  description: "Explore BPOlytix service lines across support, lead generation, quality, analytics, and workforce management.",
  path: "/services",
  keywords: ["bpo services", "customer support outsourcing", "lead generation services"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Service architecture for growth-focused operations"
        description="Choose from modular service lines designed to improve customer outcomes, conversion quality, and operational reliability."
        primaryCta={{ label: "Talk to Experts", href: "/contact" }}
        secondaryCta={{ label: "View Industries", href: "/industries" }}
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
        <div className="container-premium grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="card p-6 md:p-7">
              <h2 className="font-display text-2xl text-[var(--text-strong)]">{service.name}</h2>
              <p className="mt-3 leading-7 text-[var(--text-soft)]">{service.short}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.idealFor.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs font-semibold text-[var(--text-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-strong)] transition hover:border-[var(--brand)]"
              >
                View Service Detail
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Need a bundled operating model?"
        body="We can combine support, lead generation, analytics, and workforce controls into a single phased delivery plan."
        cta={{ label: "Book Consultation", href: "/contact" }}
      />
    </>
  );
}
