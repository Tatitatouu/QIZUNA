import React, { useState } from 'react';
import { CheckCircle, MapPin, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset(); // Reset du formulaire
        setTimeout(() => setFormStatus(''), 5000); // Reset du message après 5s
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="qizuna-section qizuna-contact">
      <div className="qizuna-section-content">
        <div className="qizuna-contact-content">
          <div className="qizuna-contact-info">
            <h2>Restons en <span className="highlight">contact</span> !</h2>
            <p>Dites-nous vos besoins et projets, nous sommes impatients de vous accompagner vers votre réussite !</p>
            
            <div className="qizuna-contact-details">
              <div className="qizuna-contact-item">
                <MapPin className="w-5 h-5" />
                <span>2 rue de la Thur, 68800 Vieux-Thann</span>
              </div>
              <div className="qizuna-contact-item">
                <Mail className="w-5 h-5" />
                <span>hello@qizuna.fr</span>
              </div>
              <div className="qizuna-contact-item">
                <Phone className="w-5 h-5" />
                <span>03 67 26 69 16</span>
              </div>
            </div>
          </div>
          
          <div className="qizuna-contact-form">
            {formStatus === 'success' && (
              <div className="qizuna-form-message qizuna-form-success">
                <CheckCircle className="w-5 h-5" />
                <span>Message envoyé avec succès ! Nous vous répondrons rapidement.</span>
              </div>
            )}
            {formStatus === 'error' && (
              <div className="qizuna-form-message qizuna-form-error">
                <span>⚠️ Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.</span>
              </div>
            )}
            
            <form onSubmit={handleFormSubmit}>
              {/* Clé d'accès Web3Forms (cachée) */}
              <input type="hidden" name="access_key" value="03828922-6df6-45d5-827c-09e5f83bca2a" />
              
              {/* Configuration Web3Forms */}
              <input type="hidden" name="subject" value="Nouveau message depuis qizuna.fr" />
              <input type="hidden" name="from_name" value="Site Web Qizuna" />
              
              <div className="qizuna-form-group">
                <label htmlFor="name">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Votre nom" 
                  required 
                  disabled={formStatus === 'sending'}
                />
              </div>
              <div className="qizuna-form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="votre.email@exemple.com" 
                  required 
                  disabled={formStatus === 'sending'}
                />
              </div>
              <div className="qizuna-form-group">
                <label htmlFor="subject_custom">Sujet</label>
                <input 
                  type="text" 
                  id="subject_custom" 
                  name="subject_custom"
                  placeholder="Sujet de votre message" 
                  required 
                  disabled={formStatus === 'sending'}
                />
              </div>
              <div className="qizuna-form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  placeholder="Décrivez-nous votre projet..." 
                  rows="5"
                  required
                  disabled={formStatus === 'sending'}
                ></textarea>
              </div>
              
              {/* Anti-spam honeypot (caché des utilisateurs) */}
              <input type="checkbox" name="botcheck" className="qizuna-hidden" style={{display: 'none'}} />
              
              <button 
                type="submit" 
                className="qizuna-btn-primary"
                disabled={formStatus === 'sending'}
              >
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
  );
};

export default Contact;