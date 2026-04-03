import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1>404 - Page introuvable</h1>
      <p>La page que vous recherchez n&apos;existe pas.</p>
      <Link href="/">Retour à l&apos;accueil</Link>
    </div>
  )
}
