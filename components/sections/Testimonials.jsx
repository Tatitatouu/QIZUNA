'use client'

import { useRef } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import './Testimonials.css'

const Testimonials = ({ testimonials = [] }) => {
  const sliderRef = useRef(null)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="qizuna-section qizuna-testimonials">
      <div className="qizuna-section-content">
        <div className="qizuna-section-header qizuna-testimonials-header">
          <div>
            <h2 className="qizuna-section-title">Ils nous font confiance</h2>
            <p className="qizuna-section-subtitle">La satisfaction de nos clients est notre meilleure récompense</p>
          </div>
          <div className="qizuna-testimonials-nav">
            <button onClick={() => scroll('left')} aria-label="Précédent">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} aria-label="Suivant">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="qizuna-testimonials-slider" ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="qizuna-testimonial-card">
              <div className="qizuna-testimonial-top">
                <Quote className="w-6 h-6" />
                <div className="qizuna-testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" fill="#F59E0B" stroke="#F59E0B" />
                  ))}
                </div>
              </div>

              <p className="qizuna-testimonial-content">
                {testimonial.content}
              </p>

              <div className="qizuna-testimonial-author">
                <div className="qizuna-testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="qizuna-testimonial-info">
                  <strong>{testimonial.name}</strong>
                  {testimonial.company && <span>{testimonial.company}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
