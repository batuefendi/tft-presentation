import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Menu, X } from 'lucide-react';
import { sections } from '../content/slides';

const Deck = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const contentScrollRef = useRef(null);

    // Find which section the current slide belongs to
    const getCurrentSection = useMemo(() => {
        return sections.find(section =>
            currentSlide >= section.slideRange[0] && currentSlide <= section.slideRange[1]
        );
    }, [currentSlide]);

    const scrollToTopMobile = () => {
        if (typeof window === 'undefined') return;
        if (!window.matchMedia('(max-width: 767px)').matches) return;
        if (contentScrollRef.current) {
            contentScrollRef.current.scrollTop = 0;
        }
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    };

    const goToSlide = (index) => {
        if (index >= 0 && index < slides.length) {
            scrollToTopMobile();
            setCurrentSlide(index);
        }
    };

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            scrollToTopMobile();
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            scrollToTopMobile();
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    // Mobil: sayfa değişince en üste scroll (contentScrollRef + window; AnimatePresence ~0.8s sonra yeni slayt mount oluyor)
    useEffect(() => {
        if (!window.matchMedia('(max-width: 767px)').matches) return;
        scrollToTopMobile();
        const t1 = setTimeout(scrollToTopMobile, 100);
        const t2 = setTimeout(scrollToTopMobile, 950);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [currentSlide]);

    return (
        <div className="w-full min-h-screen bg-[var(--bg-color)] text-white relative overflow-hidden flex flex-col">

            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--primary-glow)] opacity-[0.05] blur-[150px] rounded-full animate-pulse-glow"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--secondary-glow)] opacity-[0.05] blur-[150px] rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Top Bar (Mobile) */}
            <div className="fixed top-0 left-0 w-full z-50 md:hidden flex items-center justify-between px-4 py-3 bg-black/50 backdrop-blur-lg border-b border-[var(--glass-border)]">
                <div className="text-xs uppercase tracking-widest text-white/70">{getCurrentSection?.title}</div>
                <button
                    aria-label="Open Menu"
                    className="p-2 rounded-md hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu size={20} />
                </button>
            </div>

            {/* Main Content Area - mobilde scroll konteyneri (sayfa değişince en üste gidebilmek için) */}
            <div
                ref={contentScrollRef}
                className="flex-1 min-h-0 w-full overflow-y-auto overflow-x-hidden md:overflow-visible flex flex-col"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 flex flex-col items-center justify-center relative z-10 w-full min-h-0 p-4 md:p-10 pb-40 pt-20 md:pb-28 md:pt-0"
                    >
                    {/* Ana başlık - sol üst */}
                    {getCurrentSection && (
                        <div
                            className="absolute top-4 left-4 md:top-6 md:left-6 text-xs md:text-sm uppercase tracking-widest font-semibold z-20 opacity-90"
                            style={{ color: getCurrentSection.color }}
                        >
                            {getCurrentSection.title}
                        </div>
                    )}
                    {slides[currentSlide].component ? (
                        slides[currentSlide].component
                    ) : (
                        slides[currentSlide].content
                    )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Controls (Side Arrows) */}
            <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 p-4 rounded-full glass-panel hover:bg-[var(--primary-glow)]/20 disabled:opacity-0 transition-all z-40 group"
            >
                <ChevronLeft size={32} className="group-hover:scale-110 transition-transform text-[var(--text-secondary)] group-hover:text-white" />
            </button>

            <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 p-4 rounded-full glass-panel hover:bg-[var(--primary-glow)]/20 disabled:opacity-0 transition-all z-40 group"
            >
                <ChevronRight size={32} className="group-hover:scale-110 transition-transform text-[var(--text-secondary)] group-hover:text-white" />
            </button>

            {/* Timeline Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full z-50 hidden md:block">
                <div className="w-full px-6 py-4 bg-black/70 backdrop-blur-2xl border-t border-[var(--glass-border)] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">

                    {/* Timeline - Single horizontal row */}
                    <div className="flex items-center justify-between w-full">
                        {sections.map((section, sectionIndex) => {
                            const isActiveSection = getCurrentSection?.id === section.id;
                            const isPastSection = currentSlide > section.slideRange[1];

                            return (
                                <React.Fragment key={section.id}>
                                    {/* Section Header with Dot */}
                                    <div
                                        className={`group flex-1 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg
                                            ${isActiveSection ? 'bg-white/10' : 'hover:bg-white/5'}`}
                                        onClick={() => goToSlide(section.slideRange[0])}
                                    >
                                        {/* Dot */}
                                        <div className={`w-2 h-2 rounded-full transition-all shrink-0
                                            ${isActiveSection ? 'shadow-[0_0_8px]' : ''}
                                            ${isPastSection ? 'bg-white/50' : 'bg-white/30'}`}
                                            style={{
                                                backgroundColor: isActiveSection ? section.color : undefined,
                                                boxShadow: isActiveSection ? `0 0 8px ${section.color}` : undefined
                                            }}>
                                        </div>

                                        {/* Section Title */}
                                        <span
                                            className={`text-[11px] font-black uppercase tracking-wide whitespace-nowrap transition-all
                                            ${isActiveSection ? '' : isPastSection ? 'text-white/60' : 'text-white/40 group-hover:text-white/80'}`}
                                            style={isActiveSection ? { color: section.color } : undefined}
                                        >
                                            {sectionIndex + 1} {section.title}
                                        </span>
                                    </div>

                                    {/* Sub-slides - Only show for active section */}
                                    {isActiveSection && (
                                        <>
                                            {slides.slice(section.slideRange[0], section.slideRange[1] + 1).map((slide, idx) => {
                                                const absoluteIndex = section.slideRange[0] + idx;
                                                const isActiveSlide = currentSlide === absoluteIndex;
                                                const isPastSlide = currentSlide > absoluteIndex;

                                                return (
                                                    <div
                                                        key={absoluteIndex}
                                                        className="group flex items-center gap-2 cursor-pointer transition-all duration-300 px-2 py-2 shrink-0"
                                                        onClick={() => goToSlide(absoluteIndex)}
                                                    >
                                                        {/* Small Dot */}
                                                        <div className={`w-1.5 h-1.5 rounded-full transition-all shrink-0
                                                            ${isActiveSlide ? 'w-2 h-2 shadow-[0_0_6px]' : 'group-hover:w-2 group-hover:h-2'}
                                                            ${isPastSlide ? 'bg-white/40' : 'bg-white/20 group-hover:bg-white/40'}`}
                                                            style={{
                                                                backgroundColor: isActiveSlide ? section.color : undefined,
                                                                boxShadow: isActiveSlide ? `0 0 6px ${section.color}` : undefined
                                                            }}>
                                                        </div>

                                                        {/* Sub-slide Title */}
                                                        <span
                                                            className={`text-[12px] font-medium whitespace-nowrap transition-all
                                                            ${isActiveSlide ? 'font-bold' : 'text-white/40 group-hover:text-white/70'}`}
                                                            style={isActiveSlide ? { color: section.color } : undefined}
                                                        >
                                                            {slide.supertitle}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </>
                                    )}

                                    {/* Connector line to next section */}
                                    {sectionIndex < sections.length - 1 && !isActiveSection && (
                                        <div className={`w-4 h-[1px] mx-1 shrink-0 transition-all ${isPastSection ? 'bg-white/30' : 'bg-white/10'}`}></div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Mobile bottom next/prev controls */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <div className="flex items-center gap-6 bg-black/60 backdrop-blur-xl px-4 py-3 rounded-full border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="p-5 rounded-full glass-panel hover:bg-white/10 disabled:opacity-30"
                        aria-label="Önceki slayt"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className="p-5 rounded-full glass-panel hover:bg-white/10 disabled:opacity-30"
                        aria-label="Sonraki slayt"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] md:hidden bg-black/90 backdrop-blur-xl"
                    >
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                            <div className="text-sm font-bold tracking-wide">Bölümler</div>
                            <button className="p-2 rounded-md hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-4 space-y-6 overflow-y-auto max-h-[calc(100vh-56px)]">
                            {sections.map((section) => (
                                <div key={section.id} className="">
                                    <button
                                        className="w-full text-left px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between"
                                        onClick={() => { goToSlide(section.slideRange[0]); setMobileMenuOpen(false); }}
                                    >
                                        <span className="text-sm font-black uppercase tracking-wide">{section.title}</span>
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: section.color }}></span>
                                    </button>

                                    <div className="mt-2 pl-2 border-l border-white/10 space-y-2">
                                        {slides.slice(section.slideRange[0], section.slideRange[1] + 1).map((slide, idx) => {
                                            const absoluteIndex = section.slideRange[0] + idx;
                                            const active = currentSlide === absoluteIndex;
                                            return (
                                                <button
                                                    key={absoluteIndex}
                                                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${active ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-white/80'}`}
                                                    onClick={() => { goToSlide(absoluteIndex); setMobileMenuOpen(false); }}
                                                >
                                                    <span className="text-xs">{slide.supertitle}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Deck;
