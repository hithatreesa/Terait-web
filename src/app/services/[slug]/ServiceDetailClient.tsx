"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button, Card } from '@/components/UI';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCTA from '@/components/ServiceCTA';
import { FaArrowLeft, FaCheckCircle, FaIndustry, FaRocket } from 'react-icons/fa';
import Image from 'next/image';
import { servicesData } from '@/data/servicesData';

interface ServiceDetailClientProps {
    slug: string;
}

const ServiceDetailClient = ({ slug }: ServiceDetailClientProps) => {
    const service = servicesData[slug];
    if (!service) return null; // Should be handled by server, but safety first
    const Icon = service.icon;

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-50 -z-10" />
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-8">
                        <Link href="/#services" className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all">
                            <FaArrowLeft className="mr-2" /> Back to Services
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 shadow-sm"><Icon size={32} /></div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 leading-tight uppercase tracking-tight">{service.title}</h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-6">{service.description}</p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="relative">
                                <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
                                    {service.image ? <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" /> : <div className="w-full h-full flex items-center justify-center bg-slate-800"><Icon size={120} className="text-white/20 group-hover:scale-110 transition-transform duration-700" /></div>}
                                    <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
                                        <p className="text-sm font-bold text-slate-900 tracking-wide uppercase italic">Premium IT Solutions</p>
                                        <p className="text-xs text-slate-500">Expertise you can trust</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" /><div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
            <section id="features" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase italic">Advanced Features</h2>
                            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
                        </ScrollReveal>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {service.features.map((feature: string, idx: number) => (
                            <ScrollReveal key={idx} delay={idx * 0.1} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] min-w-[280px]">
                                <Card className="h-full border-slate-100 hover:border-primary/30 transition-all p-8">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary shrink-0"><FaCheckCircle size={18} /></div>
                                        <div>
                                            <p className="text-lg font-bold text-slate-800 mb-2">{feature}</p>
                                            <p className="text-slate-500 text-sm leading-relaxed">Highly optimized and professionally managed {feature.toLowerCase()} tailored to your business needs.</p>
                                        </div>
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 bg-slate-50 overflow-hidden relative">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase italic leading-tight">Why Choose Our <br /><span className="text-primary">{service.title}</span>?</h2>
                            <div className="space-y-6">
                                {service.benefits.map((benefit: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                                        <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0"><FaRocket size={16} /></div>
                                        <p className="font-bold text-slate-800">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <Card className="p-10 bg-slate-900 text-white relative overflow-hidden">
                                <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />
                                <div className="relative z-10">
                                    <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-8"><FaIndustry size={24} className="text-primary" /></div>
                                    <h3 className="text-2xl font-bold mb-6">Industries We Serve</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {service.industries.map((ind: string, idx: number) => <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-sm font-medium border border-white/10">{ind}</span>)}
                                    </div>
                                    <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5 italic text-slate-300">&quot;Our mission is to deliver enterprise-grade {service.title.toLowerCase()} that empowers organizations to scale efficiently and securely.&quot;</div>
                                </div>
                            </Card>
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
