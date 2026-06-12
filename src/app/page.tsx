// src/app/page.tsx

import Script from "next/script";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import ProblemSection from "@/components/ProblemSection";
import ProjectTypes from "@/components/ProjectTypes";
import GallerySection from "@/components/GallerySection";
import ProcessSection from "@/components/ProcessSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://apexerosionsystems.com/#business",
      name: "Apex Erosion Systems",
      url: "https://apexerosionsystems.com",
      telephone: "903-280-6403",
      image: "https://apexerosionsystems.com/images/apex/gallery-7.jpg",
      logo: "https://apexerosionsystems.com/images/apex/apex-logo.png",
      description:
        "Apex Erosion Systems provides commercial and residential drainage, grading, erosion control, soil prep, hydroseeding, seeding, and sod work.",
      priceRange: "$$",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      knowsAbout: [
        "Drainage solutions",
        "Site grading",
        "Erosion control",
        "Hydroseeding",
        "Soil stabilization",
        "Sod installation",
        "Seeding",
        "New construction site finish work",
        "Washout repair",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drainage Solutions",
            description:
              "Water control for commercial sites, new construction, and problem areas where runoff, standing water, or poor drainage can create bigger issues.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Precision Grading & Site Shaping",
            description:
              "Grading and shaping that helps prepare sites for drainage, erosion control, hydroseeding, sod, or a cleaner finished surface.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Erosion Control",
            description:
              "Soil stabilization for bare ground, slopes, washout areas, construction sites, and areas where water keeps moving dirt.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hydroseeding",
            description:
              "Hydroseeding for commercial properties, new builds, repaired areas, and open soil that needs coverage started quickly.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sod & Seeding",
            description:
              "Seed, sod, and soil prep options for projects that need a finished lawn or stabilized surface.",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://apexerosionsystems.com/#website",
      url: "https://apexerosionsystems.com",
      name: "Apex Erosion Systems",
      publisher: {
        "@id": "https://apexerosionsystems.com/#business",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://apexerosionsystems.com/#webpage",
      url: "https://apexerosionsystems.com",
      name: "Apex Erosion Systems | Drainage, Grading, Erosion Control & Hydroseeding",
      description:
        "Apex Erosion Systems provides commercial and residential drainage, grading, erosion control, soil prep, hydroseeding, seeding, and sod work.",
      isPartOf: {
        "@id": "https://apexerosionsystems.com/#website",
      },
      about: {
        "@id": "https://apexerosionsystems.com/#business",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://apexerosionsystems.com/images/apex/gallery-7.jpg",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="home-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />

      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <IntroSection />
        <ServicesSection />
        <ProblemSection />
        <ProjectTypes />
        <GallerySection />
        <ProcessSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}