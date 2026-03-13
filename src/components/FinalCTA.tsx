"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const FinalCTA = () => {
    return (
        <section id="contact" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-20">
                    <ScrollReveal direction="up">
                        <div className="inline-block px-4 py-1.5 border border-red-500/30 rounded-full mb-8">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                                New: Enterprise AI Integration
                            </span>
                        </div>
                        
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
                            <span className="text-[#1B2C6B] block">LET'S START A</span>
                            <span className="text-[#E63946] block">CONVERSATION</span>
                        </h2>
                        
                        <p className="max-w-xl mx-auto text-slate-500 text-sm font-medium leading-relaxed">
                            We provide high-level enterprise solutions. Connect with our experts today 
                            to scale your infrastructure and secure your digital assets.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Contact Card */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="bg-white border border-slate-100 rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row">
                        
                        {/* Left Column: Form */}
                        <div className="lg:w-7/12 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
                            <h3 className="text-xl font-black text-slate-900 mb-10 tracking-tight uppercase">
                                Send Us A Message
                            </h3>
                            
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="John Doe" 
                                            className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition text-sm font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <input 
                                            type="email" 
                                            placeholder="john@company.com" 
                                            className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition text-sm font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        placeholder="+1 (555) 000-0000" 
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition text-sm font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                    <textarea 
                                        rows={4}
                                        placeholder="How can we assist your enterprise?" 
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition text-sm font-medium resize-none"
                                    ></textarea>
                                </div>
                                
                                <button className="inline-flex items-center justify-center gap-2 bg-[#E63946] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-red-500/20 transition-all active:scale-95">
                                    Submit Request →
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Info */}
                        <div className="lg:w-5/12 bg-slate-50/50 p-8 md:p-12 space-y-12">
                            <div>
                                <h4 className="text-[10px] font-black text-[#1B2C6B] uppercase tracking-[0.2em] mb-8">Contact Information</h4>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#1B2C6B] flex items-center justify-center shrink-0">
                                            <FaMapMarkerAlt className="text-white text-sm" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-900 leading-tight">
                                                123 Business Avenue, Tech Plaza,<br />
                                                San Francisco, CA 94107
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#1B2C6B] flex items-center justify-center shrink-0">
                                            <FaPhoneAlt className="text-white text-sm" />
                                        </div>
                                        <p className="text-xs font-bold text-slate-900">+1 (555) 123-4567</p>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#1B2C6B] flex items-center justify-center shrink-0">
                                            <FaEnvelope className="text-white text-sm" />
                                        </div>
                                        <p className="text-xs font-bold text-slate-900">contact@terait.com</p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-[10px] font-black text-[#1B2C6B] uppercase tracking-[0.2em] mb-8">Operational Hours</h4>
                                <div className="space-y-4">
                                    {[
                                        { day: "Mon - Fri", hours: "09:00 - 18:00" },
                                        { day: "Saturday", hours: "10:00 - 14:00" },
                                        { day: "Sunday", hours: "CLOSED", color: "text-red-500" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center text-[10px] font-bold border-b border-slate-100 pb-2">
                                            <span className="text-slate-400 uppercase tracking-widest">{item.day}</span>
                                            <span className={item.color || "text-[#1B2C6B]"}>{item.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative rounded-2xl overflow-hidden h-40 bg-slate-200 border border-slate-100">
                                {/* Map Placeholder/Visual */}
                                <div className="absolute inset-0 bg-[url('https://api.placeholder.com/400/200')] bg-cover bg-center grayscale opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                        <FaMapMarkerAlt className="text-white text-xs" />
                                    </div>
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
