"use client";
import React from 'react';
import { Button } from './UI';
import ScrollReveal from './ScrollReveal';

interface ServiceCTAProps { serviceName: string; }

const ServiceCTA = ({ serviceName }: ServiceCTAProps) => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <ScrollReveal>
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest italic">Ready to Transform?</div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter">GET STARTED WITH <span className="text-primary">{serviceName}</span> TODAY</h2>
                    <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">Our team of experts is ready to help you implement a scalable, secure, and professional solution tailored to your specific requirements.</p>
                    <div className="flex justify-center">
                        <Button href="tel:+919964546464" variant="outline" className="scale-110">Call Us Now</Button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
export default ServiceCTA;
