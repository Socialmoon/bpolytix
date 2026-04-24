import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { getServiceBySlug, services } from "@/lib/content/services";
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service does not exist.",
      path: "/services",
      noindex: true,
    });
  }

  return buildMetadata({
    title: `${service.name} Services`,
    description: service.short,
    path: `/services/${service.slug}`,
    keywords: [service.name, ...service.idealFor],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ]);

  const serviceSchema = serviceJsonLd(service.name, service.intro);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        badge="Service Detail"
        title={service.name}
        description={service.intro}
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "All Services", href: "/services" }}
      />

      <section className="section pt-0">
        <div className="container-premium grid gap-6 lg:grid-cols-2">
          <article className="card p-6 md:p-8">
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">Capabilities</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-soft)]">
              {service.capabilities.map((capability) => (
                <li key={capability} className="rounded-lg bg-[var(--surface-soft)] px-4 py-3">
                  {capability}
                </li>
              ))}
            </ul>
          </article>

          <article className="card p-6 md:p-8">
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">Expected Outcomes</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-soft)]">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="rounded-lg bg-[var(--surface-soft)] px-4 py-3">
                  {outcome}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.09em] text-[var(--text-soft)]">
              Ideal For
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.idealFor.map((segment) => (
                <span
                  key={segment}
                  className="rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs font-semibold text-[var(--text-soft)]"
                >
                  {segment}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-premium card p-6 md:p-8">
          <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">
            Related Services
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-4 transition hover:border-[var(--brand)]"
                >
                  <p className="font-semibold text-[var(--text-strong)]">{item.name}</p>
                  <p className="mt-1 text-sm text-[var(--text-soft)]">{item.short}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title="Need a tailored service model?"
        body="We can shape a scoped delivery plan around your channel mix, growth targets, and governance standards."
        cta={{ label: "Book a Strategy Call", href: "/contact" }}
      />
    </>
  );
}
