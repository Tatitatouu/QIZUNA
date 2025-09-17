import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import './ScrollButton.css';

const ScrollButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      if (currentScrollY > 200) {
        setShowScrollButton(true);
        const scrollProgress = currentScrollY / (documentHeight - windowHeight);
        setScrollDirection(scrollProgress > 0.7 ? 'up' : 'down');
      } else {
        setShowScrollButton(false);
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  if (!showScrollButton) return null;

  return (
    <button
      className="qizuna-scroll-button"
      onClick={scrollDirection === 'down' ? scrollToBottom : scrollToTop}
      aria-label={scrollDirection === 'down' ? 'Aller en bas' : 'Aller en haut'}
    >
      {scrollDirection === 'down' ? (
        <ArrowDown className="w-6 h-6" />
      ) : (
        <ArrowUp className="w-6 h-6" />
      )}
    </button>
  );
};

export default ScrollButton;