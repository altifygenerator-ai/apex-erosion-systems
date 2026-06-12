// src/components/FinalCTA.tsx

import { siteData } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <Reveal className="section-shell final-cta-inner">
        <div>
          <p className="eyebrow">{siteData.finalCta.eyebrow}</p>
          <h2>{siteData.finalCta.title}</h2>
          <p>{siteData.finalCta.text}</p>
        </div>

        <a className="button button-primary" href={siteData.phoneHref}>
          Call {siteData.phone}
        </a>
      </Reveal>
    </section>
  );
}