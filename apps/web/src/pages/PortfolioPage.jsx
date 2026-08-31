import React from 'react';
import { Helmet } from 'react-helmet-async';
import Seo from '@/components/Seo';

const CASE_STUDIES = [
  {
    client: 'Bharat Essentials',
    category: 'Home & lifestyle',
    result: 'New D2C storefront launched in under two weeks for higher-margin direct sales.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'
  },
  {
    client: 'Gujarat Threads',
    category: 'Fashion',
    result: 'Move from marketplace dependence to a branded store with better mobile conversion.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
  },
  {
    client: 'Surat Fresh Market',
    category: 'Food & retail',
    result: 'Custom storefront and checkout flow tailored to local delivery and repeat orders.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80'
  }
];

function CaseStudyCard({ client, category, result, image }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03]">
      <img
        src={image}
        alt={client}
        width={800}
        height={560}
        loading="lazy"
        decoding="async"
        className="h-56 w-full object-cover"
      />
      <div className="p-6">
        <p className="font-mono-num text-[11px] uppercase tracking-[0.22em] text-white/45">{category}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold">{client}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">{result}</p>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <div className="px-4 pt-8 pb-20 sm:px-8 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28">
      <Helmet>
        <title>Portfolio | Cart Wise Co</title>
        <meta name="description" content="Explore case study-style portfolio entries from Cart Wise Co for Shopify, WooCommerce, and custom retail stores." />
      </Helmet>
      <Seo title="Portfolio | Cart Wise Co" description="Explore case study-style portfolio entries from Cart Wise Co for Shopify, WooCommerce, and custom retail stores." siteName="Cart Wise Co" url="https://cartwiseco.com/portfolio" />

      <div className="mx-auto max-w-[76rem]">
        <div className="mb-10 text-center sm:mb-14">
          <p className="font-mono-num mb-4 text-[11px] uppercase tracking-[0.25em] text-white/45">Portfolio</p>
          <h1 className="text-[2.5rem] font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">Recent work for <span className="gradient-text">brands ready to grow.</span></h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {CASE_STUDIES.map((item) => (
            <CaseStudyCard key={item.client} {...item} />
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] gradient-bg px-7 py-12 text-center sm:px-10">
          <p className="font-mono-num text-[11px] uppercase tracking-[0.22em] text-white/70">Next move</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Need a storefront that sells without the marketplace drag?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            We help brands launch cleaner storefronts, stronger conversion funnels, and better margins on the channels they actually control.
          </p>
          <a href="/contact" className="mt-7 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0B0B14] transition-transform duration-200 hover:-translate-y-0.5">Book a strategy call</a>
        </div>
      </div>
    </div>
  );
}
