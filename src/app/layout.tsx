import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/data/site";
import "./globals.css";
import { RestaurantSchema } from "@/components/restaurant-schema";
const sans = localFont({
  src: [
    { path: "./fonts/dm-sans-regular.ttf", weight: "400" },
    { path: "./fonts/dm-sans-bold.ttf", weight: "700" },
  ],
  variable: "--font-sans",
  display: "swap",
});
const display = localFont({
  src: "./fonts/oswald-semibold.ttf",
  weight: "600",
  variable: "--font-display",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Chef’s Corner | Lunch, Dinner & Catering in Pittston, PA",
    template: "%s | Chef’s Corner",
  },
  description:
    "Brother-owned neighborhood restaurant in Pittston, PA. Explore our menu, plan your next catered event, or join us for lunch and dinner. B.Y.O.B.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Grammarly injects body attributes before hydration. Suppress only this element. */}
      <body
        className={`${sans.variable} ${display.variable}`}
        suppressHydrationWarning
      >
        <RestaurantSchema />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
