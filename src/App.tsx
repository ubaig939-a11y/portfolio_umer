import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Results from './components/sections/Results';
import SeoCaseStudies from './components/sections/SeoCaseStudies';
import GmbCaseStudies from './components/sections/GmbCaseStudies';
import GoogleAdsCaseStudies from './components/sections/GoogleAdsCaseStudies';
import Process from './components/sections/Process';
import TechnicalSeo from './components/sections/TechnicalSeo';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-main font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <SeoCaseStudies />
        <GmbCaseStudies />
        <GoogleAdsCaseStudies />
        <Process />
        <TechnicalSeo />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
