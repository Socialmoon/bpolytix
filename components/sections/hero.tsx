"use client";

import Link from "next/link";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-start justify-center overflow-hidden pt-7 sm:pt-8">
      <div className="absolute inset-0 -z-10">
        <div className="hero-aurora absolute inset-0 opacity-90" />
        <div className="hero-grid absolute inset-0 opacity-20" />
        <div className="hero-noise absolute inset-0 opacity-[0.12]" />
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-orb hero-orb-c" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.2))]" />
      </div>

      <div className="container mx-auto z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 py-9 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:py-14">
          <div className="hero-reveal max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/72 px-4 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">
                Welcome to BPolyTix
              </span>
            </div>

            <div className="mt-7 space-y-6">
              <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl lg:leading-[0.96]">
                <span className="block">Design sharper operations.</span>
                <span className="mt-2 block bg-[linear-gradient(135deg,#1d4ed8_0%,#7c3aed_45%,#ec4899_100%)] bg-clip-text text-transparent">
                  Scale with elegance.
                </span>
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                We shape customer operations, technology delivery, and growth systems into a business experience that feels faster, smarter, and unmistakably premium.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#1e1b4b_0%,#4338ca_45%,#0ea5e9_100%)] px-8 py-4 font-semibold text-white shadow-[0_22px_45px_rgba(67,56,202,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_55px_rgba(67,56,202,0.34)]"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/75 px-8 py-4 font-semibold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white"
              >
                View Our Work
                <Play className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Growth architecture", "Customer operations", "Premium execution"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/70 bg-white/65 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="hero-float rounded-[2rem] border border-white/65 bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(238,242,255,0.82))] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
                    Operating Rhythm
                  </p>
                  <h2 className="mt-3 font-display text-3xl leading-tight text-slate-900">
                    Transform complexity into visible momentum.
                  </h2>
                </div>
                <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(99,102,241,0.14),rgba(236,72,153,0.14))] p-3 text-indigo-700">
                  <Star className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Consulting",
                    body: "Sharper decisions, cleaner operating models, better market moves.",
                  },
                  {
                    title: "Technology",
                    body: "Modern systems that reduce friction and create headroom for growth.",
                  },
                  {
                    title: "BPO",
                    body: "High-quality execution teams with governance you can actually trust.",
                  },
                  {
                    title: "Analytics",
                    body: "Decision-ready insights framed for action, not dashboard theater.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/70 bg-white/80 p-4 shadow-[0_10px_22px_rgba(15,23,42,0.05)]"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-indigo-100 bg-[linear-gradient(135deg,rgba(224,231,255,0.75),rgba(255,255,255,0.95))] p-5">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { number: "500+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
                    { number: "15+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
                    { number: "98%", label: "Success Rate", color: "from-emerald-500 to-teal-500" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.number}
                      </div>
                      <div className="mt-1 text-sm font-medium text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
