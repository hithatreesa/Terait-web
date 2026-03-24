"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const FinalCTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        if (typeof window !== 'undefined') {
            window.gtag?.('event', 'form_submission', {
                event_category: 'contact',
                event_label: 'lead_form'
            });
        }
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="contact" className="py-16 bg-white overflow-hidden scroll-mt-20">
            <div className="max-w-5xl mx-auto px-6">

                <ScrollReveal direction="up" delay={0.2}>
                    <div className="bg-white border border-slate-100 rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
                        {/* Top Section: Heading */}
                        <div className="p-8 md:p-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-[0.9] mb-6">
                                <span className="text-[#1B2C6B] block">GET IN TOUCH <span className="text-primary tracking-tight">WITH US</span></span>
                            </h2>
                            <p className="max-w-lg mx-auto text-slate-500 text-xs font-medium leading-relaxed">
                                We provide high-level enterprise solutions. Connect with our experts today to scale your infrastructure and secure your digital assets.
                            </p>
                        </div>

                        {/* Middle Section: Form */}
                        <div className="p-6 md:p-10 lg:px-20">
                                <AnimatePresence mode="wait">
                                    {!isSubmitted ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <form className="space-y-4 max-w-4xl mx-auto" onSubmit={handleSubmit}>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            placeholder="John Doe"
                                                            required
                                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition text-xs font-semibold"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="john@company.com"
                                                            required
                                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition text-xs font-semibold"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="099645 46464"
                                                        required
                                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition text-xs font-semibold"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                                                    <textarea
                                                        rows={3}
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="Tell us about your IT infrastructure needs..."
                                                        required
                                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-4 focus:ring-red-500/5 focus:border-red-500 outline-none transition text-xs font-semibold resize-none"
                                                    ></textarea>
                                                </div>
                                                <div className="text-center">
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="inline-flex items-center justify-center gap-3 bg-[#E63946] hover:bg-red-700 text-white font-black text-xs uppercase tracking-[0.2em] px-12 py-5 rounded-xl shadow-xl shadow-red-500/20 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group"
                                                    >
                                                        {isSubmitting ? (
                                                            <><FaSpinner className="animate-spin" /> Processing...</>
                                                        ) : (
                                                            <>Submit Your Request <span className="group-hover:translate-x-1 transition-transform">→</span></>
                                                        )}
                                                    </button>
                                                </div>
                                            </form>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-20"
                                        >
                                            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/10">
                                                <FaCheckCircle size={40} />
                                            </div>
                                            <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Message Received</h3>
                                            <p className="text-slate-500 text-sm font-medium mb-10 max-w-md mx-auto">Thank you for your interest. A solutions engineer will review your request and get back to you within 24 hours.</p>
                                            <button
                                                type="button"
                                                onClick={() => setIsSubmitted(false)}
                                                className="text-xs font-black uppercase tracking-[0.2em] text-primary hover:text-red-700 transition-colors border-b-2 border-primary/20 hover:border-red-700/40 pb-1"
                                            >
                                                Submit Another Message
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {/* Bottom Section: Contacts, Hours & Map */}
                            <div className="p-6 md:p-10 lg:p-12">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                                    {/* Left Column: Contact Cards & Hours */}
                                    <div className="space-y-10">
                                        <div className="space-y-5">
                                            <h3 className="text-[10px] font-black text-[#1B2C6B] uppercase tracking-[0.3em] flex items-center gap-2">
                                                <span className="w-5 h-0.5 bg-primary" /> Contact Information
                                            </h3>

                                            <div className="space-y-5">
                                                {/* Address Item */}
                                                <a
                                                    href="https://maps.app.goo.gl/PbATD2xT4BDe8op1A"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={() => window.gtag?.('event', 'location_click')}
                                                    className="flex items-start gap-4 group"
                                                >
                                                    <div className="w-10 h-10 rounded-xl bg-[#1B2C6B] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-primary transition-colors duration-300">
                                                        <FaMapMarkerAlt className="text-white text-base" />
                                                    </div>
                                                    <p className="text-[11px] font-bold text-slate-900 leading-relaxed uppercase tracking-tight pt-1">
                                                        #24, 100 FEET RD, HRBR LAYOUT 1ST BLOCK, BALAJI LAYOUT, SUBBAIAHNAPALYA, BANASWADI, BENGALURU, KARNATAKA 560043
                                                    </p>
                                                </a>

                                                {/* Phone Numbers Item */}
                                                <div className="flex items-center gap-4 group">
                                                    <div className="w-10 h-10 rounded-xl bg-[#1B2C6B] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-primary transition-colors duration-300">
                                                        <FaPhoneAlt className="text-white text-base" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <a href="tel:+919964546464" onClick={() => window.gtag?.('event', 'call_click')} className="text-base font-black text-slate-900 tracking-wider hover:text-primary transition-colors">+91 99645 46464</a>
                                                        <a href="tel:+91843364331" onClick={() => window.gtag?.('event', 'call_click')} className="text-base font-black text-slate-900 tracking-wider hover:text-primary transition-colors">+91 08433 64331</a>
                                                    </div>
                                                </div>

                                                {/* Email Item */}
                                                <a
                                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@teraittech.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-4 group"
                                                >
                                                    <div className="w-10 h-10 rounded-xl bg-[#1B2C6B] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-primary transition-colors duration-300">
                                                        <FaEnvelope className="text-white text-base" />
                                                    </div>
                                                    <p className="text-base font-black text-slate-900 lower-case group-hover:text-primary transition-colors">sales@teraittech.com</p>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Operational Hours */}
                                        <div className="space-y-5">
                                            <h3 className="text-[10px] font-black text-[#1B2C6B] uppercase tracking-[0.3em] flex items-center gap-2">
                                                <span className="w-5 h-0.5 bg-primary" /> Operational Hours
                                            </h3>
                                            <div className="space-y-3">
                                                {[
                                                    { day: "Monday - Saturday", hours: "09:30 am - 06:30 pm" }
                                                ].map((item: { day: string; hours: string; color?: string }, idx) => (
                                                    <div key={idx} className="flex justify-between items-center text-[11px] font-extrabold pb-2 border-b border-slate-100 last:border-0 max-w-sm">
                                                        <span className="text-slate-400 uppercase tracking-widest">{item.day}</span>
                                                        <span className={item.color || "text-[#1B2C6B]"}>{item.hours}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Google Map */}
                                    <div className="relative rounded-[2rem] overflow-hidden bg-slate-200 border border-slate-100 shadow-2xl h-[280px]">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.341918545567!2d77.64852499999999!3d13.013885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzUwLjAiTiA3N8KwMzgnNTQuNyJF!5e0!3m2!1sen!2sin!4v1774002491600!5m2!1sen!2sin"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="transition-all duration-700 contrast-110"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FinalCTA;
