import React from 'react';
import { Helmet } from 'react-helmet-async';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/lib/blog';

export default function BlogPage() {
  return (
    <div className="px-4 pt-8 pb-20 sm:px-8 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28">
      <Helmet>
        <title>Blog | Cart Wise Co</title>
        <meta name="description" content="Insights for marketplace sellers building direct-to-consumer brands and ecommerce growth strategies." />
      </Helmet>
      <Seo title="Blog | Cart Wise Co" description="Insights for marketplace sellers building direct-to-consumer brands and ecommerce growth strategies." siteName="Cart Wise Co" url="https://cartwiseco.com/blog" />

      <div className="mx-auto max-w-[76rem]">
        <div className="mb-10 text-center sm:mb-14">
          <p className="font-mono-num mb-4 text-[11px] uppercase tracking-[0.25em] text-white/45">Blog</p>
          <h1 className="text-[2.5rem] font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">Strategy notes for brands moving to their own <span className="gradient-text">D2C store.</span></h1>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="rounded-[1.75rem] border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.05]">
              <p className="font-mono-num text-[11px] uppercase tracking-[0.22em] text-white/45">{post.category || 'Ecommerce Strategy'}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
