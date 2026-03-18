"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, Button } from '@/components/UI';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCTA from '@/components/ServiceCTA';
import { FaArrowLeft, FaCheckCircle, FaIndustry, FaRocket, FaChevronRight } from 'react-icons/fa';
import { HiArrowNarrowRight, HiCheckCircle } from 'react-icons/hi';
import Image from 'next/image';
import { servicesData } from '@/data/servicesData';
import { motion } from 'framer-motion';

interface ServiceDetailClientProps {
    slug: string;
}

const ServiceDetailClient = ({ slug }: ServiceDetailClientProps) => {
    const service = servicesData[slug];
    if (!service) return null;
    const Icon = service.icon;

    return (
        <main className="min-h-screen bg-slate-950 text-slate-300 selection:bg-primary/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-12">
                        <Link href="/#services" className="group inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-slate-500 hover:text-primary transition-all">
                            <FaArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform" /> Back to Solutions
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <ScrollReveal>
                            <div className="w-20 h-20 rounded-[2rem] bg-slate-900 border border-slate-800 text-primary flex items-center justify-center mb-10 shadow-2xl">
                                <Icon size={36} />
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter italic font-outfit">
                                {service.title} <span className="text-primary not-italic inline-block drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">Expertise</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mb-12 font-inter font-medium">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <Button href="#contact" variant="primary" className="px-10 py-5 rounded-2xl text-xs uppercase tracking-[0.2em] font-black italic">
                                    Consult an Expert
                                </Button>
                                <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold">
                                                {String.fromCharCode(64 + i)}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Trusted by 50+ Enterprises</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="relative group">
                                <div className="aspect-[4/3] bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent z-10 opacity-50 group-hover:opacity-70 transition-opacity" />
                                    {service.image ? (
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Icon size={160} className="text-white/5 group-hover:scale-110 transition-transform duration-1000" />
                                        </div>
                                    )}

                                    {/* Stats Badge */}
                                    <div className="absolute -bottom-8 -left-8 z-20 bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl backdrop-blur-xl">
                                        <p className="text-4xl font-black text-white italic mb-1 font-outfit">99.9%</p>
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] font-inter">Uptime Guaranteed</p>
                                    </div>
                                </div>
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-[80px] -z-10" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-32 bg-slate-900/50 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <ScrollReveal>
                            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-inter">Inside the Stack</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic font-outfit">Core Capabilities</h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <p className="text-slate-500 max-w-md text-sm font-medium leading-relaxed font-inter">
                                Comprehensive service modules designed to handle high-concurrency enterprise workloads.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.detailedFeatures.map((feature, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <Card className="bg-slate-900/80 border-slate-800/80 hover:border-primary/30 p-10 rounded-[2.5rem] group h-full flex flex-col">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner border border-slate-700/50">
                                        <feature.icon size={26} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight font-outfit">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-inter mb-8 grow">{feature.description}</p>
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        Explored Module <HiArrowNarrowRight />
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Workflow */}
            <section className="py-32 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic font-outfit">Strategic <span className="text-primary not-italic">Workflow</span></h2>
                            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
                        </ScrollReveal>
                    </div>

                    <div className="relative">
                        {/* Desktop Connector */}
                        <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent -z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {service.processFlow.map((step, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <div className="relative group">
                                        <div className="w-24 h-24 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mb-8 mx-auto lg:mx-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 relative z-10 shadow-2xl">
                                            <span className="text-3xl font-black italic text-white">{idx + 1}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight italic font-outfit text-center lg:text-left">{step.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed font-inter text-center lg:text-left">{step.description}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack & Results */}
            <section className="py-32 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                        {/* Tech Stack */}
                        <ScrollReveal>
                            <div className="p-12 bg-slate-900 rounded-[3rem] border border-slate-800 h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />
                                <h3 className="text-3xl font-black text-white mb-12 uppercase italic tracking-tighter font-outfit">Infrastructure <span className="text-primary not-italic">Stack</span></h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {service.techStack.map((tech, idx) => (
                                        <div key={idx} className="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-colors">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <FaRocket size={18} />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 font-inter">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Impact Card */}
                        <ScrollReveal delay={0.2}>
                            <div className="p-12 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-[3rem] h-full flex flex-col justify-center relative overflow-hidden group">
                                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                                <div className="mb-10">
                                    <span className="px-6 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full font-inter">Case Analysis</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter italic leading-tight font-outfit">
                                    Measurable <br /> Business <span className="text-primary not-italic">Impact</span>
                                </h3>

                                <div className="p-10 bg-slate-950/80 backdrop-blur-xl rounded-3xl border border-primary/30 shadow-2xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                                            <HiCheckCircle size={24} />
                                        </div>
                                        <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] font-inter">Success Benchmark</h4>
                                    </div>
                                    <p className="text-2xl font-bold text-white leading-snug font-outfit italic">
                                        {service.caseStudy?.result || "Engineered for 100% data integrity and zero unplanned downtime."}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <ServiceCTA serviceName={service.title} />

            <Footer />
        </main>
    );
};

export default ServiceDetailClient;
