import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, wa } from '@/lib/wa';

function Logo({ large = false }) {
    return (
        <a href="#top" className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full gradient-bg shadow-[0_0_14px_rgba(236,72,153,0.8)]" />
            <span className={`font-display font-bold tracking-tight ${large ? 'text-2xl' : 'text-xl'}`}>
                CartWise<span className="text-white/45">Co</span>
            </span>
        </a>
    );
}

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#0B0B14]/95 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] border-b border-white/[0.06]'
                    : 'bg-[#0B0B14]/40 backdrop-blur-xl'
            }`}
        >
            <div className="mx-auto flex h-[72px] max-w-[80rem] items-center justify-between px-5 sm:px-8">
                <Logo />

                <nav className="hidden items-center gap-1 lg:flex">
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/[0.07] hover:text-white"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href={wa('Hi CartWiseCo, I found your website and I would like to discuss an e-commerce store.')}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden rounded-full gradient-bg px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-px active:scale-[0.98] sm:inline-block"
                    >
                        Chat on WhatsApp
                    </a>

                    <button
                        type="button"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen((v) => !v)}
                        className="relative h-11 w-11 rounded-full border border-white/10 lg:hidden"
                    >
                        <span className="absolute inset-0 flex flex-col items-center justify-center gap-[5px]">
                            <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="block h-[2px] w-5 rounded bg-white" />
                            <motion.span animate={open ? { opacity: 0, scaleX: 0.4 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} className="block h-[2px] w-5 rounded bg-white" />
                            <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="block h-[2px] w-5 rounded bg-white" />
                        </span>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: '-100%', opacity: 0.4 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '-100%', opacity: 0.4 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed inset-x-0 top-[72px] z-40 h-[calc(100dvh-72px)] overflow-y-auto bg-[#0B0B14] px-6 pb-10 pt-4 lg:hidden"
                    >
                        <ul className="divide-y divide-white/[0.08]">
                            {NAV_LINKS.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        onClick={() => setOpen(false)}
                                        className="font-display block py-5 text-2xl font-semibold text-white/90"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href={wa('Hi CartWiseCo, I would like a quote for an e-commerce store.')}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setOpen(false)}
                            className="mt-8 block rounded-2xl gradient-bg py-4 text-center text-base font-semibold text-white"
                        >
                            Chat on WhatsApp
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
