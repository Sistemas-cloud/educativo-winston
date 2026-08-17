// 2026-08-17: Fuente unica de SEO para winstonkinder.edu.mx.
// Canonical, Open Graph, Twitter Cards, Schema.org y datos de contacto.

export const SITE_URL = "https://www.winstonkinder.edu.mx" as const;

export const SITE_NAME = "Instituto Educativo Winston" as const;

export const SITE_TAGLINE = "Raising Brighter Kids" as const;

export const SITE_DESCRIPTION =
  "Kínder y Maternal bilingüe en Ciudad Madero, Tamaulipas. Formación Cambridge desde maternal en un entorno seguro y familiar." as const;

export const SITE_KEYWORDS = [
  "Instituto Educativo Winston",
  "kínder bilingüe",
  "maternal bilingüe",
  "Cd. Madero",
  "Tamaulipas",
  "Cambridge",
  "preescolar",
  "Winston Churchill",
] as const;

export const SITE_LOCALE = "es_MX" as const;

export const SITE_PHONE = "+528333474507" as const;
export const SITE_PHONE_DISPLAY = "833 347 45 07" as const;

export const SITE_ADDRESS = {
  streetAddress: "Calle 2 #209, Col. Jardín 20 de Noviembre",
  addressLocality: "Ciudad Madero",
  addressRegion: "Tamaulipas",
  postalCode: "89440",
  addressCountry: "MX",
} as const;

export const SITE_ADDRESS_LINES = [
  "CALLE 2 #209 COL. JARDÍN 20 DE NOVIEMBRE",
  "CD. MADERO, TAMAULIPAS.",
] as const;

export const SITE_LOGO_PATH = "/uploads/img/LOGOS/winston-educativo.png" as const;

export const SITE_OG_IMAGE_PATH = "/uploads/img/INICIO/portada1.jpg" as const;

export const SITE_SOCIAL = {
  facebook: "https://www.facebook.com/institutowinstonchurchill/",
  tiktok: "https://www.tiktok.com/@imageneducativo",
  whatsapp: "https://wa.me/528333474507",
  instagram: "https://www.instagram.com/educativowinston/",
  youtube: "https://www.youtube.com/@institutowinstonchurchill5194",
} as const;

export const SITE_SOCIAL_LINKS = [
  SITE_SOCIAL.facebook,
  SITE_SOCIAL.instagram,
  SITE_SOCIAL.tiktok,
  SITE_SOCIAL.youtube,
  SITE_SOCIAL.whatsapp,
] as const;

export function absoluteUrl(path: string = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") {
    return SITE_URL;
  }
  return `${SITE_URL}${normalized}`;
}
