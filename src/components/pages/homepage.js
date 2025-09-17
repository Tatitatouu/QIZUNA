import { 
  Code2, 
  Shield, 
  Server, 
  Users, 
  Heart,
  HandHeart
} from 'lucide-react';

// Styles globaux
import '../../styles/globals.css';

// Composants
import SEO from '../common/SEO';
import Navigation from '../layout/Navigation/Navigation';
import Hero from '../sections/Hero/Hero';
import Services from '../sections/Services/Services';
import Values from '../sections/Values/Values';
import Certification from '../sections/Certification/Certification';
import References from '../sections/References/References';
import Contact from '../sections/Contact/Contact';
import Footer from '../layout/Footer/Footer';
import ScrollButton from '../layout/ScrollButton/ScrollButton';

const Homepage = () => {



  const services = [
    {
      icon: <Code2 />,
      title: "Conception sur mesure",
      description: "Solutions numériques personnalisées alliant web et mobile pour concrétiser vos idées avec performance et évolutivité.",
      features: ["React/Next.js", "Mobile-first", "Performance optimale"]
    },
    {
      icon: <Shield />,
      title: "Audit & Sécurité",
      description: "Analyse approfondie de votre écosystème numérique pour maximiser efficacité et sécurité.",
      features: ["Audit technique", "Recommandations", "Plan d'action"]
    },
    {
      icon: <Server />,
      title: "Hébergement Cloud",
      description: "Infrastructure moderne avec monitoring 24/7 et garanties de performance.",
      features: ["99.9% uptime", "Support 24/7", "Sauvegardes auto"]
    },
    {
      icon: <Users />,
      title: "Accompagnement",
      description: "Consulting expert pour accélérer votre transformation numérique.",
      features: ["Formation équipes", "Stratégie digitale", "Suivi continu"]
    }
  ];

  const values = [
    { 
      title: "Écoute & Bienveillance", 
      icon: <Heart className="w-8 h-8" />,
      description: "Chaque grand projet commence par une écoute attentive et bienveillante. Nous prenons le temps de comprendre votre vision avec une approche humaine qui fait de vous un partenaire."
    },
    { 
      title: "Engagement Total", 
      icon: <HandHeart className="w-8 h-8" />,
      description: "Notre engagement va au-delà de la simple prestation. Nous nous investissons personnellement dans votre réussite avec passion, détermination et une obsession du résultat."
    }
  ];



  return (
    <div className="qizuna-container">
        {/* SEO Meta Tags */}
        <SEO />
        
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services services={services} />

        {/* Values Section */}
        <Values values={values} />

        {/* Certification Section */}
        <Certification />

        {/* References Section */}
        <References />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Bouton de scroll dynamique */}
        <ScrollButton />
      </div>
  );
};

export default Homepage;