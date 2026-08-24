// 2026-08-17: Footer único del sitio — redes, dirección, aviso de privacidad.
// 2026-08-22: Cuna de confianza — más aire, jerarquía clara, onda suave.
import Image from "next/image";
import Link from "next/link";
import {
  SITE_ADDRESS_LINES,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_PHONE_DISPLAY,
  SITE_SOCIAL,
  SITE_TAGLINE,
} from "@/lib/seo/site-config";

function IconFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconTiktok() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.04-8.22a8.24 8.24 0 0 0 4.82 1.55V5.2a4.85 4.85 0 0 1-1.01-.51z" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.858L.057 23.995l6.284-1.648A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.893a9.877 9.877 0 0 1-5.034-1.376l-.361-.214-3.732.979 1.001-3.625-.235-.373A9.847 9.847 0 0 1 2.107 12C2.107 6.527 6.527 2.107 12 2.107c5.474 0 9.893 4.42 9.893 9.893 0 5.474-4.419 9.893-9.893 9.893z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconYoutube() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4.5" width="20" height="15" rx="4" ry="4" />
      <polygon points="9.5 8.6 16.8 12 9.5 15.4" fill="currentColor" stroke="currentColor" />
    </svg>
  );
}

const SOCIAL_ITEMS = [
  { label: "Facebook", icon: <IconFacebook />, href: SITE_SOCIAL.facebook },
  { label: "Instagram", icon: <IconInstagram />, href: SITE_SOCIAL.instagram },
  { label: "TikTok", icon: <IconTiktok />, href: SITE_SOCIAL.tiktok },
  { label: "YouTube", icon: <IconYoutube />, href: SITE_SOCIAL.youtube },
  { label: "WhatsApp", icon: <IconWhatsapp />, href: SITE_SOCIAL.whatsapp },
] as const;

const NAV_LINKS = [
  { href: "/maternal", label: "Maternal" },
  { href: "/kinder", label: "Kínder" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
] as const;

export default function Footer({
  /** Color de la sección anterior (para la onda de transición). */
  topColor = "#FFFBFA",
}: {
  topColor?: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-white">
      {/* 2026-08-22: Onda suave hacia el cian (color alineado a la sección previa). */}
      <div className="leading-[0]" aria-hidden="true">
        <svg
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className="block h-10 w-full sm:h-12"
        >
          <path
            fill={topColor}
            d="M0,0 H1440 V20 C1200,48 1020,8 800,28 C580,48 400,12 220,30 C100,42 40,22 0,28 Z"
          />
        </svg>
      </div>

      <div className="bg-gradient-to-b from-[#3ADEFC] to-[#00D3F9] px-6 pb-8 pt-2 md:px-10 md:pb-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Marca + dirección */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={SITE_LOGO_PATH}
                alt={`Logo ${SITE_NAME}`}
                width={52}
                height={52}
                className="h-13 w-13 flex-shrink-0 rounded-full bg-white/20 p-1"
                style={{ width: 52, height: "auto" }}
              />
              <div>
                <p className="text-sm font-bold leading-tight tracking-wide">
                  {SITE_NAME}
                </p>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/85">
                  {SITE_TAGLINE}
                </p>
              </div>
            </div>
            <div className="space-y-0.5 text-xs leading-relaxed text-white/95 md:text-[13px]">
              {SITE_ADDRESS_LINES.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-1 font-semibold">Tel. {SITE_PHONE_DISPLAY}</p>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex flex-col items-center md:items-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
              Explorar
            </p>
            <nav
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
              aria-label="Enlaces del pie de página"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-semibold transition-colors hover:text-white/75 focus-visible:outline-2 focus-visible:outline-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Redes */}
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
              Síguenos
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_ITEMS.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{label}</span>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/25 pt-6 text-center text-[11px] text-white/85 md:flex-row md:text-left">
          <p>
            © {year} {SITE_NAME}. Maternal y Kínder en Ciudad Madero.
          </p>
          <Link
            href="/aviso-privacidad"
            className="font-semibold tracking-wider transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-white"
          >
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
