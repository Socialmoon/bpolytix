"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import { Logo } from "./logo";

type SocialIconProps = {
  className?: string;
};

function InstagramIcon({ className = "" }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`fill-current ${className}`}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.75a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`fill-current ${className}`}>
      <path d="M13.5 22v-8.2h2.77l.41-3.2H13.5V8.56c0-.93.26-1.56 1.6-1.56h1.71V4.14c-.3-.04-1.3-.14-2.47-.14-2.44 0-4.11 1.49-4.11 4.22v2.38H7.5v3.2h2.73V22h3.27Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`fill-current ${className}`}>
      <path d="M6.94 8.5A1.94 1.94 0 1 1 6.94 4.62 1.94 1.94 0 0 1 6.94 8.5ZM5.3 10.06h3.28V20.5H5.3V10.06Zm5.34 0h3.14v1.42h.05c.44-.83 1.5-1.7 3.1-1.7 3.32 0 3.93 2.18 3.93 5.01v5.71h-3.27v-5.06c0-1.2-.02-2.75-1.67-2.75-1.68 0-1.94 1.31-1.94 2.67v5.14h-3.34V10.06Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Why Us", href: "/why-us" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "All Services", href: "/services" },
        { label: "Process", href: "/process" },
        { label: "Technology", href: "/technology" },
        { label: "Industries", href: "/industries" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blog", href: "/blog" },
        { label: "Resources", href: "/resources" },
        { label: "FAQ", href: "/resources" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Contact Us", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Industries", href: "/industries" },
        { label: "Services", href: "/services" },
      ],
    },
  ];

  const socialLinks = [
    { icon: InstagramIcon, href: siteConfig.instagramProfile, label: "Instagram" },
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto space-y-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-1">
            <Logo variant="light" className="inline-flex" />
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-lg bg-indigo-100 p-2.5 text-indigo-600 transition-all duration-200 hover:scale-110 hover:bg-indigo-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors duration-200 hover:text-indigo-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-600">
            {"\u00A9"} {currentYear} BPolyTix. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link
              href="/resources"
              className="transition-colors duration-200 hover:text-indigo-600"
            >
              Resources
            </Link>
            <Link
              href="/process"
              className="transition-colors duration-200 hover:text-indigo-600"
            >
              Process
            </Link>
            <Link
              href="/technology"
              className="transition-colors duration-200 hover:text-indigo-600"
            >
              Technology
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
