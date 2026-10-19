import type { Metadata } from "next";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { HoursTable } from "@/components/visit-section";
import { OpenStatus } from "@/components/open-status";
import { InquiryForm } from "@/components/inquiry-form";
import { site } from "@/data/site";
export const metadata: Metadata = {
  title: "Visit Us & Contact",
  description:
    "Visit Chef’s Corner at 320 RT 315 HWY, STE #280, Pittston, PA 18640. Find hours, directions, our phone number and a contact form.",
  alternates: { canonical: "/contact" },
};
export default function Contact() {
  return (
    <>
      <PageHeading
        eyebrow="AROUND THE CORNER. ON THE CORNER."
        title="COME ON OVER."
        description="A good meal and a warm welcome are waiting at Pittston Crossings."
      >
        <a
          className="button"
          href={site.directions}
          target="_blank"
          rel="noreferrer"
        >
          Get directions <ArrowUpRight size={16} />
        </a>
      </PageHeading>
      <section className="contact-info container">
        <div className="contact-address">
          <span className="eyebrow">FIND OUR CORNER</span>
          <h2>
            PITTSTON,
            <br />
            PENNSYLVANIA.
          </h2>
          <p>
            {site.address}
            <br />
            {site.city}
          </p>
          <div className="contact-links">
            <a href={site.tel}>
              <Phone size={16} />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={16} />
              {site.email}
            </a>
          </div>
          <div className="landmark-box">
            <MapPin size={20} />
            <div>
              <strong>{site.directionsNote}</strong>
              <p>
                {site.landmark}. Look for us around the corner of the shopping
                center.
              </p>
            </div>
          </div>
        </div>
        <div>
          <span className="eyebrow">PULL UP A CHAIR</span>
          <h3 className="hours-title">
            Lunch, dinner & everything in between.
          </h3>
          <OpenStatus />
          <HoursTable />
          <p className="hours-note">
            All hours are Eastern Time. For holiday hours, please call or check
            our{" "}
            <a href={site.facebook} target="_blank" rel="noreferrer">
              Facebook page
            </a>
            .
          </p>
          <p className="byob-note">
            YOUR BOTTLE. OUR TABLE. <strong>B.Y.O.B.</strong>
          </p>
        </div>
      </section>
      <div className="container contact-map">
        <iframe
          title="Map to Chef’s Corner, 320 Route 315, Suite 280, Pittston PA"
          src={site.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          href={site.directions}
          className="map-directions"
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps <ArrowUpRight size={15} />
        </a>
      </div>
      <section className="inquiry-section contact-inquiry">
        <div className="container inquiry-layout">
          <div>
            <span className="eyebrow">DROP US A LINE</span>
            <h2>
              WE’D LOVE
              <br />
              TO HEAR FROM YOU.
            </h2>
            <p>
              Have a question about the menu, a gathering, or dining with us?
              Send us a message.
            </p>
            <p>
              For orders and time-sensitive requests, give us a call at{" "}
              <a href={site.tel}>{site.phone}</a>.
            </p>
            <a
              className="text-link"
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
            >
              Daily features on Facebook <ArrowUpRight size={16} />
            </a>
          </div>
          <InquiryForm kind="contact" />
        </div>
      </section>
    </>
  );
}
