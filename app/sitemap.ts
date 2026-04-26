import type { MetadataRoute } from "next";
import { industries } from "@/lib/content/industries";
import { caseStudies, insightPosts } from "@/lib/content/insights";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/seo";

const url = siteConfig.url;

function entry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: `${url}${path}`,
    lastModified: new Date(),
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
  const staticRoutes: MetadataRoute.Sitemap = [
    entry("/", "daily", 1.0),
    entry("/services", "weekly", 0.97),       // BPO services — highest after home
    entry("/about", "monthly", 0.85),
    entry("/industries", "weekly", 0.9),
    entry("/why-us", "monthly", 0.88),
    entry("/process", "monthly", 0.82),
    entry("/blog", "weekly", 0.85),
    entry("/case-studies", "weekly", 0.83),
    entry("/contact", "weekly", 0.87),
    entry("/team", "monthly", 0.74),
    entry("/technology", "monthly", 0.72),
    entry("/resources", "monthly", 0.70),
    entry("/careers", "monthly", 0.65),
    entry("/insights", "weekly", 0.75),
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) =>
    entry(`/services/${s.slug}`, "monthly", 0.82),
  );

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) =>
    entry(`/industries/${i.slug}`, "monthly", 0.78),
  );

  const blogRoutes: MetadataRoute.Sitemap = insightPosts.map((p) =>
    entry(`/blog/${p.slug}`, "monthly", 0.74),
  );

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) =>
    entry(`/case-studies/${c.slug}`, "monthly", 0.74),
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
  ];
}
