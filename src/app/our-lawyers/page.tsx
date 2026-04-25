import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const lawyers = [
  {
    name: "William Carter",
    role: "Founding Partner",
    focus: "Corporate, governance, and strategic transactions",
    bio: "William advises founders, boards, and investors on growth-stage decisions, complex transactions, and sensitive legal risk. His practice is built around commercial clarity, disciplined execution, and steady leadership when the stakes are high.",
  },
  {
    name: "Dexter Reid",
    role: "Managing Partner",
    focus: "Disputes, regulatory strategy, and crisis response",
    bio: "Dexter works with clients facing contentious issues, regulatory scrutiny, and business-critical disputes. He is known for direct advice, careful preparation, and a practical approach to protecting client interests.",
  },
  {
    name: "Amelia Grant",
    role: "Partner",
    focus: "Employment, investigations, and workplace risk",
    bio: "Amelia supports leadership teams on internal investigations, executive transitions, policy reviews, and employment-related disputes. She combines legal precision with a calm, business-focused style.",
  },
  {
    name: "Samuel Hayes",
    role: "Partner",
    focus: "Commercial contracts, technology, and compliance",
    bio: "Samuel helps businesses structure contracts, strengthen operational controls, and navigate legal issues that arise in fast-moving commercial environments. His advice is designed to be clear, usable, and scalable.",
  },
];

const commitments = [
  "Senior attention on every instruction",
  "Direct communication throughout the matter",
  "Advice tailored to business and personal context",
  "Strategic support from planning through execution",
];

const sectors = [
  "Founders and growth companies",
  "Private clients and family offices",
  "Regulated businesses and leadership teams",
  "Investors, operators, and established enterprises",
];

export default function OurLawyersPage() {
  return (
    <SiteShell>
      <section className="grid gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
            Our Lawyers
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
            Experienced counsel with a practical, client-first approach.
          </h1>
          <p className="text-lg leading-8 text-[var(--text-secondary)]">
            William & Dexter brings together senior lawyers who advise with
            clarity, judgment, and purpose. Our team is built to support
            individuals, businesses, and leadership teams that need responsive
            counsel across important legal decisions.
          </p>
          <p className="text-lg leading-8 text-[var(--text-secondary)]">
            Each matter is led with close partner involvement, commercial
            awareness, and a strong focus on outcomes. We believe legal service
            should be personal, strategic, and easy to navigate.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_60px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
            What Clients Can Expect
          </p>
          <div className="mt-6 space-y-4">
            {commitments.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-4 text-[var(--text-soft)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {lawyers.map((lawyer) => (
            <article
              key={lawyer.name}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
                    {lawyer.role}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-[var(--text-primary)]">
                    {lawyer.name}
                  </h2>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] text-sm font-semibold tracking-[0.22em] text-[var(--accent-text)]">
                  {lawyer.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
              </div>

              <p className="mt-5 text-sm uppercase tracking-[0.18em] text-[var(--text-muted)]">
                {lawyer.focus}
              </p>
              <p className="mt-5 leading-7 text-[var(--text-secondary)]">
                {lawyer.bio}
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-[var(--accent-border)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
                >
                  Request an Introduction
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            Our Sectors
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
            Counsel shaped around the environments our clients operate in.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {sectors.map((sector) => (
              <div
                key={sector}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-4 text-[var(--text-soft)]"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            Build Your Team
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
            Start with the right lawyer for the matter.
          </h2>
          <div className="mt-5 space-y-5 leading-7 text-[var(--text-secondary)]">
            <p>
              The profiles on this page are placeholder content and can be
              replaced with your real lawyers, biographies, portraits, and
              practice areas at any time.
            </p>
            <p>
              For now, this page gives you a polished structure that can support
              individual lawyer profiles, grouped specialties, or a larger team
              directory as the firm grows.
            </p>
          </div>
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
