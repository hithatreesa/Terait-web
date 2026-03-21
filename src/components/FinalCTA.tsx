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
            (window as any).gtag?.('event', 'form_submission', {
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
                <div className="text-center mb-12">
                    <ScrollReveal direction="up">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-[0.9] mb-6">
                            <span className="text-[#1B2C6B] block">LET&apos;S START A <span className="text-primary tracking-tight">CONVERSATION</span></span>
                        </h2>
                        <p className="max-w-lg mx-auto text-slate-500 text-xs font-medium leading-relaxed">
                            We provide high-level enterprise solutions. Connect with our experts today to scale your infrastructure and secure your digital assets.
                        </p>
                    </ScrollReveal>
                </div>

                <ScrollReveal direction="up" delay={0.2}>
                    <div className="bg-white border border-slate-100 rounded-[1.5rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
                        {/* Left Column: Form */}
                        <div className="lg:w-7/12 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-center relative">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-lg font-black text-slate-900 mb-8 tracking-tight uppercase">Send Us A Message</h3>
                                        <form className="space-y-5" onSubmit={handleSubmit}>
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="John Doe"
                                                        required
                                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-red-500/10 focus:border-red-500 outline-none transition text-xs font-medium"
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="john@company.com"
                                                        required
                                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-red-500/10 focus:border-red-500 outline-none transition text-xs font-medium"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91 00000 00000"
                                                    required
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-red-500/10 focus:border-red-500 outline-none transition text-xs font-medium"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                                <textarea
                                                    rows={3}
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="How can we assist your enterprise?"
                                                    required
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-red-500/10 focus:border-red-500 outline-none transition text-xs font-medium resize-none"
                                                ></textarea>
                                            </div>
                                            <button 
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="inline-flex items-center justify-center gap-2 bg-[#E63946] hover:bg-red-700 text-white font-bold text-[10px] uppercase tracking-widest px-6 py-3.5 rounded-lg shadow-lg shadow-red-500/10 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <><FaSpinner className="animate-spin" /> Processing...</>
                                                ) : "Submit Request →"}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <FaCheckCircle size={32} />
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Message Sent!</h3>
                                        <p className="text-slate-500 text-sm font-medium mb-8">Thank you for reaching out. Our team will contact you shortly.</p>
                                        <button 
                                            type="button"
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-red-700 transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Right Column: Info */}
                        <div className="lg:w-5/12 bg-slate-50/50 p-8 md:p-10 space-y-8">
                            <div>
                                <h3 className="text-[9px] font-black text-[#1B2C6B] uppercase tracking-[0.2em] mb-6">Contact Information</h3>
                                <ul className="space-y-5">
                                    <li>
                                        <a 
                                            href="https://maps.app.goo.gl/PbATD2xT4BDe8op1A" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            onClick={() => (window as any).gtag?.('event', 'location_click')}
                                            className="flex items-start gap-3 group/link"
                                        >
                                            <div className="w-9 h-9 rounded-lg bg-[#1B2C6B] flex items-center justify-center shrink-0 group-hover/link:bg-primary transition-colors duration-300">
                                                <FaMapMarkerAlt className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-[12px] font-bold text-slate-900 leading-snug uppercase tracking-tight group-hover/link:text-primary transition-colors duration-300">
                                                    #24, 100 Feet Rd, HRBR Layout 1st Block,<br />
                                                    Balaji Layout, Subbaiahnapalya, Banaswadi, Bengaluru, Karnataka 560043
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="tel:+919964546464" 
                                            onClick={() => (window as any).gtag?.('event', 'call_click')}
                                            className="flex items-center gap-3 group/link w-fit"
                                        >
                                            <div className="w-9 h-9 rounded-lg bg-[#1B2C6B] flex items-center justify-center shrink-0 group-hover/link:bg-primary transition-colors duration-300">
                                                <FaPhoneAlt className="text-white text-sm" />
                                            </div>
                                            <p className="text-sm font-black text-slate-900 tracking-wider group-hover/link:text-primary transition-colors duration-300">099645 46464</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="mailto:terait.sales@gmail.com" 
                                            className="flex items-center gap-3 group/link w-fit"
                                        >
                                            <div className="w-9 h-9 rounded-lg bg-[#1B2C6B] flex items-center justify-center shrink-0 group-hover/link:bg-primary transition-colors duration-300">
                                                <FaEnvelope className="text-white text-sm" />
                                            </div>
                                            <p className="text-sm font-bold text-slate-900 lower-case group-hover/link:text-primary transition-colors duration-300">terait.sales@gmail.com</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-[9px] font-black text-[#1B2C6B] uppercase tracking-[0.2em] mb-6">Operational Hours</h3>
                                <div className="space-y-3">
                                    {[
                                        { day: "Mon - Sat", hours: "09:00 - 19:00" },
                                        { day: "Sunday", hours: "CLOSED", color: "text-red-500" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center text-[9px] font-bold border-b border-slate-100 pb-1.5">
                                            <span className="text-slate-400 uppercase tracking-widest">{item.day}</span>
                                            <span className={item.color || "text-[#1B2C6B]"}>{item.hours}</span>
                                        </div>
                                    ))}
                                    <p className="text-[8px] font-bold text-slate-400 italic mt-1">
                                        * Hours might differ during holidays
                                    </p>
                                </div>
                            </div>

                            <div className="relative rounded-xl overflow-hidden h-32 bg-slate-200 border border-slate-100 group/map shadow-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.341918545567!2d77.64852499999999!3d13.013885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzUwLjAiTiA3N8KwMzgnNTQuNyJF!5e0!3m2!1sen!2sin!4v1774002491600!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="transition-all duration-700 contrast-125"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FinalCTA;
