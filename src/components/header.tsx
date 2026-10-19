"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X, Phone, MapPin, Utensils } from "lucide-react";
import { site } from "@/data/site";
const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Our menu" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Visit us" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="announcement">
        BROTHER OWNED & OPERATED <span>·</span> PITTSTON, PA <span>·</span> EST.
        2016
      </div>
      <header className="header">
        <div className="container header-inner">
          <Link className="brand-logo" href="/" aria-label="Chef’s Corner home">
            <Image
              src="/brand/logo.png"
              alt="Chef’s Corner — Lunch – Dinner – Catering"
              width={206}
              height={120}
              priority
            />
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={path === l.href ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a
            className="header-call"
            href={site.tel}
            aria-label={`Call Chef’s Corner at ${site.phone}`}
          >
            <Phone size={15} />
            <span>{site.phone}</span>
          </a>
          <button
            className="mobile-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                onClick={() => setOpen(false)}
                href={l.href}
                aria-current={path === l.href ? "page" : undefined}
              >
                {l.label}
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </nav>
        )}
      </header>
      <nav className="mobile-actions" aria-label="Quick actions">
        <a href={site.tel}>
          <Phone size={18} />
          Call
        </a>
        <a href={site.directions} target="_blank" rel="noreferrer">
          <MapPin size={18} />
          Directions
        </a>
        <Link href="/menu">
          <Utensils size={18} />
          Menu
        </Link>
      </nav>
    </>
  );
}
