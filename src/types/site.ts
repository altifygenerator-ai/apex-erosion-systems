// src/types/site.ts

export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  text: string;
};

export type ProjectType = {
  title: string;
  text: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  text: string;
};

export type QuoteField = {
  label: string;
  name: string;
  type: "text" | "tel" | "email" | "textarea" | "select";
  placeholder: string;
  options?: string[];
};

export type SiteData = {
  name: string;
  phone: string;
  phoneHref: string;
  tagline: string;
  logo: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    headline: string;
    text: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
  };
  quote: {
    title: string;
    text: string;
    fields: QuoteField[];
    button: string;
  };
  trust: string[];
  intro: {
    eyebrow: string;
    title: string;
    text: string;
    points: string[];
  };
  services: ServiceItem[];
  problem: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };
  projectTypes: ProjectType[];
  gallery: GalleryImage[];
  process: ProcessStep[];
  finalCta: {
    eyebrow: string;
    title: string;
    text: string;
  };
};