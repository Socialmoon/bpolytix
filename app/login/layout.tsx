import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Admin Login",
  description: "Secure admin login for authorized BPOlytix team members.",
  path: "/login",
  noindex: true,
});

export default function LoginLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
