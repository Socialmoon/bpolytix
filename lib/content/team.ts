export type SocialLink = {
  platform: "linkedin" | "instagram" | "x" | "email";
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  department: string;
  bio: string;
  photo: string;          // path under /public, e.g. "/team/kaif.jpg"
  gradient: string;       // fallback when no photo
  accent: string;
  featured?: boolean;
  socials: SocialLink[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Kaif",
    role: "Founder & CEO",
    department: "Leadership",
    bio: "Kaif founded BPOlytix with a clear vision: build a BPO company that competes on quality and accountability, not just cost. He leads company strategy, client partnerships, and the overall direction of every delivery program — ensuring BPOlytix stays execution-first at every stage of growth.",
    photo: "/team/kaif.jpg",
    gradient: "from-violet-600 via-indigo-600 to-blue-600",
    accent: "text-violet-600",
    featured: true,
    socials: [
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "x", href: "https://x.com" },
      { platform: "email", href: "mailto:kaif@bpolytix.com" },
    ],
  },
  {
    name: "Vaibhav Kumar",
    role: "Chief Technology Officer",
    department: "Technology",
    bio: "Vaibhav leads BPOlytix's technology vision and engineering direction. He architects the systems, integrations, and platforms that power reliable delivery — ensuring every tool we use is secure, scalable, and built to support operational excellence.",
    photo: "/team/vaibhav.jpg",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    accent: "text-cyan-600",
    socials: [
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "x", href: "https://x.com" },
      { platform: "email", href: "mailto:vaibhav@bpolytix.com" },
    ],
  },
  {
    name: "Avinash",
    role: "Strategic Advisor",
    department: "Advisory",
    bio: "Avinash brings years of strategic consulting experience to BPOlytix, advising on growth planning, market positioning, and operational scale. His guidance shapes how BPOlytix approaches new verticals and long-term client relationships.",
    photo: "/team/avinash.jpg",
    gradient: "from-slate-700 via-slate-600 to-slate-500",
    accent: "text-slate-600",
    socials: [
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "x", href: "https://x.com" },
      { platform: "email", href: "mailto:avinash@bpolytix.com" },
    ],
  },
  {
    name: "Hadi",
    role: "Operations Manager",
    department: "Operations",
    bio: "Hadi oversees day-to-day delivery operations across all active client programs. He ensures teams are staffed, processes are followed, and SLAs are met — keeping every engagement running smoothly from pilot through to steady-state.",
    photo: "/team/hadi.jpg",
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    accent: "text-sky-600",
    socials: [
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "email", href: "mailto:hadi@bpolytix.com" },
    ],
  },
  {
    name: "Aditya",
    role: "Marketing Lead & Team Lead",
    department: "Marketing",
    bio: "Aditya drives BPOlytix's marketing strategy and leads his team with a performance-first mindset. He manages brand presence, content, and campaign execution while also mentoring team members to deliver consistently high-quality work.",
    photo: "/team/aditya.jpg",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    accent: "text-amber-600",
    socials: [
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "x", href: "https://x.com" },
      { platform: "email", href: "mailto:aditya@bpolytix.com" },
    ],
  },
  {
    name: "Nadeem",
    role: "Technical Team Lead",
    department: "Technology",
    bio: "Nadeem leads the technical team, overseeing system integrations, tooling, and the technology infrastructure that powers BPOlytix operations. He ensures every platform and workflow is reliable, secure, and built to scale.",
    photo: "/team/nadeem.jpg",
    gradient: "from-emerald-500 via-green-500 to-teal-600",
    accent: "text-emerald-600",
    socials: [
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "x", href: "https://x.com" },
      { platform: "email", href: "mailto:nadeem@bpolytix.com" },
    ],
  },
  {
    name: "Sadiq",
    role: "Field Executive",
    department: "Operations",
    bio: "Sadiq is on the ground ensuring client-facing operations run without friction. He handles field coordination, on-site execution, and real-time problem solving — the kind of work that keeps delivery reliable when it matters most.",
    photo: "/team/sadiq.jpg",
    gradient: "from-pink-500 via-fuchsia-500 to-purple-600",
    accent: "text-pink-600",
    socials: [
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "instagram", href: "https://instagram.com" },
      { platform: "email", href: "mailto:sadiq@bpolytix.com" },
    ],
  },
];
