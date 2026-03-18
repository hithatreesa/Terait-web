"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./UI";
import { HiX, HiArrowNarrowRight, HiCheckCircle } from "react-icons/hi";
import {
    FaServer, FaCloud, FaShieldAlt, FaNetworkWired,
    FaLaptopCode, FaRocket, FaDesktop,
    FaLeaf, FaBuilding, FaLock, FaSyncAlt, FaChartLine
} from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { servicesData, DetailedFeature } from "@/data/servicesData";

const servicesList = [
    { id: "it-infra", category: "Services" },
    { id: "cloud-solutions", category: "Services" },
    { id: "cybersecurity", category: "Services" },
    { id: "networking", category: "Services" },
    { id: "business-apps", category: "Services" },
    { id: "collaboration", category: "Services" },
    { id: "automation", category: "Services" },
    { id: "smart-solutions", category: "Services" },
    // Products Mapping (Using same IDs for simplicity in this demo, mapping to product titles)
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

    // Handle ESC key to close modals
    // 🔒 Lock background scroll when modal is open
    useEffect(() => {
        if (selectedId || selectedSubservice) {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
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
            document.body.style.height = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [selectedId, selectedSubservice]);
    const filteredItems = useMemo(() => {
        const items = servicesList.filter(item => item.category === view);
        return items.slice(0, 8); // Ensure exactly 8 cards
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
                                onClick={() => setView("Services")}
                                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 font-inter ${view === "Services" ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                            >
                                Services
                            </button>
                            <button
                                onClick={() => setView("Products")}
                                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 font-inter ${view === "Products" ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                            >
                                Products
                            </button>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Level 1 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
                                    <div
                                        onClick={() => setSelectedId(item.id)}
                                        onMouseEnter={() => setHoveredId(`${item.id}-${index}`)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        className="group cursor-pointer h-full"
                                    >
                                        <Card className="h-full bg-slate-900/40 border-slate-800/50 hover:border-primary/40 p-6 flex flex-col xl:flex-row gap-6 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.2)] rounded-2xl group/card">
                                            {/* Left Column: Icon */}
                                            <div className="w-14 h-14 min-w-[56px] rounded-xl bg-slate-800/50 flex items-center justify-center text-primary group-hover/card:bg-primary group-hover/card:text-white transition-all duration-500 shadow-inner border border-slate-700/50 grow-0 shrink-0">
                                                <data.icon size={26} />
                                            </div>

                                            {/* Right Column: Content */}
                                            <div className="flex flex-col grow min-w-0">
                                                <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-primary transition-colors leading-tight font-outfit truncate">
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
                                    </div>
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
                                    key={idx}
                                    onClick={() => setSelectedId(sol.target)}
                                    className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-primary/50 flex items-center gap-6 transition-all group text-left"
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
                                <h5 className="text-emerald-400 text-xs font-black uppercase tracking-[0.2em] font-inter">🌱 Sustainable Tech</h5>
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

            {/* Level 2 Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                            onClick={() => setSelectedId(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-slate-900/60 border border-slate-700/50 rounded-[2.5rem] w-full max-w-6xl max-h-[90vh] shadow-2xl overflow-hidden"
                            style={{ backdropFilter: "blur(20px)" }}
                        >
                            <div className="h-full overflow-y-auto p-8 md:p-16 hide-scrollbar">
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-800/80 text-white flex items-center justify-center hover:bg-primary transition-all z-20 group"
                                >
                                    <HiX size={24} className="group-hover:rotate-90 transition-transform" />
                                </button>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                                    <div className="lg:col-span-12">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="mb-12"
                                        >
                                            <div className="w-20 h-20 rounded-[2rem] bg-primary/10 text-primary flex items-center justify-center mb-8 shadow-inner border border-primary/20">
                                                <selectedService.icon size={36} />
                                            </div>
                                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none font-outfit">
                                                {selectedService.title}
                                            </h2>
                                            <p className="text-slate-300 text-lg md:text-xl max-w-3xl font-medium leading-relaxed font-inter">
                                                {selectedService.description}
                                            </p>
                                        </motion.div>

                                        {/* Sub-services Grouped Grid */}
                                        <div className="mb-16">
                                            <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8 border-l-4 border-primary pl-4 font-inter">Sub-Services & Expertise</h5>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {selectedService.detailedFeatures.map((sub, idx) => (
                                                    <div
                                                        key={idx}
                                                        onClick={() => setSelectedSubservice(sub)}
                                                        className="block cursor-pointer"
                                                    >
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.1 + idx * 0.1 }}
                                                            className="p-8 rounded-3xl bg-slate-800/40 border border-slate-800 hover:border-primary hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all hover:scale-[1.02] group/sub h-full"
                                                        >
                                                            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/50 flex items-center justify-center text-primary mb-6 group-hover/sub:bg-primary group-hover/sub:text-white transition-all">
                                                                <sub.icon size={20} />
                                                            </div>
                                                            <h4 className="text-sm font-black text-white uppercase tracking-widest mb-3 font-inter">{sub.title}</h4>
                                                            <p className="text-xs text-slate-400 leading-relaxed font-inter">{sub.description}</p>
                                                        </motion.div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tech / Brand Strip */}
                                        <div className="mb-16 p-10 bg-slate-950/50 rounded-[2rem] border border-slate-800/50 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
                                            <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8 font-inter">Strategic Technology Partners</h5>
                                            <div className="flex flex-wrap gap-4">
                                                {selectedService.techStack.map((tech, idx) => (
                                                    <span key={idx} className="px-6 py-3 bg-slate-900 text-slate-300 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-800 hover:border-primary/50 transition-colors font-inter">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-slate-800">
                                            <a
                                                href="#contact"
                                                onClick={() => setSelectedId(null)}
                                                className="px-12 py-6 bg-primary hover:bg-red-700 text-white font-black text-xs uppercase tracking-[0.3em] rounded-[1.5rem] text-center shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-3 font-inter w-fit"
                                            >
                                                Talk to an Expert <HiArrowNarrowRight size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Premium Subservice Popup Modal: Mini Service Page */}
            <AnimatePresence>
                {selectedSubservice && selectedService && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 text-white">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                            onClick={() => setSelectedSubservice(null)}
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-6xl shadow-2xl overflow-y-auto hide-scrollbar max-h-[95vh] md:max-h-[90vh] scroll-smooth"
                        >
                            {/* Close Button - Sticky to stay visible */}
                            <button
                                onClick={() => setSelectedSubservice(null)}
                                className="sticky top-6 float-right right-6 mr-6 mt-6 w-12 h-12 rounded-full bg-slate-800 hover:bg-primary text-white flex items-center justify-center transition-all z-30 group shadow-lg"
                            >
                                <HiX size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            <div className="p-6 md:p-12 mt-4 space-y-24">
                                {/* SECTION 1: HERO LAYOUT */}
                                <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:items-stretch">
                                    {/* Left: Image Section */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="w-full lg:w-1/2 aspect-video lg:aspect-auto bg-slate-950 rounded-2xl relative overflow-hidden group shadow-2xl border border-slate-800"
                                    >
                                        {selectedSubservice.image ? (
                                            <motion.img
                                                initial={{ scale: 1.05 }}
                                                whileHover={{ scale: 1 }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                src={selectedSubservice.image}
                                                alt={selectedSubservice.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 lg:absolute inset-0"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 text-slate-700 p-12 lg:absolute inset-0">
                                                <selectedSubservice.icon size={120} className="opacity-10 mb-6" />
                                                <span className="text-xs uppercase tracking-[0.3em] font-black opacity-30">Premium Visual</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />
                                    </motion.div>

                                    {/* Right: Content Section */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        {...({} as any)}
                                        className="w-full lg:w-1/2 flex flex-col justify-center py-4 lg:py-8"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                                <selectedSubservice.icon size={20} />
                                            </div>
                                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Service Detail</span>
                                        </div>

                                        <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight font-outfit">
                                            {selectedSubservice.title}
                                        </h3>

                                        <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed font-inter">
                                            {selectedSubservice.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* SECTION 2: PROCESS FLOW */}
                                {selectedService.processFlow && selectedService.processFlow.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="border-t border-slate-800/80 pt-16"
                                    >
                                        <h4 className="text-2xl md:text-3xl font-black text-white mb-10 uppercase font-outfit text-center md:text-left">
                                            How This Service <span className="text-primary italic">Works</span>
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                                            {/* Optional decorative line behind cards on large screens */}
                                            <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-slate-800 -z-10" />

                                            {selectedService.processFlow.map((step, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group/step"
                                                >
                                                    <div className="text-primary text-4xl font-black font-outfit opacity-40 mb-6 group-hover/step:opacity-100 transition-opacity">
                                                        {`0${idx + 1}`}
                                                    </div>
                                                    <h5 className="text-lg font-bold text-white mb-3 uppercase tracking-wider font-inter">
                                                        {step.title}
                                                    </h5>
                                                    <p className="text-sm text-slate-400 font-medium font-inter leading-relaxed">
                                                        {step.description}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* SECTION 3: BOTTOM CTA STRIP */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative bg-gradient-to-br from-primary/10 via-slate-900 to-slate-950 border border-primary/20 rounded-[2rem] p-8 md:p-14 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                                        <div className="text-center lg:text-left max-w-2xl">
                                            <h4 className="text-3xl md:text-4xl font-black text-white uppercase italic leading-tight font-outfit mb-4">
                                                Let's Build Your <span className="text-primary not-italic">Infrastructure</span>
                                            </h4>
                                            <p className="text-slate-400 text-lg font-medium font-inter">
                                                Deploy enterprise-grade solutions tailored for maximum performance and security.
                                            </p>

                                            {/* Trust Indicators */}
                                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 opacity-70">
                                                <div className="flex items-center gap-2">
                                                    <HiCheckCircle className="text-primary" size={16} />
                                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Certified Engineers</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <HiCheckCircle className="text-primary" size={16} />
                                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">24/7 Support</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <HiCheckCircle className="text-primary" size={16} />
                                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">SLA Guaranteed</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4 shrink-0">
                                            <a
                                                href="#contact"
                                                onClick={() => {
                                                    setSelectedSubservice(null);
                                                    setSelectedId(null);
                                                }}
                                                className="px-10 py-5 bg-white text-slate-950 hover:bg-slate-200 font-black text-[11px] uppercase tracking-[0.3em] rounded-xl text-center shadow-xl transition-all active:scale-95 font-inter"
                                            >
                                                Contact Us
                                            </a>
                                            <a
                                                href="#contact"
                                                onClick={() => {
                                                    setSelectedSubservice(null);
                                                    setSelectedId(null);
                                                }}
                                                className="px-10 py-5 bg-primary/10 hover:bg-primary/20 text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-xl text-center border border-primary/30 transition-all active:scale-95 font-inter"
                                            >
                                                Schedule Consultation
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;