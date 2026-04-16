// 2026-04-08: Página del nivel Kinder del Instituto Educativo Winston Churchill.
//             Secciones: hero (portada-kinder), info+talleres (bloque-1-kinder),
//             carrusel de eventos (bloque-2-kinder) y footer.
//             Regla: banners sin animación; solo íconos y textos usan AnimateOnScroll.
import Image from "next/image";

import AnimateOnScroll from "../components/AnimateOnScroll";
import EventsCarousel from "../components/EventsCarousel";
import KinderHeroText from "../components/KinderHeroText";
// 2026-04-08: Se agrega pantalla de carga igual a la de la página principal.
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
    // 2026-04-13: Se unifica el estilo de YouTube a versión monocromática para mantener coherencia visual con los demás íconos del footer.
    // 2026-04-13: Se incrementa tamaño óptico de YouTube (área y grosor) para igualarlo visualmente con los demás íconos.
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4.5" width="20" height="15" rx="4" ry="4" />
      <polygon points="9.5 8.6 16.8 12 9.5 15.4" fill="currentColor" stroke="currentColor" />
    </svg>
  );
}

/* ────────────────────────── Talleres (datos) ───────────────────────────── */

const TALLERES = [
  { src: "/uploads/img/KINDER/icono-de-hip-hop.png", label: "HIP HOP" },
  { src: "/uploads/img/KINDER/icono-futbol.png",     label: "FÚTBOL"  },
  { src: "/uploads/img/KINDER/icono-de-yoga.png",    label: "YOGA"    },
];

/* ────────────────────────── Página ────────────────────────────────────── */

