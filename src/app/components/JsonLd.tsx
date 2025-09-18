export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vital Solutions",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://vitalsolutions.vercel.app",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://vitalsolutions.vercel.app"}/assets/logo.png`,
    "description": "Creamos páginas web y aplicaciones fáciles de usar, que ayudan a que tu negocio crezca y destaque frente a la competencia.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CU"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+53 55161651",
      "contactType": "customer service",
      "email": "vitalplussoporte@gmail.com",
      "availableLanguage": ["Spanish"]
    }],
    "sameAs": [
      "https://linkedin.com/in/pedro-rodriguez-paredes"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "name": "Servicios de Desarrollo Web",
      "offerCount": "3",
      "offers": [{
        "@type": "Offer",
        "name": "Plan Básico",
        "description": "Ideal para pequeños negocios y profesionales"
      }, {
        "@type": "Offer",
        "name": "Plan Profesional",
        "description": "Para empresas en crecimiento"
      }, {
        "@type": "Offer",
        "name": "Plan Empresarial",
        "description": "Soluciones personalizadas para grandes empresas"
      }]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}