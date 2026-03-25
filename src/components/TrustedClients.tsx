"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const partnerLogos = [
    { src: "/clients/client1.png", name: "Partner 1" },
    { src: "/clients/client2.png", name: "Partner 2" },
    { src: "/clients/client3.png", name: "Partner 3" },
    { src: "/clients/client4.png", name: "Partner 4" },
    { src: "/clients/client5.png", name: "Partner 5" },
    { src: "/clients/client6.png", name: "Partner 6" },
];

const clientLogos = [
    { src: "/clients/client4.png", name: "Client 1" },
    { src: "/clients/client5.png", name: "Client 2" },
    { src: "/clients/client6.png", name: "Client 3" },
    { src: "/clients/client1.png", name: "Client 4" },
    { src: "/clients/client2.png", name: "Client 5" },
    { src: "/clients/client3.png", name: "Client 6" },
];

export default function TrustedClients() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const itemsPerPage = isMobile ? 2 : 3;
    const totalPages = Math.ceil(clientLogos.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % totalPages);
        }, isMobile ? 2000 : 3000);
        return () => clearInterval(interval);
    }, [totalPages, isMobile]);

    const clientGroups = Array.from({ length: totalPages }, (_, i) =>
        clientLogos.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
    );

    return (
        <section className="py-24 bg-white overflow-hidden border-b border-slate-100">
            <div className="max-w-[1600px] mx-auto px-6">

                {/* --- Section 1: Global Enterprise Partners (Running Marquee) --- */}
                <div className="text-center mb-12">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">
                        Global Network
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase italic font-outfit">
                        Enterprise <span className="text-primary not-italic">Partners</span>
                    </h2>
                </div>

                <div className="relative w-full overflow-hidden mb-24">
                    <div className="absolute left-0 top-0 h-full w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

                    <div 
                        className="flex animate-marquee gap-12 md:gap-24 items-center"
                        style={{ animationDuration: isMobile ? '20s' : '30s' }}
                    >
                        {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                            <div
                                key={`p-${index}`}
                                className="flex items-center justify-center min-w-[140px] md:min-w-[200px] h-20 md:h-24 opacity-40 hover:opacity-100 transition-all duration-500 hover:scale-110 grayscale hover:grayscale-0"
                            >
                                <Image
                                    src={logo.src}
                                    alt={`${logo.name} Partner`}
                                    width={isMobile ? 100 : 160}
                                    height={isMobile ? 50 : 80}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>


                {/* --- Section 2: Our Trusted Clients (3-Second Sliding Logos) --- */}
                <div className="text-center mb-12 pt-12 border-t border-slate-50">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">
                        Our Reach
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase italic font-outfit">
                        Our Trusted <span className="text-primary not-italic">Clients</span>
                    </h2>
                </div>

                <div className="relative w-full overflow-hidden h-32 flex items-center justify-center">
                    <div className="absolute left-0 top-0 h-full w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ x: isMobile ? 50 : 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: isMobile ? -50 : -100, opacity: 0 }}
                            transition={{ 
                                duration: isMobile ? 0.5 : 0.8, 
                                ease: [0.16, 1, 0.3, 1] 
                            }}
                            className="flex gap-12 md:gap-24 items-center justify-center w-full"
                        >
                            {clientGroups[activeIndex]?.map((logo, index) => (
                                <div
                                    key={`c-${activeIndex}-${index}`}
                                    className="flex items-center justify-center min-w-[120px] md:min-w-[200px] h-20 md:h-24 opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-110 grayscale hover:grayscale-0"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={`${logo.name} Client`}
                                        width={isMobile ? 100 : 160}
                                        height={isMobile ? 50 : 80}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
