"use client";

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function CareersSection() {
    return (
        <section id="careers" className="py-16 relative overflow-hidden bg-white scroll-mt-20">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-50/50 skew-x-[-15deg] translate-x-1/2 z-0" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-light/5 blur-[100px] rounded-full z-0" />

            <div className="relative max-w-7xl mx-auto px-6 z-10">
                <div className="text-center mb-12">
                    <ScrollReveal>
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight uppercase">
                                Work With <span className="text-primary tracking-tight">Us</span>
                            </h2>
                            <div className="h-1.5 w-20 bg-primary-light mx-auto rounded-full" />
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mt-6 font-medium">
                                Join Terait Technologies and work with a team delivering
                                modern IT infrastructure, networking, CCTV, and cloud solutions
                                for modern businesses.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal direction="up" delay={0.3}>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary/20 via-primary-light/10 to-transparent">
                            <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-[1.4rem] p-8 md:p-12 text-center group relative overflow-hidden">
                                {/* Inner Glow */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
                                
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 relative z-10 transition-colors duration-300 italic tracking-tight">
                                    Interested in joining our team?
                                </h3>

                                <p className="text-slate-600 mb-10 text-lg relative z-10 max-w-xl mx-auto leading-relaxed font-medium">
                                    We&apos;re always looking for talented engineers, IT specialists, and innovators. 
                                    Send us your details and we will contact you when opportunities are available.
                                </p>

                                <motion.a 
                                    href="https://wa.me/919964546464?text=Hello%20Terait%20Technologies%2C%20I%20am%20interested%20in%20career%20opportunities.%20Please%20share%20available%20openings."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, translateY: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-block relative z-10 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(15,118,110,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(15,118,110,0.4)]"
                                >
                                    Contact Us
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Subtle Texture Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </section>
    );
}