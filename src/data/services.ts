import { Search, Code2, LayoutTemplate, Link2, Key, PenTool, Bot, MessageSquare, Zap, Target, MousePointerClick, Share2, Users, LineChart } from 'lucide-react';

export const services = [
  {
    category: "Search Engine Optimization",
    items: [
      {
        id: "seo-strategy",
        title: "SEO Strategy",
        description: "Develop technical, on-page, and content workstreams around qualified organic traffic and business goals.",
        icon: Search
      },
      {
        id: "technical-seo",
        title: "Technical SEO",
        description: "Crawlability, indexation, redirects, canonicalization, XML sitemaps, robots.txt, schema markup, site architecture, and Core Web Vitals.",
        icon: Code2
      },
      {
        id: "on-page-seo",
        title: "On-Page SEO",
        description: "Title tags, meta descriptions, headings, internal linking, page structure, and search-intent alignment.",
        icon: LayoutTemplate
      },
      {
        id: "off-page-seo",
        title: "Off-Page SEO",
        description: "Link acquisition outreach and efforts to earn quality referring domains.",
        icon: Link2
      },
      {
        id: "keyword-research",
        title: "Keyword Research & Search Intent",
        description: "Keyword clustering, SERP analysis, competitor research, and content-gap identification.",
        icon: Key
      },
      {
        id: "content-strategy",
        title: "Content Strategy",
        description: "Intent-mapped content briefs, topic coverage, and content planning.",
        icon: PenTool
      }
    ]
  },
  {
    category: "AI Search Optimization",
    items: [
      {
        id: "geo",
        title: "Generative Engine Optimization (GEO)",
        description: "Structure content and context to help generative search systems interpret and represent information accurately.",
        icon: Bot
      },
      {
        id: "aeo",
        title: "Answer Engine Optimization (AEO)",
        description: "Create clear, direct answers supported by logical content structure and relevant schema.",
        icon: MessageSquare
      },
      {
        id: "ai-search",
        title: "AI Search Optimization",
        description: "Strengthen technical SEO, content clarity, entity context, and structured information for modern search experiences.",
        icon: Zap
      }
    ]
  },
  {
    category: "Paid & Digital Marketing",
    items: [
      {
        id: "google-ads",
        title: "Google Ads & PPC",
        description: "Experience with Search, Display, Apps, and AI-Powered Shopping Ads, aligned with the documented certifications and campaign work.",
        icon: Target
      },
      {
        id: "conversion-tracking",
        title: "Conversion Tracking",
        description: "Tracking and reporting for phone calls, form leads, and booked appointments, as documented in the Google Ads portfolio.",
        icon: MousePointerClick
      },
      {
        id: "social-media",
        title: "Social Media Marketing",
        description: "Content calendars, scheduling, audience engagement, and campaign management.",
        icon: Share2
      },
      {
        id: "lead-gen",
        title: "Lead Generation",
        description: "Organic search and social media campaigns supporting B2B and B2C audiences.",
        icon: Users
      },
      {
        id: "analytics",
        title: "Analytics & Reporting",
        description: "Google Search Console, GA4, SEMrush, Google Tag Manager, and Looker Studio.",
        icon: LineChart
      }
    ]
  }
];
