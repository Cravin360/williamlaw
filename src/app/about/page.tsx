import { SiteShell } from "@/components/site-shell";

const principles = [
  "Senior lawyers leading every matter",
  "Clear advice with practical next steps",
  "Trusted service built on integrity and care",
  "Broad capability with consistently high standards",
];

const strengths = [
  {
    title: "Experienced legal leadership",
    description:
      "Clients work with seasoned counsel who bring perspective, commercial awareness, and disciplined judgment to every matter.",
  },
  {
    title: "Practical strategic advice",
    description:
      "Our guidance is built to help clients make decisions, manage risk, and move forward with confidence rather than complexity.",
  },
  {
    title: "Service that stays personal",
    description:
      "We combine responsive communication with careful attention, so clients feel supported from first conversation to final outcome.",
  },
];

const approach = [
  "We begin by understanding the client’s objectives, pressures, and desired outcome.",
  "We assess the legal position carefully and translate it into clear options and next steps.",
  "We execute with precision, keeping communication direct, timely, and focused on results.",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="grid gap-8 py-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
            Our Story
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
            Exceptional people. Clear advice. Results that matter.
          </h1>
          <p className="text-lg leading-8 text-[var(--text-secondary)]">
            At William & Dexter, we believe outstanding legal counsel starts
            with experienced lawyers who know how to guide clients with
            confidence. We focus on practical, strategic advice that helps
            individuals and businesses move forward with clarity.
          </p>
          <p className="text-lg leading-8 text-[var(--text-secondary)]">
            Every matter is handled with senior attention, sound judgment, and
            a strong commitment to achieving the right outcome. Clients rely on
            us for direct communication, careful analysis, and a service style
            that combines professionalism with genuine care.
          </p>
          <p className="text-lg leading-8 text-[var(--text-secondary)]">
            As a modern firm, William & Dexter brings together broad legal
            capability, dependable standards, and a client-first approach. We
            aim to be the legal partner clients choose when they value
            integrity, performance, and personal service.
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

      <section className="grid gap-6 py-8 lg:grid-cols-3">
        {strengths.map((item) => (
          <article
            key={item.title}
            className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_20px_50px_var(--shadow-color)]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
              {item.title}
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-secondary)]">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            Our Approach
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
            Modern legal service built on clarity and execution.
          </h2>
          <p className="mt-5 leading-7 text-[var(--text-secondary)]">
            We believe legal service should be rigorous, efficient, and easy to
            understand. That means giving clients direct access to meaningful
            advice, realistic expectations, and a clear path forward at every
            stage of a matter.
          </p>
          <div className="mt-6 space-y-4">
            {approach.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-text)]">
                  0{index + 1}
                </div>
                <p className="leading-7 text-[var(--text-soft)]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            Client Commitment
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
            Professional standards with personal attention.
          </h2>
          <div className="mt-5 space-y-5 leading-7 text-[var(--text-secondary)]">
            <p>
              William & Dexter is built for clients who want more than technical
              legal answers. They want a trusted legal partner who understands
              what is at stake, communicates clearly, and acts with purpose.
            </p>
            <p>
              We are committed to providing thoughtful representation, timely
              communication, and service that reflects both professionalism and
              respect for the client’s priorities.
            </p>
            <p>
              Whether the matter is advisory, transactional, regulatory, or
              dispute-related, our goal remains the same: deliver legal support
              that is steady, effective, and aligned with the client’s best
              interests.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
