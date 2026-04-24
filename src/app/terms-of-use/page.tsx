import { SiteShell } from "@/components/site-shell";
import { company } from "@/lib/site-content";

const termsSections = [
  {
    title: "Website Purpose",
    body:
      "This website is provided for general informational purposes only. Its content is intended to describe the firm, its services, and general legal topics, and should not be relied upon as legal advice for any specific matter or jurisdiction.",
  },
  {
    title: "No Attorney-Client Relationship",
    body:
      "Your use of this website, including sending messages through contact forms, email, or other channels listed on the site, does not create an attorney-client relationship. An attorney-client relationship exists only after the firm has completed any required conflict review and confirmed representation in writing.",
  },
  {
    title: "No Legal Advice",
    body:
      "The materials on this website may not reflect the most current legal developments and do not constitute legal advice. You should not act or refrain from acting based on information from this website without seeking advice from qualified legal counsel regarding your specific circumstances.",
  },
  {
    title: "Permitted Use",
    body:
      "You may use this website for lawful, personal, and informational purposes only. You agree not to misuse the site, interfere with its operation, attempt unauthorized access to its systems, or use its content in any way that violates applicable law or professional standards.",
  },
  {
    title: "Intellectual Property",
    body:
      "All website content, including text, layout, branding, graphics, and other materials, is owned by or licensed to the firm unless otherwise stated. You may not reproduce, distribute, modify, or republish website content without prior written permission, except for limited personal and non-commercial use.",
  },
  {
    title: "Third-Party Links and External Services",
    body:
      "This website may contain links to third-party websites or services for convenience or reference. The firm does not control and is not responsible for the content, availability, privacy practices, or accuracy of third-party resources.",
  },
  {
    title: "Limitation of Liability",
    body:
      "To the fullest extent permitted by law, the firm disclaims liability for any loss or damage arising out of or related to your use of, or reliance upon, this website or its content. Use of the website is at your own risk.",
  },
];

export default function TermsOfUsePage() {
  return (
    <SiteShell>
      <section className="max-w-4xl space-y-6 py-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
          Terms of Use
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
          Terms governing use of this website.
        </h1>
        <p className="text-lg leading-8 text-[var(--text-secondary)]">
          By accessing or using this website, you agree to these Terms of Use.
          If you do not agree, you should discontinue use of the website. These
          terms are intended to clarify the nature of the information provided
          and the conditions under which the website may be used.
        </p>
      </section>

      <section className="grid gap-6 pb-10">
        {termsSections.map((section) => (
          <article
            key={section.title}
            className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              {section.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
              {section.body}
            </p>
          </article>
        ))}
      </section>

      <section className="pb-10">
        <div className="rounded-[1.75rem] border border-[var(--accent-border)] bg-[var(--accent-soft)] p-8">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            Questions
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-soft)]">
            Questions regarding these Terms of Use may be directed to{" "}
            {company.name} at {company.email} or {company.phone}.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
