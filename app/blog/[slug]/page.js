import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollButton from '@/components/layout/ScrollButton'
import { navLinks, footerData } from '@/lib/data'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'
import '../blog.css'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Qizuna`,
    description: post.description,
    alternates: { canonical: `https://qizuna.fr/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Qizuna`,
      url: `https://qizuna.fr/blog/${post.slug}`,
    },
  }
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return <div>Article non trouvé</div>
  }

  const { content: mdxContent } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  })

  return (
    <div className="qizuna-container">
      <Navigation navLinks={navLinks} />
      <main id="main-content" className="qizuna-blog-page">
        <article className="qizuna-article">
          <header className="qizuna-article-header">
            <Link href="/blog" className="qizuna-back-link">
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
            <h1>{post.title}</h1>
            <p className="qizuna-article-meta">
              Publié le {formatDate(post.date)} · {post.readingTime} min de lecture
            </p>
          </header>
          <div className="qizuna-article-content">
            {mdxContent}
          </div>
          <footer className="qizuna-article-footer">
            <p>Besoin d&apos;un développement sur mesure ?</p>
            <Link href="/developpement-logiciel-sur-mesure">Contactez-nous pour en discuter</Link>
          </footer>
        </article>
      </main>
      <Footer data={footerData} />
      <ScrollButton />
    </div>
  )
}
