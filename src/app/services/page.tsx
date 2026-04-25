import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { differentiators, services } from "@/lib/site-content";

const serviceDetails = [
  {
    id: "corporate-advisory",
    label: "Core Advisory",
    title: "Corporate Advisory",
    summary:
      "Ongoing counsel for governance, board decisions, restructuring, and day-to-day legal strategy.",
    imageLabel: "Corporate advisory",
    imageCaption: "Board advisory, governance planning, and leadership counsel",
    imageSrc: "/images/service-advisory.svg",
  },
  {
    id: "transactions",
    label: "Deals",
    title: "Transactions",
    summary:
      "Support for fundraising, M&A, commercial contracts, and strategic expansion with practical deal execution.",
    imageLabel: "Transactions",
    imageCaption: "Structured deal support for growth, investment, and expansion",
    imageSrc: "/images/service-transactions.svg",
  },
  {
    id: "regulatory-readiness",
    label: "Compliance",
    title: "Regulatory Readiness",
    summary:
      "Risk frameworks for privacy, AI, licensing, and operational compliance across changing business environments.",
    imageLabel: "Regulatory readiness",
    imageCaption: "Compliance systems designed for operational resilience",
    imageSrc: "/images/service-compliance.svg",
  },
  {
    id: "dispute-prevention",
    label: "Risk",
    title: "Dispute Prevention",
    summary:
      "Preventive reviews, contract structure, and escalation planning to reduce exposure before conflict emerges.",
    imageLabel: "Dispute prevention",
    imageCaption: "Early risk control and dispute-sensitive planning",
    imageSrc: "/images/service-disputes.svg",
  },
];

const serviceIntro = [
  "Strategic legal support shaped around real business decisions",
  "Partner-led execution from first instruction to final outcome",
  "Practical advice designed to be used, not just read",
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="grid gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
            Our Services
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
            Legal services built for clarity, progress, and protection.
          </h1>
          <p className="text-lg leading-8 text-[var(--text-secondary)]">
            William & Dexter provides legal support across corporate,
            commercial, regulatory, and risk-sensitive matters. Our approach is
            practical, senior-led, and focused on helping clients move with
            confidence.
          </p>
          <div className="grid gap-3 pt-2">
            {serviceIntro.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-[var(--text-soft)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_20px_60px_var(--shadow-color)]">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-[var(--accent-border)]">
            <img
              src="/images/services-hero.svg"
              alt="Services overview"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-5 top-5 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur">
              Services Overview
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                Senior Legal Support
              </p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/85">
                Corporate, commercial, regulatory, and risk advisory presented
                through a stronger visual hero.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 py-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
        <aside className="lg:sticky lg:top-28">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_50px_var(--shadow-color)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
              Service Index
            </p>
            <div className="mt-5 grid gap-2">
              {serviceDetails.map((detail, index) => (
                <a
                  key={detail.id}
                  href={`#${detail.id}`}
                  className="rounded-2xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                >
                  <span className="mr-3 text-[var(--text-muted)]">0{index + 1}</span>
                  {detail.title}
                </a>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8">
        {serviceDetails.map((detail, index) => {
          const service = services[index];
          const reverseLayout = index % 2 === 1;

          return (
            <article
              key={detail.title}
              id={detail.id}
              className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_50px_var(--shadow-color)] lg:grid-cols-2 lg:p-8"
            >
              <div className={reverseLayout ? "lg:order-2" : undefined}>
                <div className="relative overflow-hidden rounded-[1.6rem] border border-[var(--accent-border)]">
                  <img
                    src={detail.imageSrc}
                    alt={detail.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-5 flex items-end">
                    <div className="rounded-[1.35rem] border border-white/10 bg-black/30 px-5 py-4 backdrop-blur">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                        {detail.imageLabel}
                      </p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-white/85">
                        {detail.imageCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`flex flex-col justify-center ${reverseLayout ? "lg:order-1" : ""}`}
              >
                <p className="text-sm uppercase tracking-[0.26em] text-[var(--accent-text)]">
                  {detail.label}
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
                  {detail.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
                  {detail.summary}
                </p>
                <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-muted)]">
                    Partner-led
                  </span>
                  <span className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-muted)]">
                    Commercial focus
                  </span>
                  <span className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text-muted)]">
                    Strategic execution
                  </span>
                </div>
              </div>
            </article>
          );
        })}
        </div>
      </section>

      <section className="grid gap-6 py-8 lg:grid-cols-4">
        {differentiators.map((item) => (
          <div
            key={item}
            className="rounded-[1.5rem] border border-[var(--accent-border)] bg-[var(--accent-soft)] p-5 text-sm leading-7 text-[var(--text-soft)]"
          >
            {item}
          </div>
        ))}
      </section>

      <section className="grid gap-8 py-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            Visual Placeholders
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
            Dummy image blocks ready for real brand photography.
          </h2>
          <p className="mt-5 leading-7 text-[var(--text-secondary)]">
            This page uses styled placeholder image panels so you can keep the
            premium visual structure now and swap in real service photography,
            team imagery, or branded graphics later.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            Start a Conversation
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
            Tell us what support your matter needs.
          </h2>
          <p className="mt-5 leading-7 text-[var(--text-secondary)]">
            Whether you need ongoing counsel, a transaction team, or support on
            a fast-moving risk issue, we can shape the right service around
            your objectives.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:brightness-105"
            >
              Contact the Firm
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[var(--accent-border)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
