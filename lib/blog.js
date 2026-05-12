import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export function getAllPosts() {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const stats = readingTime(content)

    return {
      slug: data.slug || filename.replace('.mdx', ''),
      title: data.title,
      description: data.description,
      date: data.date,
      canonical: data.canonical,
      readingTime: Math.ceil(stats.minutes),
      content,
    }
  })

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const posts = getAllPosts()
  return posts.find((post) => post.slug === slug) || null
}

export function getAllSlugs() {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'))

  return files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)
    return data.slug || filename.replace('.mdx', '')
  })
}
