// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://apexerosionsystems.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Apex Erosion Systems | Drainage, Grading, Erosion Control & Hydroseeding",
    template: "%s | Apex Erosion Systems",
  },
  description:
    "Apex Erosion Systems provides commercial and residential drainage, grading, erosion control, soil prep, hydroseeding, seeding, and sod work.",
  keywords: [
    "Apex Erosion Systems",
    "erosion control",
    "hydroseeding",
    "commercial drainage",
    "site grading",
    "soil stabilization",
    "new construction site finish",
    "sod and seeding",
    "drainage solutions",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "Apex Erosion Systems | Drainage, Grading, Erosion Control & Hydroseeding",
    description:
      "Commercial and residential drainage, grading, erosion control, soil prep, hydroseeding, seeding, and sod work.",
    url: siteUrl,
    siteName: "Apex Erosion Systems",
    images: [
      {
        url: "/images/apex/gallery-7.jpg",
        width: 1200,
        height: 630,
        alt: "Apex Erosion Systems grading and site preparation work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Apex Erosion Systems | Drainage, Grading, Erosion Control & Hydroseeding",
    description:
      "Drainage, grading, erosion control, soil prep, hydroseeding, seeding, and sod work.",
    images: ["/images/apex/gallery-7.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}