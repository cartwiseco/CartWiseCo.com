import React from 'react';
import { Helmet } from 'react-helmet-async';
import Seo from '@/components/Seo';
import { Globe, Server, CreditCard, Package, Search, MessageSquare, Bot, TrendingUp } from 'lucide-react';

const INCLUDED = [{
  Icon: Globe,
  t: 'Domain',
  d: 'You own the domain. We connect it to your store, set up DNS and SSL correctly.'
}, {
  Icon: Server,
  t: 'Hosting',
  d: 'You choose or keep your hosting. We configure, optimize and deploy your store on it.'
}, {
  Icon: CreditCard,
  t: 'Payment Gateway',
  d: 'Razorpay, PayU, Cashfree, Stripe or your gateway of choice — fully integrated and tested.'
}, {
  Icon: Package,
  t: 'Shipping Partner',
  d: 'Shiprocket, Delhivery, Shyplite or your logistics partner — connected for live rates and tracking.'
}];

const GROWTH = [{
  Icon: Search,
  t: 'SEO',
  d: 'Search Engine Optimization — keyword targeting, on-page fixes and technical SEO to rank higher on Google.'
}, {
  Icon: MessageSquare,
  t: 'AEO',
  d: "Answer Engine Optimization — structured, answer-ready content so tools like Google's AI Overviews quote your store directly."
}, {
  Icon: Bot,
  t: 'GEO',
  d: 'Generative Engine Optimization — optimized so ChatGPT, Perplexity and Gemini recommend your store when customers ask.'
}, {
  Icon: TrendingUp,
  t: 'Ads Management',
  d: 'Google & Meta Ads campaigns set up, managed and optimized — the right budget in front of the right audience.'
}];

function IconCard({ Icon, t, d }) {
  return (
    <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
      <span className="mb-5 grid h-11 w-11 place-items-center rounded-2xl gradient-bg text-white">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <h3 className="font-display text-lg font-semibold">{t}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{d}</p>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="px-4 pt-8 pb-20 sm:px-8 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28">
      <Helmet>
        <title>Services | Cart Wise Co</title>
        <meta name="description" content="E-commerce store design, Shopify setup, WooCommerce builds, SEO, ads management, and growth retainers from Cart Wise Co." />
      </Helmet>
      <Seo title="Services | Cart Wise Co" description="E-commerce store design, Shopify setup, WooCommerce builds, SEO, ads management, and growth retainers from Cart Wise Co." siteName="Cart Wise Co" url="https://cartwiseco.com/services" />

      <div className="mx-auto max-w-[76rem]">
        <div className="mb-10 text-center sm:mb-14">
          <p className="font-mono-num mb-4 text-[11px] uppercase tracking-[0.25em] text-white/45">Services</p>
          <h1 className="text-[2.5rem] font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">We build the engine. <span className="gradient-text">You keep the keys.</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            From store setup and product migration to monthly growth retainers, we help brands move from marketplace dependence to owned e-commerce channels that convert.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INCLUDED.map((item) => (
            <IconCard key={item.t} {...item} />
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mb-10 text-center">
            <p className="font-mono-num mb-4 text-[11px] uppercase tracking-[0.25em] text-white/45">Growth</p>
            <h2 className="text-[2rem] font-bold leading-[1.08] tracking-[-0.04em] sm:text-4xl">Your store is live. Now <span className="gradient-text">let&apos;s get it found.</span></h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GROWTH.map((item) => (
              <IconCard key={item.t} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
