import { ArrowUpRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { OpenStatus } from "@/components/open-status";
export function HoursTable() {
  return (
    <table className="hours-table">
      <caption className="sr-only">Restaurant hours in Eastern Time</caption>
      <tbody>
        {site.hours.map((h) => (
          <tr key={h.days}>
            <th scope="row">{h.days}</th>
            <td>{h.label}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export function VisitSection() {
  return (
    <section className="visit-section section container">
      <div className="visit-copy">
        <span className="eyebrow">AROUND THE CORNER. ON THE CORNER.</span>
        <h2>
          YOUR NEXT
          <br />
          GOOD MEAL
          <br />
          IS RIGHT HERE.
        </h2>
        <p>
          {site.address}
          <br />
          {site.city}
        </p>
        <p className="landmark">
          <MapPin size={13} />
          {site.landmark}
        </p>
        <a
          className="text-link"
          href={site.directions}
          target="_blank"
          rel="noreferrer"
        >
          Get directions <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="visit-details">
        <OpenStatus />
        <HoursTable />
        <iframe
          title="Chef’s Corner location at Pittston Crossings"
          src={site.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="map-frame"
        />
      </div>
    </section>
  );
}
