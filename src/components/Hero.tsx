"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden text-white">

      {/* Background Image */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero_bg.png"
            alt="Terait Technologies Infrastructure"
            fill
            priority
            className="object-cover object-center brightness-90"
          />
        </div>
      </motion.div>

      {/* Soft dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Glow effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">

        <div className="max-w-4xl mx-auto space-y-10">

          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-white/30"></div>
            <span className="text-white/80 font-bold text-xs uppercase tracking-[0.3em]">
              Next-Gen IT Infrastructure
            </span>
            <div className="h-[1px] w-12 bg-white/30"></div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Secure. Smart. <br />
            <span className="text-red-500 italic">Scalable.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Enterprise networking, surveillance, and managed cloud solutions
            delivered by industry veterans.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;
