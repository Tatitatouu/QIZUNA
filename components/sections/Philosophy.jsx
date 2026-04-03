import { ArrowRight } from 'lucide-react'
import './Philosophy.css'

const Philosophy = ({ data, pillars }) => {
  return (
    <section id="philosophie" className="qizuna-section qizuna-philosophy">
      <div className="qizuna-section-content">
        <div className="qizuna-philosophy-header">
          <span className="qizuna-philosophy-badge">{data?.badge || 'Notre Approche'}</span>
          <h2>{data?.title || ''}</h2>
          <p className="qizuna-philosophy-intro">
            {data?.intro || ''}
          </p>
        </div>

        <div className="qizuna-philosophy-pillars">
          {pillars.map((pillar, index) => (
            <div key={index} className="qizuna-pillar-card">
              <div className="qizuna-pillar-icon">
                {pillar.icon}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="qizuna-philosophy-promise">
          <div className="qizuna-promise-content">
            <h3>{data?.promiseTitle || 'Notre promesse'}</h3>
            <p>
              {data?.promiseText || ''}
            </p>
            <a href={data?.ctaLink || '#contact'} className="qizuna-btn-primary qizuna-btn-light">
              <span>{data?.ctaText || 'Parlons de votre projet'}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
