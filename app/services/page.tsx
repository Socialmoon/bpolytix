const serviceGroups = [
  {
    title: "Customer Interaction Services",
    points: [
      "Inbound and outbound calling",
      "Email and chat customer support",
      "Appointment scheduling and confirmations",
      "Feedback, survey, and verification calls",
    ],
  },
  {
    title: "Sales and Revenue Operations",
    points: [
      "Lead qualification and nurturing",
      "Conversion-focused tele-sales campaigns",
      "Order support and upsell workflows",
      "Daily KPI dashboards for sales teams",
    ],
  },
  {
    title: "Data and Process Management",
    points: [
      "CRM data hygiene and pipeline updates",
      "Call recording and interaction analytics",
      "Performance scorecards and quality audits",
      "Back-office process support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="max-w-3xl hero-reveal">
        <p className="badge">Services</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-[var(--text-strong)] md:text-5xl">
          End-to-end BPO services for customer growth and operational stability
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--text-soft)]">
          Inspired by high-performing global BPM models, BPOlytix combines human expertise,
          process discipline, and practical technology to improve customer outcomes at scale.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {serviceGroups.map((group) => (
          <article key={group.title} className="card p-6">
            <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--text-soft)]">
              {group.points.map((point) => (
                <li key={point} className="rounded-lg bg-[var(--surface-soft)] px-3 py-2">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 card p-6 md:p-8">
        <h2 className="font-display text-3xl tracking-tight text-[var(--text-strong)]">
          Technology Stack
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-soft)]">
          We run a practical stack with Zoho CRM, cloud dialers such as CallingPro or CloudTalk,
          and structured call analytics for manager visibility and agent performance improvement.
        </p>
      </div>
    </section>
  );
}