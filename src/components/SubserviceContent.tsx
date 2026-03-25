"use client";
import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";
import { DetailedFeature, ProcessStep } from "@/data/servicesData";

interface SubserviceContentProps {
    subservice: DetailedFeature;
    processFlow?: ProcessStep[];
    onBack?: () => void;
    showBack?: boolean;
}

const SubserviceContent: React.FC<SubserviceContentProps> = ({
    subservice,
    processFlow = [],
    onBack,
    showBack = false
}) => {
    return (
        <div className="flex-1 flex flex-col min-h-0">
            {/* Header: Visual & Identity Overlay */}
            <div className="relative w-full h-[80px] md:h-[100px] border-b border-white/5">
                <Image
                    src={subservice.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"}
                    alt={subservice.title}
                    fill
                    className="object-cover opacity-60 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center text-primary animate-float shrink-0">
                            <subservice.icon size={20} />
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-black text-white italic uppercase tracking-tighter leading-none font-outfit">
                                {subservice.title}
                            </h3>
                        </div>
                    </div>
                    <div className="h-1 w-16 bg-primary rounded-full" />
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-10 bg-slate-900/50">
                {showBack && onBack && (
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-6 hover:translate-x-[-4px] transition-transform"
                    >
                        <FaArrowLeft /> Back to Services
                    </button>
                )}

                <div className="mb-8">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] font-inter mb-3">Overview</p>
                    <p className="text-base text-slate-400 font-medium font-inter leading-relaxed italic">
                        {subservice.description}
                    </p>
                </div>

                {/* Implementation Workflow */}
                {processFlow.length > 0 && (
                    <div className="mb-8 pt-6 border-t border-slate-800/50">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] font-inter mb-6">Workflow</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {processFlow.map((step, idx) => (
                                <div key={idx} className="relative group/step">
                                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-black text-primary group-hover/step:bg-primary group-hover/step:text-white transition-all mb-4 shadow-inner">
                                        0{idx + 1}
                                    </div>
                                    <h4 className="text-[10px] font-black text-white uppercase tracking-[0.1em] mb-2 group-hover/step:text-primary transition-colors">{step.title}</h4>
                                    <p className="text-[10px] font-medium text-slate-500 leading-relaxed font-inter">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Bottom Strip: CTA */}
                <div className="pt-6 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-[10px] font-black text-white uppercase tracking-[0.2em] font-inter mb-1">Schedule Deployment</p>
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.1em] font-inter">Avg. fulfillment: 24-48 hours</p>
                    </div>
                    <a
                        href="https://wa.me/919964546464"
                        className="w-full md:w-auto px-6 py-4 bg-red-600 text-white rounded-xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-red-700 transition-all shadow-[0_15px_30px_-5px_rgba(220,38,38,0.3)] active:scale-95 group"
                    >
                        <FaWhatsapp size={18} className="group-hover:scale-110 transition-transform" />
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SubserviceContent;
