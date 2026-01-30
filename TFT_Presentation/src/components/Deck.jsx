import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import Background from './Background';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Deck = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
    const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));
    const goToSlide = (index) => setCurrentSlide(index);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [slides.length]);

    return (
        <div className="w-screen h-screen relative overflow-hidden text-white flex flex-col bg-black">
            <Background />

            {/* 200px Padding Container */}
            <div
                className="w-full h-full relative z-10 flex items-center justify-center"
                style={{ padding: '200px' }}
            >
                {/* Card Container */}
                <div className="w-full h-full relative perspective-1000">
                    <Slide content={slides[currentSlide]} isActive={true} />
                </div>
            </div>

            {/* Navigation Buttons - High Contrast */}
            <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-8 top-1/2 -translate-y-1/2 p-6 rounded-full border border-[var(--primary-glow)] bg-black/50 backdrop-blur-md hover:bg-[var(--primary-glow)] hover:text-black hover:shadow-[0_0_20px_var(--primary-glow)] transition-all disabled:opacity-20 z-50 group">
                <ChevronLeft size={40} className="group-hover:scale-110 transition-transform" />
            </button>

            <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="absolute right-8 top-1/2 -translate-y-1/2 p-6 rounded-full border border-[var(--primary-glow)] bg-black/50 backdrop-blur-md hover:bg-[var(--primary-glow)] hover:text-black hover:shadow-[0_0_20px_var(--primary-glow)] transition-all disabled:opacity-20 z-50 group">
                <ChevronRight size={40} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Full Width Stepper Bar */}
            <div className="absolute bottom-0 left-0 w-full h-20 glass-panel border-b-0 border-x-0 rounded-none z-50 flex items-center px-10">
                <div className="w-full max-w-[1920px] mx-auto flex items-center justify-between">
                    {slides.map((slide, index) => {
                        const isActive = currentSlide === index;
                        const isPast = currentSlide > index;
                        const isLast = index === slides.length - 1;

                        return (
                            <React.Fragment key={index}>
                                <div
                                    className={`flex items-center gap-3 cursor-pointer group transition-all duration-300 ${isActive ? 'text-[var(--primary-glow)] opacity-100' : isPast ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-400'}`}
                                    onClick={() => goToSlide(index)}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs border ${isActive ? 'border-[var(--primary-glow)] bg-[var(--primary-glow)] text-black' : isPast ? 'border-white/60' : 'border-gray-700'}`}>
                                        {index + 1}
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-wider hidden xl:block">
                                        {slide.supertitle || `Step ${index + 1}`}
                                    </span>
                                </div>

                                {!isLast && (
                                    <div className="flex-1 h-[1px] bg-gradient-to-r from-gray-800 to-gray-800 mx-4 relative overflow-hidden">
                                        {isPast && <div className="absolute inset-0 bg-[var(--primary-glow)] w-full" />}
                                        <ChevronRight size={14} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isPast ? 'text-[var(--primary-glow)]' : 'text-gray-700'}`} />
                                    </div>
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Deck;
