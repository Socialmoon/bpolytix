import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const highlights = [
    "Domestic BPO model designed for India-first growth",
    "Operational base in Lucknow and Prayagraj",
    "5 to 10 trained agents with quality-driven coaching",
    "CRM + dialer stack with tracking and analytics",
  ];

  const capabilities = [
    { label: "Service Availability", value: "Voice, Chat and Email" },
    { label: "Coverage", value: "Domestic campaign operations" },
    { label: "Operations", value: "Quality-monitored workflows" },
    { label: "Technology", value: "CRM + cloud dialer integration" },
  ];

  const sectors = [
    "Banking and Financial Services",
    "Healthcare",
    "EdTech",
    "E-commerce",
    "Utilities",
    "Technology",
  ];

  const videos = [
    {
      id: "l7Q58xE8xG4",
      title: "How We Structure High-Quality Customer Conversations",
    },
    {
      id: "k7x8vP0YwJ8",
      title: "Inside a Performance-Driven Contact Center Workflow",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="hero-reveal">
            <p className="badge">BPOlytix x SocialMoon</p>
            <h1 className="mt-5 font-display text-4xl leading-tight tracking-tight text-[var(--text-strong)] md:text-6xl">
              Smart Calls. Smarter Results.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--text-soft)]">
              BPOlytix is a modern BPO and customer engagement company built to help ambitious
              businesses scale faster with high-conversion calling, reliable support, and data-backed
              execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)]"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:border-[var(--brand)]"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="card hero-reveal p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-soft)]">
              Quick Snapshot
            </p>
            <ul className="stagger mt-4 space-y-3 text-sm leading-6 text-[var(--text-soft)]">
              {highlights.map((item) => (
                <li key={item} className="rounded-xl bg-[var(--surface-soft)] px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="card p-6 md:p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="badge">Operations Overview</p>
              <h2 className="mt-4 font-display text-3xl tracking-tight text-[var(--text-strong)] md:text-4xl">
                Built for consistency, compliance, and customer trust
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--text-soft)]">
              We focus on service quality, customer experience, and transparent process control
              instead of disclosing internal commercial metrics.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <article key={item.label} className="rounded-2xl bg-[var(--surface-soft)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-[var(--text-strong)]">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="card p-6 md:p-8">
            <p className="badge">Inside Operations</p>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-[var(--text-strong)] md:text-4xl">
              Real teams, real systems, real accountability
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-soft)]">
              We build trust by showing exactly how operations are run: monitored interactions,
              CRM-led workflows, daily QA reviews, and transparent reporting for every campaign.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <figure className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)]">
                <Image
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                  alt="Team collaboration inside a contact center"
                  width={960}
                  height={640}
                  className="h-52 w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-xs text-[var(--text-soft)]">
                  Daily standups and live KPI reviews.
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)]">
                <Image
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
                  alt="Agent workstation with analytics dashboards"
                  width={960}
                  height={640}
                  className="h-52 w-full object-cover"
                />
                <figcaption className="px-4 py-3 text-xs text-[var(--text-soft)]">
                  Script quality, call analytics, and process tracking.
                </figcaption>
              </figure>
            </div>
          </article>

          <article className="card p-6 md:p-8">
            <p className="badge">Sectors We Support</p>
            <h3 className="mt-4 font-display text-2xl tracking-tight text-[var(--text-strong)] md:text-3xl">
              Trusted operating model for multi-industry demand
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
              Inspired by globally recognized CX organizations, BPOlytix is designed to support
              sector-specific communication standards and customer expectations.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--text-soft)]"
                >
                  {sector}
                </span>
              ))}
            </div>
            <div className="mt-7 rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.11em] text-[var(--text-soft)]">
                Governance Promise
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                We track quality score, conversion trend, and turnaround SLAs every week so your
                growth decisions are backed by evidence, not assumptions.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section pt-0">
        <div className="card p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="badge">Video Highlights</p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)] md:text-4xl">
                See the style of execution we bring to your campaigns
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--text-soft)]">
              Video content creates immediate confidence. We can replace these with your own office,
              team, and client testimonial videos in the next revision.
            </p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {videos.map((video) => (
              <article key={video.id} className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)]">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <p className="px-4 py-3 text-sm font-medium text-[var(--text-soft)]">{video.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="card p-6 md:p-8">
          <p className="badge">Why Clients Stay</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)] md:text-4xl">
            More transparency, better coaching, stronger outcomes
          </h2>
          <div className="mt-6 grid gap-4 text-sm leading-7 text-[var(--text-soft)] md:grid-cols-3">
            <article className="rounded-2xl bg-[var(--surface-soft)] p-5">
              <p className="font-semibold text-[var(--text-strong)]">Operational Clarity</p>
              <p className="mt-2">
                Your team receives progress snapshots, campaign notes, and quality flags on a
                predictable rhythm.
              </p>
            </article>
            <article className="rounded-2xl bg-[var(--surface-soft)] p-5">
              <p className="font-semibold text-[var(--text-strong)]">Human + Technology Balance</p>
              <p className="mt-2">
                Agents are coached for empathy and persuasion while tech handles logging,
                categorization, and trend analysis.
              </p>
            </article>
            <article className="rounded-2xl bg-[var(--surface-soft)] p-5">
              <p className="font-semibold text-[var(--text-strong)]">Scale Readiness</p>
              <p className="mt-2">
                Once baseline KPIs stabilize, workflows are prepared for expansion with minimal
                retraining overhead.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
