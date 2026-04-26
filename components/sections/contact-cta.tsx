"use client";

import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@bpolytix.in",
    href: "mailto:contact@bpolytix.in",
    accent: "from-sky-500/15 via-cyan-400/8 to-transparent",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 85629 22873",
    href: "tel:+918562922873",
    accent: "from-indigo-500/15 via-violet-400/8 to-transparent",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lucknow, India",
    href: null,
    accent: "from-emerald-500/15 via-teal-400/8 to-transparent",
  },
  {
    icon: Clock3,
    label: "Operations",
    value: "Mon–Sat, 10 AM – 6 PM",
    href: null,
    accent: "from-amber-500/15 via-orange-400/8 to-transparent",
  },
];

const commitments = [
  { value: "Results-Driven", label: "Focused on measurable outcomes" },
  { value: "Dependable", label: "Built on trust and consistency" },
  { value: "Scalable", label: "Ready for changing workloads" },
];

export function ContactCTASection() {
  return (
    <section className="bg-white pt-10 pb-20 sm:pt-14 sm:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-[linear-gradient(135deg,#f8fbff_0%,#eef7ff_48%,#f8fafc_100%)] p-6 shadow-[0_28px_80px_rgba(15,23,42,0.07)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.72),transparent_38%,rgba(255,255,255,0.42))]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-stretch">

            {/* Left: commitment block */}
            <div className="rounded-2xl border border-white/70 bg-slate-950 p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.2)] sm:p-10">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                Our Commitment to Your Growth
              </div>

              <div className="mt-6 max-w-2xl space-y-4">
                <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                  Simplify operations, improve efficiency, and grow with dependable support.
                </h2>
                <p className="max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                  At BPOlytix, our goal is straightforward: free up your time so you can focus on
                  growth. Whether you are looking to outsource routine back-end tasks, build a
                  dedicated support team, or scale your operations rapidly, we are here with the
                  people, the processes, and the commitment to make it happen.
                </p>
                <p className="max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                  We believe great outsourcing is built on trust, consistency, and shared success.
                  When your business wins, so do we — which is why we invest in continuous skill
                  development and quality improvement for every member of our team.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_35px_rgba(255,255,255,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50"
                >
                  Get Started Today
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {commitments.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm"
                  >
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-white/65">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: contact cards */}
            <div className="grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.1)]"
                  >
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-80`} />
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1.5 block break-all text-xl font-semibold leading-tight text-slate-950 transition-colors duration-300 group-hover:text-sky-700"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1.5 text-xl font-semibold leading-tight text-slate-900">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-2xl border border-dashed border-sky-200 bg-white/70 p-6 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
                  Best For
                </p>
                <p className="mt-3 text-base font-semibold leading-7 text-slate-900">
                  Businesses ready to reduce workload, cut costs, and improve operational efficiency
                  without sacrificing quality or control.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
