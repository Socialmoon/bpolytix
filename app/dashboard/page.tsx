import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "./logout-button";
import { getDashboardSubmissions } from "@/lib/firebase-store";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;
  const sessionToken = process.env.ADMIN_SESSION_TOKEN;

  if (!sessionToken || session !== sessionToken) {
    redirect("/login");
  }

  const submissions = await getDashboardSubmissions();

  return (
    <section className="section">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="card p-6 md:p-8">
          <p className="badge">Dashboard</p>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-[var(--text-strong)] md:text-5xl">
            Welcome back, Admin
          </h1>
          <p className="mt-4 text-sm leading-7 text-[var(--text-soft)]">
            You are securely signed in with admin credentials.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-[var(--surface-soft)] p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-soft)]">Today</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text-strong)]">Active</p>
            </div>
            <div className="rounded-xl bg-[var(--surface-soft)] p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-soft)]">Workspace</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text-strong)]">Secure</p>
            </div>
            <div className="rounded-xl bg-[var(--surface-soft)] p-4">
              <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-soft)]">Status</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--text-strong)]">Connected</p>
            </div>
          </div>
        </article>

        <aside className="card p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">Account Actions</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
            This page is protected using a server-side admin session cookie. Unauthenticated users
            are redirected to login.
          </p>
          <div className="mt-6">
            <LogoutButton />
          </div>
        </aside>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <article className="card p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">
            Contact Inquiries ({submissions.contact.length})
          </h2>
          <div className="mt-4 space-y-3">
            {submissions.contact.length === 0 ? (
              <p className="text-sm text-[var(--text-soft)]">No contact submissions yet.</p>
            ) : (
              submissions.contact.map((item) => (
                <article key={item.id} className="rounded-xl bg-[var(--surface-soft)] p-4">
                  <p className="break-words font-semibold text-[var(--text-strong)]">{item.name}</p>
                  <p className="mt-1 break-all text-sm text-[var(--text-soft)]">{item.email}</p>
                  <p className="break-words text-sm text-[var(--text-soft)]">{item.company}</p>
                  <p className="mt-2 break-words text-sm leading-6 text-[var(--text-soft)]">{item.message}</p>
                  <p className="mt-2 text-xs text-[var(--text-soft)]">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                </article>
              ))
            )}
          </div>
        </article>

        <article className="card p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold text-[var(--text-strong)]">
            Career Applications ({submissions.careers.length})
          </h2>
          <div className="mt-4 space-y-3">
            {submissions.careers.length === 0 ? (
              <p className="text-sm text-[var(--text-soft)]">No career applications yet.</p>
            ) : (
              submissions.careers.map((item) => (
                <article key={item.id} className="rounded-xl bg-[var(--surface-soft)] p-4">
                  <p className="break-words font-semibold text-[var(--text-strong)]">{item.fullName}</p>
                  <p className="mt-1 break-all text-sm text-[var(--text-soft)]">{item.email}</p>
                  <p className="break-words text-sm text-[var(--text-soft)]">{item.phone}</p>
                  <p className="break-words text-sm text-[var(--text-soft)]">Applied for: {item.position}</p>
                  <p className="mt-2 break-words text-sm leading-6 text-[var(--text-soft)]">{item.message}</p>
                  <p className="mt-2 text-xs text-[var(--text-soft)]">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                </article>
              ))
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
