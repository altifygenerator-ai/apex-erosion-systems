// src/components/Header.tsx

import Image from "next/image";
import { siteData } from "@/data/site";

export default function Header() {
  return (
    <header className="site-header">
      <a href="/" className="brand-link" aria-label={siteData.name}>
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
          <span className="brand-name">{siteData.name}</span>
          <span className="brand-tagline">{siteData.tagline}</span>
        </span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="/">Home</a>
        {siteData.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
       
      </nav>

      <a className="header-phone" href={siteData.phoneHref}>
        {siteData.phone}
      </a>
    </header>
  );
}