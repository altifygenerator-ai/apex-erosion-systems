// src/app/layout.tsx

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { defaultOgImage, localSeoKeywords, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Apex Erosion Systems | Texarkana Hydroseeding, Drainage & Erosion Control",
    template: `%s | ${siteName}`,
  },

  description:
    "Apex Erosion Systems provides hydroseeding, erosion control, drainage support, site stabilization, soil prep, seeding, sod work, washout repair, and construction site finish work around Texarkana and Northeast Texas.",

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
    ...localSeoKeywords,
  ],

  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "construction",

  verification: {
    google: "z5Gl_1EmC7bK7l3ocouB40uq6zIj-6OrcSqgvYB0nj0",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Apex Erosion Systems | Texarkana Hydroseeding, Drainage & Erosion Control",
    description:
      "Hydroseeding, drainage support, erosion control, grading, soil stabilization, seeding, sod work, and construction site finish work around Texarkana and Northeast Texas.",
    url: siteUrl,
    siteName,
    images: [
      {
        url: defaultOgImage,
        secureUrl: defaultOgImage,
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
      "Apex Erosion Systems | Texarkana Hydroseeding, Drainage & Erosion Control",
    description:
      "Hydroseeding, erosion control, drainage support, site stabilization, seeding, sod work, and construction site finish work around Texarkana and Northeast Texas.",
    images: [defaultOgImage],
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
