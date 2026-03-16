"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/UI';
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
    if (!service) return null;
    const Icon = service.icon;

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section with H1 Optimization */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
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
                            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 shadow-sm">
                                <Icon size={32} />
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 leading-tight uppercase tracking-tight">
                                {service.title} <span className="text-primary italic">in Bangalore</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-6">{service.description}</p>
                            
                            {/* Problem & Solution Sections */}
                            <div className="grid gap-6 mt-8">
                                <div className="p-6 bg-red-50/50 border-l-4 border-red-500 rounded-r-2xl">
                                    <h3 className="text-sm font-black text-red-600 uppercase tracking-widest mb-2">The Challenge</h3>
                                    <p className="text-slate-700 leading-relaxed italic">&quot;{service.problemStatement}&quot;</p>
                                </div>
                                <div className="p-6 bg-blue-50/50 border-l-4 border-primary rounded-r-2xl">
                                    <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-2">Our Solution</h3>
                                    <p className="text-slate-700 leading-relaxed font-medium">{service.solutionStatement}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.2}>
                            <div className="relative">
                                <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
                                    {service.image ? (
                                        <Image 
                                            src={service.image} 
                                            alt={`${service.title} service in Bangalore`} 
                                            fill 
                                            className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-slate-800">
                                            <Icon size={120} className="text-white/20 group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                    )}
                                    <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/20">
                                        <p className="text-sm font-bold text-slate-900 tracking-wide uppercase italic">Premium IT Solutions</p>
                                        <p className="text-xs text-slate-500 px-1">Expertise you can trust</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Features Section - Standardized Equal Height Tiles */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">Enterprise Features</h2>
                            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                        </ScrollReveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.detailedFeatures.map((feature, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <Card className="h-full border-slate-100 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 transition-all p-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 shrink-0 shadow-inner">
                                        <feature.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tight">{feature.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-sm flex-grow">{feature.description}</p>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section - Conversion Focused */}
            <section className="py-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-0" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 uppercase italic leading-[1.1] tracking-tighter">
                                Why Choose Our <br /><span className="text-primary">{service.title}</span>?
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                We help businesses in <span className="font-bold text-slate-900 underline decoration-primary decoration-4">Bangalore</span> choose the right IT solutions based on their unique operational needs and scalability goals.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {service.benefitTiles.map((benefit, idx) => (
                                    <div key={idx} className="flex flex-col gap-4 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                                        <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                            <benefit.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-900 uppercase italic tracking-wider mb-1">{benefit.title}</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <Card className="p-12 bg-slate-900 text-white relative overflow-hidden shadow-2xl rounded-[3rem]">
                                <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />
                                <div className="relative z-10">
                                    <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg border border-white/10">
                                        <FaIndustry size={28} className="text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-8 uppercase italic tracking-tight">Industries We Serve</h3>
                                    <div className="flex flex-wrap gap-4 mb-12">
                                        {service.industries.map((ind: string, idx: number) => (
                                            <span key={idx} className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-xl text-xs font-bold uppercase tracking-widest border border-white/10 hover:bg-primary/20 transition-colors">
                                                {ind}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/5 italic text-slate-400 text-lg leading-relaxed relative">
                                        <span className="text-4xl absolute -top-4 -left-2 text-primary opacity-50">&quot;</span>
                                        Our mission is to deliver enterprise-grade {service.title.toLowerCase()} that empowers Bangalore organizations to scale efficiently and securely.
                                        <span className="text-4xl absolute -bottom-8 -right-2 text-primary opacity-50">&quot;</span>
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">Common Questions</h2>
                            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                        </ScrollReveal>
                    </div>
                    <div className="space-y-6">
                        {service.faqs.map((faq, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all">
                                    <h3 className="text-lg font-black text-slate-900 mb-3 flex items-center gap-4 uppercase italic tracking-tight">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs not-italic font-bold">Q</span>
                                        {faq.question}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed pl-12">{faq.answer}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <ServiceCTA serviceName={service.title} />
            <Footer />
        </main>
    );
};

export default ServiceDetailClient;
