import { SiteShell } from "@/components/site-shell";

const principles = [
  "Commercial clarity over legal theatre",
  "Senior attention instead of delegated complexity",
  "Systems that scale with the business",
  "Measured risk-taking with defensible controls",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="grid gap-8 py-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
            About
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
            A law practice grounded in judgment, service, and preparation.
          </h1>
          <p className="text-lg leading-8 text-[var(--text-secondary)]">
            William & Dexter serves clients who need careful legal analysis,
            practical advice, and responsive counsel. The practice is built on
            close client relationships, disciplined advocacy, and dependable
            execution across sensitive matters.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Operating Principles
          </p>
          <div className="mt-6 space-y-4">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-4 text-[var(--text-soft)]"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
