import type { Metadata } from "next";
import ContactForm from "./contact-form";
import { buildMetadata } from "@/lib/seo";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/premium/page-hero";

export const metadata: Metadata = buildMetadata({
  title: "Contact BPolyTix",
  description: "Get in touch with our team to discuss your business transformation needs",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Start a conversation about your next operating model"
        description="Share your goals, channel mix, and timeline. We will respond with a practical next step or a scoped pilot recommendation."
        primaryCta={{ label: "Email Us", href: "mailto:hello@bpolytix.com" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
      />

      <section className="section">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Our team is ready to help you achieve your business goals
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:hello@bpolytix.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      hello@bpolytix.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      Global presence
                      <br />
                      Available 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur">
                <h3 className="font-semibold mb-3">Business Hours</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
