import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { caseStudies, getCaseStudyBySlug } from "@/lib/content/insights";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return buildMetadata({
      title: "Case Study Not Found",
      description: "This case study is not available.",
      path: "/case-studies",
      noindex: true,
    });
  }

  return buildMetadata({
    title: `${study.title} Case Study`,
    description: study.challenge,
    path: `/case-studies/${study.slug}`,
    keywords: [study.industry, "BPO case study", "operations outcomes"],
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: study.title, path: `/case-studies/${study.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <PageHero
        badge={`${study.industry} Case Study`}
        title={study.title}
        description={study.challenge}
        primaryCta={{ label: "Start Your Transformation", href: "/contact" }}
        secondaryCta={{ label: "All Case Studies", href: "/case-studies" }}
      />

      <section className="section pt-0">
        <div className="container-premium grid gap-5 lg:grid-cols-3">
          <article className="card p-6 md:p-7 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-soft)]">
              Challenge
            </p>
            <p className="mt-2 text-base leading-8 text-[var(--text-soft)]">{study.challenge}</p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-soft)]">
              Solution
            </p>
            <p className="mt-2 text-base leading-8 text-[var(--text-soft)]">{study.solution}</p>
          </article>

          <aside className="card p-6 md:p-7">
            <h2 className="font-display text-2xl text-[var(--text-strong)]">Outcomes</h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-soft)]">
              {study.outcomes.map((outcome) => (
                <li key={outcome} className="rounded-lg bg-[var(--surface-soft)] px-3 py-2">
                  {outcome}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-6 inline-flex rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-strong)] transition hover:border-[var(--brand)]"
            >
              Explore Services
            </Link>
          </aside>
        </div>
      </section>

      <CtaStrip
        title="Want similar outcomes in your operation?"
        body="Let us design a pilot delivery model with measurable KPIs and governance checkpoints."
        cta={{ label: "Book Discovery", href: "/contact" }}
      />
    </>
  );
}
