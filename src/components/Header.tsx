// src/components/Header.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import { siteData } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a href="/" className="brand-link" aria-label={siteData.name} onClick={closeMenu}>
        <span className="brand-logo">
          <Image
            src={siteData.logo}
            alt="Apex Erosion Systems logo"
            width={80}
            height={80}
            priority
          />
        </span>

        <span className="brand-copy">
          <span className="brand-name brand-name-full">{siteData.name}</span>
          <span className="brand-name brand-name-short">Apex</span>
          <span className="brand-tagline">{siteData.tagline}</span>
        </span>
      </a>

      <nav
        className={menuOpen ? "main-nav mobile-open" : "main-nav"}
        aria-label="Main navigation"
      >
        <a href="/" onClick={closeMenu}>
          Home
        </a>

        {siteData.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}

        <a className="mobile-menu-phone" href={siteData.phoneHref} onClick={closeMenu}>
          Call {siteData.phone}
        </a>
      </nav>

      <a className="header-phone" href={siteData.phoneHref}>
        {siteData.phone}
      </a>

      <button
        type="button"
        className="mobile-menu-button"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}