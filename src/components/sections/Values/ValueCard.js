const ValueCard = ({ value, index }) => {
  return (
    <div className={`qizuna-value-card-dynamic qizuna-card-${index + 1}`}>
      <div className="qizuna-card-inner-dynamic">
        {/* Background animé */}
        <div className="qizuna-card-bg-animation"></div>
        
        {/* Icône flottante */}
        <div className="qizuna-value-icon-dynamic">
          <div className="qizuna-icon-wrapper">
            {value.icon}
          </div>
          <div className="qizuna-icon-particles">
            <div className="qizuna-particle qizuna-particle-1"></div>
            <div className="qizuna-particle qizuna-particle-2"></div>
            <div className="qizuna-particle qizuna-particle-3"></div>
          </div>
        </div>

        {/* Contenu énergique */}
        <div className="qizuna-value-content-dynamic">
          <h3 className="qizuna-value-title-dynamic">{value.title}</h3>
          <p className="qizuna-value-desc-dynamic">{value.description}</p>
        </div>

        {/* Effet de hover interactif */}
        <div className="qizuna-hover-effect">
          <div className="qizuna-ripple qizuna-ripple-1"></div>
          <div className="qizuna-ripple qizuna-ripple-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;