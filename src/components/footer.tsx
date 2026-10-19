import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="brand-logo" href="/">
              <Image
                src="/brand/logo.png"
                alt="Chef’s Corner — Lunch – Dinner – Catering"
                width={206}
                height={120}
              />
            </Link>
            <p>Daily features. Fresh from our kitchen.</p>
            <a href={site.facebook} target="_blank" rel="noreferrer">
              Follow us on Facebook <ArrowUpRight size={16} />
            </a>
          </div>
          <section aria-labelledby="footer-find-us">
            <h2 id="footer-find-us" className="eyebrow">
              Find Us
            </h2>
            <h3 className="footer-label">Address</h3>
            <address>
              {site.address}
              <br />
              {site.city}
              <br />
              <a href={site.tel}>{site.phone}</a>
            </address>
            <h3 className="footer-label">Hours</h3>
            <dl className="footer-hours">
              {site.hours.map((hours) => (
                <div key={hours.days}>
                  <dt>{hours.days}</dt>
                  <dd>{hours.label}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section aria-labelledby="footer-about-us">
            <h2 id="footer-about-us" className="eyebrow">
              About Us
            </h2>
            <p>
              {site.name}
              <br />
              {site.tagline}
              <br />
              Brother Owned &amp; Operated. EST 2016
            </p>
            <p>{site.aboutText}</p>
            <Link className="footer-catering-link" href="/catering">
              Plan your next event <ArrowUpRight size={16} />
            </Link>
          </section>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Chef’s Corner · Brother Owned &
            Operated
          </span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <span>B.Y.O.B. · EST. 2016</span>
          </div>
        </div>
        <p className="disclaimer">{site.disclaimer}</p>
      </div>
    </footer>
  );
}
