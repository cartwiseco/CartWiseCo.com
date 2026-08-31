import React from 'react';
import { Helmet } from 'react-helmet-async';
import Seo from '@/components/Seo';
import LeadForm from '@/components/LeadForm';
import { MapPin, Phone, Mail } from 'lucide-react';
import { WA_DISPLAY, wa } from '@/lib/wa';

export default function ContactPage() {
  return (
    <div className="px-4 pt-8 pb-20 sm:px-8 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28">
      <Helmet>
        <title>Contact | Cart Wise Co</title>
        <meta name="description" content="Contact Cart Wise Co for Shopify, WooCommerce, custom e-commerce development and monthly growth retainers in Surat, Gujarat." />
      </Helmet>
      <Seo title="Contact | Cart Wise Co" description="Contact Cart Wise Co for Shopify, WooCommerce, custom e-commerce development and monthly growth retainers in Surat, Gujarat." siteName="Cart Wise Co" url="https://cartwiseco.com/contact" />

      <div className="mx-auto grid max-w-[76rem] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="font-mono-num mb-4 text-[11px] uppercase tracking-[0.25em] text-white/45">Contact</p>
          <h1 className="text-[2.5rem] font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">E-commerce development for businesses and global brands.</h1>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/65">
            <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-[#FB923C]" />Office No. 357, 3rd Floor, Exxoniic Mall, Jahangir Pura, Surat, Gujarat 395005</p>
            <p className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-[#FB923C]" /><a href="tel:+919408216171" className="hover:text-white">{WA_DISPLAY}</a></p>
            <p className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-[#FB923C]" /><a href="mailto:official.cartwiseco@gmail.com" className="hover:text-white">official.cartwiseco@gmail.com</a></p>
            <p className="pl-8">Business hours: Monday to Friday, 9:00 AM to 6:00 PM</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-8">
          <LeadForm />
          <div className="mt-6 text-sm text-white/60">
            Prefer WhatsApp? <a href={wa('Hi CartWiseCo, I would like to discuss my e-commerce store.')} target="_blank" rel="noreferrer" className="font-semibold text-white underline">Start chat here</a>
          </div>
        </div>
      </div>
    </div>
  );
}
