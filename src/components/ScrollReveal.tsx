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
  duration = 0.8,
  delay = 0,
  distance = 50,
  className = "",
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const getVariants = (): Variants => {
    const initialPos = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
      none: { x: 0, y: 0 },
    };

    return {
      hidden: {
        opacity: 0,
        ...initialPos[direction],
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth reveal
        },
      },
    };
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
