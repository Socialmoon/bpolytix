import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BPOlytix",
    short_name: "BPOlytix",
    description:
      "BPOlytix provides domestic BPO services, customer support outsourcing, and lead generation for growth-focused businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/logo-nav.jpeg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/logo-nav.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
