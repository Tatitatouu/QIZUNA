import { Manrope } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata = {
  metadataBase: new URL('https://qizuna.fr'),
  title: 'Qizuna | Développement Web & Applications Mobiles',
  description: 'Agence digitale spécialisée en développement web, applications mobiles, audit technique et infrastructure cloud. Solutions sur-mesure pour votre transformation digitale.',
  keywords: 'agence digitale, développement web, application mobile, transformation numérique, Qizuna, solutions digitales, France',
  authors: [{ name: 'Qizuna' }],
  creator: 'Qizuna',
  publisher: 'Qizuna',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Qizuna | Développement Web & Applications Mobiles',
    description: 'Agence digitale spécialisée en développement web, applications mobiles, audit technique et infrastructure cloud. Solutions sur-mesure pour votre transformation digitale.',
    url: 'https://qizuna.fr',
    siteName: 'Qizuna',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Qizuna - Agence Digitale',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qizuna | Développement Web & Applications Mobiles',
    description: 'Agence digitale spécialisée en développement web, applications mobiles, audit technique et infrastructure cloud. Solutions sur-mesure pour votre transformation digitale.',
    images: ['/logo.webp'],
  },
  alternates: {
    canonical: 'https://qizuna.fr',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Qizuna',
  url: 'https://qizuna.fr',
  logo: 'https://qizuna.fr/logo.webp',
  description: 'Qizuna | Développement Web & Applications Mobiles',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "15 rue de l'Oberfeld",
    addressLocality: 'Willer-sur-Thur',
    postalCode: '68760',
    addressCountry: 'FR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33367266916',
    contactType: 'customer service',
    email: 'hello@qizuna.fr',
    availableLanguage: 'French',
  },
  sameAs: [
    'https://www.linkedin.com/company/qizuna/',
    'https://www.linkedin.com/in/mathieu-capon-56a5561a0/',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Qizuna',
  url: 'https://qizuna.fr',
  description: 'Agence digitale spécialisée en développement web, applications mobiles, audit technique et infrastructure cloud. Solutions sur-mesure pour votre transformation digitale.',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'Organization',
    name: 'Qizuna',
  },
  serviceType: 'Développement Web et Solutions Digitales',
  description: 'Services de développement web, applications mobiles, audit sécurité et hébergement cloud',
  areaServed: 'France',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services Qizuna',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Conception sur mesure',
          description: 'Solutions numériques personnalisées alliant web et mobile',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Audit & Sécurité',
          description: 'Analyse approfondie de votre écosystème numérique',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hébergement Cloud',
          description: 'Infrastructure moderne avec monitoring 24/7',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Accompagnement',
          description: 'Consulting expert pour transformation numérique',
        },
      },
    ],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://qizuna.fr/#localbusiness',
  name: 'Qizuna',
  image: 'https://qizuna.fr/logo.webp',
  telephone: '+33367266916',
  email: 'hello@qizuna.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "25 rue de l'écluse",
    addressLocality: 'Pfastatt',
    postalCode: '68120',
    addressCountry: 'FR',
  },
  priceRange: '$$',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className={`${manrope.variable} ${manrope.className}`}>
          <link rel="preconnect" href="https://stats.qizuna.net" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
          <Script
            src="https://stats.qizuna.net/script.js"
            data-website-id="3230c32c-3c7d-418f-8444-1a42f81c0731"
            strategy="afterInteractive"
          />
          <a href="#main-content" className="skip-link">
            Aller au contenu principal
          </a>
          {children}
        </div>
      </body>
    </html>
  )
}
