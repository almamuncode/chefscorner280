import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { site } from "@/data/site";
export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Chef’s Corner handles contact and catering inquiry information.",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() {
  return (
    <>
      <PageHeading
        eyebrow="YOUR INFORMATION"
        title="PRIVACY, SIMPLY."
        description="How we use the information you share with Chef’s Corner."
      />
      <article className="prose container">
        <h2>Information you send us</h2>
        <p>
          Our forms collect your name, email, phone number, message, and, for
          catering inquiries, event details. We use these details to respond to
          your request and discuss your event.
        </p>
        <h2>Email delivery</h2>
        <p>
          Form submissions are sent to our team through Resend, our email
          delivery provider. Please don’t include payment details or other
          sensitive information in your message.
        </p>
        <h2>Maps and external links</h2>
        <p>
          Embedded Google Maps may receive your IP address and browser
          information when loaded. Facebook, DoorDash, and Google Maps links
          take you to third-party services with their own privacy policies.
        </p>
        <h2>Cookies and hosting</h2>
        <p>
          This website does not use advertising cookies or analytics scripts.
          Our hosting and email providers may process technical information
          needed to operate the website, maintain security, and deliver
          messages.
        </p>
        <h2>Questions and requests</h2>
        <p>
          To ask about your information or request deletion of an inquiry, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
          <a href={site.tel}>{site.phone}</a>.
        </p>
      </article>
    </>
  );
}
