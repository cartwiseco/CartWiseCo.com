import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
    { n: 'Priya Menon', b: 'Baked by Priya (Home Bakery)', p: 'WooCommerce', s: 5, c: '#7C3AED', q: "I run everything from my kitchen in Kochi, honestly didn't think I could afford a proper website. The Woo site basically paid for itself in the first month just from cake orders." },
    { n: 'Rohit Sawant', b: 'Sawant Electricals', p: 'Custom', s: 5, c: '#EC4899', q: 'We sell electrical spares, super niche stuff. Nobody wanted to build custom search filters for our catalog until CartWiseCo. Took about 3 weeks but the search actually works how our customers search.' },
    { n: 'Ayesha Khan', b: "Ayesha's Attire", p: 'Shopify', s: 5, c: '#FB923C', q: "Switched from taking orders over Instagram DMs to an actual store. First week was slow, by week 3 we had 40+ orders without me answering a single 'is this available' message." },
    { n: 'Karthik Iyer', b: 'FitFuel Nutrition', p: 'Shopify', s: 4, c: '#22D3EE', q: 'Needed subscription orders set up for our protein powders, they figured out the app integration for that. Small hiccup with a shipping zone at launch but it was fixed same day.' },
    { n: 'Neha Bhatt', b: "Neha's Nook (Handmade Jewellery)", p: 'WooCommerce', s: 5, c: '#A78BFA', q: "Budget was tight so I went with the ₹9,999 package. Nothing fancy but it's clean and it works. My mom still can't believe I have a 'real' website now, lol." },
    { n: 'Vishal Prajapati', b: 'Prajapati Furniture', p: 'Custom', s: 5, c: '#F472B6', q: "Furniture needs big images and a lookbook style layout, a regular theme couldn't do what I wanted. Took longer than a standard build obviously, but worth every rupee." },
    { n: 'Simran Kaur', b: 'Glow Skin Co.', p: 'Shopify', s: 5, c: '#FDBA74', q: 'Payment gateway kept failing on and off with my previous developer. CartWiseCo fixed the Razorpay integration in under an hour during launch week. That alone was worth it.' },
    { n: 'Abdul Rasheed', b: 'Rasheed Spices Export', p: 'Custom', s: 5, c: '#34D399', q: 'We needed bulk order quoting alongside a regular retail cart on the same site, a pretty specific requirement. They actually understood it instead of just nodding along in the call.' },
    { n: 'Divya Reddy', b: 'Paagey Pet Supplies', p: 'WooCommerce', s: 5, c: '#7C3AED', q: 'Went from a Facebook page to a proper store in under 10 days. Team replied even at 9pm once when my checkout looked broken — turned out to be my own settings, not their mistake.' },
    { n: 'Manoj Deshmukh', b: 'Deshmukh Footwear', p: 'Shopify', s: 4, c: '#EC4899', q: "Only complaint is I wanted more product photos edited, but that's on me for sending low-quality images. Site itself loads fast and checkout is smooth." },
    { n: 'Ritika Sen', b: 'Sen & Co. Stationery', p: 'WooCommerce', s: 5, c: '#FB923C', q: 'Cute, affordable option for a small stationery brand, exactly what I needed to get started. No fluff, just a store that works properly.' },
    { n: 'Farhan Ali', b: 'TechBazaar Mobile Accessories', p: 'Custom', s: 5, c: '#22D3EE', q: 'Catalog of 800+ SKUs with filters by brand and model, this needed real backend thinking, not a template. Delivery took 20 days but they warned me upfront so there were no surprises.' },
    { n: 'Lakshmi Narayan', b: 'Lakshmi Home Decor', p: 'Shopify', s: 5, c: '#A78BFA', q: 'Was honestly scared of the technical side. They walked me through the Shiprocket setup on a call and didn\u2019t make me feel dumb for asking basic questions.' },
    { n: 'Yusuf Sheikh', b: 'Sheikh Books & More', p: 'WooCommerce', s: 5, c: '#F472B6', q: "Simple, no-nonsense, did exactly what was promised. Store was up in 8 days and it's been running for 4 months now with zero issues." },
    { n: 'Pooja Agarwal', b: 'Agarwal Organic Grocery', p: 'Custom', s: 5, c: '#34D399', q: 'Needed pincode-based delivery checks before checkout, very specific to grocery. They actually built it. Support after launch has been solid too, still get fast replies.' },
];

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('');

function Card({ r }) {
    return (
        <article className="w-[330px] shrink-0 rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]">
            <div className="flex items-center gap-3">
                <span
                    className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold text-[#0B0B14]"
                    style={{ backgroundColor: r.c }}
                >
                    {initials(r.n)}
                </span>
                <div className="min-w-0">
                    <p className="font-display truncate text-sm font-semibold">{r.n}</p>
                    <p className="truncate text-xs text-white/50">{r.b}</p>
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={13} strokeWidth={1.5} className={i < r.s ? 'fill-[#FB923C] text-[#FB923C]' : 'text-white/25'} />
                    ))}
                </div>
                <span className="font-mono-num rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/55">
                    {r.p}
                </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{r.q}</p>
        </article>
    );
}

function Row({ items, direction }) {
    const doubled = [...items, ...items];
    return (
        <div className="marquee-wrap edge-fade">
            <div className="marquee-scroller overflow-hidden">
                <div className={`marquee-track ${direction === 'left' ? 'marquee-left' : 'marquee-right'}`}>
                    {doubled.map((r, i) => (
                        <Card key={`${r.n}-${i}`} r={r} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Reviews() {
    return (
        <div className="space-y-5">
            <Row items={REVIEWS.slice(0, 8)} direction="left" />
            <Row items={REVIEWS.slice(8)} direction="right" />
        </div>
    );
}
