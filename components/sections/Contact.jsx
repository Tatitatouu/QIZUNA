'use client'

import { useState } from 'react'
import { CheckCircle, MapPin, Mail, Phone } from 'lucide-react'
import './Contact.css'

const Contact = ({ contactInfo = {} }) => {
  const [formStatus, setFormStatus] = useState('')

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')

    const formData = new FormData(e.target)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        setFormStatus('success')
        e.target.reset()
        setTimeout(() => setFormStatus(''), 5000)
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus(''), 5000)
    }
  }

  return (
    <section id="contact" className="qizuna-section qizuna-contact">
      <div className="qizuna-section-content">
        <div className="qizuna-contact-content">
          <div className="qizuna-contact-info">
            <h2>Parlons de votre <span className="highlight">projet</span></h2>
            <p>Décrivez votre projet en quelques lignes. Nous revenons vers vous sous 24h — échange gratuit, sans engagement.</p>

            <div className="qizuna-contact-details">
              <div className="qizuna-contact-item">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address || '25 rue de l\'écluse, 68120 Pfastatt'}</span>
              </div>
              <div className="qizuna-contact-item">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email || 'hello@qizuna.fr'}</span>
              </div>
              <div className="qizuna-contact-item">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone || '03 67 26 69 16'}</span>
              </div>
            </div>
          </div>

          <div className="qizuna-contact-form">
            {formStatus === 'success' && (
              <div className="qizuna-form-message qizuna-form-success" role="alert">
                <CheckCircle className="w-5 h-5" />
                <span>Message envoyé avec succès ! Nous vous répondrons rapidement.</span>
              </div>
            )}
            {formStatus === 'error' && (
              <div className="qizuna-form-message qizuna-form-error" role="alert">
                <span>Erreur lors de l&apos;envoi. Veuillez réessayer ou nous contacter directement.</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit}>
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
              <input type="hidden" name="subject" value="Nouveau message depuis qizuna.fr" />
              <input type="hidden" name="from_name" value="Site Web Qizuna" />

              <div className="qizuna-form-group">
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" required disabled={formStatus === 'sending'} />
              </div>
              <div className="qizuna-form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="votre.email@exemple.com" required disabled={formStatus === 'sending'} />
              </div>
              <div className="qizuna-form-group">
                <label htmlFor="subject_custom">Sujet</label>
                <input type="text" id="subject_custom" name="subject_custom" placeholder="Sujet de votre message" required disabled={formStatus === 'sending'} />
              </div>
              <div className="qizuna-form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Decrivez-nous votre projet..." rows="5" required disabled={formStatus === 'sending'}></textarea>
              </div>

              <input type="checkbox" name="botcheck" className="qizuna-hidden" style={{display: 'none'}} />

              <button type="submit" className="qizuna-btn-primary" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? (
                  <>
                    <div className="qizuna-spinner"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
