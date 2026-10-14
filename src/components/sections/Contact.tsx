import * as React from "react";

import { useState } from "react";

import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { profile } from '../../data/profile';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setResultMessage('Sending...');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "b41cf780-3f86-4081-9a83-42a47febcc2f";

    const payload = new FormData(e.currentTarget);
    payload.append("access_key", accessKey);
    payload.append("from_name", "Umer Baig Portfolio");
    payload.append("subject", `New Inquiry: ${formData.name || "Website Lead"} - ${formData.service || "General"}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setResultMessage(data.message || "Thank you! Your message has been sent successfully. I will get back to you shortly.");
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        setStatus('error');
        setResultMessage(data.message || "Something went wrong while submitting the form. Please try again or reach out directly via email.");
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setStatus('error');
      setResultMessage("Unable to send your message right now. Please check your internet connection or email me directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <SectionHeading 
              eyebrow="Contact"
              title="Let's Talk About Your Next Growth Opportunity."
              subtitle="Looking to improve organic visibility, strengthen technical SEO, expand AI search readiness, or improve paid campaign performance? Let's discuss your goals."
            />
            
            <div className="mt-12 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <span className="text-xs text-secondary uppercase tracking-wider mb-1">Email</span>
                <a href={`mailto:${profile.contact.email}`} className="text-xl font-medium text-main hover:text-gold transition-colors">
                  {profile.contact.email}
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col"
              >
                <span className="text-xs text-secondary uppercase tracking-wider mb-1">Phone</span>
                <a href={`tel:${profile.contact.phone.replace(/\s+/g, '')}`} className="text-xl font-medium text-main hover:text-gold transition-colors">
                  {profile.contact.phone}
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col"
              >
                <span className="text-xs text-secondary uppercase tracking-wider mb-1">Location</span>
                <span className="text-xl font-medium text-main">
                  {profile.contact.location}
                </span>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-secondary">Name <span className="text-gold">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded px-4 py-2 text-main focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-secondary">Email <span className="text-gold">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded px-4 py-2 text-main focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-secondary">Company / Website</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded px-4 py-2 text-main focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-secondary">Service of Interest</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded px-4 py-2 text-main focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="seo">SEO Strategy & Technical SEO</option>
                    <option value="ai-search">GEO & AI Search</option>
                    <option value="google-ads">Google Ads & PPC</option>
                    <option value="full-stack">Comprehensive Marketing</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary">Message <span className="text-gold">*</span></label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded px-4 py-2 text-main focus:outline-none focus:border-gold transition-colors resize-none"
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-emerald-950/40 border border-emerald-500/50 rounded-lg text-emerald-200 text-sm flex items-start gap-3">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{resultMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-950/40 border border-red-500/50 rounded-lg text-red-200 text-sm">
                  <p className="mb-2">{resultMessage}</p>
                  <p className="text-xs text-red-300/80">
                    You can also email me directly at{" "}
                    <a href={`mailto:${profile.contact.email}`} className="underline hover:text-gold text-gold font-medium">
                      {profile.contact.email}
                    </a>.
                  </p>
                </div>
              )}

              <Button type="submit" className="w-full" size="lg" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
