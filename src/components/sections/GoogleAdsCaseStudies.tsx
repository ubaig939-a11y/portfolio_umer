import { useState } from "react";
import { SectionHeading } from '../ui/SectionHeading';
import { googleAdsProjects } from '../../data/googleAdsProjects';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

export default function GoogleAdsCaseStudies() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  if (activeProject) {
    window.onkeydown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    }
  }

  const activeProjectData = googleAdsProjects.find(p => p.id === activeProject);

  return (
    <section className="py-24 bg-background-secondary border-t border-border relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          eyebrow="Paid Acquisition"
          title="Google Ads Performance."
          subtitle="Team-managed account examples showing conversion-focused campaign structures."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {googleAdsProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group bg-card border border-border rounded-lg flex flex-col hover:border-gold/30 transition-all cursor-pointer overflow-hidden"
              onClick={() => setActiveProject(project.id)}
            >
              <div className="p-6 flex-col flex flex-grow">
                <h3 className="text-lg font-medium text-main mb-3 group-hover:text-gold transition-colors">{project.name}</h3>
                <p className="text-sm text-secondary mb-6 flex-grow">{project.context}</p>
                
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-secondary uppercase">Spend</span>
                    <span className="font-medium text-main">{project.metrics.spend}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-xs text-secondary uppercase">Conversions</span>
                    <span className="font-medium text-main">{project.metrics.conversions}</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-border flex items-center justify-between text-sm text-secondary group-hover:text-main transition-colors mt-auto bg-background-secondary/30">
                <span>View Campaign Details</span>
                <ChevronRight size={16} className={`transition-transform group-hover:translate-x-1`} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-main mb-6 text-center">Campaign Strategy Approach</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <strong className="text-main block mb-1">Account Structure</strong>
              <p className="text-sm text-secondary">Campaigns split by intent, geography, service line, and brand vs. non-brand.</p>
            </div>
            <div>
              <strong className="text-main block mb-1">Budget Allocation</strong>
              <p className="text-sm text-secondary">Spend moves toward campaigns returning the lowest cost per conversion.</p>
            </div>
            <div>
              <strong className="text-main block mb-1">Measurement</strong>
              <p className="text-sm text-secondary">Tracking for calls, form leads, and booked appointments separately.</p>
            </div>
            <div>
              <strong className="text-main block mb-1">Optimization</strong>
              <p className="text-sm text-secondary">Search term review, negative keywords, bid strategy testing, and transparent reporting.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeProjectData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-card border border-border rounded-2xl overflow-y-auto shadow-2xl flex flex-col"
            >
              <div className="sticky top-0 z-10 bg-card/90 backdrop-blur border-b border-border p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-main">{activeProjectData.name}</h3>
                  <p className="text-sm text-secondary">Google Ads Performance Evidence</p>
                </div>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="p-2 bg-background-secondary hover:bg-background rounded-full border border-border transition-colors text-secondary hover:text-main"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-12">
                {/* Text Content */}
                <div className="lg:col-span-4 space-y-8">
                  <div>
                    <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">Campaign Context</h4>
                    <p className="text-main leading-relaxed">{activeProjectData.context}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">Metrics</h4>
                    <div className="grid gap-4 mt-4">
                      <div className="flex justify-between items-center border-b border-border pb-2">
                        <span className="text-secondary">Spend</span>
                        <span className="text-xl font-medium text-main">{activeProjectData.metrics.spend}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-border pb-2">
                        <span className="text-secondary">Conversions</span>
                        <span className="text-xl font-medium text-main">{activeProjectData.metrics.conversions}</span>
                      </div>
                      {activeProjectData.metrics.costPerConv && (
                        <div className="flex justify-between items-center border-b border-border pb-2">
                          <span className="text-secondary">Cost / Conv</span>
                          <span className="text-xl font-medium text-main">{activeProjectData.metrics.costPerConv}</span>
                        </div>
                      )}
                      {activeProjectData.metrics.phoneCalls && (
                        <div className="flex justify-between items-center border-b border-border pb-2">
                          <span className="text-secondary">Phone Calls</span>
                          <span className="text-xl font-medium text-main">{activeProjectData.metrics.phoneCalls}</span>
                        </div>
                      )}
                      {activeProjectData.metrics.other && (
                        <div className="flex justify-between items-center border-b border-border pb-2">
                          <span className="text-secondary">{activeProjectData.metrics.otherLabel}</span>
                          <span className="text-xl font-medium text-main">{activeProjectData.metrics.other}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gold/5 border border-gold/20 p-5 rounded-lg">
                    <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">Key Result</h4>
                    <p className="text-main/90 italic">{activeProjectData.keyResult}</p>
                  </div>
                </div>
                
                {/* Images */}
                <div className="lg:col-span-8">
                  {activeProjectData.image && (
                    <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-background-secondary p-2">
                      <img 
                        src={activeProjectData.image} 
                        alt={`${activeProjectData.name} Google Ads screenshot`} 
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
