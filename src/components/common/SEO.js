import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Qizuna - Agence Digitale & Développement Web | Solutions Numériques Innovantes",
  description = "Transformez vos idées en succès digital avec Qizuna. Spécialistes en développement web, applications mobiles et solutions numériques innovantes.",
  keywords = "agence digitale, développement web, application mobile, transformation numérique, Qizuna, solutions digitales, France",
  image = "/logo.webp",
  url = "https://qizuna.fr",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Qizuna" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Qizuna",
          "url": "https://qizuna.fr",
          "logo": "https://qizuna.fr/logo.webp",
          "description": "Agence digitale spécialisée en développement web et solutions numériques",
          "foundingDate": "2024",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "FR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "French"
          },
          "sameAs": [
            "https://linkedin.com/company/qizuna",
            "https://twitter.com/qizuna"
          ]
        })}
      </script>
      
      {/* Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Qizuna",
          "url": "https://qizuna.fr",
          "description": "Agence digitale spécialisée en développement web et solutions numériques",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://qizuna.fr/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* Structured Data - Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": {
            "@type": "Organization",
            "name": "Qizuna"
          },
          "serviceType": "Développement Web et Solutions Digitales",
          "description": "Services de développement web, applications mobiles, audit sécurité et hébergement cloud",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services Qizuna",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Conception sur mesure",
                  "description": "Solutions numériques personnalisées alliant web et mobile"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Audit & Sécurité",
                  "description": "Analyse approfondie de votre écosystème numérique"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Hébergement Cloud",
                  "description": "Infrastructure moderne avec monitoring 24/7"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Accompagnement",
                  "description": "Consulting expert pour transformation numérique"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;