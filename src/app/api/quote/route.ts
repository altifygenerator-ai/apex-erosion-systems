// src/app/api/quote/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type QuotePayload = {
  name?: string;
  phone?: string;
  projectType?: string;
  details?: string;
  website?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuotePayload;

    const name = clean(body.name);
    const phone = clean(body.phone);
    const projectType = clean(body.projectType);
    const details = clean(body.details);
    const website = clean(body.website);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !phone || !projectType || !details) {
      return NextResponse.json(
        { error: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const fromEmail = process.env.QUOTE_FROM_EMAIL;
    const quoteToEmail = process.env.QUOTE_TO_EMAIL;
    const clientToEmail = process.env.CLIENT_TO_EMAIL;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY." },
        { status: 500 }
      );
    }

    if (!fromEmail || !quoteToEmail || !clientToEmail) {
      return NextResponse.json(
        { error: "Email settings are missing." },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeProjectType = escapeHtml(projectType);
    const safeDetails = escapeHtml(details).replace(/\n/g, "<br />");

    const leadHtml = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
        <h2>New Apex Erosion Systems Quote Request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Project Type:</strong> ${safeProjectType}</p>
        <p><strong>Details:</strong></p>
        <p>${safeDetails}</p>
      </div>
    `;

    const clientHtml = `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
        <h2>New quote request from the Apex website</h2>
        <p>A new customer submitted the quote form on the Apex Erosion Systems website.</p>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Project Type:</strong> ${safeProjectType}</p>
        <p><strong>Project Details:</strong></p>
        <p>${safeDetails}</p>

        <p style="margin-top: 24px; color: #555;">
          This message was sent from the website quote form.
        </p>
      </div>
    `;

    const leadEmail = await resend.emails.send({
      from: fromEmail,
      to: quoteToEmail,
      subject: `New Apex quote lead: ${name}`,
      html: leadHtml,
    });

    const clientEmail = await resend.emails.send({
      from: fromEmail,
      to: clientToEmail,
      subject: `New website quote request from ${name}`,
      html: clientHtml,
    });

    if (leadEmail.error) {
      console.error("Lead email error:", leadEmail.error);
      return NextResponse.json(
        { error: leadEmail.error.message || "Lead email failed." },
        { status: 500 }
      );
    }

    if (clientEmail.error) {
      console.error("Client email error:", clientEmail.error);
      return NextResponse.json(
        { error: clientEmail.error.message || "Client email failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote route error:", error);

    return NextResponse.json(
      { error: "Something went wrong sending the quote request." },
      { status: 500 }
    );
  }
}