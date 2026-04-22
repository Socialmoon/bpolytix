import type { Metadata } from "next";
import CareerForm from "./career-form";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers in Customer Support and Telecalling",
  description:
    "Apply for open roles at BPOlytix in customer support, lead generation, quality, and operations reporting.",
  path: "/careers",
  keywords: ["BPO jobs Lucknow", "telecaller jobs", "customer support careers"],
});

const openings = [
  {
    role: "Telecaller - Customer Support",
    location: "Lucknow",
    type: "Full Time",
  },
  {
    role: "Telecaller - Lead Generation",
    location: "Prayagraj",
    type: "Full Time",
  },
  {
    role: "Inbound Support Executive",
    location: "Lucknow",
    type: "Full Time",
  },
  {
    role: "Email and Chat Support Executive",
    location: "Lucknow",
    type: "Full Time",
  },
  {
    role: "Quality Analyst",
    location: "Lucknow",
    type: "Full Time",
  },
  {
    role: "MIS Executive - Reporting",
    location: "Lucknow",
    type: "Full Time",
  },
];

const careersBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
]);

export default function CareersPage() {
  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersBreadcrumb) }}
      />
      <div className="max-w-3xl hero-reveal">
        <p className="badge">Careers at BPOlytix</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-[var(--text-strong)] md:text-5xl">
          Build your career with a fast-growing customer operations team
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--text-soft)]">
          We are hiring people who communicate clearly, take ownership, and thrive in
          performance-driven environments.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="card p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">
            Current Openings
          </h2>
          <div className="mt-5 space-y-3">
            {openings.map((job) => (
              <article key={job.role} className="rounded-xl bg-[var(--surface-soft)] p-4">
                <p className="font-semibold text-[var(--text-strong)]">{job.role}</p>
                <p className="mt-1 text-sm text-[var(--text-soft)]">
                  {job.location} | {job.type}
                </p>
              </article>
            ))}
          </div>
        </div>

        <CareerForm openings={openings} />
      </div>
    </section>
  );
}