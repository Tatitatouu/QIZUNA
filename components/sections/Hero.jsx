'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown, Sparkles, Zap, Star } from 'lucide-react'
import './Hero.css'

const Hero = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const stats = data?.stats || []

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
        <h1
          className="qizuna-hero-title"
          dangerouslySetInnerHTML={{
            __html: (data?.title || '').replace(
              /<span>(.*?)<\/span>/,
              '<span class="qizuna-gradient-text">$1</span>'
            )
          }}
        />
        <p className="qizuna-hero-subtitle">
          {data?.subtitle || ''}
        </p>
        <div className="qizuna-hero-buttons">
          <a href={data?.primaryButtonLink || '#services'} className="qizuna-btn-primary">
            <span>{data?.primaryButtonText || 'Découvrir nos services'}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href={data?.secondaryButtonLink || '#contact'} className="qizuna-btn-secondary">
            {data?.secondaryButtonText || 'Planifier un appel'}
          </a>
        </div>

        <div className="qizuna-hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="qizuna-stat">
              <div className="qizuna-stat-number">{stat.value}</div>
              <div className="qizuna-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`qizuna-scroll-indicator ${isScrolled ? 'qizuna-scroll-hidden' : ''}`}
        onClick={handleScrollToServices}
        aria-label="Défiler vers les services"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}

export default Hero
