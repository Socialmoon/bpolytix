import type { Metadata } from "next";
import CareerForm from "./career-form";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/premium/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "BPO Careers in Customer Support and Telecalling",
  description:
    "Apply for open BPO roles at BPOlytix in customer support, lead generation, quality, and operations reporting.",
  path: "/careers",
  keywords: ["BPO jobs Lucknow", "telecaller jobs", "customer support careers", "bpo careers india"],
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersBreadcrumb) }}
      />
      <PageHero
        badge="Careers"
        title="Build your BPO career with a fast-growing customer operations team"
        description="We are hiring people who communicate clearly, take ownership, and thrive in performance-driven environments."
        primaryCta={{ label: "Open Roles", href: "#openings" }}
        secondaryCta={{ label: "Contact Team", href: "/contact" }}
      />

      <section className="section pt-0" id="openings">
        <div className="container-premium grid gap-5 lg:grid-cols-2">
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
    </>
  );
}