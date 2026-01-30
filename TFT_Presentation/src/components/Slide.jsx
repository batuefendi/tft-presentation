import React from 'react';
import { motion } from 'framer-motion';

const Slide = ({ content, isActive }) => {
    if (!isActive) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)', rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)', rotateX: -10 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth ease
            className="w-full h-full relative"
        >
            <div className="w-full h-full glass-panel p-16 flex flex-col justify-center relative overflow-hidden shadow-2xl border border-[var(--glass-border)] bg-[rgba(10,10,10,0.6)] backdrop-blur-3xl">
                {/* Decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary-glow)] to-transparent opacity-50"></div>

                <div className="header mb-8">
                    <h5 className="text-[var(--primary-glow)] uppercase tracking-widest text-sm font-bold mb-2">{content.supertitle}</h5>
                    <h1 className="text-5xl font-bold mb-4 text-white">{content.title}</h1>
                    <div className="w-20 h-1 bg-[var(--accent-color)] rounded-full"></div>
                </div>

                <div className="content text-xl text-[var(--text-secondary)] leading-relaxed">
                    {content.body}
                </div>
            </div>
        </motion.div>
    );
};

export default Slide;
