import { industries } from "@/lib/content/industries";
import { insightPosts } from "@/lib/content/insights";
import { services } from "@/lib/content/services";

export type NavLeaf = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  description: string;
  featured?: NavLeaf[];
  links: NavLeaf[];
};

export const navGroups: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    description: "Delivery services built for measurable customer and revenue outcomes.",
    featured: services.slice(0, 3).map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
      description: service.short,
    })),
    links: [
      { label: "All Services", href: "/services", description: "Service lines and capabilities" },
      { label: "Process", href: "/process", description: "Delivery methodology" },
      { label: "Technology", href: "/technology", description: "Enablement stack and governance" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    description: "Industry-specific operating models tuned to your customer journey.",
    featured: industries.map((industry) => ({
      label: industry.name,
      href: `/industries/${industry.slug}`,
      description: industry.summary,
    })),
    links: [{ label: "All Industries", href: "/industries", description: "Vertical playbooks" }],
  },
  {
    label: "Insights",
    href: "/blog",
    description: "Thought leadership, execution guides, and performance stories.",
    featured: insightPosts.slice(0, 2).map((post) => ({
      label: post.title,
      href: `/blog/${post.slug}`,
      description: post.category,
    })),
    links: [
      { label: "Blog", href: "/blog", description: "Articles and operational guidance" },
      { label: "Case Studies", href: "/case-studies", description: "Outcome stories" },
      { label: "Resources", href: "/resources", description: "FAQs and decision resources" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    description: "Who we are, how we work, and why clients partner with BPOlytix.",
    links: [
      { label: "About", href: "/about", description: "Mission and operating model" },
      { label: "Team", href: "/team", description: "Leadership and expertise" },
      { label: "Why Us", href: "/why-us", description: "Differentiators and trust framework" },
    ],
  },
];

export const navSecondaryLinks: NavLeaf[] = [
  { label: "Careers", href: "/careers" },
];

export const navPrimaryCta: NavLeaf = {
  label: "Book Consultation",
  href: "/contact",
};
