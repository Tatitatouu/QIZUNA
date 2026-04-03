export const dynamic = 'force-static'

export default function sitemap() {
  return [
    {
      url: 'https://qizuna.fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
