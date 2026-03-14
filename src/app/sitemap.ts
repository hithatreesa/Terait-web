import { MetadataRoute } from 'next'
import { servicesData } from '@/data/servicesData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://terait.com'

  const serviceUrls = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...serviceUrls,
  ]
}
