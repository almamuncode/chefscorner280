import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { MenuBrowser } from "@/components/menu-browser";
import { menu } from "@/data/menu";
export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Explore every Chef’s Corner favorite: starters, salads, soups, flatbreads, handhelds, entrees and more. Full prices and a downloadable PDF menu.",
  alternates: { canonical: "/menu" },
};
export default function MenuPage() {
  return (
    <>
      <PageHeading
        eyebrow="SOMETHING FOR EVERY APPETITE"
        title="The good stuff."
        description="Made with care. Served with a smile. Find your new favorite, or come back for your usual."
      >
        <a
          className="button button-outline"
          href="/menus/chefs-corner-menu.pdf"
          download
        >
          <Download size={15} />
          Download PDF menu
        </a>
      </PageHeading>
      <MenuBrowser categories={menu} />
      <section className="menu-footnote container">
        <p>
          Dietary tags are a guide. Please tell us about allergies and ask about
          ingredients, sauces, and shared fryers before ordering.
        </p>
        <p>
          Prices reflect our printed menu. Call for today’s market prices and
          availability.
        </p>
      </section>
    </>
  );
}
