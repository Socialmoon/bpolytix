import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/premium/page-hero";
import { AboutSection } from "@/components/sections/about";
import { ContactCTASection } from "@/components/sections/contact-cta";

export const metadata: Metadata = buildMetadata({
  title: "About BPolyTix",
  description: "Learn about BPolyTix and our commitment to business transformation",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title="A premium BPO partner built around clarity, quality, and scale"
        description="BPOlytix helps businesses improve customer operations, conversion quality, and process reliability through structured delivery and transparent governance."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
      <AboutSection />
      <ContactCTASection />
    </>
  );
}
