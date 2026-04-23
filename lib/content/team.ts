export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Aarav Mehta",
    role: "Operations Director",
    bio: "Leads delivery governance and client operations strategy across service lines.",
  },
  {
    name: "Naina Kapoor",
    role: "Head of Customer Experience",
    bio: "Designs support playbooks that balance service quality with scale.",
  },
  {
    name: "Rohan Verma",
    role: "Performance and Analytics Lead",
    bio: "Builds KPI systems and insight loops for campaign optimization.",
  },
  {
    name: "Sana Iqbal",
    role: "Workforce and Quality Manager",
    bio: "Owns staffing stability, QA calibration, and coaching programs.",
  },
];
