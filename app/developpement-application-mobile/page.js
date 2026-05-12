import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollButton from '@/components/layout/ScrollButton'
import ScrollAnimations from '@/components/layout/ScrollAnimations'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import Contact from '@/components/sections/Contact'
import { navLinks, contactInfo, footerData } from '@/lib/data'
import '../service-page.css'

export const metadata = {
  title: 'Agence développement application mobile Mulhouse | Qizuna',
  description: 'Agence développement application mobile à Mulhouse en Alsace. Apps iOS & Android sur mesure en React Native, UX soignée, performances optimisées. Devis gratuit.',
  alternates: { canonical: 'https://qizuna.fr/developpement-application-mobile' },
  openGraph: {
    title: 'Agence développement application mobile Mulhouse | Qizuna',
    url: 'https://qizuna.fr/developpement-application-mobile',
  },
}

const faqItems = [
  {
    question: 'Vaut-il mieux développer une app native ou cross-platform ?',
    answer: "Pour la majorité des projets, React Native (cross-platform) est le meilleur compromis : une seule base de code pour iOS et Android, des performances proches du natif, et un coût de développement réduit. Le natif pur (Swift/Kotlin) est recommandé uniquement pour des apps très exigeantes en performance (jeux, réalité augmentée).",
  },
  {
    question: "Combien coûte le développement d'une application mobile ?",
    answer: "Une application mobile simple (authentification, quelques écrans, API REST) démarre autour de 20 000 €. Une app complexe avec paiement intégré, géolocalisation ou fonctionnalités temps réel peut dépasser 60 000 €. Nous établissons un devis précis après cadrage gratuit.",
  },
  {
    question: "Gérez-vous la publication sur l'App Store et le Google Play ?",
    answer: "Oui. Nous gérons l'intégralité du processus de publication : création des comptes développeur si nécessaire, préparation des assets (icônes, screenshots), soumission et suivi de validation. Nous vous formons également à la gestion des mises à jour.",
  },
  {
    question: "Combien de temps faut-il pour développer une application mobile ?",
    answer: "Entre 3 et 6 mois pour une application standard. Nous travaillons en sprints agiles avec des démos régulières pour valider chaque étape avec vous.",
  },
  {
    question: 'Pouvez-vous faire évoluer une application mobile existante ?',
    answer: "Oui. Nous reprenons des projets existants après un audit technique. Que ce soit pour corriger des bugs, améliorer les performances ou ajouter de nouvelles fonctionnalités, nous nous adaptons à votre base de code existante.",
  },
]

export default function DeveloppementApplicationMobile() {
  return (
    <div className="qizuna-container">
      <Navigation navLinks={navLinks} />
      <main id="main-content" className="qizuna-service-page">
        <section className="qizuna-service-hero">
          <div className="qizuna-section-content">
            <h1>Agence développement application mobile à Mulhouse — iOS &amp; Android sur mesure</h1>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Pourquoi développer une application mobile sur mesure ?</h2>
            <p>
              Le mobile représente aujourd&apos;hui plus de 60 % du trafic web en France. Pour de nombreuses entreprises, une application mobile n&apos;est plus un luxe mais une nécessité : elle permet d&apos;offrir une expérience utilisateur optimale, d&apos;accéder à des fonctionnalités natives (notifications, caméra, GPS) et de fidéliser vos utilisateurs.
            </p>
            <p>
              Contrairement à une webapp responsive, une application mobile native ou cross-platform offre des performances supérieures, un accès hors ligne et une présence sur les stores (App Store, Google Play) qui renforce votre visibilité. En tant qu&apos;<Link href="/">agence de développement web</Link>, nous maîtrisons les deux approches pour vous conseiller la plus adaptée.
            </p>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos applications mobiles</h2>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Applications iOS (Swift, React Native)</h3>
                <p>Des applications performantes pour iPhone et iPad, respectant les guidelines Apple et optimisées pour les dernières versions d&apos;iOS.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Applications Android (Kotlin, React Native)</h3>
                <p>Des applications robustes pour l&apos;écosystème Android, compatibles avec la diversité des appareils et versions du système.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Applications cross-platform (React Native)</h3>
                <p>Une seule base de code pour iOS et Android. Le meilleur compromis entre coût de développement, performances et maintenabilité.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Progressive Web Apps (PWA)</h3>
                <p>Des applications web installables sur mobile, sans passer par les stores. Idéales pour un premier lancement rapide et économique.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Notre processus de développement mobile</h2>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>UX/UI Design et prototypage</h3>
                <p>Maquettes interactives, tests utilisateurs, validation du parcours avant le moindre développement. Nous concevons des interfaces intuitives et agréables.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Développement et tests</h3>
                <p>Développement en sprints agiles avec tests automatisés. Chaque fonctionnalité est validée sur les appareils cibles avant intégration.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Publication sur les stores</h3>
                <p>Gestion complète du processus de publication sur l&apos;App Store et le Google Play : assets, descriptions, soumission et suivi de validation.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Maintenance et évolutions</h3>
                <p>Suivi des mises à jour OS, corrections de bugs, ajout de nouvelles fonctionnalités. Votre application reste performante et à jour.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos technologies mobiles</h2>
            <p>
              Nous privilégions des technologies éprouvées qui garantissent la pérennité de votre application. Notre expertise web React nous permet de partager du code entre vos projets web et mobile, réduisant les coûts et les délais.
            </p>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">React Native</span>
              <span className="qizuna-tech-tag">Expo</span>
              <span className="qizuna-tech-tag">Swift</span>
              <span className="qizuna-tech-tag">Kotlin</span>
              <span className="qizuna-tech-tag">Firebase</span>
              <span className="qizuna-tech-tag">REST API</span>
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              Nous pouvons aussi développer un <Link href="/developpement-logiciel-sur-mesure">logiciel sur mesure</Link> en complément, intégrer de l&apos;<Link href="/agence-ia">automatisation IA</Link> dans votre application, ou réaliser un <Link href="/audit-technique">audit de votre application existante</Link>.
            </p>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Votre agence d&apos;application mobile à Mulhouse et en Alsace</h2>
            <p>
              Basée à Pfastatt près de Mulhouse, Qizuna accompagne les entreprises du Haut-Rhin et d&apos;Alsace dans le développement de leurs applications mobiles. Nous intervenons à Mulhouse, Colmar, Strasbourg, Belfort et dans toute la région Grand Est.
            </p>
            <p>
              La proximité est un atout pour vos projets mobile : ateliers de cadrage en présentiel, démos régulières dans nos locaux et réactivité maximale. Nous travaillons aussi à distance avec des clients partout en France.
            </p>
            <p>
              En tant qu&apos;<Link href="/agence-developpement-web-mulhouse">agence de développement web à Mulhouse</Link>, nous maîtrisons React et React Native, ce qui nous permet de partager du code entre vos projets web et mobile pour réduire les coûts et les délais.
            </p>
          </div>
        </section>

        <ServiceFAQ items={faqItems} />

        <Contact contactInfo={contactInfo} />
      </main>
      <Footer data={footerData} />
      <ScrollButton />
      <ScrollAnimations />
    </div>
  )
}
