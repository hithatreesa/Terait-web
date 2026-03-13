"use client";

import { motion } from 'framer-motion';
import { Button } from './UI';
import { FaPhoneAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const FinalCTA = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-[#F4F6F8] border-t border-slate-200">
            {/* Decorative Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl transition-opacity duration-1000" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <ScrollReveal direction="up">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 uppercase">
                            Ready to Upgrade Your <br /><span className="text-[#ef4444] tracking-tight italic">IT Infrastructure?</span>
                        </h2>
                        <p className="text-slate-500 text-lg mb-12 font-medium">
                            Get professional, reliable, and secure IT solutions for your business. Let Terait Technologies build the foundation of your success.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <div className="w-full sm:w-auto">
                                <a href="#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-12 py-4 rounded-md shadow-xl transition duration-300">
                                    Book Consultation
                                </a>
                            </div>
                            <div className="flex flex-col items-center sm:items-start text-left">
                                <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">Call Us Now</span>
                                <a href="tel:+919964546464" className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                        <FaPhoneAlt size={16} className="text-primary" />
                                    </div>
                                    +91 99645 46464
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FinalCTA;
