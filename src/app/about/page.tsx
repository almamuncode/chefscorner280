import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, Wine, UtensilsCrossed } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { FoodPhoto } from "@/components/food-photo";
export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Brother Owned & Operated since 2016. Get to know Chef’s Corner, your neighborhood lunch, dinner and catering spot in Pittston, PA. B.Y.O.B.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <>
      <PageHeading
        eyebrow="BROTHER OWNED & OPERATED · EST. 2016"
        title={"A GOOD CORNER.\nA WARM WELCOME."}
        description="A neighborhood place for good food, familiar faces, and getting together."
      />
      <section className="about-story container">
        <div className="about-logo">
          <Image
            src="/brand/logo.png"
            width={600}
            height={350}
            alt="Original Chef’s Corner logo with a chef hat and knife"
          />
          <span>EST. 2016 · PITTSTON, PENNSYLVANIA</span>
        </div>
        <div>
          <span className="eyebrow">OUR LITTLE CORNER OF PITTSTON</span>
          <h2>
            COME AS YOU ARE.
            <br />
            LEAVE WELL FED.
          </h2>
          <p>
            Chef’s Corner is a brother-owned and operated restaurant,
            established in 2016. Lunch, dinner, and catering are what we do.
            Bringing people together around good food is what makes it
            worthwhile.
          </p>
          <p>
            Find us at Pittston Crossings, next to Wine & Spirits. Dine in for
            lunch or dinner, order delivery through DoorDash, or let us help you
            celebrate something special.
          </p>
          <p>And bring your favorite bottle. We’re B.Y.O.B.</p>
          <Link href="/menu" className="text-link">
            Find your favorite <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="about-values section container">
        {[
          {
            icon: Heart,
            title: "Brother owned.",
            text: "Independently owned and operated, with a welcome that feels close to home.",
          },
          {
            icon: UtensilsCrossed,
            title: "Something for everyone.",
            text: "From handheld favorites to a sit-down dinner. Explore a menu made for every appetite.",
          },
          {
            icon: Wine,
            title: "Your bottle. Our table.",
            text: "Make your meal your own. Bring a favorite bottle and enjoy it over good food.",
          },
        ].map((v) => (
          <article key={v.title}>
            <v.icon size={25} />
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </article>
        ))}
      </section>
      <section className="about-photo-section container">
        <FoodPhoto
          src="/images/dining-placeholder.jpg"
          alt="Illustrative restaurant meal; actual Chef’s Corner dining room photos coming soon"
        />
        <div className="about-photo-copy">
          <span className="eyebrow">THERE’S A PLACE FOR YOU HERE</span>
          <h2>
            LET’S MAKE
            <br />
            IT A MEAL.
          </h2>
          <Link className="button" href="/contact">
            Come on over <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
