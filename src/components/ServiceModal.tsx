"use client";
import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { ServiceDetail, DetailedFeature } from "@/data/servicesData";
import SubserviceModal from "./SubserviceModal";
import SubserviceContent from "./SubserviceContent";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: ServiceDetail | null;
    customSubservices?: DetailedFeature[];
    selectedSubservice: DetailedFeature | null;
    setSelectedSubservice: (sub: DetailedFeature | null) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
    isOpen,
    onClose,
    service,
    customSubservices,
    selectedSubservice,
    setSelectedSubservice,
}) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Reset view when modal closes
    React.useEffect(() => {
        if (!isOpen) {
            setSelectedSubservice(null);
        }
    }, [isOpen, setSelectedSubservice]);

    if (!service) return null;

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 lg:p-8">
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
                            {/* Unified Scrollable Content Area */}
                            <div 
                                ref={scrollContainerRef}
                                className="flex-1 overflow-y-auto no-scrollbar"
                            >
                                {/* Desktop/Grid View or Unified Mobile View */}
                                {isMobile && selectedSubservice ? (
                                    <div className="min-h-0 relative">
                                        <SubserviceContent 
                                            subservice={selectedSubservice}
                                            processFlow={service.processFlow}
                                            onBack={() => setSelectedSubservice(null)}
                                            showBack={true}
                                        />
                                        <button
                                            onClick={onClose}
                                            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 text-white hover:bg-primary transition-all backdrop-blur-md shadow-2xl group border border-white/10 z-[110]"
                                        >
                                            <HiX size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        {/* Header */}
                                        <div className="p-8 md:p-12 border-b border-slate-800 bg-slate-900/50 flex flex-col items-center text-center gap-6 relative">
                                            <button
                                                onClick={onClose}
                                                className="absolute top-6 right-6 p-4 rounded-2xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all shadow-xl border border-slate-700/50 group z-20"
                                            >
                                                <HiX size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                                            </button>

                                            <div className="max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 mb-8 mt-12">
                                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-primary/20 flex items-center justify-center text-primary border border-primary/20 shadow-lg shadow-primary/10">
                                                    <service.icon size={40} />
                                                </div>
                                                
                                                {(() => {
                                                    const words = service.title.split(" ");
                                                    const lastWord = words.pop();
                                                    const mainPart = words.join(" ");
                                                    return (
                                                        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-none font-outfit">
                                                            {mainPart} <span className="text-primary">{lastWord}</span>
                                                        </h2>
                                                    );
                                                })()}
                                            </div>
                                            <p className="text-slate-400 text-lg md:text-xl font-medium font-inter leading-relaxed max-w-2xl mx-auto mb-4">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Sub-services Grid */}
                                        <div className="p-8 md:p-12">
                                            <div className="flex flex-wrap justify-center gap-6">
                                                {(customSubservices || service.detailedFeatures).map((feature, idx) => (
                                                    <motion.button
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        onClick={() => setSelectedSubservice(feature)}
                                                        className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all text-center flex flex-col items-center min-w-[300px] md:min-w-[400px] max-w-[500px] flex-1 hover:shadow-[0_20px_40px_-20px_rgba(239,68,68,0.2)]"
                                                    >
                                                        <div className="flex flex-col items-center mb-6 w-full">
                                                            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                                                <feature.icon size={32} />
                                                            </div>
                                                            <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors font-outfit tracking-tight leading-tight">
                                                                {feature.title}
                                                            </h4>
                                                        </div>
                                                        <p className="text-sm text-slate-400 leading-relaxed font-inter font-medium mb-8 line-clamp-3">
                                                            {feature.description}
                                                        </p>
                                                        {feature.impact && (
                                                            <div className="mt-auto pt-6 border-t border-slate-800/50 w-full">
                                                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2 text-center">Projected Impact</span>
                                                                <p className="text-xs font-bold text-slate-300 font-inter italic text-center">{feature.impact}</p>
                                                            </div>
                                                        )}
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <SubserviceModal
                isOpen={!!selectedSubservice}
                onClose={() => setSelectedSubservice(null)}
                subservice={selectedSubservice}
                processFlow={service.processFlow}
            />
        </>
    );
};

export default ServiceModal;
