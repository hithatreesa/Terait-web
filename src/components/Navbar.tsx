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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={`fixed z-[110] transition-all duration-500 w-full ${scrolled ? "top-2 md:top-3" : "top-0 md:top-4"} flex justify-center px-3 md:px-4`}>
      <nav ref={navRef} className={`transition-all duration-500 flex items-center justify-between w-full max-w-5xl mx-auto ${scrolled ? "bg-white/95 backdrop-blur-xl px-6 py-1.5 shadow-xl rounded-2xl md:rounded-full border border-slate-100" : "bg-white/90 backdrop-blur-2xl px-6 py-1.5 rounded-full border border-slate-100 shadow-2xl"}`}>
        <Link href="/" className="flex items-center gap-1 group shrink-0">
          <img src="/images/logo.png" alt="Terait Technologies Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase transition-colors duration-500 text-slate-900">
            Terait<span className="text-red-500">.</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 px-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 relative group text-slate-500 hover:text-red-500`}>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/#contact" 
            onClick={() => window.gtag?.('event', 'get_started_click')}
            className={`hidden md:inline-flex text-xs font-bold uppercase tracking-[0.2em] px-8 py-2 rounded-full transition-all duration-500 shadow-lg ${scrolled ? "bg-slate-900 text-white hover:bg-black hover:shadow-xl active:scale-95" : "bg-red-600 text-white hover:bg-red-700 hover:shadow-red-500/20 active:scale-95"}`}
          >
            Get Started
          </Link>
          <button type="button" onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 flex items-center justify-center outline-none transition-colors text-slate-900`} aria-label="Toggle Menu" aria-expanded={isOpen}>
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Full screen backdrop for mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-[100] md:hidden"
              />
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                exit={{ opacity: 0, y: -20, scale: 0.95 }} 
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute top-full mt-4 left-0 right-0 bg-white/95 backdrop-blur-2xl border border-slate-200 md:hidden overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] z-[110] max-h-[80vh] overflow-y-auto"
              >
                <div className="p-10 space-y-6 flex flex-col items-center">
                  <div className="w-12 h-1.5 bg-slate-200 rounded-full mb-4" />
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className="w-full text-center py-5 text-sm font-black text-slate-500 uppercase tracking-[0.4em] hover:text-slate-900 hover:bg-slate-50 rounded-2xl transition-all font-inter border border-transparent hover:border-slate-100 active:scale-95"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-6 w-full">
                    <Link 
                      href="/#contact" 
                      onClick={() => setIsOpen(false)} 
                      className="w-full inline-flex items-center justify-center bg-red-600 text-white font-black uppercase tracking-[0.4em] py-6 rounded-2xl shadow-2xl shadow-red-500/30 text-[10px] active:scale-95 transition-all hover:bg-red-700"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
export default Navbar;
