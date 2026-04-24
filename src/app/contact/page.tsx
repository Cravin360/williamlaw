import { SiteShell } from "@/components/site-shell";
import { company } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="grid gap-8 py-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
            Contact
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
            Arrange a confidential consultation.
          </h1>
          <p className="text-lg leading-8 text-[var(--text-secondary)]">
            Reach out to discuss your matter, request representation, or
            schedule an initial conversation about legal strategy and next
            steps.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
                Email
              </p>
              <p className="mt-3 text-lg text-[var(--text-primary)]">{company.email}</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
                Phone
              </p>
              <p className="mt-3 text-lg text-[var(--text-primary)]">{company.phone}</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-5 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
                Office
              </p>
              <p className="mt-3 text-lg text-[var(--text-primary)]">{company.address}</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
