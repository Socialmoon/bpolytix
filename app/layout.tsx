import type { Metadata } from "next";
import Script from "next/script";
import {
  localBusinessJsonLd,
  organizationJsonLd,
  siteConfig,
  webSiteJsonLd,
  speakableJsonLd,
  definedTermJsonLd,
  placeJsonLd,
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
  verification: {
    google: "G-JG5X55FF4D",
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
    "geo.position": "26.8467;80.9462",
    "geo.country": "IN",
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
const speakableSchema = speakableJsonLd(["h1", "h2", ".hero-headline", ".site-description"]);
const definedTermSchema = definedTermJsonLd();
const placeSchema = placeJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className="h-full antialiased dark"
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {/* JSON-LD structured data — rendered server-side into the HTML stream */}
        <div
          id="ld-json"
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: [
              `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`,
              `<script type="application/ld+json">${JSON.stringify(localBusinessSchema)}</script>`,
              `<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`,
              `<script type="application/ld+json">${JSON.stringify(speakableSchema)}</script>`,
              `<script type="application/ld+json">${JSON.stringify(definedTermSchema)}</script>`,
              `<script type="application/ld+json">${JSON.stringify(placeSchema)}</script>`,
            ].join(""),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JG5X55FF4D"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-JG5X55FF4D');`}
        </Script>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
