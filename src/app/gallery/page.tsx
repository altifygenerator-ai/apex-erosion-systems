// src/app/gallery/page.tsx

import Header from "@/components/Header";
import FullGallery from "@/components/FullGallery";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Project Gallery",
  description:
    "View Apex Erosion Systems project photos including drainage, grading, erosion control, hydroseeding, site prep, and soil stabilization work.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <FullGallery />
      </main>
      <Footer />
    </>
  );
}