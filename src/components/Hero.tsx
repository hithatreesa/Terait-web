"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center pt-20 md:pt-24 overflow-hidden text-white">

      {/* Background Image */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero_enterprise_it.jpg"
            alt="Terait Technologies Enterprise Operations Center"
            fill
            priority
            className="object-cover object-[75%_center] md:object-center brightness-75"
          />
        </div>
      </motion.div>

      {/* Soft dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Glow effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      {/* Hero Content */}
      <div className="absolute inset-0 z-20">

        {/* Bottom Left Quote */}
        <div className="absolute bottom-12 left-6 md:left-12 max-w-xl">

          {/* Quote Symbol */}
          <span className="block text-emerald-500 text-[70px] md:text-[90px] leading-none font-bold">
            “
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight -mt-2">
            Secure. Smart. <br />
            <span className="text-red-500">Scalable.</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-sm md:text-lg mt-2 max-w-md">
            Enterprise networking, surveillance, and managed cloud solutions delivered by industry veterans.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
