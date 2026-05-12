import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollButton from '@/components/layout/ScrollButton'
import { navLinks, footerData } from '@/lib/data'
import { getAllPosts } from '@/lib/blog'
import './blog.css'

export const metadata = {
  title: 'Blog développement web et logiciel | Qizuna',
  description: 'Conseils, guides et retours d\'expérience sur le développement web, mobile et logiciel sur mesure par l\'équipe Qizuna.',
  alternates: { canonical: 'https://qizuna.fr/blog' },
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="qizuna-container">
      <Navigation navLinks={navLinks} />
      <main id="main-content" className="qizuna-blog-page">
        <section className="qizuna-blog-hero">
          <div className="qizuna-section-content">
            <h1>Blog</h1>
            <p>Conseils, guides et retours d&apos;expérience sur le développement web, mobile et logiciel sur mesure.</p>
          </div>
        </section>

        <div className="qizuna-section-content">
          <div className="qizuna-blog-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="qizuna-blog-card">
                <span className="qizuna-blog-card-date">{formatDate(post.date)}</span>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span className="qizuna-blog-card-link">
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer data={footerData} />
      <ScrollButton />
    </div>
  )
}
