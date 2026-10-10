import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'framer-motion';

export default function Certifications() {
  const certs = [
    { title: 'Google Ads Display Certification', provider: 'Google Digital Academy (Skillshop)', date: 'Apr 2025' },
    { title: 'Google Ads Apps Certification', provider: 'Google Digital Academy (Skillshop)', date: 'Apr 2025' },
    { title: 'AI-Powered Shopping Ads Certification', provider: 'Google Digital Academy (Skillshop)', date: 'Apr 2025' },
    { title: 'Introduction to IoT and Digital Transformation', provider: 'Cisco Networking Academy', date: 'Aug 2025' }
  ];

  const leadership = [
    { title: 'Vice Chairperson', org: 'IEEE Computer Society Chapter', date: 'Feb 2024 – Feb 2025', desc: 'Directed operations of a 100+ member chapter.' },
    { title: 'Graphics Committee Head & Event Coordinator', org: 'IEEE Computer Society Chapter', date: 'Jan 2023 – Jan 2024', desc: 'Led a six-person design team and ran organic campaigns that grew registrations 20% YoY.' },
    { title: 'Management Team Member', org: 'SEE Pakistan 2024', date: 'Aug 2024', desc: 'Coordinated logistics for a national multi-university competition with 300+ attendees.' }
  ];

  const education = [
    { degree: 'Bachelor of Science in Internet of Things', school: 'Superior University, Lahore', date: 'Nov 2022 – Present' },
    { degree: 'Intermediate, ICS', school: 'B.I.S.E. Lahore', date: 'Jun 2022' },
    { degree: 'Matric', school: 'B.I.S.E. Lahore', date: 'Mar 2020' }
  ];

  return (
    <section id="certifications" className="py-24 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          eyebrow="Credentials"
          title="Certifications, leadership and education."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-3 gap-12">
          
          <div>
            <h3 className="text-xl font-medium text-main mb-6 border-b border-border pb-2">Certifications</h3>
            <div className="space-y-4">
              {certs.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card border border-border p-5 rounded-lg"
                >
                  <h4 className="text-main font-medium mb-1">{cert.title}</h4>
                  <p className="text-xs text-secondary">{cert.provider} &middot; {cert.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-main mb-6 border-b border-border pb-2">Leadership</h3>
            <div className="space-y-6">
              {leadership.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h4 className="text-main font-medium mb-1">{item.title}</h4>
                  <p className="text-xs text-gold mb-2">{item.org} &middot; {item.date}</p>
                  <p className="text-sm text-secondary">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-main mb-6 border-b border-border pb-2">Education</h3>
            <div className="space-y-6">
              {education.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <h4 className="text-main font-medium mb-1">{item.degree}</h4>
                  <p className="text-sm text-secondary mb-1">{item.school}</p>
                  <p className="text-xs text-gold">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
