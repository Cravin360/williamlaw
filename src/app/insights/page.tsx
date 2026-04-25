import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { insights } from "@/lib/site-content";

const categories = [
  "Corporate strategy",
  "Regulation and compliance",
  "Board and governance",
  "Commercial contracting",
];

const articleMeta = [
  {
    category: "Featured Analysis",
    readTime: "6 min read",
    imageLabel: "Dummy editorial image",
  },
  {
    category: "Compliance Briefing",
    readTime: "5 min read",
    imageLabel: "Dummy compliance image",
  },
  {
    category: "Board Update",
    readTime: "4 min read",
    imageLabel: "Dummy governance image",
  },
  {
    category: "Commercial Insight",
    readTime: "5 min read",
    imageLabel: "Dummy contracts image",
  },
];

const archiveLinks = [
  "Latest analysis",
  "Leadership updates",
  "Compliance notes",
  "Transaction briefings",
  "Contract strategy",
];

const insightStats = [
  { value: "03", label: "Current articles" },
  { value: "04", label: "Editorial topics" },
  { value: "24/7", label: "Business risk awareness" },
];

export default function InsightsPage() {
  const [featuredPost, ...otherPosts] = insights;

  return (
    <SiteShell>
      <section className="grid gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
            Insights
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
            Commentary, briefings, and practical legal perspective.
          </h1>
          <p className="text-lg leading-8 text-[var(--text-secondary)]">
            William & Dexter shares concise legal insight on governance,
            regulation, contracts, and the decisions that shape business risk.
            Each piece is written to be commercially useful, timely, and easy
            to act on.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-muted)]"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_20px_60px_var(--shadow-color)]">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-[var(--accent-border)] bg-[linear-gradient(135deg,rgba(201,168,111,0.18),rgba(19,27,38,0.78))]">
            <div className="aspect-[4/5] w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.18))]" />
            <div className="absolute inset-x-5 top-5 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur">
              Dummy Editorial Image
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                Editorial Layout Placeholder
              </p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/85">
                Replace this visual block with a branded insights banner,
                article photography, or a custom campaign image later.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <article className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_50px_var(--shadow-color)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-[var(--accent-border)] bg-[linear-gradient(140deg,rgba(201,168,111,0.18),rgba(16,25,36,0.78))]">
            <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.18))]" />
            <div className="absolute inset-5 flex items-end">
              <div className="rounded-[1.35rem] border border-white/10 bg-black/30 px-5 py-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                  {articleMeta[0].imageLabel}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.26em] text-[var(--accent-text)]">
              {articleMeta[0].category}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
              {featuredPost.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              {featuredPost.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--text-muted)]">
              <span className="rounded-full border border-[var(--border)] px-4 py-2">
                {articleMeta[0].readTime}
              </span>
              <span className="rounded-full border border-[var(--border)] px-4 py-2">
                Editorial Note
              </span>
            </div>
            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:brightness-105"
              >
                Discuss This Topic
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section className="grid gap-8 py-8 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
        <aside className="lg:sticky lg:top-28">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_50px_var(--shadow-color)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
              Archive
            </p>
            <div className="mt-5 grid gap-2">
              {archiveLinks.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--text-secondary)]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3">
              {insightStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-soft)] px-4 py-4"
                >
                  <p className="text-2xl font-semibold text-[var(--text-primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="grid gap-6 lg:grid-cols-2">
          {otherPosts.map((post, index) => (
            <article
              key={post.slug}
              className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_50px_var(--shadow-color)]"
            >
              <div className="relative overflow-hidden rounded-[1.4rem] border border-[var(--accent-border)] bg-[linear-gradient(135deg,rgba(201,168,111,0.18),rgba(17,25,36,0.76))]">
                <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.18))]" />
                <div className="absolute inset-x-4 bottom-4 rounded-[1.15rem] border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                    {articleMeta[index + 1]?.imageLabel ?? "Dummy article image"}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[var(--accent-text)]">
                {articleMeta[index + 1]?.category ?? "Article"}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
                {post.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between gap-3 text-sm text-[var(--text-muted)]">
                <span>{articleMeta[index + 1]?.readTime ?? "5 min read"}</span>
                <span>William & Dexter</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            Insight Focus
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
            Legal commentary that stays useful beyond the headline.
          </h2>
          <p className="mt-5 leading-7 text-[var(--text-secondary)]">
            We focus on topics that matter to leadership teams, operators, and
            clients facing evolving legal demands. The goal is not just to
            inform, but to help readers identify risks, spot priorities, and
            make more confident decisions.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            Stay Connected
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
            Ask about a topic or request tailored legal guidance.
          </h2>
          <p className="mt-5 leading-7 text-[var(--text-secondary)]">
            If one of these issues affects your business, team, or transaction,
            we can provide advice shaped to your exact context instead of a
            generic checklist.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:brightness-105"
            >
              Contact the Firm
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-[var(--accent-border)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
