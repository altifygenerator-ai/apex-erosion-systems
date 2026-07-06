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
import ImageBreak from "@/components/ImageBreak";

import { homePageSchema } from "@/lib/seo";


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
        <ImageBreak />
        <GallerySection />
        <ProcessSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}