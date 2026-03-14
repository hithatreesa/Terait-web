"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';

const faqs = [
    {
        question: 'What IT services does Terait Technologies provide?',
        answer: 'Terait Technologies specializes in IT networking, CCTV installation, server setup, hardware supply (laptops, printers, etc.), and UPS power backup solutions.'
    },
    {
        question: 'Where is Terait Technologies located?',
        answer: 'We are headquartered in Bangalore, Karnataka, and provide complete IT infrastructure services across the city and surrounding areas.'
    },
    {
        question: 'Do you provide after-installation support?',
        answer: 'Yes, we provide 24/7 reliable after-support and maintenance services to ensure your IT infrastructure operates without interruptions.'
    },
    {
        question: 'Can you help with new office IT setups?',
        answer: 'Absolutely! We offer complete end-to-end office IT setup services including networking, security cameras, server installation, and hardware procurement.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 bg-[#F4F6F8]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-center text-slate-900 mb-6 uppercase">
                        Frequently Asked <span className="text-[#ef4444]">Questions</span>
                    </h2>
                    <p className="text-slate-500 font-medium">
                        Find answers to common questions about our IT services and support.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-primary/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-colors duration-300 shadow-sm hover:shadow-md">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-8 py-6 flex justify-between items-center bg-accent/30 hover:bg-accent transition-colors"
                            >
                                <span className="font-bold text-slate-900 text-base italic tracking-tight uppercase tracking-wider">{faq.question}</span>
                                {openIndex === index ? <HiMinus className="text-primary shrink-0" /> : <HiPlus className="text-primary shrink-0" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-8 pt-2 text-slate-600 text-sm leading-relaxed font-medium">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default FAQ;
