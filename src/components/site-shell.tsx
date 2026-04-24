"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navigation } from "@/lib/site-content";
import { ThemeToggle } from "@/components/theme-toggle";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_var(--shell-radial),_transparent_36%),linear-gradient(180deg,_var(--shell-gradient-start)_0%,_var(--shell-gradient-mid)_44%,_var(--shell-gradient-end)_100%)] text-[var(--foreground)] transition-colors">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-5 sm:px-8 lg:px-12">
        <header className="sticky top-4 z-20 mb-10 rounded-full border border-[var(--accent-border)] bg-[var(--surface-header)] px-5 py-4 shadow-[0_18px_45px_var(--shadow-color)] backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] text-sm font-semibold tracking-[0.3em] text-[var(--accent-text)]">
                WL
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--text-primary)]">
                  {company.name}
                </p>
                <p className="text-xs text-[var(--text-muted)]">{company.tagline}</p>
              </div>
            </Link>

            <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--text-secondary)]">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 transition ${
                      active
                        ? "bg-[var(--accent)] text-[var(--accent-contrast)]"
                        : "hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-20 rounded-[2rem] border border-[var(--border)] bg-[var(--surface-footer)] px-6 py-10 text-sm text-[var(--text-muted)] shadow-[0_20px_60px_var(--shadow-color)] backdrop-blur sm:px-8">
          <div className="grid gap-10 border-b border-[var(--border)] pb-8 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] text-sm font-semibold tracking-[0.3em] text-[var(--accent-text)]">
                  WL
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-[0.24em] text-[var(--text-primary)]">
                    {company.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Counselors at Law
                  </p>
                </div>
              </div>
              <p className="max-w-xl leading-7 text-[var(--text-secondary)]">
                {company.description}
              </p>
              <p className="max-w-xl text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Trusted representation for corporate, regulatory, and
                dispute-sensitive matters.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-text)]">
                Navigation
              </p>
              <nav className="mt-4 grid gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-text)]">
                Contact
              </p>
              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${company.email}`}
                  className="block text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                >
                  {company.email}
                </a>
                <a
                  href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                  className="block text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
                >
                  {company.phone}
                </a>
                <p className="leading-6 text-[var(--text-secondary)]">{company.address}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-xs text-[var(--text-muted)] lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-5">
              <p>
                © {new Date().getFullYear()} {company.name}. All rights
                reserved.
              </p>
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-5">
                <Link
                  href="/privacy-policy"
                  className="uppercase tracking-[0.18em] text-[var(--text-muted)] transition hover:text-[var(--text-primary)]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-use"
                  className="uppercase tracking-[0.18em] text-[var(--text-muted)] transition hover:text-[var(--text-primary)]"
                >
                  Terms of Use
                </Link>
                <Link
                  href="/disclaimer"
                  className="uppercase tracking-[0.18em] text-[var(--text-muted)] transition hover:text-[var(--text-primary)]"
                >
                  Disclaimer
                </Link>
              </div>
            </div>
            <p className="max-w-2xl leading-6 lg:text-right">
              The information on this website is for general informational
              purposes only and does not constitute legal advice or create an
              attorney-client relationship.
            </p>
          </div>
        </footer>
      </div>
      <ThemeToggle />
    </div>
  );
}
