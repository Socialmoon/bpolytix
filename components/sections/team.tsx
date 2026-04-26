"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { teamMembers, type SocialLink } from "@/lib/content/team";
import { Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialMeta: Record<
  SocialLink["platform"],
  { label: string; Icon: () => React.ReactElement; hover: string }
> = {
  linkedin:  { label: "LinkedIn",  Icon: LinkedInIcon,  hover: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]" },
  instagram: { label: "Instagram", Icon: InstagramIcon, hover: "hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]" },
  x:         { label: "X",         Icon: XIcon,         hover: "hover:bg-black hover:text-white hover:border-black" },
  email:     { label: "Email",     Icon: () => <Mail className="h-4 w-4" />, hover: "hover:bg-indigo-600 hover:text-white hover:border-indigo-600" },
};

function MemberCard({ member }: { member: (typeof teamMembers)[0] }) {
  const isFounder = member.featured;

  return (
    <article className={cn(
      "group flex flex-col items-center text-center",
      isFounder && "col-span-full sm:col-span-2 lg:col-span-2"
    )}>
      {/* Photo circle */}
      <div className={cn(
        "relative overflow-hidden rounded-full ring-4 ring-white shadow-[0_8px_32px_rgba(15,23,42,0.12)] transition-all duration-300 group-hover:shadow-[0_16px_48px_rgba(15,23,42,0.18)] group-hover:ring-indigo-200",
        isFounder ? "h-36 w-36 sm:h-44 sm:w-44" : "h-28 w-28 sm:h-32 sm:w-32"
      )}>
        {/* gradient fallback */}
        <div className={cn("absolute inset-0 bg-gradient-to-br", member.gradient)} />
        {/* initials fallback */}
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white/80">
          {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </div>
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      </div>

      {/* Name + role */}
      <div className="mt-4">
        <div className="flex items-center justify-center gap-2">
          <h3 className={cn(
            "font-display font-bold text-gray-950",
            isFounder ? "text-xl" : "text-base"
          )}>
            {member.name}
          </h3>
          {isFounder && (
            <span className="rounded-full bg-indigo-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              Founder
            </span>
          )}
        </div>
        <p className={cn(
          "mt-0.5 font-medium text-indigo-500",
          isFounder ? "text-sm" : "text-xs"
        )}>
          {member.role}
        </p>
      </div>

      {/* Socials */}
      <div className="mt-3 flex items-center gap-1.5">
        {member.socials.map((s) => {
          const m = socialMeta[s.platform];
          const Icon = m.Icon;
          return (
            <a
              key={s.platform}
              href={s.href}
              target={s.platform !== "email" ? "_blank" : undefined}
              rel={s.platform !== "email" ? "noopener noreferrer" : undefined}
              aria-label={`${member.name} on ${m.label}`}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all duration-200",
                m.hover
              )}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </article>
  );
}

export function TeamSection() {
  const founder = teamMembers.find((m) => m.featured)!;
  const rest = teamMembers.filter((m) => !m.featured);

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* header */}
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-indigo-600">Our Team</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            The people behind BPOlytix
          </h2>
        </div>

        {/* founder centered on top */}
        <div className="mb-12 flex justify-center">
          <MemberCard member={founder} />
        </div>

        {/* divider */}
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Operations Team</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* rest */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {rest.map((m) => <MemberCard key={m.name} member={m} />)}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md"
          >
            We are hiring — View open roles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
