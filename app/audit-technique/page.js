import Link from 'next/link'
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ScrollButton from '@/components/layout/ScrollButton'
import ScrollAnimations from '@/components/layout/ScrollAnimations'
import ServiceFAQ from '@/components/sections/ServiceFAQ'
import Contact from '@/components/sections/Contact'
import { navLinks, contactInfo, footerData } from '@/lib/data'
import '../service-page.css'

export const metadata = {
  title: 'Audit technique application web et mobile | Qizuna',
  description: "Audit technique d'application web et mobile à Mulhouse en Alsace. Performance, sécurité, dette technique, architecture. Rapport détaillé et plan d'action.",
  alternates: { canonical: 'https://qizuna.fr/audit-technique' },
  openGraph: {
    title: 'Audit technique application web et mobile | Qizuna',
    url: 'https://qizuna.fr/audit-technique',
  },
}

const faqItems = [
  {
    question: "Qu'est-ce qu'un audit technique et à quoi ça sert ?",
    answer: "Un audit technique est une analyse approfondie de votre application ou logiciel existant. Il permet d'identifier les problèmes de performance, les failles de sécurité, la dette technique accumulée et les risques architecturaux. Le résultat est un rapport détaillé avec des recommandations priorisées et un plan d'action chiffré.",
  },
  {
    question: 'Dans quels cas faut-il réaliser un audit technique ?',
    answer: "Un audit est recommandé avant une refonte, quand l'application devient lente ou instable, avant une levée de fonds (due diligence technique), lors d'un changement d'équipe de développement, ou simplement pour avoir une vision claire de l'état de votre patrimoine logiciel.",
  },
  {
    question: 'Combien de temps dure un audit technique ?',
    answer: "Entre 5 et 15 jours selon la taille et la complexité de l'application. Nous vous remettons un rapport écrit avec une présentation orale des conclusions.",
  },
  {
    question: "Que contient le rapport d'audit ?",
    answer: "Le rapport comprend : une synthèse exécutive (accessible aux non-techniciens), une analyse détaillée par domaine (performance, sécurité, architecture, qualité du code), une matrice de risques, et un plan d'action priorisé avec estimations de charge.",
  },
  {
    question: "Pouvez-vous aussi réaliser les corrections après l'audit ?",
    answer: "Oui. L'audit peut être suivi d'une mission de remédiation. Nous établissons un devis séparé pour les corrections, en priorisant les actions à fort impact. Vous restez libre de confier les corrections à votre équipe interne si vous le souhaitez.",
  },
]

export default function AuditTechnique() {
  return (
    <div className="qizuna-container">
      <Navigation navLinks={navLinks} />
      <main id="main-content" className="qizuna-service-page">
        <section className="qizuna-service-hero">
          <div className="qizuna-section-content">
            <h1>Audit technique — identifiez et corrigez les failles de votre application</h1>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Pourquoi réaliser un audit technique ?</h2>
            <p>
              La dette technique s&apos;accumule silencieusement. Un code qui fonctionnait il y a deux ans peut aujourd&apos;hui ralentir votre application, exposer des failles de sécurité ou rendre chaque nouvelle fonctionnalité de plus en plus coûteuse à développer. Un audit technique permet de faire le point objectivement.
            </p>
            <p>
              Que vous prépariez une refonte, une levée de fonds ou un changement d&apos;équipe technique, un audit vous donne une vision claire de l&apos;état de votre application et un plan d&apos;action concret pour corriger les problèmes identifiés. En tant qu&apos;<Link href="/">agence de développement web</Link>, nous avons l&apos;expertise pour évaluer tous les aspects de votre application.
            </p>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Ce que couvre notre audit</h2>
            <div className="qizuna-service-cards">
              <div className="qizuna-service-card-item">
                <h3>Performance et temps de chargement</h3>
                <p>Analyse des temps de réponse, optimisation des requêtes, audit des assets front-end, mesure des Core Web Vitals. Nous identifions les goulots d&apos;étranglement qui ralentissent votre application.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Sécurité et vulnérabilités</h3>
                <p>Détection des failles OWASP Top 10, analyse des dépendances vulnérables, revue des mécanismes d&apos;authentification et d&apos;autorisation, vérification du chiffrement des données.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Architecture et dette technique</h3>
                <p>Évaluation de l&apos;architecture logicielle, identification des couplages forts, analyse de la modularité du code, mesure de la dette technique accumulée.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Qualité du code et maintenabilité</h3>
                <p>Revue de code statique, analyse de la couverture de tests, évaluation de la documentation, vérification des bonnes pratiques de développement.</p>
              </div>
              <div className="qizuna-service-card-item">
                <h3>Infrastructure et hébergement cloud</h3>
                <p>Audit de la configuration serveur, vérification des sauvegardes, analyse des coûts d&apos;hébergement, recommandations d&apos;optimisation infrastructure.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="qizuna-service-section">
          <div className="qizuna-section-content">
            <h2>Notre livrable</h2>
            <p>À l&apos;issue de l&apos;audit, nous vous remettons un rapport complet comprenant :</p>
            <div className="qizuna-livrable-list">
              <div className="qizuna-livrable-item">
                <FileText className="w-5 h-5 qizuna-livrable-icon" />
                <p><strong>Synthèse exécutive</strong> — un résumé clair et accessible aux non-techniciens de l&apos;état de votre application.</p>
              </div>
              <div className="qizuna-livrable-item">
                <AlertTriangle className="w-5 h-5 qizuna-livrable-icon" />
                <p><strong>Recommandations priorisées</strong> — chaque problème identifié est classé par criticité et accompagné d&apos;une recommandation concrète.</p>
              </div>
              <div className="qizuna-livrable-item">
                <CheckCircle className="w-5 h-5 qizuna-livrable-icon" />
                <p><strong>Plan d&apos;action chiffré</strong> — un planning de remédiation avec estimations de charge pour chaque action recommandée.</p>
              </div>
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              Après l&apos;audit, nous pouvons assurer la <Link href="/developpement-logiciel-sur-mesure">refonte de votre logiciel</Link> ou la <Link href="/developpement-application-mobile">refonte de votre application mobile</Link> si nécessaire.
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
