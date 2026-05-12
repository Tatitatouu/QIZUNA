'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const ServiceFAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className={`qizuna-faq-item ${isOpen ? 'qizuna-faq-item--open' : ''}`}>
      <button
        className="qizuna-faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3>{item.question}</h3>
        <ChevronDown className={`w-5 h-5 qizuna-faq-chevron ${isOpen ? 'qizuna-faq-chevron--open' : ''}`} />
      </button>
      <div className={`qizuna-faq-answer ${isOpen ? 'qizuna-faq-answer--open' : ''}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  )
}

const ServiceFAQ = ({ items, title = 'Questions fréquentes', subtitle }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="qizuna-section qizuna-faq qizuna-service-faq">
      <div className="qizuna-section-content">
        <div className="qizuna-section-header">
          <h2 className="qizuna-section-title">{title}</h2>
          {subtitle && <p className="qizuna-section-subtitle">{subtitle}</p>}
        </div>

        <div className="qizuna-faq-list">
          {items.map((item, index) => (
            <ServiceFAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceFAQ
