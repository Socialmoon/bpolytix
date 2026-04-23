export type Industry = {
  slug: string;
  name: string;
  summary: string;
  priorities: string[];
  playbooks: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Patient communication, appointment workflows, and issue resolution models designed around trust, compliance, and timely follow-up.",
    priorities: [
      "Appointment adherence",
      "Patient response quality",
      "Escalation turnaround",
    ],
    playbooks: [
      "Appointment reminder desks",
      "Patient support call handling",
      "Follow-up queue management",
    ],
  },
  {
    slug: "edtech",
    name: "Education and EdTech",
    summary:
      "Enrollment counseling, lead qualification, and learner support journeys that improve conversions and student lifecycle experience.",
    priorities: ["Enrollment conversion", "Lead response velocity", "Student retention support"],
    playbooks: [
      "Admission counseling support",
      "Warm lead conversion desks",
      "Student help and escalation desks",
    ],
  },
  {
    slug: "ecommerce",
    name: "Ecommerce and D2C",
    summary:
      "Customer care and post-purchase operations built for fast-growing order volumes and high service expectations.",
    priorities: ["First-response time", "Order issue resolution", "Retention and repeat purchase"],
    playbooks: [
      "Order support and tracking desks",
      "Returns and refund handling",
      "Retention and win-back outreach",
    ],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    summary:
      "Structured customer operations for onboarding, collections, and support workflows where consistency and documentation are essential.",
    priorities: ["Verification quality", "Compliance adherence", "Customer communication consistency"],
    playbooks: [
      "Customer onboarding support",
      "Collections communication desks",
      "Account support operations",
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
