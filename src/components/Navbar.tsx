"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Careers", href: "/#careers" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`fixed z-50 transition-all duration-500 w-full ${scrolled ? "top-2 md:top-3" : "top-0 md:top-4"} flex justify-center px-3 md:px-4`}>
      <nav ref={navRef} className={`transition-all duration-500 flex items-center justify-between ${scrolled ? "w-full md:w-auto bg-white/95 backdrop-blur-md px-6 py-3 shadow-xl rounded-2xl md:rounded-full border border-slate-100" : "w-full md:w-auto bg-white md:bg-black/80 md:backdrop-blur-xl px-6 py-3 rounded-full border md:border-white/10 border-slate-100"}`}>
        <Link href="/" className="flex items-center group shrink-0">
          <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase transition-colors duration-500 ${scrolled ? "text-slate-900" : "text-slate-900 md:text-white"}`}>
            Terait<span className="text-red-500">.</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 px-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative group ${scrolled ? "text-slate-500 hover:text-red-500" : "text-white/70 hover:text-white"}`}>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className={`hidden md:inline-flex text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 rounded-full transition-all duration-500 shadow-lg ${scrolled ? "bg-slate-900 text-white hover:bg-black hover:shadow-xl active:scale-95" : "bg-red-600 text-white hover:bg-red-700 hover:shadow-red-500/20 active:scale-95"}`}>Get Started</a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-1 flex items-center justify-center outline-none transition-colors text-slate-900" aria-label="Toggle Menu" aria-expanded={isOpen}>
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white border border-slate-100 md:hidden overflow-hidden shadow-2xl rounded-2xl z-[100]">
              <div className="p-8 space-y-6 flex flex-col items-center">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] hover:text-red-500 transition-all">{link.name}</a>
                ))}
                <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center bg-red-600 text-white font-black uppercase tracking-[0.3em] py-4 rounded-xl shadow-lg text-[10px] active:scale-95 transition-transform">Contact Us</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
export default Navbar;
