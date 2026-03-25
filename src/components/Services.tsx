"use client";
import React, { useState, useMemo, useEffect } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { servicesData, DetailedFeature } from "@/data/servicesData";
import ServiceModal from "./ServiceModal";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceListItem {
    id: string;
    category: "Services" | "Products";
    title?: string;
    desc?: string;
    features?: string[];
}

const servicesList: ServiceListItem[] = [
    // Services (10) - Software & Service based
    { id: "prof-it-services", category: "Services" },
    { id: "cloud-products", category: "Services" },
    { id: "cloud-enablement", category: "Services" },
    { id: "cybersecurity-products", category: "Services" },
    { id: "backup-recovery", category: "Services" },
    { id: "business-apps", category: "Services" },
    { id: "collaboration-productivity", category: "Services" },
    { id: "mailing-solutions", category: "Services" },
    { id: "automation-devops", category: "Services" },
    { id: "iot-solutions", category: "Services" },

    // Products (10) - Hardware based
    { id: "computer-systems", category: "Products" },
    { id: "networking-solutions", category: "Products" },
    { id: "security-surveillance", category: "Products" },
    { id: "power-backup", category: "Products" },
    { id: "printing-imaging", category: "Products" },
    { id: "office-equipment", category: "Products" },
    { id: "audio-video", category: "Products" },
    { id: "mobility-smart", category: "Products" },
    { id: "aidc-pos", category: "Products" },
    { id: "gaming-electronics", category: "Products" },
];

const Services = () => {
    const [view, setView] = useState<"Services" | "Products">("Services");
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedSubservice, setSelectedSubservice] = useState<DetailedFeature | null>(null);

    useEffect(() => {
        if (selectedId || selectedSubservice) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (selectedSubservice) setSelectedSubservice(null);
                else if (selectedId) setSelectedId(null);
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [selectedId, selectedSubservice]);

    const filteredItems = useMemo(() => {
        return servicesList.filter(item => item.category === view);
    }, [view]);

    const selectedService = selectedId ? servicesData[selectedId] : null;

    return (
        <section id="services" className="py-24 bg-slate-950 scroll-mt-20 relative overflow-hidden">

            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
            </div>

            {/* ✅ ONLY animation added here */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-[1500px] mx-auto px-6 relative z-10"
            >

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-4xl">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-inter">
                            Our Expertise
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-none italic uppercase font-outfit md:whitespace-nowrap">
                            Enterprise<span className="text-primary not-italic"> Solutions</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed font-inter">
                            Scalable technology architecture designed for the modern high-performance organization.
                        </p>
                    </div>

                    <div className="flex p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-inner w-fit">
                        <button onClick={() => setView("Services")}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest font-inter ${view === "Services" ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-white"}`}>
                            Services
                        </button>
                        <button onClick={() => setView("Products")}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest font-inter ${view === "Products" ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-white"}`}>
                            Products
                        </button>
                    </div>
                </div>

                {/* GRID */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={view} // VERY IMPORTANT
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20"
                    >
                        {filteredItems.map((item, index) => {
                            const data = servicesData[item.id];
                            if (!data) return null;

                            const title = item.title || data.title;
                            const desc = item.desc || data.description;
                            const highlights = item.features || data.features;

                            return (
                                <div key={`${view}-${index}`} className="w-full h-full">
                                    <button
                                        onClick={() => setSelectedId(item.id)}
                                        className="group cursor-pointer h-full w-full text-left"
                                    >

                                        {/* ✅ OPTIMIZED CARD - BIG TILES */}
                                        <div className="h-full min-h-[280px] bg-slate-900/40 border border-slate-800/50 p-8 flex flex-col gap-6 rounded-3xl transition-all duration-300 ease-out transform-gpu will-change-transform hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] group/card">

                                            {/* ICON */}
                                            <div className="w-14 h-14 min-w-[56px] rounded-xl bg-slate-800/50 flex items-center justify-center text-primary border border-slate-700/50 transition-all duration-300 transform-gpu group-hover/card:scale-105 group-hover/card:bg-primary group-hover/card:text-white">
                                                <data.icon size={26} />
                                            </div>

                                            {/* CONTENT */}
                                            <div className="flex flex-col grow min-w-0">
                                                <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300 group-hover/card:text-primary leading-[1.3] font-outfit line-clamp-2">
                                                    {title}
                                                </h3>

                                                <p className="text-xs text-slate-400 mb-6 leading-relaxed font-inter font-medium line-clamp-2">
                                                    {desc}
                                                </p>

                                                <div className="space-y-2 mb-4 grow">
                                                    {highlights.slice(0, 3).map((point, idx) => (
                                                        <div key={idx}
                                                            className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-slate-500 transition-colors duration-300 group-hover/card:text-slate-300">
                                                            <HiCheckCircle className="text-primary shrink-0" />
                                                            <span className="truncate">{point}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

            </motion.div>

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