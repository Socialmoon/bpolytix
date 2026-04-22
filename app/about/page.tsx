import type { Metadata } from "next";
import Image from "next/image";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Our BPO Team and Delivery Model",
  description:
    "Learn how BPOlytix combines quality governance, training, and practical operations to support customer engagement and revenue growth.",
  path: "/about",
  keywords: ["about BPOlytix", "BPO company Lucknow", "contact center team India"],
});

const aboutBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function AboutPage() {
  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }}
      />
      <div className="max-w-3xl hero-reveal">
        <p className="badge">About BPOlytix</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-[var(--text-strong)] md:text-5xl">
          A focused BPO partner built for measurable growth
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--text-soft)]">
          BPOlytix is a domestic BPO brand with operational roots in Lucknow and Prayagraj. We
          combine practical team structures with modern tools to deliver better conversion rates,
          stronger customer experience, and reliable process execution.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="card p-6">
          <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">
            Our Vision
          </h2>
          <p className="mt-3 leading-7 text-[var(--text-soft)]">
            To become the preferred growth operations partner for emerging and mid-size businesses
            that need a dependable team for customer engagement and sales support.
          </p>
        </article>
        <article className="card p-6">
          <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">
            Our Model
          </h2>
          <p className="mt-3 leading-7 text-[var(--text-soft)]">
            Start with lean, quality-first operations, deliver visible outcomes, and scale with
            data. Every workflow is designed to maintain control while increasing performance.
          </p>
        </article>
      </div>

      <div className="mt-10 card p-6 md:p-8">
        <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">
          Quality and Governance
        </h2>
        <div className="mt-5 grid gap-4 text-sm leading-7 text-[var(--text-soft)] md:grid-cols-3">
          <div className="rounded-xl bg-[var(--surface-soft)] p-4">
            <p className="font-semibold text-[var(--text-strong)]">Quality Monitoring</p>
            <p className="mt-1">Regular call reviews and coaching-led process improvements.</p>
          </div>
          <div className="rounded-xl bg-[var(--surface-soft)] p-4">
            <p className="font-semibold text-[var(--text-strong)]">SLA Discipline</p>
            <p className="mt-1">Defined turnaround timelines with escalation standards.</p>
          </div>
          <div className="rounded-xl bg-[var(--surface-soft)] p-4">
            <p className="font-semibold text-[var(--text-strong)]">Reporting Transparency</p>
            <p className="mt-1">Structured updates to keep stakeholders aligned and informed.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <figure className="card overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
            alt="Operations team discussing campaign planning"
            width={1400}
            height={933}
            className="h-72 w-full object-cover"
          />
          <figcaption className="px-5 py-4 text-sm leading-6 text-[var(--text-soft)]">
            Strategic planning and script optimization sessions help maintain conversion quality.
          </figcaption>
        </figure>
        <figure className="card overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
            alt="Professional support representative at work"
            width={1400}
            height={933}
            className="h-72 w-full object-cover"
          />
          <figcaption className="px-5 py-4 text-sm leading-6 text-[var(--text-soft)]">
            Customer interactions are structured to balance empathy, speed, and measurable outcomes.
          </figcaption>
        </figure>
      </div>

      <div className="mt-10 card p-6 md:p-8">
        <p className="badge">Built on Trust</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
          Why this model earns long-term client confidence
        </h2>
        <div className="mt-5 grid gap-4 text-sm leading-7 text-[var(--text-soft)] md:grid-cols-2">
          <p className="rounded-xl bg-[var(--surface-soft)] p-4">
            We align each campaign with a clearly defined KPI stack: contactability, conversion,
            quality score, and customer sentiment.
          </p>
          <p className="rounded-xl bg-[var(--surface-soft)] p-4">
            Management visibility is not optional. Stakeholders can review trend lines and quality
            controls across every operating cycle.
          </p>
          <p className="rounded-xl bg-[var(--surface-soft)] p-4">
            Agent training is continuous, not one-time. Scripts, objections, and QA scenarios are
            refreshed as customer behavior changes.
          </p>
          <p className="rounded-xl bg-[var(--surface-soft)] p-4">
            With SocialMoon as a strategic growth backbone, BPOlytix combines execution capability
            with brand and market expansion support.
          </p>
        </div>
      </div>
    </section>
  );
}