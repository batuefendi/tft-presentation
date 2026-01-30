import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            {/* Deep Space Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, #0a0a0a 0%, #000000 100%)'
                }}
            />

            {/* Animated Orbs */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-20 animate-pulse"
                style={{
                    background: 'var(--primary-glow)',
                    animationDuration: '10s'
                }}
            />
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-20 animate-pulse"
                style={{
                    background: 'var(--secondary-glow)',
                    animationDuration: '15s',
                    animationDelay: '1s'
                }}
            />

            {/* Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />
        </div>
    );
};

export default Background;
