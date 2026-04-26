import type { Metadata } from "next";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { ContactCTASection } from "@/components/sections/contact-cta";

export const metadata: Metadata = buildMetadata({
  title: "BPO Company India — BPO Services, Call Center & Lead Generation | BPOlytix",
  description:
    "BPOlytix is India's leading BPO company offering BPO services including customer support, call center outsourcing, lead generation, and back-office processing. Pilot-first BPO model. Launch in 2–4 weeks.",
  path: "/",
  keywords: [
    "bpo",
    "bpo company",
    "bpo services",
    "bpo company india",
    "bpo outsourcing",
    "domestic bpo",
    "business process outsourcing",
    "call center bpo",
    "bpo solutions india",
    "data annotation bpo",
    "data entry bpo",
    "lead generation bpo",
    "voice bpo services",
    "non-voice bpo",
    "backend bpo support",
  ],
});

const homeFaqSchema = faqJsonLd([
  {
    question: "What is BPO?",
    answer:
      "BPO stands for Business Process Outsourcing. It is the practice of hiring a third-party BPO company to handle specific business operations such as customer support, lead generation, data entry, and back-office processing. BPOlytix is a BPO company in India that provides these services.",
  },
  {
    question: "What BPO services does BPOlytix offer?",
    answer:
      "BPOlytix offers a full range of BPO services including customer support outsourcing, lead generation BPO, back-office processing, inside sales enablement, quality and performance analytics, and workforce management — all delivered from India with a pilot-first model.",
  },
  {
    question: "Is BPOlytix a domestic BPO company in India?",
    answer:
      "Yes. BPOlytix is a domestic BPO company based in Lucknow, Uttar Pradesh, India. We serve businesses across India with structured BPO delivery, transparent governance, and a 2–4 week pilot launch model.",
  },
  {
    question: "How quickly can BPOlytix launch a BPO engagement?",
    answer:
      "BPOlytix can launch a pilot BPO engagement in 2 to 4 weeks. The pilot validates process quality before scaling, de-risking the engagement for the client.",
  },
]);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactCTASection />
    </>
  );
}
