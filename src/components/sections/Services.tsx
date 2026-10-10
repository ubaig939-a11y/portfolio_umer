import { SectionHeading } from '../ui/SectionHeading';
import { services } from '../../data/services';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          eyebrow="Expertise"
          title="Search, AI search and performance marketing."
          centered
          className="mx-auto"
        />

        <div className="space-y-20 mt-16">
          {services.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-xl font-medium text-main mb-8 pb-2 border-b border-border/50 uppercase tracking-wide text-sm">{category.category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-card border border-border p-6 rounded-lg hover:border-gold/30 transition-colors group"
                    >
                      <div className="mb-4 text-gold group-hover:scale-110 transition-transform origin-left">
                        <Icon strokeWidth={1.5} size={28} />
                      </div>
                      <h4 className="text-lg font-medium text-main mb-3">{service.title}</h4>
                      <p className="text-secondary text-sm leading-relaxed">{service.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        
        {/* GEO/AEO Disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-6 border border-border/50 bg-background-secondary rounded-lg flex items-start gap-4 max-w-4xl mx-auto"
        >
          <div className="text-gold mt-1">ℹ</div>
          <p className="text-sm text-secondary/80 leading-relaxed">
            <strong className="text-main/90 font-medium">Setting Expectations:</strong> GEO and AEO complement strong technical SEO and useful content. No one can promise guaranteed rankings or guaranteed inclusion in AI-generated answers. The objective is to make content clearer, better structured, and easier for systems to interpret correctly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
