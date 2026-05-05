import type { Metadata } from "next";

export const siteConfig = {
  name: "BPOlytix",
  legalName: "BPOlytix",
  titleTemplate: "%s | BPOlytix — BPO Company India",
  defaultTitle: "BPO Company India | BPO Services & Call Center Outsourcing — BPOlytix",
  description:
    "BPOlytix is India's execution-first BPO company. We deliver BPO services including customer support, call center outsourcing, lead generation, and back-office processing for businesses across India.",
  defaultKeywords: [
    // Brand
    "bpolytix",
    "bpolytix.in",
    "bpolytix.com",
    "bpolytix bpo",
    // Core BPO
    "bpo",
    "bpo company",
    "bpo services",
    "bpo company india",
    "bpo services india",
    "bpo outsourcing",
    "bpo outsourcing india",
    "bpo solutions",
    "bpo solutions india",
    "business process outsourcing",
    "business process outsourcing india",
    // Domestic BPO
    "domestic bpo",
    "domestic bpo services",
    "domestic bpo company india",
    "domestic bpo lucknow",
    // Location
    "bpo company in lucknow",
    "bpo company lucknow",
    "bpo lucknow",
    "bpo services lucknow",
    "bpo company uttar pradesh",
    "bpo company up",
    // Service-specific
    "call center outsourcing india",
    "call center outsourcing",
    "customer support bpo",
    "customer support outsourcing india",
    "lead generation bpo",
    "lead generation outsourcing india",
    "back office bpo",
    "back office outsourcing india",
    "inside sales bpo",
    "telecalling services india",
    "inbound call center india",
    "outbound call center india",
    // Intent
    "hire bpo company india",
    "best bpo company india",
    "top bpo company india",
    "affordable bpo services india",
    "bpo partner india",
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
    alternateName: [
      "BPOlytix",
      "BPOLYTIX",
      "bpolytix.in",
      "bpolytix.com",
      "BPO Company India",
      "BPO Services India",
      "Domestic BPO India",
      siteConfig.legalName,
    ],
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: ["BPOlytix", "BPOLYTIX", "bpolytix.in", "BPO Company India"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-nav.jpeg`,
    description: siteConfig.description,
    email: "contact@bpolytix.in",
    telephone: "+91-85629-22873",
    foundingDate: "2024",
    knowsAbout: [
      "BPO",
      "BPOlytix",
      "BPO services",
      "BPO company India",
      "Business process outsourcing",
      "Customer support outsourcing",
      "Lead generation outsourcing",
      "Domestic BPO",
      "Call center outsourcing India",
      "Back office processing",
      "Inside sales enablement",
      "Workforce management BPO",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.xProfile,
      siteConfig.instagramProfile,
      `${siteConfig.url}/about`,
      `${siteConfig.url}/services`,
      `${siteConfig.url}/contact`,
    ],
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
    telephone: "+91-85629-22873",
    email: "contact@bpolytix.in",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
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

// AEO: Speakable schema — tells Google/AI assistants which parts of the page to read aloud
export function speakableJsonLd(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    url: siteConfig.url,
  };
}

// AEO: DefinedTerm schema — tells AI what "BPO" means in context of this site
export function definedTermJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "BPO",
    alternateName: "Business Process Outsourcing",
    description:
      "BPO (Business Process Outsourcing) is the practice of contracting specific business operations and responsibilities to a third-party service provider. BPOlytix is a BPO company in India offering customer support, lead generation, back-office processing, and call center outsourcing services.",
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "BPO Industry Glossary",
      url: `${siteConfig.url}/resources`,
    },
    url: siteConfig.url,
  };
}

// GEO: Place schema — reinforces geographic relevance for local/regional search
export function placeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `BPOlytix — BPO Company in ${siteConfig.city}`,
    description: `BPOlytix is a BPO company based in ${siteConfig.city}, ${siteConfig.state}, India, providing BPO services to businesses across India.`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.8467,
      longitude: 80.9462,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "IN",
    },
    url: siteConfig.url,
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
