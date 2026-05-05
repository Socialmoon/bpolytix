import type { MetadataRoute } from "next";
import { industries } from "@/lib/content/industries";
import { caseStudies, insightPosts } from "@/lib/content/insights";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/seo";

const url = siteConfig.url;
const now = new Date();

function entry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
  lastModified?: Date,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${url}${path}`,
    lastModified: lastModified ?? now,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        "en-IN": `${url}${path}`,
        "x-default": `${url}${path}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Tier 1: Homepage ──────────────────────────────────────────────
    entry("/", "daily", 1.0),

    // ── Tier 2: Core commercial pages ────────────────────────────────
    entry("/services", "weekly", 0.95),
    entry("/contact", "weekly", 0.93),
    entry("/industries", "weekly", 0.90),
    entry("/why-us", "monthly", 0.88),

    // ── Tier 3: Trust & credibility pages ────────────────────────────
    entry("/case-studies", "weekly", 0.85),
    entry("/blog", "weekly", 0.83),
    entry("/about", "monthly", 0.82),
    entry("/process", "monthly", 0.80),

    // ── Tier 4: Supporting pages ──────────────────────────────────────
    entry("/insights", "weekly", 0.75),
    entry("/team", "monthly", 0.72),
    entry("/technology", "monthly", 0.70),
    entry("/resources", "monthly", 0.68),
    entry("/careers", "monthly", 0.60),

    // ── Service detail pages ──────────────────────────────────────────
    ...services.map((s) => entry(`/services/${s.slug}`, "monthly", 0.85)),

    // ── Industry detail pages ─────────────────────────────────────────
    ...industries.map((i) => entry(`/industries/${i.slug}`, "monthly", 0.78)),

    // ── Blog / insight posts ──────────────────────────────────────────
    ...insightPosts.map((p) =>
      entry(`/blog/${p.slug}`, "monthly", 0.74, new Date(p.updatedAt)),
    ),

    // ── Case study detail pages ───────────────────────────────────────
    ...caseStudies.map((c) =>
      entry(`/case-studies/${c.slug}`, "monthly", 0.74, new Date(c.publishedAt)),
    ),
  ];
}
