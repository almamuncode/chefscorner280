import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/inquiry";
import { site } from "@/data/site";
export const runtime = "nodejs";
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const requestUrl = new URL(request.url);
  // Next.js may normalize loopback URLs to localhost; retain the original host.
  const host = request.headers.get("host") || requestUrl.host;
  const allowedOrigins = new Set([
    site.url,
    requestUrl.origin,
    `${requestUrl.protocol}//${host}`,
  ]);
  if (origin && !allowedOrigins.has(origin))
    return NextResponse.json(
      { message: "Please submit the form from our website." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { message: "Unsupported submission format." },
      { status: 415 },
    );
  let raw: unknown;
  try {
    const body = await request.text();
    if (body.length > 20000)
      return NextResponse.json(
        { message: "Your message is too long." },
        { status: 413 },
      );
    raw = JSON.parse(body);
  } catch {
    return NextResponse.json(
      { message: "Please check your form and try again." },
      { status: 400 },
    );
  }
  const result = inquirySchema.safeParse(raw);
  if (!result.success)
    return NextResponse.json(
      {
        message:
          result.error.issues[0]?.message || "Please check your details.",
      },
      { status: 400 },
    );
  const values = result.data;
  if (values.website)
    return NextResponse.json({
      message: "Thank you. Your message has been received.",
    });
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!key || !from)
    return NextResponse.json(
      {
        message: `Online messages are temporarily unavailable. Please call ${site.phone} or email ${site.email}.`,
      },
      { status: 503 },
    );
  const details = [
    `New ${values.kind} inquiry`,
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "Not provided"}`,
    ...(values.kind === "catering"
      ? [
          `Event date: ${values.eventDate}`,
          `Guest count: ${values.guestCount}`,
          `Event type: ${values.eventType}`,
        ]
      : []),
    "",
    values.message,
  ].join("\n");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [process.env.INQUIRY_TO_EMAIL || site.email],
        reply_to: values.email,
        subject: `Chef’s Corner: ${values.kind === "catering" ? "catering" : "contact"} inquiry`,
        text: details,
      }),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) throw new Error("Email delivery failed");
    return NextResponse.json({
      message:
        "Thank you! Your message has been sent. Our team will be in touch.",
    });
  } catch {
    return NextResponse.json(
      {
        message: `We couldn’t send your message right now. Please try again or call ${site.phone}.`,
      },
      { status: 502 },
    );
  }
}
