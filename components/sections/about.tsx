"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Settings2, Users } from "lucide-react";

const features = [
  {
    title: "Quality First",
    description:
      "Every deliverable passes through documented QA controls, calibration reviews, and structured coaching loops — so accuracy holds even as volume grows.",
    icon: CheckCircle2,
    color: "bg-sky-600",
  },
  {
    title: "Dedicated Teams",
    description:
      "Agents trained specifically around your scripts, brand standards, and edge cases — not generic pools shared across unrelated campaigns.",
    icon: Users,
    color: "bg-emerald-600",
  },
  {
    title: "Swift Turnaround",
    description:
      "Structured workflows and capacity planning ensure prompt delivery on every task — whether it's a one-time project or an ongoing operational process.",
    icon: Clock3,
    color: "bg-amber-600",
  },
  {
    title: "Tailored Solutions",
    description:
      "We design operating models around your specific goals, channel mix, and customer journey — not off-the-shelf packages that require you to adapt.",
    icon: Settings2,
    color: "bg-indigo-600",
  },
];

const milestones = [
  { year: "Founded", detail: "Built by operators with deep BPO delivery experience across voice, data, and support." },
  { year: "Pilot Model", detail: "Introduced a pilot-first engagement approach to de-risk every new client launch." },
  { year: "Multi-Vertical", detail: "Expanded playbooks across Healthcare, EdTech, Ecommerce, and Financial Services." },
  { year: "Today", detail: "Running governed delivery programs with weekly reporting and outcome-led optimization." },
];

export function AboutSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mission block */}
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">Who We Are</p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              An extension of your team, not just a vendor
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              BPOlytix is a Business Process Outsourcing company built around one principle: that
              great outsourcing is built on trust, consistency, and shared accountability. We work
              with startups, SMBs, and enterprises to deliver tailored operations that reduce
              workload, cut costs, and improve efficiency — without sacrificing quality.
            </p>
            <p className="text-base leading-8 text-gray-600">
              Unlike generic call centers that optimize for volume, we focus on outcomes. Every
              engagement starts with a discovery phase to align on KPIs, scripts, and governance
              standards — so the work we do is always connected to what actually matters for your
              business.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Startups", "SMBs", "Enterprises"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              href="/why-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition-transform hover:translate-x-1"
            >
              Why businesses choose BPOlytix
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_16px_36px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_22px_48px_rgba(15,23,42,0.08)]"
                >
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${feature.color} text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20 rounded-2xl border border-slate-100 bg-slate-50 p-8 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">Our Journey</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-950">
            Built for the long game
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <div key={m.year} className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-700">{m.year}</p>
                <p className="mt-2 text-sm leading-6 text-gray-600">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
