"use client";
import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { ServiceDetail, DetailedFeature } from "@/data/servicesData";
import SubserviceModal from "./SubserviceModal";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: ServiceDetail | null;
    selectedSubservice: DetailedFeature | null;
    setSelectedSubservice: (sub: DetailedFeature | null) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
    isOpen,
    onClose,
    service,
    selectedSubservice,
    setSelectedSubservice,
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    if (!service) return null;

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            className="relative w-full max-w-7xl bg-slate-950 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            {/* Header */}
                            <div className="p-8 md:p-12 border-b border-slate-800 bg-slate-900/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="max-w-3xl">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                                            <service.icon size={24} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary font-inter">Service Deep-Dive</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none font-outfit mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-slate-400 text-lg font-medium font-inter leading-relaxed max-w-2xl">
                                        {service.description}
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="absolute md:relative top-6 right-6 md:top-0 md:right-0 p-4 rounded-2xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all shadow-xl border border-slate-700/50 group"
                                >
                                    <HiX size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>
                            </div>

                            {/* Sub-services Grid */}
                            <div 
                                ref={scrollContainerRef}
                                className="flex-1 overflow-y-auto p-8 md:p-12 no-scrollbar"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {service.detailedFeatures.map((feature, idx) => (
                                        <motion.button
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            onClick={() => setSelectedSubservice(feature)}
                                            className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all text-left flex flex-col h-full hover:shadow-[0_20px_40px_-20px_rgba(239,68,68,0.2)]"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                                <feature.icon size={22} />
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors font-outfit uppercase">
                                                {feature.title}
                                            </h4>
                                            <p className="text-sm text-slate-400 leading-relaxed font-inter font-medium mb-8 line-clamp-3">
                                                {feature.description}
                                            </p>
                                            {feature.impact && (
                                                <div className="mt-auto pt-6 border-t border-slate-800/50">
                                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Projected Impact</span>
                                                    <p className="text-xs font-bold text-slate-300 font-inter italic">{feature.impact}</p>
                                                </div>
                                            )}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom Strip */}
                            <div className="px-12 py-6 border-t border-slate-800 bg-slate-900/30 backdrop-blur-md flex justify-between items-center">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] font-inter">Explore our {service.detailedFeatures.length} specialized sub-services</span>
                                <div className="flex gap-4">
                                    {service.techStack.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="text-[9px] font-bold text-slate-600 border border-slate-800 px-3 py-1 rounded-full uppercase tracking-widest">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <SubserviceModal
                isOpen={!!selectedSubservice}
                onClose={() => setSelectedSubservice(null)}
                subservice={selectedSubservice}
            />
        </>
    );
};

export default ServiceModal;
