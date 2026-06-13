// src/components/FullGallery.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import { siteData } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function FullGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null ? siteData.gallery[selectedIndex] : null;

  const openGallery = (index: number) => {
    setSelectedIndex(index);
  };

  const closeGallery = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? siteData.gallery.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === siteData.gallery.length - 1 ? 0 : selectedIndex + 1
    );
  };

  return (
    <section className="section full-gallery-section">
      <div className="section-shell">
        <Reveal className="section-heading full-gallery-heading">
          <p className="eyebrow">Project gallery</p>
          <h1>Drainage, grading, erosion control, and hydroseeding work.</h1>
          <p>
            Browse project photos from Apex Erosion Systems, including site prep,
            soil stabilization, drainage work, hydroseeding, grading, and finished
            ground conditions.
          </p>
        </Reveal>

        <div className="full-gallery-grid">
          {siteData.gallery.map((image, index) => (
            <Reveal key={image.src} className="full-gallery-item" delay={(index % 8) * 0.025}>
              <button
                type="button"
                className="gallery-button"
                onClick={() => openGallery(index)}
                aria-label={`Open ${image.label}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <div className="gallery-label small">{image.label}</div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="gallery-lightbox-backdrop"
            onClick={closeGallery}
            aria-label="Close gallery"
          />

          <div className="gallery-lightbox-panel">
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={closeGallery}
              aria-label="Close gallery"
            >
              Close
            </button>

            <div className="gallery-lightbox-image">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="90vw"
              />
            </div>

            <div className="gallery-lightbox-footer">
              <div>
                <p className="gallery-lightbox-kicker">Project photo</p>
                <h3>{selectedImage.label}</h3>
              </div>

              <div className="gallery-lightbox-actions">
                <button type="button" onClick={showPrevious}>
                  Previous
                </button>
                <button type="button" onClick={showNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}