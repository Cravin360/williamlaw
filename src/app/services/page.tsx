import { SiteShell } from "@/components/site-shell";
import { differentiators, services } from "@/lib/site-content";

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="max-w-4xl space-y-6 py-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
          Services
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
          Legal services structured around risk, protection, and resolution.
        </h1>
        <p className="text-lg leading-8 text-[var(--text-secondary)]">
          We advise clients on the legal issues that shape transactions,
          operations, governance, and disputes, with guidance that is practical
          and ready to act on.
        </p>
      </section>

      <section className="grid gap-6 py-10 lg:grid-cols-2">
        {services.map((service, index) => (
          <article
            key={service.name}
            className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
              0{index + 1}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
              {service.name}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
              {service.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 py-10 lg:grid-cols-4">
        {differentiators.map((item) => (
          <div
            key={item}
            className="rounded-[1.5rem] border border-[var(--accent-border)] bg-[var(--accent-soft)] p-5 text-sm leading-7 text-[var(--text-soft)]"
          >
            {item}
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
