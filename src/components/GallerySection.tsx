// src/components/GallerySection.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import { siteData } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function GallerySection() {
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
    <section id="gallery" className="section gallery-section">
      <div className="section-shell">
        <Reveal className="section-heading">
          <p className="eyebrow">Project proof</p>
          <h2>Commercial site work, grading, erosion control, and hydroseeding you can actually see.</h2>
          <p>
            From new construction sites and exposed soil to drainage problems,
            grading, erosion control, and hydroseeding, these photos show the
            kind of groundwork Apex handles before a property is fully finished.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {siteData.gallery[0] && (
            <Reveal className="gallery-feature">
              <button
                type="button"
                className="gallery-button"
                onClick={() => openGallery(0)}
                aria-label={`Open ${siteData.gallery[0].label}`}
              >
                <Image
                  src={siteData.gallery[0].src}
                  alt={siteData.gallery[0].alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
                <div className="gallery-label">{siteData.gallery[0].label}</div>
              </button>
            </Reveal>
          )}

          <div className="gallery-thumbs">
            {siteData.gallery.slice(1, 4).map((image, index) => {
              const imageIndex = index + 1;

              return (
                <Reveal key={image.src} className="gallery-thumb" delay={index * 0.05}>
                  <button
                    type="button"
                    className="gallery-button"
                    onClick={() => openGallery(imageIndex)}
                    aria-label={`Open ${image.label}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 30vw"
                    />
                    <div className="gallery-label small">{image.label}</div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        {siteData.gallery.length > 4 && (
          <div className="gallery-expanded-grid">
            {siteData.gallery.slice(4).map((image, index) => {
              const imageIndex = index + 4;

              return (
                <Reveal key={image.src} className="gallery-expanded-item" delay={index * 0.035}>
                  <button
                    type="button"
                    className="gallery-button"
                    onClick={() => openGallery(imageIndex)}
                    aria-label={`Open ${image.label}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 700px) 50vw, 25vw"
                    />
                    <div className="gallery-label small">{image.label}</div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        )}
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