import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/data/site";
import "./globals.css";
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
  title: site.name,
  description: "Lunch – Dinner – Catering in Pittston, PA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
