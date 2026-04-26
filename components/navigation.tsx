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
      className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl relative"
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
          className="absolute left-0 right-0 top-full hidden xl:block"
          onMouseEnter={() => setOpenDropdown(currentGroup.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6">
            <div className="relative overflow-hidden rounded-2xl border border-indigo-100/60 bg-white/95 shadow-[0_24px_64px_rgba(15,23,42,0.12),0_0_0_1px_rgba(99,102,241,0.06)] backdrop-blur-xl">
              {/* subtle top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
              {/* ambient glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-200/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 left-1/4 h-40 w-40 rounded-full bg-cyan-200/25 blur-3xl" />

              <div className="relative grid grid-cols-12 gap-0">
                {/* Left panel */}
                <div className="col-span-3 border-r border-indigo-50 bg-[linear-gradient(160deg,#1e1b4b_0%,#312e81_55%,#0e7490_100%)] p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/70">
                    <Sparkles className="h-3 w-3" />
                    {currentGroup.label}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">{currentGroup.description}</p>
                  <Link
                    href={currentGroup.href}
                    className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20 transition-all duration-200 hover:bg-white/25"
                  >
                    View all
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Featured items */}
                <div className="col-span-5 p-6">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-400">Featured</p>
                  <div className="space-y-1">
                    {featuredItems.map((item) => (
                      <Link
                        key={`${currentGroup.label}-featured-${item.href}`}
                        href={item.href}
                        className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-indigo-50"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[var(--text-strong)] transition-colors group-hover:text-indigo-700">
                            {item.label}
                          </p>
                          {item.description && (
                            <p className="mt-0.5 text-xs text-[var(--text-soft)] line-clamp-1">{item.description}</p>
                          )}
                        </div>
                        <ArrowUpRight className="h-3.5 w-3.5 flex-shrink-0 text-indigo-300 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick links */}
                <div className="col-span-4 border-l border-indigo-50 bg-slate-50/60 p-6">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-400">Quick Links</p>
                  <div className="space-y-1">
                    {currentGroup.links.map((item) => (
                      <Link
                        key={`${currentGroup.label}-${item.href}`}
                        href={item.href}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-white hover:shadow-sm"
                      >
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[var(--text-strong)] transition-colors group-hover:text-indigo-700">
                            {item.label}
                          </p>
                          {item.description && (
                            <p className="text-xs text-[var(--text-soft)]">{item.description}</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
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
