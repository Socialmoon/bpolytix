"use client";

import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { message?: string } | null;
        throw new Error(body?.message ?? "Submission failed.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Submission failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="card p-6 md:p-8" onSubmit={onSubmit}>
      <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">Project Inquiry</h2>
      <div className="mt-5 grid gap-4">
        <label className="text-sm font-medium text-[var(--text-soft)]" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 outline-none ring-0 transition focus:border-[var(--brand)]"
          placeholder="Enter your full name"
        />

        <label className="text-sm font-medium text-[var(--text-soft)]" htmlFor="email">
          Work Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 outline-none ring-0 transition focus:border-[var(--brand)]"
          placeholder="name@company.com"
        />

        <label className="text-sm font-medium text-[var(--text-soft)]" htmlFor="company">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 outline-none ring-0 transition focus:border-[var(--brand)]"
          placeholder="Your company name"
        />

        <label className="text-sm font-medium text-[var(--text-soft)]" htmlFor="message">
          What outcomes are you targeting?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 outline-none ring-0 transition focus:border-[var(--brand)]"
          placeholder="Share goals, volumes, and timelines"
        />

        {status === "success" ? (
          <p className="text-sm text-green-700">Thank you. Your inquiry has been submitted.</p>
        ) : null}
        {status === "error" ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}
