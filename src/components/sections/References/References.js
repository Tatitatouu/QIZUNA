import React from 'react';
import { motion } from 'framer-motion';
import './References.css';

const References = () => {
  const references = [
    { name: "Eneregie 68", logo: "/eneregie68.webp", alt: "Eneregie 68", link: "https://eneregie68.com" },
    { name: "Systemo", logo: "/systemo.webp", alt: "Systemo", link: "https://systemo.fr/?utm_source=gmb" },
    { name: "Willer-sur-Thur", logo: "/willer-sur-thur.webp", alt: "Commune de Willer-sur-Thur", link: "https://www.willersurthur.fr/" },
    { name: "Tech Eaux", logo: "/tech-eaux.webp", alt: "Tech Eaux Energies", link: "https://www.tech-eaux-energies.fr/" },
    { name: "Pat Patrol", logo: "/pat-patrol.webp", alt: "Pat Patrol - Le gardien de votre patrimoine", link: "https://www.patpatrol.com/" },
    { name: "Frida", logo: "/les-delices-de-frida.webp", alt: "Frida - Boulangerie Pâtisserie Les Délices de Frida", link: "https://lesdelicesdefrida.fr/" },
    { name: "Autopôle", logo: "/autopole.webp", alt: "Autopôle", link: "https://autopole-blondel.fr//" },
    { name: "Eira Développement", logo: "/eira-developpement.webp", alt: "Eira Développement", link: "https://eira-developpement.fr/" },
    { name: "HygiPro", logo: "/hygipro.webp", alt: "HygiPro", link: "https://www.hygipro.fr/" },
    { name: "Imprimzen", logo: "/imprimzen.webp", alt: "Imprimzen", link: "https://imprimzen.fr/" },
    { name: "In-memorium", logo: "/in-memorium.webp", alt: "In-memorium", link: "https://www.inmemorium.fr/" },
    { name: "LBM", logo: "/LBM.webp", alt: "Le Bulletin Municipal", link: "https://lebulletinmunicipal.fr/" },
    { name: "Maire de Mollau", logo: "/mairie-Mollau.webp", alt: "Maire de Mollau" },
    { name: "publi-h", logo: "/publi-h.webp", alt: "imprimerie publi-h", link: "https://publi-h.com/" },
    { name: "Score story", logo: "/score-story.webp", alt: "Score Story", link: "https://score-story.com/" },
  ];

  // Diviser les références en trois groupes de 5 chacun
  const leftReferences = references.slice(0, 5);     // 0-4 (5 éléments)
  const middleReferences = references.slice(5, 10);  // 5-9 (5 éléments)  
  const rightReferences = references.slice(10, 15);  // 10-14 (5 éléments)

  // On duplique 3 fois pour couvrir la boucle sans vide
  const duplicatedLeftRefs = [...leftReferences, ...leftReferences, ...leftReferences];
  const duplicatedMiddleRefs = [...middleReferences, ...middleReferences, ...middleReferences];
  const duplicatedRightRefs = [...rightReferences, ...rightReferences, ...rightReferences];

  // Pré-calculs pour l'animation CSS (doit correspondre exactement au CSS)
  const cardHeight = 100; 
  const gap = 20; 
  const totalHeightPerCard = cardHeight + gap;
  const groupLength = 5; // 5 éléments par colonne
  const distance = totalHeightPerCard * groupLength; 
  const duration = 18; 

  return (
    <section className="qizuna-references">
      <div className="qizuna-section-content">
        <div className="qizuna-references-header">
          <motion.h2 
            className="qizuna-references-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nous les avons <span className="qizuna-gradient-text">accompagnés</span>
          </motion.h2>
        </div>
        
        <div className="qizuna-references-ticker-container">
          {/* Première colonne - DESCEND ⬇️ (Références 1-5) */}
          <div className="qizuna-references-ticker">
            <motion.div 
              className="qizuna-references-ticker-content ticker-down"
              style={{ '--ticker-distance': `${distance}px`, '--ticker-duration': `${duration}s` }}
              initial={false}
            >
              {duplicatedLeftRefs.map((reference, index) => (
                reference.link ? (
                  <a
                    key={`left-${reference.name}-${index}`}
                    href={reference.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qizuna-reference-link"
                    aria-label={`Visiter ${reference.name}`}
                  >
                    <motion.div 
                      className="qizuna-reference-card"
                      whileHover={{ scale: 1.08, zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="qizuna-reference-logo">
                        <img 
                          src={reference.logo} 
                          alt={reference.alt}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="qizuna-logo-placeholder" style={{ display: 'none' }}>
                          {reference.name}
                        </div>
                      </div>
                    </motion.div>
                  </a>
                ) : (
                  <motion.div 
                    key={`left-${reference.name}-${index}`}
                    className="qizuna-reference-card"
                    whileHover={{ scale: 1.08, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="qizuna-reference-logo">
                      <img 
                        src={reference.logo} 
                        alt={reference.alt}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="qizuna-logo-placeholder" style={{ display: 'none' }}>
                        {reference.name}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </motion.div>
          </div>
          
          {/* Deuxième colonne - MONTE ⬆️ (Références 6-10) */}
          <div className="qizuna-references-ticker">
            <motion.div 
              className="qizuna-references-ticker-content ticker-up"
              style={{ '--ticker-distance': `${distance}px`, '--ticker-duration': `${duration}s` }}
              initial={false}
            >
              {duplicatedMiddleRefs.map((reference, index) => (
                reference.link ? (
                  <a
                    key={`middle-${reference.name}-${index}`}
                    href={reference.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qizuna-reference-link"
                    aria-label={`Visiter ${reference.name}`}
                  >
                    <motion.div 
                      className="qizuna-reference-card"
                      whileHover={{ scale: 1.08, zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="qizuna-reference-logo">
                        <img 
                          src={reference.logo} 
                          alt={reference.alt}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="qizuna-logo-placeholder" style={{ display: 'none' }}>
                          {reference.name}
                        </div>
                      </div>
                    </motion.div>
                  </a>
                ) : (
                  <motion.div 
                    key={`middle-${reference.name}-${index}`}
                    className="qizuna-reference-card"
                    whileHover={{ scale: 1.08, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="qizuna-reference-logo">
                      <img 
                        src={reference.logo} 
                        alt={reference.alt}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="qizuna-logo-placeholder" style={{ display: 'none' }}>
                        {reference.name}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </motion.div>
          </div>

          {/* Troisième colonne - DESCEND ⬇️ (Références 11-15) */}
          <div className="qizuna-references-ticker">
            <motion.div 
              className="qizuna-references-ticker-content ticker-down"
              style={{ '--ticker-distance': `${distance}px`, '--ticker-duration': `${duration}s` }}
              initial={false}
            >
              {duplicatedRightRefs.map((reference, index) => (
                reference.link ? (
                  <a
                    key={`right-${reference.name}-${index}`}
                    href={reference.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qizuna-reference-link"
                    aria-label={`Visiter ${reference.name}`}
                  >
                    <motion.div 
                      className="qizuna-reference-card"
                      whileHover={{ scale: 1.08, zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="qizuna-reference-logo">
                        <img 
                          src={reference.logo} 
                          alt={reference.alt}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="qizuna-logo-placeholder" style={{ display: 'none' }}>
                          {reference.name}
                        </div>
                      </div>
                    </motion.div>
                  </a>
                ) : (
                  <motion.div 
                    key={`right-${reference.name}-${index}`}
                    className="qizuna-reference-card"
                    whileHover={{ scale: 1.08, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="qizuna-reference-logo">
                      <img 
                        src={reference.logo} 
                        alt={reference.alt}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="qizuna-logo-placeholder" style={{ display: 'none' }}>
                        {reference.name}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;