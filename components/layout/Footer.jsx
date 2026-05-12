'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import './Footer.css'

const Footer = ({ data = {} }) => {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false)
  const modalRef = useRef(null)
  const triggerRef = useRef(null)

  const closeModal = useCallback(() => {
    setIsLegalModalOpen(false)
    triggerRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!isLegalModalOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal()
        return
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    modalRef.current?.querySelector('button')?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isLegalModalOpen, closeModal])

  const hq = data.headquartersAddress || {}
  const host = data.hostingProvider || {}

  return (
    <>
      <footer className="qizuna-footer">
        <div className="qizuna-footer-top">
          <div className="qizuna-footer-col">
            <img src="/logo.webp" alt="Qizuna" className="qizuna-footer-logo" loading="lazy" />
            <address className="qizuna-footer-address">
              {hq.street || "15 rue de l'Oberfeld"}<br />
              {hq.postalCode || '68760'} {hq.city || 'Willer-sur-Thur'}<br />
              Tél : <a href={`tel:${(data.phone || '03 67 26 69 16').replace(/\s/g, '')}`}>{data.phone || '03 67 26 69 16'}</a>
            </address>
          </div>

          <div className="qizuna-footer-col">
            <h3 className="qizuna-footer-heading">Liens</h3>
            <nav className="qizuna-footer-nav">
              <a href={`mailto:${data.email || 'hello@qizuna.fr'}`}>{data.email || 'hello@qizuna.fr'}</a>
              <button
                ref={triggerRef}
                onClick={() => setIsLegalModalOpen(true)}
                className="qizuna-footer-nav-btn"
              >
                Mentions légales
              </button>
            </nav>
          </div>

          <div className="qizuna-footer-col">
            <h3 className="qizuna-footer-heading">Suivez-nous</h3>
            <div className="qizuna-linkedin-links">
              <a
                href={data.linkedinPersonal || 'https://www.linkedin.com/in/mathieu-capon-56a5561a0/'}
                target="_blank"
                rel="noopener noreferrer"
                className="qizuna-linkedin-link"
              >
                <svg className="qizuna-linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>{data.director || 'Mathieu Capon'}</span>
              </a>
              <a
                href={data.linkedinCompany || 'https://www.linkedin.com/company/qizuna/'}
                target="_blank"
                rel="noopener noreferrer"
                className="qizuna-linkedin-link qizuna-linkedin-company"
              >
                <svg className="qizuna-linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>QIZUNA</span>
              </a>
            </div>
          </div>
        </div>

        <div className="qizuna-footer-bottom">
          <span>&copy; {new Date().getFullYear()} {data.companyName || 'Qizuna SAS'} — Tous droits réservés</span>
        </div>
      </footer>

      {isLegalModalOpen && (
        <div className="qizuna-modal-overlay" onClick={closeModal}>
          <div
            className="qizuna-modal"
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="qizuna-modal-header">
              <h2 id="legal-modal-title">Mentions légales</h2>
              <button
                className="qizuna-modal-close"
                onClick={closeModal}
                aria-label="Fermer"
              >
                &times;
              </button>
            </div>
            <div className="qizuna-modal-content">
              <div className="qizuna-legal-section">
                <h3>En vigueur au {data.legalNoticeDate || '14/05/2024'}</h3>
                <p>
                  Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l&apos;&quot;Utilisateur&quot;, du site https://www.qizuna.fr/, ci-après le &quot;Site&quot;, les présentes mentions légales.
                </p>
                <p>
                  La connexion et la navigation sur le Site par l&apos;Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
                </p>
              </div>

              <div className="qizuna-legal-section">
                <h3>ARTICLE 1 - L&apos;ÉDITEUR</h3>
                <p>
                  L&apos;édition du Site est assurée par <strong>{data.companyName || 'Qizuna SAS'}</strong> au capital de {data.capital || '4000 euros'}, immatriculée au Registre du Commerce et des Sociétés de Mulhouse sous le numéro <strong>{data.rcs || '902608728'}</strong> dont le siège social est situé au <strong>{hq.street ? `${hq.street} ${hq.postalCode} ${hq.city}`.toUpperCase() : '15 RUE DE L\'OBERFELD 68760 WILLER-SUR-THUR'}</strong>.
                </p>
                <ul>
                  <li>Numéro de téléphone : <strong>{data.phone || '03 67 26 69 16'}</strong></li>
                  <li>Adresse e-mail : <strong>{data.email || 'hello@qizuna.fr'}</strong></li>
                  <li>N° de TVA intracommunautaire : <strong>{data.vatNumber || 'FR95902608728'}</strong></li>
                  <li>Le Directeur de la publication est <strong>{data.director || 'Mathieu Capon'}</strong>, ci-après l&apos;&quot;Éditeur&quot;</li>
                </ul>
              </div>

              <div className="qizuna-legal-section">
                <h3>ARTICLE 2 - L&apos;HÉBERGEUR</h3>
                <p>
                  L&apos;hébergeur du Site est la société <strong>{host.name || 'Carrd'}</strong>, dont le siège social est situé au <strong>{host.address || 'DMCA Registered Agent 231 Public Square Suite 300 PMB 12 Franklin, TN 37064'}</strong>.
                </p>
              </div>

              <div className="qizuna-legal-section">
                <h3>ARTICLE 3 - ACCÈS AU SITE</h3>
                <p>
                  Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découler d&apos;une nécessité de maintenance.
                </p>
                <p>
                  En cas de modification, interruption ou suspension du Site, l&apos;Éditeur ne saurait être tenu responsable.
                </p>
              </div>

              <div className="qizuna-legal-section">
                <h3>ARTICLE 4 - COLLECTE DES DONNÉES</h3>
                <p>
                  Le Site assure à l&apos;Utilisateur une collecte et un traitement d&apos;informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés.
                </p>
                <p>
                  En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l&apos;Utilisateur dispose d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition de ses données personnelles. L&apos;Utilisateur exerce ce droit :
                </p>
                <ul>
                  <li>Par mail à l&apos;adresse email <strong>{data.email || 'hello@qizuna.fr'}</strong></li>
                  <li>Via un formulaire de contact</li>
                </ul>
                <p>
                  Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l&apos;Éditeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer
