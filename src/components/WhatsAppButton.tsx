"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

type Message = {
    sender: "user" | "bot";
    text: string;
};

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [stage, setStage] = useState<"capture" | "chat">("capture");
    const [userDetails, setUserDetails] = useState({ name: "", phone: "" });
    const chatEndRef = useRef<HTMLDivElement | null>(null);
    const phoneNumber = "919964546464";

    // Load state from localStorage on mount
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const savedChat = localStorage.getItem("chat");
        const savedDetails = localStorage.getItem("user_details");

        if (savedDetails) {
            try {
                const data: unknown = JSON.parse(savedDetails);
                if (data && typeof data === 'object' && 'name' in data && 'phone' in data) {
                    // eslint-disable-next-line react-hooks/set-state-in-effect
                    setUserDetails(data as { name: string; phone: string });
                    // eslint-disable-next-line react-hooks/set-state-in-effect
                    setStage("chat");
                }
            } catch (error) {
                console.error("Error parsing user details:", error);
            }
        }

        if (savedChat) {
            try {
                const data: unknown = JSON.parse(savedChat);
                if (Array.isArray(data)) {
                    // eslint-disable-next-line react-hooks/set-state-in-effect
                    setMessages(data as Message[]);
                }
            } catch (error) {
                console.error("Error parsing chat history:", error);
            }
        } else {
            setMessages([
                { 
                    sender: "bot", 
                    text: "Hi 👋 Welcome to Terait! I'm your IT Consultant. How can I help you with your technology needs today?" 
                }
            ]);
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem("chat", JSON.stringify(messages));
        }
    }, [messages]);

    // Auto-scroll to bottom
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen, isTyping]);

    const trackEvent = (eventName: string, params = {}) => {
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", eventName, params);
        }
    };

    const redirectToWhatsApp = (message: string) => {
        trackEvent("whatsapp_click", { message_preview: message.substring(0, 30) });
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const saveLead = async (details: typeof userDetails, firstMessage: string) => {
        try {
            await addDoc(collection(db, "leads"), {
                ...details,
                firstMessage,
                timestamp: serverTimestamp(),
                source: "website_chat"
            });
        } catch (error) {
            console.error("Error saving lead:", error);
        }
    };

    const handleStartChat = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userDetails.name || !userDetails.phone) return;

        localStorage.setItem("user_details", JSON.stringify(userDetails));
        setStage("chat");
        trackEvent("chat_start", { user_name: userDetails.name });
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsgText = input.trim();
        const lowerInput = userMsgText.toLowerCase();
        const userMsg: Message = { sender: "user", text: userMsgText };
        
        // Check for WhatsApp confirmation
        const lastBotMessage = messages[messages.length - 1];
        const isConfirmingWhatsApp = lastBotMessage?.sender === "bot" && 
              lastBotMessage.text.includes("move there? 📲") &&
              (lowerInput.includes("yes") || lowerInput.includes("ok") || lowerInput.includes("sure") || lowerInput.includes("yeah"));

        if (isConfirmingWhatsApp) {
            setMessages((prev) => [...prev, userMsg]);
            setInput("");
            setIsTyping(true);
            setTimeout(() => {
                const botConfirm = { sender: "bot", text: "Excellent choice! 🚀 Redirecting you to our representative now..." };
                setMessages((prev) => [...prev, botConfirm as Message]);
                setIsTyping(false);
                setTimeout(() => {
                    redirectToWhatsApp(`Hi Terait, I'd like to continue our conversation here. My name is ${userDetails.name}.`);
                }, 1500);
            }, 1000);
            return;
        }

        // If this is the first message from a new lead, save it
        if (messages.length <= 1) {
            saveLead(userDetails, userMsgText);
        }

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Bot Logic
        setTimeout(() => {
            let botReply = "That sounds interesting! I can certainly help you with that. To give you the best advice, could you tell me if this is for an office or home setup?";

            // Identity & General
            if (lowerInput.includes("who are you") || lowerInput.includes("what do you do")) {
                botReply = "I'm the AI Assistant for Terait Technologies. We specialize in end-to-end IT infrastructure, networking, and security solutions. Are you looking for a new setup or maintenance for an existing one?";
            }
            // Pricing Handling
            else if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("how much")) {
                botReply = "Basic setups (like CCTV or small networks) usually start from ₹8,000–₹15,000, but it really depends on the number of devices and site requirements. I can get you an exact quote—would you like me to arrange a quick consultation?";
            }
            // Urgency Handling
            else if (lowerInput.includes("urgent") || lowerInput.includes("emergency") || lowerInput.includes("broken") || lowerInput.includes("down")) {
                botReply = "I understand this is urgent! 🚨 I'll prioritize your request. Our technicians can provide immediate support. Should I have someone call you right away on the number you provided?";
            }
            // CCTV
            else if (lowerInput.includes("cctv") || lowerInput.includes("camera") || lowerInput.includes("surveillance")) {
                botReply = "Sure 👍 How many cameras are you planning and what's the office or site size? We also offer AI-driven remote monitoring so you can check everything from your mobile.";
            }
            // IT Infrastructure / Office Setup
            else if (lowerInput.includes("office") || lowerInput.includes("setup") || lowerInput.includes("infrastructure")) {
                botReply = "We specialize in complete office IT setups, from cabling to server installation. How many users or devices will your office have? Also, would you be interested in an AMC (Annual Maintenance Contract) for peace of mind?";
            }
            // Networking
            else if (lowerInput.includes("network") || lowerInput.includes("wifi") || lowerInput.includes("router") || lowerInput.includes("lan")) {
                botReply = "A secure and fast network is backbone of any business. We handle everything from structured cabling to enterprise WiFi. What's your location and the approximate area we need to cover?";
            }
            // Cloud Solutions
            else if (lowerInput.includes("cloud") || lowerInput.includes("aws") || lowerInput.includes("azure") || lowerInput.includes("migration")) {
                botReply = "We provide expert AWS/Azure support and seamless data migration. Are you looking to move existing servers to the cloud, or starting a new cloud-native project?";
            }
            // AMC
            else if (lowerInput.includes("amc") || lowerInput.includes("maintenance") || lowerInput.includes("support")) {
                botReply = "Our AMC packages ensure your business IT stays up and running 24/7 with preventive maintenance. How many systems do you need covered? I can have our team share our standard packages with you.";
            }
            // Hardware
            else if (lowerInput.includes("laptop") || lowerInput.includes("desktop") || lowerInput.includes("printer") || lowerInput.includes("server")) {
                botReply = "We supply premium hardware including laptops, servers, and UPS systems. Which brands do you prefer, and are you looking for a bulk purchase or individual units?";
            }
            
            // Lead Conversion Push (if user provides some details or after a few messages)
            const isLeadReady = lowerInput.includes("yes") || lowerInput.includes("ok") || lowerInput.includes("sure") || lowerInput.includes("call me");
            if (isLeadReady) {
                botReply = `Great! I'll have our specialist call you shortly at ${userDetails.phone}. In the meantime, would you like to discuss more details or see some of our recent projects?`;
            }

            const botMsg: Message = { sender: "bot", text: botReply };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);

            // Suggest WhatsApp redirect for deep dive
            const shouldRedirect = messages.length >= 6 || lowerInput.includes("quote") || lowerInput.includes("whatsapp");
            if (shouldRedirect) {
                setTimeout(() => {
                    const followUpMsg: Message = { sender: "bot", text: "I can also share our detailed portfolio and pricing on WhatsApp. Shall we move there? 📲" };
                    setMessages((prev) => [...prev, followUpMsg]);
                }, 2000);
            }
        }, 1500); // 1.5s typing simulation
    };

    const handleOpen = () => {
        setIsOpen(true);
        trackEvent("chat_open");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            {/* Floating Toggle Button */}
            {!isOpen && (
                <button
                    type="button"
                    onClick={handleOpen}
                    className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative"
                >
                    <FaWhatsapp size={32} />
                    <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-800">
                        Chat with us
                    </span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="w-80 md:w-96 h-[500px] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-slate-100 animate-in fade-in slide-in-from-bottom-10 duration-500">
                    {/* Header */}
                    <div className="bg-[#25D366] p-5 flex items-center justify-between text-white shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm">
                                <FaWhatsapp size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold font-inter tracking-tight">Terait Support</h4>
                                <div className="flex items-center gap-1.5 leading-none mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-90 font-inter">Online</span>
                                </div>
                            </div>
                        </div>
                        <button 
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                        >
                            <HiX size={20} />
                        </button>
                    </div>

                    {stage === "capture" ? (
                        /* Lead Capture Form */
                        <div className="flex-1 p-8 flex flex-col justify-center bg-slate-50">
                            <h3 className="text-lg font-bold text-slate-900 mb-2 font-outfit">Welcome!</h3>
                            <p className="text-xs text-slate-500 mb-8 font-inter">Please share your details to start the conversation.</p>
                            <form onSubmit={handleStartChat} className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                                    <input 
                                        required
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#25D366]/20 transition-all font-inter"
                                        value={userDetails.name}
                                        onChange={(e) => setUserDetails(prev => ({ ...prev, name: e.target.value }))}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                                    <input 
                                        required
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#25D366]/20 transition-all font-inter"
                                        value={userDetails.phone}
                                        onChange={(e) => setUserDetails(prev => ({ ...prev, phone: e.target.value }))}
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/20 active:scale-[0.98] transition-all text-xs uppercase tracking-widest mt-4"
                                >
                                    Start Chatting
                                </button>
                            </form>
                        </div>
                    ) : (
                        /* Chat Body */
                        <>
                            <div className="flex-1 overflow-y-auto p-5 bg-slate-50 space-y-4 scroll-smooth hide-scrollbar">
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                                    >
                                        <div className="max-w-[85%] space-y-2">
                                            <div
                                                className={`px-4 py-3 rounded-2xl text-sm font-medium font-inter shadow-sm ${
                                                    msg.sender === "user"
                                                        ? "bg-[#25D366] text-white rounded-tr-none"
                                                        : "bg-white text-slate-700 border border-slate-200 rounded-tl-none"
                                                }`}
                                            >
                                                {msg.text}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start animate-in fade-in duration-300">
                                        <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200 flex gap-1 items-center">
                                            <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-bounce" />
                                        </div>
                                    </div>
                                )}
                                <div ref={chatEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-[#25D366]/50 transition-all outline-none text-slate-700"
                                />
                                <button
                                    type="button"
                                    onClick={handleSend}
                                    disabled={!input.trim() || isTyping}
                                    className="w-11 h-11 bg-[#25D366] text-white rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all"
                                >
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current rotate-45 transform -translate-x-0.5">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default WhatsAppButton;