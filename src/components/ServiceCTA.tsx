"use client";
import React from 'react';
import { Button } from './UI';
import ScrollReveal from './ScrollReveal';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

interface ServiceCTAProps { serviceName: string; }

const ServiceCTA = ({ serviceName }: ServiceCTAProps) => {
    return (
        <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl aspect-square bg-primary/10 rounded-full blur-[120px] -z-0 opacity-50" />

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <ScrollReveal>
                    <div className="inline-block px-6 py-2 mb-10 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] italic shadow-2xl backdrop-blur-sm">
                        Enterprise Acceleration
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black text-white mb-10 uppercase italic leading-[0.8] tracking-tighter font-outfit">
                        Scale Your <br /><span className="text-primary not-italic drop-shadow-[0_0_30px_rgba(239,68,68,0.4)]">{serviceName}</span>
                    </h2>

                    <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed font-inter font-medium">
                        Our specialized engineering teams are ready to architect your next high-performance ecosystem.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                        <Button href="tel:+919964546464" variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-primary text-white rounded-[1.5rem] shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all font-black uppercase italic tracking-[0.2em] text-xs">
                            <FaPhoneAlt size={16} /> Direct Hotline
                        </Button>
                        <Button href="https://wa.me/919964546464" variant="secondary" className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-[1.5rem] transition-all font-black uppercase italic tracking-[0.2em] text-xs backdrop-blur-md">
                            <FaWhatsapp size={20} className="text-emerald-500" /> WhatsApp Expert
                        </Button>
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">ISO 27001 Certified</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">SLA Guaranteed</span>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">24/7 Monitoring</span>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
export default ServiceCTA;
