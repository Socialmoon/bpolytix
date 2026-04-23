"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, TrendingUp } from "lucide-react";
import { caseStudies } from "@/lib/content/insights";

export function CaseStudiesSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how we&apos;ve helped leading businesses achieve their goals
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`}>
                <article className="group h-full overflow-hidden rounded-[1.9rem] border border-gray-200 bg-white shadow-[0_18px_46px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-[0_28px_70px_rgba(15,23,42,0.1)]">
                  <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${study.gradient}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.34),transparent_34%),linear-gradient(145deg,transparent,rgba(15,23,42,0.25))]" />
                    <div className="absolute inset-x-6 top-6 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                        {study.industry}
                      </span>
                      <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {new Date(study.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 text-white">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                        {study.statLabel}
                      </p>
                      <p className="mt-2 font-display text-3xl font-semibold tracking-tight">
                        {study.statValue}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5 p-7">
                    <div className="space-y-3">
                      <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${study.accent}`}>
                        {study.industry}
                      </span>
                      <h3 className="text-xl font-semibold leading-snug tracking-tight text-gray-900">
                        {study.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-gray-600">{study.summary}</p>

                    <div className="space-y-2 border-t border-gray-100 pt-4">
                      {study.outcomes.slice(0, 3).map((result) => (
                        <div key={result} className="flex items-start gap-2 text-sm text-indigo-600">
                          <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-2 text-sm font-semibold text-indigo-600 transition-transform duration-300 group-hover:translate-x-1">
                      Read Full Story
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-200 px-8 py-3 font-semibold text-indigo-600 transition-all hover:bg-indigo-50 hover:border-indigo-300"
            >
              View All Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
