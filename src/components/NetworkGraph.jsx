import React from 'react';
import { motion } from 'framer-motion';

const NetworkGraph = ({ nodes }) => {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
            {/* Central Hub (TFT) */}
            <motion.div
                animate={{
                    boxShadow: ["0 0 20px rgba(123, 97, 255, 0)", "0 0 50px rgba(123, 97, 255, 0.5)", "0 0 20px rgba(123, 97, 255, 0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-32 h-32 rounded-full glass-panel border border-[var(--primary-glow)] flex items-center justify-center z-20 relative"
            >
                <span className="text-3xl font-bold neon-text text-center">TFT</span>
            </motion.div>

            {/* Orbiting Nodes */}
            {nodes.map((node, index) => {
                const angle = (index / nodes.length) * 2 * Math.PI;
                const radius = 220; // Distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <React.Fragment key={index}>
                        {/* Connection Line */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            <line
                                x1="50%"
                                y1="50%"
                                x2={`calc(50% + ${x}px)`}
                                y2={`calc(50% + ${y}px)`}
                                stroke="rgba(123, 97, 255, 0.2)"
                                strokeWidth="1"
                                strokeDasharray="5,5"
                            />
                        </svg>

                        {/* Node */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="absolute w-40 p-4 glass-card rounded-xl flex flex-col items-center justify-center gap-2 z-10 text-center hover:scale-110 cursor-pointer"
                            style={{
                                transform: `translate(${x}px, ${y}px)`,
                                left: '50%',
                                top: '50%',
                                marginLeft: '-5rem', // Half of width to center
                                marginTop: '-3rem' // Half of height approx
                            }}
                        >
                            <div className="text-[var(--primary-glow)]">
                                {node.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-white">{node.title}</h4>
                                <p className="text-[10px] text-[var(--text-secondary)]">{node.desc}</p>
                            </div>
                        </motion.div>
                    </React.Fragment>
                );
            })}

            {/* Background Particles (Simple) */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[var(--primary-glow)] rounded-full opacity-20"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default NetworkGraph;
