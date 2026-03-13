import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedClients from '@/components/TrustedClients';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Career from '@/components/Career';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <About />
      <div className="h-px bg-primary/10 my-16 max-w-7xl mx-auto px-6" />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <div className="h-px bg-slate-200 my-16 max-w-7xl mx-auto px-6" />
      <FAQ />
      <TrustedClients />
      <Career />
      <FinalCTA />
      <Footer />
    </main>
  );
}
