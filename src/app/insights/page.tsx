import { SiteShell } from "@/components/site-shell";
import { insights } from "@/lib/site-content";

export default function InsightsPage() {
  return (
    <SiteShell>
      <section className="max-w-4xl space-y-6 py-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
          Insights
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
          Legal commentary on regulation, governance, and dispute risk.
        </h1>
        <p className="text-lg leading-8 text-[var(--text-secondary)]">
          This section presents timely analysis and practical observations that
          help clients stay informed and make better legal decisions.
        </p>
      </section>

      <section className="grid gap-6 py-10">
        {insights.map((post) => (
          <article
            key={post.slug}
            className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
              Article
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
              {post.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
              {post.excerpt}
            </p>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
