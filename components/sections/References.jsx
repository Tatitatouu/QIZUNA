'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './References.css'

const References = ({ references = [] }) => {
  const colSize = Math.ceil(references.length / 3)
  const leftReferences = references.slice(0, colSize)
  const middleReferences = references.slice(colSize, colSize * 2)
  const rightReferences = references.slice(colSize * 2)

  const duplicatedLeftRefs = [...leftReferences, ...leftReferences, ...leftReferences]
  const duplicatedMiddleRefs = [...middleReferences, ...middleReferences, ...middleReferences]
  const duplicatedRightRefs = [...rightReferences, ...rightReferences, ...rightReferences]

  const cardHeight = 100
  const gap = 20
  const totalHeightPerCard = cardHeight + gap
  const distance = totalHeightPerCard * colSize
  const duration = 18

  const handleImageError = (e) => {
    e.target.style.display = 'none'
    if (e.target.nextSibling) {
      e.target.nextSibling.style.display = 'flex'
    }
  }

  const renderReferenceCard = (reference, index, prefix) => {
    const card = (
      <motion.div
        className="qizuna-reference-card"
        whileHover={{ scale: 1.08, zIndex: 10 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <div className="qizuna-reference-logo">
          <img
            src={reference.logo}
            alt={reference.alt}
            onError={handleImageError}
          />
          <div className="qizuna-logo-placeholder" style={{ display: 'none' }}>
            {reference.name}
          </div>
        </div>
      </motion.div>
    )

    if (reference.link) {
      return (
        <a
          key={`${prefix}-${reference.name}-${index}`}
          href={reference.link}
          target="_blank"
          rel="noopener noreferrer"
          className="qizuna-reference-link"
          aria-label={`Visiter ${reference.name}`}
        >
          {card}
        </a>
      )
    }

    return (
      <div key={`${prefix}-${reference.name}-${index}`}>
        {card}
      </div>
    )
  }

  return (
    <section className="qizuna-references">
      <div className="qizuna-section-content">
        <div className="qizuna-section-header qizuna-references-header">
          <motion.h2
            className="qizuna-section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nos réalisations
          </motion.h2>
          <p className="qizuna-section-subtitle">Ils nous ont fait confiance pour leur transformation numérique</p>
        </div>

        <div className="qizuna-references-ticker-container">
          {/* Premiere colonne - DESCEND */}
          <div className="qizuna-references-ticker">
            <div
              className="qizuna-references-ticker-content ticker-down"
              style={{ '--ticker-distance': `${distance}px`, '--ticker-duration': `${duration}s` }}
            >
              {duplicatedLeftRefs.map((reference, index) =>
                renderReferenceCard(reference, index, 'left')
              )}
            </div>
          </div>

          {/* Deuxieme colonne - MONTE */}
          <div className="qizuna-references-ticker">
            <div
              className="qizuna-references-ticker-content ticker-up"
              style={{ '--ticker-distance': `${distance}px`, '--ticker-duration': `${duration}s` }}
            >
              {duplicatedMiddleRefs.map((reference, index) =>
                renderReferenceCard(reference, index, 'middle')
              )}
            </div>
          </div>

          {/* Troisieme colonne - DESCEND */}
          <div className="qizuna-references-ticker">
            <div
              className="qizuna-references-ticker-content ticker-down"
              style={{ '--ticker-distance': `${distance}px`, '--ticker-duration': `${duration}s` }}
            >
              {duplicatedRightRefs.map((reference, index) =>
                renderReferenceCard(reference, index, 'right')
              )}
            </div>
          </div>
        </div>

        <div className="qizuna-case-studies">
          <div className="qizuna-case-study">
            <h3>InMemorium : une application métier pensée pour les professionnels du funéraire</h3>
            <p>
              Sonia et son équipe avaient besoin d&apos;un outil de gestion interne adapté à leur secteur.
              Nous avons conçu InMemorium de A à Z : UX, développement, déploiement. Résultat : un outil
              intuitif, adopté immédiatement par les équipes, sans formation lourde.
            </p>
          </div>
          <div className="qizuna-case-study">
            <h3>Tech Eaux Énergies : un logiciel sur mesure pour un métier complexe</h3>
            <p>
              Cédric avait une demande technique pointue, avec des contraintes métier que les solutions
              du marché ne couvraient pas. Nous avons développé un logiciel sur mesure qui s&apos;adapte
              exactement à leurs processus. Livré dans les délais, maintenu et évolutif.
            </p>
          </div>
        </div>

        <div className="qizuna-section-cta">
          <a href="#contact" className="qizuna-btn-primary">
            <span>Rejoignez-les</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default References
