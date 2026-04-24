import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { getIndustryBySlug, industries } from "@/lib/content/industries";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return buildMetadata({
      title: "Industry Not Found",
      description: "This industry page is not available.",
      path: "/industries",
      noindex: true,
    });
  }

  return buildMetadata({
    title: `${industry.name} BPO Services`,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
    keywords: [industry.name, ...industry.priorities],
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.name, path: `/industries/${industry.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <PageHero
        badge="Industry Detail"
        title={`${industry.name} operations with delivery discipline`}
        description={industry.summary}
        primaryCta={{ label: "Discuss Requirements", href: "/contact" }}
        secondaryCta={{ label: "All Industries", href: "/industries" }}
      />

      <section className="section pt-0">
        <div className="container-premium grid gap-6 lg:grid-cols-2">
          <article className="card p-6 md:p-8">
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">
              Priority Outcomes
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-soft)]">
              {industry.priorities.map((priority) => (
                <li key={priority} className="rounded-lg bg-[var(--surface-soft)] px-4 py-3">
                  {priority}
                </li>
              ))}
            </ul>
          </article>

          <article className="card p-6 md:p-8">
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">Playbooks</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-soft)]">
              {industry.playbooks.map((playbook) => (
                <li key={playbook} className="rounded-lg bg-[var(--surface-soft)] px-4 py-3">
                  {playbook}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-premium card p-6 md:p-8">
          <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">Related Industries</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {industries
              .filter((item) => item.slug !== industry.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4 transition hover:border-[var(--brand)]"
                >
                  <p className="font-semibold text-[var(--text-strong)]">{item.name}</p>
                  <p className="mt-1 text-sm text-[var(--text-soft)]">{item.summary}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Building a vertical-specific operation?"
        body="We can design scripts, handling standards, and governance around your exact customer journey."
        cta={{ label: "Talk to BPOlytix", href: "/contact" }}
      />
    </>
  );
}
