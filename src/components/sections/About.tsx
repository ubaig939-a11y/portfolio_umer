import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    "2.5+ years of agency experience",
    "Career progression from Intern to Senior at Napollo Software Design",
    "Technical, on-page, and off-page SEO",
    "Keyword research and search-intent mapping",
    "Content strategy and internal linking",
    "GEO, AEO, and AI search optimization",
    "Google Analytics 4 and Search Console reporting",
    "WordPress and Shopify optimization",
    "Social media marketing and lead generation (B2B & B2C)",
  ];

  return (
    <section id="about" className="py-24 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading 
              eyebrow="Profile"
              title="Technical SEO Meets Modern Search Strategy."
              className="mb-8"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-secondary text-lg leading-relaxed"
            >
              <p>
                As a Senior SEO, GEO & AEO Specialist at Napollo Software Design, I focus on the intersection of technical foundation, content clarity, and measurable performance. Over the past 2.5+ years, my role has evolved from an SEO Intern optimizing standard web elements to leading advanced strategies that prepare businesses for AI-driven search experiences.
              </p>
              <p>
                My work spans B2B and B2C clients, addressing technical issues like crawlability, Core Web Vitals, and complex site architectures, while aligning content with precise search intent. I don't just chase raw traffic; I look for qualified visibility that supports real business outcomes, tracked through Google Analytics 4, Search Console, and SEMrush.
              </p>
              <p>
                Through my role at Veterinary Marketing by Napollo, I also manage cross-channel digital marketing, integrating organic search with social media strategy and lead generation campaigns to create cohesive growth engines.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-8 rounded-lg"
          >
            <h3 className="text-xl font-medium text-main mb-6 border-b border-border pb-4">Capability Highlights</h3>
            <ul className="space-y-4">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gold mr-3 mt-1.5 opacity-80 text-xs">◆</span>
                  <span className="text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
