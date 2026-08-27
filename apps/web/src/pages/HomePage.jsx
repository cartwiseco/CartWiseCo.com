import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Globe, Server, CreditCard, Package, Search, MessageSquare, Bot, TrendingUp, Check, Plus, Minus, MessageCircle, Phone, Mail, MapPin, ShoppingCart } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import Header from '@/components/site/Header';
import Receipt, { Dashed } from '@/components/site/Receipt';
import Reviews from '@/components/site/Reviews';
import { wa, WA_DISPLAY, NAV_LINKS } from '@/lib/wa';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(GOOGLE_MAPS_API_KEY || '')}&q=${encodeURIComponent('Exxoniic Mall, Jahangir Pura, Surat, Gujarat 395005')}`;
const STATS = [{
  v: '151+',
  l: 'Stores launched'
}, {
  v: '3',
  l: 'Platforms mastered'
}, {
  v: '~12',
  l: 'Avg. days to launch'
}, {
  v: '4.9★',
  l: 'Client rating'
}];
const PLANS = [{
  name: 'WooCommerce',
  price: '₹29,999',
  desc: 'Self-hosted flexibility on WordPress. Great for brands who want full ownership without a monthly platform fee.',
  items: ['Up to 50 products listed', 'Mobile-responsive theme', 'Cart & checkout setup', '1 payment gateway integration', 'Basic on-page SEO setup', '14 days post-launch support']
}, {
  name: 'Shopify',
  price: '₹44,999',
  featured: true,
  desc: 'Speed and scale without touching code. Best for brands who want to move fast and grow without server headaches.',
  items: ['Up to 100 products listed', 'Premium theme customization', 'Cart & checkout setup', 'Payment gateway + shipping integration', 'Review & upsell app setup', '14 days post-launch support']
}, {
  name: 'Custom',
  price: '₹54,999',
  desc: 'A fully custom build for brands with a specific vision, unusual catalog, or workflow no template can hold.',
  items: ['Fully custom design, no templates', 'Unlimited product architecture', 'Custom checkout flow', 'Multi payment gateway + shipping', 'Admin dashboard training', '30 days post-launch support']
}];
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
const GROWTH_PLANS = [
  {
    name: 'SEO, AEO, GEO & Website Management',
    price: '₹14,999',
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
    price: '₹14,999',
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
    price: '₹29,999',
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
const PROCESS = [['01', 'Discovery call', 'We understand your products, target customers and must-have features over a 20–30 min call.'], ['02', 'Design & wireframe', 'A layout built around how your specific catalog and customers actually shop, shared for approval before development starts.'], ['03', 'Development & integration', 'Store is built, and your domain, hosting, payment gateway and shipping partner are all connected and tested.'], ['04', 'Testing & QA', 'Checkout, payments, mobile view and shipping calculations tested end-to-end before you see the final version.'], ['05', 'Launch & handover', 'Store goes live, you get a walkthrough of the admin panel, and post-launch support begins.']];
const FAQS = [['Do I need to buy hosting and domain separately?', "Yes. We don't sell hosting or domains — you buy and own them directly, which keeps your store fully in your control. We'll recommend providers and handle the entire setup and connection for you."], ['Which payment gateways and shipping partners do you support?', 'Razorpay, PayU, Cashfree, Instamojo and Stripe for payments; Shiprocket, Delhivery, Shyplite and iThink Logistics for shipping. If you already use a different provider, we can usually integrate that too.'], ['How long does a project actually take?', "WooCommerce: 7–10 days. Shopify: 5–7 days. Custom builds: 15–25 days depending on scope. You'll get a firm timeline after the discovery call."], ['Do I fully own the website after it\u2019s built?', "Yes, 100%. The store, its code/theme, and all accounts are yours. We don't hold your site hostage after launch."], ['What if I need more products or features after launch?', 'Totally normal. We provide a simple quote for add-ons — extra products, new integrations, redesigns — with no obligation to use us, though most clients do.'], ['What happens after the free support period ends?', "You can continue on an affordable monthly maintenance plan, or reach out only when you need changes — whichever works for you. There's no auto-renewal or lock-in."]];
function SectionHead({
  eyebrow,
  title,
  intro,
  center = true
}) {
  return <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
            {eyebrow && <p className="font-mono-num mb-4 text-[11px] uppercase tracking-[0.25em] text-white/45">{eyebrow}</p>}
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]">{title}</h2>
            {intro && <p className="mt-5 text-base leading-relaxed text-white/60">{intro}</p>}
        </div>;
}
function IconCard({
  Icon,
  t,
  d
}) {
  return <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
            <span className="mb-5 grid h-11 w-11 place-items-center rounded-2xl gradient-bg text-white">
                <Icon size={20} strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{d}</p>
        </div>;
}
function Faq() {
  const [open, setOpen] = useState(0);
  return <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/[0.08] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03]">
            {FAQS.map(([q, a], i) => {
      const isOpen = open === i;
      return <div key={q}>
                        <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.03]">
                            <span className="font-display text-base font-semibold sm:text-lg">{q}</span>
                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 text-white/70">
                                {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                            </span>
                        </button>
                        {isOpen && <motion.p initial={{
          opacity: 0,
          y: -6
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.25,
          ease: 'easeOut'
        }} className="px-6 pb-6 text-sm leading-relaxed text-white/60">
                                {a}
                            </motion.p>}
                    </div>;
    })}
        </div>;
}
export default function HomePage() {
  return <div id="top" className="relative min-h-screen bg-[#0B0B14] text-white">
            <Helmet>
                <title>E-commerce Website Development in Surat | Cart Wise Co</title>
                <meta name="description" content="Cart Wise Co builds Shopify, WooCommerce and custom e-commerce stores in Surat, Gujarat, with design, development, payments and shipping integration." />
            </Helmet>
            <Seo title="E-commerce Website Development in Surat | Cart Wise Co" description="Cart Wise Co builds Shopify, WooCommerce and custom e-commerce stores in Surat, Gujarat, with design, development, payments and shipping integration." siteName="Cart Wise Co" url="https://cartwiseco.com/" />

            <Header />

            {/* HERO */}
            <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                    <div className="blob absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full bg-[#7C3AED]/25 blur-[110px]" />
                    <div className="blob absolute right-0 top-40 h-[24rem] w-[24rem] rounded-full bg-[#EC4899]/20 blur-[120px]" style={{
          animationDelay: '-7s'
        }} />
                    <div className="blob absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-[#FB923C]/15 blur-[120px]" style={{
          animationDelay: '-14s'
        }} />
                </div>

                <div className="mx-auto w-full max-w-[72rem]">
                    <Reveal>
                        <span className="font-mono-num inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/60">
                            <span className="h-1.5 w-1.5 rounded-full gradient-bg" />
                            E-commerce Website Development
                        </span>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h1 className="mt-7 max-w-4xl text-[2.6rem] font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.5rem]">
                            E-commerce website development company in <span className="gradient-text">India</span>.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                            We build WooCommerce, Shopify and fully custom e-commerce stores end-to-end — design, development, and full integration of your domain, hosting, payment gateway and shipping partner.
                        </p>
                    </Reveal>
                    <Reveal delay={0.24}>
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <a href={wa('Hi CartWiseCo, I would like a free quote for an e-commerce store.')} target="_blank" rel="noreferrer" className="rounded-full gradient-bg px-7 py-4 text-center text-sm font-semibold text-white shadow-[0_20px_50px_-25px_rgba(236,72,153,0.9)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] sm:text-base">
                                Get a Free Quote on WhatsApp →
                            </a>
                            <a href="#pricing" className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white/85 transition-colors duration-200 hover:border-white/40 hover:bg-white/[0.05] sm:text-base">
                                See Pricing
                            </a>
                        </div>
                    </Reveal>
                    <Reveal delay={0.32}>
                        <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-white/[0.08] pt-8 sm:grid-cols-4">
                            {STATS.map(s => <div key={s.l}>
                                    <dt className="font-mono-num text-2xl font-bold text-white sm:text-3xl">{s.v}</dt>
                                    <dd className="mt-1 text-xs uppercase tracking-wider text-white/45">{s.l}</dd>
                                </div>)}
                        </dl>
                    </Reveal>
                </div>
            </section>

            {/* PRICING */}
            <section id="pricing" className="px-5 py-24 sm:px-8 sm:py-28">
                <div className="mx-auto max-w-[76rem]">
                    <Reveal>
                        <SectionHead eyebrow="Pricing" title={<>Pick your platform. <span className="gradient-text">Prices are honest.</span></>} />
                    </Reveal>
                    <div className="mt-16 grid gap-9 lg:grid-cols-3">
                        {PLANS.map((p, i) => <Reveal key={p.name} delay={i * 0.08}>
                                <Receipt featured={p.featured}>
                                    {p.featured && <span className="font-mono-num absolute -top-3 right-6 rounded-full gradient-bg px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                                            Most Chosen
                                        </span>}
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
                                        {p.items.map(it => <li key={it} className="flex gap-3 text-sm text-[#14121c]/80">
                                                <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[#7C3AED]" />
                                                <span>{it}</span>
                                            </li>)}
                                    </ul>
                                    <Dashed className="my-6" />
                                    <a href={wa(`Hi CartWiseCo, I am interested in the ${p.name} package starting at ${p.price}. Can you share a quote?`)} target="_blank" rel="noreferrer" className="block rounded-full gradient-bg py-3.5 text-center text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]">
                                        Add to Cart →
                                    </a>
                                </Receipt>
                            </Reveal>)}
                    </div>
                    <Reveal delay={0.1}>
                        <p className="mx-auto mt-14 max-w-2xl text-center text-sm text-white/50">
                            Final pricing depends on catalog size and features. Every quote is confirmed on a call before we start — no surprise invoices.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* INCLUDED */}
            <section id="included" className="border-y border-white/[0.06] bg-white/[0.015] px-5 py-24 sm:px-8 sm:py-28">
                <div className="mx-auto max-w-[76rem]">
                    <Reveal>
                        <SectionHead eyebrow="What's included" title={<>We build the engine. <span className="gradient-text">You keep the keys.</span></>} intro="Domain, hosting, payment gateway and shipping accounts stay registered in your name — we handle the full technical integration so everything works together from day one." />
                    </Reveal>
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {INCLUDED.map((c, i) => <Reveal key={c.t} delay={i * 0.06}>
                                <IconCard {...c} />
                            </Reveal>)}
                    </div>
                    <Reveal delay={0.1}>
                        <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-7 pl-9">
                            <span className="absolute inset-y-0 left-0 w-1.5 gradient-bg" />
                            <p className="text-sm leading-relaxed text-white/70">
                                You&apos;ll need active accounts for domain, hosting, payment gateway and shipping under your business name before we integrate — this keeps full ownership and data with you, not us. We&apos;ll guide you through setting each one up if you&apos;re starting from scratch.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* GUARANTEE */}
            <section id="guarantee" className="px-5 py-24 sm:px-8 sm:py-28">
                <div className="mx-auto max-w-[76rem]">
                    <Reveal>
                        <SectionHead eyebrow="Guarantee" title={<>What if I don&apos;t like <span className="gradient-text">my store?</span></>} />
                    </Reveal>
                    <Reveal delay={0.08}>
                        <div className="relative mx-auto mt-14 grid max-w-4xl items-center gap-10 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-8 sm:grid-cols-[190px_1fr] sm:p-12">
                            <span className="absolute inset-y-0 left-0 w-1.5 gradient-bg" />

                            {/* Seal */}
                            <div className="relative mx-auto h-[170px] w-[170px] shrink-0 sm:h-[190px] sm:w-[190px]">
                                <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
                                    <defs>
                                        <linearGradient id="cwGuaranteeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#7C3AED" />
                                            <stop offset="100%" stopColor="#EC4899" />
                                        </linearGradient>
                                        <path id="cwTopArc" d="M 46 100 A 54 54 0 0 0 154 100" />
                                        <path id="cwBottomArc" d="M 46 100 A 54 54 0 0 1 154 100" />
                                    </defs>

                                    <polygon fill="url(#cwGuaranteeGrad)" points="
                                        100,8 110.7,18.7 123.8,11.1 131.4,24.2 146,20.3 149.9,34.9 165.1,34.9 165.1,50.1
                                        179.7,54 175.8,68.6 188.9,76.2 181.3,89.3 192,100 181.3,110.7 188.9,123.8 175.8,131.4
                                        179.7,146 165.1,149.9 165.1,165.1 149.9,165.1 146,179.7 131.4,175.8 123.8,188.9 110.7,181.3
                                        100,192 89.3,181.3 76.2,188.9 68.6,175.8 54,179.7 50.1,165.1 34.9,165.1 34.9,149.9
                                        20.3,146 24.2,131.4 11.1,123.8 18.7,110.7 8,100 18.7,89.3 11.1,76.2 24.2,68.6
                                        20.3,54 34.9,50.1 34.9,34.9 50.1,34.9 54,20.3 68.6,24.2 76.2,11.1 89.3,18.7" />

                                    <circle cx="100" cy="100" r="70" fill="none" stroke="url(#cwGuaranteeGrad)" strokeWidth="2" />
                                    <circle cx="100" cy="100" r="62" fill="none" stroke="url(#cwGuaranteeGrad)" strokeWidth="1" opacity="0.5" />

                                    <text fontSize="10.5" fontWeight="700" letterSpacing="2" fill="#ffffff" fillOpacity="0.9">
                                        <textPath href="#cwTopArc" startOffset="50%" textAnchor="middle">SATISFACTION</textPath>
                                    </text>
                                    <text fontSize="10.5" fontWeight="700" letterSpacing="2" fill="#ffffff" fillOpacity="0.9">
                                        <textPath href="#cwBottomArc" startOffset="50%" textAnchor="middle">GUARANTEED</textPath>
                                    </text>
                                </svg>

                                <div className="absolute inset-0 grid place-items-center">
                                    <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-bg">
                                        <ShoppingCart size={22} strokeWidth={1.75} className="text-white" />
                                    </span>
                                </div>
                            </div>

                            {/* Copy */}
                            <div>
                                <p className="text-sm leading-relaxed text-white/70">
                                    This is the question every store owner asks before committing. You get a full{' '}
                                    <strong className="font-semibold text-white">design &amp; wireframe approval</strong> before we write a
                                    line of code — so there are no surprises at handover.
                                </p>
                                <p className="mt-4 text-sm leading-relaxed text-white/70">
                                    If it's still not right, we revise it at no extra cost. And if we genuinely can't get you there,
                                    you're eligible for a <strong className="font-semibold text-white"> assured refund</strong> — no
                                    drawn-out back-and-forth.
                                </p>

                                <div className="my-6 border-t border-dashed border-white/15" />

                                <p className="text-sm text-white/50">
                                    Want the specifics?{' '}
                                    
                                       
                                    <a    href={wa('Hi CartWiseCo, can you share your full refund policy?')}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                                    >
                                        Ask us on WhatsApp
                                    </a>
                                    .
                                </p>

                                <div className="mt-8">
                                    <p className="font-display text-2xl italic text-white/90">A. Patel</p>
                                    <p className="mt-1 text-sm font-semibold text-white">A. Patel</p>
                                    <p className="text-xs text-white/45">Founder, CartWiseCo</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* GROWTH */}
            <section id="growth" className="px-5 py-24 sm:px-8 sm:py-28">
                <div className="mx-auto max-w-[76rem]">
                    <Reveal>
                        <SectionHead eyebrow="Growth & management" title={<>Your store is live. Now <span className="gradient-text">let&apos;s get it found.</span></>} intro="Building the store is step one — getting the right customers to actually find it is ongoing work. We manage that too, so you're not left figuring out SEO and ads alone." />
                    </Reveal>
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {GROWTH.map((c, i) => <Reveal key={c.t} delay={i * 0.06}>
                                <IconCard {...c} />
                            </Reveal>)}
                    </div>

                    <div className="mt-16 grid gap-9 lg:grid-cols-3">
                        {GROWTH_PLANS.map((p, i) => <Reveal key={p.name} delay={i * 0.08}>
                                <Receipt featured={p.featured}>
                                    {p.featured && <span className="font-mono-num absolute -top-3 right-6 rounded-full gradient-bg px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                                            Best Value
                                        </span>}
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
                                        {p.items.map(it => <li key={it} className="flex gap-3 text-sm text-[#14121c]/80">
                                                <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[#EC4899]" />
                                                <span>{it}</span>
                                            </li>)}
                                    </ul>
                                    <p className="font-mono-num mt-5 text-xs text-[#14121c]/55">
                                        * Ad spend budget is separate — paid directly to Google/Meta by you, not to us.
                                    </p>
                                    <Dashed className="my-6" />
                                    <a href={wa(`Hi CartWiseCo, I want to know more about the ${p.name} growth plan at ${p.price}/month.`)} target="_blank" rel="noreferrer" className="block rounded-full gradient-bg py-3.5 text-center text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]">
                                        Talk About Growth →
                                    </a>
                                </Receipt>
                            </Reveal>)}
                    </div>
                    <Reveal delay={0.1}>
                        <p className="mx-auto mt-14 max-w-2xl text-center text-sm text-white/50">
                            No lock-in contracts. Cancel anytime.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* PROCESS */}
            <section id="process" className="border-y border-white/[0.06] bg-white/[0.015] px-5 py-24 sm:px-8 sm:py-28">
                <div className="mx-auto max-w-[68rem]">
                    <Reveal>
                        <SectionHead eyebrow="Process" title={<>Five steps, <span className="gradient-text">start to launch.</span></>} center={false} />
                    </Reveal>
                    <ol className="mt-14 divide-y divide-white/[0.08] border-t border-white/[0.08]">
                        {PROCESS.map(([n, t, d], i) => <Reveal key={n} delay={i * 0.05}>
                                <li className="group grid gap-3 py-8 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-[6rem_16rem_1fr] md:items-baseline md:gap-8 md:px-3">
                                    <span className="font-mono-num text-2xl font-bold gradient-text">{n}</span>
                                    <h3 className="font-display text-xl font-semibold">{t}</h3>
                                    <p className="text-sm leading-relaxed text-white/60">{d}</p>
                                </li>
                            </Reveal>)}
                    </ol>
                </div>
            </section>

            {/* REVIEWS */}
            <section id="reviews" className="overflow-hidden py-24 sm:py-28">
                <div className="px-5 sm:px-8">
                    <Reveal>
                        <SectionHead eyebrow="Reviews" title={<>What clients <span className="gradient-text">actually say</span></>} />
                    </Reveal>
                </div>
                <div className="mt-14">
                    <Reviews />
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="border-t border-white/[0.06] px-5 py-24 sm:px-8 sm:py-28">
                <div className="mx-auto max-w-[76rem]">
                    <Reveal>
                        <SectionHead eyebrow="FAQ" title={<>Before you <span className="gradient-text">ask</span></>} />
                    </Reveal>
                    <Reveal delay={0.08}>
                        <Faq />
                    </Reveal>
                </div>
            </section>

            {/* LOCAL CONTACT */}
            <section id="contact" className="border-t border-white/[0.06] px-5 py-24 sm:px-8 sm:py-28">
                <div className="mx-auto grid max-w-[76rem] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    <div>
                        <SectionHead
                            center={false}
                            eyebrow="Based in Surat"
                            title={<>E-commerce development for businesses and global brands.</>}
                            intro="Cart Wise Co works with businesses in Surat, Gujarat, and clients around the globe to design, develop and launch online stores that are ready to sell."
                        />
                        <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/65">
                            <p className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-[#FB923C]" />Office No. 357, 3rd Floor, Exxoniic Mall, Jahangir Pura, Surat, Gujarat 395005</p>
                            <p className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-[#FB923C]" /><a href="tel:+919408216171" className="hover:text-white">{WA_DISPLAY}</a></p>
                            <p className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-[#FB923C]" /><a href="mailto:official.cartwiseco@gmail.com" className="hover:text-white">official.cartwiseco@gmail.com</a></p>
                            <p className="pl-8">Business hours: Monday to Friday, 9:00 AM to 6:00 PM</p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03]">
                        {GOOGLE_MAPS_API_KEY ? <iframe
                            title="Cart Wise Co office location in Surat, Gujarat"
                            src={GOOGLE_MAPS_EMBED_URL}
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            className="h-[22rem] w-full border-0 sm:h-[26rem]"
                        /> : <div className="grid h-[22rem] place-items-center p-8 text-center sm:h-[26rem]">
                            <div>
                                <MapPin size={28} className="mx-auto mb-3 text-[#FB923C]" />
                                <p className="text-sm text-white/65">View our office location on Google Maps.</p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Exxoniic+Mall%2C+Jahangir+Pura%2C+Surat%2C+Gujarat+395005"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-3 inline-block text-sm font-semibold text-white underline underline-offset-4"
                                >
                                    Open Google Maps
                                </a>
                            </div>
                        </div>}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="px-5 pb-24 sm:px-8">
                <Reveal>
                    <div className="mx-auto max-w-[76rem] overflow-hidden rounded-[2rem] gradient-bg px-7 py-16 text-center sm:px-14 sm:py-20">
                        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                            Let&apos;s put your store together.
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                            Tell us what you&apos;re selling and which package fits — we&apos;ll reply on WhatsApp, usually within the hour.
                        </p>
                        <a href={wa("Hi CartWiseCo, let's put my store together. Here is what I sell:")} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0B0B14] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] sm:text-base">
                            <MessageCircle size={18} strokeWidth={2} />
                            Start on WhatsApp
                        </a>
                    </div>
                </Reveal>
            </section>

            {/* FOOTER */}
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
                                {NAV_LINKS.filter(l => l.label !== 'FAQ').map(l => <li key={l.href}>
                                        <a href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">{l.label}</a>
                                    </li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-mono-num text-[11px] uppercase tracking-[0.22em] text-white/40">Contact</h3>
                            <ul className="mt-4 space-y-2.5">
                                <li>
                                    <a href={wa('Hi CartWiseCo!')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white">
                                        <MessageCircle size={14} /> WhatsApp
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+919408216171" className="font-mono-num inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white">
                                        <Phone size={14} /> {WA_DISPLAY}
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

            <a href={wa('Hi CartWiseCo, I have a question about building my online store.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full gradient-bg text-white shadow-[0_18px_45px_-15px_rgba(236,72,153,0.85)] transition-transform duration-200 hover:scale-105 active:scale-95">
                <MessageCircle size={24} strokeWidth={2} />
            </a>
        </div>;
}