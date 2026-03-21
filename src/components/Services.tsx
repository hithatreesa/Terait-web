"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./UI";
import { HiArrowNarrowRight, HiCheckCircle } from "react-icons/hi";
import {
    FaLeaf, FaBuilding, FaLock, FaSyncAlt, FaChartLine
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { servicesData, DetailedFeature } from "@/data/servicesData";
import ServiceModal from "./ServiceModal";

const servicesList = [
    { id: "it-infra", category: "Services" },
    { id: "cloud-solutions", category: "Services" },
    { id: "cybersecurity", category: "Services" },
    { id: "networking", category: "Services" },
    { id: "business-apps", category: "Services" },
    { id: "collaboration", category: "Services" },
    { id: "automation", category: "Services" },
    { id: "smart-solutions", category: "Services" },
    // Products Mapping
    { id: "it-infra", category: "Products", title: "Enterprise IT & Data Centers", desc: "Servers, Racks, and Cooling" },
    { id: "networking", category: "Products", title: "Networking Equipment", desc: "Routers, Switches, and Fiber" },
    { id: "smart-solutions", category: "Products", title: "Security Systems", desc: "CCTV, Biometrics, and Access" },
    { id: "smart-solutions", category: "Products", title: "Printers & Imaging", desc: "MFPs and Industrial Scanners" },
    { id: "it-infra", category: "Products", title: "Power & Backup", desc: "UPS and Solar Solutions" },
    { id: "smart-solutions", category: "Products", title: "Mobility Devices", desc: "Laptops, Tablets, and Handhelds" },
    { id: "smart-solutions", category: "Products", title: "IoT & Smart Systems", desc: "Sensors and Industrial IoT" },
    { id: "cybersecurity", category: "Products", title: "Security Software", desc: "AV, EDR, and Firewalls" },
];

const solutionsByNeed = [
    { title: "Setup a new office", icon: FaBuilding, target: "it-infra" },
    { title: "Secure my business", icon: FaLock, target: "cybersecurity" },
    { title: "Move to cloud", icon: FaSyncAlt, target: "cloud-solutions" },
    { title: "Improve productivity", icon: FaChartLine, target: "automation" },
];

const Services = () => {
    const [view, setView] = useState<"Services" | "Products">("Services");
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [selectedSubservice, setSelectedSubservice] = useState<DetailedFeature | null>(null);

    // Lock background scroll when modal is open
    useEffect(() => {
        if (selectedId || selectedSubservice) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (selectedSubservice) {
                    setSelectedSubservice(null);
                } else if (selectedId) {
                    setSelectedId(null);
                }
            }
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [selectedId, selectedSubservice]);

    const filteredItems = useMemo(() => {
        return servicesList.filter(item => item.category === view).slice(0, 8);
    }, [view]);

    const selectedService = selectedId ? servicesData[selectedId] : null;

    return (
        <section id="services" className="py-24 bg-slate-950 scroll-mt-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-4xl">
                        <ScrollReveal>
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-inter">Our Expertise</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-none italic uppercase font-outfit md:whitespace-nowrap">
                                Enterprise<span className="text-primary not-italic"> Solutions</span>
                            </h2>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed font-inter">
                                Scalable technology architecture designed for the modern high-performance organization.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Toggle Switch */}
                    <ScrollReveal delay={0.2}>
                        <div className="flex p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-inner w-fit">
                            <button
                                type="button"
                                onClick={() => setView("Services")}
                                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 font-inter ${view === "Services" ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                            >
                                Services
                            </button>
                            <button
                                type="button"
                                onClick={() => setView("Products")}
                                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 font-inter ${view === "Products" ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                            >
                                Products
                            </button>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Level 1 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mb-20">
                    <AnimatePresence>
                        {filteredItems.map((item, index) => {
                            const data = servicesData[item.id];
                            if (!data) return null;
                            const title = (item as any).title || data.title;
                            const desc = (item as any).desc || data.description;
                            const highlights = data.features;

                            return (
                                <motion.div
                                    key={`${view}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: index * 0.05 }}
                                    layout
                                >
                                    <button
                                        type="button"
                                        onClick={() => setSelectedId(item.id)}
                                        onMouseEnter={() => setHoveredId(`${item.id}-${index}`)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        className="group cursor-pointer h-full w-full text-left"
                                        aria-label={`View details for ${title}`}
                                    >
                                        <Card className="h-full min-h-[220px] bg-slate-900/40 border-slate-800/50 hover:border-primary/40 p-6 flex flex-col xl:flex-row gap-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.2)] rounded-2xl group/card">
                                            {/* Left Column: Icon */}
                                            <div className="w-14 h-14 min-w-[56px] rounded-xl bg-slate-800/50 flex items-center justify-center text-primary group-hover/card:bg-primary group-hover/card:text-white transition-all duration-500 shadow-inner border border-slate-700/50 grow-0 shrink-0">
                                                <data.icon size={26} />
                                            </div>

                                            {/* Right Column: Content */}
                                            <div className="flex flex-col grow min-w-0">
                                                <h3
                                                    className="text-lg font-bold text-white mb-2 group-hover/card:text-primary transition-colors leading-[1.3] font-outfit line-clamp-2 whitespace-normal"
                                                    title={title}
                                                >
                                                    {title}
                                                </h3>
                                                <p className="text-xs text-slate-400 mb-6 leading-relaxed font-inter font-medium line-clamp-2">
                                                    {desc}
                                                </p>

                                                {/* Progressive Disclosure Highlights */}
                                                <div className="space-y-2 mb-4 grow">
                                                    {highlights.slice(0, hoveredId === `${item.id}-${index}` ? 4 : 2).map((point, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-slate-500 font-inter"
                                                        >
                                                            <HiCheckCircle className="text-primary shrink-0" />
                                                            <span className="group-hover/card:text-slate-300 transition-colors uppercase tracking-[0.1em] font-bold truncate">{point}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                <div className="mt-auto pt-4 border-t border-slate-800/50 flex justify-between items-center group/more w-full">
                                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary font-inter">Discover More</span>
                                                    <HiArrowNarrowRight className="text-primary group-hover/more:translate-x-2 transition-transform" />
                                                </div>
                                            </div>
                                        </Card>
                                    </button>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Solutions by Need */}
                <div className="mb-24">
                    <ScrollReveal>
                        <h4 className="text-2xl font-bold text-white mb-10 border-b border-slate-800 pb-4 italic uppercase font-outfit">Solutions by <span className="text-primary not-italic">Need</span></h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {solutionsByNeed.map((sol, idx) => (
                                <button
                                    type="button"
                                    key={idx}
                                    onClick={() => setSelectedId(sol.target)}
                                    className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 flex items-center gap-6 transition-all group text-left"
                                    aria-label={`Search for solutions for ${sol.title}`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <sol.icon size={20} />
                                    </div>
                                    <span className="text-xs font-black uppercase text-slate-400 group-hover:text-white transition-colors tracking-widest font-inter">{sol.title}</span>
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Sustainability Strip */}
                <ScrollReveal>
                    <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 animate-pulse">
                                <FaLeaf size={20} />
                            </div>
                            <div>
                                <h5 className="text-emerald-400 text-xs font-black uppercase tracking-[0.2em] font-inter">Sustainable Tech</h5>
                                <p className="text-slate-400 text-xs font-medium font-inter">Partnering with eco-friendly brands and implementing green infrastructure.</p>
                            </div>
                        </div>
                        <div className="flex gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                            <span className="text-[10px] font-bold text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-inter">ENERGY STAR</span>
                            <span className="text-[10px] font-bold text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-inter">ROHS COMPLIANT</span>
                            <span className="text-[10px] font-bold text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-inter">EPEAT GOLD</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Managed Modals */}
            <ServiceModal
                isOpen={!!selectedId}
                onClose={() => setSelectedId(null)}
                service={selectedService}
                selectedSubservice={selectedSubservice}
                setSelectedSubservice={setSelectedSubservice}
            />
        </section>
    );
};

export default Services;
