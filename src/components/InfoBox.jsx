import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InfoBox = ({ children, content, inline = false }) => {
    // Inline static variant (no toggle)
    if (inline) {
        return (
            <div className="flex flex-col items-center text-center gap-2">
                <span className="px-1 rounded-md text-[var(--info-accent)]">{children}</span>
                <span className="text-sm text-[var(--text-secondary)] whitespace-pre-line leading-relaxed">{content}</span>
            </div>
        );
    }

    const [open, setOpen] = React.useState(false);

    const toggle = () => setOpen(v => !v);
    const onKey = e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
        }
    };

    return (
        <div className="inline-block">
            <button
                type="button"
                className={`group inline-flex items-center gap-[2px] border-b border-dashed transition-colors ${open ? 'border-[var(--info-accent)]' : 'border-[var(--text-secondary)]'} cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--info-accent)]/60 rounded-md`}
                onClick={toggle}
                onKeyDown={onKey}
                role="button"
                aria-expanded={open}
            >
                <span className={`pl-1 pr-0 rounded-md transition-colors ${open ? 'bg-[var(--info-accent)]/30 text-white' : 'text-[var(--info-accent)] hover:bg-[var(--info-accent)]/20 hover:text-white'}`}>{children}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180 text-[var(--info-accent)]' : 'rotate-0 text-[var(--text-secondary)]'}`} />
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, y: -6 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        className={`mt-3 ${inline ? 'max-w-[min(44rem,92vw)]' : 'w-full'} p-4 rounded-2xl bg-black/85 border border-[var(--info-accent)]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] text-sm text-[var(--text-secondary)]`}
                    >
                        <p className="whitespace-pre-line leading-relaxed">{content}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InfoBox;
