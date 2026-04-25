import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { lawyers } from "@/lib/lawyers";

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

const LAWYERS_PER_PAGE = 4;

function getPageHref(page: number) {
  return page === 1 ? "/our-lawyers" : `/our-lawyers?page=${page}`;
}

type OurLawyersPageProps = {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
};

export default async function OurLawyersPage({
  searchParams,
}: OurLawyersPageProps) {
  const resolvedSearchParams = await searchParams;
  const rawPage = Array.isArray(resolvedSearchParams?.page)
    ? resolvedSearchParams.page[0]
    : resolvedSearchParams?.page;
  const requestedPage = Number.parseInt(rawPage ?? "1", 10);
  const totalPages = Math.max(1, Math.ceil(lawyers.length / LAWYERS_PER_PAGE));
  const currentPage =
    Number.isFinite(requestedPage) && requestedPage > 0
      ? Math.min(requestedPage, totalPages)
      : 1;
  const startIndex = (currentPage - 1) * LAWYERS_PER_PAGE;
  const visibleLawyers = lawyers.slice(startIndex, startIndex + LAWYERS_PER_PAGE);

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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visibleLawyers.map((lawyer) => (
            <article
              key={lawyer.slug}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]"
            >
              <div className="mb-6 overflow-hidden rounded-[1.6rem] border border-[var(--accent-border)]">
                <img
                  src={lawyer.imageSrc}
                  alt={lawyer.name}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
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

              <div className="mt-6">
                <Link
                  href={`/our-lawyers/${lawyer.slug}`}
                  className="inline-flex rounded-full border border-[var(--accent-border)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
                >
                  View Profile
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] px-6 py-4 shadow-[0_16px_40px_var(--shadow-color)]">
          <p className="text-sm text-[var(--text-muted)]">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex flex-wrap gap-3">
            {currentPage > 1 ? (
              <Link
                href={getPageHref(currentPage - 1)}
                className="rounded-full border border-[var(--accent-border)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
              >
                Previous
              </Link>
            ) : null}
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const active = page === currentPage;

              return (
                <Link
                  key={page}
                  href={getPageHref(page)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-[var(--accent)] text-[var(--accent-contrast)]"
                      : "border border-[var(--accent-border)] text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
                  }`}
                >
                  {page}
                </Link>
              );
            })}
            {currentPage < totalPages ? (
              <Link
                href={getPageHref(currentPage + 1)}
                className="rounded-full border border-[var(--accent-border)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
              >
                Next
              </Link>
            ) : null}
          </div>
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
