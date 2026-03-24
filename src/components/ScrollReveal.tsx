"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  delay?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  distance = 12,
  className = "",
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const getVariants = (): Variants => {
    const offsets = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
      none: {},
    };

    return {
      hidden: {
        opacity: 0,
        ...offsets[direction],
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    };
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={getVariants()}
        initial={isMobile ? false : "hidden"}
        animate={isInView ? "visible" : (isMobile ? "visible" : "hidden")}
        className={className.includes('h-full') ? 'h-full' : ''}
        style={{ willChange: 'transform, opacity' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
