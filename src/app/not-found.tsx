import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return (
    <section className="not-found container">
      <span className="eyebrow">404 · A LITTLE OFF THE BEATEN PATH</span>
      <h1>
        WRONG CORNER.
        <br />
        RIGHT RESTAURANT.
      </h1>
      <p>
        We couldn’t find that page. There’s still plenty of good food around
        here.
      </p>
      <div className="hero-buttons">
        <Link className="button" href="/">
          Back to our corner <ArrowUpRight size={16} />
        </Link>
        <Link className="button button-outline" href="/menu">
          Explore the menu
        </Link>
      </div>
    </section>
  );
}
