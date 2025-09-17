import ServiceCard from './ServiceCard';
import './Services.css';

const Services = ({ services }) => {
  return (
    <section id="services" className="qizuna-section qizuna-section-alt">
      <div className="qizuna-section-content">
        <div className="qizuna-section-header">
          <h2 className="qizuna-section-title">Nos services</h2>
          <p className="qizuna-section-subtitle">
            Des outils numériques de qualité supérieure pour transformer vos idées en réalité
          </p>
        </div>
        
        <div className="qizuna-services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;