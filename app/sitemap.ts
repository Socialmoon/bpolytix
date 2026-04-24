import type { MetadataRoute } from "next";
import { industries } from "@/lib/content/industries";
import { caseStudies, insightPosts } from "@/lib/content/insights";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/industries`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.82,
    },
    {
      url: `${siteConfig.url}/team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.74,
    },
    {
      url: `${siteConfig.url}/process`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${siteConfig.url}/technology`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${siteConfig.url}/resources`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/why-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.78,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${siteConfig.url}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.76,
  }));

  const blogRoutes: MetadataRoute.Sitemap = insightPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.72,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${siteConfig.url}/case-studies/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.72,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes, ...caseStudyRoutes];
}
