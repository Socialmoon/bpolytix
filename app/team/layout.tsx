import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "BPOlytix Team — Leadership, Operations & Technology | BPO Company India",
  description:
    "Meet the BPOlytix team — the operators, strategists, and technologists behind India's execution-first BPO company. Based in Lucknow, serving clients nationwide.",
  path: "/team",
  keywords: [
    "bpolytix team",
    "bpo company team india",
    "bpo leadership india",
    "bpo operations team",
    "bpo company lucknow team",
    "bpo founder india",
    "bpo management team india",
  ],
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
