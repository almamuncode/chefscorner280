import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Heart,
  PartyPopper,
  Users,
  Download,
} from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { InquiryForm } from "@/components/inquiry-form";
import { FoodPhoto } from "@/components/food-photo";
import { site } from "@/data/site";
export const metadata: Metadata = {
  title: "Catering & Dining Room Rental",
  description:
    "Plan office lunches, baby showers, weddings and celebrations with Chef’s Corner catering in Pittston. Ask about dining room rental.",
  alternates: { canonical: "/catering" },
};
export default function Catering() {
  return (
    <>
      <PageHeading
        eyebrow="GOOD FOOD BRINGS PEOPLE TOGETHER"
        title={"YOUR OCCASION.\nOUR KITCHEN."}
        description="From a working lunch to a once-in-a-lifetime celebration. Let’s make it a gathering to remember."
      >
        <a href="#inquiry" className="button">
          Plan something good <ArrowUpRight size={16} />
        </a>
      </PageHeading>
      <section className="catering-intro container">
        <FoodPhoto
          src="/images/table-placeholder.jpg"
          alt="Illustrative shared meal, a placeholder for catering photography"
        />
        <div className="catering-intro-text">
          <span className="eyebrow">
            A LITTLE LESS PLANNING. A LOT MORE ENJOYING.
          </span>
          <h2>
            WE’LL TAKE CARE
            <br />
            OF THE FOOD.
          </h2>
          <p>
            Bring Chef’s Corner to your next gathering. Tell us about your
            occasion, guest count, and what you have in mind. We’ll work with
            you on the food and the details.
          </p>
          <p>
            Looking for a place to celebrate? Ask about renting our dining room.
          </p>
          <div className="service-grid">
            {[
              { icon: BriefcaseBusiness, name: "Office lunches" },
              { icon: PartyPopper, name: "Baby showers" },
              { icon: Heart, name: "Weddings" },
              { icon: Users, name: "Dining room rental" },
            ].map((s) => (
              <div key={s.name}>
                <s.icon size={18} />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="how-section section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">KEEPING IT SIMPLE</span>
            <h2>
              FROM AN IDEA
              <br />
              TO A GREAT GATHERING.
            </h2>
          </div>
        </div>
        <div className="steps">
          {[
            {
              title: "Tell us your plans.",
              text: "Share your event date, guest count, and the kind of gathering you’re hosting.",
            },
            {
              title: "Let’s find your menu.",
              text: "We’ll talk through food choices, dietary requests, pricing, and the details together.",
            },
            {
              title: "Get together. Enjoy.",
              text: "Once the menu and arrangements are confirmed, you can look forward to a good meal.",
            },
          ].map((s, i) => (
            <article key={s.title}>
              <span>0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
        <div className="pdf-notice">
          <div>
            <h3>Start with the food you love.</h3>
            <p>
              Browse our restaurant menu for inspiration, and contact us for
              current catering menus and pricing. We’ll help you find the right
              food for your gathering.
            </p>
          </div>
          <a
            className="button button-outline"
            download
            href="/menus/chefs-corner-menu.pdf"
          >
            <Download size={15} />
            Restaurant menu PDF
          </a>
        </div>
      </section>
      <section className="inquiry-section" id="inquiry">
        <div className="container inquiry-layout">
          <div>
            <span className="eyebrow">LET’S MAKE IT HAPPEN</span>
            <h2>
              SOMETHING
              <br />
              WORTH GETTING
              <br />
              TOGETHER FOR.
            </h2>
            <p>
              Tell us a little about your event and our team will be in touch to
              talk through the details.
            </p>
            <a className="text-link" href={site.tel}>
              {site.phone}
              <ArrowUpRight size={16} />
            </a>
            <p className="small-copy">
              Prefer email?
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <Link href="/contact" className="text-link">
              Find our corner <ArrowUpRight size={16} />
            </Link>
          </div>
          <InquiryForm kind="catering" />
        </div>
      </section>
    </>
  );
}
