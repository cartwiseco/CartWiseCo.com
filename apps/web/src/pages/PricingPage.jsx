import React, { useEffect, useRef, useState } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Seo from '@/components/Seo';
import Receipt, { Dashed } from '@/components/site/Receipt';
import LeadModal from '@/components/LeadModal';
import { gtag } from '@/lib/analytics';
import { wa } from '@/lib/wa';

const PLANS = [{
  name: 'WooCommerce',
  price: '₹35,999',
  desc: 'Self-hosted flexibility on WordPress. Great for brands who want full ownership without a monthly platform fee.',
  items: ['Up to 50 products listed', 'Mobile-responsive theme', 'Cart & checkout setup', '1 payment gateway integration', 'Basic on-page SEO setup', '14 days post-launch support']
}, {
  name: 'Shopify',
  price: '₹53,999',
  featured: true,
  desc: 'Speed and scale without touching code. Best for brands who want to move fast and grow without server headaches.',
  items: ['Up to 100 products listed', 'Premium theme customization', 'Cart & checkout setup', 'Payment gateway + shipping integration', 'Review & upsell app setup', '14 days post-launch support']
}, {
  name: 'Custom',
  price: '₹65,999',
  desc: 'A fully custom build for brands with a specific vision, unusual catalog, or workflow no template can hold.',
  items: ['Fully custom design, no templates', 'Unlimited product architecture', 'Custom checkout flow', 'Multi payment gateway + shipping', 'Admin dashboard training', '30 days post-launch support']
}];

const GROWTH_PLANS = [
  {
    name: 'SEO, AEO, GEO & Website Management',
    price: '₹17,999',
    desc: 'Ongoing search, answer-engine and generative-engine optimization plus full website management — billed monthly.',
    items: [
      'Monthly SEO optimization & reporting',
      'AEO structured content updates',
      'GEO visibility tracking across AI platforms',
      'Website updates, backups & maintenance',
      'Monthly performance report & review call'
    ]
  },
  {
    name: 'Ads & Website Management',
    price: '₹17,999',
    desc: 'Google & Meta Ads campaigns managed end-to-end plus full website management — billed monthly.',
    items: [
      'Google & Meta Ads campaign management',
      'Audience targeting & creative testing',
      'Conversion tracking & optimization',
      'Website updates, backups & maintenance',
      'Monthly performance report & review call'
    ]
  },
  {
    name: 'All In',
    price: '₹35,999',
    desc: 'Everything in one plan — SEO, AEO, GEO, Ads and full website management. The complete growth engine, billed monthly.',
    items: [
      'Monthly SEO optimization & reporting',
      'AEO structured content updates',
      'GEO visibility tracking across AI platforms',
      'Google & Meta Ads campaign management',
      'Website updates, backups & maintenance',
      'Monthly performance report & review call'
    ],
    featured: true
  }
];

