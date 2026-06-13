// src/components/ServicesSection.tsx

import { siteData } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <div className="section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Hydroseeding, erosion control, drainage, and site stabilization handled with the ground in mind.</h2>
          <p>
            Apex Erosion Systems helps commercial properties, builders,
            contractors, and new construction projects stabilize exposed soil,
            control runoff, reduce erosion, and finish sites with hydroseeding,
            sod, seeding, and light grading when the job calls for it.
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