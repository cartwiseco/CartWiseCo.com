import React from 'react';

function Notches({ position }) {
    return (
        <div
            className={`pointer-events-none absolute inset-x-0 flex justify-between px-1 ${
                position === 'top' ? '-top-[9px]' : '-bottom-[9px]'
            }`}
            aria-hidden="true"
        >
            {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} className="h-[18px] w-[18px] rounded-full bg-[#0B0B14]" />
            ))}
        </div>
    );
}

function Barcode() {
    const widths = [2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3];
    return (
        <div className="flex h-9 items-end gap-[2px] overflow-hidden" aria-hidden="true">
            {widths.map((w, i) => (
                <span key={i} style={{ width: `${w}px` }} className="h-full bg-[#14121c]" />
            ))}
        </div>
    );
}

export default function Receipt({ featured = false, className = '', children }) {
    return (
        <div className={`relative ${featured ? 'lg:-mt-4 lg:scale-[1.035]' : ''} ${className}`}>
            <div
                className={`group relative rounded-[1.75rem] bg-[#FDFBF5] px-7 pb-8 pt-9 text-[#14121c] transition-all duration-300 hover:-translate-y-1.5 ${
                    featured
                        ? 'shadow-[0_0_0_2px_rgba(236,72,153,0.55),0_30px_70px_-30px_rgba(236,72,153,0.55)]'
                        : 'shadow-[0_24px_60px_-35px_rgba(0,0,0,0.9)] hover:shadow-[0_30px_70px_-30px_rgba(124,58,237,0.5)]'
                }`}
            >
                <Notches position="top" />
                <Notches position="bottom" />
                {children}
                <div className="mt-7 flex items-end justify-between gap-4">
                    <Barcode />
                    <span className="font-mono-num text-[10px] uppercase tracking-[0.2em] text-[#14121c]/50">
                        CartWiseCo
                    </span>
                </div>
            </div>
        </div>
    );
}

export function Dashed({ className = '' }) {
    return <div className={`border-t border-dashed border-[#14121c]/25 ${className}`} />;
}
