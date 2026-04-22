import type { Metadata } from "next";
import ContactForm from "./contact-form";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact BPOlytix for BPO Consultation",
  description:
    "Contact BPOlytix to discuss customer support, lead generation, and domestic BPO campaign planning for your business.",
  path: "/contact",
  keywords: ["contact BPO company", "BPO consultation", "Lucknow contact center partner"],
});

const contactBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumb) }}
      />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card p-6 md:p-8 hero-reveal">
          <p className="badge">Contact</p>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-[var(--text-strong)] md:text-5xl">
            Let us design your growth operations engine
          </h1>
          <p className="mt-5 leading-7 text-[var(--text-soft)]">
            Share your current challenges and target outcomes. We will propose a launch plan with
            team size, service model, and KPI milestones.
          </p>

          <div className="mt-8 space-y-3 text-sm text-[var(--text-soft)]">
            <p className="rounded-xl bg-[var(--surface-soft)] px-4 py-3">
              <span className="font-semibold text-[var(--text-strong)]">Primary Base:</span> Lucknow /
              Prayagraj
            </p>
            <p className="rounded-xl bg-[var(--surface-soft)] px-4 py-3">
              <span className="font-semibold text-[var(--text-strong)]">Model:</span> Domestic BPO
              operations
            </p>
            <p className="rounded-xl bg-[var(--surface-soft)] px-4 py-3">
              <span className="font-semibold text-[var(--text-strong)]">Powered by:</span> SocialMoon
              (socialmoon.in)
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}