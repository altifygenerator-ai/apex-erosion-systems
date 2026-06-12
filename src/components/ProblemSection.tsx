// src/components/ProblemSection.tsx

import Image from "next/image";
import { siteData } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function ProblemSection() {
  return (
    <section id="problems" className="section problem-section">
      <Image
        src="/images/apex/gallery-10.jpg"
        alt="Hydroseeding and erosion control work in a drainage area"
        fill
        sizes="100vw"
        className="problem-bg-image"
      />

      <div className="section-shell problem-grid">
        <Reveal className="problem-card">
          <p className="eyebrow">{siteData.problem.eyebrow}</p>
          <h2>{siteData.problem.title}</h2>
          <p>{siteData.problem.text}</p>

          <a className="button button-primary" href={siteData.phoneHref}>
            Call {siteData.phone}
          </a>
        </Reveal>

        <div className="problem-list">
          {siteData.problem.items.map((item, index) => (
            <Reveal key={item} className="problem-item" delay={index * 0.04}>
              <span />
              <p>{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}