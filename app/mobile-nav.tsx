"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/#team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/why-us", label: "Why Us" },
  { href: "/case-studies", label: "Case Studies" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) {
      document.body.classList.remove("mobile-nav-open");
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.classList.add("mobile-nav-open");
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.classList.remove("mobile-nav-open");
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 text-white transition hover:border-white/40 hover:bg-white/10"
        aria-label="Toggle navigation menu"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.09em]">Menu</span>
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {open ? (
            <>
              <path d="M6 6l12 12" />
              <path d="M18 6l-12 12" />
            </>
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      <div
        className={`mobile-nav-overlay fixed inset-x-0 bottom-0 top-[73px] z-40 backdrop-blur-md transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className="h-full w-full"
        />
      </div>

      <nav
        className={`mobile-nav-sheet fixed inset-x-0 bottom-0 top-[73px] z-40 flex flex-col px-5 pb-8 pt-6 backdrop-blur-xl transition-all duration-300 ease-out ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="mb-4 border-b border-white/15 pb-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55">
            Navigation
          </p>
        </div>

        <div className="grid gap-3">
          {links.map((link) => {
            const isActive = link.href === "/#team" ? pathname === "/" : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block rounded-2xl border px-4 py-3.5 text-base font-semibold transition ${
                  isActive
                    ? "border-white bg-white text-black"
                    : "border-white/15 bg-white/5 text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto pt-4">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block rounded-2xl bg-white px-4 py-3.5 text-center text-base font-semibold text-black transition hover:bg-white/90"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
}
