import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'Discovery & Business Understanding', desc: 'Clarify goals, audience, services and what a qualified enquiry looks like.' },
  { id: '02', title: 'Keyword Research', desc: 'Find and cluster the terms customers use, grouped by topic.' },
  { id: '03', title: 'Search Intent Mapping', desc: 'Match each keyword group to the page type that satisfies the search.' },
  { id: '04', title: 'Competitor & SERP Analysis', desc: 'Study who ranks, what the results show and where content gaps sit.' },
  { id: '05', title: 'Technical SEO Audit', desc: 'Crawl with Screaming Frog and Search Console for crawl, redirect and indexation issues.' },
  { id: '06', title: 'On-Page Optimization', desc: 'Refine title tags, meta data, headings and hierarchy around intent.' },
  { id: '07', title: 'Content Strategy', desc: 'Turn opportunities into content briefs writers can act on.' },
  { id: '08', title: 'Internal Linking & Site Architecture', desc: 'Organize pages and links so relevance flows to priority URLs.' },
  { id: '09', title: 'Authority & Link Building', desc: 'Link acquisition outreach focused on quality referring domains.' },
  { id: '10', title: 'GEO & AEO Optimization', desc: 'Structured content and JSON-LD to support AI answers and featured results.' },
  { id: '11', title: 'Measurement & Reporting', desc: 'Track in Search Console, GA4 and SEMrush; report monthly.' },
  { id: '12', title: 'Continuous Optimization', desc: 'Review the data, refine priorities and repeat. SEO is iterative.' }
];

export default function Process() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          eyebrow="Workflow"
          title="Twelve steps from discovery to continuous optimization."
          centered
          className="mx-auto"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`p-6 rounded-lg border ${
                step.id === '10' 
                  ? 'bg-card border-gold/40 shadow-[0_0_15px_rgba(216,180,122,0.1)]' 
                  : 'bg-background-secondary border-border hover:border-gold/30'
              } transition-colors group relative`}
            >
              <div className="text-4xl font-bold text-main/10 mb-4 font-serif">
                {step.id}
              </div>
              <h4 className="text-lg font-medium text-main mb-2">{step.title}</h4>
              <p className="text-sm text-secondary leading-relaxed">{step.desc}</p>
              
              {step.id === '10' && (
                <div className="absolute top-4 right-4 text-[9px] uppercase tracking-wider text-gold font-semibold px-2 py-1 bg-gold/10 rounded">
                  AI Search
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
