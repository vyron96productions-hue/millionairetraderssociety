import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://millionairetraderssociety.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/courses`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/free-course`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/disclaimer`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  ]
}
