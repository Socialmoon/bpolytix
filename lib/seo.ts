import type { Metadata } from "next";

export const siteConfig = {
  name: "BPOlytix",
  legalName: "BPOlytix",
  titleTemplate: "%s | BPOlytix",
  defaultTitle: "BPO Company in Lucknow, India | BPOlytix",
  description:
    "BPOlytix is a domestic BPO company delivering customer support, call center outsourcing, and lead generation services for businesses in Lucknow, Uttar Pradesh, and across India.",
  defaultKeywords: [
    "bpo",
    "bpo company",
    "bpo services",
    "domestic bpo services",
    "call center outsourcing india",
    "customer support bpo",
    "lead generation bpo",
    "bpo company in lucknow",
  ],
  url: "https://bpolytix.in",
  locale: "en_IN",
  region: "IN-UP",
  country: "India",
  city: "Lucknow",
  state: "Uttar Pradesh",
  ogImage: "/opengraph-image",
  twitterImage: "/twitter-image",
  xProfile: "https://x.com/bpolytix",
  instagramProfile: "https://www.instagram.com/bpolytix/",
} as const;

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
};

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const canonical = input.path === "/" ? "/" : input.path;
  const keywords = Array.from(
    new Set([...(siteConfig.defaultKeywords ?? []), ...(input.keywords ?? [])]),
  );

  return {
    title: input.title,
    description: input.description,
    keywords,
    category: "Business Process Outsourcing",
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: input.title,
      description: input.description,
      url: canonical,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "BPOlytix",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [siteConfig.twitterImage],
    },
    robots: input.noindex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            "max-image-preview": "none",
            "max-video-preview": -1,
            "max-snippet": -1,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
          },
        },
  };
}
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-nav.jpeg`,
    description: siteConfig.description,
    knowsAbout: [
      "BPO services",
      "Customer support outsourcing",
      "Lead generation outsourcing",
      "Domestic call center operations",
    ],
    sameAs: [siteConfig.xProfile, siteConfig.instagramProfile],
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${siteConfig.city}, ${siteConfig.state}, ${siteConfig.country}`,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: siteConfig.legalName,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo-nav.jpeg`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: `${siteConfig.state}, ${siteConfig.country}`,
      },
      {
        "@type": "Country",
        name: siteConfig.country,
      },
    ],
    serviceArea: {
      "@type": "Place",
      name: `${siteConfig.city}, ${siteConfig.state}, ${siteConfig.country}`,
    },
    sameAs: [siteConfig.xProfile, siteConfig.instagramProfile],
  };
}

export function serviceJsonLd(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${siteConfig.city}, ${siteConfig.state}, ${siteConfig.country}`,
    },
    description,
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(input: {
  headline: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  image?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    author: {
      "@type": "Organization",
      name: input.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo-nav.jpeg`,
      },
    },
    image: input.image ? [`${siteConfig.url}${input.image}`] : undefined,
    mainEntityOfPage: `${siteConfig.url}${input.path}`,
    keywords: input.keywords?.join(", "),
    inLanguage: "en-IN",
  };
}
