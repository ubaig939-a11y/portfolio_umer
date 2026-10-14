export interface GmbProject {
  id: string;
  name: string;
  industry: string;
  category: string;
  period: string;
  overview: string;
  strategy: string;
  results: string;
  insights: string;
  metrics: {
    calls?: string;
    directions?: string;
    websiteClicks?: string;
    totalInteractions?: string;
  };
  images: string[];
}

export const gmbProjects: GmbProject[] = [
  {
    id: "emergency-veterinary-services-gmb",
    name: "Emergency Veterinary Services",
    industry: "Emergency Veterinary Clinic, United States",
    category: "Veterinary & Healthcare",
    period: "May 2026 – Oct 2026",
    overview: "Local search and Google Maps profile optimization for a 24/7 emergency veterinary hospital serving critical pet healthcare emergencies across the metropolitan area.",
    strategy: "Enhanced primary and secondary veterinary categories, updated emergency operating hours, refined local service area signals, and structured high-intent call actions.",
    results: "Generated 2,154 phone calls, 1,065 direction requests, and 911 website visits directly from the Google Business Profile over the 6-month period.",
    insights: "High volume of call actions (over 2,100 calls) demonstrates immediate emergency intent alignment, where direct phone contact is the primary conversion pathway.",
    metrics: {
      calls: "2,154",
      directions: "1,065",
      websiteClicks: "911",
      totalInteractions: "4,130"
    },
    images: [
      "/assets/images/gmb_image21.png",
      "/assets/images/gmb_image22.png",
      "/assets/images/gmb_image23.png"
    ]
  },
  {
    id: "veterinary-healthcare-gmb",
    name: "Veterinary Healthcare",
    industry: "Veterinary Hospital & Animal Clinic, United States",
    category: "Veterinary & Healthcare",
    period: "May 2026 – Oct 2026",
    overview: "Comprehensive Google Business Profile management for a full-service animal hospital providing preventive, surgical, and wellness care for companion animals.",
    strategy: "Structured service menus with dedicated veterinary offerings, verified local NAP consistency, and optimized profile attributes to support search and map discoverability.",
    results: "Captured 1,033 phone calls, 730 direction requests, and 590 website clicks from local pet owners seeking veterinary services.",
    insights: "Direction requests (730) and calls (1,033) together outpaced website visits, highlighting the importance of direct-to-clinic local map actions.",
    metrics: {
      calls: "1,033",
      directions: "730",
      websiteClicks: "590",
      totalInteractions: "2,353"
    },
    images: [
      "/assets/images/gmb_image4.png",
      "/assets/images/gmb_image5.png",
      "/assets/images/gmb_image6.png"
    ]
  },
  {
    id: "dog-and-cat-veterinary-care-gmb",
    name: "Dog and Cat Veterinary Care",
    industry: "Small Animal Veterinary Hospital, United States",
    category: "Veterinary & Healthcare",
    period: "May 2026 – Oct 2026",
    overview: "Local presence optimization for an established small animal hospital focusing on routine wellness, specialized diagnostics, and surgical veterinary treatments.",
    strategy: "Refined business category associations, geo-relevant image additions, profile updates, and enhanced local citations across authoritative directories.",
    results: "Delivered 2,224 direct phone calls, 1,545 driving direction requests, and 1,215 website clicks over the tracked 6-month reporting period.",
    insights: "Balanced high-performance across all three core local actions (calls, navigation, and site clicks) shows broad authority across branded and discovery searches.",
    metrics: {
      calls: "2,224",
      directions: "1,545",
      websiteClicks: "1,215",
      totalInteractions: "4,984"
    },
    images: [
      "/assets/images/gmb_image35.png",
      "/assets/images/gmb_image36.png",
      "/assets/images/gmb_image37.png"
    ]
  },
  {
    id: "flooring-retail-renovation-gmb",
    name: "Flooring Retail and Home Renovation",
    industry: "Flooring Showroom & Installation Contractor, United States",
    category: "Home Improvement & Retail",
    period: "May 2026 – Oct 2026",
    overview: "Google Maps visibility expansion for a regional flooring showroom and home remodeling retailer offering hardwood, tile, laminate, and carpet solutions.",
    strategy: "Showcased product categories on the Google Business Profile, refreshed showroom location media, and aligned local landing page URLs to map listing anchors.",
    results: "Generated 2,601 driving direction requests to the showroom, 1,023 website clicks, and 934 direct customer phone calls.",
    insights: "Direction requests (2,601) significantly exceeded phone calls, confirming strong in-person showroom foot traffic driven by local map queries.",
    metrics: {
      calls: "934",
      directions: "2,601",
      websiteClicks: "1,023",
      totalInteractions: "4,558"
    },
    images: [
      "/assets/images/gmb_image7.png",
      "/assets/images/gmb_image8.png",
      "/assets/images/gmb_image9.png"
    ]
  },
  {
    id: "building-materials-distribution-gmb",
    name: "Building Materials and Distribution",
    industry: "Commercial Building Supplies & B2B Distribution, United States",
    category: "Commercial & B2B",
    period: "May 2026 – Oct 2026",
    overview: "Local and regional B2B visibility strategy for a commercial distributor supplying building materials, hardware, and construction supplies to trade contractors.",
    strategy: "Configured wholesale and distributor profile attributes, added commercial supply categories, and optimized map coordinates for delivery and pickup logistics.",
    results: "Secured 2,808 direction requests to the distribution facility, 1,141 inbound contractor phone calls, and 1,082 website inquiries.",
    insights: "Exceptional volume of navigational requests (2,808) reflects daily contractor supply runs and warehouse pickups stimulated by Google Maps search prominence.",
    metrics: {
      calls: "1,141",
      directions: "2,808",
      websiteClicks: "1,082",
      totalInteractions: "5,031"
    },
    images: [
      "/assets/images/gmb_image13.png",
      "/assets/images/gmb_image14.png",
      "/assets/images/gmb_image15.png"
    ]
  },
  {
    id: "pet-care-wellness-gmb",
    name: "Pet Care and Animal Wellness",
    industry: "In-Home Veterinary Care & Compassionate Wellness, United States",
    category: "Veterinary & Healthcare",
    period: "May 2026 – Oct 2026",
    overview: "Google Business Profile local service optimization for a specialized in-home veterinary service providing palliative care, hospice, and peaceful home euthanasia.",
    strategy: "Structured service-area business (SAB) coverage across target metropolitan zip codes, refined sensitive care attributes, and established empathetic service listings.",
    results: "Achieved 2,790 website clicks and 474 direct phone calls from families researching supportive and compassionate pet care options.",
    insights: "Website clicks (2,790) formed the predominant conversion path, reflecting clients' need to thoroughly read procedure details and philosophy before placing a call.",
    metrics: {
      calls: "474",
      websiteClicks: "2,790",
      totalInteractions: "3,264"
    },
    images: [
      "/assets/images/gmb_image24.png",
      "/assets/images/gmb_image25.png"
    ]
  },
  {
    id: "photography-camera-lighting-rentals-gmb",
    name: "Photography, Studio & Lighting Equipment Rentals",
    industry: "Commercial Cinema, Studio Stages & Lighting Rentals, United States",
    category: "Commercial & B2B",
    period: "May 2026 – Oct 2026",
    overview: "Multi-profile Google Business Profile management for a premier production partner comprising camera gear rentals, virtual 3D soundstages, and commercial lighting facilities.",
    strategy: "Coordinated optimization across specialized business divisions (Camera Rentals, 3D Studio, Lighting Rentals), aligning distinct category listings and production specs.",
    results: "Combined performance across divisions generated 2,559 direction requests to rental stages, 952 phone inquiries, and 653 verified website sessions.",
    insights: "Aggregating multi-facility profile performance reveals steady demand across commercial production crews requiring rapid dispatch and studio pickup.",
    metrics: {
      calls: "952",
      directions: "2,559",
      websiteClicks: "653",
      totalInteractions: "4,164"
    },
    images: [
      "/assets/images/gmb_image26.png",
      "/assets/images/gmb_image27.png",
      "/assets/images/gmb_image28.png",
      "/assets/images/gmb_image29.png",
      "/assets/images/gmb_image30.png",
      "/assets/images/gmb_image31.png",
      "/assets/images/gmb_image32.png",
      "/assets/images/gmb_image33.png",
      "/assets/images/gmb_image34.png"
    ]
  },
  {
    id: "home-improvement-cabinetry-gmb",
    name: "Home Improvement and Custom Cabinetry",
    industry: "Custom Cabinetry & Home Remodeling Contractor, United States",
    category: "Home Improvement & Retail",
    period: "May 2026 – Oct 2026",
    overview: "Local search and Google Maps enhancement for a residential home remodeling and custom cabinetry contractor targeting homeowners seeking kitchen upgrades.",
    strategy: "Curated portfolio gallery additions, updated contractor business categories, and reinforced local service radius keywords across profile descriptions.",
    results: "Generated 562 driving direction requests, 178 website visits, and 109 direct consultation phone calls during the reporting timeframe.",
    insights: "Consistent map views and showroom/office direction requests demonstrate local homeowner consideration during project planning phases.",
    metrics: {
      calls: "109",
      directions: "562",
      websiteClicks: "178",
      totalInteractions: "849"
    },
    images: [
      "/assets/images/gmb_image10.png",
      "/assets/images/gmb_image11.png",
      "/assets/images/gmb_image12.png"
    ]
  },
  {
    id: "doors-building-solutions-gmb",
    name: "Doors and Building Solutions",
    industry: "Architectural Doors & Hardware Solutions, United States",
    category: "Home Improvement & Retail",
    period: "May 2026 – Oct 2026",
    overview: "Local profile visibility establishment for an architectural door and hardware showroom focusing on modern interior and exterior building solutions.",
    strategy: "Structured profile architecture, verified location data, and linked primary architectural hardware services to Google Maps search triggers.",
    results: "Captured 288 direction requests to the showroom location, along with active direct customer discovery on Google Search and Maps.",
    insights: "Direction requests to the showroom served as the leading initial indicator of local interest for tangible architectural hardware products.",
    metrics: {
      calls: "3",
      directions: "288",
      websiteClicks: "7",
      totalInteractions: "298"
    },
    images: [
      "/assets/images/gmb_image16.png",
      "/assets/images/gmb_image17.png",
      "/assets/images/gmb_image18.png"
    ]
  },
  {
    id: "veterinary-clinical-services-gmb",
    name: "Veterinary Clinical Services",
    industry: "General Practice Veterinary Clinic, United States",
    category: "Veterinary & Healthcare",
    period: "May 2026 – Oct 2026",
    overview: "Google Business Profile optimization for a veterinary medical clinic delivering clinical consultations, diagnostic testing, and routine care.",
    strategy: "Optimized clinic service hours, emergency response guidelines, and pet care category attributes to capture regional search intent.",
    results: "Recorded 703 navigation requests to the clinic and 496 direct client phone calls over the measured period.",
    insights: "Substantial direct call volume (496) and route requests (703) highlight local reliance on Google Maps for immediate animal healthcare access.",
    metrics: {
      calls: "496",
      directions: "703",
      totalInteractions: "1,199"
    },
    images: [
      "/assets/images/gmb_image19.png",
      "/assets/images/gmb_image20.png"
    ]
  },
  {
    id: "emergency-specialty-veterinary-gmb",
    name: "Emergency and Specialty Veterinary Care",
    industry: "Specialty & Emergency Veterinary Care Center, United States",
    category: "Veterinary & Healthcare",
    period: "May 2026 – Oct 2026",
    overview: "Targeted profile optimization for a specialized veterinary medical center handling complex referral cases, critical trauma, and specialty oncology/surgery.",
    strategy: "Positioned tertiary referral and specialty hospital attributes, clarified 24/7 intake protocols, and refined hospital entry coordinates.",
    results: "Achieved 236 driving direction requests, 158 website visits, and 52 urgent case phone calls from pet owners needing emergency specialty care.",
    insights: "Direction requests (236) and specialized web inquiries outpaced calls, pointing toward planned referral visits and emergency transit to the hospital.",
    metrics: {
      calls: "52",
      directions: "236",
      websiteClicks: "158",
      totalInteractions: "446"
    },
    images: [
      "/assets/images/gmb_image38.png",
      "/assets/images/gmb_image39.png",
      "/assets/images/gmb_image40.png"
    ]
  },
  {
    id: "local-business-performance-gmb",
    name: "Google Business Profile Performance Optimization",
    industry: "Local Business Services & Commercial Operations, United States",
    category: "Commercial & B2B",
    period: "May 2026 – Oct 2026",
    overview: "Google Business Profile strategy demonstrating local map pack dominance, review optimization, and high-frequency customer interaction management.",
    strategy: "Holistic Google Business Profile optimization encompassing category ranking, service attribute structuring, and customer interaction channel refinement.",
    results: "Produced 1,147 inbound phone calls, 601 website visits, and 332 direction requests directly from local Google Search and Maps interactions.",
    insights: "Strong inbound call conversion (1,147 calls) illustrates the commercial effectiveness of a fully optimized Google Business Profile for high-intent local queries.",
    metrics: {
      calls: "1,147",
      directions: "332",
      websiteClicks: "601",
      totalInteractions: "2,080"
    },
    images: [
      "/assets/images/gmb_image1.png",
      "/assets/images/gmb_image2.png",
      "/assets/images/gmb_image3.png"
    ]
  }
];
