import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, BarChart3, Layers, CheckCircle2, Target } from 'lucide-react';
import { Button } from '../ui/Button';
import { profile } from '../../data/profile';

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    className={`bg-card/90 backdrop-blur-md border border-border rounded-lg p-4 md:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col ${className}`}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-3/4 md:w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-3/4 md:w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="flex flex-col items-start z-20 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs sm:text-sm font-medium tracking-wider text-gold">
                {profile.heroEyebrow}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-main mb-6 leading-tight"
            >
              {profile.primaryPositioning}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-secondary mb-4"
            >
              {profile.supportingHeadline}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-secondary/80 mb-8 max-w-xl leading-relaxed"
            >
              {profile.supportingParagraph}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 w-full sm:w-auto"
            >
              <a href="#case-studies" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Let's Discuss Your Project
                </Button>
              </a>
            </motion.div>

            {/* Metrics Strip */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 sm:gap-10 py-6 border-y border-border/50 w-full"
            >
              {profile.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-semibold text-main">{metric.value}</span>
                  <span className="text-xs sm:text-sm text-secondary mt-1">{metric.label}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 text-xs sm:text-sm text-secondary/70 flex items-start sm:items-center gap-3"
            >
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5 sm:mt-0" />
              <span className="leading-tight">SEO Intern → SEO Executive → Senior SEO, GEO & AEO Specialist (Napollo Software Design)</span>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition / Analytics Cards */}
          <div className="relative w-full flex flex-col justify-end min-h-[520px] lg:min-h-[720px] mt-12 lg:mt-0">
            {/* Center element - abstract circle representing search visibility */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute -top-4 lg:-top-6 left-1/2 -translate-x-1/2 w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border border-gold/20 flex items-center justify-center bg-gradient-to-br from-card/50 to-background/50 shadow-[0_0_50px_rgba(216,180,122,0.05)] z-0"
            >
              <div className="w-3/4 h-3/4 rounded-full border border-gold/40 flex items-center justify-center animate-pulse duration-[3000ms]">
                <div className="w-1/2 h-1/2 rounded-full bg-gold/10 flex items-center justify-center">
                   <Target className="h-8 w-8 text-gold/50" />
                </div>
              </div>
            </motion.div>

            {/* Grid for Cards, anchored to the bottom */}
            <div className="w-full flex flex-col gap-5 relative z-10 max-w-[560px] mx-auto pt-48 lg:pt-60 pb-2">
              
              <div className="grid sm:grid-cols-2 gap-5 w-full items-stretch">
                {/* Floating Card A: Organic Search Growth */}
                <FloatingCard className="w-full h-full" delay={0.4}>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-4 w-4 text-gold" />
                    <span className="text-sm font-medium text-main">Organic Search Growth</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center space-y-3">
                    <div>
                      <div className="flex justify-between items-end mb-1.5">
                        <span className="text-xs text-secondary truncate pr-2">Doors & Building Solutions</span>
                        <span className="text-xs font-semibold text-main shrink-0">+287% clicks</span>
                      </div>
                      <div className="w-full bg-background-secondary h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gold h-full w-[90%] rounded-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-end mb-1.5">
                        <span className="text-xs text-secondary truncate pr-2">Emergency Vet Services</span>
                        <span className="text-xs font-semibold text-main shrink-0">+241% clicks</span>
                      </div>
                      <div className="w-full bg-background-secondary h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gold/80 h-full w-[80%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-secondary/60 mt-3 border-t border-border pt-2.5">Selected 6mo vs 6mo GSC comparisons</p>
                </FloatingCard>

                {/* Floating Card B: Google Ads Performance */}
                <FloatingCard className="w-full h-full" delay={0.6}>
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="h-4 w-4 text-gold" />
                    <span className="text-sm font-medium text-main">Google Ads (Team Accts)</span>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-3 my-auto py-1">
                    <div>
                      <p className="text-lg font-bold text-main leading-none">6,240</p>
                      <p className="text-[10px] text-secondary mt-1">Conversions</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-main leading-none">$28.82</p>
                      <p className="text-[10px] text-secondary mt-1">Avg. Cost/Conv</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-main leading-none">$180K</p>
                      <p className="text-[10px] text-secondary mt-1">Ad Spend</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-main leading-none">20+</p>
                      <p className="text-[10px] text-secondary mt-1">Client Accounts</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-secondary/60 mt-3 border-t border-border pt-2.5 leading-relaxed">Aggregate metrics from portfolio reporting periods. Team-managed accounts.</p>
                </FloatingCard>
              </div>

              {/* Floating Card C: Tools */}
              <FloatingCard className="w-full sm:w-11/12 sm:mx-auto" delay={0.8}>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium text-main">Core Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Search Console', 'GA4', 'Google Ads', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Shopify', 'WordPress'].map((tool) => (
                    <span key={tool} className="text-xs font-medium bg-background-secondary border border-border px-2.5 py-1.5 rounded-md text-secondary">
                      {tool}
                    </span>
                  ))}
                </div>
              </FloatingCard>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
