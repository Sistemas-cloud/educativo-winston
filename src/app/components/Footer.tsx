// 2026-08-17: Footer unico del sitio. Corrige Facebook (antes apuntaba a TikTok),
// unifica la direccion con contacto/mapa y agrega texto sr-only para crawlers.
import Image from "next/image";
import Link from "next/link";
import {
  SITE_ADDRESS_LINES,
  SITE_LOGO_PATH,
  SITE_PHONE_DISPLAY,
  SITE_SOCIAL,
  SITE_TAGLINE,
} from "@/lib/seo/site-config";

function IconFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconTiktok() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.04-8.22a8.24 8.24 0 0 0 4.82 1.55V5.2a4.85 4.85 0 0 1-1.01-.51z" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.858L.057 23.995l6.284-1.648A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.893a9.877 9.877 0 0 1-5.034-1.376l-.361-.214-3.732.979 1.001-3.625-.235-.373A9.847 9.847 0 0 1 2.107 12C2.107 6.527 6.527 2.107 12 2.107c5.474 0 9.893 4.42 9.893 9.893 0 5.474-4.419 9.893-9.893 9.893z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4.5" width="20" height="15" rx="4" ry="4" />
      <polygon points="9.5 8.6 16.8 12 9.5 15.4" fill="currentColor" stroke="currentColor" />
    </svg>
  );
}

const SOCIAL_ITEMS = [
  { label: "Facebook", icon: <IconFacebook />, href: SITE_SOCIAL.facebook },
  { label: "TikTok", icon: <IconTiktok />, href: SITE_SOCIAL.tiktok },
  { label: "WhatsApp", icon: <IconWhatsapp />, href: SITE_SOCIAL.whatsapp },
  { label: "Instagram", icon: <IconInstagram />, href: SITE_SOCIAL.instagram },
  { label: "YouTube", icon: <IconYoutube />, href: SITE_SOCIAL.youtube },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#3ADEFC] px-6 py-5 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <Image
            src={SITE_LOGO_PATH}
            alt="Logo Instituto Educativo Winston"
            width={48}
            height={48}
            style={{ width: 48, height: "auto" }}
            className="flex-shrink-0"
          />
          <div className="text-xs leading-5">
            <p className="mb-0.5 text-sm font-bold tracking-wider">{SITE_TAGLINE.toUpperCase()}</p>
            {SITE_ADDRESS_LINES.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>TEL {SITE_PHONE_DISPLAY}</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {SOCIAL_ITEMS.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="transition-colors hover:text-white/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{label}</span>
              {icon}
            </a>
          ))}
        </div>

        <Link
          href="/aviso-privacidad"
          className="text-xs font-semibold tracking-widest transition-colors hover:text-white/70 hover:underline"
        >
          AVISO DE PRIVACIDAD
        </Link>
      </div>
    </footer>
  );
}
