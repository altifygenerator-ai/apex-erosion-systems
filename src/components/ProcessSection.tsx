// src/components/ProcessSection.tsx

import { siteData } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function ProcessSection() {
  return (
    <section id="process" className="section process-section">
      <div className="section-shell">
        <Reveal className="section-heading compact">
          <p className="eyebrow">Process</p>
          <h2>A simple process that keeps the focus on the groundwork.</h2>
        </Reveal>

        <div className="process-grid">
          {siteData.process.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.05}>
              <article className="process-card">
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}