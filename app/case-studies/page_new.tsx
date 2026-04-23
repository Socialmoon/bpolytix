import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { ContactCTASection } from "@/components/sections/contact-cta";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies - BPolyTix",
  description: "See how we've helped leading businesses achieve their goals",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section relative pt-32">
        <div className="container-premium space-y-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Our Success Stories
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Transforming businesses with measurable results
          </p>
        </div>
      </section>
      <CaseStudiesSection />
      <ContactCTASection />
    </>
  );
}
