// 2026-08-17: JSON-LD Schema.org tipo School para rich results de Google.
import {
  SITE_ADDRESS,
  SITE_DESCRIPTION,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_PHONE,
  SITE_SOCIAL_LINKS,
  SITE_URL,
  absoluteUrl,
} from "./site-config";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    name: SITE_NAME,
    alternateName: "Instituto Educativo Winston Churchill",
    url: SITE_URL,
    logo: absoluteUrl(SITE_LOGO_PATH),
    image: absoluteUrl(SITE_LOGO_PATH),
    description: SITE_DESCRIPTION,
    telephone: SITE_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS.streetAddress,
      addressLocality: SITE_ADDRESS.addressLocality,
      addressRegion: SITE_ADDRESS.addressRegion,
      postalCode: SITE_ADDRESS.postalCode,
      addressCountry: SITE_ADDRESS.addressCountry,
    },
    sameAs: SITE_SOCIAL_LINKS,
    areaServed: {
      "@type": "City",
      name: "Ciudad Madero",
    },
  };
}
