"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    const phoneNumber = "919964546464";

    const trackEvent = (eventName: string, params = {}) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", eventName, params);
        }
    };

    const redirectToWhatsApp = () => {
        const message = "Hi Terait, I'd like to inquire about your IT services.";
        trackEvent("whatsapp_click", { message_preview: message.substring(0, 30) });
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            {/* Floating Toggle Button */}
            <button
                type="button"
                onClick={redirectToWhatsApp}
                className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative"
                aria-label="Contact us on WhatsApp"
            >
                <FaWhatsapp size={32} />
                <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-800">
                    Chat with us
                </span>
            </button>
        </div>
    );
};

export default WhatsAppButton;