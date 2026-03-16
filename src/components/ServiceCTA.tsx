"use client";
import React from 'react';
import { Button } from './UI';
import ScrollReveal from './ScrollReveal';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

interface ServiceCTAProps { serviceName: string; }

const ServiceCTA = ({ serviceName }: ServiceCTAProps) => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <ScrollReveal>
                    <div className="inline-block px-5 py-2 mb-8 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest italic shadow-sm border border-primary/5">Ready to Secure Your Future?</div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase italic leading-tight tracking-tighter">
                        Get Free Consultation for <br /><span className="text-primary underline decoration-primary/30 decoration-8 underline-offset-8">{serviceName}</span>
                    </h2>
                    <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">Our Bangalore-based experts are ready to help you implement a scalable, secure, and professional solution tailored to your specific requirements.</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Button href="tel:+919964546464" variant="primary" className="scale-110 flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all font-black uppercase italic tracking-wider">
                            <FaPhoneAlt size={18} /> Call Us Now
                        </Button>
                        <Button href="https://wa.me/919964546464" variant="outline" className="scale-110 flex items-center gap-3 px-8 py-4 border-2 border-green-500 text-green-600 hover:bg-green-50 rounded-2xl transition-all font-black uppercase italic tracking-wider">
                            <FaWhatsapp size={22} /> WhatsApp Us
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
export default ServiceCTA;
