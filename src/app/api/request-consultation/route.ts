import { NextResponse } from "next/server";

type ConsultationPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  matterType?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ConsultationPayload;
  const fullName = payload.fullName?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!fullName || !email || !message) {
    return NextResponse.json(
      { message: "Full name, email, and message are required." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      {
        message:
          "Email delivery is not configured yet. Add RESEND_API_KEY to enable consultation requests.",
      },
      { status: 500 },
    );
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  const subject = `Consultation Request from ${fullName}`;
  const safePhone = payload.phone?.trim() || "Not provided";
  const safeCompany = payload.company?.trim() || "Not provided";
  const safeMatterType = payload.matterType?.trim() || "Not provided";

  const html = `
    <h2>New Consultation Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(safePhone)}</p>
    <p><strong>Company:</strong> ${escapeHtml(safeCompany)}</p>
    <p><strong>Matter Type:</strong> ${escapeHtml(safeMatterType)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: ["info@william.law"],
      reply_to: email,
      subject,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();

    return NextResponse.json(
      {
        message: `Unable to send the consultation request. ${errorText}`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Your consultation request has been sent successfully.",
  });
}
