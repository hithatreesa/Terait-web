"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Button } from "./UI";
import { HiX } from "react-icons/hi";
import ScrollReveal from "./ScrollReveal";
import {
    FaVideo,
    FaCloud,
    FaNetworkWired,
    FaHeadset,
    FaShieldAlt,
    FaPhoneAlt,
    FaProjectDiagram,
} from "react-icons/fa";

const services = [
    {
        title: "Audio/Video System Integration",
        icon: FaVideo,
        color: "bg-orange-50 text-orange-600",
        description:
            "Specializing in AV enabled boardrooms, auditoriums, and smart classroom solutions.",
        items: [
            {
                name: "AV Enabled Board Rooms",
                description: "Professional audio and video setup for modern meeting rooms.",
            },
            {
                name: "Auditorium Solutions",
                description: "Large scale sound and display systems for auditoriums.",
            },
            {
                name: "Conference Room AV",
                description: "Integrated AV solutions for seamless business presentations.",
            },
            {
                name: "Smart Classroom",
                description: "Interactive digital classrooms with advanced AV systems.",
            },
            {
                name: "Huddle Room Solutions",
                description: "Compact AV setups for small team collaborations.",
            },
            {
                name: "Virtual Classroom",
                description: "Online teaching solutions with integrated video platforms.",
            },
        ],
    },
    {
        title: "Cloud Solutions",
        icon: FaCloud,
        color: "bg-orange-50 text-orange-600",
        description:
            "Seamless cloud migration and management for AWS, GCP, and Microsoft Azure.",
        items: [
            {
                name: "AWS Cloud",
                description: "Secure and scalable infrastructure on Amazon Web Services.",
            },
            {
                name: "Google Cloud",
                description: "High performance cloud computing using GCP services.",
            },
            {
                name: "Microsoft Azure",
                description: "Enterprise cloud infrastructure powered by Microsoft Azure.",
            },
        ],
    },
    {
        title: "IT Infrastructure Services",
        icon: FaNetworkWired,
        color: "bg-orange-50 text-orange-600",
        description:
            "Comprehensive IT infrastructure including CCTV, Data Centers, and LAN/WAN solutions.",
        items: [
            {
                name: "CCTV Solutions",
                description: "High security surveillance systems for offices and industries.",
            },
            {
                name: "Data Center Setup",
                description: "Reliable data center design and deployment solutions.",
            },
            {
                name: "IT Networking",
                description: "Structured networking for fast and reliable connectivity.",
            },
            {
                name: "LAN/WAN Setup",
                description: "Local and wide area network infrastructure solutions.",
            },
            {
                name: "WiFi Solutions",
                description: "High speed wireless networking for businesses.",
            },
            {
                name: "Biometric Systems",
                description: "Secure biometric attendance and access control systems.",
            },
        ],
    },
    {
        title: "IT Managed Services",
        icon: FaHeadset,
        color: "bg-orange-50 text-orange-600",
        description:
            "Full-range managed services from backup solutions to server and desktop support.",
        items: [
            {
                name: "Cloud Management",
                description: "Continuous monitoring and management of cloud infrastructure.",
            },
            {
                name: "Data Backup",
                description: "Secure automated backup solutions for business data.",
            },
            {
                name: "Desktop Support",
                description: "Technical support and maintenance for employee systems.",
            },
            {
                name: "Email Management",
                description: "Enterprise email hosting and management services.",
            },
            {
                name: "Disaster Recovery",
                description: "Business continuity solutions for unexpected failures.",
            },
            {
                name: "Server Management",
                description: "Professional monitoring and optimization of servers.",
            },
        ],
    },
    {
        title: "Network Security",
        icon: FaShieldAlt,
        color: "bg-orange-50 text-orange-600",
        description:
            "Ensuring your security with advanced surveillance, network protection, and firewalls.",
        items: [
            {
                name: "Security Surveillance",
                description: "AI powered monitoring systems for security protection.",
            },
            {
                name: "Network Security",
                description: "Advanced threat protection and monitoring solutions.",
            },
            {
                name: "Firewall Setup",
                description: "Enterprise firewall configuration and protection.",
            },
        ],
    },
    {
        title: "VoIP & Phone Services",
        icon: FaPhoneAlt,
        color: "bg-orange-50 text-orange-600",
        description:
            "Reliable communication systems including VoIP, EPABX, and phone management.",
        items: [
            {
                name: "VoIP Systems",
                description: "Cloud based voice communication solutions.",
            },
            {
                name: "EPABX Systems",
                description: "Internal office communication management systems.",
            },
            {
                name: "Phone Management",
                description: "Complete enterprise call handling and monitoring.",
            },
        ],
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState<any>(null);

    const closeModal = () => setSelectedService(null);

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-slate-900 mb-5 uppercase">
                            Solutions For <span className="text-[#243C8F]">Every Business</span>
                        </h2>

                        <p className="text-slate-500 max-w-2xl mx-auto">
                            We provide end-to-end IT infrastructure services helping businesses
                            stay connected, secure and efficient.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>

                            <div
                                onClick={() => setSelectedService(service)}
                                className="cursor-pointer h-full"
                            >

                                <Card className="h-full flex flex-col items-center text-center border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition">

                                    <div
                                        className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}
                                    >
                                        <service.icon size={22} />
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 mb-3 min-h-[50px]">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm text-slate-500 leading-relaxed mb-5">
                                        {service.description}
                                    </p>

                                    <span className="text-sm border border-[#243C8F] text-[#243C8F] px-5 py-2 rounded-md hover:bg-[#243C8F] hover:text-white transition">
                                        Explore →
                                    </span>

                                </Card>

                            </div>

                        </ScrollReveal>
                    ))}

                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (

                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={closeModal}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative bg-white rounded-xl p-10 max-w-4xl w-full shadow-2xl"
                        >

                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 text-slate-400 hover:text-black"
                            >
                                <HiX size={24} />
                            </button>

                            <h2 className="text-2xl font-bold mb-8 text-center text-slate-900">
                                {selectedService.title}
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                                {selectedService.items.map((item: any, index: number) => (

                                    <div
                                        key={index}
                                        className="p-5 border border-slate-200 rounded-xl hover:shadow-md hover:-translate-y-1 transition"
                                    >

                                        <FaProjectDiagram className="text-[#243C8F] mb-3" />

                                        <h4 className="text-sm font-semibold text-slate-900 mb-2">
                                            {item.name}
                                        </h4>

                                        <p className="text-xs text-slate-500 leading-relaxed">
                                            {item.description}
                                        </p>

                                    </div>

                                ))}

                            </div>

                            <div className="mt-10 text-center">
                                <Button
                                    onClick={closeModal}
                                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg"
                                >
                                    Close
                                </Button>
                            </div>

                        </motion.div>

                    </div>

                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;