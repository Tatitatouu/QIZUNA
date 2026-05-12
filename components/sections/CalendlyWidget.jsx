'use client'

import { useEffect } from 'react'

export default function CalendlyWidget({ title = "Discutons de votre projet — 30 min offertes, sans engagement" }) {
  useEffect(() => {
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className="qizuna-service-section qizuna-calendly-section">
      <div className="qizuna-section-content">
        <h2>{title}</h2>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/decouverte-logiciel-sur-mesure-qizuna/30min?text_color=002b44&primary_color=f04f23"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </section>
  )
}
