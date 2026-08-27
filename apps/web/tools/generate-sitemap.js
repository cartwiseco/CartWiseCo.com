#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = (process.env.SITE_URL || 'https://cartwiseco.com').replace(/\/$/, '');
const LASTMOD = process.env.SITEMAP_LASTMOD || new Date().toISOString().slice(0, 10);
const appPath = path.join(process.cwd(), 'src', 'App.jsx');
const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');

function extractRoutes() {
	const source = fs.readFileSync(appPath, 'utf8');
	const routes = [...source.matchAll(/<Route\s+([^>]+?)\s*\/?\s*>/g)]
		.map(match => {
			const attributes = match[1];
			const indexRoute = /\bindex(?:\s|=|$)/.test(attributes);
			const pathMatch = attributes.match(/\bpath=["']([^"']+)["']/);
			return indexRoute ? '/' : pathMatch?.[1];
		})
		.filter(route => route && route.startsWith('/') && !route.includes(':') && !route.includes('*'));

	return [...new Set(routes.length ? routes : ['/'])];
}

function escapeXml(value) {
	return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

const urls = extractRoutes()
	.map(route => `  <url>\n    <loc>${escapeXml(`${SITE_URL}${route}`)}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n  </url>`)
	.join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, sitemap, 'utf8');
console.log(`Generated sitemap with ${urls ? extractRoutes().length : 0} URL(s): ${outputPath}`);
