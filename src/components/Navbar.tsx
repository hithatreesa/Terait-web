"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed z-50 transition-all duration-300 w-full 
      ${scrolled ? "top-0" : "top-0 md:top-4"} 
      flex justify-center`}
    >
      <nav className={`transition-all duration-500 flex items-center justify-between
        ${scrolled 
          ? "w-full bg-white px-6 py-4 shadow-md border-b border-slate-100" 
          : "w-full bg-white px-6 py-4 border-b border-slate-100 md:w-auto md:bg-black/80 md:backdrop-blur-md md:rounded-full md:px-8 md:py-3 md:border-white/10"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <span className={`text-xl md:text-2xl font-black tracking-tighter uppercase transition-colors duration-300
            ${scrolled ? "text-slate-900" : "text-slate-900 md:text-white"}`}
          >
            Terait<span className="text-red-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold transition-all duration-300 text-sm tracking-wide relative group
                ${scrolled ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-1 flex items-center justify-center outline-none transition-colors
              ${scrolled ? "text-slate-900" : "text-slate-900 md:text-white"}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 md:hidden overflow-hidden shadow-xl"
            >
              <div className="p-8 space-y-6 flex flex-col items-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold text-slate-700 uppercase tracking-widest hover:text-red-500 transition"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-slate-900 text-white font-bold uppercase tracking-widest py-3 rounded-md shadow-lg text-xs"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
