import { useState } from "react";
import { SectionHeading } from '../ui/SectionHeading';
import { seoProjects } from '../../data/seoProjects';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';

export default function SeoCaseStudies() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const categories = ['All', 'Veterinary & Pet Care', 'Home Improvement & Retail', 'Industrial & B2B'];
  
  const filteredProjects = filter === 'All' 
    ? seoProjects 
    : seoProjects.filter(p => p.category === filter);

  // Close modal on escape
  if (activeProject) {
    window.onkeydown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    }
  }

  const activeProjectData = seoProjects.find(p => p.id === activeProject);

  return (
    <section id="case-studies" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            eyebrow="Evidence"
            title="Selected SEO Case Studies."
            className="mb-0"
          />
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  filter === cat 
                    ? 'bg-gold text-background border-gold' 
                    : 'bg-transparent text-secondary border-border hover:border-gold/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-gold/30 transition-all flex flex-col h-full cursor-pointer"
                onClick={() => setActiveProject(project.id)}
              >
                <div className="p-6 flex-grow">
                  <div className="text-[10px] uppercase tracking-wider text-gold mb-4 font-semibold">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-medium text-main mb-2 group-hover:text-gold transition-colors">{project.name}</h3>
                  <p className="text-sm text-secondary mb-6">{project.industry}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.clicks && (
                      <div>
                        <p className="text-2xl font-light text-main">{project.metrics.clicks}</p>
                        <p className="text-xs text-secondary">Clicks</p>
                      </div>
                    )}
                    {project.metrics.impressions && (
                      <div>
                        <p className="text-2xl font-light text-main">{project.metrics.impressions}</p>
                        <p className="text-xs text-secondary">Impressions</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-border flex items-center justify-between text-sm text-secondary group-hover:text-main transition-colors mt-auto bg-background-secondary/30">
                  <span>View Case Study</span>
                  <ChevronRight size={16} className={`transition-transform group-hover:translate-x-1`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center text-xs text-secondary/60 max-w-3xl mx-auto p-4 border border-border/50 rounded-lg">
          Selected SEO performance examples are based on Google Search Console data in the source portfolio. Results are not independently verified and should not be interpreted as attributable solely to Umer Baig.
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
                  <p className="text-sm text-secondary">{activeProjectData.industry} &bull; {activeProjectData.period}</p>
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
                    <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">Objective</h4>
                    <p className="text-main leading-relaxed">{activeProjectData.objective}</p>
                  </div>
                  <div>
                    <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">Strategy & Focus</h4>
                    <p className="text-main leading-relaxed">{activeProjectData.focus}</p>
                  </div>
                  <div>
                    <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">Results</h4>
                    <p className="text-main leading-relaxed">{activeProjectData.results}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {Object.entries(activeProjectData.metrics).map(([key, value]) => (
                        <div key={key} className="bg-background-secondary border border-border rounded p-4">
                          <p className="text-2xl font-light text-main">{value}</p>
                          <p className="text-xs text-secondary capitalize">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gold/5 border border-gold/20 p-5 rounded-lg">
                    <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">Key Takeaway</h4>
                    <p className="text-main/90 italic">{activeProjectData.takeaway}</p>
                  </div>
                </div>
                
                {/* Images */}
                <div className="lg:col-span-8 space-y-6">
                  {activeProjectData.images.map((imgSrc, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-border shadow-lg">
                      <img 
                        src={imgSrc} 
                        alt={`${activeProjectData.name} Search Console evidence`} 
                        className="w-full h-auto object-contain bg-background"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
