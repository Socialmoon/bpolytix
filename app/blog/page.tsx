import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { insightPosts } from "@/lib/content/insights";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "BPO Blog — BPO Insights, Customer Support & Outsourcing Strategy | BPOlytix",
  description:
    "Read BPO blog articles from BPOlytix on BPO strategy, customer support outsourcing, lead generation, and call center performance improvement in India.",
  path: "/blog",
  keywords: [
    "bpo blog",
    "bpolytix blog",
    "bpo insights india",
    "bpo strategy india",
    "customer support outsourcing blog",
    "call center best practices india",
    "lead generation bpo insights",
    "bpo tips india",
    "outsourcing strategy india",
    "bpo articles india",
  ],
});

const blogBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export default function BlogPage() {
  const [featured, ...posts] = insightPosts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumb) }}
      />

      <PageHero
        badge="Insights"
        title="BPO insights, customer support playbooks, and growth operations ideas"
        description="Actionable articles from our team on outsourcing strategy, process quality, campaign performance, and modern BPO execution."
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
      />

      <section className="section pt-0">
        <div className="container-premium space-y-8">
          <Link href={`/blog/${featured.slug}`}>
            <article className="group overflow-hidden rounded-[2rem] border border-[rgba(99,102,241,0.12)] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(15,23,42,0.12)] lg:grid lg:grid-cols-[1.02fr_0.98fr]">
              <div className={`relative min-h-[340px] overflow-hidden bg-gradient-to-br ${featured.gradient} p-8 sm:p-10`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.34),transparent_34%),linear-gradient(145deg,transparent,rgba(15,23,42,0.24))]" />
                <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-white/12 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-black/10 blur-3xl" />
                <div className="relative z-10 flex h-full flex-col justify-between text-white">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
                      {featured.category}
                    </span>
                    <span className="rounded-full border border-white/20 bg-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/80">
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
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text-strong)] md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-soft)]">
                    {featured.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-transform duration-300 group-hover:translate-x-1">
                  Read Featured Article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          </Link>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="card overflow-hidden p-0">
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${post.gradient}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.32),transparent_34%),linear-gradient(145deg,transparent,rgba(15,23,42,0.24))]" />
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

                <div className="p-6 md:p-7">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--text-strong)]">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{post.summary}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 text-sm text-[var(--text-soft)]">
                    <span>{post.author}</span>
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-soft)] transition hover:border-[var(--brand)] hover:text-[var(--text-strong)]"
                    >
                      Read Article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Looking for execution support, not just ideas?"
        body="We can help your team apply these frameworks to active campaigns and operating processes."
        cta={{ label: "Schedule Consultation", href: "/contact" }}
      />
    </>
  );
}
