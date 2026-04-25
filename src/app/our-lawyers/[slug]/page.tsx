import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { getLawyerBySlug, lawyers } from "@/lib/lawyers";

type LawyerProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return lawyers.map((lawyer) => ({
    slug: lawyer.slug,
  }));
}

export default async function LawyerProfilePage({
  params,
}: LawyerProfilePageProps) {
  const { slug } = await params;
  const lawyer = getLawyerBySlug(slug);

  if (!lawyer) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="grid gap-8 py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_50px_var(--shadow-color)]">
          <div className="overflow-hidden rounded-[1.6rem] border border-[var(--accent-border)]">
            <img
              src={lawyer.imageSrc}
              alt={lawyer.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="mt-6 space-y-3 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-strong)] p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
              Contact
            </p>
            <a
              href={`mailto:${lawyer.email}`}
              className="block text-sm text-[var(--text-primary)] transition hover:text-[var(--accent-text)]"
            >
              {lawyer.email}
            </a>
            <a
              href={`tel:${lawyer.phone.replace(/[^+\d]/g, "")}`}
              className="block text-sm text-[var(--text-primary)] transition hover:text-[var(--accent-text)]"
            >
              {lawyer.phone}
            </a>
            <a
              href={lawyer.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block text-sm text-[var(--text-primary)] transition hover:text-[var(--accent-text)]"
            >
              LinkedIn
            </a>
            <a
              href={lawyer.x}
              target="_blank"
              rel="noreferrer"
              className="block text-sm text-[var(--text-primary)] transition hover:text-[var(--accent-text)]"
            >
              X / Social
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Link
              href="/our-lawyers"
              className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)] transition hover:opacity-80"
            >
              Back to Our Lawyers
            </Link>
            <p className="mt-6 text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
              {lawyer.role}
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
              {lawyer.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">
              {lawyer.focus}
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
              Profile
            </p>
            <p className="mt-5 leading-8 text-[var(--text-secondary)]">
              {lawyer.bio}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
                Key Experience
              </p>
              <div className="mt-5 grid gap-3">
                {lawyer.experience.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-4 text-sm leading-7 text-[var(--text-soft)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
                Information
              </p>
              <div className="mt-5 space-y-4 text-sm text-[var(--text-secondary)]">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-4">
                  <span className="block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Office
                  </span>
                  <span className="mt-2 block text-base text-[var(--text-primary)]">
                    {lawyer.location}
                  </span>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-4">
                  <span className="block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Email
                  </span>
                  <a
                    href={`mailto:${lawyer.email}`}
                    className="mt-2 block text-base text-[var(--text-primary)] transition hover:text-[var(--accent-text)]"
                  >
                    {lawyer.email}
                  </a>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-4">
                  <span className="block text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    Handles
                  </span>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <a
                      href={lawyer.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--accent-border)] px-4 py-2 text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={lawyer.x}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--accent-border)] px-4 py-2 text-[var(--text-primary)] transition hover:bg-[var(--surface-hover)]"
                    >
                      X
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
