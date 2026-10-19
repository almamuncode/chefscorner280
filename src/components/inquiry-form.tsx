"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { site } from "@/data/site";
import Link from "next/link";
function isMessage(value: unknown): value is { message: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "message" in value &&
    typeof value.message === "string"
  );
}
export function InquiryForm({ kind }: { kind: "contact" | "catering" }) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const field = (name: string) => {
      const value = data.get(name);
      return typeof value === "string" ? value : "";
    };
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          name: field("name"),
          email: field("email"),
          phone: field("phone"),
          eventDate: field("eventDate"),
          guestCount: field("guestCount"),
          eventType: field("eventType"),
          message: field("message"),
          website: field("website"),
        }),
      });
      const result: unknown = await response.json();
      setMessage(
        isMessage(result)
          ? result.message
          : "Please try again or give us a call.",
      );
      setStatus(response.ok ? "success" : "error");
      if (response.ok) form.reset();
    } catch {
      setStatus("error");
      setMessage(`Unable to connect. Please try again or call ${site.phone}.`);
    }
  }
  if (status === "success")
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={35} />
        <h3>Thanks for reaching out.</h3>
        <p>{message}</p>
        <button className="text-link" onClick={() => setStatus("idle")}>
          Send another message <ArrowUpRight size={15} />
        </button>
      </div>
    );
  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Your name <span>*</span>
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            placeholder="First and last name"
          />
        </label>
        <label>
          Email address <span>*</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Phone number {kind === "catering" && <span>*</span>}
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            required={kind === "catering"}
            maxLength={30}
            placeholder="(570) 555-0123"
          />
        </label>
        {kind === "catering" && (
          <>
            <label>
              Event date <span>*</span>
              <input type="date" name="eventDate" required />
            </label>
            <label>
              Estimated guests <span>*</span>
              <input
                type="number"
                name="guestCount"
                min={1}
                max={10000}
                required
                placeholder="How many people?"
              />
            </label>
            <label>
              Event type <span>*</span>
              <select name="eventType" required defaultValue="">
                <option value="" disabled>
                  Select your occasion
                </option>
                {[
                  "Office lunch",
                  "Baby shower",
                  "Wedding",
                  "Family celebration",
                  "Dining room rental",
                  "Other",
                ].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
          </>
        )}
      </div>
      <label>
        {kind === "catering" ? "Tell us what you’re planning" : "Your message"}{" "}
        <span>*</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder={
            kind === "catering"
              ? "A little about your event, food preferences, and anything else we should know…"
              : "How can we help?"
          }
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this field blank
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="form-privacy">
        We’ll only use these details to respond to your inquiry.{" "}
        <Link href="/privacy">Privacy policy</Link>.
      </p>
      {status === "error" && (
        <p className="form-error" role="alert">
          {message}
        </p>
      )}
      <button type="submit" disabled={status === "loading"} className="button">
        {status === "loading" ? (
          <>
            <LoaderCircle size={15} className="spinner" />
            Sending…
          </>
        ) : (
          <>
            {kind === "catering"
              ? "Send catering inquiry"
              : "Send your message"}
            <ArrowUpRight size={15} />
          </>
        )}
      </button>
      <p className="form-note">
        {kind === "catering"
          ? "This is an inquiry, not a confirmed booking. "
          : ""}
        For time-sensitive requests, call <a href={site.tel}>{site.phone}</a>.
      </p>
    </form>
  );
}
