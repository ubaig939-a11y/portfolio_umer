export interface SeoProject {
  id: string;
  name: string;
  industry: string;
  category: string;
  period: string;
  objective: string;
  focus: string;
  results: string;
  takeaway: string;
  metrics: {
    clicks?: string;
    impressions?: string;
    ctr?: string;
    position?: string;
  };
  images: string[];
}

export const seoProjects: SeoProject[] = [
  {
    id: "emergency-veterinary-services",
    name: "Emergency Veterinary Services",
    industry: "Emergency veterinary care, United States",
    category: "Veterinary & Pet Care",
    period: "6 months vs previous 6 months",
    objective: "Grow organic visibility for emergency-care searches, where people need help immediately.",
    focus: "High-intent emergency queries: improving relevance as well as reach.",
    results: "Clicks up 241% and impressions up 131%, with CTR improving from 0.6% to 0.9%.",
    takeaway: "CTR rose alongside traffic, which indicates the extra visits were better matched to search intent.",
    metrics: {
      clicks: "+241%",
      impressions: "+131%",
      ctr: "0.9%",
      position: "6.6"
    },
    images: ["/assets/images/seo_page11_img1.png"]
  },
  {
    id: "emergency-and-specialty-veterinary",
    name: "Emergency and Specialty Veterinary Care",
    industry: "Veterinary services, United States",
    category: "Veterinary & Pet Care",
    period: "6 months vs previous 6 months",
    objective: "Increase reach while holding and improving average ranking position.",
    focus: "Growing keyword reach and improving position at the same time.",
    results: "Clicks up 73% and impressions up 153%, with average position improving from 13.5 to 11.7.",
    takeaway: "Growing reach and improving position together is the harder combination, as new keywords usually start low.",
    metrics: {
      clicks: "+73%",
      impressions: "+153%",
      position: "11.7"
    },
    images: ["/assets/images/seo_page12_img1.png"]
  },
  {
    id: "flooring-retail",
    name: "Flooring Retail and Home Renovation",
    industry: "Flooring retail, United States",
    category: "Home Improvement & Retail",
    period: "6 months vs previous 6 months",
    objective: "Move a retail site from page two toward page one.",
    focus: "Structural work on category and product pages.",
    results: "Impressions nearly tripled (+185%), clicks up 67%, and average position improved by almost six places.",
    takeaway: "Category and product page structure is what moves a retail site from page two to page one.",
    metrics: {
      clicks: "+67%",
      impressions: "+185%",
      position: "11.9"
    },
    images: ["/assets/images/seo_page16_img1.png", "/assets/images/seo_page16_img2.png", "/assets/images/seo_page16_img3.png"]
  },
  {
    id: "flooring-and-home-improvement",
    name: "Flooring and Home Improvement",
    industry: "Flooring contractor, United States",
    category: "Home Improvement & Retail",
    period: "6 months vs previous 6 months",
    objective: "Grow organic clicks for a flooring contractor.",
    focus: "Better-matched search terms rather than wider exposure alone.",
    results: "Clicks more than doubled (+119%) and impressions rose 83%, with CTR improving from 0.5% to 0.6%.",
    takeaway: "Higher CTR alongside more clicks shows growth came from better-matched terms.",
    metrics: {
      clicks: "+119%",
      impressions: "+83%",
      ctr: "0.6%",
      position: "10.4"
    },
    images: ["/assets/images/seo_page17_img1.png"]
  },
  {
    id: "doors-and-building-solutions",
    name: "Doors and Building Solutions",
    industry: "Doors and interiors, United States",
    category: "Home Improvement & Retail",
    period: "6 months vs previous 6 months",
    objective: "Take a small site from almost no organic presence to a real one.",
    focus: "Expanding from a narrow handful of terms to a much wider keyword set.",
    results: "Clicks up 287% (203 to 786) and impressions up 366%, growing more than four and a half times.",
    takeaway: "Average position moved from 9.1 to 14.3 because keyword coverage widened. Read it alongside clicks and impressions.",
    metrics: {
      clicks: "+287%",
      impressions: "+366%",
      position: "14.3"
    },
    images: ["/assets/images/seo_page18_img1.png"]
  },
  {
    id: "pet-care-and-animal-wellness",
    name: "Pet Care and Animal Wellness",
    industry: "Veterinary clinic, United States",
    category: "Veterinary & Pet Care",
    period: "Last 6 months",
    objective: "Build steady, relevant organic growth for a veterinary clinic.",
    focus: "Ranking for relevant terms, not only broad searches.",
    results: "16.7K clicks and 1.27M impressions, with a steady climb across the whole period.",
    takeaway: "A 1.3% CTR and a top-ten average position show relevance as well as visibility.",
    metrics: {
      clicks: "16.7K",
      impressions: "1.27M",
      ctr: "1.3%",
      position: "7.3"
    },
    images: ["/assets/images/seo_page13_img1.png"]
  },
  {
    id: "veterinary-healthcare",
    name: "Veterinary Healthcare",
    industry: "Veterinary clinic, United States",
    category: "Veterinary & Pet Care",
    period: "Last 6 months, plus last 3 months",
    objective: "Turn a flat traffic trend into sustained organic growth.",
    focus: "Technical and content work (per source portfolio).",
    results: "2.45K clicks and 393K impressions. Traffic was flat through May and June, then lifted from late July.",
    takeaway: "The last-3-month view shows the gain holding rather than falling back.",
    metrics: {
      clicks: "2.45K",
      impressions: "393K",
      position: "7.9"
    },
    images: ["/assets/images/seo_page14_img1.png", "/assets/images/seo_page14_img2.png"]
  },
  {
    id: "dog-and-cat-veterinary",
    name: "Dog and Cat Veterinary Care",
    industry: "Veterinary clinic, United States",
    category: "Veterinary & Pet Care",
    period: "First 3 months of a new property",
    objective: "Establish organic visibility from zero on a new property.",
    focus: "A clean technical setup and a local SEO foundation.",
    results: "2.38K clicks and 392K impressions within three months, with no previous data.",
    takeaway: "A clean technical setup and proper local SEO foundation can start working quickly.",
    metrics: {
      clicks: "2.38K",
      impressions: "392K",
      ctr: "0.6%",
      position: "14.1"
    },
    images: ["/assets/images/seo_page15_img1.png"]
  },
  {
    id: "photography-and-camera-equipment",
    name: "Photography and Camera Equipment",
    industry: "Industrial imaging and optics",
    category: "Industrial & B2B",
    period: "6 months vs previous 6 months",
    objective: "Win visibility for the limited set of terms that bring in enquiries.",
    focus: "A technical B2B site where search volume is limited and every term matters.",
    results: "Impressions nearly doubled (+97%) and clicks rose 15%, with average position improving by four places.",
    takeaway: "Page-one positions for the terms that bring in enquiries matter more than raw volume.",
    metrics: {
      clicks: "+15%",
      impressions: "+97%",
      position: "8.5"
    },
    images: ["/assets/images/seo_page19_img1.png", "/assets/images/seo_page19_img2.png"]
  },
  {
    id: "building-materials-and-distribution",
    name: "Building Materials and Distribution",
    industry: "B2B distribution",
    category: "Industrial & B2B",
    period: "Last 3 months",
    objective: "Grow organic visibility for a small, specific B2B audience.",
    focus: "Specific, low-volume searches typical of B2B distribution.",
    results: "1.67K clicks and 153K impressions, with a steady upward trend on a low starting base.",
    takeaway: "A 1.1% CTR is healthy where searches are specific and the audience is small.",
    metrics: {
      clicks: "1.67K",
      impressions: "153K",
      ctr: "1.1%",
      position: "16.4"
    },
    images: ["/assets/images/seo_page20_img1.png"]
  }
];
