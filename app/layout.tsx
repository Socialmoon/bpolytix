import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BPOlytix | Powered by SocialMoon",
  description:
    "BPOlytix is a growth-focused BPO and contact center brand powered by SocialMoon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--surface-soft)]/90 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
            <Link href="/" className="group">
              <div>
                <p className="font-display text-xl font-semibold tracking-tight text-[var(--text-strong)] md:text-2xl">
                  BPOlytix
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--text-soft)] group-hover:text-[var(--brand)] sm:text-xs sm:tracking-[0.17em]">
                  <span className="hidden sm:inline">BPOlytix | Powered by SocialMoon</span>
                  <span className="sm:hidden">Powered by SocialMoon</span>
                  <Image
                    src="/logo.png"
                    alt="SocialMoon logo"
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] rounded object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>
            <nav className="hidden items-center gap-5 text-sm font-medium text-[var(--text-soft)] md:flex">
              <Link href="/about" className="link-hover">
                About
              </Link>
              <Link href="/services" className="link-hover">
                Services
              </Link>
              <Link href="/careers" className="link-hover">
                Careers
              </Link>
              <Link href="/why-us" className="link-hover">
                Why Us
              </Link>
              <Link href="/case-studies" className="link-hover">
                Case Studies
              </Link>
              <Link href="/contact" className="rounded-full bg-[var(--brand)] px-4 py-2 text-white transition hover:bg-[var(--brand-deep)]">
                Contact
              </Link>
            </nav>
          </div>
          <nav className="mx-auto flex w-full max-w-6xl gap-4 overflow-x-auto px-5 pb-4 text-sm font-medium text-[var(--text-soft)] md:hidden">
            <Link href="/about" className="whitespace-nowrap link-hover">
              About
            </Link>
            <Link href="/services" className="whitespace-nowrap link-hover">
              Services
            </Link>
            <Link href="/careers" className="whitespace-nowrap link-hover">
              Careers
            </Link>
            <Link href="/why-us" className="whitespace-nowrap link-hover">
              Why Us
            </Link>
            <Link href="/case-studies" className="whitespace-nowrap link-hover">
              Case Studies
            </Link>
            <Link href="/contact" className="whitespace-nowrap link-hover">
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
          <div className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-12">
            <div className="grid gap-8 rounded-2xl border border-[var(--line)] bg-[var(--surface-soft)] p-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:p-8">
              <div>
                <p className="font-display text-2xl font-semibold text-[var(--text-strong)]">BPOlytix</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-soft)] sm:text-xs sm:tracking-[0.14em]">
                  <span className="hidden sm:inline">BPOlytix | Powered by SocialMoon</span>
                  <span className="sm:hidden">Powered by SocialMoon</span>
                  <Image
                    src="/logo.png"
                    alt="SocialMoon logo"
                    width={16}
                    height={16}
                    className="h-4 w-4 rounded object-contain"
                  />
                </div>
                <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--text-soft)]">
                  Smart calls. Smarter results. A performance-led BPO partner for customer support,
                  lead generation, and scalable growth operations.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-[var(--text-strong)]">Quick Links</p>
                <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[var(--text-soft)]">
                  <Link className="link-hover" href="/services">
                    Services
                  </Link>
                  <Link className="link-hover" href="/why-us">
                    Why Us
                  </Link>
                  <Link className="link-hover" href="/careers">
                    Careers
                  </Link>
                  <Link className="link-hover" href="/case-studies">
                    Case Studies
                  </Link>
                  <Link className="link-hover" href="/contact">
                    Contact
                  </Link>
                  <Link className="link-hover" href="/login">
                    Admin Login
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-[var(--text-strong)]">Contact</p>
                <div className="mt-3 space-y-2 text-sm text-[var(--text-soft)]">
                  <p>Lucknow / Prayagraj, India</p>
                  <p>Operations: Domestic BPO</p>
                  <p>Web: socialmoon.in</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2 text-[10px] uppercase tracking-[0.1em] text-[var(--text-soft)] sm:text-xs sm:tracking-[0.12em] md:flex-row md:items-center md:justify-between">
              <p>Copyright {new Date().getFullYear()} BPOlytix. All rights reserved.</p>
              <p>BPOlytix | Powered by SocialMoon</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
