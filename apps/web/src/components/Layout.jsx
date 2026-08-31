import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import BrandLoader from '@/components/BrandLoader';
import { NAV_LINKS, wa } from '@/lib/wa';
import { trackWhatsappClick } from '@/lib/analytics';

const helmetContext = {};

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="h-2.5 w-2.5 rounded-full gradient-bg shadow-[0_0_14px_rgba(236,72,153,0.8)]" />
      <span className="font-display text-xl font-bold tracking-tight">
        CartWise<span className="text-white/45">Co</span>
      </span>
    </Link>
  );
}

export default function Layout() {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const location = useLocation();

  React.useEffect(() => {
    const loaderTimer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(loaderTimer);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return;
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return (
    <div className="relative min-h-screen bg-[#0B0B14] text-white">
      <BrandLoader visible={isLoading} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#0B0B14]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[80rem] items-center justify-between px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                end={l.href === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive ? 'bg-white/[0.07] text-white' : 'text-white/70 hover:bg-white/[0.07] hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={wa('Hi CartWiseCo, I found your website and I would like to discuss an e-commerce store.')}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsappClick('header_cta')}
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
                <span className={`block h-[2px] w-5 rounded bg-white transition-all ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`block h-[2px] w-5 rounded bg-white transition-all ${open ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block h-[2px] w-5 rounded bg-white transition-all ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="fixed inset-x-0 top-[72px] z-40 h-[calc(100dvh-72px)] overflow-y-auto bg-[#0B0B14] px-6 pb-10 pt-4 lg:hidden">
            <ul className="divide-y divide-white/[0.08]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <NavLink
                    to={l.href}
                    end={l.href === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `font-display block py-5 text-2xl font-semibold ${
                        isActive ? 'text-white' : 'text-white/80'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <a
              href={wa('Hi CartWiseCo, I would like a quote for an e-commerce store.')}
              target="_blank"
              rel="noreferrer"
              onClick={() => { setOpen(false); trackWhatsappClick('mobile_nav_cta'); }}
              className="mt-8 block rounded-2xl gradient-bg py-4 text-center text-base font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        )}
      </header>

      <main className="pt-[72px]">
        <HelmetProvider context={helmetContext}>
          <Outlet />
        </HelmetProvider>
      </main>

      <footer className="border-t border-white/[0.08] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-[76rem]">
          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full gradient-bg" />
                <span className="font-display text-xl font-bold tracking-tight">
                  CartWise<span className="text-white/45">Co</span>
                </span>
              </div>
              <p className="mt-3 max-w-sm text-sm text-white/50">
                E-commerce stores built end-to-end for Indian small businesses.
              </p>
            </div>
            <div>
              <h3 className="font-mono-num text-[11px] uppercase tracking-[0.22em] text-white/40">Explore</h3>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.filter((l) => l.label !== 'Home').map((l) => (
                  <li key={l.href}>
                    <NavLink to={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono-num text-[11px] uppercase tracking-[0.22em] text-white/40">Contact</h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href={wa('Hi CartWiseCo!')} target="_blank" rel="noreferrer" onClick={() => trackWhatsappClick('footer_cta')} className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href="tel:+919408216171" className="font-mono-num inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white">
                    <span>+91 94082 16171</span>
                  </a>
                </li>
                <li className="text-sm leading-relaxed text-white/65">
                  Office No. 357, 3rd Floor, Exxoniic Mall, Jahangir Pura, Surat, Gujarat 395005
                </li>
                <li>
                  <a href="mailto:official.cartwiseco@gmail.com" className="text-sm text-white/65 transition-colors hover:text-white">
                    official.cartwiseco@gmail.com
                  </a>
                </li>
                <li className="text-sm text-white/65">Monday to Friday, 9:00 AM to 6:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.08] pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 CartWiseCo. All rights reserved.</p>
            <p>Built with care, one store at a time.</p>
          </div>
        </div>
      </footer>

      <a href={wa('Hi CartWiseCo, I have a question about building my online store.')} target="_blank" rel="noreferrer" onClick={() => trackWhatsappClick('floating_button')} aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full gradient-bg text-white shadow-[0_18px_45px_-15px_rgba(236,72,153,0.85)] transition-transform duration-200 hover:scale-105 active:scale-95">
        <MessageCircle size={24} strokeWidth={2} />
      </a>
    </div>
  );
}
