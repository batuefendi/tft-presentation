import React from 'react';

const BentoGrid = ({ items, stackVertical = false, fullWidth = false, columns = 2, accentColor }) => {
    const gridColsClass = stackVertical
        ? 'grid-cols-1'
        : columns === 4
            ? 'grid-cols-2 md:grid-cols-4'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2';
    const accent = accentColor || 'var(--primary-glow)';
    return (
        <div className={`grid gap-4 w-full h-full p-0 md:p-4 ${fullWidth ? '' : 'max-w-5xl mx-auto'} ${gridColsClass}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group ${columns === 4 ? '' : item.colSpan === 2 ? 'md:col-span-2' : ''} ${item.rowSpan === 2 ? 'md:row-span-2' : ''}`}
                    style={accentColor ? { ['--primary-glow']: accentColor } : undefined}
                >
                    {/* Background Gradient/Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--primary-glow)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="shrink-0" style={{ color: accent }}>{item.icon}</span>
                            <h3 className="text-xl font-bold text-white group-hover:text-[var(--primary-glow)] transition-colors">
                                {item.title}
                            </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">
                            {item.description}
                        </p>

                        {/* Neden? Reasons List */}
                        {item.reasons && item.reasons.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-white/10">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--primary-glow)]/70 mb-2 block">Neden?</span>
                                <ul className="space-y-1">
                                    {item.reasons.map((reason, idx) => (
                                        <li key={idx} className="text-xs text-white/60 flex items-start gap-2">
                                            <span className="text-[var(--primary-glow)] mt-0.5">•</span>
                                            {reason}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Animated Decoration */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--primary-glow)] rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
            ))}
        </div>
    );
};

export default BentoGrid;
