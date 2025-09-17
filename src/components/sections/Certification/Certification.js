import React from 'react';
import { CheckCircle, Award, Coins, Shield, Sparkles, TrendingUp } from 'lucide-react';
import './Certification.css';

const Certification = () => {
  return (
    <section id="certification" className="qizuna-section qizuna-certification-modern">
      <div className="qizuna-section-content">
        {/* Hero Certification */}
        <div className="qizuna-cert-hero">
          <div className="qizuna-cert-badge">
            <div className="qizuna-cert-icon-modern">
              <img src="/logo-france-num.jpg" alt="France Num Certification" className="qizuna-cert-logo" />
              <div className="qizuna-cert-verified">
                <CheckCircle className="w-6 h-6" />
              </div>
            </div>
            <div className="qizuna-cert-content">
              <span className="qizuna-cert-label">Certifié officiellement</span>
              <h2 className="qizuna-cert-title">Activateur France Num</h2>
              <p className="qizuna-cert-subtitle">
                Partenaire officiel du gouvernement français pour accompagner la transformation numérique des entreprises
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="qizuna-cert-benefits">
          <div className="qizuna-cert-benefit-card">
            <div className="qizuna-benefit-icon">
              <Award className="w-8 h-8" />
            </div>
            <h3>Expertise Certifiée</h3>
            <p>Reconnaissance officielle par la Direction Générale des Entreprises attestant de notre expertise en transformation numérique</p>
            <div className="qizuna-benefit-highlight">
              <Sparkles className="w-4 h-4" />
              <span>Certification gouvernementale</span>
            </div>
          </div>

          <div className="qizuna-cert-benefit-card">
            <div className="qizuna-benefit-icon">
              <Coins className="w-8 h-8" />
            </div>
            <h3>Accès aux Aides</h3>
            <p>Nous vous aidons à bénéficier des subventions publiques disponibles pour financer vos projets de digitalisation</p>
            <div className="qizuna-benefit-highlight">
              <TrendingUp className="w-4 h-4" />
              <span>Jusqu'à 50% d'aides</span>
            </div>
          </div>

          <div className="qizuna-cert-benefit-card">
            <div className="qizuna-benefit-icon">
              <Shield className="w-8 h-8" />
            </div>
            <h3>Garantie Qualité</h3>
            <p>Un accompagnement de qualité supérieure avec des méthodes et outils validés par les autorités compétentes</p>
            <div className="qizuna-benefit-highlight">
              <CheckCircle className="w-4 h-4" />
              <span>100% sécurisé</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;