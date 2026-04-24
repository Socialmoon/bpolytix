import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { CtaStrip } from "@/components/premium/cta-strip";
import { getInsightBySlug, insightPosts } from "@/lib/content/insights";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Post Not Found",
      description: "This article is not available.",
      path: "/blog",
      noindex: true,
    });
  }

  return {
    ...buildMetadata({
      title: post.seoTitle,
      description: post.seoDescription,
      path: `/blog/${post.slug}`,
      keywords: [...post.tags, post.category, "BPO insights", "operations strategy"],
    }),
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      url: `/blog/${post.slug}`,
      siteName: "BPOlytix",
      locale: "en_IN",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: `/blog/${post.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [`/blog/${post.slug}/twitter-image`],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const article = articleJsonLd({
    headline: post.title,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: post.author,
    image: `/blog/${post.slug}/opengraph-image`,
    keywords: post.tags,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />

      <section className="section pt-24 md:pt-28">
        <div className="container-premium space-y-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-soft)] transition hover:text-[var(--text-strong)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_360px]">
            <article className="overflow-hidden rounded-[2rem] border border-[rgba(99,102,241,0.12)] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className={`relative overflow-hidden bg-gradient-to-br ${post.gradient} p-8 text-white sm:p-10 md:p-12`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.32),transparent_32%),linear-gradient(145deg,transparent,rgba(15,23,42,0.24))]" />
                <div className="absolute -left-12 top-8 h-40 w-40 rounded-full bg-white/12 blur-3xl" />
                <div className="absolute right-0 top-12 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-1.5 font-semibold uppercase tracking-[0.14em]">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-2 text-white/84">
                      <CalendarDays className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-2 text-white/84">
                      <Clock3 className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.02]">
                    {post.title}
                  </h1>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-white/84">
                    {post.summary}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 md:p-12">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
                  <div className="space-y-6 text-base leading-8 text-[var(--text-soft)]">
                    {post.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <aside className="space-y-4 rounded-[1.5rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(248,250,252,0.9),rgba(255,255,255,0.95))] p-6 shadow-sm">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-500">
                        {post.statLabel}
                      </p>
                      <p className="mt-2 font-display text-3xl font-semibold text-[var(--text-strong)]">
                        {post.statValue}
                      </p>
                    </div>
                    <div className="h-px bg-gradient-to-r from-indigo-100 to-transparent" />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-500">
                        Author
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[var(--text-strong)]">
                        {post.author}
                      </p>
                    </div>
                    <div className="rounded-[1.25rem] bg-white p-4 shadow-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Updated
                      </p>
                      <p className="mt-2 text-sm text-[var(--text-strong)]">
                        {new Date(post.updatedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </aside>
                </div>

                <div className="mt-10 rounded-[1.75rem] border border-[rgba(99,102,241,0.12)] bg-[linear-gradient(135deg,#eef2ff_0%,#f8fbff_42%,#fff7ed_100%)] p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <Sparkles className="h-4 w-4" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                      Key Takeaways
                    </p>
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {post.takeaways.map((takeaway) => (
                      <div
                        key={takeaway}
                        className="rounded-[1.35rem] border border-white/80 bg-white/78 p-5 text-sm leading-7 text-slate-700 shadow-sm"
                      >
                        {takeaway}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)]"
                  >
                    Talk to BPOlytix
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:border-[var(--brand)]"
                  >
                    Read Case Studies
                  </Link>
                </div>
              </div>
            </article>

            <aside className="space-y-5">
              {insightPosts
                .filter((entry) => entry.slug !== post.slug)
                .slice(0, 3)
                .map((entry) => (
                  <Link key={entry.slug} href={`/blog/${entry.slug}`}>
                    <article className="overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-white shadow-[0_14px_36px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_22px_52px_rgba(15,23,42,0.1)]">
                      <div className={`h-32 bg-gradient-to-br ${entry.gradient}`} />
                      <div className="space-y-3 p-5">
                        <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${entry.accent}`}>
                          {entry.category}
                        </span>
                        <h2 className="font-semibold tracking-tight text-[var(--text-strong)]">
                          {entry.title}
                        </h2>
                        <p className="text-sm leading-6 text-[var(--text-soft)]">
                          {entry.summary}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
            </aside>
          </div>
        </div>
      </section>

      <CtaStrip
        title="Need these ideas translated into execution?"
        body="We can map your current bottlenecks and shape a delivery plan for outcomes, not activity."
        cta={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
