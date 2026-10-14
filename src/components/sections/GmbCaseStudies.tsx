import { useState, useEffect } from "react";
import { SectionHeading } from '../ui/SectionHeading';
import { gmbProjects } from '../../data/gmbProjects';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, Phone, Navigation, Globe, MapPin } from 'lucide-react';

export default function GmbCaseStudies() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const categories = ['All', 'Veterinary & Healthcare', 'Home Improvement & Retail', 'Commercial & B2B'];
  
  const filteredProjects = filter === 'All' 
    ? gmbProjects 
    : gmbProjects.filter(p => p.category === filter);

  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    if (activeProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  const activeProjectData = gmbProjects.find(p => p.id === activeProject);

  return (
    <section id="gmb-case-studies" className="py-24 bg-background border-t border-border relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading 
            eyebrow="Local Search & Maps"
            title="Google Business Profile Case Studies."
            subtitle="Documented performance evidence from Google Search and Maps profiles showing real calls, directions, and customer actions."
            className="mb-0"
          />
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  filter === cat 
                    ? 'bg-gold text-background border-gold font-medium' 
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-gold/30 transition-all flex flex-col h-full cursor-pointer"
                onClick={() => setActiveProject(project.id)}
              >
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-secondary/60 flex items-center gap-1">
                      <MapPin size={11} className="text-gold/70" />
                      Google Maps
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-main mb-2 group-hover:text-gold transition-colors leading-snug">
                    {project.name}
                  </h3>
                  <p className="text-xs text-secondary mb-6 line-clamp-1">{project.industry}</p>
                  
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-border/50 mt-auto bg-background-secondary/20 rounded-lg px-3">
                    {project.metrics.calls && (
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-gold text-[10px] mb-1">
                          <Phone size={10} />
                          <span>Calls</span>
                        </div>
                        <p className="text-lg font-light text-main">{project.metrics.calls}</p>
                      </div>
                    )}
                    {project.metrics.directions && (
                      <div className="text-center border-x border-border/40">
                        <div className="flex items-center justify-center gap-1 text-gold text-[10px] mb-1">
                          <Navigation size={10} />
                          <span>Directions</span>
                        </div>
                        <p className="text-lg font-light text-main">{project.metrics.directions}</p>
                      </div>
                    )}
                    {project.metrics.websiteClicks && (
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-gold text-[10px] mb-1">
                          <Globe size={10} />
                          <span>Website</span>
                        </div>
                        <p className="text-lg font-light text-main">{project.metrics.websiteClicks}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-border flex items-center justify-between text-sm text-secondary group-hover:text-main transition-colors mt-auto bg-background-secondary/30">
                  <span className="text-xs font-medium">View GMB Performance Evidence ({project.images.length} {project.images.length === 1 ? 'Screenshot' : 'Screenshots'})</span>
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center text-xs text-secondary/60 max-w-3xl mx-auto p-4 border border-border/50 rounded-lg">
          Google Business Profile performance metrics reflect documented customer interactions (calls, directions, and website clicks) within Google Search & Google Maps. Client identities and proprietary search terms have been protected with natural Gaussian blur in accordance with confidentiality standards.
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
              className="relative w-full max-w-6xl max-h-[90vh] bg-card border border-border rounded-2xl overflow-y-auto shadow-2xl flex flex-col z-10"
            >
              <div className="sticky top-0 z-10 bg-card/95 backdrop-blur border-b border-border p-6 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gold font-semibold mb-1">
                    Google Business Profile Optimization
                  </div>
                  <h3 className="text-2xl font-medium text-main">{activeProjectData.name}</h3>
                  <p className="text-sm text-secondary">{activeProjectData.industry} &bull; {activeProjectData.period}</p>
                </div>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="p-2 bg-background-secondary hover:bg-background rounded-full border border-border transition-colors text-secondary hover:text-main"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-12">
                {/* Text Content */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">Project Overview</h4>
                    <p className="text-main leading-relaxed text-sm">{activeProjectData.overview}</p>
                  </div>
                  <div>
                    <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">SEO & Profile Strategy</h4>
                    <p className="text-main leading-relaxed text-sm">{activeProjectData.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">Results & Actions</h4>
                    <p className="text-main leading-relaxed text-sm">{activeProjectData.results}</p>
                    
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {activeProjectData.metrics.calls && (
                        <div className="bg-background-secondary border border-border rounded p-3 text-center">
                          <p className="text-xl font-light text-main">{activeProjectData.metrics.calls}</p>
                          <p className="text-[10px] text-secondary capitalize mt-1">Calls</p>
                        </div>
                      )}
                      {activeProjectData.metrics.directions && (
                        <div className="bg-background-secondary border border-border rounded p-3 text-center">
                          <p className="text-xl font-light text-main">{activeProjectData.metrics.directions}</p>
                          <p className="text-[10px] text-secondary capitalize mt-1">Directions</p>
                        </div>
                      )}
                      {activeProjectData.metrics.websiteClicks && (
                        <div className="bg-background-secondary border border-border rounded p-3 text-center">
                          <p className="text-xl font-light text-main">{activeProjectData.metrics.websiteClicks}</p>
                          <p className="text-[10px] text-secondary capitalize mt-1">Web Clicks</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="bg-gold/5 border border-gold/20 p-5 rounded-lg">
                    <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">Key Insights</h4>
                    <p className="text-main/90 italic text-sm">{activeProjectData.insights}</p>
                  </div>
                </div>
                
                {/* Images */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center justify-between text-xs text-secondary pb-2 border-b border-border/50">
                    <span>Performance Evidence ({activeProjectData.images.length} Verified Screenshots)</span>
                    <span className="text-gold/80 text-[11px]">Confidentiality Blurred</span>
                  </div>
                  {activeProjectData.images.map((imgSrc, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-border shadow-lg bg-background">
                      <img 
                        src={imgSrc} 
                        alt={`${activeProjectData.name} Google Business Profile Performance Evidence ${idx + 1}`} 
                        className="w-full h-auto object-contain bg-background"
                        loading="lazy"
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
