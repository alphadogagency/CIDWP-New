import type { APIRoute } from 'astro';
import { site } from '../lib/site';

// Familiar discovery URL; the official integration owns the URL inventory.
export const GET: APIRoute = () => new Response(`<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${site.url}sitemap-0.xml</loc></sitemap></sitemapindex>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
