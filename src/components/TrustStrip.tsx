// src/components/TrustStrip.tsx

import { siteData } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <Reveal className="section-shell trust-grid">
        {siteData.trust.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </Reveal>
    </section>
  );
}