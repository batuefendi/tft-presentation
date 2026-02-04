import React from 'react';
import { motion } from 'framer-motion';

const ScrollyTell = ({ sections }) => {
    return (
        <div className="relative w-full max-w-6xl mx-auto py-10 px-4">
            {sections.map((section, index) => (
                <div key={index} className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 mb-32 last:mb-0">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-1"
                    >
                        <div className="relative w-full max-w-md aspect-square glass-panel flex items-center justify-center border border-[var(--primary-glow)]/20 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-glow)]/10 to-transparent"></div>
                            {/* Content */}
                            <div className="relative z-10 p-12">
                                {section.visual}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left order-1 md:order-2"
                    >
                        <div>
                            <span className="text-[var(--primary-glow)] font-mono text-xs tracking-widest uppercase mb-8 block">
                                {section.subtitle}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                {section.title}
                            </h2>
                            <div className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto md:mx-0">
                                {section.content}
                            </div>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default ScrollyTell;
