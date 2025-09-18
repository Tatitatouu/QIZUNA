import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Sparkles, Zap, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cache l'indicateur quand on a scrollé de plus de 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };
  const stats = [
    { number: "30+", label: "Projets réalisés" },
    { number: "24h", label: "Délai de réponse" },
    { number: "20+", label: "Années d'expertise" }
  ];

  return (
    <section className="qizuna-hero">
      <div className="qizuna-hero-bg">
        <div className="qizuna-floating-element qizuna-float-1">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="qizuna-floating-element qizuna-float-2">
          <Zap className="w-8 h-8" />
        </div>
        <div className="qizuna-floating-element qizuna-float-3">
          <Star className="w-5 h-5" />
        </div>
      </div>
      
      <div className="qizuna-hero-content">
        <h1 className="qizuna-hero-title">
          Bâtissons ensemble votre <span className="qizuna-gradient-text">avenir numérique</span>
        </h1>
        <p className="qizuna-hero-subtitle">
          Applications & Logiciels sur-mesure · Expertise technique · Accompagnement personnalisé
        </p>
        <div className="qizuna-hero-buttons">
          <a href="#services" className="qizuna-btn-primary">
            <span>Découvrir nos services</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#contact" className="qizuna-btn-secondary">
            Planifier un appel
          </a>
        </div>
        
        <div className="qizuna-hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="qizuna-stat">
              <div className="qizuna-stat-number">{stat.number}</div>
              <div className="qizuna-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div 
        className={`qizuna-scroll-indicator ${isScrolled ? 'qizuna-scroll-hidden' : ''}`}
        onClick={handleScrollToServices}
      >
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;