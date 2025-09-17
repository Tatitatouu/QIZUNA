import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#valeurs', label: 'Valeurs' },
    { href: '#certification', label: 'Certification' },
    { href: '#contact', label: 'Contact' }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Navigation principale */}
      <nav className={`qizuna-nav ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="qizuna-nav-content">
          <div className="qizuna-logo">
            <img src="/logo.webp" alt="Qizuna" className="qizuna-logo-img" />
          </div>
          <div className="qizuna-nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="qizuna-nav-link">
                {link.label}
              </a>
            ))}
          </div>
          <button 
            className="qizuna-mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`qizuna-hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        
        {/* Barre de progression */}
        <div className="qizuna-progress-bar">
          <div 
            className="qizuna-progress-fill"
            style={{
              width: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
            }}
          ></div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div className={`qizuna-mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="qizuna-mobile-nav-header">
          <div className="qizuna-logo">
            <img src="/logo.webp" alt="Qizuna" className="qizuna-logo-img" />
          </div>
          <button 
            className="qizuna-mobile-close"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>
        <div className="qizuna-mobile-nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="qizuna-mobile-nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`qizuna-nav-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navigation;