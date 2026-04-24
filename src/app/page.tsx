import Link from "next/link";
import { ConsultationModal } from "@/components/consultation-modal";
import { HeroBackgroundVideo } from "@/components/hero-background-video";
import { SiteShell } from "@/components/site-shell";
import {
  company,
  differentiators,
  insights,
  services,
} from "@/lib/site-content";

const metrics = [
  { value: "24h", label: "Response time for urgent client matters" },
  { value: "25+", label: "Years of combined legal and commercial judgment" },
  { value: "Cross-Border", label: "Counsel for domestic and international work" },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden pb-16 pt-8">
        <HeroBackgroundVideo />
        <div className="relative z-10 grid gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-8 lg:py-12">
          <div className="space-y-8">
          <span className="inline-flex rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent-text)]">
            Trusted Counsel for Complex Legal Matters
          </span>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-6xl">
              Professional legal representation with the clarity and discretion
              serious clients expect.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              {company.description} We advise businesses, executives, and
              private clients on transactions, risk management, governance, and
              sensitive disputes with a steady, strategic approach.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ConsultationModal />
            <Link
              href="/services"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
            >
              View Practice Areas
            </Link>
          </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                    Practice Focus
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
                    Corporate, regulatory, and dispute-sensitive counsel
                  </h2>
                </div>
                <div className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent-text)]">
                  Client Matters Open
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <p
                    key={metric.label}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4"
                  >
                    <span className="block text-2xl font-semibold text-[var(--text-primary)]">
                      {metric.value}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-[var(--text-muted)]">
                      {metric.label}
                    </span>
                  </p>
                ))}
              </div>
              <div className="rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-soft)] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent-text)]">
                  Why Clients Retain Us
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {differentiators.map((item) => (
                    <p
                      key={item}
                      className="rounded-xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--text-soft)]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 py-16 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.name}
            className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-text)]">
              Practice Area
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
              {service.name}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              {service.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
            Our Approach
          </p>
          <h2 className="text-4xl font-semibold text-[var(--text-primary)]">
            Careful preparation, direct advice, and a courtroom-ready mindset.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              Clear communication
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
              Clients receive concise guidance, practical next steps, and legal
              advice framed around outcomes, exposure, and business impact.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6">
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              Dependable judgment
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
              Every engagement is handled with close attention to detail,
              confidentiality, and the level of preparation expected from a
              professional law firm.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
              Legal Insights
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[var(--text-primary)]">
              Commentary on legal developments affecting clients and counsel.
            </h2>
          </div>
          <Link
            href="/insights"
            className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
          >
            Read all insights
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {insights.map((post) => (
            <article
              key={post.slug}
              className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
                Insight
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
                {post.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
