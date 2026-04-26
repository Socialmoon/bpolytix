export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  outcomes: string[];
  capabilities: string[];
  idealFor: string[];
  image: string;
  gradient: string;
  stat: { value: string; label: string };
  process: { step: string; title: string; body: string }[];
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
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80&auto=format&fit=crop",
    gradient: "from-sky-500 to-indigo-600",
    stat: { value: "41%", label: "Avg. faster first response" },
    process: [
      { step: "01", title: "Scope & Script Design", body: "We align on channel mix, escalation rules, and script standards before any agent is deployed." },
      { step: "02", title: "Agent Training & QA Baseline", body: "Agents are trained on your product, tone, and edge cases. QA scorecards are calibrated before go-live." },
      { step: "03", title: "Live Operations", body: "Governed delivery with daily queue monitoring, weekly QA reviews, and stakeholder reporting." },
      { step: "04", title: "Continuous Improvement", body: "Coaching loops, script updates, and performance calibrations keep quality improving week over week." },
    ],
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
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80&auto=format&fit=crop",
    gradient: "from-amber-500 to-rose-500",
    stat: { value: "34%", label: "Avg. lift in lead conversion" },
    process: [
      { step: "01", title: "ICP & Script Alignment", body: "We define the ideal customer profile and build qualification scripts with your sales team." },
      { step: "02", title: "CRM & Disposition Setup", body: "Tagging standards, handoff workflows, and disposition hygiene are configured before outreach begins." },
      { step: "03", title: "Outreach Execution", body: "Agents run structured outbound and inbound callback workflows with daily performance tracking." },
      { step: "04", title: "Pipeline Review Loops", body: "Weekly joint reviews with sales keep scripts, objection handling, and qualification criteria aligned." },
    ],
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
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop",
    gradient: "from-emerald-500 to-teal-600",
    stat: { value: "99.2%", label: "Avg. processing accuracy" },
    process: [
      { step: "01", title: "SOP Documentation", body: "Every workflow is documented with step-by-step SOPs, error definitions, and quality thresholds." },
      { step: "02", title: "Team Onboarding", body: "Processors are trained on your specific workflow, tools, and quality standards before handling live volume." },
      { step: "03", title: "Throughput Monitoring", body: "Daily productivity tracking and variance reporting keep output predictable and auditable." },
      { step: "04", title: "Quality Audits", body: "Regular sampling and error analysis drive continuous accuracy improvements across the team." },
    ],
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
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop",
    gradient: "from-violet-500 to-purple-600",
    stat: { value: "28%", label: "Avg. renewal conversion lift" },
    process: [
      { step: "01", title: "Sales Motion Alignment", body: "We map your sales funnel, define conversion criteria, and build scripts around your product's value proposition." },
      { step: "02", title: "Agent Coaching Framework", body: "Agents are coached on objection handling, tone, and conversion techniques before live calls." },
      { step: "03", title: "Campaign Execution", body: "Structured outbound campaigns with daily call targets, disposition tracking, and pipeline reporting." },
      { step: "04", title: "Funnel Analytics", body: "Weekly pipeline reviews surface conversion bottlenecks and drive script and targeting improvements." },
    ],
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    gradient: "from-indigo-500 to-blue-600",
    stat: { value: "3×", label: "Faster issue identification" },
    process: [
      { step: "01", title: "KPI Architecture", body: "We define the metrics that matter for your operation — tied to business outcomes, not just activity counts." },
      { step: "02", title: "Dashboard Build", body: "Leadership-ready dashboards are built and configured around your reporting cadence and stakeholder needs." },
      { step: "03", title: "Weekly Governance", body: "Regular analytics reviews surface trends, risks, and coaching opportunities before they become problems." },
      { step: "04", title: "Continuous Refinement", body: "KPI frameworks evolve as your operation grows — we update metrics, thresholds, and reports as needed." },
    ],
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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop",
    gradient: "from-rose-500 to-pink-600",
    stat: { value: "22%", label: "Avg. reduction in overtime" },
    process: [
      { step: "01", title: "Demand Forecasting", body: "We model historical volume patterns and seasonal trends to build accurate staffing forecasts." },
      { step: "02", title: "Roster Design", body: "Shift schedules are built around forecast demand with shrinkage buffers and coverage redundancy." },
      { step: "03", title: "Real-Time Supervision", body: "Queue supervisors monitor live adherence and make intraday adjustments to protect SLA targets." },
      { step: "04", title: "Scenario Planning", body: "Regular capacity reviews model growth scenarios and identify staffing risks before they impact delivery." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
