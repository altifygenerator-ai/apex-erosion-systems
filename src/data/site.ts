// src/data/site.ts

import type { SiteData } from "@/types/site";

export const siteData: SiteData = {
  name: "Apex Erosion Systems",
  phone: "903-280-6403",
  phoneHref: "tel:9032806403",
  tagline: "Drainage. Grading. Erosion Control. Hydroseeding.",
  logo: "/images/apex/logo.png",

  nav: [
    { label: "Services", href: "#services" },
    { label: "Problems We Fix", href: "#problems" },
    { label: "Gallery", href: "#gallery" },
    { label: "Process", href: "#process" },
  ],

  hero: {
    eyebrow: "Commercial site finish work starts with the ground.",
    headline:
      "Drainage, grading, erosion control, and hydroseeding for commercial and residential projects.",
    text:
      "Apex Erosion Systems helps builders, contractors, developers, and property owners control water, stabilize soil, shape rough ground, and finish sites with hydroseeding, sod, or seeding.",
    primaryCta: "Call 903-280-6403",
    secondaryCta: "View Services",
    image: "/images/apex/gallery-2.jpg",
  },

  quote: {
    title: "Tell us what the site needs.",
    text:
      "Whether it is a commercial build, new construction site, drainage issue, washout, bare soil, or final lawn finish, Apex can look at the ground first and help plan the right next step.",
    button: "Request a Quote",
    fields: [
      {
        label: "Name",
        name: "name",
        type: "text",
        placeholder: "Your name",
      },
      {
        label: "Phone",
        name: "phone",
        type: "tel",
        placeholder: "Best phone number",
      },
      {
        label: "Project type",
        name: "projectType",
        type: "select",
        placeholder: "Choose a project type",
        options: [
          "Drainage problem",
          "Yard grading",
          "Hydroseeding",
          "Sod or seeding",
          "Erosion control",
          "New construction lawn",
          "Damaged yard repair",
        ],
      },
      {
        label: "Project details",
        name: "details",
        type: "textarea",
        placeholder: "Commercial site, new build, drainage issue, washout, bare soil, grading, or what needs finished",
      },
    ],
  },

  trust: [
    "Commercial Ready",
    "Precision Grading",
    "Erosion Control",
    "Hydroseeding",
    "New Construction",
  ],

  intro: {
    eyebrow: "More than seed on dirt",
    title: "A finished site starts before the seed goes down.",
    text:
      "Most companies can spray seed and leave. Apex Erosion Systems takes a more complete approach. Before the finish work happens, the focus is on what matters most: drainage, grading, soil prep, and erosion control.",
    points: [
      "Commercial site stabilization",
      "New construction finish work",
      "Standing water and washouts",
      "Bare soil that needs controlled",
    ],
  },

  services: [
    {
      title: "Drainage Solutions",
      text:
        "Water control for commercial sites, new construction, and problem areas where runoff, standing water, or poor drainage can create bigger issues.",
    },
    {
      title: "Precision Grading & Site Shaping",
      text:
        "Grading and shaping that helps prepare the site for drainage, erosion control, hydroseeding, sod, or a cleaner finished surface.",
    },
    {
      title: "Erosion Control",
      text:
        "Soil stabilization for bare ground, slopes, washout areas, construction sites, and spaces where water keeps moving dirt.",
    },
    {
      title: "Hydroseeding",
      text:
        "A strong finish option for commercial properties, new builds, repaired areas, and open soil that needs coverage started quickly.",
    },
    {
      title: "Sod & Seeding",
      text:
        "Seed, sod, and soil prep options for projects that need a finished lawn or stabilized surface instead of loose dirt.",
    },
    {
      title: "New Construction Site Finish",
      text:
        "Exterior finish work for builders, contractors, and property owners after the main construction work is complete.",
    },
    {
      title: "Foundation & Water Control",
      text:
        "Grading and drainage work around structures to help move water away from areas where it should not sit.",
    },
    {
      title: "Washout & Site Repair",
      text:
        "Repair support for sites damaged by runoff, standing water, washouts, poor grading, or unfinished dirt work.",
    },
  ],

  problem: {
    eyebrow: "Water problems slow projects down",
    title: "Fix drainage, washouts, and bare soil before they become bigger problems.",
    text:
      "Standing water, washouts, and poor drainage can damage finished work, move soil, create erosion, and leave a commercial or residential project looking incomplete. Apex focuses on correcting the ground before finishing it with seed, sod, or hydroseeding.",
    items: [
      "Standing water",
      "Washouts",
      "Poor drainage",
      "Bare soil",
      "Foundation concern areas",
      "Unfinished construction sites",
    ],
  },

  projectTypes: [
    {
      title: "Commercial properties",
      text:
        "For business sites, open ground, and finished properties that need drainage, grading, erosion control, or hydroseeding.",
    },
    {
      title: "Construction site finish work",
      text:
        "For builders and contractors who need the outside stabilized, cleaned up, and ready after the main work is done.",
    },
    {
      title: "New home developments",
      text:
        "For new builds and development areas where the ground still needs shaped, stabilized, seeded, or finished.",
    },
    {
      title: "Poor drainage areas",
      text:
        "For sites where water keeps standing, running the wrong direction, or causing ongoing ground problems.",
    },
    {
      title: "Bare lots and open soil",
      text:
        "For exposed ground that needs grading, erosion control, hydroseeding, seed, or sod to help stabilize the area.",
    },
    {
      title: "Residential yard repairs",
      text:
        "For homeowners dealing with washouts, poor grading, bare soil, drainage problems, or yards that need finished.",
    },
  ],

gallery: [
  {
    src: "/images/apex/gallery-1.jpg",
    alt: "Hydroseeding and soil stabilization around a commercial building site",
    label: "Commercial Hydroseeding",
  },
  {
    src: "/images/apex/gallery-2.jpg",
    alt: "Fresh grading and soil preparation around a new construction property",
    label: "Site Grading & Prep",
  },
  {
    src: "/images/apex/gallery-3.jpg",
    alt: "Drainage and erosion control work beside a new construction home",
    label: "Drainage & Erosion Control",
  },
  {
    src: "/images/apex/gallery-4.jpg",
    alt: "Dust control and soil stabilization work near a residential construction site",
    label: "Soil Stabilization",
  },
  {
    src: "/images/apex/gallery-5.jpg",
    alt: "Finished hydroseeding around a newly built home",
    label: "New Build Lawn Finish",
  },
  {
    src: "/images/apex/gallery-6.jpg",
    alt: "Hydroseeding and lawn establishment around a pool and patio project",
    label: "Pool Area Hydroseeding",
  },
  {
    src: "/images/apex/gallery-7.jpg",
    alt: "Freshly graded dirt road and construction site access area",
    label: "Access Road Grading",
  },
  {
    src: "/images/apex/gallery-8.jpg",
    alt: "Prepared soil rows and erosion control work on a larger open property",
    label: "Large Site Prep",
  },
  {
    src: "/images/apex/gallery-9.jpg",
    alt: "Graded drainage path and bare soil preparation beside a structure",
    label: "Drainage Path Prep",
  },
  {
    src: "/images/apex/gallery-10.jpg",
    alt: "Bright hydroseed application in a drainage ditch and erosion control area",
    label: "Ditch Stabilization",
  },
  {
    src: "/images/apex/gallery-11.jpg",
    alt: "Hydroseeded open lot with soil stabilization across a wide property",
    label: "Open Lot Hydroseeding",
  },
  {
    src: "/images/apex/gallery-12.jpg",
    alt: "Equipment grading and shaping soil for drainage and site preparation",
    label: "Equipment Grading",
  },
  {
    src: "/images/apex/gallery-13.jpg",
    alt: "Hydroseeding application along a graded property edge",
    label: "Edge Stabilization",
  },
  {
    src: "/images/apex/gallery-14.jpg",
    alt: "Finished lawn and sidewalk area after seeding or sod establishment",
    label: "Finished Lawn Area",
  },
  {
    src: "/images/apex/gallery-15.jpg",
    alt: "Hydroseeded lawn area around a new residential build",
    label: "Residential Hydroseeding",
  },
  {
    src: "/images/apex/gallery-16.jpg",
    alt: "Hydroseeding application in a wooded drainage and erosion control area",
    label: "Wooded Drainage Control",
  },
],
  process: [
    {
      step: "01",
      title: "Walk the site and check the problem areas",
      text:
        "The first step is looking at how water moves, where soil is exposed, where the grade needs corrected, and what the finished site needs to accomplish.",
    },
    {
      step: "02",
      title: "Shape the ground and prep the soil",
      text:
        "Grading and soil prep help create a better base before erosion control, hydroseeding, sod, or seeding begins.",
    },
    {
      step: "03",
      title: "Control water and stabilize exposed areas",
      text:
        "Washouts, bare soil, slopes, drainage paths, and problem areas can be addressed before the final finish is added.",
    },
    {
      step: "04",
      title: "Finish with hydroseeding, seed, or sod",
      text:
        "Once the groundwork is handled, the site can be finished with the right option for coverage, stabilization, and a cleaner appearance.",
    },
  ],

  finalCta: {
    eyebrow: "Get the site finished right",
    title: "Need drainage, grading, erosion control, or hydroseeding handled?",
    text:
      "Call Apex Erosion Systems for commercial site work, new construction finish work, drainage solutions, erosion control, hydroseeding, sod, and soil prep.",
  },
};