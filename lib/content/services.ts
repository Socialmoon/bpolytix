export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  outcomes: string[];
  capabilities: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "customer-support",
    name: "Customer Support Operations",
    short: "Omnichannel support desks with measurable SLA adherence.",
    intro:
      "We design and run voice, chat, and email support operations that reduce backlog while improving customer sentiment and response consistency.",
    outcomes: [
      "Lower first-response times",
      "Improved CSAT and retention",
      "Reduced escalation volume",
    ],
    capabilities: [
      "Inbound voice and chat support",
      "Ticket triage and escalation playbooks",
      "QA scorecards and calibration reviews",
      "Knowledge base and macro governance",
    ],
    idealFor: ["D2C", "SaaS", "Healthcare", "Education"],
  },
  {
    slug: "lead-generation",
    name: "Lead Generation Programs",
    short: "High-intent outreach engines aligned with your sales motion.",
    intro:
      "BPOlytix builds structured outreach and qualification funnels that improve pipeline quality and conversion reliability across inbound and outbound channels.",
    outcomes: [
      "Higher MQL to SQL conversion",
      "Cleaner disposition discipline",
      "Faster lead handoff cycles",
    ],
    capabilities: [
      "Outbound qualification desks",
      "Inbound callback workflows",
      "CRM tagging and enrichment standards",
      "Script optimization loops with sales teams",
    ],
    idealFor: ["EdTech", "Fintech", "Real Estate", "Professional Services"],
  },
  {
    slug: "back-office",
    name: "Back-Office Processing",
    short: "Reliable processing teams for repetitive, high-volume workflows.",
    intro:
      "From data validation to transaction support, we run stable back-office operations with documented controls, throughput monitoring, and audit-ready reporting.",
    outcomes: [
      "Reduced turnaround times",
      "Lower processing error rates",
      "Predictable throughput planning",
    ],
    capabilities: [
      "Document and data processing",
      "Case queue management",
      "SOP-driven quality checks",
      "Productivity and variance reporting",
    ],
    idealFor: ["Insurance", "Logistics", "Healthcare", "Financial Operations"],
  },
  {
    slug: "inside-sales",
    name: "Inside Sales Enablement",
    short: "Performance-led tele sales and renewal teams.",
    intro:
      "We help commercial teams scale outbound and renewal activity with conversion-oriented scripts, coaching frameworks, and transparent funnel metrics.",
    outcomes: [
      "Higher contact-to-opportunity ratios",
      "Improved renewal conversion",
      "More accurate forecast inputs",
    ],
    capabilities: [
      "Outbound tele sales campaigns",
      "Renewal and retention desks",
      "Call quality coaching",
      "Pipeline analytics and review cadences",
    ],
    idealFor: ["Subscriptions", "SaaS", "Education", "Healthcare"],
  },
  {
    slug: "quality-analytics",
    name: "Quality and Performance Analytics",
    short: "Operational intelligence that translates activity into outcomes.",
    intro:
      "Our analysts build reporting frameworks that surface the quality, velocity, and conversion trends leadership teams need for faster decisions.",
    outcomes: [
      "Early risk visibility",
      "More accurate operational planning",
      "Better coaching precision",
    ],
    capabilities: [
      "KPI architecture and governance",
      "Root-cause trend analysis",
      "QA and compliance dashboards",
      "Leadership-ready performance packs",
    ],
    idealFor: ["Growth teams", "Operations leaders", "RevOps"],
  },
  {
    slug: "workforce-management",
    name: "Workforce and Capacity Management",
    short: "Demand-aware staffing models for stable service delivery.",
    intro:
      "We implement workforce planning and scheduling discipline that keeps SLA performance predictable through seasonality and campaign variability.",
    outcomes: [
      "Improved occupancy and utilization",
      "Reduced overtime volatility",
      "Stronger SLA consistency",
    ],
    capabilities: [
      "Forecasting and capacity planning",
      "Roster and shrinkage modeling",
      "Real-time queue supervision",
      "Staffing scenario simulations",
    ],
    idealFor: ["Contact centers", "Shared services", "BPO operations"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
