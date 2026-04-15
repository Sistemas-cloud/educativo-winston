// 2026-04-08: Página del nivel Maternal del Instituto Educativo Winston Churchill.
//             Secciones: hero (portada-maternal), info+íconos (bloque 1 m),
//             galería estática de eventos y footer.
//             Regla: banners sin animación; solo íconos y textos usan AnimateOnScroll.
import Image from "next/image";

import AnimateOnScroll from "../components/AnimateOnScroll";
import LoadingScreen from "../components/LoadingScreen";
import MaternalGallery from "../components/MaternalGallery";
import MaternalHeroText from "../components/MaternalHeroText";
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

/* ─────────── Configuración de íconos de "Impulsamos su" ─────────── */
// 2026-04-09: Se reemplazan placeholders SVG por íconos PNG finales compartidos por el usuario.
const impulsoItems = [
  { src: "/uploads/img/MATERNAL/icono-engrane.png", label: "Pensamiento crítico" },
  { src: "/uploads/img/MATERNAL/icono-foco.png", label: "Creatividad" },
  { src: "/uploads/img/MATERNAL/icono-niño.png", label: "Seguridad" },
];

/* ────────────────────────── Página ────────────────────────────────────── */

export default function MaternalPage() {
  return (
    <>
      {/* 2026-04-08: Pantalla de carga animada, igual a la de la página principal. */}
      <LoadingScreen />

      {/* Navbar con efectos de scroll y dropdown de oferta educativa */}
      <Navbar />

      {/* ══════════════════════════ HERO ══════════════════════════════════ */}
      {/* 2026-04-08: Portada maternal a full-width; banner sin animación.  */}
      <section className="relative h-[56.25vw] w-full max-h-[100vh] overflow-hidden">
        <Image
          src="/uploads/img/MATERNAL/portada-maternal.jpg"
          alt="Portada Maternal Instituto Educativo Winston"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Texto MATERNAL con animación pop-bounce */}
        <MaternalHeroText />
      </section>

      {/* ══════════════════ BLOQUE 1 — Info + Íconos ══════════════════════ */}
      {/* 2026-04-08: Banner sin animación; textos e íconos usan AnimateOnScroll. */}
      <section className="relative w-full">
        {/* Banner de fondo — nombre con espacio, Next.js lo codifica internamente */}
        <Image
          src="/uploads/img/MATERNAL/bloque 1 m.jpg"
          alt="Niños en el nivel Maternal del Instituto Winston"
          width={1024}
          height={576}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />

        {/* Texto superpuesto — desktop (lado izquierdo del banner) */}
        <div className="absolute inset-0 hidden md:block">
          {/* 2026-04-09: Ajuste fino en desktop para mover el bloque más a la derecha y un poco más abajo. */}
          <div className="absolute left-[10%] top-[10%] w-[40%]">

            {/* Título + párrafos */}
            <AnimateOnScroll animation="fadeUp" delay={0}>
              {/* 2026-04-13: Se normaliza azul de títulos a tono exacto #00D3F9. */}
              <h3 className="mb-3 text-base font-extrabold uppercase leading-snug tracking-wide text-[#00D3F9] lg:text-xl">
                Una etapa clave que potencia<br />
                su desarrollo bilingüe<br />
                desde el inicio
              </h3>
              <p className="mb-3 text-justify text-sm leading-relaxed text-gray-600 lg:text-base">
                En Maternal Winston, sus hijos comienzan a vivir el inglés
                desde el primer día, incorporándose de forma natural en su
                rutina gracias a nuestro modelo educativo respaldado por la
                certificación Cambridge.
              </p>
              <p className="text-justify text-sm leading-relaxed text-gray-600 lg:text-base">
                Esto les permite desarrollar sólidas habilidades comunicativas
                desde temprano, sentando las bases para dominar el idioma con
                confianza a lo largo de su vida escolar.
              </p>
            </AnimateOnScroll>

            {/* Sección Impulsamos su */}
            <AnimateOnScroll animation="fadeUp" delay={200}>
              <h4 className="mt-5 mb-4 text-center text-sm font-extrabold uppercase tracking-widest text-[#00D3F9] lg:text-base">
                Impulsamos su:
              </h4>
              <div className="flex items-start justify-center gap-6">
                {impulsoItems.map(({ src, label }, i) => (
                  <AnimateOnScroll
                    key={label}
                    animation="bounceIn"
                    delay={i * 100}
                    className="flex flex-col items-center gap-1"
                  >
                    {/* 2026-04-09: Íconos finales PNG para la sección "Impulsamos su". */}
                    <div className="h-[72px] w-[72px] drop-shadow-md transition-transform hover:scale-110 lg:h-[92px] lg:w-[92px]">
                      <Image
                        src={src}
                        alt={label}
                        width={92}
                        height={92}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="max-w-[80px] text-center text-xs font-bold text-gray-700 lg:max-w-[100px]">
                      {label}
                    </span>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>

            {/* Párrafo de cierre */}
            <AnimateOnScroll animation="fadeUp" delay={350}>
              <p className="mt-4 text-justify text-sm leading-relaxed text-gray-600 lg:text-base">
                Todo dentro de un ambiente cálido, seguro y estimulante.
                Así, cada pequeño avanza con autonomía y aprendizaje
                activo, preparándose para brillar en preescolar, primaria
                y más allá.
              </p>
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
              En Maternal Winston, sus hijos comienzan a vivir el inglés
              desde el primer día, incorporándose de forma natural en su
              rutina gracias a nuestro modelo educativo respaldado por la
              certificación Cambridge.
            </p>
            <p className="text-justify text-sm leading-relaxed text-gray-600">
              Esto les permite desarrollar sólidas habilidades comunicativas
              desde temprano, sentando las bases para dominar el idioma con
              confianza a lo largo de su vida escolar.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={150}>
            <h4 className="mt-6 mb-4 text-center text-sm font-extrabold uppercase tracking-widest text-[#00D3F9]">
              Impulsamos su:
            </h4>
            <div className="flex justify-center gap-8">
              {impulsoItems.map(({ src, label }, i) => (
                <AnimateOnScroll
                  key={label}
                  animation="bounceIn"
                  delay={i * 100}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="h-[64px] w-[64px]">
                    {/* 2026-04-09: Íconos finales PNG también aplicados en móvil para mantener consistencia. */}
                    <Image
                      src={src}
                      alt={label}
                      width={64}
                      height={64}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="max-w-[70px] text-center text-xs font-bold text-gray-700">
                    {label}
                  </span>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp" delay={250}>
            <p className="mt-4 text-justify text-sm leading-relaxed text-gray-600">
              Todo dentro de un ambiente cálido, seguro y estimulante.
              Así, cada pequeño avanza con autonomía y aprendizaje activo,
              preparándose para brillar en preescolar, primaria y más allá.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 2026-04-13: Se ajusta la cinta de Maternal para evitar empalmes con el contenido superior y preservar legibilidad en desktop/tablet. */}
      <section className="relative z-20 hidden w-full md:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-8 pt-4 lg:px-12 lg:pt-6">
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

      {/* ══════════════════ BLOQUE 2 — Galería de eventos ═════════════════ */}
      {/* 2026-04-08: Mismo fondo de ondas rojas de Kinder; galería estática
          con hover (sin movimiento continuo). */}
      <section className="relative w-full">
        <Image
          src="/uploads/img/MATERNAL/bloque2-kinder.png"
          alt=""
          width={1024}
          height={576}
          aria-hidden="true"
          sizes="100vw"
          className="h-auto w-full object-cover"
        />

        {/* 2026-04-08: Galería posicionada en la mitad-baja del banner. */}
        <div className="absolute inset-x-0 bottom-[11%] flex justify-center px-4 md:bottom-[13%] md:px-8">
          <div className="w-full max-w-5xl">
            <MaternalGallery />
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FOOTER ════════════════════════════════ */}
      {/* 2026-04-08: Footer idéntico al de kinder y la página principal. */}
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
              { label: "WhatsApp",  icon: <IconWhatsapp />,  href: "#" },
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
