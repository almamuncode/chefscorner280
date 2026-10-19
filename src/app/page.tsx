import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  UtensilsCrossed,
  Wine,
  Heart,
  MapPin,
} from "lucide-react";
import { OpenStatus } from "@/components/open-status";
import { FoodPhoto } from "@/components/food-photo";
import { VisitSection } from "@/components/visit-section";
import { menu } from "@/data/menu";
import { site } from "@/data/site";
import { itemPrice } from "@/lib/price";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  const featured = menu.flatMap((c) => c.items).filter((i) => i.featured);
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="eyebrow">A LITTLE CORNER. A LOT OF FLAVOR.</span>
            <span className="tiny-rule" />
          </div>
          <h1>
            GOOD FOOD.
            <br />
            GREAT COMPANY.
            <br />
            <span>YOUR CORNER.</span>
          </h1>
          <p>
            From your lunch break to your next celebration.
            <br className="desktop-break" /> Brother-owned, made with care, and
            always worth
            <br className="desktop-break" /> coming around the corner for.
          </p>
          <div className="hero-buttons">
            <Link className="button" href="/menu">
              Explore the menu <ArrowUpRight size={16} />
            </Link>
            <a className="button button-outline" href={site.tel}>
              <Phone size={14} />
              Call now
            </a>
          </div>
          <div className="hero-status">
            <OpenStatus />
          </div>
          <div className="hero-quick">
            <a href={site.directions} target="_blank" rel="noreferrer">
              <MapPin size={12} />
              Get directions
              <ArrowUpRight size={12} />
            </a>
            <span>·</span>
            <a href={site.doordash} target="_blank" rel="noreferrer">
              Order on DoorDash
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <FoodPhoto
            src="/images/table-placeholder.jpg"
            alt="Illustrative grilled meal and vegetables, a placeholder for Chef’s Corner food photography"
            priority
          />
          <div className="hero-stamp">
            BROTHER OWNED<strong>EST. 2016</strong>PITTSTON, PA
            <UtensilsCrossed size={20} />
          </div>
          <div className="hero-photo-note">
            <span>THE BEST THINGS HAPPEN</span>
            <strong>around the table.</strong>
          </div>
        </div>
      </section>
      <div className="values-strip">
        <div className="container">
          <span>
            <UtensilsCrossed size={17} />
            LUNCH · DINNER · CATERING
          </span>
          <span>
            <Heart size={17} />
            BROTHER OWNED & OPERATED
          </span>
          <span>
            <Wine size={17} />
            YOUR BOTTLE. OUR TABLE. B.Y.O.B.
          </span>
        </div>
      </div>
      <section className="favorites section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE ONES YOU COME BACK FOR</span>
            <h2>
              LOCAL FAVORITES.
              <br />
              FOR GOOD REASON.
            </h2>
          </div>
          <Link className="text-link" href="/menu">
            See the full menu <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="favorites-grid">
          {featured.map((item, i) => (
            <Link
              href={`/menu#${i === 3 ? "entrees" : "classics"}`}
              className="favorite-card"
              key={item.id}
            >
              <div className={`favorite-image favorite-image-${i}`}>
                <Image
                  src={
                    i === 0
                      ? "/images/chicken-placeholder.jpg"
                      : i === 1
                        ? "/images/sandwich-placeholder.jpg"
                        : i === 2
                          ? "/images/table-placeholder.jpg"
                          : "/images/dining-placeholder.jpg"
                  }
                  alt={`Illustrative food photograph; not the restaurant’s ${item.name}`}
                  fill
                  sizes="(max-width:480px) 100vw,(max-width:760px) 50vw,25vw"
                />
                <span className="photo-placeholder">ILLUSTRATIVE PHOTO</span>
                <span className="favorite-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </div>
              <div className="favorite-info">
                <span className="eyebrow">HOUSE FAVORITE</span>
                <div>
                  <h3>{item.name}</h3>
                  <strong>{itemPrice(item)}</strong>
                </div>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="catering-band">
        <div className="container catering-grid">
          <div>
            <span className="eyebrow">BIG MOMENTS. SAME CORNER.</span>
            <h2>
              YOU BRING
              <br />
              THE PEOPLE.
              <br />
              <span>
                WE’LL BRING
                <br />
                THE GOOD FOOD.
              </span>
            </h2>
          </div>
          <div className="catering-band-copy">
            <span className="catering-number">
              A table for a few.
              <br />A celebration for everyone.
            </span>
            <p>
              Office lunches, baby showers, weddings, and everything worth
              getting together for. Let us take care of the food, so you can
              enjoy the moment.
            </p>
            <div className="event-tags">
              <span>OFFICE LUNCHES</span>
              <span>CELEBRATIONS</span>
              <span>WEDDINGS</span>
            </div>
            <Link href="/catering" className="button button-light">
              Let’s plan your event <ArrowUpRight size={16} />
            </Link>
            <p className="rental-note">
              Need a space? Ask about dining room rental.
            </p>
          </div>
        </div>
      </section>
      <section className="story-teaser section container">
        <div className="story-mark">
          <Image
            src="/brand/logo.png"
            alt="Chef’s Corner original chef hat and knife logo: Lunch – Dinner – Catering"
            width={420}
            height={245}
          />
          <span>BROTHER OWNED & OPERATED · EST. 2016</span>
        </div>
        <div>
          <span className="eyebrow">A NEIGHBORHOOD KIND OF PLACE</span>
          <h2>
            TWO BROTHERS.
            <br />
            ONE GOOD CORNER.
          </h2>
          <p>
            Since 2016, Chef’s Corner has been bringing people together over
            lunch, dinner, and the kind of food you look forward to. Come as you
            are. Bring your favorite bottle. Make yourself at home.
          </p>
          <Link className="text-link" href="/about">
            A little more about us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <VisitSection />
      <section className="facebook-band">
        <div className="container">
          <div>
            <span className="eyebrow">FRESH FROM THE KITCHEN</span>
            <h3>Something new around the corner.</h3>
            <p>Find our daily features on Facebook.</p>
          </div>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Follow Chef’s Corner <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </>
  );
}
