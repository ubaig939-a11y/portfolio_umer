import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "Senior SEO, GEO & AEO Specialist",
      company: "Napollo Software Design",
      date: "Mar 2026 – Present",
      description: [
        "Lead advanced SEO strategy across technical, on-page and content workstreams.",
        "Develop GEO and AEO strategies for visibility across AI-driven search platforms.",
        "Apply intent mapping, structured content and JSON-LD; monitor with Search Console, GA4 and SEMrush."
      ]
    },
    {
      title: "Search Engine Optimization (SEO) Executive",
      company: "Napollo Software Design",
      date: "Mar 2025 – Mar 2026",
      description: [
        "Managed SEO strategy across multiple client websites: keyword clustering, title tag restructuring and link acquisition.",
        "Ran monthly technical audits: crawl errors, redirect chains, JSON-LD schema and Core Web Vitals.",
        "Turned keyword research and SERP analysis into content briefs; delivered monthly reports."
      ]
    },
    {
      title: "SEO Intern",
      company: "Napollo Software Design",
      date: "Jan 2025 – Mar 2025",
      description: [
        "Optimized title tags, meta descriptions, on-page structure and internal linking for 10+ client websites on WordPress and Shopify.",
        "Ran link acquisition outreach for quality referring domains.",
        "Performed technical audits with Screaming Frog and Search Console."
      ]
    },
    {
      title: "Senior Digital Marketing Expert – Social Media & SEO",
      company: "Veterinary Marketing by Napollo",
      date: "Apr 2025 – Present",
      description: [
        "End-to-end digital marketing: SEO, social media marketing and lead generation for B2B and B2C campaigns.",
        "Organic visibility and website performance through on-page, technical and off-page SEO.",
        "Multi-platform social strategy with content calendars, scheduling and audience engagement.",
        "Lead generation combining organic search and social media campaign management."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          eyebrow="Experience"
          title="Career progression."
          centered
          className="mx-auto"
        />

        <div className="max-w-4xl mx-auto mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-px bg-border md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5 w-[30px] h-[30px] bg-background border border-gold rounded-full flex items-center justify-center md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="bg-card border border-border p-6 rounded-lg hover:border-gold/30 transition-colors">
                    <span className="text-gold text-xs font-semibold tracking-wider uppercase mb-2 block">{exp.date}</span>
                    <h4 className="text-lg font-medium text-main mb-1">{exp.title}</h4>
                    <p className="text-sm text-secondary font-medium mb-4">{exp.company}</p>
                    <ul className={`space-y-2 text-sm text-secondary/90 ${idx % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className={`flex items-start ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                          <span className={`text-gold mt-1 text-[10px] ${idx % 2 !== 0 ? 'md:ml-2' : 'mr-2'}`}>◆</span>
                          <span className={`${idx % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
