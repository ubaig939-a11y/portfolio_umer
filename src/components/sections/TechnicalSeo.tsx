import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';

export default function TechnicalSeo() {
  return (
    <section className="py-24 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <SectionHeading 
              eyebrow="Foundation"
              title="The foundation that makes everything else rank."
              subtitle="Monthly audits with Screaming Frog and Google Search Console: crawl errors, redirect chains, missing elements and Core Web Vitals."
            />
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 space-y-6"
            >
              <div className="bg-card border border-border p-5 rounded-lg flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-main">LCP</h4>
                  <p className="text-sm text-secondary">Largest Contentful Paint</p>
                </div>
                <div className="text-gold font-mono text-sm px-3 py-1 bg-gold/10 rounded">Loading</div>
              </div>
              <div className="bg-card border border-border p-5 rounded-lg flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-main">INP</h4>
                  <p className="text-sm text-secondary">Interaction to Next Paint</p>
                </div>
                <div className="text-gold font-mono text-sm px-3 py-1 bg-gold/10 rounded">Responsiveness</div>
              </div>
              <div className="bg-card border border-border p-5 rounded-lg flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-main">CLS</h4>
                  <p className="text-sm text-secondary">Cumulative Layout Shift</p>
                </div>
                <div className="text-gold font-mono text-sm px-3 py-1 bg-gold/10 rounded">Visual Stability</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">Crawl & Index</h4>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-main block">Crawlability</strong>
                    <span className="text-sm text-secondary">Search engines can reach priority pages</span>
                  </li>
                  <li>
                    <strong className="text-main block">Indexation</strong>
                    <span className="text-sm text-secondary">The right URLs are indexed, wrong ones are not</span>
                  </li>
                  <li>
                    <strong className="text-main block">XML sitemaps & Robots.txt</strong>
                    <span className="text-sm text-secondary">Clean directives guiding bot behavior</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border p-6 rounded-lg">
                <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">Structure & Signals</h4>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-main block">Site architecture</strong>
                    <span className="text-sm text-secondary">Logical hierarchy and click depth</span>
                  </li>
                  <li>
                    <strong className="text-main block">Internal linking</strong>
                    <span className="text-sm text-secondary">Links that pass relevance to key pages</span>
                  </li>
                  <li>
                    <strong className="text-main block">Canonicalization & Redirects</strong>
                    <span className="text-sm text-secondary">Duplicate URLs consolidated, chains flattened</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border p-6 rounded-lg md:col-span-2">
                <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">How structure helps machines</h4>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <p className="text-sm text-secondary"><strong className="text-main">Entities & context:</strong> Naming the business, services, locations and related topics consistently helps systems understand what a page covers.</p>
                    <p className="text-sm text-secondary"><strong className="text-main">JSON-LD Schema:</strong> Describes content explicitly, which supports eligibility for rich and AI-generated results.</p>
                  </div>
                  <div className="flex-1 bg-background-secondary p-4 rounded border border-border/50 font-mono text-[10px] text-secondary overflow-x-auto">
                    <pre>
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is AEO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A direct, concise..."
    }
  }]
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
