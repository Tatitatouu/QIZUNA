import { Sparkles, Zap, Star } from 'lucide-react';
import ValueCard from './ValueCard';
import './Values.css';

const Values = ({ values }) => {
  return (
    <section id="valeurs" className="qizuna-section qizuna-values-dynamic">
      <div className="qizuna-section-content">
        {/* Header explosif */}
        <div className="qizuna-values-header-dynamic">
          <div className="qizuna-values-explosion">
            <Sparkles className="qizuna-spark qizuna-spark-1" />
            <Zap className="qizuna-spark qizuna-spark-2" />
            <Star className="qizuna-spark qizuna-spark-3" />
          </div>
          <h2 className="qizuna-values-mega-title">
            <span className="qizuna-word-1">Nos</span>
            <span className="qizuna-word-2">Valeurs</span>
            <span className="qizuna-word-3">Explosives</span>
          </h2>
          <p className="qizuna-values-punch-line">
            💥 L'ADN qui fait vibrer chaque projet Qizuna ! 💥
          </p>
        </div>

        {/* Grid ultra-dynamique */}
        <div className="qizuna-values-grid-dynamic">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              value={value}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;