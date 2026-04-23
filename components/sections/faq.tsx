"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, MessageSquareText } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const faqs = [
  {
    question: "What services does BPolyTix offer?",
    answer: "We provide comprehensive business transformation services including consulting, technology solutions, BPO, growth acceleration, analytics, and talent solutions tailored to your business needs.",
  },
  {
    question: "How long does a typical engagement take?",
    answer: "Engagement duration depends on project scope. Initial assessments take 2-4 weeks, while full transformations can take 3-12 months. We'll provide a detailed timeline during consultation.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes! We serve startups, SMEs, and Fortune 500 companies. Our solutions are scalable and customizable to fit any organization size and requirements.",
  },
  {
    question: "What is your client success rate?",
    answer: "We maintain a 98% client satisfaction rate with measurable ROI. Most clients see tangible results within the first quarter of engagement.",
  },
  {
    question: "Do you offer ongoing support after implementation?",
    answer: "Absolutely. All our engagements include ongoing support, maintenance, and optimization. We provide 24/7 support options based on your plan.",
  },
  {
    question: "Can you help with specific industry challenges?",
    answer: "Yes, we have deep expertise across finance, healthcare, retail, technology, and manufacturing sectors. We understand industry-specific challenges and provide tailored solutions.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          {/* FAQ Items */}
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-8 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-indigo-600 flex-shrink-0 transition-transform duration-300",
                        openIndex === index && "rotate-180"
                      )}
                    />
                  </div>

                  {openIndex === index && (
                    <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(99,102,241,0.12)] bg-[linear-gradient(135deg,#eef2ff_0%,#f8fbff_38%,#fff7ed_100%)] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -left-8 top-0 h-32 w-32 rounded-full bg-sky-200/55 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-6 h-40 w-40 rounded-full bg-fuchsia-200/45 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-amber-200/45 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.8),transparent_45%,rgba(255,255,255,0.35))]" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
                  <MessageSquareText className="h-3.5 w-3.5" />
                  Still Have Questions?
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Talk to a team that can turn uncertainty into a practical next step.
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  If you&apos;re comparing providers, planning a pilot, or trying to scope the right model, we can help you move forward with clarity.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#1e1b4b_0%,#4338ca_55%,#0ea5e9_100%)] px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(67,56,202,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(67,56,202,0.3)]"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="rounded-[1.4rem] border border-white/80 bg-white/72 px-5 py-4 text-left shadow-sm backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Fast Reply
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-800">
                    Tell us the challenge. We&apos;ll suggest the next move.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
