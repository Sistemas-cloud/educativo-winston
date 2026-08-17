// 2026-04-08: Página del nivel Maternal del Instituto Educativo Winston Churchill.
//             Secciones: hero (portada-maternal), info+íconos (bloque 1 m),
//             galería estática de eventos y footer.
//             Regla: banners sin animación; solo íconos y textos usan AnimateOnScroll.
// 2026-08-17: Metadata unica de /maternal y footer compartido.
import type { Metadata } from "next";
import Image from "next/image";

import AnimateOnScroll from "../components/AnimateOnScroll";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import MaternalGallery from "../components/MaternalGallery";
import MaternalHeroText from "../components/MaternalHeroText";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Maternal bilingüe Cambridge en Cd. Madero",
  description:
    "Maternal Winston en Ciudad Madero: inglés desde el primer día con modelo Cambridge, ambiente cálido y bases para preescolar y kínder.",
  alternates: { canonical: "/maternal" },
  openGraph: {
    title: "Maternal bilingüe Cambridge en Cd. Madero | Instituto Educativo Winston",
    description:
      "Maternal Winston: inglés Cambridge desde el primer día en un entorno seguro y estimulante.",
    url: "/maternal",
    images: [
      {
        url: "/uploads/img/MATERNAL/portada-maternal.jpg",
        alt: "Portada Maternal Instituto Educativo Winston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maternal bilingüe Cambridge en Cd. Madero | Instituto Educativo Winston",
    description:
      "Maternal Winston: inglés Cambridge desde el primer día en un entorno seguro y estimulante.",
    images: ["/uploads/img/MATERNAL/portada-maternal.jpg"],
  },
};

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
                El inglés llega desde el primer día,<br />
                en un entorno cálido, seguro<br />
                y estimulante
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
              El inglés llega desde el primer día, en un entorno cálido, seguro y estimulante
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
          alt="Galería de eventos del nivel Maternal Winston"
          width={1024}
          height={576}
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

      {/* 2026-08-17: Footer extraido a componente compartido. */}
      <Footer />
    </>
  );
}
