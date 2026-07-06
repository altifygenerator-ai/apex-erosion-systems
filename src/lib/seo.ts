import { siteData } from "@/data/site";

export const siteUrl = "https://apexerosionsystems.com";
export const siteName = siteData.name;
export const defaultOgImage = `${siteUrl}/og-image.jpg`;
export const primarySchemaImage = `${siteUrl}/images/apex/gallery-17.jpg`;
export const logoUrl = `${siteUrl}${siteData.logo}`;

export const localSeoKeywords = [
  "Texarkana TX hydroseeding",
  "Texarkana erosion control",
  "Texarkana drainage solutions",
  "Texarkana site grading",
  "New Boston TX hydroseeding",
  "East Texas hydroseeding",
  "East Texas erosion control",
  "Northeast Texas drainage contractor",
  "Northeast Texas site stabilization",
  "commercial hydroseeding Texarkana",
  "residential hydroseeding Texarkana",
  "construction site stabilization Texarkana",
];

const businessId = `${siteUrl}/#business`;
const websiteId = `${siteUrl}/#website`;
const homePageId = `${siteUrl}/#webpage`;
const galleryPageId = `${siteUrl}/gallery#webpage`;

const areaServed = [
  {
    "@type": "City",
    name: "Texarkana",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Texarkana",
      addressRegion: "TX",
      postalCode: "75501",
      addressCountry: "US",
    },
  },
  {
    "@type": "City",
    name: "New Boston",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Boston",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  {
    "@type": "AdministrativeArea",
    name: "Northeast Texas",
  },
  {
    "@type": "AdministrativeArea",
    name: "East Texas",
  },
];

const serviceCatalog = {
  "@type": "OfferCatalog",
  name: "Apex Erosion Systems services",
  itemListElement: siteData.services.map((service, index) => ({
    "@type": "Offer",
    position: index + 1,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.text,
      areaServed,
      provider: {
        "@id": businessId,
      },
    },
  })),
};

const businessSchema = {
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": businessId,
  name: siteName,
  url: siteUrl,
  telephone: siteData.phone,
  image: primarySchemaImage,
  logo: logoUrl,
  description:
    "Apex Erosion Systems provides commercial and residential hydroseeding, erosion control, drainage support, site stabilization, soil prep, seeding, sod work, washout repair, and construction site finish work in the Texarkana and Northeast Texas region.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Texarkana",
    addressRegion: "TX",
    postalCode: "75501",
    addressCountry: "US",
  },
  areaServed,
  knowsAbout: [
    "Hydroseeding",
    "Erosion control",
    "Drainage solutions",
    "Site grading",
    "Site stabilization",
    "Soil stabilization",
    "Soil prep",
    "Sod installation",
    "Seeding",
    "New construction site finish work",
    "Washout repair",
    "Foundation drainage support",
    "Bare soil stabilization",
    "Commercial site finish work",
  ],
  hasOfferCatalog: serviceCatalog,
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: siteName,
  publisher: {
    "@id": businessId,
  },
  inLanguage: "en-US",
};

const serviceListSchema = {
  "@type": "ItemList",
  "@id": `${siteUrl}/#services`,
  name: "Apex Erosion Systems services",
  itemListElement: siteData.services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.text,
      provider: {
        "@id": businessId,
      },
      areaServed,
    },
  })),
};

const homeBreadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ],
};

const galleryBreadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/gallery#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Project Gallery",
      item: `${siteUrl}/gallery`,
    },
  ],
};

export const galleryImages = siteData.gallery.map((image, index) => ({
  "@type": "ImageObject",
  "@id": `${siteUrl}/gallery#image-${index + 1}`,
  url: `${siteUrl}${image.src}`,
  contentUrl: `${siteUrl}${image.src}`,
  name: image.label,
  caption: image.alt,
  description: image.alt,
  representativeOfPage: index === 0,
}));

const galleryImageSchema = {
  "@type": "ImageGallery",
  "@id": `${siteUrl}/gallery#gallery`,
  name: "Apex Erosion Systems Project Gallery",
  description:
    "Project photos from Apex Erosion Systems showing hydroseeding, erosion control, drainage support, site prep, grading, and soil stabilization work.",
  url: `${siteUrl}/gallery`,
  image: galleryImages,
  about: {
    "@id": businessId,
  },
};

export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessSchema,
    websiteSchema,
    serviceListSchema,
    homeBreadcrumbSchema,
    {
      "@type": "WebPage",
      "@id": homePageId,
      url: siteUrl,
      name: "Apex Erosion Systems | Texarkana Hydroseeding, Drainage & Erosion Control",
      description:
        "Apex Erosion Systems provides hydroseeding, erosion control, drainage support, site stabilization, soil prep, seeding, sod work, and construction site finish work for commercial and residential projects around Texarkana and Northeast Texas.",
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": businessId,
      },
      breadcrumb: {
        "@id": `${siteUrl}/#breadcrumb`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: primarySchemaImage,
      },
      inLanguage: "en-US",
    },
  ],
};

export const galleryPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    businessSchema,
    websiteSchema,
    galleryBreadcrumbSchema,
    galleryImageSchema,
    {
      "@type": "WebPage",
      "@id": galleryPageId,
      url: `${siteUrl}/gallery`,
      name: "Apex Erosion Systems Project Gallery | Hydroseeding & Erosion Control",
      description:
        "View Apex Erosion Systems project photos showing hydroseeding, erosion control, drainage support, site prep, grading, and soil stabilization work in the Texarkana and Northeast Texas region.",
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": businessId,
      },
      breadcrumb: {
        "@id": `${siteUrl}/gallery#breadcrumb`,
      },
      primaryImageOfPage: galleryImages[0],
      inLanguage: "en-US",
    },
  ],
};
