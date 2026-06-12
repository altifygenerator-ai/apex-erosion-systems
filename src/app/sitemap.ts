// src/app/sitemap.ts

import type { MetadataRoute } from "next";

const siteUrl = "https://apexerosionsystems.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}