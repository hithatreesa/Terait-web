"use client";

import { FaCheckCircle } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const reasons = [
    { title: 'Certified IT Engineers', description: 'Our team consists of highly skilled and certified professionals.' },
    { title: 'Fast Installation', description: 'We prioritize quick and efficient setup to minimize downtime.' },
    { title: 'Affordable Solutions', description: 'Providing high-quality IT services at competitive prices.' },
    { title: 'Reliable After-Support', description: 'Expert support to ensure your business operations continue smoothly.' },
    { title: 'Complete IT Provider', description: 'One-stop shop for all your IT infrastructure needs.' },
];

const WhyChooseUs = () => {
    return (
        <section id="about" className="py-16 bg-white">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-stretch">
                    {reasons.map((reason, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.1}
                            className={`h-full lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''
                                } ${index === 4 ? 'lg:col-start-4' : ''
                                }`}
                        >
                            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 ease-out group h-full relative overflow-hidden flex-1">
                                {/* Subtle Background Gradient on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 ease-out relative z-10">
                                    <FaCheckCircle className="text-primary group-hover:text-white text-3xl transition-colors duration-500" />
                                </div>
                                <h3 className="font-bold text-slate-800 mb-4 uppercase tracking-[0.2em] text-[10px] md:text-xs italic relative z-10">{reason.title}</h3>
                                <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed relative z-10">{reason.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
