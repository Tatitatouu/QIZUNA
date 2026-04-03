import { ArrowRight } from 'lucide-react'

const ServiceCard = ({ icon, title, description, features, linkText, linkHref }) => {
  return (
    <div className="qizuna-service-card">
      <div className="qizuna-service-header">
        <div className="qizuna-service-icon">
          {icon}
        </div>
        <h3 className="qizuna-service-title">{title}</h3>
      </div>
      <p className="qizuna-service-description">{description}</p>
      <div className="qizuna-service-features">
        {features.map((feature, idx) => (
          <div key={idx} className="qizuna-feature-tag">
            {feature}
          </div>
        ))}
      </div>
      {linkText && linkHref && (
        <a href={linkHref} className="qizuna-service-link">
          <ArrowRight className="w-4 h-4" />
          <span>{linkText}</span>
        </a>
      )}
    </div>
  )
}

export default ServiceCard
