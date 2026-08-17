// 2026-04-08: Página del nivel Kinder del Instituto Educativo Winston Churchill.
//             Secciones: hero (portada-kinder), info+talleres (bloque-1-kinder),
//             carrusel de eventos (bloque-2-kinder) y footer.
//             Regla: banners sin animación; solo íconos y textos usan AnimateOnScroll.
// 2026-08-17: Metadata unica de /kinder y footer compartido.
import type { Metadata } from "next";
import Image from "next/image";

import AnimateOnScroll from "../components/AnimateOnScroll";
import EventsCarousel from "../components/EventsCarousel";
import Footer from "../components/Footer";
import KinderHeroText from "../components/KinderHeroText";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Kínder bilingüe Cambridge en Cd. Madero",
  description:
    "Kínder Winston en Ciudad Madero: desarrollo cognitivo, emocional y social con inglés Cambridge, talleres de hip hop, fútbol y yoga, y servicio de estancia.",
  alternates: { canonical: "/kinder" },
  openGraph: {
    title: "Kínder bilingüe Cambridge en Cd. Madero | Instituto Educativo Winston",
    description:
      "Kínder Winston en Ciudad Madero: inglés Cambridge, talleres y estancia en un entorno seguro.",
    url: "/kinder",
    images: [
      {
        url: "/uploads/img/KINDER/portada-kinder.png",
        alt: "Portada Kinder Instituto Educativo Winston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kínder bilingüe Cambridge en Cd. Madero | Instituto Educativo Winston",
    description:
      "Kínder Winston en Ciudad Madero: inglés Cambridge, talleres y estancia en un entorno seguro.",
    images: ["/uploads/img/KINDER/portada-kinder.png"],
  },
};

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
                Kínder bilingüe que fortalece<br />
                autonomía, pensamiento lógico<br />
                y seguridad para expresarse
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
              Kínder bilingüe que fortalece autonomía, pensamiento lógico y seguridad para expresarse
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
          alt="Eventos y vida escolar del Kínder Winston"
          width={1024}
          height={576}
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

      {/* 2026-08-17: Footer extraido a componente compartido. */}
      <Footer />
    </>
  );
}
