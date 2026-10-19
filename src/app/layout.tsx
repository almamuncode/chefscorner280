import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Chef’s Corner",
  description: "Lunch – Dinner – Catering in Pittston, PA.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
