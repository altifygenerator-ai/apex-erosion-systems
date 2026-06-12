// src/components/ProjectTypes.tsx

import { siteData } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function ProjectTypes() {
  return (
    <section className="section project-section">
      <div className="section-shell">
        <Reveal className="section-heading compact">
          <p className="eyebrow">Project types</p>
          <h2>Clear uses for homeowners, builders, and property owners.</h2>
        </Reveal>

        <div className="project-grid">
          {siteData.projectTypes.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <article className="project-card">
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}