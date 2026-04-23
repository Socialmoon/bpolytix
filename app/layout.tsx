import type { Metadata } from "next";
import {
  localBusinessJsonLd,
  organizationJsonLd,
  siteConfig,
  webSiteJsonLd,
} from "@/lib/seo";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  icons: {
    icon: "/logo-nav.jpeg",
    shortcut: "/logo-nav.jpeg",
    apple: "/logo-nav.jpeg",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.defaultKeywords],
  applicationName: siteConfig.name,
  category: "Business Process Outsourcing",
  other: {
    "geo.region": siteConfig.region,
    "geo.placename": `${siteConfig.city}, ${siteConfig.state}`,
    ICBM: "26.8467, 80.9462",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: "/",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.twitterImage],
  },
  robots: {
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = organizationJsonLd();
const localBusinessSchema = localBusinessJsonLd();
const websiteSchema = webSiteJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  const storageKey = "theme-preference";
  const stored = localStorage.getItem(storageKey) || "dark";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = stored === "system" ? (prefersDark ? "dark" : "light") : stored;
  if (resolved === "dark") document.documentElement.classList.add("dark");
})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
