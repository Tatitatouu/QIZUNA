import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollButton from '@/components/layout/ScrollButton'
import ScrollAnimations from '@/components/layout/ScrollAnimations'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import Contact from '@/components/sections/Contact'
import CalendlyWidget from '@/components/sections/CalendlyWidget'
import { navLinks, contactInfo, footerData } from '@/lib/data'
import '../service-page.css'

export const metadata = {
  title: "Qu'est-ce qu'un logiciel sur mesure ? Définition, avantages et coûts",
  description: "Un logiciel sur mesure est un outil développé spécifiquement pour votre métier — contrairement au SaaS, il s'adapte à vos processus. Définition, avantages, coûts réels et cas d'usage.",
  alternates: { canonical: 'https://qizuna.fr/developpement-logiciel-sur-mesure' },
  openGraph: {
    title: "Qu'est-ce qu'un logiciel sur mesure ? Définition, avantages et coûts",
    url: 'https://qizuna.fr/developpement-logiciel-sur-mesure',
  },
}

const faqItems = [
  {
    question: 'Quelle est la différence entre un logiciel sur mesure et un SaaS ?',
    answer: "Un SaaS est un logiciel générique conçu pour le plus grand nombre. Un logiciel sur mesure est développé spécifiquement pour vos processus métier : il s'adapte à votre organisation, pas l'inverse. Il n'y a pas d'abonnement mensuel, pas de fonctionnalités inutiles, et vous en êtes propriétaire.",
  },
  {
    question: 'Combien coûte un développement logiciel sur mesure ?',
    answer: "Le coût dépend de la complexité fonctionnelle, des intégrations nécessaires et du niveau de finition attendu. Un premier projet démarre généralement entre 15 000 € et 50 000 €. Nous établissons un devis détaillé après un cadrage gratuit de votre besoin.",
  },
  {
    question: 'Combien de temps faut-il pour développer un logiciel sur mesure ?',
    answer: "Un logiciel simple (5 à 10 écrans, une base de données) prend entre 2 et 4 mois. Un projet plus complexe avec des intégrations tierces peut prendre 6 à 12 mois. Nous travaillons en sprints agiles de 2 semaines pour vous livrer des résultats visibles rapidement.",
  },
  {
    question: 'Serons-nous dépendants de Qizuna après la livraison ?',
    answer: "Non. Nous livrons le code source complet, documenté, sans lock-in technologique. Vous pouvez reprendre le projet en interne ou le confier à une autre équipe à tout moment. Nous proposons également une maintenance optionnelle si vous souhaitez continuer à travailler avec nous.",
  },
  {
    question: 'Pouvez-vous reprendre un logiciel existant développé par une autre équipe ?',
    answer: "Oui. Nous commençons par un audit technique pour évaluer l'état du code, identifier la dette technique et proposer un plan de reprise. C'est souvent plus rapide et moins coûteux qu'une réécriture complète.",
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function DeveloppementLogicielSurMesure() {
  return (
    <div className="qizuna-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation navLinks={navLinks} />
      <main id="main-content" className="qizuna-service-page">
        <section className="qizuna-service-hero">
          <div className="qizuna-section-content">
            <h1>Qu&apos;est-ce qu&apos;un logiciel sur mesure ? La réponse claire pour les entreprises</h1>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Définition : qu&apos;est-ce qu&apos;un logiciel sur mesure ?</h2>
            <p>
              Un logiciel sur mesure est une application informatique développée spécifiquement pour répondre aux besoins d&apos;une entreprise. Contrairement aux logiciels standards (SaaS) qui proposent des fonctionnalités génériques, un logiciel sur mesure est conçu pour s&apos;adapter à vos processus métier, vos workflows et vos contraintes — pas l&apos;inverse.
            </p>
            <p>
              Concrètement, un logiciel sur mesure peut prendre la forme d&apos;un CRM adapté à votre cycle de vente, d&apos;un outil de gestion interne calqué sur vos processus, ou d&apos;une plateforme SaaS que vous commercialisez. L&apos;idée est simple : l&apos;outil fait exactement ce dont vous avez besoin, ni plus, ni moins.
            </p>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Logiciel sur mesure vs SaaS : quelles différences ?</h2>
            <p>
              La question revient souvent : pourquoi investir dans un développement sur mesure quand des solutions SaaS existent déjà ? Voici les différences principales :
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Adaptation</h3>
                <p>Un SaaS vous impose ses workflows. Un logiciel sur mesure reproduit les vôtres. Si vos processus métier sont spécifiques ou différenciants, le sur mesure est la seule option qui ne vous oblige pas à faire de compromis.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Propriété et indépendance</h3>
                <p>Avec un SaaS, vous louez un accès. Avec un logiciel sur mesure, vous êtes propriétaire du code source. Pas de dépendance fournisseur, pas de risque de voir vos tarifs augmenter ou votre outil disparaître.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Coût sur le long terme</h3>
                <p>Un SaaS coûte peu au départ mais les abonnements s&apos;accumulent : 200 €/mois × 20 utilisateurs = 48 000 €/an. Un logiciel sur mesure est rentable dès 3 à 4 ans d&apos;utilisation. <Link href="/blog/saas-vs-logiciel-sur-mesure">Voir notre comparatif détaillé SaaS vs sur mesure</Link>.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Intégration</h3>
                <p>Un logiciel sur mesure se connecte nativement à vos outils existants (ERP, CRM, comptabilité). Avec un SaaS, les intégrations sont souvent limitées, coûteuses ou impossibles.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Les avantages d&apos;un logiciel sur mesure</h2>
            <ul style={{ marginBottom: '1.5rem' }}>
              <li><strong>Adapté à 100 % à vos besoins</strong> — pas de fonctionnalités inutiles, pas de compromis</li>
              <li><strong>Évolutif</strong> — vous ajoutez des fonctionnalités quand vous en avez besoin</li>
              <li><strong>Propriété totale du code</strong> — pas de lock-in, vous restez libre</li>
              <li><strong>Sécurité maîtrisée</strong> — vous choisissez où sont vos données et qui y accède</li>
              <li><strong>Rentable sur le long terme</strong> — un investissement, pas une charge récurrente</li>
              <li><strong>Intégrable</strong> — connexion native avec tous vos outils métier</li>
            </ul>
          </div>
        </section>

        <CalendlyWidget />

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Combien coûte un logiciel sur mesure ?</h2>
            <p>
              Le coût dépend de la complexité fonctionnelle, des intégrations nécessaires et du niveau de finition attendu. Pour donner un ordre de grandeur :
            </p>
            <ul style={{ marginBottom: '1.5rem' }}>
              <li><strong>Application simple</strong> (5 à 10 écrans, une base de données) : 15 000 à 30 000 €</li>
              <li><strong>Application métier complète</strong> (multi-utilisateurs, intégrations, tableaux de bord) : 30 000 à 80 000 €</li>
              <li><strong>Plateforme SaaS</strong> (multi-tenant, abonnements, API publique) : 50 000 à 150 000 €</li>
            </ul>
            <p>
              À comparer avec le coût cumulé d&apos;un SaaS sur 5 ans, qui peut facilement dépasser 100 000 € pour une PME de 20 utilisateurs.
            </p>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos services de développement logiciel sur mesure</h2>
            <p>
              Chez Qizuna, nous accompagnons les entreprises dans la conception et le développement de logiciels sur mesure. Voici ce que nous développons :
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Applications métier internes</h3>
                <p>CRM, ERP, outils de gestion sur mesure conçus pour les processus spécifiques de votre entreprise. Des applications que vos équipes adoptent naturellement parce qu&apos;elles correspondent exactement à leur façon de travailler.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Logiciels SaaS</h3>
                <p>Vous avez une idée de produit ? Nous développons votre SaaS de A à Z : architecture multi-tenant, gestion des abonnements, tableaux de bord, API. Du MVP à la version de production.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Outils de gestion et d&apos;automatisation</h3>
                <p>Automatisez les tâches répétitives, centralisez vos données, générez vos rapports automatiquement. Nous développons des outils qui font gagner du temps à vos équipes au quotidien. Découvrez aussi notre <Link href="/agence-ia">agence d&apos;automatisation IA</Link> pour aller plus loin avec l&apos;intelligence artificielle.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Intégrations et APIs</h3>
                <p>Connectez vos outils existants entre eux. Nous développons des APIs sur mesure et des intégrations avec vos systèmes tiers (ERP, CRM, outils comptables, plateformes e-commerce).</p>
              </div>
            </div>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Notre méthode de développement</h2>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Phase de cadrage</h3>
                <p>Nous analysons vos besoins, vos processus métier et vos contraintes pour rédiger des spécifications fonctionnelles précises. Cette phase est gratuite et sans engagement.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Développement itératif</h3>
                <p>Nous travaillons en sprints agiles de 2 semaines. Vous voyez les avancées régulièrement et pouvez ajuster les priorités à chaque itération.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Tests et qualité</h3>
                <p>Méthodologie TDD (Test-Driven Development), revues de code systématiques, intégration continue. Chaque fonctionnalité est testée avant d&apos;être livrée.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Livraison et maintenance</h3>
                <p>Déploiement, documentation technique, formation de vos équipes. Nous proposons une maintenance optionnelle pour les mises à jour et les évolutions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos technologies</h2>
            <p>Nous utilisons des technologies open source, éprouvées et largement adoptées par la communauté. Pas de lock-in technologique : votre code vous appartient et peut être repris par n&apos;importe quelle équipe compétente.</p>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">React</span>
              <span className="qizuna-tech-tag">Next.js</span>
              <span className="qizuna-tech-tag">Node.js</span>
              <span className="qizuna-tech-tag">PostgreSQL</span>
              <span className="qizuna-tech-tag">Docker</span>
              <span className="qizuna-tech-tag">AWS / OVH</span>
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              Nous pouvons aussi réaliser un <Link href="/audit-technique">audit technique de votre existant</Link> ou développer une <Link href="/developpement-application-mobile">application mobile</Link> en complément de votre logiciel.
            </p>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Développement logiciel sur mesure à Mulhouse et en Alsace</h2>
            <p>
              Basée à Mulhouse, notre équipe accompagne les PME et ETI d&apos;Alsace et du Grand Est dans leurs projets de développement logiciel sur mesure. Proximité, réactivité et compréhension de votre contexte local : nous travaillons avec vous, pas à distance derrière un écran.
            </p>
            <p>
              Que vous soyez à Mulhouse, Colmar, Strasbourg ou ailleurs en Alsace, nous nous déplaçons pour comprendre vos besoins sur le terrain. Notre connaissance du tissu économique local — industrie, logistique, commerce, services — nous permet de proposer des solutions adaptées à votre réalité.
            </p>
          </div>
        </section>

        <ServiceFAQ items={faqItems} />

        <CalendlyWidget title="Prêt à lancer votre projet ? Réservez un échange de 30 min" />

        <Contact contactInfo={contactInfo} />
      </main>
      <Footer data={footerData} />
      <ScrollButton />
      <ScrollAnimations />
    </div>
  )
}
