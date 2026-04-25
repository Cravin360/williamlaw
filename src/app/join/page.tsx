import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const highlights = [
  "Flexible platform for experienced lawyers",
  "Partner-level support without unnecessary layers",
  "A modern structure for building your own practice",
  "Professional systems, clear standards, and personal freedom",
];

const benefits = [
  {
    title: "Freedom and autonomy",
    description:
      "Build your practice in a way that fits your clients, your schedule, and the type of work you want to lead.",
  },
  {
    title: "Strong professional support",
    description:
      "Access operational, administrative, and strategic support that helps you focus on delivery rather than back-office friction.",
  },
  {
    title: "Modern infrastructure",
    description:
      "Work with dependable systems, a refined brand environment, and a platform designed for quality legal service.",
  },
  {
    title: "A collaborative community",
    description:
      "Join a network of ambitious professionals who value excellence, independence, and meaningful client relationships.",
  },
];

const timeline = [
  {
    step: "01",
    title: "Start the conversation",
    description:
      "Reach out for an introductory discussion about your practice, goals, and the type of platform you want to build with.",
  },
  {
    step: "02",
    title: "Share your profile",
    description:
      "We review your background, practice focus, and how your work aligns with the standards and direction of the firm.",
  },
  {
    step: "03",
    title: "Plan your transition",
    description:
      "If there is a strong fit, we map the onboarding process and prepare a practical path into the firm.",
  },
];

const faqs = [
  {
    question: "Who is this platform designed for?",
    answer:
      "The Join page is intended for experienced lawyers who want greater autonomy, strong support, and a more modern way to build their practice.",
  },
  {
    question: "Will I still have support around operations?",
    answer:
      "Yes. The model is designed to combine independence with reliable support so lawyers can focus on clients, strategy, and delivery.",
  },
  {
    question: "Can this page be tailored for actual recruitment?",
    answer:
      "Absolutely. This version uses original placeholder content and can be replaced with your real hiring process, criteria, and team messaging.",
  },
];

export default function JoinPage() {
  return (
    <SiteShell>
      <section className="grid gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
            Join
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
            A modern platform for lawyers building with purpose.
          </h1>
          <p className="text-lg leading-8 text-[var(--text-secondary)]">
            William & Dexter offers an environment for ambitious legal
            professionals who want freedom, credibility, and the support to
            grow a strong practice with confidence.
          </p>
          <div className="grid gap-3 pt-2">
            {highlights.map((item) => (
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
          <div className="relative overflow-hidden rounded-[1.6rem] border border-[var(--accent-border)] bg-[linear-gradient(135deg,rgba(201,168,111,0.18),rgba(19,27,38,0.78))]">
            <div className="aspect-[4/5] w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.18))]" />
            <div className="absolute inset-x-5 top-5 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur">
              Dummy Team Image
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                Join Page Placeholder
              </p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/85">
                Replace this block with recruitment photography, team portraits,
                or a branded campaign image when ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 py-8 lg:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_50px_var(--shadow-color)]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
              Benefit
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
              {benefit.title}
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-secondary)]">
              {benefit.description}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 py-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            Our Story
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
            Built for lawyers who want quality, independence, and momentum.
          </h2>
          <div className="mt-5 space-y-5 leading-7 text-[var(--text-secondary)]">
            <p>
              The firm is designed for professionals who want to do excellent
              work without being constrained by unnecessary complexity. We
              believe a strong legal platform should combine freedom with
              structure, and ambition with dependable support.
            </p>
            <p>
              This page is an original placeholder version that can later be
              tailored with your real recruiting message, team voice, and
              application pathway.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            How to Join
          </p>
          <div className="mt-6 space-y-4">
            {timeline.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-text)]">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 py-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            FAQs
          </p>
          <div className="mt-6 grid gap-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-5 py-5"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {item.question}
                </h3>
                <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            Brochure Style CTA
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
            Request more information about joining the firm.
          </h2>
          <p className="mt-5 leading-7 text-[var(--text-secondary)]">
            This section can later become a real brochure request, application
            form, or confidential recruitment contact point.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_var(--shadow-color)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-text)]">
            Next Step
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text-primary)]">
            Start a confidential conversation.
          </h2>
          <p className="mt-5 leading-7 text-[var(--text-secondary)]">
            If you want to position this page as a hiring or consultant
            recruitment page, I can next connect it to a dedicated join form
            and replace all placeholder messaging with your real process.
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
