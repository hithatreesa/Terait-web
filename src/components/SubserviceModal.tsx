"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { DetailedFeature, ProcessStep } from "@/data/servicesData";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

interface SubserviceModalProps {
    isOpen: boolean;
    onClose: () => void;
    subservice: DetailedFeature | null;
    processFlow?: ProcessStep[];
}

const SubserviceModal: React.FC<SubserviceModalProps> = ({ 
    isOpen, 
    onClose, 
    subservice, 
    processFlow = [] 
}) => {
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
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                    >
                        {/* Header: Visual & Identity Overlay */}
                        <div className="relative w-full h-[250px] md:h-[300px] shrink-0 border-b border-white/5">
                            <Image
                                src={subservice.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"}
                                alt={subservice.title}
                                fill
                                className="object-cover opacity-60 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                            
                            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-14">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center text-primary animate-float shrink-0">
                                        <subservice.icon size={32} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] font-inner">Verified Solution</span>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none font-outfit">
                                            {subservice.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="h-1.5 w-20 bg-primary rounded-full" />
                            </div>

                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 p-3 rounded-2xl bg-slate-800/80 text-white hover:bg-primary transition-all backdrop-blur-md shadow-2xl group border border-white/10"
                            >
                                <HiX size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto no-scrollbar p-10 md:p-14 bg-slate-900/50">
                            <div className="mb-14">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] font-inter mb-6">Overview</p>
                                <p className="text-xl md:text-2xl text-slate-300 font-medium font-inter leading-relaxed italic">
                                    {subservice.description}
                                </p>
                            </div>

                            {/* Implementation Workflow */}
                            {processFlow.length > 0 && (
                                <div className="mb-14 pt-10 border-t border-slate-800/50">
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] font-inter mb-10">Implementation Workflow</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {processFlow.map((step, idx) => (
                                            <div key={idx} className="relative group/step">
                                                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-black text-primary group-hover/step:bg-primary group-hover/step:text-white transition-all mb-6 shadow-inner">
                                                    0{idx + 1}
                                                </div>
                                                <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-3 group-hover/step:text-primary transition-colors">{step.title}</h4>
                                                <p className="text-[10px] font-medium text-slate-500 leading-relaxed font-inter">{step.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Bottom Strip: CTA */}
                            <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="text-center md:text-left">
                                    <p className="text-xs font-black text-white uppercase tracking-[0.2em] font-inter mb-2">Connect with Engineers</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] font-inter">Average deployment time: 24-48 hours</p>
                                </div>
                                <a
                                    href="https://wa.me/919964546464" 
                                    className="w-full md:w-auto px-12 py-6 bg-red-600 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-6 hover:bg-red-700 transition-all shadow-[0_20px_40px_-10px_rgba(220,38,38,0.4)] active:scale-95 group"
                                >
                                    <FaWhatsapp size={22} className="group-hover:scale-110 transition-transform" />
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
