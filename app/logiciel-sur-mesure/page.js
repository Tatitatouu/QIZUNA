import Link from 'next/link'
import { Settings, Database, Workflow, RefreshCw, Search, PenTool, Code, Rocket, Wrench } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollButton from '@/components/layout/ScrollButton'
import ScrollAnimations from '@/components/layout/ScrollAnimations'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import Contact from '@/components/sections/Contact'
import { navLinks, contactInfo, footerData } from '@/lib/data'
import '../service-page.css'

export const metadata = {
  title: 'Agence développement logiciel sur mesure | Qizuna',
  description: 'Développement logiciel métier sur mesure pour PME & ETI. Architecture robuste, sans dette technique. Devis gratuit en 24h.',
  alternates: { canonical: 'https://qizuna.fr/logiciel-sur-mesure' },
  openGraph: {
    title: 'Agence développement logiciel sur mesure | Qizuna',
    url: 'https://qizuna.fr/logiciel-sur-mesure',
  },
}

const faqItems = [
  {
    question: 'Combien coûte un logiciel sur mesure ?',
    answer: "Le coût dépend de la complexité fonctionnelle, des intégrations nécessaires et du niveau de finition attendu. Un premier projet démarre généralement entre 15 000 € et 50 000 €. Nous établissons un devis détaillé et gratuit après un cadrage précis de votre besoin — sans engagement.",
  },
  {
    question: 'Quel est le délai de développement d\'un logiciel sur mesure ?',
    answer: "Un logiciel simple (5 à 10 écrans, une base de données) prend entre 2 et 4 mois. Un projet plus complexe avec des intégrations tierces peut nécessiter 6 à 12 mois. Nous travaillons en sprints agiles de 2 semaines pour livrer des résultats visibles rapidement.",
  },
  {
    question: 'Vous faites du support après livraison ?',
    answer: "Oui. Nous proposons des contrats de maintenance et de support post-livraison : corrections, évolutions fonctionnelles, mises à jour de sécurité, monitoring. Vous pouvez aussi reprendre le projet en interne à tout moment — le code vous appartient.",
  },
  {
    question: 'Pouvez-vous développer en une technologie spécifique ?',
    answer: "Nous sommes spécialisés en Node.js, Python, React et PostgreSQL — des technologies open source, performantes et largement adoptées. Si votre projet nécessite une autre stack, nous évaluons la pertinence technique et pouvons nous adapter.",
  },
  {
    question: 'Comment gérez-vous les évolutions du logiciel ?',
    answer: "Nous concevons dès le départ une architecture modulaire et évolutive. Les évolutions sont intégrées via des sprints dédiés, avec priorisation collaborative. Chaque évolution est testée, documentée et déployée sans interruption de service.",
  },
  {
    question: 'Avez-vous des références dans mon secteur ?',
    answer: "Nous avons accompagné des PME et ETI dans des secteurs variés : industrie, finance, tourisme, services, santé. Nous pouvons vous présenter des études de cas détaillées lors de notre premier échange.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Qizuna',
  description: 'Agence de développement logiciel sur mesure pour PME & ETI',
  url: 'https://qizuna.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pfastatt',
    addressRegion: 'Alsace',
    addressCountry: 'FR',
  },
  areaServed: 'FR',
  service: [
    {
      '@type': 'Service',
      name: 'Développement logiciel métier',
      description: 'Logiciels métier sur mesure pour optimiser vos processus',
    },
    {
      '@type': 'Service',
      name: 'Logiciel de gestion',
      description: 'Systèmes de gestion intégrés et performants',
    },
    {
      '@type': 'Service',
      name: 'Logiciel d\'automatisation',
      description: 'Automatisation des processus métier',
    },
  ],
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
}

