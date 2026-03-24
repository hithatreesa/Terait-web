"use client";
import React, { useState, useMemo, useEffect } from "react";
import { HiArrowNarrowRight, HiCheckCircle } from "react-icons/hi";
import { servicesData, DetailedFeature } from "@/data/servicesData";
import ServiceModal from "./ServiceModal";

interface ServiceListItem {
    id: string;
    category: "Services" | "Products";
    title?: string;
    desc?: string;
}

const servicesList: ServiceListItem[] = [
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


const Services = () => {
    const [view, setView] = useState<"Services" | "Products">("Services");
    const [selectedId, setSelectedId] = useState<string | null>(null);
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
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-inter">Our Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-none italic uppercase font-outfit md:whitespace-nowrap">
                            Enterprise<span className="text-primary not-italic"> Solutions</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed font-inter">
                            Scalable technology architecture designed for the modern high-performance organization.
                        </p>
                    </div>

                    {/* Toggle Switch */}
                    <div className="flex p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-inner w-fit">
                        <button
                            type="button"
                            onClick={() => setView("Services")}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest font-inter ${view === "Services" ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                        >
                            Services
                        </button>
                        <button
                            type="button"
                            onClick={() => setView("Products")}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest font-inter ${view === "Products" ? "bg-primary text-white shadow-lg" : "text-slate-500 hover:text-white"}`}
                        >
                            Products
                        </button>
                    </div>
                </div>

                {/* Balanced 2x4 Grid for 8 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {filteredItems.map((item, index) => {
                        const data = servicesData[item.id];
                        if (!data) return null;
                        const title = item.title || data.title;
                        const desc = item.desc || data.description;
                        const highlights = data.features;

                        return (
                            <div
                                key={`${view}-${index}`}
                                className="w-full h-full"
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelectedId(item.id)}
                                    className="group cursor-pointer h-full w-full text-left"
                                    aria-label={`View details for ${title}`}
                                >
                                    <div className="h-full min-h-[220px] bg-slate-900/40 border-[1px] border-slate-800/50 hover:border-primary/40 p-6 flex flex-col xl:flex-row gap-6 rounded-2xl group/card">
                                        {/* Left Column: Icon */}
                                        <div className="w-14 h-14 min-w-[56px] rounded-xl bg-slate-800/50 flex items-center justify-center text-primary group-hover/card:bg-primary group-hover/card:text-white shadow-inner border border-slate-700/50 grow-0 shrink-0">
                                            <data.icon size={26} />
                                        </div>

                                        {/* Right Column: Content */}
                                        <div className="flex flex-col grow min-w-0">
                                            <h3
                                                className="text-lg font-bold text-white mb-2 group-hover/card:text-primary leading-[1.3] font-outfit line-clamp-2 whitespace-normal"
                                                title={title}
                                            >
                                                {title}
                                            </h3>
                                            <p className="text-xs text-slate-400 mb-6 leading-relaxed font-inter font-medium line-clamp-2">
                                                {desc}
                                            </p>

                                            {/* Static Highlights */}
                                            <div className="space-y-2 mb-4 grow">
                                                {highlights.slice(0, 3).map((point, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-slate-500 font-inter"
                                                    >
                                                        <HiCheckCircle className="text-primary shrink-0" />
                                                        <span className="group-hover/card:text-slate-300 uppercase tracking-[0.1em] font-bold truncate">{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
            </div>

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
