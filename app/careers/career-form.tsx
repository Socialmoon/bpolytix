"use client";

import { useState } from "react";

type CareerFormData = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
};

type Opening = {
  role: string;
  location: string;
  type: string;
};

const initialState: CareerFormData = {
  fullName: "",
  email: "",
  phone: "",
  position: "",
  message: "",
};

export default function CareerForm({ openings }: { openings: Opening[] }) {
  const [form, setForm] = useState<CareerFormData>(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  function update<K extends keyof CareerFormData>(key: K, value: CareerFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setError("");

    try {
      const res = await fetch("/api/careers", {
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
      <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">Apply Now</h2>
      <div className="mt-5 grid gap-4">
        <label className="text-sm font-medium text-[var(--text-soft)]" htmlFor="fullName">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={form.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
          placeholder="Your full name"
        />

        <label className="text-sm font-medium text-[var(--text-soft)]" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
          placeholder="name@email.com"
        />

        <label className="text-sm font-medium text-[var(--text-soft)]" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
          placeholder="Your contact number"
        />

        <label className="text-sm font-medium text-[var(--text-soft)]" htmlFor="position">
          Position Applied For
        </label>
        <select
          id="position"
          name="position"
          required
          className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
          value={form.position}
          onChange={(e) => update("position", e.target.value)}
        >
          <option value="" disabled>
            Select a role
          </option>
          {openings.map((job) => (
            <option key={job.role} value={job.role}>
              {job.role}
            </option>
          ))}
        </select>

        <label className="text-sm font-medium text-[var(--text-soft)]" htmlFor="message">
          Tell us about your experience
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
          placeholder="Share your relevant experience"
        />

        {status === "success" ? (
          <p className="text-sm text-green-700">Application submitted successfully.</p>
        ) : null}
        {status === "error" ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </div>
    </form>
  );
}
