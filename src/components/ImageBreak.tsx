// src/components/ImageBreak.tsx

import Image from "next/image";
import { siteData } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function ImageBreak() {
  return (
    <section className="image-break">
      <Image
        src="/images/apex/gallery-18.jpg"
        alt="Hydroseeding application across a large open property"
        fill
        sizes="100vw"
      />

      <div className="section-shell image-break-inner">
        <Reveal className="image-break-card">
          <p className="eyebrow">Hydroseeding & stabilization</p>
          <h2>Large areas, bare soil, slopes, and open ground handled with the right finish.</h2>
          <p>
            Hydroseeding helps cover exposed soil, reduce erosion, and start a cleaner
            finished surface on commercial properties, construction sites, open lots,
            and repaired ground.
          </p>

          <a className="button button-primary" href={siteData.phoneHref}>
            Call {siteData.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}