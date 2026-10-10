import { SectionHeading } from '../ui/SectionHeading';
import { seoProjects } from '../../data/seoProjects';
import { googleAdsHighlights } from '../../data/googleAdsProjects';
import { motion } from 'framer-motion';

export default function Results() {
  const highlightSeo = seoProjects.slice(0, 4);

  return (
    <section className="py-24 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          eyebrow="Dashboard"
          title="Performance, With Context."
          subtitle="Documented metrics separating organic search growth from team-managed paid campaign performance."
          centered
          className="mx-auto"
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* SEO Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-medium text-main mb-6 flex items-center">
              <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
              Selected Organic Search Growth
            </h3>
            
            <div className="space-y-6">
              {highlightSeo.map((project, idx) => (
                <div key={project.id} className="relative">
                  <div className="flex justify-between items-end mb-2 gap-4">
                    <span className="text-main font-medium truncate">{project.name}</span>
                    <span className="text-gold font-bold shrink-0">{project.metrics.clicks} clicks</span>
                  </div>
                  {/* Visual bar */}
                  <div className="w-full h-2 bg-background-secondary rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(100, 40 + (idx * -10) + parseInt(project.metrics.clicks || '0') / 5)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                      className="h-full bg-gold"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-secondary/60 mt-8 pt-4 border-t border-border">
              Based on Google Search Console comparisons (6 months vs previous 6 months).
            </p>
          </motion.div>

          {/* Paid Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-medium text-main mb-6 flex items-center">
              <span className="w-2 h-2 bg-highlight rounded-full mr-3"></span>
              Paid Campaign Performance
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-background-secondary/50 rounded-lg border border-border/50">
                <p className="text-secondary text-sm mb-1">Ad Spend</p>
                <p className="text-3xl font-light text-main">{googleAdsHighlights.spend}</p>
              </div>
              <div className="p-4 bg-background-secondary/50 rounded-lg border border-border/50">
                <p className="text-secondary text-sm mb-1">Conversions</p>
                <p className="text-3xl font-light text-main">{googleAdsHighlights.conversions}</p>
              </div>
              <div className="p-4 bg-background-secondary/50 rounded-lg border border-border/50">
                <p className="text-secondary text-sm mb-1">Clicks</p>
                <p className="text-3xl font-light text-main">{googleAdsHighlights.clicks}</p>
              </div>
              <div className="p-4 bg-background-secondary/50 rounded-lg border border-border/50">
                <p className="text-secondary text-sm mb-1">Avg. Cost / Conv</p>
                <p className="text-3xl font-light text-main">{googleAdsHighlights.costPerConv}</p>
              </div>
            </div>
            
            <div className="mt-6 flex items-center justify-between p-4 bg-gold/5 rounded-lg border border-gold/10">
              <span className="text-main font-medium">Client Accounts Managed</span>
              <span className="text-2xl font-bold text-gold">{googleAdsHighlights.accounts}</span>
            </div>
            
            <p className="text-xs text-secondary/60 mt-6 pt-4 border-t border-border">
              {googleAdsHighlights.note}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
