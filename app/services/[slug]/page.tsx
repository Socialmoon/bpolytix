import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
  if (!service) return buildMetadata({ title: "Service Not Found", description: "", path: "/services", noindex: true });
  return buildMetadata({
    title: `${service.name} — BPO Services India | BPOlytix`,
    description: `${service.intro} BPOlytix delivers ${service.name.toLowerCase()} as part of its BPO services across India.`,
    path: `/services/${service.slug}`,
    keywords: ["bpo", "bpo services", service.name.toLowerCase(), ...service.idealFor.map(t => `${t.toLowerCase()} bpo`)],
  });
}

const proofImages = [
  { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop", label: "Team Collaboration" },
  { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop", label: "Quality Reviews" },
  { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop", label: "Agent Training" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&auto=format&fit=crop", label: "Operations Floor" },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ]);
  const serviceSchema = serviceJsonLd(service.name, service.intro);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <PageHero
        badge="Service Detail"
        title={service.name}
        description={service.intro}
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "All Services", href: "/services" }}
      />

      {/* Hero image + stat */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="relative overflow-hidden rounded-2xl">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
            <Image
              src={service.image}
              alt={service.name}
              width={1200}
              height={500}
              className="relative h-64 w-full object-cover sm:h-80 lg:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8 sm:p-10">
              <div className="flex flex-wrap items-end gap-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Key Result</p>
                  <p className="mt-1 font-display text-5xl font-bold text-white">{service.stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-white/75">{service.stat.label}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.idealFor.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities + Outcomes */}
      <section className="section pt-0">
        <div className="container-premium grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm">
            <div className="relative h-40 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
              <Image
                src={service.image}
                alt="capabilities"
                fill
                className="object-cover opacity-40 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center px-7">
                <h2 className="font-display text-2xl font-bold text-white">What We Deliver</h2>
              </div>
            </div>
            <div className="p-7">
              <ul className="space-y-3">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-[var(--text-soft)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm">
            <div className="relative h-40 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop"
                alt="outcomes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 to-teal-600/80" />
              <div className="absolute inset-0 flex items-center px-7">
                <h2 className="font-display text-2xl font-bold text-white">Expected Outcomes</h2>
              </div>
            </div>
            <div className="p-7">
              <ul className="space-y-3">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-[var(--text-soft)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">How It Works</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
              From kickoff to steady-state in four steps
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <div key={p.step} className="relative rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm">
                {i < service.process.length - 1 && (
                  <div className="absolute -right-2.5 top-8 hidden h-px w-5 bg-indigo-200 lg:block" />
                )}
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">
                  {p.step}
                </span>
                <h3 className="mt-4 font-semibold text-[var(--text-strong)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="section pt-0">
        <div className="container-premium">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {proofImages.map((img) => (
              <div key={img.label} className="relative h-36 overflow-hidden rounded-xl sm:h-44">
                <Image src={img.src} alt={img.label} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/80">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section pt-0">
        <div className="container-premium">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Related Services</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
            You might also need
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                >
                  <div className="relative h-36 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <p className="text-lg font-bold text-white">{s.stat.value}</p>
                      <p className="text-[10px] font-semibold text-white/70">{s.stat.label}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-semibold text-[var(--text-strong)] transition-colors group-hover:text-indigo-700">{s.name}</p>
                    <p className="mt-1 text-sm text-[var(--text-soft)]">{s.short}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-indigo-600">
                      View detail <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
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
