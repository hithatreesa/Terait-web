"use client";

import { motion } from 'framer-motion';
import { FaSearch, FaDrawPolygon, FaTools, FaShieldAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const steps = [
    {
        icon: FaSearch,
        title: 'Requirement Analysis',
        description: 'We start by understanding your business needs, goals, and existing infrastructure.'
    },
    {
        icon: FaDrawPolygon,
        title: 'Solution Design',
        description: 'We plan the right IT infrastructure, selecting the best hardware and network layout.'
    },
    {
        icon: FaTools,
        title: 'Installation',
        description: 'Our certified engineers handle the professional setup of all systems and equipment.'
    },
    {
        icon: FaShieldAlt,
        title: 'Maintenance',
        description: 'Continuous monitoring and reliable after-support ensure everything runs smoothly.'
    }
];

const Process = () => {
    return (
        <section className="py-16 md:py-20 relative overflow-hidden bg-[#F4F6F8]">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]"></div>
            
            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-center text-slate-900 mb-6 uppercase">
                            Our <span className="text-gradient">Professional Process</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                            How we deliver top-tier IT infrastructure and security solutions to your business.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 justify-center">
                        {steps.map((step, index) => (
                            <ScrollReveal 
                                key={index} 
                                delay={index * 0.2}
                                direction="up"
                            >
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center text-primary group-hover:border-primary transition duration-300 ease-in-out mb-6 relative">
                                        <step.icon size={24} />
                                        {/* Step Number Badge */}
                                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 italic tracking-tight uppercase tracking-wider">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
