'use client'

import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = ({ navLinks = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setScrollHeight(document.documentElement.scrollHeight)
      setWindowHeight(window.innerHeight)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const progressWidth = scrollHeight - windowHeight > 0
    ? Math.min((scrollY / (scrollHeight - windowHeight)) * 100, 100)
    : 0

  return (
    <>
      <nav className={`qizuna-nav ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="qizuna-nav-content">
          <div className="qizuna-logo">
            <img src="/logo.webp" alt="Qizuna" className="qizuna-logo-img" width={183} height={61} fetchPriority="high" />
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
            aria-label="Menu"
          >
            <div className={`qizuna-hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div className="qizuna-progress-bar">
          <div
            className="qizuna-progress-fill"
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </nav>

      <div className={`qizuna-mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="qizuna-mobile-nav-header">
          <div className="qizuna-logo">
            <img src="/logo.webp" alt="Qizuna" className="qizuna-logo-img" width={183} height={61} fetchPriority="high" />
          </div>
          <button
            className="qizuna-mobile-close"
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            &times;
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

      <div
        className={`qizuna-nav-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      ></div>
    </>
  )
}

export default Navigation
