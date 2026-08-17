// 2026-04-08: Página principal — conecta Navbar, LoadingScreen, HeroText y
//             AnimateOnScroll. Los banners no tienen animación propia;
//             solo íconos y textos usan AnimateOnScroll.
// 2026-08-17: Metadata propia del home y footer compartido para SEO.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "./components/AnimateOnScroll";
import Footer from "./components/Footer";
import HeroText from "./components/HeroText";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import { SITE_DESCRIPTION } from "@/lib/seo/site-config";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title:
      "Instituto Educativo Winston | Kínder y Maternal bilingüe en Cd. Madero",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Instituto Educativo Winston | Kínder y Maternal bilingüe en Cd. Madero",
    description: SITE_DESCRIPTION,
  },
};

/* ─────────────────────────── Página principal ──────────────────────────── */

export default function Home() {
  return (
    <>
      {/* Pantalla de carga animada */}
      <LoadingScreen />

      {/* Navbar sticky con hamburguesa */}
      <Navbar />

      {/* ══════════════════════════ HERO ══════════════════════════════════ */}
      {/* 2026-04-08: Portada completa con HeroText centrado y más arriba.
          El banner NO tiene animación; solo el texto/botón usa HeroText. */}
      {/* 2026-04-13: En móvil se incrementa la altura del hero para separar logo, texto wave y CTA. */}
      <section className="relative h-[76vh] min-h-[480px] w-full overflow-hidden sm:h-[72vh] md:h-[100vh]">
        <Image
          src="/uploads/img/INICIO/portada1.jpg"
          alt="Niño sonriente en el Instituto Educativo Winston"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Texto wave + botón CTA centrados */}
        <HeroText />
      </section>

      {/* ══════════════════════ BLOQUE 1 — Instituto ══════════════════════ */}
      {/* 2026-04-08: Solo íconos y textos tienen AnimateOnScroll; el banner no. */}
      <section className="relative w-full">
        {/* Banner — sin animación */}
        <Image
          src="/uploads/img/INICIO/bloque1.png"
          alt="Niña sonriente del Instituto Educativo Winston"
          width={1024}
          height={576}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />

        {/* Texto superpuesto desktop */}
        <div className="absolute inset-0 mx-auto hidden w-full max-w-[1100px] md:block">
          <div className="absolute right-[6%] top-[22%] w-[46%]">

            {/* Título con fadeUp */}
            <AnimateOnScroll animation="fadeUp" delay={0}>
              {/* 2026-04-13: Se aplica tono institucional exacto #00D3F9 en títulos solicitados. */}
              <p className="text-2xl font-light leading-tight text-[#00D3F9] lg:text-3xl">
                Instituto
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-[#00D3F9] lg:text-5xl">
                Educativo Winston
              </h2>
            </AnimateOnScroll>

            {/* 2026-04-13: Se agrega línea divisoria azul centrada entre ambas columnas
                para replicar el diseño original del bloque "Instituto Educativo Winston". */}
            <div className="relative mb-5 grid grid-cols-2 gap-5">
              <span
                // 2026-04-13: Se incrementa el grosor de la línea para mejorar legibilidad visual.
                className="pointer-events-none absolute left-1/2 top-1 bottom-1 w-[3px] -translate-x-1/2 bg-[#00D3F9]"
                aria-hidden="true"
              />
              {/* Ícono izquierdo con bounceIn */}
              <AnimateOnScroll animation="bounceIn" delay={100}>
                <Image
                  src="/uploads/img/INICIO/ic-cuidado.png"
                  alt="Cuidado y formación integral en Maternal y Kínder"
                  width={52}
                  height={52}
                  className="mx-auto mb-3 h-[34px] w-[34px] lg:h-[52px] lg:w-[52px]"
                />
                <p className="text-justify text-xs leading-relaxed text-gray-500 lg:text-sm">
                  En el Instituto Educativo Winston Churchill, cuidamos y
                  formamos a los más pequeños en un entorno seguro, amoroso y
                  diseñado para potenciar su desarrollo integral.
                </p>
              </AnimateOnScroll>

              {/* Ícono derecho con bounceIn */}
              <AnimateOnScroll animation="bounceIn" delay={200}>
                <Image
                  src="/uploads/img/INICIO/ic-carita-feliz.png"
                  alt="Aprendizaje divertido con inglés Cambridge"
                  width={52}
                  height={52}
                  className="mx-auto mb-3 h-[34px] w-[34px] lg:h-[52px] lg:w-[52px]"
                />
                <p className="text-justify text-xs leading-relaxed text-gray-500 lg:text-sm">
                  Ofrecemos experiencias de aprendizaje divertidas e
                  interactivas que impulsan su crecimiento cognitivo, emocional
                  y social, al mismo tiempo que adquieren bases sólidas en
                  inglés con el modelo Cambridge desde maternal.
                </p>
              </AnimateOnScroll>
            </div>

            {/* Párrafo final con fadeUp */}
            <AnimateOnScroll animation="fadeUp" delay={300}>
              <p className="text-justify text-xs leading-relaxed text-gray-500 lg:text-sm">
                Acompañamos a cada familia en esta etapa decisiva, asegurando
                que sus hijos crezcan felices, seguros y preparados para un
                futuro lleno de posibilidades.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Versión móvil del texto */}
        <div className="bg-white px-6 py-10 md:hidden">
          <AnimateOnScroll animation="fadeUp">
            <p className="text-2xl font-light leading-tight text-gray-500">Instituto</p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#00D3F9]">
              Educativo Winston
            </h2>
          </AnimateOnScroll>
          <div className="mb-5 grid grid-cols-1 gap-5">
            <AnimateOnScroll animation="slideLeft" delay={100}>
              <p className="text-justify text-sm leading-relaxed text-gray-500">
                En el Instituto Educativo Winston Churchill, cuidamos y formamos
                a los más pequeños en un entorno seguro, amoroso y diseñado para
                potenciar su desarrollo integral.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slideRight" delay={150}>
              <p className="text-justify text-sm leading-relaxed text-gray-500">
                Ofrecemos experiencias de aprendizaje divertidas e interactivas
                que impulsan su crecimiento cognitivo, emocional y social, al
                mismo tiempo que adquieren bases sólidas en inglés con el modelo
                Cambridge desde maternal.
              </p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fadeUp" delay={200}>
            <p className="text-justify text-sm leading-relaxed text-gray-500">
              Acompañamos a cada familia en esta etapa decisiva, asegurando que
              sus hijos crezcan felices, seguros y preparados para un futuro
              lleno de posibilidades.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════ BLOQUE 3 — Maternal / Kinder ══════════════════ */}
      {/* 2026-04-13: En móvil los íconos pasan a flujo normal para evitar empalmes con
          la sección de Cambridge; en desktop se mantiene overlay sobre el banner. */}
      <section className="relative overflow-hidden">
        {/* Banner — sin animación */}
        <Image
          src="/uploads/img/INICIO/bloque3.png"
          alt="Oferta educativa de Maternal y Kínder en el Instituto Educativo Winston"
          width={1024}
          height={576}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />

        {/* Íconos con bounceIn */}
        {/* 2026-04-13: Se mantiene superposición sobre el banner en todos los tamaños;
            en móvil se reduce escala/offset para evitar recortes. */}
        <div className="absolute inset-0 z-10 flex -translate-y-4 items-center justify-center gap-4 px-4 sm:-translate-y-8 sm:gap-6 sm:px-6 md:-translate-y-12 md:gap-16 md:px-6">
          <AnimateOnScroll animation="bounceIn" delay={0} className="inline-block">
            <Link
              href="/maternal"
              className="block transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
            >
              <Image
                src="/uploads/img/INICIO/maternal.png"
                alt="Nivel Maternal bilingüe en Cd. Madero"
                width={380}
                height={380}
                className="h-auto w-[165px] sm:w-[200px] md:w-[380px]"
              />
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="bounceIn" delay={150} className="inline-block">
            <Link
              href="/kinder"
              className="block transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
            >
              <Image
                src="/uploads/img/INICIO/kinder.png"
                alt="Nivel Kínder bilingüe Cambridge en Cd. Madero"
                width={380}
                height={380}
                className="h-auto w-[165px] sm:w-[200px] md:w-[380px]"
              />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════ CAMBRIDGE ═════════════════════════════════ */}
      {/* 2026-04-08: Logo y texto con fadeUp. */}
      {/* 2026-04-13: Se elimina margen negativo en móvil para no encimar "Certificados por"
          con el bloque de Maternal/Kinder; en desktop se conserva el ajuste original. */}
      <section className="relative z-20 mt-0 bg-white py-6 md:-mt-40 md:py-8">
        <AnimateOnScroll
          animation="fadeUp"
          className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-5 px-6 sm:flex-row md:gap-8"
        >
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-gray-400 md:text-lg">
            Certificados por
          </p>
          <Image
            src="/uploads/img/LOGOS/logo-cambridge.png"
            alt="Cambridge English Educational Partner"
            width={390}
            height={126}
            style={{ width: 390, height: "auto" }}
          />
        </AnimateOnScroll>
      </section>

      {/* 2026-08-17: Footer extraido a componente compartido. */}
      <Footer />
    </>
  );
}
