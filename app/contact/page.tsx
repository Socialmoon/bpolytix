import type { Metadata } from "next";
import ContactForm from "./contact-form";
import { buildMetadata, siteConfig } from "@/lib/seo";
import { Mail, Phone, MapPin, Clock3 } from "lucide-react";
import { PageHero } from "@/components/premium/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Contact BPOlytix — Book a Free BPO Consultation",
  description:
    "Contact BPOlytix, India's BPO company, to discuss your customer support, lead generation, or back-office BPO needs. We respond within 1 business day.",
  path: "/contact",
  keywords: [
    "contact bpolytix",
    "contact bpo company",
    "bpo consultation india",
    "bpo company contact",
    "hire bpo india",
    "hire bpo company india",
    "bpo inquiry india",
    "bpo services quote india",
    "bpo company lucknow contact",
    "outsource bpo india",
  ],
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact BPOlytix — BPO Company India",
  description: "Contact BPOlytix for BPO services, customer support outsourcing, and lead generation in India.",
  url: `${siteConfig.url}/contact`,
  mainEntity: {
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "BPOlytix",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: "+91-85629-22873",
    email: "contact@bpolytix.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.8467,
      longitude: 80.9462,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
    sameAs: [siteConfig.xProfile, siteConfig.instagramProfile],
  },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@bpolytix.in",
    href: "mailto:contact@bpolytix.in",
    detail: "We respond within 1 business day",
    color: "bg-sky-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 85629 22873",
    href: "tel:+918562922873",
    detail: "Available Mon–Sat, 10 AM – 6 PM",
    color: "bg-indigo-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lucknow, Uttar Pradesh",
    href: null,
    detail: "India — serving clients nationwide",
    color: "bg-emerald-600",
  },
  {
    icon: Clock3,
    label: "Business Hours",
    value: "Mon–Sat, 10 AM – 6 PM",
    href: null,
    detail: "IST (UTC+5:30)",
    color: "bg-amber-600",
  },
];

const whatToExpect = [
  { step: "01", title: "We review your inquiry", detail: "Within 1 business day, a team member reviews your message and prepares a relevant response." },
  { step: "02", title: "Discovery call scheduled", detail: "We schedule a 30-minute discovery call to understand your goals, volume, and channel requirements." },
  { step: "03", title: "Scoped recommendation", detail: "We share a practical pilot recommendation with clear KPIs, timeline, and governance structure." },
  { step: "04", title: "Pilot launch", detail: "If the fit is right, we move to a controlled pilot — typically live within 2–4 weeks of agreement." },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <PageHero
        badge="Contact"
        title="Start a conversation about your next operating model"
        description="Share your goals, channel mix, and timeline. We will respond with a practical next step or a scoped pilot recommendation — no obligation, no sales pressure."
        primaryCta={{ label: "Email Us", href: "mailto:contact@bpolytix.in" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        stats={[
          { value: "1 day", label: "Response time" },
          { value: "30 min", label: "Discovery call" },
          { value: "2–4 wks", label: "Pilot launch" },
          { value: "Free", label: "Consultation" },
        ]}
      />

      <section className="section pt-0">
        <div className="container-premium">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">

            {/* Left: contact info + what to expect */}
            <div className="space-y-8">

              {/* Contact details */}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Get in Touch</p>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
                  Contact information
                </h2>
                <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                  Reach us directly or fill in the form and we will get back to you within one
                  business day with a practical next step.
                </p>
                <div className="mt-6 space-y-4">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-start gap-4 rounded-2xl border border-[var(--line)] bg-white p-5 shadow-sm"
                      >
                        <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${item.color} text-white`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-soft)]">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="mt-1 block text-base font-semibold text-[var(--text-strong)] transition-colors hover:text-indigo-700"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-base font-semibold text-[var(--text-strong)]">
                              {item.value}
                            </p>
                          )}
                          <p className="mt-0.5 text-sm text-[var(--text-soft)]">{item.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* What to expect */}
              <div className="overflow-hidden rounded-2xl border border-indigo-100/60 bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/50 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">What to Expect</p>
                <h3 className="mt-3 font-display text-2xl tracking-tight text-[var(--text-strong)]">
                  From first message to pilot launch
                </h3>
                <div className="mt-5 space-y-4">
                  {whatToExpect.map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
                        {item.step}
                      </span>
                      <div>
                        <p className="font-semibold text-[var(--text-strong)]">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-[var(--text-soft)]">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: form */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Send a Message</p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--text-strong)]">
                Tell us about your operation
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--text-soft)]">
                The more context you share, the more useful our response will be. We will come back
                with a practical recommendation — not a generic sales pitch.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
