'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import './Navigation.css'

const serviceLinks = [
  { label: 'Développement logiciel', href: '/developpement-logiciel-sur-mesure' },
  { label: 'Application mobile', href: '/developpement-application-mobile' },
  { label: 'Audit technique', href: '/audit-technique' },
]

const Navigation = ({ navLinks = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const dropdownRef = useRef(null)

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setMobileServicesOpen(false)
  }

  const progressWidth = scrollHeight - windowHeight > 0
    ? Math.min((scrollY / (scrollHeight - windowHeight)) * 100, 100)
    : 0

  return (
    <>
      <nav className={`qizuna-nav ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="qizuna-nav-content">
          <div className="qizuna-logo">
            <Link href="/">
              <img src="/logo.webp" alt="Qizuna" className="qizuna-logo-img" width={183} height={61} fetchPriority="high" />
            </Link>
          </div>
          <div className="qizuna-nav-links">
            <div className="qizuna-nav-dropdown" ref={dropdownRef}>
              <button
                className="qizuna-nav-link qizuna-nav-dropdown-trigger"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown className={`w-4 h-4 qizuna-dropdown-chevron ${isServicesOpen ? 'open' : ''}`} />
              </button>
              <div className={`qizuna-nav-dropdown-menu ${isServicesOpen ? 'open' : ''}`}>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="qizuna-nav-dropdown-item"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            {navLinks.filter(l => l.label !== 'Services').map((link) => (
              <a key={link.href} href={link.href} className="qizuna-nav-link">
                {link.label}
              </a>
            ))}
            <Link href="/blog" className="qizuna-nav-link">
              Blog
            </Link>
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
          <div className="qizuna-mobile-dropdown">
            <button
              className="qizuna-mobile-nav-link qizuna-mobile-dropdown-trigger"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              aria-expanded={mobileServicesOpen}
            >
              Services
              <ChevronDown className={`w-4 h-4 qizuna-dropdown-chevron ${mobileServicesOpen ? 'open' : ''}`} />
            </button>
            <div className={`qizuna-mobile-dropdown-menu ${mobileServicesOpen ? 'open' : ''}`}>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="qizuna-mobile-dropdown-item"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.filter(l => l.label !== 'Services').map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="qizuna-mobile-nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/blog"
            className="qizuna-mobile-nav-link"
            onClick={closeMenu}
          >
            Blog
          </Link>
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
