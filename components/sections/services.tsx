"use client";

import Link from "next/link";
import {
  BadgeCheck,
  ClipboardList,
  Database,
  Headphones,
  Mail,
  Search,
  ShieldCheck,
  Timer,
  Settings2,
  WalletCards,
  MessageSquare,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: BadgeCheck,
    title: "Data Annotation",
    description:
      "High-quality labelling of images, text, audio, and video datasets for AI and machine learning pipelines. Our annotators follow strict guidelines and multi-pass QA to ensure your models train on reliable, accurate ground truth.",
    color: "bg-sky-600",
    tags: ["AI / ML", "Computer Vision", "NLP"],
  },
  {
    icon: Headphones,
    title: "Voice Customer Support",
    description:
      "Inbound and outbound call operations managed by trained agents who handle queries, follow-ups, and escalations with clarity and a customer-first approach. Every call is scored, coached, and governed for consistent quality.",
    color: "bg-indigo-600",
    tags: ["Inbound", "Outbound", "Escalation Handling"],
  },
  {
    icon: Database,
    title: "Data Entry & Processing",
    description:
      "Large-scale data input, document scanning, form processing, and database management delivered with high accuracy and fast turnaround. Structured SOP controls keep error rates low and throughput predictable.",
    color: "bg-emerald-600",
    tags: ["Document Processing", "Database Management", "High Volume"],
  },
  {
    icon: Mail,
    title: "Non-Voice Support (Chat & Email)",
    description:
      "Professional chat and email-based customer interactions that deliver quick, accurate responses. We manage ticket queues, macros, and escalation paths to protect your brand reputation at every touchpoint.",
    color: "bg-cyan-700",
    tags: ["Live Chat", "Email Ticketing", "SLA Adherence"],
  },
  {
    icon: Search,
    title: "Lead Generation",
    description:
      "Structured outreach and qualification funnels that improve pipeline quality and conversion reliability. We align scripts, CRM tagging, and disposition standards with your sales team's definition of a qualified lead.",
    color: "bg-amber-600",
    tags: ["Outbound Qualification", "CRM Enrichment", "Pipeline Quality"],
  },
  {
    icon: ClipboardList,
    title: "Back-Office & Admin Support",
    description:
      "Day-to-day operational assistance including form processing, admin support, case queue management, and data validation — freeing your core team to focus entirely on strategic growth activities.",
    color: "bg-rose-600",
    tags: ["Admin Support", "Case Management", "Process Automation"],
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Rigorous Quality Controls",
    description:
      "Small errors carry large consequences. Our team follows documented QA protocols, calibration reviews, and corrective coaching loops on every deliverable — ensuring precision and reliability you can depend on consistently across all service lines.",
  },
  {
    icon: Timer,
    title: "Predictable Turnaround Times",
    description:
      "Time is your most valuable asset. We are structured to deliver tasks promptly and on schedule — whether it is a one-time project or an ongoing operational process — without ever trading speed for quality.",
  },
  {
    icon: Settings2,
    title: "True Multi-Service Capability",
    description:
      "From data annotation through to voice and non-voice customer support, we offer end-to-end outsourcing under one roof — eliminating the complexity of managing multiple vendors for different service needs.",
  },
  {
    icon: WalletCards,
    title: "Cost-Effective at Every Stage",
    description:
      "Outsourcing with BPOlytix means accessing enterprise-grade talent at a fraction of the cost of in-house hiring. You get premium quality without the overheads of full-time recruitment, training, and infrastructure.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "We maintain open, proactive communication at every stage. Weekly governance reviews, campaign notes, and action logs keep your leadership aligned and confident in the work being done — no surprises.",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Led Execution",
    description:
      "We work closely with each client to understand their unique goals and tailor our services accordingly. Your success is our benchmark, and every solution we build is aligned with your specific business objectives.",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">

          {/* Header */}
          <div className="mx-auto max-w-4xl space-y-5 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">BPO Solutions</p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Our full suite of services
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              From AI data pipelines to customer-facing support, BPOlytix delivers end-to-end
              outsourcing solutions built on accuracy, speed, and professional execution — all under
              one accountable delivery model.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_14px_34px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_22px_52px_rgba(15,23,42,0.09)]"
                >
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.color} text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-950 transition-colors duration-300 group-hover:text-sky-700">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why choose us */}
          <div className="space-y-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700">Why Choose BPOlytix?</p>
              <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                We are not just a vendor. We are a growth partner.
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Here is what separates a BPOlytix engagement from a generic outsourcing arrangement.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-950">{reason.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-12">
            <h3 className="font-display text-3xl font-bold sm:text-4xl">Ready to get started?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Partner with BPOlytix today and experience the difference that dedicated, professional
              outsourcing can make for your business growth.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-sky-50"
            >
              Start a Conversation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
