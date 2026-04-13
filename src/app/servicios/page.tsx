// 2026-04-09: Página de Servicios en Línea del Instituto Educativo Winston Churchill.
//             Seis portales de acceso con efecto hover de mancha roja orgánica.
//             Las URLs de cada portal deben completarse manualmente.
import Image from "next/image";

import AnimateOnScroll from "../components/AnimateOnScroll";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";

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
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

/* ──────────────────── Portales de servicio ─────────────────────────────── */
 const PORTALES = [
  {
    src: "/uploads/img/SERVICIOS/alta.png",
    label: "ALTA DE\nFACTURACIÓN",
    href: "https://www.winston93.edu.mx/pagos/login.php",
  },
  {
    src: "/uploads/img/SERVICIOS/colegiaturas.png",
    label: "COLEGIATURAS",
    href: "https://www.winston93.edu.mx/enlinea3/",
  },
  {
    src: "/uploads/img/SERVICIOS/usuario.png",
    label: "INSCRIPCIONES",
    href: "https://www.winston93.edu.mx/admisiones/",
  },
  {
    src: "/uploads/img/SERVICIOS/tareas.png",
    label: "TAREAS\nEN LÍNEA",
    href: "#",
  },
  {
    src: "/uploads/img/SERVICIOS/servicios_internos.png",
    label: "SERVICIOS\nINTERNOS",
    href: "https://www.winston93.edu.mx/news-lunch/",
  },
  {
    src: "/uploads/img/SERVICIOS/registro.png",
    label: "REGISTRO\nPARA EXAMEN",
    href: "https://agendaw.vercel.app/",
  },
];

/* ────────────────────────── Página ────────────────────────────────────── */

