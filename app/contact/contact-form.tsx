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
    <form className="space-y-6 rounded-lg border border-border/50 bg-card/50 p-8 backdrop-blur" onSubmit={onSubmit}>
      <div>
        <label className="text-sm font-medium text-foreground" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-card/50 px-4 py-2.5 text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground" htmlFor="email">
          Work Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-card/50 px-4 py-2.5 text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
          placeholder="name@company.com"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground" htmlFor="company">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-card/50 px-4 py-2.5 text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-foreground" htmlFor="message">
          What are your goals?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-card/50 px-4 py-2.5 text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground"
          placeholder="Share your business goals, challenges, and timeline"
        />
      </div>

      {status === "success" ? (
        <div className="rounded-lg bg-emerald-500/10 p-4 text-sm text-emerald-400">
          Thank you! Your inquiry has been submitted. We&apos;ll be in touch shortly.
        </div>
      ) : null}
      {status === "error" ? (
        <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-primary-foreground transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
