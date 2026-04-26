"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  { value: "2–4 wks", label: "Average pilot launch" },
  { value: "4 verticals", label: "Industry playbooks" },
  { value: "6 service lines", label: "Delivery disciplines" },
  { value: "Weekly", label: "Governance cadence" },
];

const pillars = [
  {
    icon: CheckCircle2,
    title: "Quality-First Delivery",
    body: "Every task runs through documented QA controls, calibration reviews, and coaching loops — so accuracy holds at scale.",
    color: "bg-sky-600",
  },
  {
    icon: Users,
    title: "Dedicated Domain Teams",
    body: "Agents trained specifically around your scripts, edge cases, and brand standards — not generic call-center pools.",
    color: "bg-indigo-600",
  },
  {
    icon: Zap,
    title: "Rapid Pilot-to-Scale",
    body: "Launch a controlled pilot in 2–4 weeks, validate quality, then scale with confidence using proven workforce controls.",
    color: "bg-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Led Reporting",
    body: "Weekly dashboards translate interaction data into decisions on staffing, quality, and conversion — not just activity counts.",
    color: "bg-amber-600",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#eef6ff_46%,#f7fee7_100%)]" />
        <div className="hero-grid absolute inset-0 opacity-20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero headline */}
        <div className="hero-reveal mx-auto max-w-5xl pt-20 pb-14 text-center sm:pt-28 sm:pb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-semibold text-sky-800 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            India's Execution-First BPO Partner
          </div>

          <h1 className="mt-7 text-5xl font-bold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl lg:leading-[0.95]">
            India&apos;s BPO company for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                operations that deliver
              </span>
              <span className="absolute inset-x-0 bottom-1 h-3 rounded-full bg-sky-100/80 -z-10" />
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-slate-600">
            BPOlytix is a BPO company in India that builds and runs voice, chat, lead generation,
            and back-office BPO services for growth-stage businesses — with structured quality
            governance, transparent reporting, and a pilot-first model that de-risks every engagement.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-800"
            >
              Book a Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-8 py-4 font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white"
            >
              View Case Studies
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Startups", "SMBs", "Enterprises", "EdTech", "Healthcare", "D2C"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600 shadow-sm backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Stats band */}
        <div className="grid grid-cols-2 gap-4 pb-10 sm:grid-cols-4 sm:pb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/80 bg-white/80 p-5 text-center shadow-sm backdrop-blur"
            >
              <p className="text-2xl font-bold text-slate-950">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-4 sm:pb-28">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_22px_48px_rgba(15,23,42,0.09)]"
              >
                <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${pillar.color} text-white`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-950">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{pillar.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
