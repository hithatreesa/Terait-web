import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1B2C6B] py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Social Icons */}
                <div className="flex justify-center items-center mb-6">
                    <div className="flex space-x-6">

                        <a
                            href="#"
                            aria-label="Follow us on Facebook"
                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition"
                        >
                            <FaFacebookF size={16} />
                        </a>

                        <a
                            href="#"
                            aria-label="Follow us on Twitter"
                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-sky-500 hover:text-white transition"
                        >
                            <FaTwitter size={16} />
                        </a>

                        <a
                            href="#"
                            aria-label="Follow us on LinkedIn"
                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-700 hover:text-white transition"
                        >
                            <FaLinkedinIn size={16} />
                        </a>

                        <a
                            href="#"
                            aria-label="Follow us on Instagram"
                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-pink-500 hover:text-white transition"
                        >
                            <FaInstagram size={16} />
                        </a>

                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-4 flex flex-col items-center text-xs text-slate-300 text-center">

                    <p>
                        © {new Date().getFullYear()} Terait Technologies. All rights reserved.
                    </p>

                    <div className="flex space-x-4 mt-2 font-medium">
                        <a href="#" aria-label="Privacy Policy" className="hover:text-white transition-colors">
                            Privacy
                        </a>
                        <a href="#" aria-label="Terms of Service" className="hover:text-white transition-colors">
                            Terms
                        </a>
                        <a href="#" aria-label="Cookie Policy" className="hover:text-white transition-colors">
                            Cookies
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
