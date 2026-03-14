"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card, Button } from "./UI";
import { HiX } from "react-icons/hi";
import ScrollReveal from "./ScrollReveal";
import { servicesData, servicesCategories } from "@/data/servicesData";

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState<any>(null);
    const closeModal = () => setSelectedCategory(null);
    return (
        <section id="services" className="py-16 bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold text-slate-900 mb-5 uppercase">Solutions For <span className="text-primary">Every Business</span></h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">We provide end-to-end IT infrastructure services helping businesses stay connected, secure and efficient.</p>
                    </ScrollReveal>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesCategories.map((category, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div onClick={() => setSelectedCategory(category)} className="cursor-pointer h-full">
                                <Card className="h-full flex flex-col items-center text-center border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition">
                                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}><category.icon size={22} /></div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 min-h-[50px]">{category.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-5">{category.description}</p>
                                </Card>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {selectedCategory && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeModal} />
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="relative bg-white rounded-xl p-6 md:p-10 max-w-5xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
                            <button onClick={closeModal} className="absolute top-6 right-6 text-slate-400 hover:text-black z-10"><HiX size={24} /></button>
                            <h2 className="text-2xl md:text-3xl font-black mb-10 text-center text-slate-900 uppercase tracking-tight">{selectedCategory.title}</h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                {selectedCategory.items.map((slug: string, index: number) => {
                                    const item = servicesData[slug];
                                    if (!item) return null;
                                    return (
                                        <Link key={index} href={`/services/${item.slug}`} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[250px]">
                                            <Card className="h-full flex flex-col items-center text-center border-slate-200 hover:border-primary transition-all duration-300 group">
                                                <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><item.icon size={22} /></div>
                                                <h4 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h4>
                                                <p className="text-sm text-slate-500 leading-relaxed mb-5">{(item.description.length > 80) ? (item.description.substring(0, 80) + "...") : (item.description)}</p>
                                            </Card>
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className="mt-12 text-center">
                                <Button onClick={closeModal} className="bg-red-600 hover:bg-black text-white px-10 py-3.5 rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg active:scale-95 transition-all">Close Window</Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
export default Services;