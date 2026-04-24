"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { navGroups, navPrimaryCta, navSecondaryLinks } from "@/lib/navigation";

export function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const currentGroup = navGroups.find((group) => group.label === openDropdown) ?? null;
  const featuredItems =
    currentGroup && (currentGroup.featured?.length ?? 0) > 0
      ? currentGroup.featured!
      : currentGroup?.links.slice(0, 2) ?? [];

  return (
    <nav
      className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo variant="dark" className="flex-shrink-0" />

        <div className="hidden items-center gap-1.5 xl:flex">
          <Link
            href="/"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              isActive("/")
                ? "bg-[linear-gradient(135deg,rgba(99,102,241,0.14),rgba(14,165,233,0.14))] text-indigo-700 shadow-sm"
                : "text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-sm"
            )}
          >
            Home
          </Link>

          {navGroups.map((group) => (
            <button
              key={group.label}
              type="button"
              className="group"
              onMouseEnter={() => setOpenDropdown(group.label)}
              onFocus={() => setOpenDropdown(group.label)}
              onClick={() => setOpenDropdown(group.label)}
            >
              <span
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive(group.href)
                    ? "bg-[linear-gradient(135deg,rgba(99,102,241,0.14),rgba(14,165,233,0.14))] text-indigo-700 shadow-sm"
                    : "text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-sm"
                )}
              >
                {group.label}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    openDropdown === group.label ? "rotate-180" : "group-hover:rotate-180"
                  )}
                />
              </span>
            </button>
          ))}

          {navSecondaryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                isActive(item.href)
                  ? "bg-[linear-gradient(135deg,rgba(99,102,241,0.14),rgba(14,165,233,0.14))] text-indigo-700 shadow-sm"
                  : "text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-sm"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 xl:flex">
          <Link
            href={navPrimaryCta.href}
            className="rounded-full bg-[linear-gradient(135deg,#312e81_0%,#4f46e5_45%,#0ea5e9_100%)] px-5 py-2 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(79,70,229,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(79,70,229,0.35)]"
          >
            {navPrimaryCta.label}
          </Link>
        </div>

        <button
          type="button"
          className="xl:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
        </button>
      </div>

      {currentGroup ? (
        <div
          className="fixed inset-x-0 top-16 hidden h-[50vh] border-t border-[rgba(99,102,241,0.14)] bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(255,255,255,0.98))] shadow-[0_34px_90px_rgba(15,23,42,0.14)] backdrop-blur-2xl xl:block"
          onMouseEnter={() => setOpenDropdown(currentGroup.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="relative h-full overflow-hidden">
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-12 h-72 w-72 rounded-full bg-indigo-200/35 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-amber-200/30 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.72),transparent_42%,rgba(224,231,255,0.42))]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/80 to-transparent" />

            <div className="container-premium relative z-10 grid h-full grid-cols-12 gap-6 py-7">
              <aside className="relative col-span-4 overflow-hidden rounded-[2rem] border border-white/65 bg-[linear-gradient(155deg,#111827_0%,#312e81_48%,#0f766e_100%)] p-8 text-white shadow-[0_28px_60px_rgba(49,46,129,0.35)]">
                <div className="pointer-events-none absolute -left-12 top-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    <Sparkles className="h-3.5 w-3.5" />
                    Navigate
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100/75">
                    {currentGroup.label}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-white">
                    {currentGroup.label}
                  </h3>
                  <Link
                    href={currentGroup.href}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Explore {currentGroup.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                        Featured
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        {featuredItems.length}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                        Quick Links
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        {currentGroup.links.length}
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              <section className="col-span-8 h-full">
                <div className="grid h-full gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
                          Featured Paths
                        </p>
                        <h4 className="mt-2 font-display text-2xl text-[var(--text-strong)]">
                          {currentGroup.label}
                        </h4>
                      </div>
                      <div className="hidden rounded-full bg-[linear-gradient(135deg,rgba(99,102,241,0.14),rgba(14,165,233,0.14))] px-3 py-1 text-xs font-semibold text-indigo-700 lg:block">
                        {currentGroup.label}
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {featuredItems.map((item) => (
                        <Link
                          key={`${currentGroup.label}-featured-${item.href}`}
                          href={item.href}
                          className="group rounded-[1.5rem] border border-[rgba(99,102,241,0.12)] bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(238,242,255,0.82))] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-[0_18px_35px_rgba(79,70,229,0.14)]"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-600">
                                Featured
                              </p>
                              <p className="mt-2 font-display text-xl text-[var(--text-strong)]">
                                {item.label}
                              </p>
                            </div>
                            <span className="rounded-full border border-indigo-100 bg-white/90 p-2 text-indigo-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-[rgba(99,102,241,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.92))] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
                      Quick Routes
                    </p>
                    <div className="mt-5 space-y-3">
                      {currentGroup.links.map((item, index) => (
                        <Link
                          key={`${currentGroup.label}-${item.href}`}
                          href={item.href}
                          className="group flex items-start gap-4 rounded-[1.35rem] border border-transparent bg-white/90 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-md"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(99,102,241,0.12),rgba(14,165,233,0.14))] text-sm font-semibold text-indigo-700">
                            {index + 1}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-[var(--text-strong)] transition-colors duration-300 group-hover:text-indigo-700">
                              {item.label}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {navSecondaryLinks.map((item) => (
                        <Link
                          key={`side-${item.href}`}
                          href={item.href}
                          className="rounded-full border border-indigo-100 bg-white/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-indigo-700 transition hover:border-indigo-200 hover:bg-indigo-50"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div className="border-t border-[var(--line)] bg-white xl:hidden">
          <div className="container-premium space-y-3 py-4">
            <Link
              href="/"
              className={cn(
                "block w-full rounded-lg px-4 py-2 text-sm font-medium transition-all",
                isActive("/") ? "bg-indigo-100 text-indigo-700" : "text-gray-700 hover:bg-gray-100"
              )}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {navGroups.map((group) => (
              <div key={group.label} className="rounded-xl border border-[var(--line)] bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-3 text-left"
                  onClick={() =>
                    setMobileExpanded((value) => (value === group.label ? null : group.label))
                  }
                >
                  <span className="font-semibold text-[var(--text-strong)]">{group.label}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-gray-500 transition-transform",
                      mobileExpanded === group.label && "rotate-180"
                    )}
                  />
                </button>

                {mobileExpanded === group.label ? (
                  <div className="space-y-2 border-t border-[var(--line)] px-4 py-3">
                    <Link
                      href={group.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg bg-[var(--surface-soft)] px-3 py-2 text-sm font-semibold text-[var(--text-strong)]"
                    >
                      {group.label} Overview
                    </Link>
                    {[...(group.featured ?? []), ...group.links].map((item) => (
                      <Link
                        key={`${group.label}-${item.href}`}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <p className="font-medium">{item.label}</p>
                        {item.description ? (
                          <p className="mt-0.5 text-xs text-[var(--text-soft)]">{item.description}</p>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            {navSecondaryLinks.map((item) => (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className={cn(
                  "block w-full rounded-lg px-4 py-2 text-sm font-medium transition-all",
                  isActive(item.href) ? "bg-indigo-100 text-indigo-700" : "text-gray-700 hover:bg-gray-100"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={navPrimaryCta.href}
              className="mt-2 block w-full rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-center text-sm font-semibold text-white transition-all"
              onClick={() => setMobileOpen(false)}
            >
              {navPrimaryCta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
