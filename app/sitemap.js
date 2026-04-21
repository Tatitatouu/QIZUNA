import { getAllSlugs } from '@/lib/blog'

export const dynamic = 'force-static'

export default function sitemap() {
  const blogSlugs = getAllSlugs()

  const staticPages = [
    {
      url: 'https://qizuna.fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://qizuna.fr/developpement-logiciel-sur-mesure',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://qizuna.fr/developpement-application-mobile',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://qizuna.fr/audit-technique',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://qizuna.fr/agence-developpement-web',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://qizuna.fr/logiciel-sur-mesure',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://qizuna.fr/agence-ia',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://qizuna.fr/agence-saas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://qizuna.fr/agence-developpement-web-mulhouse',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://qizuna.fr/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogPages = blogSlugs.map((slug) => ({
    url: `https://qizuna.fr/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
