"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  matterType: string;
  message: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  matterType: "",
  message: "",
};

export function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [formState, setFormState] = useState(initialFormState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/request-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your request.");
      }

      setStatusMessage("Your consultation request has been sent.");
      setFormState(initialFormState);
    } catch (error) {
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your request at this time.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:brightness-105"
      >
        Request a Consultation
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div className="fixed inset-0 z-[200] flex items-start justify-center bg-black/60 px-4 py-6 sm:items-center sm:py-8">
              <div className="relative z-[201] max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-footer)] p-5 shadow-[0_20px_60px_var(--shadow-color)] backdrop-blur sm:p-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--text-muted)] transition hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                >
                  Close
                </button>

                <div className="max-w-lg space-y-3 pr-12">
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-text)]">
                    Request Consultation
                  </p>
                  <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
                    Tell us about your matter.
                  </h2>
                  <p className="text-sm leading-6 text-[var(--text-secondary)]">
                    Submit your details and we will send your request to
                    info@william.law for review.
                  </p>
                </div>

                <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
                      Full name
                      <input
                        required
                        value={formState.fullName}
                        onChange={(event) =>
                          setFormState((current) => ({
                            ...current,
                            fullName: event.target.value,
                          }))
                        }
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
                      />
                    </label>

                    <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
                      Email address
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(event) =>
                          setFormState((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
                      />
                    </label>

                    <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
                      Phone number
                      <input
                        value={formState.phone}
                        onChange={(event) =>
                          setFormState((current) => ({
                            ...current,
                            phone: event.target.value,
                          }))
                        }
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
                      />
                    </label>

                    <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
                      Company
                      <input
                        value={formState.company}
                        onChange={(event) =>
                          setFormState((current) => ({
                            ...current,
                            company: event.target.value,
                          }))
                        }
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
                    Matter type
                    <input
                      value={formState.matterType}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          matterType: event.target.value,
                        }))
                      }
                      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
                    />
                  </label>

                  <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
                    Brief description
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          message: event.target.value,
                        }))
                      }
                      className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
                    />
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-[var(--text-muted)]">
                      Do not include confidential details until representation is
                      confirmed.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Send Request"}
                    </button>
                  </div>

                  {statusMessage ? (
                    <p className="text-sm text-[var(--accent-text)]">{statusMessage}</p>
                  ) : null}
                </form>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
