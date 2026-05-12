import Link from 'next/link'
import { Layers, Rocket, Shield, TrendingUp, Search, PenTool, Code, Wrench, Users, CreditCard, BarChart3, Globe } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollButton from '@/components/layout/ScrollButton'
import ScrollAnimations from '@/components/layout/ScrollAnimations'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import Contact from '@/components/sections/Contact'
import { navLinks, contactInfo, footerData } from '@/lib/data'
import '../service-page.css'

export const metadata = {
  title: 'Agence développement SaaS sur mesure | Qizuna',
  description: 'Agence développement SaaS sur mesure à Mulhouse en Alsace. Plateformes scalables pour startups et PME, architecture robuste. Devis gratuit en 24h.',
  alternates: { canonical: 'https://qizuna.fr/agence-saas' },
  openGraph: {
    title: 'Agence développement SaaS sur mesure | Qizuna',
    url: 'https://qizuna.fr/agence-saas',
  },
}

const faqItems = [
  {
    question: 'Combien coûte le développement d\'une SaaS sur mesure ?',
    answer: "Le coût dépend du périmètre fonctionnel et de la complexité technique. Un MVP SaaS démarre à partir de 20 000 €. Une plateforme complète avec multi-tenant, paiement et tableau de bord avancé se situe entre 40 000 € et 100 000 €. Nous établissons un devis détaillé et gratuit après cadrage.",
  },
  {
    question: 'Quel est le délai pour développer un MVP SaaS ?',
    answer: "Un MVP SaaS fonctionnel prend entre 6 et 10 semaines. Il permet de valider votre idée auprès de vos premiers utilisateurs avant d'investir dans une version complète. Nous travaillons en sprints agiles pour livrer de la valeur rapidement.",
  },
  {
    question: 'Vous faites du support après livraison ?',
    answer: "Oui. Nous proposons des contrats de maintenance et d'accompagnement post-livraison : corrections, nouvelles fonctionnalités, scaling infrastructure, monitoring. Votre SaaS évolue avec vos utilisateurs.",
  },
  {
    question: 'Comment gérez-vous la scalabilité ?',
    answer: "Nous concevons dès le départ une architecture pensée pour scaler : multi-tenant, microservices, base de données optimisée, infrastructure cloud auto-scalable. Votre SaaS supporte la croissance sans refonte.",
  },
  {
    question: 'Pouvez-vous m\'aider avec le go-to-market ?',
    answer: "Notre cœur de métier est le développement technique, mais nous vous accompagnons sur les aspects produit : analytics, onboarding utilisateur, intégration de paiement, landing pages. Pour le marketing, nous pouvons vous orienter vers des partenaires spécialisés.",
  },
  {
    question: 'Avez-vous des références SaaS ?',
    answer: "Oui. Nous avons développé plusieurs plateformes SaaS dans des secteurs variés : RH, gestion de projets, B2B, services. Nous pouvons vous présenter des cas concrets et les résultats obtenus lors de notre premier échange.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Qizuna',
  description: 'Agence développement SaaS sur mesure',
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
      name: 'Développement SaaS',
      description: 'Création de plateformes SaaS scalables et performantes',
    },
    {
      '@type': 'Service',
      name: 'Architecture SaaS',
      description: 'Architecture multi-tenant, scalabilité, sécurité',
    },
    {
      '@type': 'Service',
      name: 'MVP SaaS',
      description: 'Développement rapide de MVP pour valider votre idée',
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

export default function AgenceSaaS() {
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
            <h1>Agence développement SaaS sur mesure</h1>
            <p className="qizuna-service-hero-subtitle">
              Plateformes SaaS scalables, architecture robuste, sans dette technique
            </p>
            <a href="#contact" className="qizuna-service-cta-button">
              Devis gratuit en 24h
            </a>
          </div>
        </section>

        {/* Problèmes + Solutions */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Pourquoi développer une SaaS sur mesure ?</h2>
            <p>
              Vous avez une idée de produit SaaS ? Transformer cette idée en plateforme rentable demande une expertise technique solide et une approche produit rigoureuse. Chez Qizuna, nous accompagnons les créateurs de SaaS de l&apos;idée au scaling.
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Vous avez une idée de produit SaaS</h3>
                <p>Nous la transformons en plateforme fonctionnelle. Du concept au MVP, puis du MVP à la version de production — nous vous accompagnons à chaque étape avec une approche lean et itérative.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vous craignez les problèmes de scalabilité</h3>
                <p>Architecture multi-tenant, infrastructure cloud auto-scalable, base de données optimisée. Nous concevons dès le départ une plateforme qui supporte la croissance sans refonte majeure.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vous avez besoin de rapidité</h3>
                <p>MVP en 6 à 10 semaines pour valider votre marché. Itérations agiles basées sur le feedback utilisateur. Vous lancez vite, vous apprenez vite, vous ajustez vite.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Vous cherchez un partenaire technique fiable</h3>
                <p>Pas de lock-in, code source livré, documentation complète. Vous pouvez internaliser votre équipe tech quand vous êtes prêt. Nous restons disponibles pour accompagner la transition.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services SaaS */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos services de développement SaaS</h2>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Layers className="w-5 h-5" />
                </div>
                <h3>Développement SaaS complet</h3>
                <p>
                  De l&apos;idée à la mise en marché. Nous développons votre plateforme SaaS de A à Z : inscription, onboarding, tableau de bord, gestion des abonnements, API, back-office admin. Une stack technique solide pour un produit prêt à vendre.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3>MVP SaaS en 6-10 semaines</h3>
                <p>
                  Validez votre idée rapidement avec un MVP fonctionnel. Nous identifions les fonctionnalités essentielles, développons la version minimale et vous aidons à la mettre entre les mains de vos premiers utilisateurs. Itérations rapides basées sur le feedback réel.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Shield className="w-5 h-5" />
                </div>
                <h3>Architecture SaaS multi-tenant</h3>
                <p>
                  Architecture multi-tenant sécurisée, isolation des données par client, gestion des rôles et permissions, scalabilité horizontale. Nous concevons des architectures qui supportent des milliers d&apos;utilisateurs sans compromis sur les performances.
                </p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3>Évolution et scaling</h3>
                <p>
                  Votre SaaS grandit ? Nous l&apos;accompagnons : nouvelles fonctionnalités, optimisation des performances, scaling infrastructure, intégrations tierces. Votre produit évolue avec votre marché.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Processus SaaS */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Notre processus de développement SaaS</h2>
            <p>
              Du concept au scaling, notre processus est conçu pour minimiser les risques et maximiser la vitesse de mise sur le marché.
            </p>
            <div className="qizuna-avantages-list">
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3>1. Validation (1-2 semaines)</h3>
                  <p>Analyse de votre idée, étude du marché cible, définition du périmètre MVP. Nous identifions les fonctionnalités qui apportent le plus de valeur à vos premiers utilisateurs. Phase gratuite et sans engagement.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <h3>2. MVP (6-10 semaines)</h3>
                  <p>Développement du MVP avec les fonctionnalités essentielles. Architecture pensée pour évoluer, design centré utilisateur, intégration paiement si nécessaire. Prêt pour vos premiers clients.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3>3. Itérations (continu)</h3>
                  <p>Sprints de 2 semaines basés sur le feedback utilisateur et les métriques produit. Nouvelles fonctionnalités, corrections, améliorations UX. Votre SaaS s&apos;améliore en continu.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3>4. Scaling</h3>
                  <p>Optimisation des performances, scaling infrastructure, architecture microservices si nécessaire. Votre SaaS supporte la croissance sans rupture de service.</p>
                </div>
              </div>
              <div className="qizuna-avantage-item">
                <div className="qizuna-avantage-icon">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3>5. Go-to-market</h3>
                  <p>Landing page optimisée, analytics produit, onboarding automatisé, intégration des outils marketing. Tout ce qu&apos;il faut pour convertir vos visiteurs en clients payants.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités SaaS */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Ce que nous intégrons dans votre SaaS</h2>
            <p>
              Une SaaS performante nécessite des briques techniques solides. Voici les fonctionnalités que nous intégrons systématiquement.
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Users className="w-5 h-5" />
                </div>
                <h3>Multi-tenant et gestion des utilisateurs</h3>
                <p>Inscription, authentification sécurisée, gestion des rôles et permissions, espaces isolés par client. SSO et OAuth2 si nécessaire.</p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3>Paiement et abonnements</h3>
                <p>Intégration Stripe, gestion des plans tarifaires, facturation automatique, périodes d&apos;essai, gestion des impayés. Tout le cycle de vie de l&apos;abonnement.</p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3>Tableaux de bord et analytics</h3>
                <p>Dashboards utilisateurs, analytics produit (churn, MRR, activation), back-office admin complet. Les métriques pour piloter votre SaaS efficacement.</p>
              </div>
              <div className="qizuna-service-card-item">
                <div className="qizuna-avantage-icon">
                  <Globe className="w-5 h-5" />
                </div>
                <h3>API et intégrations</h3>
                <p>API REST documentée, webhooks, intégrations tierces (Slack, Zapier, CRM...). Votre SaaS s&apos;intègre dans l&apos;écosystème de vos clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projets SaaS */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Nos derniers projets SaaS</h2>
            <p>
              Voici des exemples concrets de plateformes SaaS que nous avons développées.
            </p>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>SaaS de gestion RH</h3>
                <p>Plateforme multi-tenant pour la gestion des congés, notes de frais et entretiens annuels. Architecture scalable, intégration paie, tableau de bord RH.</p>
                <p><strong>Résultat : 50 entreprises clientes en 6 mois</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Plateforme SaaS B2B de gestion de projets</h3>
                <p>Outil collaboratif avec planning, suivi de temps, facturation intégrée et reporting automatique. Intégration Slack et Zapier.</p>
                <p><strong>Résultat : 1 000+ utilisateurs actifs en 6 mois</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>SaaS d&apos;automatisation marketing</h3>
                <p>Plateforme d&apos;automatisation des campagnes email et SMS. Segmentation avancée, scénarios conditionnels, analytics en temps réel.</p>
                <p><strong>Résultat : ARR de 100k€ en 12 mois</strong></p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Portail SaaS pour le secteur immobilier</h3>
                <p>Plateforme de gestion de biens immobiliers avec estimation automatique, matching acheteur/vendeur et signature électronique.</p>
                <p><strong>Résultat : churn rate &lt; 5% après 12 mois</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Technologies et frameworks SaaS</h2>
            <p>
              Nous utilisons des technologies éprouvées et adaptées au développement de plateformes SaaS scalables.
            </p>
            <h3>Frontend</h3>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">React</span>
              <span className="qizuna-tech-tag">Next.js</span>
              <span className="qizuna-tech-tag">TypeScript</span>
              <span className="qizuna-tech-tag">Tailwind CSS</span>
            </div>
            <h3>Backend</h3>
            <div className="qizuna-tech-tags">
              <span className="qizuna-tech-tag">Node.js</span>
              <span className="qizuna-tech-tag">PostgreSQL</span>
              <span className="qizuna-tech-tag">Redis</span>
              <span className="qizuna-tech-tag">Stripe API</span>
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
              Besoin d&apos;intégrer de l&apos;<Link href="/agence-ia">IA dans votre SaaS</Link> ou de développer un <Link href="/logiciel-sur-mesure">logiciel métier</Link> complémentaire ? Nous pouvons développer l&apos;ensemble.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <ServiceFAQ items={faqItems} title="Questions fréquentes sur les SaaS" />

        {/* Contact */}
        <Contact contactInfo={contactInfo} />
      </main>
      <Footer data={footerData} />
      <ScrollButton />
      <ScrollAnimations />
    </div>
  )
}
