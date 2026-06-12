// src/components/Hero.tsx

import Image from "next/image";
import { siteData } from "@/data/site";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <Image
        src={siteData.hero.image}
        alt="Apex Erosion Systems project work"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />

      <div className="hero-overlay" />

      <div className="hero-inner">
        <Reveal className="hero-copy">
          <p className="eyebrow">{siteData.hero.eyebrow}</p>
          <h1>{siteData.hero.headline}</h1>
          <p>{siteData.hero.text}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={siteData.phoneHref}>
              {siteData.hero.primaryCta}
            </a>
            <a className="button button-secondary" href="#services">
              {siteData.hero.secondaryCta}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}