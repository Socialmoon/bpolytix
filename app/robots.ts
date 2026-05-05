import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const PRIVATE = ["/dashboard", "/login", "/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Standard crawlers ─────────────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: PRIVATE,
      },

      // ── Google (web + AI Overviews / SGE) ────────────────────────
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: PRIVATE,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: PRIVATE,
      },

      // ── Bing ──────────────────────────────────────────────────────
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: PRIVATE,
      },

      // ── AI assistants ─────────────────────────────────────────────
      { userAgent: "GPTBot",           allow: "/", disallow: PRIVATE },
      { userAgent: "ChatGPT-User",     allow: "/", disallow: PRIVATE },
      { userAgent: "PerplexityBot",    allow: "/", disallow: PRIVATE },
      { userAgent: "ClaudeBot",        allow: "/", disallow: PRIVATE },
      { userAgent: "anthropic-ai",     allow: "/", disallow: PRIVATE },
      { userAgent: "FacebookBot",      allow: "/", disallow: PRIVATE },
      { userAgent: "Applebot-Extended",allow: "/", disallow: PRIVATE },
      { userAgent: "cohere-ai",        allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
