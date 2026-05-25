export const SITE_URL = "https://colasola.com";

export const businessProfile = {
  name: "ColaSola",
  legalName: "ColaSola",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "hi@colasola.com",
  telephone: "+66 6 2345 8238",
  lineId: "cola-sola",
  address: {
    streetAddress: "169 Moo 5, Nong Hoi Sub-district",
    addressLocality: "Mueang Chiang Mai District",
    addressRegion: "Chiang Mai",
    addressCountry: "TH",
  },
  sameAs: [
    "https://www.facebook.com/share/1CXofwPmAn/?mibextid=wwXIfr",
    "https://line.me/ti/p/~cola-sola",
    "https://www.tiktok.com/@colasola6",
  ],
};

export const primaryServiceAreas = [
  "Chiang Mai",
  "Chiang Rai",
  "Lamphun",
  "Lampang",
  "Phayao",
  "Mae Hong Son",
  "Northern Thailand",
];

export const secondaryServiceAreas = ["Phuket", "Pattaya", "Chon Buri"];

export const solarServices = [
  {
    name: "Residential rooftop solar",
    description: "3kW-10kW grid-tied solar systems for villas, homes, and private residences.",
  },
  {
    name: "Small commercial solar",
    description: "10kW-100kW systems for resorts, hotels, apartments, farms, and boutique businesses.",
  },
  {
    name: "PEA grid-connection handling",
    description: "Documentation and coordination for Provincial Electricity Authority grid connection.",
  },
  {
    name: "Local solar O&M",
    description: "Monitoring, panel cleaning, inverter checks, and local after-sales support.",
  },
];

export const geoKeywords = [
  "solar installer Chiang Mai",
  "solar panels Chiang Rai",
  "Northern Thailand solar company",
  "Thailand villa solar",
  "PEA grid connection solar",
  "residential solar Thailand",
  "commercial solar Chiang Mai",
  "ColaSola",
];

export function buildLocalBusinessSchema(description: string, pageUrl = SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: businessProfile.name,
    legalName: businessProfile.legalName,
    url: businessProfile.url,
    logo: businessProfile.logo,
    image: businessProfile.logo,
    email: businessProfile.email,
    telephone: businessProfile.telephone,
    priceRange: "$$",
    description,
    inLanguage: ["th", "en", "zh", "ja"],
    address: {
      "@type": "PostalAddress",
      ...businessProfile.address,
    },
    areaServed: [...primaryServiceAreas, ...secondaryServiceAreas].map((name) => ({
      "@type": "Place",
      name,
      addressCountry: "TH",
    })),
    knowsAbout: [
      "Residential solar power systems",
      "Villa rooftop solar",
      "Small commercial solar",
      "PEA grid connection",
      "Solar installation in Northern Thailand",
      "Solar operations and maintenance",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar services in Northern Thailand",
      itemListElement: solarServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          areaServed: primaryServiceAreas.map((name) => ({
            "@type": "Place",
            name,
            addressCountry: "TH",
          })),
          provider: {
            "@id": `${SITE_URL}/#organization`,
          },
        },
      })),
    },
    sameAs: businessProfile.sameAs,
    mainEntityOfPage: pageUrl,
  };
}

export function buildWebSiteSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: businessProfile.name,
    url: SITE_URL,
    description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: ["th", "en", "zh", "ja"],
  };
}

export function buildFaqSchema(faqs: Array<{ q: string; a: string }>, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function buildBreadcrumbSchema(pathname: string, pageName: string) {
  const path = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      ...(path === "/"
        ? []
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: pageName,
              item: `${SITE_URL}${path}`,
            },
          ]),
    ],
  };
}
