"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { message?: string } | null;
        throw new Error(body?.message ?? "Login failed.");
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section">
      <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="card p-6 md:p-8">
          <p className="badge">Secure Access</p>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-[var(--text-strong)] md:text-5xl">
            Login to BPOlytix Dashboard
          </h1>
          <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
            Access protected campaign insights, team updates, and operations data through your
            authenticated workspace.
          </p>
          <div className="mt-7 rounded-2xl bg-[var(--surface-soft)] p-4 text-sm leading-7 text-[var(--text-soft)]">
            <p>
              This is an admin-only access page. Only approved admin credentials can open the
              dashboard.
            </p>
          </div>
          <p className="mt-5 text-sm text-[var(--text-soft)]">
            Looking to apply for a role? Visit <Link className="font-semibold text-[var(--brand)]" href="/careers">Careers</Link>.
          </p>
        </article>

        <form className="card p-6 md:p-8" onSubmit={handleSubmit}>
          <p className="mb-5 inline-flex rounded-full bg-[var(--surface-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-soft)]">
            Admin Sign-In
          </p>

          <div className="grid gap-4">
            <label className="text-sm font-medium text-[var(--text-soft)]" htmlFor="username">
              Admin Email
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
              placeholder="admin@gmail.com"
            />

            <label className="text-sm font-medium text-[var(--text-soft)]" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
              placeholder="Enter password"
            />

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Please wait..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}