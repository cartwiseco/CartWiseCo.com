import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Seo from '@/components/Seo';
import { blogBySlug } from '@/lib/blog';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogBySlug[slug] || {
    title: 'Blog Post',
    description: 'Insights for brands preparing to grow online.',
    content: '### Content coming soon',
  };

  return (
    <div className="px-4 pt-8 pb-20 sm:px-8 sm:pt-10 sm:pb-24 lg:pt-12 lg:pb-28">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Helmet>
      <Seo title={post.title} description={post.description} siteName="Cart Wise Co" url={`https://cartwiseco.com/blog/${slug}`} />

      <div className="mx-auto max-w-3xl">
        <Link to="/blog" className="text-sm text-white/60 hover:text-white">← Back to blog</Link>
        <p className="font-mono-num mt-6 text-[11px] uppercase tracking-[0.22em] text-white/45">{post.category || 'Article'}</p>
        <h1 className="mt-4 text-[2.5rem] font-bold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">{post.title}</h1>
        <p className="mt-5 text-base leading-relaxed text-white/65">{post.description}</p>

        <article className="mt-12 space-y-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-8 text-base leading-relaxed text-white/75">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        <div className="mt-12 rounded-[2rem] gradient-bg p-8 text-center">
          <h2 className="text-3xl font-bold text-white">Need a clearer route to your own store?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80">We help marketplace sellers move onto a direct-to-consumer platform that keeps more margin and builds long-term brand value.</p>
          <a href="https://wa.me/919408216171?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20moving%20my%20business%20to%20my%20own%20store." target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0B0B14]">Talk to Cart Wise Co</a>
        </div>
      </div>
    </div>
  );
}
