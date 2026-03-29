import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://millionairetraderssociety.com'
  return [
    { url: base,                    lastModified: '2026-03-25', changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/courses`,       lastModified: '2026-03-25', changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/free-course`,   lastModified: '2026-03-25', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/vip-course`,    lastModified: '2026-03-25', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/workshop`,      lastModified: '2026-03-25', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/bundle`,        lastModified: '2026-03-25', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`,         lastModified: '2026-03-25', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,       lastModified: '2026-03-25', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/trading4kidz`,  lastModified: '2026-03-25', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/team`,          lastModified: '2026-03-25', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/disclaimer`,    lastModified: '2026-03-25', changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${base}/privacy`,       lastModified: '2026-03-25', changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${base}/terms`,         lastModified: '2026-03-25', changeFrequency: 'yearly',  priority: 0.4 },
  ]
}
