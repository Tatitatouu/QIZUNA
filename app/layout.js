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
  title: 'Agence développement web sur mesure | Qizuna',
  description: 'Qizuna, agence développement web sur mesure basée en Alsace. Logiciels, applications mobiles et sites web — livrés sans dette technique, sans lock-in. Certifié France Num. Réponse sous 24h.',
  keywords: 'agence développement web, développement web sur mesure, application mobile, logiciel sur mesure, agence digitale, Alsace, France',
  authors: [{ name: 'Qizuna' }],
  creator: 'Qizuna',
  publisher: 'Qizuna',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Agence développement web sur mesure | Qizuna',
    description: 'Qizuna, agence développement web sur mesure basée en Alsace. Logiciels, applications mobiles et sites web — livrés sans dette technique, sans lock-in. Certifié France Num. Réponse sous 24h.',
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
    title: 'Agence développement web sur mesure | Qizuna',
    description: 'Qizuna, agence développement web sur mesure basée en Alsace. Logiciels, applications mobiles et sites web — livrés sans dette technique, sans lock-in. Certifié France Num. Réponse sous 24h.',
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
  description: 'Agence développement web sur mesure basée en Alsace. Logiciels, applications mobiles et sites web.',
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
  description: 'Agence développement web sur mesure basée en Alsace. Logiciels, applications mobiles et sites web.',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Pourquoi faire appel à une agence de développement web plutôt qu'un freelance ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une agence comme Qizuna combine plusieurs expertises (développement, architecture, sécurité, gestion de projet) dans une seule relation. Vous avez un interlocuteur unique, mais une équipe derrière. Et contrairement à un freelance seul, votre projet ne s'arrête pas si une personne est indisponible.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte un développement web sur mesure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Chaque projet est différent. Un site vitrine sur mesure démarre autour de quelques milliers d'euros. Une application web métier ou un logiciel complexe peut représenter un investissement plus important. Nous établissons toujours un devis détaillé et transparent après un premier échange gratuit — sans engagement.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quels délais pour créer une application web ou mobile ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un projet simple (site vitrine, landing page) peut être livré en 3 à 6 semaines. Une application web ou mobile métier prend généralement 2 à 6 mois selon la complexité. Nous travaillons en méthode agile : vous voyez les avancées à chaque sprint, sans attendre la livraison finale.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle différence entre un logiciel sur mesure et une solution SaaS du marché ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un SaaS du marché est conçu pour tout le monde — donc pour personne en particulier. Un logiciel sur mesure est construit pour vos processus, vos contraintes, vos utilisateurs. Il n'y a pas de fonctionnalités inutiles, pas de limitations arbitraires, et vous n'êtes dépendant d'aucun éditeur.",
      },
    },
    {
      '@type': 'Question',
      name: "Travaillez-vous avec des entreprises hors d'Alsace ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Nous sommes basés à Pfastatt (68), mais nous travaillons avec des clients partout en France. Les échanges se font en visio, avec des points réguliers. La distance n'a jamais été un frein à la qualité du suivi.",
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className={`${manrope.variable} ${manrope.className}`}>
          <link rel="preconnect" href="https://stats.qizuna.net" crossOrigin="anonymous" />
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
