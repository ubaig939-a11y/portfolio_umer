export interface GoogleAdsProject {
  id: string;
  name: string;
  context: string;
  metrics: {
    spend: string;
    conversions: string;
    costPerConv?: string;
    phoneCalls?: string;
    other?: string;
    otherLabel?: string;
  };
  image?: string;
  keyResult?: string;
}

export const googleAdsProjects: GoogleAdsProject[] = [
  {
    id: "pet-end-of-life",
    name: "Pet End-of-Life Services",
    context: "Four borough-level search campaigns in the New York metro area, each with its own bids and ad copy, rather than one city-wide campaign.",
    metrics: {
      spend: "$34,276",
      conversions: "802",
      costPerConv: "$42.76",
      phoneCalls: "1,014",
      other: "16.52%",
      otherLabel: "Interaction Rate"
    },
    keyResult: "16.52% account interaction rate across four borough-level campaigns",
    image: "/assets/images/ads_page5_img1.jpeg"
  },
  {
    id: "vet-hospital",
    name: "Veterinary Hospital",
    context: "A local store visits Performance Max campaign paired with two call-focused search campaigns, all on Maximize Conversions.",
    metrics: {
      spend: "$16,235",
      conversions: "899",
      costPerConv: "$18.05",
      phoneCalls: "1,170",
      other: "$10.77",
      otherLabel: "PMax Cost/Conv"
    },
    keyResult: "$10.77 cost per conversion on Performance Max, lowest in the portfolio",
    image: "/assets/images/ads_page6_img1.jpeg"
  },
  {
    id: "flooring-retailer",
    name: "Flooring Retailer",
    context: "A broad search campaign, a Performance Max campaign, and a narrow product-specific search campaign, so high-intent product searches never competed with general category terms.",
    metrics: {
      spend: "$26,154",
      conversions: "948",
      phoneCalls: "1,506",
      other: "10.43%",
      otherLabel: "Conv Rate"
    },
    keyResult: "3 campaign types: broad search, Performance Max, product-specific",
    image: "/assets/images/ads_page7_img1.jpeg"
  },
  {
    id: "building-products",
    name: "Building Products Distributor",
    context: "Four campaigns split by product line and offer type. The lead-focused Performance Max campaign delivered 389 conversions at $12.95, less than half the account average, and held the largest budget share.",
    metrics: {
      spend: "$18,809",
      conversions: "693",
      costPerConv: "$27.14",
      phoneCalls: "1,085",
      other: "$12.95",
      otherLabel: "Lead PMax Cost/Conv"
    },
    keyResult: "$12.95 cost per conversion on the lead-focused Performance Max campaign",
    image: "/assets/images/ads_page8_img1.jpeg"
  },
  {
    id: "mobile-vet",
    name: "Mobile Veterinary Practice",
    context: "Conversion tracking separated phone calls, form leads, and booked appointments, so performance was judged on appointments actually booked rather than raw lead volume.",
    metrics: {
      spend: "$9,894",
      conversions: "212",
      phoneCalls: "293",
      other: "81",
      otherLabel: "Booked Appts"
    },
    keyResult: "81 booked appointments, tracked apart from calls and form leads",
    image: "/assets/images/ads_page9_img1.jpeg"
  },
  {
    id: "animal-hospital",
    name: "Animal Hospital",
    context: "Five campaigns separating brand, core service plus geo, individual service lines, and local PMax, giving clean attribution across very different search intents.",
    metrics: {
      spend: "$14,080",
      conversions: "289",
      costPerConv: "$48.72",
      phoneCalls: "570"
    },
    keyResult: "5 campaigns separating brand, service lines and local Performance Max",
    image: "/assets/images/ads_page10_img1.jpeg"
  },
  {
    id: "mold-restoration",
    name: "Mold and Water Damage Restoration",
    context: "A category averaging over $13 per click, where search term control matters more than volume. Cost per conversion improved 17.3% month over month while conversions rose from 30 to 51.",
    metrics: {
      spend: "$14,123",
      conversions: "106",
      costPerConv: "$133.23",
      phoneCalls: "160"
    },
    keyResult: "17.3% lower cost per conversion month over month, conversions 30 to 51",
    image: "/assets/images/ads_page11_img1.jpeg"
  },
  {
    id: "corp-gifting",
    name: "Corporate Gifting and Leather Goods",
    context: "Search returned a 14.27% click-through rate and 3.52% conversion rate against 1.56% and 0.19% for Performance Max, showing this brand's demand was intent-led rather than discovery-led.",
    metrics: {
      spend: "$16,730",
      conversions: "198",
      costPerConv: "$84.49",
      other: "14.27%",
      otherLabel: "Search CTR"
    },
    keyResult: "14.27% search CTR against 1.56% on Performance Max",
    image: "/assets/images/ads_page12_img1.jpeg"
  }
];

export const googleAdsHighlights = {
  spend: "$180K",
  clicks: "57.8K",
  conversions: "6,240",
  costPerConv: "$28.82",
  accounts: "20+",
  note: "Six months of Google Ads spend across the team's 20+ United States client accounts (Apr - Sep 2026)."
};
