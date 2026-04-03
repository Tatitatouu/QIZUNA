import { CheckCircle, Sparkles, TrendingUp, ArrowRight } from 'lucide-react'
import { getIcon } from '@/lib/icons'
import './Certification.css'

const highlightIcons = {
  Award: Sparkles,
  Coins: TrendingUp,
  Shield: CheckCircle,
}

const Certification = ({ data }) => {
  const benefits = data?.benefits || []

  return (
    <section id="certification" className="qizuna-section qizuna-certification-modern">
      <div className="qizuna-section-content">
        {/* Hero Certification */}
        <div className="qizuna-cert-hero">
          <div className="qizuna-cert-badge">
            <div className="qizuna-cert-icon-modern">
              <img src="/logo-france-num.webp" alt="Certification France Num - Activateur numérique" className="qizuna-cert-logo" />
              <div className="qizuna-cert-verified">
                <CheckCircle className="w-6 h-6" />
              </div>
            </div>
            <div className="qizuna-cert-content">
              <span className="qizuna-cert-label">{data?.label || 'Certifié officiellement'}</span>
              <h2 className="qizuna-cert-title">{data?.title || 'Activateur France Num'}</h2>
              <p className="qizuna-cert-subtitle">
                {data?.subtitle || ''}
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="qizuna-cert-benefits">
          {benefits.map((benefit, index) => {
            const HighlightIcon = highlightIcons[benefit.icon] || Sparkles
            return (
              <div key={index} className="qizuna-cert-benefit-card">
                <div className="qizuna-benefit-icon">
                  {getIcon(benefit.icon)}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <div className="qizuna-benefit-highlight">
                  <HighlightIcon className="w-4 h-4" />
                  <span>{benefit.highlight}</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="qizuna-section-cta">
          <a href={data?.ctaLink || '#contact'} className="qizuna-btn-primary">
            <span>{data?.ctaText || 'Bénéficiez des aides'}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certification
