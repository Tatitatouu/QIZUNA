import { ArrowRight } from 'lucide-react'
import ServiceCard from './ServiceCard'
import './Services.css'

const Services = ({ services }) => {
  return (
    <section id="services" className="qizuna-section qizuna-section-alt">
      <div className="qizuna-section-content">
        <div className="qizuna-section-header qizuna-animate">
          <h2 className="qizuna-section-title">Nos services</h2>
          <p className="qizuna-section-subtitle">
            Du développement web à l&apos;application mobile — des solutions sur mesure pour les entreprises de Mulhouse et d&apos;Alsace
          </p>
        </div>

        <div className="qizuna-services-grid qizuna-animate qizuna-animate-delay-2">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              linkText={service.linkText}
              linkHref={service.linkHref}
            />
          ))}
        </div>

        <div className="qizuna-section-cta">
          <a href="#contact" className="qizuna-btn-primary">
            <span>Discutons de votre projet</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
