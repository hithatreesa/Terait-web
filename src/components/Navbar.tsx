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
    <div className="fixed w-full top-4 z-50 px-4 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 rounded-full px-8 py-3 backdrop-blur-md border flex items-center justify-between gap-12
        ${scrolled
            ? "bg-black/80 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            : "bg-black/50 border-white/10"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="text-2xl font-black tracking-tighter text-white uppercase group-hover:opacity-80 transition-opacity">
            Terait<span className="text-red-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold text-white/90 hover:text-white transition-all duration-300 text-sm tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-full transition"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-16 left-0 right-0 bg-white rounded-3xl shadow-2xl border border-slate-100 md:hidden"
            >
              <div className="p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm font-bold text-slate-700 hover:text-red-500 hover:bg-slate-50 rounded-xl transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
