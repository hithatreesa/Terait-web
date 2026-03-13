"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

/**
 * WhatsAppButton component
 * A floating button that opens a WhatsApp chat with a pre-filled message.
 */
const WhatsAppButton = () => {
    const phoneNumber = "+919964546464";
    const message = "Hello Terait Technologies, I would like to enquire about your IT services.";
    
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[\s+]/g, '')}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] active:scale-95 group"
            aria-label="Enquire on WhatsApp"
        >
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                WhatsApp Enquiry
            </span>
            
            <FaWhatsapp size={32} />
        </a>
    );
};

export default WhatsAppButton;
