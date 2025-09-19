import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  return (
    <>
      {/* Footer Simple */}
      <footer className="qizuna-footer-simple">
        <div className="qizuna-footer-simple-content">
          <div className="qizuna-footer-simple-logo">
            <img src="/logo.webp" alt="Qizuna" className="qizuna-logo-img" />
          </div>
          
          <div className="qizuna-footer-simple-links">
            <button 
              onClick={() => setIsLegalModalOpen(true)}
              className="qizuna-footer-link"
            >
              Mentions légales
            </button>
            <a href="mailto:hello@qizuna.fr" className="qizuna-footer-link">
              hello@qizuna.fr
            </a>
            <span className="qizuna-footer-copyright">
              &copy; 2025 Qizuna SAS
            </span>
            
            {/* LinkedIn Links Section */}
            <div className="qizuna-linkedin-title">Suivez-nous</div>
              <div className="qizuna-linkedin-links">
                <a 
                  href="https://www.linkedin.com/in/mathieu-capon-56a5561a0/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="qizuna-linkedin-link"
                >
                  <svg className="qizuna-linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>Mathieu Capon</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/qizuna/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="qizuna-linkedin-link qizuna-linkedin-company"
                >
                  <svg className="qizuna-linkedin-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>QIZUNA</span>
                </a>
              </div>
          </div>
        </div>
      </footer>

      {/* Modale Mentions Légales */}
      {isLegalModalOpen && (
        <div className="qizuna-modal-overlay" onClick={() => setIsLegalModalOpen(false)}>
          <div className="qizuna-modal" onClick={(e) => e.stopPropagation()}>
            <div className="qizuna-modal-header">
              <h2>Mentions Légales</h2>
              <button 
                className="qizuna-modal-close"
                onClick={() => setIsLegalModalOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="qizuna-modal-content">
              <div className="qizuna-legal-section">
                <h3>En vigueur au 14/05/2024</h3>
                <p>
                  Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l'"Utilisateur", du site https://www.qizuna.fr/, ci-après le "Site", les présentes mentions légales.
                </p>
                <p>
                  La connexion et la navigation sur le Site par l'Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».
                </p>
              </div>

              <div className="qizuna-legal-section">
                <h3>ARTICLE 1 - L'EDITEUR</h3>
                <p>
                  L'édition du Site est assurée par <strong>Qizuna SAS</strong> au capital de 4000 euros, immatriculée au Registre du Commerce et des Sociétés de Mulhouse sous le numéro <strong>902608728</strong> dont le siège social est situé au <strong>15 RUE DE L'OBERFELD 68760 WILLER-SUR-THUR</strong>.
                </p>
                <ul>
                  <li>Numéro de téléphone : <strong>03 67 26 69 16</strong></li>
                  <li>Adresse e-mail : <strong>hello@qizuna.fr</strong></li>
                  <li>N° de TVA intracommunautaire : <strong>FR95902608728</strong></li>
                  <li>Le Directeur de la publication est <strong>Mathieu Capon</strong>, ci-après l'"Editeur"</li>
                </ul>
              </div>

              <div className="qizuna-legal-section">
                <h3>ARTICLE 2 - L'HEBERGEUR</h3>
                <p>
                  L'hébergeur du Site est la société <strong>Carrd</strong>, dont le siège social est situé au <strong>DMCA Registered Agent 231 Public Square Suite 300 PMB 12 Franklin, TN 37064</strong>.
                </p>
                <ul>
                  <li>Numéro de téléphone : <strong>615 645 2470</strong></li>
                  <li>Adresse e-mail de contact : <strong>privacy@carrd.co</strong></li>
                </ul>
              </div>

              <div className="qizuna-legal-section">
                <h3>ARTICLE 3 - ACCES AU SITE</h3>
                <p>
                  Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découler d'une nécessité de maintenance.
                </p>
                <p>
                  En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.
                </p>
              </div>

              <div className="qizuna-legal-section">
                <h3>ARTICLE 4 - COLLECTE DES DONNEES</h3>
                <p>
                  Le Site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
                </p>
                <p>
                  En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur exerce ce droit :
                </p>
                <ul>
                  <li>Par mail à l'adresse email <strong>hello@qizuna.fr</strong></li>
                  <li>Via un formulaire de contact</li>
                </ul>
                <p>
                  Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l'Editeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;