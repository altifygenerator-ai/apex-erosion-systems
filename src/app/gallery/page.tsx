// src/app/gallery/page.tsx

import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import FullGallery from "@/components/FullGallery";
import Footer from "@/components/Footer";
import { defaultOgImage, galleryPageSchema, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hydroseeding & Erosion Control Gallery",
  description:
    "See Apex Erosion Systems project photos for hydroseeding, erosion control, grading, drainage, and site stabilization around Texarkana and Northeast Texas.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title:
      "Hydroseeding & Erosion Control Gallery | Apex Erosion Systems",
    description:
      "Project photos showing hydroseeding, erosion control, grading, drainage, and site stabilization work around Texarkana and Northeast Texas.",
    url: `${siteUrl}/gallery`,
    siteName,
    images: [
      {
        url: defaultOgImage,
        secureUrl: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Apex Erosion Systems project gallery for hydroseeding and erosion control work",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hydroseeding & Erosion Control Gallery | Apex Erosion Systems",
    description:
      "See hydroseeding, erosion control, drainage, grading, and site stabilization project photos from Apex Erosion Systems.",
    images: [defaultOgImage],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Script
        id="gallery-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(galleryPageSchema),
        }}
      />

      <Header />
      <main>
        <FullGallery />
      </main>
      <Footer />
    </>
  );
}
