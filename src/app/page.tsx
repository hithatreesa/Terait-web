import { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Terait Technologies | Expert IT Infrastructure Services in Bangalore",
  description: "Terait Technologies is Bangalore's leading provider for IT networking, professional CCTV installation, expert server setup, and managed cloud services. Reliable enterprise solutions for modern businesses.",
  alternates: {
    canonical: '/',
  },
};
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Terait Technologies",
            "image": "https://terait.com/images/hero_enterprise_it.jpg",
            "@id": "https://terait.com",
            "url": "https://terait.com",
            "telephone": ["+919964546464", "+910843364331"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "#24, 100 Feet Rd, HRBR Layout 1st Block, Balaji Layout, Subbaiahnapalya, Banaswadi",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560043",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.013989,
              "longitude": 77.648571
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:30",
              "closes": "18:30"
            },
            "sameAs": [
              "https://www.facebook.com/TeraitTechnologies/",
              "https://www.linkedin.com/company/terait-technologies"
            ]
          })
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <div className="h-px bg-primary/10 my-12 max-w-7xl mx-auto px-6" />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <div className="h-px bg-slate-200 my-12 max-w-7xl mx-auto px-6" />
      <FAQ />
      <TrustedClients />
      <Career />
      <FinalCTA />
      <Footer />
    </main>
  );
}
