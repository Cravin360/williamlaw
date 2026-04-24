import { SiteShell } from "@/components/site-shell";
import { company } from "@/lib/site-content";

const disclaimerSections = [
  {
    title: "General Information Only",
    body:
      "The content on this website is provided for general informational purposes only. It is not intended as legal advice, should not be relied upon as legal advice, and may not reflect the most current legal developments or standards in every jurisdiction.",
  },
  {
    title: "No Attorney-Client Relationship",
    body:
      "Viewing this website, using its features, or contacting the firm through the website does not create an attorney-client relationship. Representation begins only after the firm has confirmed that it can accept the engagement and the parties have entered into an appropriate written agreement.",
  },
  {
    title: "No Guarantee of Results",
    body:
      "Any descriptions of legal matters, representative experience, or prior outcomes are provided for informational purposes only. Past results do not guarantee, predict, or imply a similar outcome in any future matter.",
  },
  {
    title: "Jurisdiction and Compliance",
    body:
      "This website is not intended as a solicitation in any jurisdiction where the content or its use would not comply with applicable laws, professional rules, or ethical obligations. Users are responsible for ensuring that their use of the website is permitted in their jurisdiction.",
  },
  {
    title: "Third-Party Content",
    body:
      "Any links to third-party websites or resources are provided solely for convenience. The firm does not endorse and is not responsible for the content, availability, or privacy practices of third-party websites or services.",
  },
  {
    title: "Contacting the Firm",
    body:
      "Please do not send confidential, privileged, or time-sensitive information through this website or by email unless the firm has specifically requested it and confirmed that no conflict or other bar to representation exists.",
  },
];

export default function DisclaimerPage() {
  return (
    <SiteShell>
      <section className="max-w-4xl space-y-6 py-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
          Disclaimer
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
          Important notices regarding use of this website.
        </h1>
        <p className="text-lg leading-8 text-[var(--text-secondary)]">
          This Disclaimer is intended to clarify the limits of the information
          presented on this website and the conditions under which visitors may
          use it. Please review these notices carefully before relying on any
          content provided here.
        </p>
      </section>

      <section className="grid gap-6 pb-10">
        {disclaimerSections.map((section) => (
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
            For questions regarding this Disclaimer, please contact{" "}
            {company.name} at {company.email} or {company.phone}.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
