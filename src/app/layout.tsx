// src/app/layout.tsx

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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
    "Apex Erosion Systems provides commercial and residential drainage, grading, erosion control, soil prep, hydroseeding, seeding, sod work, washout repair, and new construction site finish work.",

  keywords: [
    "Apex Erosion Systems",
    "erosion control",
    "hydroseeding",
    "commercial erosion control",
    "commercial drainage",
    "drainage solutions",
    "site grading",
    "precision grading",
    "soil stabilization",
    "soil prep",
    "sod installation",
    "seeding",
    "new construction site finish",
    "construction site stabilization",
    "washout repair",
    "foundation drainage",
    "bare soil stabilization",
    "contractor site work",
  ],

  applicationName: "Apex Erosion Systems",
  authors: [{ name: "Apex Erosion Systems" }],
  creator: "Apex Erosion Systems",
  publisher: "Apex Erosion Systems",
  category: "construction",

  verification: {
    google: "z5Gl_1EmC7bK7l3ocouB40uq6zIj-6OrcSqgvYB0nj0",
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "Apex Erosion Systems | Drainage, Grading, Erosion Control & Hydroseeding",
    description:
      "Commercial and residential drainage, grading, erosion control, soil prep, hydroseeding, seeding, sod work, washout repair, and new construction site finish work.",
    url: siteUrl,
    siteName: "Apex Erosion Systems",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        secureUrl: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Apex Erosion Systems drainage, grading, erosion control, and hydroseeding",
        type: "image/jpeg",
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
      "Drainage, grading, erosion control, soil prep, hydroseeding, seeding, sod work, and new construction site finish work.",
    images: [`${siteUrl}/og-image.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}