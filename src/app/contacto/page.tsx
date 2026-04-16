// 2026-04-09: Página de Contacto del Instituto Educativo Winston Churchill.
//             Incluye hero con banner, formulario de cita (Server Action + nodemailer),
//             mapa de Google Maps y horario de atención. Footer idéntico al resto del sitio.
import Image from "next/image";

import AnimateOnScroll from "../components/AnimateOnScroll";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import ContactForm from "./ContactForm";

/* ─────────────────────────── Íconos de redes sociales ─────────────────── */

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
    // 2026-04-13: Se unifica el estilo de YouTube a versión monocromática para mantener coherencia visual con los demás íconos del footer.
    // 2026-04-13: Se incrementa tamaño óptico de YouTube (área y grosor) para igualarlo visualmente con los demás íconos.
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4.5" width="20" height="15" rx="4" ry="4" />
      <polygon points="9.5 8.6 16.8 12 9.5 15.4" fill="currentColor" stroke="currentColor" />
    </svg>
  );
}

/* ────────────────────────── Página ────────────────────────────────────── */

export default function ContactoPage() {
  return (
    <>
      <LoadingScreen />
      <Navbar />

      {/* ══════════════════════ HERO ══════════════════════════════════════ */}
      {/* 2026-04-09: Banner de contacto con overlay cian semitransparente. */}
      {/* 2026-04-16: Se corrige la imagen del hero para usar el banner oficial de CONTACTANOS. */}
      <section className="relative h-[38vw] min-h-[200px] max-h-[320px] w-full overflow-hidden">
        <Image
          src="/uploads/img/CONTACTANOS/banner.jpg"
          alt="Instituto Educativo Winston Churchill"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay cian igual al tono de la captura de referencia */}
        <div className="absolute inset-0 bg-[#3ADEFC]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-extrabold uppercase tracking-[0.25em] text-white drop-shadow md:text-4xl lg:text-5xl">
            Contáctanos
          </h1>
        </div>
      </section>

      {/* ══════════════════ CONTENIDO PRINCIPAL ═══════════════════════════ */}
      <main className="bg-white px-6 py-14 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

          {/* ── Columna izquierda: formulario ── */}
          <AnimateOnScroll animation="fadeUp" delay={0}>
            <ContactForm />
          </AnimateOnScroll>

          {/* ── Columna derecha: mapa + horario ── */}
          <AnimateOnScroll animation="fadeUp" delay={150}>
            <div className="flex flex-col gap-8">

              {/* Mapa de Google Maps embed */}
              {/* 2026-04-09: Dirección: C. 2 209, Jardín 20 de Noviembre, 89440 Cd Madero, Tamps. */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <iframe
                  title="Ubicación Instituto Educativo Winston Churchill"
                  src="https://maps.google.com/maps?q=C+2+209+Jard%C3%ADn+20+de+Noviembre+89440+Ciudad+Madero+Tamaulipas+M%C3%A9xico&output=embed&z=16&hl=es"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Horario de atención */}
              <div>
                <h2 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-gray-500">
                  Horario de Atención
                </h2>
                <table className="w-full text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1 pr-8 font-bold uppercase tracking-wider">Lunes a Viernes</td>
                      <td className="py-1">9 AM – 5 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-8 font-bold uppercase tracking-wider">Sábados</td>
                      <td className="py-1">9 AM – 1 PM</td>
                    </tr>
                  </tbody>
                </table>

                {/* Dirección */}
                <div className="mt-5 flex items-start gap-3 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-[#e8192c]" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <address className="not-italic leading-relaxed">
                    C. 2 #209, Jardín 20 de Noviembre<br />
                    89440 Cd. Madero, Tamaulipas<br />
                    Tel. 833 362 48 19
                  </address>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      {/* ══════════════════════════ FOOTER ════════════════════════════════ */}
      {/* 2026-04-09: Footer idéntico al resto de páginas del sitio. */}
      <footer className="bg-[#3ADEFC] px-6 py-5 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/uploads/img/LOGOS/winston-educativo.png"
              alt="Logo Instituto Educativo Winston"
              width={48}
              height={48}
              style={{ width: 48, height: "auto" }}
              className="flex-shrink-0"
            />
            <div className="text-xs leading-5">
              <p className="mb-0.5 text-sm font-bold tracking-wider">RAISING BRIGHTER KIDS</p>
              <p>CALLE 2 #309 COL. JARDÍN 20 DE NOVIEMBRE</p>
              <p>CD. MADERO, TAMAULIPAS.</p>
              <p>TEL 833 362 48 19</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            {[
              // 2026-04-13: Enlaces reales de redes sociales compartidos por el cliente.
              { label: "Facebook",  icon: <IconFacebook />,  href: "https://www.tiktok.com/@imageneducativo" },
              { label: "TikTok",    icon: <IconTiktok />,    href: "https://www.tiktok.com/@imageneducativo" },
              { label: "WhatsApp",  icon: <IconWhatsapp />,  href: "https://wa.me/528333474507" },
              { label: "Instagram", icon: <IconInstagram />, href: "https://www.instagram.com/educativowinston/" },
              { label: "YouTube",   icon: <IconYoutube />,   href: "https://www.youtube.com/@institutowinstonchurchill5194" },
            ].map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors hover:text-white/70"
                target={href === "#" ? undefined : "_blank"}
                rel={href === "#" ? undefined : "noopener noreferrer"}
              >
                {icon}
              </a>
            ))}
          </div>

          <a
            href="/aviso-privacidad"
            className="text-xs font-semibold tracking-widest transition-colors hover:text-white/70 hover:underline"
          >
            AVISO DE PRIVACIDAD
          </a>
        </div>
      </footer>
    </>
  );
}
