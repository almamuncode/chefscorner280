import { site } from "@/data/site";
export function RestaurantSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    url: site.url,
    image: `${site.url}/brand/logo.png`,
    description:
      "Brother Owned & Operated, EST. 2016. Lunch – Dinner – Catering. B.Y.O.B.",
    telephone: "+1-570-569-2591",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Pittston",
      addressRegion: "PA",
      postalCode: "18640",
      addressCountry: "US",
    },
    servesCuisine: ["American", "Italian", "Seafood"],
    priceRange: "$$",
    acceptsReservations: false,
    hasMenu: `${site.url}/menu`,
    menu: `${site.url}/menu`,
    sameAs: [site.facebook],
    openingHoursSpecification: site.weeklyHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][hours.day],
      opens: `${String(Math.floor(hours.open / 60)).padStart(2, "0")}:${String(hours.open % 60).padStart(2, "0")}`,
      closes: `${String(Math.floor(hours.close / 60)).padStart(2, "0")}:${String(hours.close % 60).padStart(2, "0")}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
