"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { DetailedFeature, ProcessStep } from "@/data/servicesData";
import SubserviceContent from "./SubserviceContent";

interface SubserviceModalProps {
    isOpen: boolean;
    onClose: () => void;
    subservice: DetailedFeature | null;
    processFlow?: ProcessStep[];
}

const SubserviceModal: React.FC<SubserviceModalProps> = ({
    isOpen,
    onClose,
    subservice,
    processFlow = []
}) => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

    if (!subservice || isMobile) return null;

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl"
                    >
                            {/* Unified Scrollable Content Area */}
                            <div className="flex-1 overflow-y-auto no-scrollbar relative">
                                <SubserviceContent 
                                    subservice={subservice}
                                    processFlow={processFlow}
                                    onBack={onClose}
                                    showBack={false}
                                />
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800/80 text-white hover:bg-primary transition-all backdrop-blur-md shadow-2xl group border border-white/10 z-[110]"
                                >
                                    <HiX size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>
                            </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SubserviceModal;
