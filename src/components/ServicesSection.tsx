// src/components/ServicesSection.tsx

import { siteData } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <div className="section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Commercial site stabilization, drainage, grading, and hydroseeding handled as one complete job.</h2>
          <p>
            Apex Erosion Systems helps commercial properties, builders, contractors,
            and new construction projects get the ground ready before the final
            finish. From moving water the right way and shaping the site to controlling
            erosion, prepping soil, and finishing with hydroseeding, sod, or seed,
            the work is built around a cleaner, more stable finished property.
          </p>
        </Reveal>

        <div className="services-grid">
          {siteData.services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <article className="service-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}