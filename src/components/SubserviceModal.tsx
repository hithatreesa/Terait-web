"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiArrowNarrowRight, HiCheckCircle } from "react-icons/hi";
import { FaWhatsapp, FaCalendarAlt, FaShieldAlt, FaRocket } from "react-icons/fa";
import { DetailedFeature } from "@/data/servicesData";
import Image from "next/image";

interface SubserviceModalProps {
    isOpen: boolean;
    onClose: () => void;
    subservice: DetailedFeature | null;
}

const SubserviceModal: React.FC<SubserviceModalProps> = ({ isOpen, onClose, subservice }) => {
    // Escape key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!subservice) return null;

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        className="relative w-full max-w-6xl bg-slate-950 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)] flex flex-col md:flex-row max-h-[90vh]"
                    >
                        {/* Left Column: Visual/Hero */}
                        <div className="md:w-[45%] relative h-64 md:h-auto bg-slate-900 overflow-hidden group">
                            <Image
                                src={subservice.image || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"}
                                alt={subservice.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                            
                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary backdrop-blur-md border border-primary/20 shadow-lg">
                                        <FaShieldAlt size={22} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary font-inter">Verified Solution</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none font-outfit mb-4">
                                    {subservice.title}
                                </h3>
                                <div className="h-1 w-20 bg-primary rounded-full" />
                            </div>

                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full bg-slate-950/50 text-white hover:bg-primary transition-colors backdrop-blur-md md:hidden"
                            >
                                <HiX size={20} />
                            </button>
                        </div>

                        {/* Right Column: Details */}
                        <div className="md:w-[55%] p-10 md:p-16 overflow-y-auto no-scrollbar flex flex-col bg-slate-950/50 backdrop-blur-md">
                            <button
                                onClick={onClose}
                                className="absolute top-10 right-10 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-primary/50 transition-all hidden md:flex items-center justify-center group shadow-xl"
                            >
                                <HiX size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            <div className="mb-12">
                                <h4 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6 font-inter">Overview</h4>
                                <p className="text-slate-300 text-xl leading-relaxed font-inter font-medium mb-10 italic">
                                    {subservice.description}
                                </p>

                                {subservice.impact && (
                                    <>
                                        <h4 className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-6 font-inter">Expected Impact</h4>
                                        <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700 transition-colors group/item">
                                            <HiCheckCircle className="text-primary mt-1 shrink-0 group-hover/item:scale-110 transition-transform" size={20} />
                                            <span className="text-sm text-slate-400 font-bold font-inter leading-snug group-hover/item:text-slate-200 transition-colors">{subservice.impact}</span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Bottom Strip: CTA */}
                            <div className="mt-auto pt-10 border-t border-slate-800/50 flex flex-col sm:flex-row items-center gap-8">
                                <div className="flex -space-x-3 mb-2 sm:mb-0">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden shadow-xl ring-1 ring-white/10">
                                            <Image src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Expert" width={48} height={48} className="grayscale hover:grayscale-0 transition-all duration-500" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-2 border-slate-950 bg-primary flex items-center justify-center text-[10px] font-black text-white font-inter shadow-xl ring-1 ring-white/10">
                                        +12
                                    </div>
                                </div>
                                <div className="text-center sm:text-left mr-auto">
                                    <p className="text-xs font-black text-white uppercase tracking-[0.2em] font-inter mb-1">Consult with Experts</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] font-inter">Ready to deploy in 24-48 hours</p>
                                </div>
                                <a
                                    href="https://wa.me/919916666666" 
                                    className="w-full sm:w-auto px-10 py-5 bg-red-600 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-red-700 transition-all shadow-[0_10px_20px_-5px_rgba(220,38,38,0.4)] active:scale-95 group"
                                >
                                    <FaWhatsapp size={20} className="group-hover:scale-110 transition-transform" />
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SubserviceModal;
