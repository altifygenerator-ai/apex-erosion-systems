// src/app/layout.tsx

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Texarkana Hydroseeding & Erosion Control | Apex Erosion Systems",
    template: `%s | ${siteName}`,
  },

  description:
    "Apex Erosion Systems provides hydroseeding, erosion control, drainage support, grading, and site stabilization for projects around Texarkana and Northeast Texas.",

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
      "Texarkana Hydroseeding & Erosion Control | Apex Erosion Systems",
    description:
      "Hydroseeding, erosion control, drainage support, grading, and site stabilization for commercial and residential projects around Texarkana and Northeast Texas.",
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
      "Texarkana Hydroseeding & Erosion Control | Apex Erosion Systems",
    description:
      "Hydroseeding, erosion control, drainage support, grading, and site stabilization around Texarkana and Northeast Texas.",
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
