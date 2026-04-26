import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers — full access except private routes
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/login", "/api/"],
      },
      // Google Extended (AI Overviews / SGE) — allow so we appear in AI answers
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/dashboard", "/login", "/api/"],
      },
      // OpenAI GPTBot — allow for ChatGPT / AEO visibility
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/dashboard", "/login", "/api/"],
      },
      // Perplexity AI — allow for AI search answer visibility
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/dashboard", "/login", "/api/"],
      },
      // Anthropic Claude — allow for AI answer visibility
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/dashboard", "/login", "/api/"],
      },
      // Meta AI
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: ["/dashboard", "/login", "/api/"],
      },
      // Apple Applebot-Extended (Apple Intelligence)
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/dashboard", "/login", "/api/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
