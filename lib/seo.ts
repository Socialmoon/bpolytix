import type { Metadata } from "next";

export const siteConfig = {
  name: "BPOlytix",
  legalName: "BPOlytix",
  titleTemplate: "%s | BPOlytix",
  defaultTitle: "BPO Services in Lucknow, Uttar Pradesh | BPOlytix",
  description:
    "BPOlytix delivers domestic BPO, customer support, and lead generation services for growth-focused businesses in Lucknow, Uttar Pradesh, and across India.",
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

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
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

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
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
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    url: siteConfig.url,
    image: `${siteConfig.url}/logo.png`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${siteConfig.city}, ${siteConfig.state}, ${siteConfig.country}`,
    },
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
