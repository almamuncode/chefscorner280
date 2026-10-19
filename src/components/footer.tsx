import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="wordmark" href="/">
              CHEF’S CORNER<span>LUNCH · DINNER · CATERING</span>
            </Link>
            <p>
              Good food. Good company.
              <br />
              Right around the corner.
            </p>
          </div>
          <div>
            <span className="eyebrow">COME ON OVER</span>
            <p>
              {site.address}
              <br />
              {site.city}
            </p>
            <a href={site.tel}>{site.phone}</a>
          </div>
          <div>
            <span className="eyebrow">STAY IN THE LOOP</span>
            <p>Daily features. Fresh from our kitchen.</p>
            <a href={site.facebook} target="_blank" rel="noreferrer">
              Follow us on Facebook <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Chef’s Corner · Brother Owned &amp;
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
