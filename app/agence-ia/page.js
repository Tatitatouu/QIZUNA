import Link from 'next/link'
import { Bot, Brain, Zap, Plug, Search, PenTool, Code, Rocket, Wrench, MessageSquare, BarChart3, Repeat, Sparkles } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollButton from '@/components/layout/ScrollButton'
import ScrollAnimations from '@/components/layout/ScrollAnimations'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import Contact from '@/components/sections/Contact'
import { navLinks, contactInfo, footerData } from '@/lib/data'
import '../service-page.css'

export const metadata = {
  title: 'Agence intelligence artificielle et automatisation IA | Qizuna',
  description: 'Agence d\'automatisation IA en Alsace. Développement de solutions d\'intelligence artificielle sur mesure, agents IA et automatisation métier pour PME & ETI. Devis gratuit en 24h.',
  alternates: { canonical: 'https://qizuna.fr/agence-ia' },
  openGraph: {
    title: 'Agence intelligence artificielle et automatisation IA | Qizuna',
    url: 'https://qizuna.fr/agence-ia',
  },
}

const faqItems = [
  {
    question: 'Qu\'est-ce qu\'une solution IA sur mesure ?',
    answer: "Une solution IA sur mesure est un système intelligent développé spécifiquement pour vos besoins métier. Contrairement aux outils IA génériques, elle s'intègre à vos processus existants et exploite vos données pour automatiser, analyser ou assister vos équipes de manière ciblée.",
  },
  {
    question: 'Combien coûte une solution IA ?',
    answer: "Le coût varie selon la complexité : un chatbot IA simple démarre à partir de 10 000 €, un agent IA avancé ou une solution d'automatisation complète entre 20 000 € et 60 000 €. Nous établissons un devis détaillé et gratuit après un premier échange sur votre besoin.",
  },
  {
    question: 'Quel est le délai de développement ?',
    answer: "Un chatbot ou un agent IA simple prend 4 à 8 semaines. Une solution d'automatisation complète avec intégrations tierces nécessite 3 à 6 mois. Nous travaillons en itérations courtes pour livrer de la valeur rapidement.",
  },
  {
    question: 'Comment sécurisez-vous les données ?',
    answer: "La sécurité est au cœur de nos développements IA. Nous appliquons le chiffrement des données, le contrôle d'accès strict, la conformité RGPD. Vos données restent sur vos infrastructures ou sur des serveurs européens — jamais de transfert non autorisé vers des tiers.",
  },
  {
    question: 'Pouvez-vous intégrer l\'IA dans nos systèmes existants ?',
    answer: "Oui. Nous concevons des solutions IA qui s'intègrent à votre stack existante via des APIs. CRM, ERP, outils métier, bases de données — nous connectons l'IA à votre écosystème sans tout réécrire.",
  },
  {
    question: 'Avez-vous des références en IA ?',
    answer: "Oui. Nous avons développé des chatbots, des agents IA et des solutions d'automatisation pour des PME et ETI dans différents secteurs. Nous pouvons vous présenter des cas concrets lors de notre premier échange.",
  },
  {
    question: 'Intervenez-vous à Strasbourg et dans toute l\'Alsace ?',
    answer: "Oui. Basés à Pfastatt près de Mulhouse, nous intervenons dans toute l'Alsace : Mulhouse, Colmar, Strasbourg, Belfort et au-delà. Nous travaillons aussi à distance avec des clients partout en France. Les ateliers de cadrage peuvent se faire en présentiel ou en visioconférence.",
  },
  {
    question: 'Quelle est la différence entre une agence IA et un consultant IA ?',
    answer: "Un consultant IA vous conseille sur la stratégie et les cas d'usage. Une agence d'automatisation IA comme Qizuna va plus loin : nous concevons, développons et déployons les solutions techniques. Vous obtenez un produit fonctionnel, pas un rapport de recommandations.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Qizuna',
  description: 'Agence d\'automatisation IA et intelligence artificielle en Alsace, proche de Strasbourg et Mulhouse. Solutions IA sur mesure pour PME & ETI.',
  url: 'https://qizuna.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '25 rue de l\'écluse',
    addressLocality: 'Pfastatt',
    postalCode: '68120',
    addressRegion: 'Alsace',
    addressCountry: 'FR',
  },
  areaServed: [
    { '@type': 'City', name: 'Mulhouse' },
    { '@type': 'City', name: 'Strasbourg' },
    { '@type': 'AdministrativeArea', name: 'Alsace' },
    { '@type': 'Country', name: 'France' },
  ],
  telephone: '03 67 26 69 16',
  service: [
    {
      '@type': 'Service',
      name: 'Automatisation IA',
      description: 'Automatisation des processus métier avec intelligence artificielle',
    },
    {
      '@type': 'Service',
      name: 'Agents IA',
      description: 'Développement d\'agents IA autonomes et intelligents',
    },
    {
      '@type': 'Service',
      name: 'Solutions IA sur mesure',
      description: 'Solutions d\'IA adaptées à vos besoins métier',
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

export default function AgenceIA() {
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
            <h1>Agence d&apos;automatisation IA et intelligence artificielle sur mesure</h1>
            <p className="qizuna-service-hero-subtitle">
              Développement de solutions IA, agents intelligents et automatisation métier pour PME &amp; ETI
            </p>
            <a href="#contact" className="qizuna-service-cta-button">
              Devis gratuit en 24h
            </a>
          </div>
        </section>

        {/* Problèmes + Solutions */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Pourquoi intégrer l&apos;IA dans votre entreprise ?</h2>
            <p>
              L&apos;intelligence artificielle n&apos;est plus réservée aux grandes entreprises. Chez Qizuna, nous développons des solutions IA concrètes et accessibles qui transforment vos processus métier — sans complexité inutile, sans effet de mode.
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Vos processus métier sont chronophages</h3>
                <p>Saisie manuelle, tri de documents, réponses répétitives, reporting... L&apos;IA automatise les tâches à faible valeur ajoutée pour que vos équipes se concentrent sur l&apos;essentiel.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vous avez besoin d&apos;intelligence décisionnelle</h3>
                <p>Vos données contiennent des insights précieux. Nous développons des solutions d&apos;analyse prédictive et de recommandation qui transforment vos données en décisions éclairées.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vous craignez la complexité de l&apos;IA</h3>
                <p>Nous gérons la complexité technique pour vous. Vous définissez le besoin métier, nous développons la solution IA adaptée, intégrée à vos outils existants, avec un accompagnement complet.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vous voulez garder le contrôle de vos données</h3>
                <p>Sécurité, conformité RGPD, hébergement européen. Vos données restent les vôtres. Nous développons des solutions IA respectueuses de votre confidentialité et de vos obligations réglementaires.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services IA */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos services IA et automatisation</h2>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Zap className="w-5 h-5" />
                </div>
                <h3>Automatisation IA des processus</h3>
                <p>
                  Automatisez vos processus métier avec l&apos;intelligence artificielle : extraction de données, classification de documents, génération de contenus, traitement automatique des emails. Nous identifions les tâches automatisables et développons les solutions adaptées.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Bot className="w-5 h-5" />
                </div>
                <h3>Agents IA autonomes</h3>
                <p>
                  Développement d&apos;agents IA capables d&apos;exécuter des tâches complexes de manière autonome : recherche d&apos;informations, prise de décision, interaction avec vos systèmes. Des assistants intelligents qui travaillent pour vous 24/7.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Brain className="w-5 h-5" />
                </div>
                <h3>Solutions IA sur mesure</h3>
                <p>
                  Chaque entreprise a des besoins IA différents. Nous développons des solutions adaptées à votre contexte métier : analyse de données, prédiction, optimisation, aide à la décision. <Link href="/logiciel-sur-mesure">En savoir plus sur nos logiciels métier</Link>.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Plug className="w-5 h-5" />
                </div>
                <h3>Intégration IA dans l&apos;existant</h3>
                <p>
                  Vous avez déjà des outils en place ? Nous intégrons l&apos;IA dans votre infrastructure existante via des APIs. CRM, ERP, outils métier — l&apos;IA vient enrichir vos systèmes sans les remplacer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cas d'usage IA */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Cas d&apos;usage et applications IA</h2>
            <p>
              L&apos;IA s&apos;applique à de nombreux domaines métier. Voici les cas d&apos;usage les plus fréquents que nous développons pour nos clients.
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3>Chatbots et assistants IA</h3>
                <p>Chatbots intelligents pour le support client 24/7, assistants IA pour vos équipes internes, FAQ dynamiques. Des interfaces conversationnelles qui comprennent vraiment les demandes.</p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3>Analyse prédictive</h3>
                <p>Prédictions et insights basés sur vos données : anticipation de la demande, détection d&apos;anomalies, scoring, segmentation. Transformez vos données historiques en avantage concurrentiel.</p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Repeat className="w-5 h-5" />
                </div>
                <h3>Automatisation RPA + IA</h3>
                <p>Automatisation des tâches répétitives augmentée par l&apos;IA : traitement de factures, saisie comptable, gestion documentaire, reporting automatique. L&apos;IA gère les exceptions que la RPA classique ne peut pas traiter.</p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3>Recommandations personnalisées</h3>
                <p>Moteurs de recommandation IA pour personnaliser l&apos;expérience utilisateur : suggestions de produits, contenus personnalisés, parcours adaptatifs. Augmentez l&apos;engagement et la conversion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projets IA */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos derniers projets IA</h2>
            <p>
              Voici des exemples concrets de solutions IA que nous avons développées pour nos clients.
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Chatbot IA pour support client</h3>
                <p>Assistant IA conversationnel pour une PME de services. Compréhension du langage naturel, accès à la base de connaissances, escalade automatique vers un humain quand nécessaire.</p>
                <p><strong>Résultat : -50% de tickets support traités manuellement</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Automatisation pour le secteur financier</h3>
                <p>Solution d&apos;automatisation du traitement de dossiers pour un cabinet de gestion. Extraction automatique de données, classification de documents, vérification de conformité.</p>
                <p><strong>Résultat : +70% de productivité sur le traitement des dossiers</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Agent IA pour gestion de projets</h3>
                <p>Agent IA autonome capable de gérer les tâches administratives d&apos;un chef de projet : planification, suivi d&apos;avancement, relances automatiques, génération de rapports.</p>
                <p><strong>Résultat : gain de 10h/semaine par chef de projet</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Analyse prédictive pour l&apos;industrie</h3>
                <p>Solution de maintenance prédictive pour une entreprise industrielle. Analyse des données capteurs, détection d&apos;anomalies, prédiction de pannes, alertes préventives.</p>
                <p><strong>Résultat : -30% de pannes non planifiées</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies IA */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Technologies et frameworks IA</h2>
            <p>
              Nous maîtrisons les technologies IA les plus avancées et les plus adaptées aux besoins des PME et ETI.
            </p>
            <h3>LLM &amp; NLP</h3>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">OpenAI / GPT</span>
              <span className="qizuna-tech-tag">Claude (Anthropic)</span>
              <span className="qizuna-tech-tag">Hugging Face</span>
              <span className="qizuna-tech-tag">LangChain</span>
              <span className="qizuna-tech-tag">RAG</span>
            </div>
            <h3>Machine Learning &amp; Data</h3>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">Python</span>
              <span className="qizuna-tech-tag">TensorFlow</span>
              <span className="qizuna-tech-tag">PyTorch</span>
              <span className="qizuna-tech-tag">Scikit-learn</span>
              <span className="qizuna-tech-tag">Pandas</span>
            </div>
            <h3>Infrastructure IA</h3>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">Docker</span>
              <span className="qizuna-tech-tag">AWS / OVH</span>
              <span className="qizuna-tech-tag">Vector DB</span>
              <span className="qizuna-tech-tag">API REST</span>
              <span className="qizuna-tech-tag">CI/CD</span>
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              Besoin d&apos;intégrer l&apos;IA dans une <Link href="/agence-developpement-web">application web</Link> ou un <Link href="/logiciel-sur-mesure">logiciel métier</Link> existant ? Nous pouvons développer la solution complète.
            </p>
          </div>
        </section>

        {/* Définition */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Qu&apos;est-ce qu&apos;une agence d&apos;automatisation IA ?</h2>
            <p>
              Une agence d&apos;automatisation IA est un prestataire spécialisé dans le développement et l&apos;intégration de solutions d&apos;intelligence artificielle au service des entreprises. Contrairement à un éditeur de logiciel qui propose un produit standard, une agence IA conçoit des solutions sur mesure adaptées à vos processus métier spécifiques.
            </p>
            <p>
              Chez Qizuna, notre approche combine expertise technique en intelligence artificielle et compréhension approfondie de vos enjeux métier. Nous ne déployons pas de l&apos;IA pour le plaisir de la technologie : chaque solution répond à un besoin concret — réduire les tâches répétitives, améliorer la prise de décision, ou créer de nouveaux services pour vos clients.
            </p>
            <p>
              Notre différence : nous sommes une agence de développement IA à taille humaine, certifiée Activateur France Num. Nous accompagnons nos clients de l&apos;identification des cas d&apos;usage jusqu&apos;à la mise en production, avec un suivi personnalisé et une transparence totale sur les coûts et les délais.
            </p>
          </div>
        </section>

        {/* Section locale */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Agence IA en Alsace, proche de Strasbourg et Mulhouse</h2>
            <p>
              Basée à Pfastatt près de Mulhouse, Qizuna est votre agence intelligence artificielle de proximité en Alsace. Nous intervenons sur l&apos;ensemble du territoire, avec une présence forte dans le Grand Est : Mulhouse, Colmar, Strasbourg, Belfort et au-delà.
            </p>
            <p>
              La proximité géographique facilite la collaboration : ateliers de cadrage en présentiel, démonstrations régulières, formation de vos équipes sur site. Pour les entreprises alsaciennes qui cherchent une agence IA à Strasbourg ou à Mulhouse, nous proposons un accompagnement de bout en bout, du diagnostic IA gratuit jusqu&apos;au déploiement en production.
            </p>
            <p>
              Notre connaissance du tissu économique local — PME industrielles, ETI du Haut-Rhin, startups strasbourgeoises — nous permet de proposer des solutions IA adaptées aux réalités et aux budgets des entreprises de la région. <Link href="/agence-developpement-web-mulhouse">En savoir plus sur notre implantation à Mulhouse</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <ServiceFAQ items={faqItems} title="Questions fréquentes sur l'IA" />

        {/* Contact */}
        <Contact contactInfo={contactInfo} />
      </main>
      <Footer data={footerData} />
      <ScrollButton />
      <ScrollAnimations />
    </div>
  )
}
