"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Rajesh Kumar',
        role: 'Business Owner',
        location: 'Bangalore',
        text: 'Terait helped us set up our office network and CCTV system perfectly. Their team is professional and highly skilled.',
        rating: 5
    },
    {
        name: 'Suresh Raina',
        role: 'IT Manager',
        location: 'Bangalore',
        text: 'The server setup and networking provided by Terait exceeded our expectations. Reliable and efficient service.',
        rating: 5
    },
    {
        name: 'Meera Nair',
        role: 'Operations Head',
        location: 'Bangalore',
        text: 'Great after-support and quick installation. Terait Technologies is our go-to partner for all things IT.',
        rating: 5
    }
];

const Testimonials = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.innerWidth < 768 && scrollRef.current) {
                const nextIndex = (currentIndex + 1) % testimonials.length;
                setCurrentIndex(nextIndex);
                
                const container = scrollRef.current;
                const slide = container.children[nextIndex] as HTMLElement;
                if (slide) {
                    container.scrollTo({
                        left: slide.offsetLeft - (container.offsetWidth - slide.offsetWidth) / 2,
                        behavior: 'smooth'
                    });
                }
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section className="py-16 relative overflow-hidden bg-[#243C8F] text-white">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-center text-white mb-6 uppercase">
                            Loved By <span className="text-[#ef4444] italic tracking-tighter">Our Clients</span>
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto font-medium">
                            Real feedback from businesses in Bangalore who trust Terait Technologies for their IT infrastructure.
                        </p>
                    </motion.div>
                </div>

                <div 
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 justify-center"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[85vw] sm:min-w-[450px] md:min-w-0 snap-center h-full"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-full relative overflow-hidden group bg-blue-800 text-white shadow-sm hover:shadow-lg transition duration-300 ease-in-out rounded-lg p-6">
                                <FaQuoteRight className="absolute top-6 right-6 text-white/5 text-6xl group-hover:scale-110 transition-transform duration-500" />
                                <div className="flex text-orange-400 mb-6 font-bold">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="mr-1" />
                                    ))}
                                </div>
                                <p className="text-white/90 italic mb-8 relative z-10 leading-relaxed font-medium text-center">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <div className="flex flex-col items-center gap-4 border-t border-slate-100 pt-6 mt-auto text-center">
                                    <div className="w-12 h-12 rounded-full bg-[#243C8F] border-2 border-white flex items-center justify-center text-white font-bold text-lg shadow-sm">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white uppercase tracking-wider text-sm">{testimonial.name}</h3>
                                        <p className="text-xs text-white/70 font-semibold uppercase tracking-wide">{testimonial.role} — {testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