export default function LogicielSurMesure() {
  return (
    <div className="qizuna-container">
      <Navigation navLinks={navLinks} />
      <main id="main-content" className="qizuna-service-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <section className="qizuna-service-hero">
          <div className="qizuna-section-content">
            <h1>Agence développement logiciel sur mesure pour PME &amp; ETI</h1>
            <p className="qizuna-service-hero-subtitle">
              Logiciels métier performants, architecture robuste, sans dette technique
            </p>
            <a href="#contact" className="qizuna-service-cta-button">
              Devis gratuit en 24h
            </a>
          </div>
        </section>

        {/* Problèmes + Solutions */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Pourquoi développer un logiciel sur mesure ?</h2>
            <p>
              Les logiciels standards imposent leurs processus à votre organisation. Un logiciel sur mesure fait l&apos;inverse : il s&apos;adapte à votre métier, vos équipes et vos contraintes. Chez Qizuna, nous concevons des logiciels métier qui répondent exactement à vos besoins — pas à ceux du marché.
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Les logiciels standards ne correspondent pas à vos besoins</h3>
                <p>Votre métier a des processus uniques. Nous développons des logiciels 100% adaptés à votre organisation, vos workflows et vos contraintes métier. Pas de compromis, pas de fonctionnalités inutiles.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vos processus métier sont complexes</h3>
                <p>Architecture robuste, scalable et maintenable. Nous maîtrisons les systèmes complexes : gestion multi-sites, intégrations tierces, workflows conditionnels, conformité réglementaire.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vous craignez les coûts de maintenance</h3>
                <p>Code propre, documentation complète, tests automatisés, support inclus. Notre méthodologie TDD et Clean Code garantit un logiciel maintenable sur le long terme — sans dette technique cachée.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vous voulez garder le contrôle</h3>
                <p>Pas de lock-in technologique. Le code source vous appartient, il est documenté et peut être repris par n&apos;importe quelle équipe compétente. Vous restez propriétaire de votre outil.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types de logiciels */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos services de développement logiciel</h2>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Settings className="w-5 h-5" />
                </div>
                <h3>Logiciels métier sur mesure</h3>
                <p>
                  CRM, ERP, outils de gestion conçus pour vos processus spécifiques. Des applications métier que vos équipes adoptent naturellement parce qu&apos;elles correspondent exactement à leur façon de travailler. Gestion de production, suivi qualité, planification — chaque fonctionnalité est pensée pour votre contexte.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Database className="w-5 h-5" />
                </div>
                <h3>Logiciels de gestion intégrés</h3>
                <p>
                  ERP, CRM, systèmes de gestion centralisés. Nous développons des solutions qui connectent vos équipes, vos données et vos processus dans un outil unique, adapté à votre secteur d&apos;activité. Fini les fichiers Excel et les doubles saisies.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3>Logiciels d&apos;automatisation</h3>
                <p>
                  Automatisez les tâches répétitives, centralisez vos données, générez vos rapports automatiquement. Nous développons des outils d&apos;automatisation des processus métier qui font gagner du temps à vos équipes au quotidien.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3>Refonte de logiciels existants</h3>
                <p>
                  Votre logiciel vieillit ? Nous le modernisons : audit technique, migration progressive, optimisation des performances. Nous réduisons la dette technique sans interrompre votre activité. <Link href="/audit-technique">Découvrir notre audit technique</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Notre processus de développement logiciel</h2>
            <p>
              Nous suivons une méthodologie agile et itérative adaptée au développement de logiciels métier complexes. Vous gardez la visibilité et le contrôle à chaque étape.
            </p>
            <div className="qizuna-avantages-list">
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3>1. Audit métier (1-2 semaines)</h3>
                  <p>Analyse approfondie de vos processus, contraintes et objectifs. Cartographie des flux métier, identification des points de friction, rédaction des spécifications fonctionnelles. Cette phase est gratuite et sans engagement.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <h3>2. Conception (2-3 semaines)</h3>
                  <p>Architecture technique, modélisation des données, design UX/UI, spécifications détaillées. Nous validons ensemble chaque choix fonctionnel et technique avant de démarrer le développement.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3>3. Développement (8-16 semaines)</h3>
                  <p>Itérations agiles en sprints de 2 semaines. Tests automatisés (TDD), revues de code systématiques, intégration continue. Vous voyez les avancées et pouvez ajuster les priorités à chaque itération.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3>4. Déploiement (1-2 semaines)</h3>
                  <p>Mise en production, formation de vos équipes, documentation technique et utilisateur. Migration des données existantes si nécessaire. Nous vous accompagnons jusqu&apos;à l&apos;autonomie complète.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3>5. Maintenance (continu)</h3>
                  <p>Support technique, évolutions fonctionnelles, monitoring, mises à jour de sécurité. Un contrat de maintenance optionnel pour faire vivre votre logiciel dans la durée.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cas d'usage */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos derniers projets logiciel</h2>
            <p>
              Chaque logiciel métier est unique. Voici des exemples concrets de projets que nous avons réalisés pour nos clients.
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Logiciel de gestion pour secteur manufacturier</h3>
                <p>Système de suivi de production en temps réel pour une PME industrielle. Gestion des ordres de fabrication, suivi qualité, alertes automatiques et tableaux de bord de pilotage.</p>
                <p><strong>Résultat : -40% de temps de traitement des ordres de fabrication</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Système d&apos;automatisation pour PME</h3>
                <p>Outil d&apos;automatisation des processus administratifs : génération de devis, facturation automatique, relances clients, reporting. Connecté à la comptabilité existante.</p>
                <p><strong>Résultat : +60% de productivité sur les tâches administratives</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Logiciel métier pour le secteur financier</h3>
                <p>Application de gestion de dossiers clients pour un cabinet de gestion de patrimoine. Workflows de conformité réglementaire, suivi des investissements, génération de rapports réglementaires.</p>
                <p><strong>Résultat : conformité réglementaire garantie, 0 incident en 18 mois</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Outil de planification pour entreprise de services</h3>
                <p>Logiciel de planification et de gestion des interventions terrain. Planning dynamique, géolocalisation, rapports d&apos;intervention numériques, facturation automatique.</p>
                <p><strong>Résultat : +35% d&apos;interventions par jour et par technicien</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Technologies et frameworks</h2>
            <p>
              Nous utilisons des technologies open source, éprouvées et largement adoptées. Pas de lock-in technologique : votre code vous appartient et peut être repris par n&apos;importe quelle équipe compétente.
            </p>
            <h3>Backend</h3>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">Node.js</span>
              <span className="qizuna-tech-tag">Python</span>
              <span className="qizuna-tech-tag">PHP / Symfony</span>
              <span className="qizuna-tech-tag">PostgreSQL</span>
              <span className="qizuna-tech-tag">Redis</span>
            </div>
            <h3>Frontend</h3>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">React</span>
              <span className="qizuna-tech-tag">Next.js</span>
              <span className="qizuna-tech-tag">Vue.js</span>
              <span className="qizuna-tech-tag">TypeScript</span>
            </div>
            <h3>Infrastructure</h3>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">Docker</span>
              <span className="qizuna-tech-tag">AWS / OVH</span>
              <span className="qizuna-tech-tag">CI/CD</span>
              <span className="qizuna-tech-tag">Kubernetes</span>
              <span className="qizuna-tech-tag">Monitoring</span>
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              Besoin d&apos;une <Link href="/agence-developpement-web">application web</Link> ou d&apos;une <Link href="/developpement-application-mobile">application mobile</Link> en complément ? Nous pouvons développer l&apos;ensemble de votre écosystème logiciel.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <ServiceFAQ items={faqItems} />

        {/* Contact */}
        <Contact contactInfo={contactInfo} />
      </main>
      <Footer data={footerData} />
      <ScrollButton />
      <ScrollAnimations />
    </div>
  )
}
