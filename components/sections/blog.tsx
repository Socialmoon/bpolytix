"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { insightPosts } from "@/lib/content/insights";

export function BlogSection() {
  const [featured, ...rest] = insightPosts;

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600">
              Expert articles on business transformation and technology
            </p>
          </div>

          <Link href={`/blog/${featured.slug}`}>
            <article className="group overflow-hidden rounded-[2rem] border border-[rgba(99,102,241,0.12)] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(15,23,42,0.12)] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className={`relative overflow-hidden bg-gradient-to-br ${featured.gradient} min-h-[320px] p-8 sm:p-10`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_38%),linear-gradient(145deg,transparent,rgba(15,23,42,0.18))]" />
                <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-white/12 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-black/10 blur-3xl" />
                <div className="relative z-10 flex h-full flex-col justify-between text-white">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
                      {featured.category}
                    </span>
                    <span className="rounded-full border border-white/18 bg-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/80">
                      {featured.heroLabel}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.16em] text-white/70">
                      {featured.statLabel}
                    </p>
                    <p className="mt-2 font-display text-4xl font-semibold tracking-tight">
                      {featured.statValue}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6 p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className={`inline-flex rounded-full px-3 py-1 font-semibold ${featured.accent}`}>
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {featured.readTime}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-gray-900">
                    {featured.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600">
                    {featured.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-transform duration-300 group-hover:translate-x-1">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          </Link>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group h-full overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
                  <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${post.gradient}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_34%),linear-gradient(145deg,transparent,rgba(15,23,42,0.22))]" />
                    <div className="absolute inset-x-6 top-6 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                        {post.category}
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                        {post.readTime}
                      </span>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 text-white">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                        {post.statLabel}
                      </p>
                      <p className="mt-2 font-display text-2xl font-semibold">{post.statValue}</p>
                    </div>
                  </div>

                  <div className="space-y-4 p-7">
                    <h3 className="line-clamp-2 text-xl font-semibold tracking-tight text-gray-900">
                      {post.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-7 text-gray-600">{post.summary}</p>

                    <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4 text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-200 px-8 py-3 font-semibold text-indigo-600 transition-all hover:bg-indigo-50 hover:border-indigo-300"
            >
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
