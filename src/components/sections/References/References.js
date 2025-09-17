import React from 'react';
import './References.css';

const References = () => {
  const references = [
    { name: "Lab Routes", logo: "/labo-routes.jpg", alt: "Lab Routes - Géollemund Grand Est" },
    { name: "Energie BB", logo: "/logos/energie-bb.png", alt: "Energie BB - Entreprise Solidaire" },
    { name: "Systema", logo: "/logos/systemo.png", alt: "Systemo" },
    { name: "Nautilia", logo: "/logos/nautilia.png", alt: "Nautilia" },
    { name: "Willer-sur-Thur", logo: "/logos/willer-sur-thur.png", alt: "Commune de Willer-sur-Thur" },
    { name: "Tech Eaux", logo: "/logos/tech-eaux.png", alt: "Tech Eaux Energies" },
    { name: "Pot Patrol", logo: "/logos/pot-patrol.png", alt: "Pot Patrol - Le gardien de votre patrimoine" },
    { name: "Frida", logo: "/logos/frida.png", alt: "Frida - Boulangerie Pâtisserie Les Délices du" },
    { name: "Client 9", logo: "/logos/client-9.png", alt: "Client 9" }
  ];

  return (
    <section className="qizuna-references">
      <div className="qizuna-section-content">
        <div className="qizuna-references-header">
          <h2 className="qizuna-references-title">
            Nous les avons <span className="qizuna-gradient-text">accompagnés</span>
          </h2>
        </div>
        
        <div className="qizuna-references-grid">
          {references.map((reference, index) => (
            <div 
              key={index}
              className={`qizuna-reference-card qizuna-ref-${index + 1}`}
            >
              <div className="qizuna-reference-logo">
                <img 
                  src={reference.logo} 
                  alt={reference.alt}
                  onError={(e) => {
                    // Fallback si l'image n'existe pas
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="qizuna-logo-placeholder" style={{ display: 'none' }}>
                  {reference.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;