import { profile } from '../../data/profile';
import { Mail, Phone } from 'lucide-react';

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-secondary py-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
            <h3 className="text-2xl font-bold text-main mb-2">Umer Baig<span className="text-gold">.</span></h3>
            <p className="text-secondary mb-1">SEO & Digital Marketing Specialist</p>
            <p className="text-secondary text-sm mb-6">SEO · GEO · AEO · Performance Marketing</p>
            
            <div className="flex gap-4">
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-gold transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href={`mailto:${profile.contact.email}`} className="text-secondary hover:text-gold transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href={`tel:${profile.contact.phone.replace(/\s+/g, '')}`} className="text-secondary hover:text-gold transition-colors" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
            <div>
              <h4 className="text-main font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-secondary text-sm">
                <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
                <li><a href="#expertise" className="hover:text-gold transition-colors">Expertise</a></li>
                <li><a href="#case-studies" className="hover:text-gold transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-main font-semibold mb-4">Professional</h4>
              <ul className="space-y-2 text-secondary text-sm">
                <li><a href="#experience" className="hover:text-gold transition-colors">Experience</a></li>
                <li><a href="#certifications" className="hover:text-gold transition-colors">Certifications</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-secondary">
          <p>&copy; {currentYear} {profile.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Search Visibility.</p>
        </div>
      </div>
    </footer>
  );
}
