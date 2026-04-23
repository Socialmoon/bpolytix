import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { TeamSection } from "@/components/sections/team";
import { PricingSection } from "@/components/sections/pricing";
import { BlogSection } from "@/components/sections/blog";
import { FAQSection } from "@/components/sections/faq";
import { ContactCTASection } from "@/components/sections/contact-cta";

export const metadata: Metadata = buildMetadata({
  title: "BPolyTix - Premium Business Transformation Solutions",
  description:
    "Transform your business with BPolyTix. Expert consulting, technology solutions, and BPO services for enterprises seeking growth and innovation.",
  path: "/",
  keywords: [
    "business transformation",
    "consulting services",
    "bpo solutions",
    "digital transformation",
    "technology consulting",
    "business process outsourcing",
    "enterprise solutions",
  ],
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TeamSection />
      <PricingSection />
      <BlogSection />
      <FAQSection />
      <ContactCTASection />
    </>
  );
}
