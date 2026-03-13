"use client";

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const reasons = [
    { title: 'Certified IT Engineers', description: 'Our team consists of highly skilled and certified professionals.' },
    { title: 'Fast Installation', description: 'We prioritize quick and efficient setup to minimize downtime.' },
    { title: 'Affordable Solutions', description: 'Providing high-quality IT services at competitive prices.' },
    { title: 'Reliable After-Support', description: '24/7 support to ensure your business operations never stop.' },
    { title: 'Complete IT Provider', description: 'One-stop shop for all your IT infrastructure needs.' },
];

const WhyChooseUs = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-center text-slate-900 mb-6 uppercase">
                            Why Businesses <span className="text-[#E63946]">Choose Terait Technologies?</span>
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                            We combine technical expertise with a commitment to reliability, ensuring your IT infrastructure is built for growth and security.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {reasons.map((reason, index) => (
                        <ScrollReveal 
                            key={index} 
                            delay={index * 0.1}
                            className="h-full w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
                        >
                            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition duration-300 ease-in-out group h-full">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary transition duration-300 ease-in-out shadow-sm">
                                    <FaCheckCircle className="text-primary group-hover:text-white text-2xl transition duration-300 ease-in-out" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-widest text-xs italic">{reason.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{reason.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