export default function KinderPage() {
  return (
    <>
      {/* 2026-04-08: Pantalla de carga animada, igual a la de la página principal. */}
      <LoadingScreen />

      {/* Navbar con efectos de scroll y dropdown de oferta educativa */}
      <Navbar />

      {/* ══════════════════════════ HERO ══════════════════════════════════ */}
      {/* 2026-04-08: Portada kinder a full-width; banner sin animación.    */}
      <section className="relative h-[56.25vw] w-full max-h-[100vh] overflow-hidden">
        <Image
          src="/uploads/img/KINDER/portada-kinder.png"
          alt="Portada Kinder Instituto Educativo Winston"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Texto KINDER con animación typewriter */}
        <KinderHeroText />
      </section>

      {/* ══════════════════ BLOQUE 1 — Info + Talleres ════════════════════ */}
      {/* 2026-04-08: Banner sin animación; textos e íconos usan AnimateOnScroll. */}
      <section className="relative w-full">
        {/* Banner de fondo */}
        <Image
          src="/uploads/img/KINDER/bloque-1-kinder.jpg"
          alt="Niños en el Kinder Winston"
          width={1024}
          height={576}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />

        {/* Texto superpuesto — desktop (lado izquierdo del banner) */}
        <div className="absolute inset-0 hidden md:block">
          {/* 2026-04-08: Ajuste de preview; movemos el bloque y reducimos ancho a ~3/4 para mejor lectura. */}
          <div className="absolute left-[10%] top-[10%] w-[33%]">

            {/* Título destacado + párrafos */}
            <AnimateOnScroll animation="fadeUp" delay={0}>
              {/* 2026-04-08: Título con mayor presencia visual en desktop. */}
              {/* 2026-04-13: Se normaliza azul de títulos a tono exacto #00D3F9. */}
              <h3 className="mb-3 text-base font-extrabold uppercase leading-snug tracking-wide text-[#00D3F9] lg:text-xl">
                Una etapa clave que potencia<br />
                su desarrollo bilingüe<br />
                desde el inicio
              </h3>
              <p className="mb-3 text-justify text-sm leading-relaxed text-gray-600 lg:text-base">
                En Kínder Winston, acompañamos a cada niño en una etapa clave
                para consolidar su desarrollo cognitivo, emocional y social.
                A través de proyectos, dinámicas grupales y actividades lúdicas,
                los guiamos para fortalecer su pensamiento lógico, su capacidad
                de expresarse con seguridad y su autonomía.
              </p>
              <p className="text-justify text-sm leading-relaxed text-gray-600 lg:text-base">
                Nuestro modelo bilingüe, respaldado por la certificación
                Cambridge, impulsa el dominio del inglés desde un enfoque
                práctico y significativo. Así, sentamos bases firmes para un
                aprendizaje sólido y continuo que trasciende el aula.
              </p>
            </AnimateOnScroll>

            {/* Sección Talleres */}
            <AnimateOnScroll animation="fadeUp" delay={200}>
              <h4 className="mt-5 mb-4 text-center text-sm font-extrabold uppercase tracking-widest text-[#00D3F9] lg:text-base">
                Talleres
              </h4>
              <div className="flex items-start justify-center gap-6">
                {TALLERES.map((t, i) => (
                  <AnimateOnScroll
                    key={t.label}
                    animation="bounceIn"
                    delay={i * 100}
                    className="flex flex-col items-center gap-1"
                  >
                    <Image
                      src={t.src}
                      alt={t.label}
                      width={92}
                      height={92}
                      // 2026-04-08: Íconos de talleres más grandes en desktop.
                      className="h-auto w-[72px] drop-shadow-md transition-transform hover:scale-110 lg:w-[92px]"
                    />
                    <span className="text-xs font-bold text-gray-700">
                      {t.label}
                    </span>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Versión móvil: texto debajo de la imagen */}
        <div className="bg-white px-6 py-10 md:hidden">
          <AnimateOnScroll animation="fadeUp">
            <h3 className="mb-3 text-sm font-extrabold uppercase leading-snug tracking-wide text-[#00D3F9]">
              Una etapa clave que potencia su desarrollo bilingüe desde el inicio
            </h3>
            <p className="mb-3 text-justify text-sm leading-relaxed text-gray-600">
              En Kínder Winston, acompañamos a cada niño en una etapa clave
              para consolidar su desarrollo cognitivo, emocional y social.
              A través de proyectos, dinámicas grupales y actividades lúdicas,
              los guiamos para fortalecer su pensamiento lógico, su capacidad
              de expresarse con seguridad y su autonomía.
            </p>
            <p className="text-justify text-sm leading-relaxed text-gray-600">
              Nuestro modelo bilingüe, respaldado por la certificación
              Cambridge, impulsa el dominio del inglés desde un enfoque
              práctico y significativo. Así, sentamos bases firmes para un
              aprendizaje sólido y continuo que trasciende el aula.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={150}>
            <h4 className="mt-6 mb-4 text-center text-sm font-extrabold uppercase tracking-widest text-[#00D3F9]">
              Talleres
            </h4>
            <div className="flex justify-center gap-8">
              {TALLERES.map((t, i) => (
                <AnimateOnScroll
                  key={t.label}
                  animation="bounceIn"
                  delay={i * 100}
                  className="flex flex-col items-center gap-1"
                >
                  <Image
                    src={t.src}
                    alt={t.label}
                    width={64}
                    height={64}
                    style={{ width: 64, height: "auto" }}
                  />
                  <span className="text-xs font-bold text-gray-700">{t.label}</span>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2026-04-08: Cintas informativas con entrada desde lados y unión al centro (desktop). */}
      <section className="relative -mt-20 hidden w-full md:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-8 lg:px-12">
          <AnimateOnScroll animation="fadeUp" className="kinder-ribbon-left w-1/2">
            <div className="relative bg-red-500 px-8 py-3 text-center">
              <span className="text-lg font-extrabold uppercase tracking-wide text-white">
                Servicio de Estancia
              </span>
              <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-3xl font-black text-white">
                +
              </span>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeUp" className="kinder-ribbon-right w-1/2">
            <div className="relative bg-cyan-400 px-8 py-3 text-center">
              <span className="text-lg font-extrabold uppercase tracking-wide text-white">
                Inglés desde los primeros pasos
              </span>
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-3xl font-black text-white">
                +
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════ BLOQUE 2 — Carrusel de eventos ════════════════ */}
      {/* 2026-04-08: Banner rojo como fondo; carrusel superpuesto SIN AnimateOnScroll
          para evitar que el wrapper opacity:0 bloquee la animación de la cinta. */}
      <section className="relative w-full">
        {/* Fondo de ondas rojas — sin animación */}
        <Image
          src="/uploads/img/KINDER/bloque-2-kinder.png"
          alt=""
          width={1024}
          height={576}
          aria-hidden="true"
          sizes="100vw"
          className="h-auto w-full object-cover"
        />

        {/* 2026-04-08: Ajuste fino; subimos un poco la cintilla/carrusel en desktop y móvil. */}
        <div className="absolute inset-x-0 bottom-[11%] flex justify-center px-0 md:bottom-[13%]">
          <div className="w-full">
            <EventsCarousel />
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FOOTER ════════════════════════════════ */}
      {/* 2026-04-08: Footer idéntico al de la página principal. */}
      <footer className="bg-[#3ADEFC] px-6 py-5 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo + datos */}
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

          {/* Redes sociales */}
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

          {/* Aviso de privacidad */}
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
