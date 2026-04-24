import { SiteShell } from "@/components/site-shell";
import { company } from "@/lib/site-content";

const policySections = [
  {
    title: "Information We Collect",
    body:
      "We may collect personal information you choose to provide through contact forms, email correspondence, phone inquiries, and other direct communications with the firm. This may include your name, contact details, company information, and any details you voluntarily submit regarding your matter.",
  },
  {
    title: "How We Use Information",
    body:
      "Information submitted through this website may be used to respond to inquiries, evaluate potential engagements, communicate with you about our services, improve website performance, and maintain appropriate business and administrative records.",
  },
  {
    title: "Confidentiality and Legal Matters",
    body:
      "Submitting information through this website does not, by itself, create an attorney-client relationship. Please do not send confidential, time-sensitive, or privileged information until the firm has confirmed that it can represent you and appropriate engagement terms are in place.",
  },
  {
    title: "Cookies and Analytics",
    body:
      "This website may use standard analytics tools, cookies, and similar technologies to understand traffic patterns, improve user experience, and maintain website functionality. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "Information Sharing",
    body:
      "We do not sell personal information. Information may be shared with trusted service providers who support website hosting, communications, or business operations, and when disclosure is required by law, regulation, court order, or professional obligation.",
  },
  {
    title: "Data Security and Retention",
    body:
      "We take reasonable administrative and technical steps to protect personal information from unauthorized access, loss, misuse, or disclosure. Information is retained only for as long as reasonably necessary for legitimate business, legal, and compliance purposes.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <section className="max-w-4xl space-y-6 py-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
          Privacy Policy
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
          Privacy practices for visitors and prospective clients.
        </h1>
        <p className="text-lg leading-8 text-[var(--text-secondary)]">
          {company.name} respects your privacy and is committed to handling
          personal information responsibly. This policy explains how information
          may be collected, used, and protected when you visit this website or
          contact the firm through it.
        </p>
      </section>

      <section className="grid gap-6 pb-10">
        {policySections.map((section) => (
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
            Contact Us
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-soft)]">
            If you have questions about this Privacy Policy or how information
            is handled, please contact {company.name} at {company.email} or{" "}
            {company.phone}.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
