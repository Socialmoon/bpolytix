import type { Metadata } from "next";
import CareerForm from "./career-form";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/premium/page-hero";
import { MapPin, Briefcase, TrendingUp, Users, Award, Zap } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "BPO Careers — Customer Support, Lead Generation & Quality Roles",
  description:
    "Apply for open BPO roles at BPOlytix in customer support, lead generation, quality analysis, and operations reporting. Based in Lucknow and Prayagraj.",
  path: "/careers",
  keywords: ["BPO jobs Lucknow", "telecaller jobs", "customer support careers", "bpo careers india", "quality analyst bpo"],
});

const openings = [
  {
    role: "Telecaller — Customer Support",
    location: "Lucknow",
    type: "Full Time",
    description: "Handle inbound and outbound customer interactions with clarity and professionalism. Training provided.",
    color: "bg-sky-600",
  },
  {
    role: "Telecaller — Lead Generation",
    location: "Prayagraj",
    type: "Full Time",
    description: "Qualify and convert warm leads using structured scripts and CRM discipline. Performance incentives available.",
    color: "bg-indigo-600",
  },
  {
    role: "Inbound Support Executive",
    location: "Lucknow",
    type: "Full Time",
    description: "Manage inbound customer queries across voice and chat channels with a focus on first-contact resolution.",
    color: "bg-emerald-600",
  },
  {
    role: "Email & Chat Support Executive",
    location: "Lucknow",
    type: "Full Time",
    description: "Handle customer tickets via email and live chat with fast response times and high accuracy.",
    color: "bg-violet-600",
  },
  {
    role: "Quality Analyst",
    location: "Lucknow",
    type: "Full Time",
    description: "Monitor and score agent interactions, run calibration sessions, and provide actionable coaching feedback.",
    color: "bg-amber-600",
  },
  {
    role: "MIS Executive — Reporting",
    location: "Lucknow",
    type: "Full Time",
    description: "Build and maintain performance dashboards, daily reports, and campaign analytics for leadership review.",
    color: "bg-rose-600",
  },
];

const perks = [
  {
    icon: TrendingUp,
    title: "Performance Incentives",
    body: "Competitive incentive structures tied to quality scores and conversion outcomes — not just attendance.",
    color: "bg-indigo-600",
  },
  {
    icon: Award,
    title: "Structured Training",
    body: "Comprehensive onboarding, script training, and ongoing coaching to help you grow your skills and career.",
    color: "bg-sky-600",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    body: "Work alongside experienced operators in a team that values clear communication and shared accountability.",
    color: "bg-emerald-600",
  },
  {
    icon: Zap,
    title: "Fast Growth Path",
    body: "High performers move quickly into team lead, QA, and operations roles — we promote from within.",
    color: "bg-amber-600",
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
        description="We are hiring people who communicate clearly, take ownership, and thrive in performance-driven environments. Join a team that invests in your growth."
        primaryCta={{ label: "View Open Roles", href: "#openings" }}
        secondaryCta={{ label: "Contact Team", href: "/contact" }}
        stats={[
          { value: "6 roles", label: "Currently open" },
          { value: "Lucknow", label: "Primary location" },
          { value: "Full Time", label: "Employment type" },
          { value: "Growth", label: "Fast promotion path" },
        ]}
      />

      {/* Why join us */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Why Join BPOlytix</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-[var(--text-strong)]">
              More than a job — a career foundation
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
              We invest in our people because great delivery starts with great teams. Here is what
              you can expect when you join BPOlytix.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <article key={perk.title} className="card p-6">
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${perk.color} text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-[var(--text-strong)]">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{perk.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Openings + form */}
      <section className="section pt-0" id="openings">
        <div className="container-premium grid gap-8 lg:grid-cols-2">

          {/* Job listings */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Open Positions</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
              Current openings
            </h2>
            <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
              All roles are full-time, based in Lucknow or Prayagraj. Training is provided for all
              positions — we hire for attitude and communication skills.
            </p>
            <div className="mt-6 space-y-4">
              {openings.map((job) => (
                <article
                  key={job.role}
                  className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
                >
                  <div className={`h-1 w-full ${job.color}`} />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-[var(--text-strong)] transition-colors group-hover:text-indigo-700">
                          {job.role}
                        </p>
                        <p className="mt-1 text-sm text-[var(--text-soft)]">{job.description}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-slate-50 px-2.5 py-1 text-xs font-semibold text-[var(--text-soft)]">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-slate-50 px-2.5 py-1 text-xs font-semibold text-[var(--text-soft)]">
                        <Briefcase className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Application form */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Apply Now</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
              Submit your application
            </h2>
            <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
              Fill in the form below and our team will get back to you within 2 business days.
            </p>
            <div className="mt-6">
              <CareerForm openings={openings} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