export default function PricingPage() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const pricingRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const planName = entry.target.dataset.plan;
          gtag('event', 'pricing_card_view', { tier: planName });
        }
      });
    }, { threshold: 0.5 });

    pricingRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const openLeadModal = (label) => {
    setSelectedPlan(label);
    setOpenModal(true);
    gtag('event', 'cta_click', { label });
  };

  return (
    <div className="px-4 pt-8 pb-20 sm:px-8 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28">
      <Helmet>
        <title>Pricing | Cart Wise Co</title>
        <meta name="description" content="Transparent pricing for Shopify, WooCommerce, custom e-commerce builds and monthly growth retainers from Cart Wise Co." />
      </Helmet>
      <Seo title="Pricing | Cart Wise Co" description="Transparent pricing for Shopify, WooCommerce, custom e-commerce builds and monthly growth retainers from Cart Wise Co." siteName="Cart Wise Co" url="https://cartwiseco.com/pricing" />

      <LeadModal open={openModal} title={selectedPlan ? `Get started: ${selectedPlan}` : 'Tell us about your project'} onClose={() => setOpenModal(false)} />

      <div className="mx-auto max-w-[76rem]">
        <div className="mb-10 text-center sm:mb-14">
          <p className="font-mono-num mb-4 text-[11px] uppercase tracking-[0.25em] text-white/45">Pricing</p>
          <h1 className="mx-auto max-w-[15ch] text-[2.5rem] font-bold leading-[1.04] tracking-[-0.04em] sm:max-w-none sm:text-5xl lg:text-[3.5rem]">Pick your platform. <span className="gradient-text">Prices are honest.</span></h1>
        </div>

        <div className="grid gap-9 lg:grid-cols-3 mt-100px">
          {PLANS.map((p, i) => (
            <div key={p.name} data-plan={p.name} ref={(node) => { pricingRefs.current[i] = node; }} className={i === 1 ? 'lg:-mt-4 lg:scale-[1.035]' : ''}>
              <Receipt featured={p.featured}>
                {p.featured && <span className="font-mono-num absolute -top-3 right-6 rounded-full gradient-bg px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Most Chosen</span>}
                <p className="font-mono-num text-[11px] uppercase tracking-[0.25em] text-[#14121c]/50">Order summary</p>
                <h3 className="font-display mt-3 text-2xl font-bold">{p.name}</h3>
                <p className="font-mono-num mt-4 text-3xl font-bold">
                  {p.price}
                  <span className="ml-2 text-xs font-medium text-[#14121c]/50">starts at</span>
                </p>
                <Dashed className="my-5" />
                <p className="text-sm leading-relaxed text-[#14121c]/70">{p.desc}</p>
                <Dashed className="my-5" />
                <ul className="space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-[#14121c]/80">
                      <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[#7C3AED]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <Dashed className="my-6" />
                <button type="button" onClick={() => openLeadModal(`${p.name} plan`)} className="block w-full rounded-full gradient-bg py-3.5 text-center text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]">
                  Get Started →
                </button>
              </Receipt>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mb-10 text-center">
            <p className="font-mono-num mb-4 text-[11px] uppercase tracking-[0.25em] text-white/45">Retainers</p>
            <h2 className="mx-auto max-w-[18ch] text-[2rem] font-bold leading-[1.08] tracking-[-0.04em] sm:max-w-[22ch] sm:text-4xl lg:max-w-[26ch]">Growth plans built for <span className="gradient-text">busy sellers.</span></h2>
          </div>
          <div className="grid gap-9 lg:grid-cols-3 mt-100px">
            {GROWTH_PLANS.map((p, i) => (
              <div key={p.name} data-plan={p.name} ref={(node) => { pricingRefs.current[PLANS.length + i] = node; }} className={i === 2 ? 'lg:-mt-4 lg:scale-[1.035]' : ''}>
                <Receipt featured={p.featured}>
                  {p.featured && <span className="font-mono-num absolute -top-3 right-6 rounded-full gradient-bg px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Best Value</span>}
                  <p className="font-mono-num text-[11px] uppercase tracking-[0.25em] text-[#14121c]/50">Monthly retainer</p>
                  <h3 className="font-display mt-3 text-2xl font-bold">{p.name}</h3>
                  <p className="font-mono-num mt-4 text-3xl font-bold">
                    {p.price}
                    <span className="ml-2 text-xs font-medium text-[#14121c]/50">/mo</span>
                  </p>
                  <Dashed className="my-5" />
                  <p className="text-sm leading-relaxed text-[#14121c]/70">{p.desc}</p>
                  <Dashed className="my-5" />
                  <ul className="space-y-3">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-[#14121c]/80">
                        <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[#EC4899]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono-num mt-5 text-xs text-[#14121c]/55">* Ad spend budget is separate — paid directly to Google/Meta by you, not to us.</p>
                  <Dashed className="my-6" />
                  <button type="button" onClick={() => openLeadModal(`${p.name} retainer`)} className="block w-full rounded-full gradient-bg py-3.5 text-center text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]">
                    Talk About Growth →
                  </button>
                </Receipt>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] gradient-bg px-7 py-16 text-center sm:px-14 sm:py-20">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">Let&apos;s put your store together.</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            Tell us what you&apos;re selling and which package fits — we&apos;ll reply on WhatsApp, usually within the hour.
          </p>
          <a href={wa("Hi CartWiseCo, let's put my store together. Here is what I sell:")} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0B0B14] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] sm:text-base">
            <MessageCircle size={18} strokeWidth={2} />
            Start on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