export default function ServiciosPage() {
  return (
    <>
      <LoadingScreen />
      <Navbar />

      {/* ══════════════════ SERVICIOS EN LÍNEA ════════════════════════════ */}
      {/* 2026-04-09: Se aumenta el padding superior para separar título e íconos del navbar fijo. */}
      <main className="relative min-h-screen overflow-hidden bg-white px-6 pt-28 pb-20 md:pt-36">

        {/* ── Decorativos de fondo (misma estética que la captura) ── */}
        {/* 2026-04-09: SVG ornamentales para mantener identidad visual de la marca. */}
        <svg className="pointer-events-none absolute left-6 top-16 w-36 opacity-10 md:w-48" viewBox="0 0 200 200" fill="none" aria-hidden="true">
          <circle cx="100" cy="100" r="70" stroke="#9ca3af" strokeWidth="6" />
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => (
            <line key={deg}
              x1={100 + 70 * Math.cos((deg * Math.PI) / 180)}
              y1={100 + 70 * Math.sin((deg * Math.PI) / 180)}
              x2={100 + 90 * Math.cos((deg * Math.PI) / 180)}
              y2={100 + 90 * Math.sin((deg * Math.PI) / 180)}
              stroke="#9ca3af" strokeWidth="5" strokeLinecap="round"
            />
          ))}
          <circle cx="100" cy="100" r="20" fill="#9ca3af" />
          <circle cx="100" cy="100" r="10" fill="white" />
        </svg>

        <svg className="pointer-events-none absolute right-6 top-12 w-12 opacity-10 md:w-16" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          {[0,72,144,216,288].map((deg, i) => (
            <line key={i}
              x1="50" y1="50"
              x2={50 + 45 * Math.cos(((deg - 90) * Math.PI) / 180)}
              y2={50 + 45 * Math.sin(((deg - 90) * Math.PI) / 180)}
              stroke="#9ca3af" strokeWidth="4" strokeLinecap="round"
            />
          ))}
        </svg>

        <svg className="pointer-events-none absolute bottom-28 left-4 w-20 opacity-10 md:w-28" viewBox="0 0 120 180" fill="none" aria-hidden="true">
          <ellipse cx="60" cy="60" r="40" stroke="#9ca3af" strokeWidth="5" />
          <path d="M60 100 Q30 130 40 170 Q60 145 80 170 Q90 130 60 100Z" fill="#9ca3af" />
        </svg>

        <svg className="pointer-events-none absolute bottom-24 right-4 w-16 opacity-10 md:w-24" viewBox="0 0 100 120" fill="none" aria-hidden="true">
          <path d="M50 10 C20 10 10 30 10 50 C10 70 20 90 50 110 C80 90 90 70 90 50 C90 30 80 10 50 10Z" stroke="#9ca3af" strokeWidth="5" fill="none" />
        </svg>

        {/* ── Título ── */}
        <AnimateOnScroll animation="fadeUp" delay={0}>
          <h1 className="mb-4 text-center text-2xl font-extrabold uppercase tracking-[0.25em] text-gray-400 md:text-3xl lg:text-4xl">
            Servicios en Línea
          </h1>
          <div className="mx-auto mb-16 h-px w-4/5 max-w-2xl bg-gray-300" />
        </AnimateOnScroll>

        {/* ── Grid de portales ── */}
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-y-16 gap-x-6 md:gap-x-10 md:gap-y-20">
          {PORTALES.map(({ src, label, href }, i) => {
            const isPlaceholder = href === "#";
            return (
              <AnimateOnScroll key={label} animation="fadeUp" delay={i * 80}>
                {/* 2026-04-13: En móvil se optimiza el tap para evitar que el hover bloquee la navegación.
                    También se desactiva visualmente el portal sin URL real ("#"), sin handlers de cliente para compatibilidad SSR. */}
                {/*
                 * 2026-04-09: Cada icono es un enlace con efecto hover de "mancha roja".
                 * La mancha es un div absoluto con border-radius orgánico que escala de 0 a 1
                 * en hover. El ícono pasa a blanco con mix-blend-mode para destacar sobre rojo.
                 */}
                <a
                  href={isPlaceholder ? undefined : href}
                  target={isPlaceholder ? undefined : "_blank"}
                  rel={isPlaceholder ? undefined : "noopener noreferrer"}
                  aria-disabled={isPlaceholder}
                  tabIndex={isPlaceholder ? -1 : undefined}
                  className={[
                    "group flex touch-manipulation flex-col items-center gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
                    isPlaceholder ? "cursor-not-allowed opacity-70" : "cursor-pointer",
                  ].join(" ")}
                  aria-label={label.replace("\n", " ")}
                >
                  {/* Contenedor del ícono + mancha */}
                  <div className="relative flex h-[120px] w-[120px] items-center justify-center md:h-[150px] md:w-[150px]">
                    {/* Mancha roja orgánica — escala en hover */}
                    <span
                      className="absolute inset-0 scale-0 rounded-[60%_40%_55%_45%/60%_45%_55%_40%] bg-[#e8192c] transition-transform duration-300 ease-out group-hover:scale-100 group-active:scale-100"
                      aria-hidden="true"
                    />
                    {/* Ícono PNG — se vuelve blanco sobre la mancha roja */}
                    <Image
                      src={src}
                      alt={label.replace("\n", " ")}
                      width={80}
                      height={80}
                      className="relative z-10 h-[72px] w-[72px] object-contain transition-all duration-300 md:h-[88px] md:w-[88px] group-hover:brightness-0 group-hover:invert group-active:brightness-0 group-active:invert"
                    />
                  </div>

                  {/* Etiqueta */}
                  <span className="whitespace-pre-line text-center text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors duration-300 group-hover:text-[#e8192c] group-active:text-[#e8192c] md:text-sm">
                    {label}
                  </span>
                </a>
              </AnimateOnScroll>
            );
          })}
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
              { label: "Facebook",  icon: <IconFacebook /> },
              { label: "TikTok",    icon: <IconTiktok /> },
              { label: "WhatsApp",  icon: <IconWhatsapp /> },
              { label: "Instagram", icon: <IconInstagram /> },
              { label: "YouTube",   icon: <IconYoutube /> },
            ].map(({ label, icon }) => (
              <a key={label} href="#" aria-label={label} className="transition-colors hover:text-white/70">
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
