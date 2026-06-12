// src/components/IntroSection.tsx

import { siteData } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function IntroSection() {
  return (
    <section className="section intro-section">
      <div className="section-shell intro-grid">
        <Reveal>
          <p className="eyebrow">{siteData.intro.eyebrow}</p>
          <h2>{siteData.intro.title}</h2>
        </Reveal>

        <Reveal className="intro-card" delay={0.1}>
          <p>{siteData.intro.text}</p>

          <div className="pill-grid">
            {siteData.intro.points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}