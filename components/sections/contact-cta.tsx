"use client";

import Link from "next/link";
import { ArrowRight, Clock3, Mail, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@bpolytix.com",
    href: "mailto:hello@bpolytix.com",
    accent: "from-sky-500/20 via-cyan-400/10 to-transparent",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    accent: "from-fuchsia-500/20 via-pink-400/10 to-transparent",
  },
  {
    icon: Clock3,
    label: "Availability",
    value: "24/7 Available",
    href: null,
    accent: "from-emerald-500/20 via-lime-400/10 to-transparent",
  },
];

export function ContactCTASection() {
  return (
    <section className="pt-10 pb-20 sm:pt-14 sm:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(99,102,241,0.12)] bg-[linear-gradient(135deg,#f8fbff_0%,#eef2ff_32%,#fff7ed_100%)] p-6 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-16 top-0 h-44 w-44 rounded-full bg-sky-200/60 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-12 h-56 w-56 rounded-full bg-fuchsia-200/45 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.72),transparent_38%,rgba(255,255,255,0.42))]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-stretch">
            <div className="rounded-[1.75rem] border border-white/70 bg-[linear-gradient(145deg,rgba(15,23,42,0.94),rgba(49,46,129,0.9)_52%,rgba(8,145,178,0.78))] p-8 text-white shadow-[0_24px_60px_rgba(49,46,129,0.24)] sm:p-10">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                Still Have Questions?
              </div>

              <div className="mt-6 max-w-2xl space-y-4">
                <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                  Ready to transform your business with a team that actually listens?
                </h2>
                <p className="max-w-xl text-base leading-8 text-white/78 sm:text-lg">
                  Tell us where the friction is, what growth looks like for you, and how quickly you need momentum. We&apos;ll help shape the right next step.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-indigo-700 shadow-[0_18px_35px_rgba(255,255,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_45px_rgba(255,255,255,0.24)]"
                >
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/14"
                >
                  View Case Studies
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "Fast replies", label: "Practical next steps" },
                  { value: "24/7", label: "Support-ready mindset" },
                  { value: "Tailored", label: "No canned proposals" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.35rem] border border-white/12 bg-white/8 p-4 backdrop-blur-sm"
                  >
                    <p className="text-xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-white/65">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/78 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(15,23,42,0.1)]"
                  >
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-80`} />
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(99,102,241,0.12),rgba(14,165,233,0.12))] text-indigo-700">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-2 block break-all font-display text-2xl leading-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-700"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-2 font-display text-2xl leading-tight text-slate-900">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-[1.6rem] border border-dashed border-indigo-200 bg-white/62 p-6 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-500">
                  Best For
                </p>
                <p className="mt-3 text-lg font-semibold leading-8 text-slate-900">
                  Teams looking for a fast conversation, a scoped pilot, or a sharper delivery partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
