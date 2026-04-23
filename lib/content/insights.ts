export type InsightPost = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  heroLabel: string;
  gradient: string;
  accent: string;
  statLabel: string;
  statValue: string;
  body: string[];
  takeaways: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  seoTitle: string;
  seoDescription: string;
  publishedAt: string;
  gradient: string;
  accent: string;
  statLabel: string;
  statValue: string;
  snapshot: string[];
  outcomes: string[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: "choosing-the-right-bpo-partner",
    title: "How to Choose the Right BPO Partner for Your Growth Stage",
    category: "BPO Strategy",
    readTime: "6 min read",
    summary:
      "A practical framework to evaluate domain expertise, quality governance, reporting transparency, and scalability before onboarding a BPO team.",
    author: "BPOlytix Strategy Desk",
    publishedAt: "2026-03-14T09:00:00.000Z",
    updatedAt: "2026-04-18T09:00:00.000Z",
    tags: ["BPO Strategy", "Vendor Selection", "Operations Governance"],
    seoTitle: "How to Choose the Right BPO Partner for Your Growth Stage",
    seoDescription:
      "Use this framework to assess BPO expertise, governance, reporting quality, and scale-readiness before committing to a delivery partner.",
    heroLabel: "Vendor selection",
    gradient: "from-sky-500 via-cyan-500 to-indigo-600",
    accent: "bg-sky-500/12 text-sky-700",
    statLabel: "Priority",
    statValue: "Partner fit",
    body: [
      "A strong BPO partnership starts with clarity around outcomes, not just activity. Teams that only optimize for call volume often miss conversion quality, escalations, and customer sentiment. The right partner should be able to describe what success looks like in your language, with measurable leading indicators and practical governance rituals.",
      "Leadership teams should evaluate domain expertise, reporting depth, hiring maturity, and escalation handling before rollout. Those foundations determine whether quality improves as volume grows or whether complexity simply gets outsourced. If a partner cannot explain how they maintain quality during peak volume, they are not ready for your next stage of growth.",
      "Pilot-first engagement with defined checkpoints is still the safest way to validate fit and operating discipline before full-scale expansion. A short pilot with agreed service levels, QA reviews, and reporting expectations reveals much more than a polished pitch deck ever will.",
    ],
    takeaways: [
      "Evaluate BPO partners on governance, not just pricing.",
      "Ask for proof of quality control during high-volume periods.",
      "Run a pilot with clear checkpoints before scaling.",
    ],
  },
  {
    slug: "quality-metrics-that-predict-outcomes",
    title: "5 Call Center Quality Metrics That Actually Predict Outcomes",
    category: "Quality Management",
    readTime: "5 min read",
    summary:
      "Go beyond call volume and track conversion quality, first-contact resolution, QA score consistency, and response velocity for better decisions.",
    author: "BPOlytix Quality Team",
    publishedAt: "2026-03-28T09:00:00.000Z",
    updatedAt: "2026-04-16T09:00:00.000Z",
    tags: ["Quality Management", "Call Center KPIs", "Performance Analytics"],
    seoTitle: "5 Call Center Quality Metrics That Actually Predict Outcomes",
    seoDescription:
      "Track the call center metrics that matter most for revenue protection, customer trust, and smarter operational decisions.",
    heroLabel: "Performance analytics",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    accent: "bg-fuchsia-500/12 text-fuchsia-700",
    statLabel: "Focus",
    statValue: "Predictive KPIs",
    body: [
      "Vanity metrics hide risk. The quality signals that matter most are the ones tied directly to customer trust, revenue protection, and operational consistency. A dashboard full of activity counts can still miss churn risk, poor handoffs, and compliance gaps if the wrong metrics are being tracked.",
      "Track first-contact resolution, conversion quality, QA variance, and escalation turnaround to identify execution gaps early. These indicators reveal whether customers are actually getting what they need and whether your teams are driving outcomes instead of simply processing volume.",
      "Use these metrics in weekly governance forums, then tie coaching actions back to the same scorecards. When leaders, team leads, and QA teams review the same indicators together, it becomes much easier to connect performance issues to practical fixes and measurable lift.",
    ],
    takeaways: [
      "Choose metrics tied to outcomes, not activity alone.",
      "Use QA variance and escalation speed to surface hidden risk.",
      "Connect scorecards directly to coaching and weekly governance.",
    ],
  },
  {
    slug: "lead-generation-sales-trust",
    title: "Building a Lead Generation Process That Sales Teams Trust",
    category: "Lead Generation",
    readTime: "7 min read",
    summary:
      "Learn how script alignment, disposition discipline, and feedback loops between BPO and sales improve lead-to-opportunity conversion rates.",
    author: "BPOlytix Revenue Operations",
    publishedAt: "2026-04-05T09:00:00.000Z",
    updatedAt: "2026-04-20T09:00:00.000Z",
    tags: ["Lead Generation", "Sales Alignment", "Pipeline Quality"],
    seoTitle: "Building a Lead Generation Process That Sales Teams Trust",
    seoDescription:
      "Improve lead quality and pipeline trust with stronger qualification criteria, cleaner dispositions, and better feedback loops.",
    heroLabel: "Pipeline quality",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    accent: "bg-emerald-500/12 text-emerald-700",
    statLabel: "Outcome",
    statValue: "Sales trust",
    body: [
      "When sales teams distrust lead quality, conversion slows and pipeline forecasting weakens. The first correction is shared qualification criteria. If operations and sales define quality differently, every handoff becomes a source of friction and lost momentum.",
      "The second is disposition hygiene. Tags, statuses, and handoff notes must be reliable enough for follow-up prioritization and pipeline review. When dispositions are inconsistent, revenue teams lose confidence in reports and waste time re-verifying lead quality manually.",
      "Joint reviews between operations and sales keep scripts, objection handling, and qualification assumptions aligned to market reality. That shared review loop is what turns lead generation from a volume engine into a trusted source of pipeline creation.",
    ],
    takeaways: [
      "Create one shared definition of a qualified lead.",
      "Treat CRM dispositions as operational infrastructure.",
      "Run recurring feedback loops between sales and lead-gen teams.",
    ],
  },
  {
    slug: "domestic-bpo-customer-retention",
    title: "How Domestic BPO Teams Improve Customer Retention",
    category: "Customer Support",
    readTime: "4 min read",
    summary:
      "Explore how language comfort, local context, and structured escalation standards reduce churn and increase customer confidence.",
    author: "BPOlytix Customer Operations",
    publishedAt: "2026-04-11T09:00:00.000Z",
    updatedAt: "2026-04-21T09:00:00.000Z",
    tags: ["Customer Support", "Retention", "Domestic BPO"],
    seoTitle: "How Domestic BPO Teams Improve Customer Retention",
    seoDescription:
      "See how domestic BPO teams improve retention with language comfort, context-aware support, and tighter escalation handling.",
    heroLabel: "Customer retention",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    accent: "bg-amber-500/12 text-amber-700",
    statLabel: "Advantage",
    statValue: "Context clarity",
    body: [
      "Retention outcomes improve when support feels context-aware and fast. Domestic operations can create that advantage with language familiarity, cultural alignment, and stronger communication comfort. Customers notice when support feels natural, not translated or delayed.",
      "Clear escalation paths and ownership standards prevent tickets from stalling across handoffs. Retention suffers when customers repeat themselves or wait too long for resolution, so strong escalation design matters just as much as frontline empathy.",
      "Teams that combine empathy with process discipline see stronger repeat purchase behavior and lower churn over time. The goal is not only resolving issues quickly, but making every interaction feel reliable enough to reinforce trust in the brand.",
    ],
    takeaways: [
      "Language comfort improves customer confidence quickly.",
      "Escalation clarity is a retention lever, not just an ops process.",
      "Domestic BPO works best when empathy and discipline coexist.",
    ],
  },
];

