import React from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { blogPosts } from './lib/blog';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'blog', element: <BlogPage /> },
      {
        path: 'blog/:slug',
        element: <BlogPostPage />,
        getStaticPaths: () => blogPosts.map((post) => post.slug),
      },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
];

export default function App() {
  return null;
}
