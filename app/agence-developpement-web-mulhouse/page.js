import Link from 'next/link'
import { MapPin, Video, Handshake } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollButton from '@/components/layout/ScrollButton'
import ScrollAnimations from '@/components/layout/ScrollAnimations'
import Contact from '@/components/sections/Contact'
import { navLinks, contactInfo, footerData } from '@/lib/data'
import '../service-page.css'

export const metadata = {
  title: 'Agence développement web Mulhouse | Qizuna',
  description: 'Qizuna, agence de développement web basée à Mulhouse (68). Logiciels sur mesure, applications mobiles, audit technique. Certifiée France Num.',
  alternates: { canonical: 'https://qizuna.fr/agence-developpement-web-mulhouse' },
  openGraph: {
    title: 'Agence développement web Mulhouse | Qizuna',
    url: 'https://qizuna.fr/agence-developpement-web-mulhouse',
  },
}

export default function AgenceDeveloppementWebMulhouse() {
  return (
    <div className="qizuna-container">
      <Navigation navLinks={navLinks} />
      <main id="main-content" className="qizuna-service-page">
        <section className="qizuna-service-hero">
          <div className="qizuna-section-content">
            <h1>Agence développement web à Mulhouse — Qizuna</h1>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Une agence digitale ancrée en Alsace</h2>
            <p>
              Qizuna est une <Link href="/">agence de développement web</Link> basée à Pfastatt, aux portes de Mulhouse (68). Nous accompagnons les entreprises alsaciennes et françaises dans leur transformation numérique avec une approche humaine, transparente et techniquement exigeante.
            </p>
            <p>
              Nous intervenons aussi bien en présentiel dans la région mulhousienne qu&apos;en remote partout en France. Certifiés Activateur France Num, nous aidons les entreprises locales à bénéficier des aides publiques disponibles pour financer leurs projets de digitalisation.
            </p>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos services à Mulhouse et en Alsace</h2>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Développement web sur mesure</h3>
                <p>Applications métier, SaaS, plateformes web — développés en React/Next.js avec une architecture pensée pour évoluer. <Link href="/developpement-logiciel-sur-mesure">En savoir plus sur le développement logiciel sur mesure</Link>.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Développement application mobile</h3>
                <p>Applications iOS et Android en React Native, de la maquette au déploiement sur les stores. <Link href="/developpement-application-mobile">En savoir plus sur le développement application mobile</Link>.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Audit technique</h3>
                <p>Audit de performance, sécurité et architecture de votre application existante. Rapport détaillé et plan d&apos;action. <Link href="/audit-technique">En savoir plus sur l&apos;audit technique</Link>.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Consulting et formation</h3>
                <p>Conseil en architecture logicielle, accompagnement technique de vos équipes, formation aux bonnes pratiques de développement (TDD, Clean Code, CI/CD).</p>
              </div>
            </div>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Pourquoi choisir une agence locale ?</h2>
            <div className="qizuna-avantages-list">
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3>Réactivité</h3>
                  <p>Basés à quelques minutes de Mulhouse, nous sommes disponibles rapidement pour des réunions en présentiel, des ateliers de cadrage ou des sessions de formation.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3>Réunions en présentiel</h3>
                  <p>Rien ne remplace un échange en face à face pour comprendre vos besoins, présenter les maquettes ou faire une démo. Nous privilégions le contact direct.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <h3>Connaissance du tissu économique local</h3>
                  <p>Nous connaissons les spécificités des entreprises alsaciennes, leurs enjeux et leur écosystème. Cette proximité nous permet de proposer des solutions vraiment adaptées.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact contactInfo={contactInfo} />
      </main>
      <Footer data={footerData} />
      <ScrollButton />
      <ScrollAnimations />
    </div>
  )
}
