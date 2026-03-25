import React from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden bg-white scroll-mt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center">

          {/* Image Side */}
          <ScrollReveal direction="right" distance={30}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/about_it_solutions.jpg"
                  alt="Terait Technologies Enterprise IT Control Center"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
              </div>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <ScrollReveal direction="left" distance={30} delay={0.2}>
            <div className="space-y-8 flex flex-col items-center text-center">
              <div className="space-y-4 flex flex-col items-center">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[2px] w-10 bg-primary" />
                  <span className="text-primary font-bold text-sm uppercase tracking-widest">About Terait Technologies</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-6 leading-tight">
                  Empowering Businesses through <span className="text-primary tracking-tight">Technical Excellence</span>
                </h2>
                <p className="text-slate-600 text-center max-w-2xl mx-auto leading-relaxed font-medium">
                  Terait Technologies is a leading provider of comprehensive IT infrastructure and specialized surveillance solutions. We bridge the gap between complex technological needs and seamless business operations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {([
                  { title: "Network Security", desc: "Robust data protection and monitoring." },
                  { title: "Smart Surveillance", desc: "Expert CCTV & security integration." },
                  { title: "Cloud Solutions", desc: "Scalable and secure cloud infrastructure." },
                  { title: "IT Support", desc: "Expert managed services and maintenance." }
                ] as const).map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 ease-in-out h-full">
                    <h3 className="font-bold text-slate-900 mb-1 italic tracking-tight">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default About;
