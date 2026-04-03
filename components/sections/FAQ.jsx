'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const faqItems = [
  {
    question: "Pourquoi faire appel à une agence de développement web plutôt qu'un freelance ?",
    answer: "Une agence comme Qizuna combine plusieurs expertises (développement, architecture, sécurité, gestion de projet) dans une seule relation. Vous avez un interlocuteur unique, mais une équipe derrière. Et contrairement à un freelance seul, votre projet ne s'arrête pas si une personne est indisponible.",
  },
  {
    question: 'Combien coûte un développement web sur mesure ?',
    answer: "Chaque projet est différent. Un site vitrine sur mesure démarre autour de quelques milliers d'euros. Une application web métier ou un logiciel complexe peut représenter un investissement plus important. Nous établissons toujours un devis détaillé et transparent après un premier échange gratuit — sans engagement.",
  },
  {
    question: 'Quels délais pour créer une application web ou mobile ?',
    answer: "Un projet simple (site vitrine, landing page) peut être livré en 3 à 6 semaines. Une application web ou mobile métier prend généralement 2 à 6 mois selon la complexité. Nous travaillons en méthode agile : vous voyez les avancées à chaque sprint, sans attendre la livraison finale.",
  },
  {
    question: "Quelle différence entre un logiciel sur mesure et une solution SaaS du marché ?",
    answer: "Un SaaS du marché est conçu pour tout le monde — donc pour personne en particulier. Un logiciel sur mesure est construit pour vos processus, vos contraintes, vos utilisateurs. Il n'y a pas de fonctionnalités inutiles, pas de limitations arbitraires, et vous n'êtes dépendant d'aucun éditeur.",
  },
  {
    question: "Travaillez-vous avec des entreprises hors d'Alsace ?",
    answer: "Oui. Nous sommes basés à Pfastatt (68), mais nous travaillons avec des clients partout en France. Les échanges se font en visio, avec des points réguliers. La distance n'a jamais été un frein à la qualité du suivi.",
  },
]

const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className={`qizuna-faq-item ${isOpen ? 'qizuna-faq-item--open' : ''}`}>
      <button
        className="qizuna-faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3>{item.question}</h3>
        <ChevronDown className={`w-5 h-5 qizuna-faq-chevron ${isOpen ? 'qizuna-faq-chevron--open' : ''}`} />
      </button>
      <div className={`qizuna-faq-answer ${isOpen ? 'qizuna-faq-answer--open' : ''}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="qizuna-section qizuna-faq">
      <div className="qizuna-section-content">
        <div className="qizuna-section-header">
          <h2 className="qizuna-section-title">Questions fréquentes</h2>
          <p className="qizuna-section-subtitle">
            Tout ce que vous voulez savoir avant de nous contacter
          </p>
        </div>

        <div className="qizuna-faq-list">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
