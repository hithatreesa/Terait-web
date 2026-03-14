"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const FinalCTA = () => {
    return (
        <section id="contact" className="py-16 bg-white overflow-hidden scroll-mt-20">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <ScrollReveal direction="up">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-[0.9] mb-6">
                            <span className="text-[#1B2C6B] block">LET'S START A <span className="text-primary tracking-tight">CONVERSATION</span></span>
                        </h2>

                        <p className="max-w-lg mx-auto text-slate-500 text-xs font-medium leading-relaxed">
                            We provide high-level enterprise solutions. Connect with our experts today
                            to scale your infrastructure and secure your digital assets.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Contact Card */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="bg-white border border-slate-100 rounded-[1.5rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row">

                        {/* Left Column: Form */}
                        <div className="lg:w-7/12 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
                            <h3 className="text-lg font-black text-slate-900 mb-8 tracking-tight uppercase">
                                Send Us A Message
                            </h3>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-red-500/10 focus:border-red-500 outline-none transition text-xs font-medium"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@company.com"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-red-500/10 focus:border-red-500 outline-none transition text-xs font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-red-500/10 focus:border-red-500 outline-none transition text-xs font-medium"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                    <textarea
                                        rows={3}
                                        placeholder="How can we assist your enterprise?"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-red-500/10 focus:border-red-500 outline-none transition text-xs font-medium resize-none"
                                    ></textarea>
                                </div>

                                <button className="inline-flex items-center justify-center gap-2 bg-[#E63946] hover:bg-red-700 text-white font-bold text-[10px] uppercase tracking-widest px-6 py-3.5 rounded-lg shadow-lg shadow-red-500/10 transition-all active:scale-95">
                                    Submit Request →
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Info */}
                        <div className="lg:w-5/12 bg-slate-50/50 p-8 md:p-10 space-y-8">
                            <div>
                                <h4 className="text-[9px] font-black text-[#1B2C6B] uppercase tracking-[0.2em] mb-6">Contact Information</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#1B2C6B] flex items-center justify-center shrink-0">
                                            <FaMapMarkerAlt className="text-white text-xs" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-900 leading-tight uppercase tracking-tight">
                                                #24, 100 Feet Rd, HRBR Layout 1st Block,<br />
                                                Banaswadi, Bengaluru, India 560043
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#1B2C6B] flex items-center justify-center shrink-0">
                                            <FaPhoneAlt className="text-white text-xs" />
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-900">099645 46464</p>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#1B2C6B] flex items-center justify-center shrink-0">
                                            <FaEnvelope className="text-white text-xs" />
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-900">terait.sales@gmail.com</p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-[9px] font-black text-[#1B2C6B] uppercase tracking-[0.2em] mb-6">Operational Hours</h4>
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
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.265538356942!2d77.646350675844!3d13.018712314546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16dc92d6e7df%3A0x1d5877665b6f3c4c!2sTerait%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1710412000000!5m2!1sen!2sin"
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
