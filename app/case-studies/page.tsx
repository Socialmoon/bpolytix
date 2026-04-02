const studies = [
  {
    title: "EdTech Enrolment Campaign",
    challenge: "Low response rate from warm leads and high callback delays.",
    solution:
      "BPOlytix deployed a 5-agent conversion desk with CRM tagging and same-day callback windows.",
    result: "Lead-to-conversion ratio improved by 34% in 8 weeks.",
  },
  {
    title: "Healthcare Appointment Desk",
    challenge: "Missed follow-ups created scheduling gaps and patient dissatisfaction.",
    solution:
      "Introduced structured reminder calls, multilingual support, and quality score tracking.",
    result: "No-show rates reduced by 27% with higher patient feedback scores.",
  },
  {
    title: "D2C Customer Support Ramp-up",
    challenge: "Rapid order growth caused slow support replies and inconsistent handling.",
    solution:
      "Established a blended voice and chat queue with issue categorization and escalation rules.",
    result: "First-response times improved by 41% within the first quarter.",
  },
];

export default function CaseStudiesPage() {
  return (
    <section className="section">
      <div className="max-w-3xl hero-reveal">
        <p className="badge">Case Studies</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-[var(--text-strong)] md:text-5xl">
          Outcome-driven stories from real operating playbooks
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--text-soft)]">
          These examples reflect the kind of measurable impact BPOlytix is designed to deliver
          through disciplined execution and customer-first workflows.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        {studies.map((study) => (
          <article key={study.title} className="card p-6 md:p-8">
            <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">
              {study.title}
            </h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.11em] text-[var(--text-soft)]">
              Challenge
            </p>
            <p className="mt-1 leading-7 text-[var(--text-soft)]">{study.challenge}</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.11em] text-[var(--text-soft)]">
              Solution
            </p>
            <p className="mt-1 leading-7 text-[var(--text-soft)]">{study.solution}</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.11em] text-[var(--text-soft)]">
              Result
            </p>
            <p className="mt-1 text-lg font-semibold text-[var(--text-strong)]">{study.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}