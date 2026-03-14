import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'glass';
    className?: string;
}

export const Button = ({ children, href, onClick, variant = 'primary', className = '' }: ButtonProps) => {
    const baseStyles = "px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center text-sm md:text-base";

    const variants = {
        primary: "bg-primary hover:bg-primary-dark text-white hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5",
        secondary: "bg-secondary text-white hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5",
        glass: "glass text-slate-900 hover:bg-white/40 hover:-translate-y-0.5",
    };

    const content = (
        <motion.div
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </motion.div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }

    return <button onClick={onClick}>{content}</button>;
};

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
    return (
        <motion.div
            whileHover={hover ? { y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" } : {}}
            className={`bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};
