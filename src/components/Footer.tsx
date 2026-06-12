// src/components/Footer.tsx

import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div className="footer-brand">
          <h2>{siteData.name}</h2>
          <p>{siteData.tagline}</p>
        </div>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#problems">Problems We Fix</a>
          <a href="#gallery">Gallery</a>
          <a href={siteData.phoneHref}>{siteData.phone}</a>
        </div>
      </div>

      <div className="section-shell footer-bottom">
        <p>© {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
        <p>
          Website by{" "}
          <a
            href="https://hometownwebservicesar.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hometown Web Services
          </a>
        </p>
      </div>
    </footer>
  );
}