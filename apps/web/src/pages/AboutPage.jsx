import React from 'react';
import { Helmet } from 'react-helmet-async';
import Seo from '@/components/Seo';
import { MapPin, Phone, Mail } from 'lucide-react';
import { WA_DISPLAY, wa } from '@/lib/wa';

export default function AboutPage() {
  return (
    <div className="px-4 pt-8 pb-20 sm:px-8 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28">
      <Helmet>
        <title>About | Cart Wise Co</title>
        <meta name="description" content="Learn about Cart Wise Co, a Surat-based e-commerce agency building Shopify, WooCommerce, and custom D2C stores for brands moving away from marketplaces." />
      </Helmet>
      <Seo title="About | Cart Wise Co" description="Learn about Cart Wise Co, a Surat-based e-commerce agency building Shopify, WooCommerce, and custom D2C stores for brands moving away from marketplaces." siteName="Cart Wise Co" url="https://cartwiseco.com/about" />

      <div className="mx-auto max-w-[76rem]">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="font-mono-num mb-4 text-[11px] uppercase tracking-[0.25em] text-white/45">About</p>
          <h1 className="text-[2.5rem] font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">Built for brands ready to own their <span className="gradient-text">growth.</span></h1>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-8">
            <p className="text-lg leading-relaxed text-white/75">
              Cart Wise Co helps businesses launch and manage online stores that are built for conversion, trust, and long-term scale. We work with sellers moving off marketplaces like Amazon, Flipkart, and Myntra onto their own direct-to-consumer platforms, along with brands that need performance marketing, content strategy, and technical maintenance to keep growing.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Our focus is practical e-commerce growth: clean design, faster launches, smoother operations, and enough strategic support to help founders make better decisions without getting buried in technical work.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-8">
            <h2 className="font-display text-2xl font-semibold">Founder</h2>
            <p className="mt-4 text-xl font-semibold text-white">A. Patel</p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/40">Cart Wise Co</p>
            <div className="mt-7 space-y-4 text-sm leading-relaxed text-white/65">
              <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-[#FB923C]" />Office No. 357, 3rd Floor, Exxoniic Mall, Jahangir Pura, Surat, Gujarat 395005</p>
              <p className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-[#FB923C]" /><a href="tel:+919408216171" className="hover:text-white">{WA_DISPLAY}</a></p>
              <p className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-[#FB923C]" /><a href="mailto:official.cartwiseco@gmail.com" className="hover:text-white">official.cartwiseco@gmail.com</a></p>
              <p className="pl-8">Business hours: Monday to Friday, 9:00 AM to 6:00 PM</p>
              <a href={wa('Hi CartWiseCo, I would like to know more about your work and team.')} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full gradient-bg px-5 py-3 text-sm font-semibold text-white">Talk to us on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
