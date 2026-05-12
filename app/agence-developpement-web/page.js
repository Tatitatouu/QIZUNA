import Link from 'next/link'
import { Code, Layers, Users, RefreshCw, Search, PenTool, Rocket, Wrench, Settings } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollButton from '@/components/layout/ScrollButton'
import ScrollAnimations from '@/components/layout/ScrollAnimations'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import Contact from '@/components/sections/Contact'
import { navLinks, contactInfo, footerData } from '@/lib/data'
import '../service-page.css'

export const metadata = {
  title: 'Agence développement web sur mesure | Qizuna',
  description: 'Agence de développement web sur mesure à Mulhouse en Alsace. Applications performantes pour PME & ETI, sans dette technique. Devis gratuit en 24h.',
  alternates: { canonical: 'https://qizuna.fr/agence-developpement-web' },
  openGraph: {
    title: 'Agence développement web sur mesure | Qizuna',
    url: 'https://qizuna.fr/agence-developpement-web',
  },
}

const faqItems = [
  {
    question: 'Combien coûte une application web sur mesure ?',
    answer: "Le coût dépend de la complexité fonctionnelle, des intégrations nécessaires et du niveau de finition attendu. Un premier projet démarre généralement entre 15 000 € et 50 000 €. Nous établissons un devis détaillé et gratuit après un cadrage précis de votre besoin — sans engagement.",
  },
  {
    question: 'Quel est le délai de développement ?',
    answer: "Une application web simple (5 à 10 écrans) prend entre 2 et 4 mois. Un projet plus complexe avec des intégrations tierces peut nécessiter 6 à 12 mois. Nous travaillons en sprints agiles de 2 semaines pour livrer des résultats visibles rapidement.",
  },
  {
    question: 'Vous faites du support après livraison ?',
    answer: "Oui. Nous proposons des contrats de maintenance et de support post-livraison : corrections, évolutions fonctionnelles, mises à jour de sécurité, monitoring. Vous pouvez aussi reprendre le projet en interne à tout moment — le code vous appartient.",
  },
  {
    question: 'Pouvez-vous développer en une technologie spécifique ?',
    answer: "Nous sommes spécialisés en React, Next.js, Node.js et PostgreSQL — des technologies open source, performantes et largement adoptées. Si votre projet nécessite une autre stack, nous évaluons la pertinence technique et pouvons nous adapter.",
  },
  {
    question: 'Comment se déroule le processus de devis ?',
    answer: "Vous nous contactez via le formulaire ou par téléphone. Nous organisons un premier échange gratuit pour comprendre votre besoin. Sous 48h, nous vous envoyons une proposition détaillée avec périmètre, planning prévisionnel et budget. Sans engagement.",
  },
  {
    question: 'Avez-vous des références clients ?',
    answer: "Oui. Nous avons accompagné des PME et ETI dans des secteurs variés : industrie, finance, tourisme, services. Nous pouvons vous présenter des études de cas détaillées lors de notre premier échange.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Qizuna',
  description: 'Agence de développement web sur mesure pour PME & ETI',
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
      name: 'Développement application web sur mesure',
      description: 'Création d\'applications web performantes et maintenables pour PME et ETI',
    },
    {
      '@type': 'Service',
      name: 'Plateforme SaaS',
      description: 'Développement de plateformes SaaS scalables et sécurisées',
    },
    {
      '@type': 'Service',
      name: 'Logiciel métier',
      description: 'Applications métier sur mesure adaptées à vos processus',
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

export default function AgenceDeveloppementWeb() {
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
            <h1>Agence de développement web sur mesure pour PME &amp; ETI</h1>
            <p className="qizuna-service-hero-subtitle">
              Applications web performantes, sans dette technique, sans lock-in
            </p>
            <a href="#contact" className="qizuna-service-cta-button">
              Devis gratuit en 24h
            </a>
          </div>
        </section>

        {/* Problèmes + Solutions */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Pourquoi choisir une agence de développement web sur mesure ?</h2>
            <p>
              Les solutions génériques imposent leurs contraintes à votre organisation. Une application web sur mesure fait l&apos;inverse : elle s&apos;adapte à vos processus, vos équipes et vos objectifs. Chez Qizuna, nous concevons des applications web qui résolvent vos problèmes réels — pas des problèmes génériques.
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Vous avez besoin d&apos;une application web spécifique</h3>
                <p>Votre métier a des processus uniques que les outils du marché ne couvrent pas. Nous développons des applications 100% sur mesure, conçues autour de vos workflows et de vos contraintes métier.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vous craignez la dette technique</h3>
                <p>Code maintenable, architecture propre, documentation complète, tests automatisés. Nous appliquons les pratiques TDD et Clean Code pour livrer un code que n&apos;importe quelle équipe compétente peut reprendre.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vous voulez éviter le lock-in</h3>
                <p>Pas de dépendance technologique, pas de licence propriétaire. Le code source vous appartient, il est ouvert et transférable. Vous restez libre de vos choix à tout moment.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vous cherchez un partenaire fiable</h3>
                <p>Certifiés Activateur France Num, basés en Alsace, nous accompagnons nos clients sur le long terme. Transparence, réactivité et exigence technique sont nos engagements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Développement application web sur mesure — nos expertises</h2>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Layers className="w-5 h-5" />
                </div>
                <h3>Applications web métier</h3>
                <p>
                  CRM, ERP, outils de gestion sur mesure conçus pour les processus spécifiques de votre entreprise. Des logiciels métier que vos équipes adoptent naturellement parce qu&apos;ils correspondent exactement à leur façon de travailler. <Link href="/developpement-logiciel-sur-mesure">En savoir plus sur le développement logiciel sur mesure</Link>.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3>Plateformes SaaS</h3>
                <p>
                  Vous avez une idée de produit ? Nous développons votre plateforme web SaaS de A à Z : architecture multi-tenant, gestion des abonnements, tableaux de bord, API. Du MVP à la version de production, avec une scalabilité pensée dès le départ.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Users className="w-5 h-5" />
                </div>
                <h3>Portails clients et Extranet</h3>
                <p>
                  Offrez à vos clients et partenaires un accès sécurisé à vos services via un portail dédié. Espaces personnalisés, gestion documentaire, suivi de commandes — des interfaces intuitives et sécurisées.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3>Refonte d&apos;applications existantes</h3>
                <p>
                  Votre application vieillit ? Nous la modernisons : audit technique, migration progressive, optimisation des performances. Nous réduisons la dette technique sans interrompre votre activité. <Link href="/audit-technique">Découvrir notre audit technique</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Processus de développement */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Notre processus de développement web agile</h2>
            <p>
              Nous suivons une méthodologie agile et itérative, avec des livraisons régulières et une communication transparente à chaque étape. Vous gardez le contrôle de votre projet du début à la fin.
            </p>
            <div className="qizuna-avantages-list">
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3>1. Découverte (1-2 semaines)</h3>
                  <p>Audit de vos besoins et contraintes, analyse de l&apos;existant, définition du périmètre fonctionnel et des livrables. Cette phase de cadrage est gratuite et sans engagement.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <h3>2. Conception (2-3 semaines)</h3>
                  <p>Architecture technique, design UX/UI, spécifications détaillées. Nous validons ensemble chaque choix avant de passer au développement.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3>3. Développement (8-16 semaines)</h3>
                  <p>Itérations agiles en sprints de 2 semaines. Livraisons régulières, tests automatisés, revues de code systématiques. Vous voyez les avancées en continu.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3>4. Déploiement (1-2 semaines)</h3>
                  <p>Mise en production, formation de vos équipes, documentation technique et utilisateur. Nous vous accompagnons jusqu&apos;à l&apos;autonomie complète.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3>5. Maintenance (continu)</h3>
                  <p>Support technique, évolutions fonctionnelles, monitoring, mises à jour de sécurité. Un contrat de maintenance optionnel pour faire vivre votre application dans la durée.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cas d'usage / Projets */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos derniers projets de développement web</h2>
            <p>
              Chaque projet est unique. Voici des exemples concrets d&apos;applications web que nous avons développées pour nos clients.
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Plateforme de gestion de projets pour PME</h3>
                <p>Application métier complète pour une PME industrielle : suivi de production, gestion des commandes, tableaux de bord temps réel. Intégration avec l&apos;ERP existant.</p>
                <p><strong>Résultat : +40% de productivité sur le suivi de production</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Application métier pour le secteur financier</h3>
                <p>Logiciel de traitement de dossiers pour un cabinet de gestion de patrimoine. Workflows automatisés, conformité réglementaire, génération de documents.</p>
                <p><strong>Résultat : réduction de 60% du temps de traitement</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Portail client pour agence de voyages</h3>
                <p>Espace client sécurisé avec réservation en ligne, suivi de dossier, messagerie intégrée et paiement en ligne. Interface responsive et accessible.</p>
                <p><strong>Résultat : satisfaction client +85%</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>SaaS de gestion RH</h3>
                <p>Plateforme web multi-tenant pour la gestion des congés, notes de frais et entretiens annuels. Déployée auprès de 50 entreprises en 6 mois.</p>
                <p><strong>Résultat : 50 entreprises clientes en 6 mois</strong></p>
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
            <h3>Frontend</h3>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">React</span>
              <span className="qizuna-tech-tag">Next.js</span>
              <span className="qizuna-tech-tag">Vue.js</span>
              <span className="qizuna-tech-tag">TypeScript</span>
              <span className="qizuna-tech-tag">Tailwind CSS</span>
            </div>
            <h3>Backend</h3>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">Node.js</span>
              <span className="qizuna-tech-tag">Python</span>
              <span className="qizuna-tech-tag">PHP / Symfony</span>
              <span className="qizuna-tech-tag">PostgreSQL</span>
              <span className="qizuna-tech-tag">MongoDB</span>
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
              Besoin aussi d&apos;une <Link href="/developpement-application-mobile">application mobile</Link> ? Nous développons des apps iOS et Android en React Native, parfaitement intégrées à votre application web.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <ServiceFAQ items={faqItems} />

        {/* CTA Final + Contact */}
        <Contact contactInfo={contactInfo} />
      </main>
      <Footer data={footerData} />
      <ScrollButton />
      <ScrollAnimations />
    </div>
  )
}