export const caseStudies = [
  {
    slug: "edtech-enrolment-campaign",
    title: "EdTech Enrolment Campaign",
    industry: "Education",
    summary:
      "A conversion-focused enrolment desk that improved speed-to-contact and lead quality for a growing EdTech brand.",
    challenge: "Low response rate from warm leads and high callback delays.",
    solution:
      "BPOlytix deployed a focused conversion desk with CRM tagging discipline and same-day callback windows.",
    seoTitle: "EdTech Enrolment Campaign Case Study",
    seoDescription:
      "See how BPOlytix improved lead-to-conversion performance and callback speed for an EdTech enrolment campaign.",
    publishedAt: "2026-03-09T09:00:00.000Z",
    gradient: "from-sky-500 via-cyan-500 to-indigo-600",
    accent: "bg-sky-500/12 text-sky-700",
    statLabel: "Lift achieved",
    statValue: "34% higher conversions",
    snapshot: [
      "Same-day callback windows",
      "Stronger CRM tagging discipline",
      "Clearer qualification signals for sales",
    ],
    outcomes: [
      "Lead-to-conversion ratio improved by 34% in 8 weeks",
      "Average callback delay reduced by 39%",
      "Sales team acceptance of MQLs improved",
    ],
  },
  {
    slug: "healthcare-appointment-desk",
    title: "Healthcare Appointment Desk",
    industry: "Healthcare",
    summary:
      "A structured reminder and patient-support workflow that reduced missed follow-ups and improved service confidence.",
    challenge: "Missed follow-ups created scheduling gaps and patient dissatisfaction.",
    solution:
      "The team introduced structured reminder calls, multilingual support, and quality score tracking for every queue.",
    seoTitle: "Healthcare Appointment Desk Case Study",
    seoDescription:
      "Learn how BPOlytix improved appointment adherence and escalation closure speed for a healthcare support desk.",
    publishedAt: "2026-03-24T09:00:00.000Z",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    accent: "bg-emerald-500/12 text-emerald-700",
    statLabel: "Operational win",
    statValue: "27% fewer no-shows",
    snapshot: [
      "Reminder calls across critical queues",
      "Multilingual patient communication",
      "Quality score visibility for supervisors",
    ],
    outcomes: [
      "No-show rates reduced by 27%",
      "Patient feedback scores increased",
      "Escalation closure times improved",
    ],
  },
  {
    slug: "d2c-support-ramp-up",
    title: "D2C Customer Support Ramp-up",
    industry: "Ecommerce",
    summary:
      "A blended voice-and-chat support operation built to absorb order growth without letting response quality slip.",
    challenge: "Rapid order growth caused slow support replies and inconsistent handling.",
    solution:
      "BPOlytix established a blended voice and chat operation with issue categorization and escalation rules.",
    seoTitle: "D2C Customer Support Ramp-up Case Study",
    seoDescription:
      "Discover how BPOlytix improved response times and backlog control during a D2C support ramp-up.",
    publishedAt: "2026-04-08T09:00:00.000Z",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    accent: "bg-fuchsia-500/12 text-fuchsia-700",
    statLabel: "Service impact",
    statValue: "41% faster responses",
    snapshot: [
      "Blended voice and chat delivery",
      "Issue categorization for cleaner routing",
      "Escalation rules for faster closure",
    ],
    outcomes: [
      "First-response times improved by 41%",
      "Backlog aging reduced significantly",
      "CSAT increased quarter-over-quarter",
    ],
  },
] satisfies CaseStudy[];

export function getInsightBySlug(slug: string) {
  return insightPosts.find((post) => post.slug === slug);
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
