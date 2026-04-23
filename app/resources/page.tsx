import type { Metadata } from "next";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { resourceFaqs } from "@/lib/content/faq";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Resources and FAQs",
  description: "Explore implementation FAQs and practical guidance for evaluating BPO operating models with BPOlytix.",
  path: "/resources",
  keywords: ["bpo resources", "bpo faqs", "outsourcing guide"],
});

const resourcesBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
]);

const resourcesFaqSchema = faqJsonLd(resourceFaqs);

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesFaqSchema) }}
      />

      <PageHero
        badge="Resources"
        title="Decision support for operations and growth leaders"
        description="Answers to common questions on launch readiness, channel strategy, quality governance, and scale planning."
        primaryCta={{ label: "Get Expert Input", href: "/contact" }}
      />

      <section className="section pt-0">
        <div className="container-premium grid gap-4 md:grid-cols-2">
          {resourceFaqs.map((faq) => (
            <article key={faq.question} className="card p-6 md:p-7">
              <h2 className="font-display text-2xl text-[var(--text-strong)]">{faq.question}</h2>
              <p className="mt-3 leading-7 text-[var(--text-soft)]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Need a recommendation for your current stage?"
        body="Share your current setup and goals, and we will suggest a practical path for launch or scale."
        cta={{ label: "Schedule a Call", href: "/contact" }}
      />
    </>
  );
}
