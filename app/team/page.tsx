import type { Metadata } from "next";
import { CtaStrip } from "@/components/premium/cta-strip";
import { PageHero } from "@/components/premium/page-hero";
import { teamMembers } from "@/lib/content/team";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Leadership and Delivery Team",
  description: "Meet the BPOlytix leadership and operations experts behind customer support, lead generation, and quality delivery programs.",
  path: "/team",
  keywords: ["bpo team", "customer operations leadership", "bpolytix leadership"],
});

const teamBreadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
]);

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamBreadcrumb) }}
      />

      <PageHero
        badge="Team"
        title="Built by operators, led by execution"
        description="Our leadership combines customer operations depth, quality governance, and growth-focused delivery experience."
        primaryCta={{ label: "Work With Us", href: "/contact" }}
      />

      <section className="section pt-0">
        <div className="container-premium grid gap-5 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article key={member.name} className="card p-6 md:p-7">
              <h2 className="font-display text-2xl text-[var(--text-strong)]">{member.name}</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.09em] text-[var(--text-soft)]">
                {member.role}
              </p>
              <p className="mt-3 leading-7 text-[var(--text-soft)]">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip
        title="Join a high-accountability operations culture"
        body="Explore roles across support, quality, analytics, and campaign management."
        cta={{ label: "View Careers", href: "/careers" }}
      />
    </>
  );
}
