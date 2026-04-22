import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="mx-auto w-full max-w-3xl card p-8 text-center md:p-12">
        <p className="badge">404</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-[var(--text-strong)] md:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--text-soft)] md:text-base">
          The URL does not match any route in this deployment. Check the path or return to the
          homepage.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)]"
          >
            Go to home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text-strong)] transition hover:border-[var(--brand)]"
          >
            Contact team
          </Link>
        </div>
      </div>
    </section>
  );
}
