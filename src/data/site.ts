// src/data/site.ts

import type { SiteData } from "@/types/site";

export const siteData: SiteData = {
  name: "Apex Erosion Systems",
  phone: "903-280-6403",
  phoneHref: "tel:9032806403",
  tagline: "Hydroseeding. Erosion Control. Drainage. Site Stabilization.",
  logo: "/images/apex/logo.png",

  nav: [
    { label: "Services", href: "/#services" },
    { label: "Problems We Fix", href: "/#problems" },
    { label: "Gallery", href: "/gallery" },
    { label: "Process", href: "/#process" },
  ],

  hero: {
    eyebrow: "Commercial site finish work starts with stabilization.",
    headline:
      "Hydroseeding, erosion control, drainage, and site stabilization for commercial and residential projects.",
    text:
      "Apex Erosion Systems helps builders, contractors, developers, and property owners stabilize exposed soil, control runoff, handle drainage concerns, and finish sites with hydroseeding, seeding, sod, and light grading when needed.",
    primaryCta: "Call 903-280-6403",
    secondaryCta: "View Services",
    image: "/images/apex/gallery-17.jpg",
  },

  quote: {
    title: "Tell us what the site needs.",
    text:
      "Whether it is a commercial build, new construction site, drainage issue, washout, bare soil, or final lawn finish, Apex can look at the ground first and help plan the right stabilization or finish option.",
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
          "Hydroseeding",
          "Erosion control",
          "Drainage problem",
          "Site stabilization",
          "Sod or seeding",
          "New construction lawn",
          "Light grading or site shaping",
          "Damaged yard repair",
        ],
      },
      {
        label: "Project details",
        name: "details",
        type: "textarea",
        placeholder:
          "Commercial site, new build, drainage issue, washout, bare soil, hydroseeding, erosion control, or what needs finished",
      },
    ],
  },

  trust: [
    "Commercial Ready",
    "Hydroseeding",
    "Erosion Control",
    "Drainage Support",
    "Site Stabilization",
  ],

  intro: {
    eyebrow: "More than seed on dirt",
    title: "A finished site starts before the seed goes down.",
    text:
      "Most companies can spray seed and leave. Apex Erosion Systems takes a more complete approach. Before the finish work happens, the focus is on what matters most: drainage, soil stabilization, erosion control, prep work, and the right finish for the site.",
    points: [
      "Commercial site stabilization",
      "New construction finish work",
      "Standing water and washouts",
      "Bare soil that needs controlled",
    ],
  },

  services: [
    {
      title: "Hydroseeding",
      text:
        "A strong finish option for commercial properties, new builds, repaired areas, slopes, and open soil that needs coverage started quickly.",
    },
    {
      title: "Erosion Control",
      text:
        "Soil stabilization for bare ground, slopes, washout areas, construction sites, and spaces where water keeps moving dirt.",
    },
    {
      title: "Drainage Solutions",
      text:
        "Water control support for commercial sites, new construction, and problem areas where runoff, standing water, or poor drainage can create bigger issues.",
    },
    {
      title: "Site Stabilization",
      text:
        "Stabilization for exposed soil, open ground, slopes, drainage paths, and construction areas that need to hold up better after the work is done.",
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
      title: "Light Grading & Site Shaping",
      text:
        "Light grading and shaping when needed to help prepare the ground for drainage, erosion control, hydroseeding, sod, or a cleaner finished surface.",
    },
    {
      title: "Washout & Site Repair",
      text:
        "Repair support for sites damaged by runoff, standing water, washouts, exposed soil, or unfinished dirt work.",
    },
  ],

  problem: {
    eyebrow: "Water problems slow projects down",
    title: "Fix drainage, washouts, and bare soil before they become bigger problems.",
    text:
      "Standing water, washouts, and poor drainage can damage finished work, move soil, create erosion, and leave a commercial or residential project looking incomplete. Apex focuses on stabilizing the ground before finishing it with seed, sod, or hydroseeding.",
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
        "For business sites, open ground, and finished properties that need hydroseeding, erosion control, drainage support, or soil stabilization.",
    },
    {
      title: "Construction site finish work",
      text:
        "For builders and contractors who need the outside stabilized, cleaned up, and ready after the main work is done.",
    },
    {
      title: "New home developments",
      text:
        "For new builds and development areas where the ground needs stabilized, seeded, protected from erosion, or finished cleanly.",
    },
    {
      title: "Poor drainage areas",
      text:
        "For sites where water keeps standing, running the wrong direction, or causing ongoing ground problems.",
    },
    {
      title: "Bare lots and open soil",
      text:
        "For exposed ground that needs erosion control, hydroseeding, seed, sod, or light shaping to help stabilize the area.",
    },
    {
      title: "Residential yard repairs",
      text:
        "For homeowners dealing with washouts, bare soil, drainage problems, erosion issues, or yards that need finished.",
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
      alt: "Fresh soil preparation around a new construction property",
      label: "Site Prep",
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
      alt: "Prepared dirt road and construction site access area",
      label: "Site Access Prep",
    },
    {
      src: "/images/apex/gallery-8.jpg",
      alt: "Prepared soil rows and erosion control work on a larger open property",
      label: "Large Site Prep",
    },
    {
      src: "/images/apex/gallery-9.jpg",
      alt: "Drainage path and bare soil preparation beside a structure",
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
      alt: "Equipment shaping soil for drainage and site preparation",
      label: "Equipment Site Prep",
    },
    {
      src: "/images/apex/gallery-13.jpg",
      alt: "Hydroseeding application along a prepared property edge",
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
    {
      src: "/images/apex/gallery-17.jpg",
      alt: "Hydroseeding across a large open field with a treeline in the background",
      label: "Field Hydroseeding",
    },
    {
      src: "/images/apex/gallery-18.jpg",
      alt: "Hydroseeded open ground and bare soil stabilization near a lake or pond edge",
      label: "Open Ground Stabilization",
    },
    {
      src: "/images/apex/gallery-19.jpg",
      alt: "Hydroseeding along a sloped edge beside open property",
      label: "Slope Stabilization",
    },
    {
      src: "/images/apex/gallery-20.jpg",
      alt: "New construction property with finished soil preparation and erosion control work",
      label: "Construction Site Finish",
    },
    {
      src: "/images/apex/gallery-21.jpg",
      alt: "Fresh dirt work and soil preparation around a new construction building",
      label: "Fresh Dirt Work",
    },
    {
      src: "/images/apex/gallery-22.jpg",
      alt: "Prepared open lot around a building site before final stabilization",
      label: "Open Lot Prep",
    },
    {
      src: "/images/apex/gallery-23.jpg",
      alt: "Hydroseeding and erosion control work along a roadside or driveway edge",
      label: "Roadside Stabilization",
    },
    {
      src: "/images/apex/gallery-24.jpg",
      alt: "Hydroseeding equipment applying seed mixture across a large property",
      label: "Hydroseeding Application",
    },
    {
      src: "/images/apex/gallery-25.jpg",
      alt: "Drainage channels and hydroseeding work across a large open site",
      label: "Drainage Channel Work",
    },
    {
      src: "/images/apex/gallery-26.jpg",
      alt: "Fresh red dirt and soil preparation before hydroseeding",
      label: "Red Dirt Site Prep",
    },
    {
      src: "/images/apex/gallery-27.jpg",
      alt: "Hydroseeded open property with exposed soil and stabilization work",
      label: "Property Stabilization",
    },
    {
      src: "/images/apex/gallery-28.jpg",
      alt: "Hydroseeding and soil stabilization around a cabin or new build",
      label: "Cabin Site Finish",
    },
    {
      src: "/images/apex/gallery-29.jpg",
      alt: "Hydroseeded lawn area around a light-colored residential building",
      label: "Residential Site Finish",
    },
    {
      src: "/images/apex/gallery-30.jpg",
      alt: "Hydroseeding and erosion control work across a wooded property edge",
      label: "Woodline Stabilization",
    },
  ],

  process: [
    {
      step: "01",
      title: "Walk the site and check the problem areas",
      text:
        "The first step is looking at how water moves, where soil is exposed, where erosion is happening, and what the finished site needs to accomplish.",
    },
    {
      step: "02",
      title: "Prep the ground for stabilization",
      text:
        "Soil prep, light shaping, and site preparation help create a better base before erosion control, hydroseeding, sod, or seeding begins.",
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
    title: "Need hydroseeding, erosion control, drainage, or site stabilization handled?",
    text:
      "Call Apex Erosion Systems for commercial site work, new construction finish work, drainage support, erosion control, hydroseeding, sod, seeding, and soil stabilization.",
  },
};