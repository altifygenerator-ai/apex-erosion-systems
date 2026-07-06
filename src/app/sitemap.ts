// src/app/sitemap.ts

import type { MetadataRoute } from "next";
import { galleryImages, primarySchemaImage, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: [primarySchemaImage],
    },
    {
      url: `${siteUrl}/gallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: galleryImages.map((image) => image.url),
    },
  ];
}
