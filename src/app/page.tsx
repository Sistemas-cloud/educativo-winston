// 2026-04-08: Página principal — Navbar, LoadingScreen, HeroText y AnimateOnScroll.
// 2026-08-17: Metadata propia del home y footer compartido para SEO.
// 2026-08-22: Home ICT+Columbia — áreas + CTA; naming sin Churchill.
// 2026-08-22: Se restaura bloque1 (doodles) y bloque3 (ondas); ambiente continuo.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "./components/AnimateOnScroll";
import Footer from "./components/Footer";
import { HomeDoodles, HomeWave } from "./components/HomeAmbient";
import HeroText from "./components/HeroText";
import HomeDevelopmentCards from "./components/HomeDevelopmentCards";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import { SITE_NAME, SITE_SOCIAL } from "@/lib/seo/site-config";

export const metadata: Metadata = {
  title: {
    absolute:
      "Instituto Educativo Winston | Maternal y Kínder en Ciudad Madero",
  },
  description:
    "Instituto Educativo Winston: Maternal y Kínder bilingüe en Ciudad Madero, Tamaulipas. Modelo Cambridge, formación integral y acompañamiento a familias.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title:
      "Instituto Educativo Winston | Maternal y Kínder en Ciudad Madero",
    description:
      "Maternal y Kínder bilingüe con modelo Cambridge y acompañamiento cercano a cada familia en Ciudad Madero.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Instituto Educativo Winston | Maternal y Kínder en Ciudad Madero",
    description:
      "Maternal y Kínder bilingüe con modelo Cambridge y acompañamiento cercano a cada familia en Ciudad Madero.",
  },
};

const NIVELES = [
  {
    href: "/maternal",
    src: "/uploads/img/INICIO/maternal.png",
    title: "Maternal",
    text: "Inglés desde el primer día en un entorno cálido, seguro y estimulante para los más pequeños.",
    alt: "Nivel Maternal bilingüe — Instituto Educativo Winston en Ciudad Madero",
  },
  {
    href: "/kinder",
    src: "/uploads/img/INICIO/kinder.png",
    title: "Kínder",
    text: "Autonomía, pensamiento lógico y expresión segura, con talleres y modelo Cambridge.",
    alt: "Nivel Kínder bilingüe Cambridge — Instituto Educativo Winston en Ciudad Madero",
  },
] as const;

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative h-[76vh] min-h-[480px] w-full overflow-hidden sm:h-[72vh] md:h-[100vh]">
        <Image
          src="/uploads/img/INICIO/portada1.jpg"
          alt="Niño sonriente en el Instituto Educativo Winston — Maternal y Kínder"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* 2026-08-22: Gradiente inferior para legibilidad del subtítulo y CTA. */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
          aria-hidden="true"
        />
        <HeroText />
        {/* 2026-08-22: Onda blanca inferior — une el hero con el bloque Instituto. */}
        <div className="absolute inset-x-0 bottom-0 z-20 leading-[0]" aria-hidden="true">
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="block h-12 w-full sm:h-14 md:h-16"
          >
            <path
              fill="#ffffff"
              d="M0,80 L1440,80 L1440,36 C1200,64 1080,12 900,32 C720,52 540,8 360,28 C180,48 60,20 0,40 Z"
            />
            <path
              fill="#ffffff"
              fillOpacity="0.5"
              d="M0,80 L1440,80 L1440,48 C1260,28 1100,60 900,44 C700,28 500,58 300,42 C150,30 60,50 0,56 Z"
            />
          </svg>
        </div>
      </section>

      {/* ═══ BLOQUE 1 — Instituto (doodles originales) ═══ */}
      <section className="relative w-full bg-white">
        <Image
          src="/uploads/img/INICIO/bloque1.png"
          alt="Niña sonriente del Instituto Educativo Winston"
          width={1024}
          height={576}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />

        <div className="absolute inset-0 mx-auto hidden w-full max-w-[1100px] md:block">
          <div className="absolute right-[6%] top-[22%] w-[46%]">
            <AnimateOnScroll animation="fadeUp" delay={0}>
              <p className="text-2xl font-light leading-tight text-[#00D3F9] lg:text-3xl">
                Instituto
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-[#00D3F9] lg:text-5xl">
                Educativo Winston
              </h2>
            </AnimateOnScroll>

            <div className="relative mb-5 grid grid-cols-2 gap-5">
              <span
                className="pointer-events-none absolute left-1/2 top-1 bottom-1 w-[3px] -translate-x-1/2 bg-[#00D3F9]"
                aria-hidden="true"
              />
              <AnimateOnScroll animation="bounceIn" delay={100}>
                <Image
                  src="/uploads/img/INICIO/ic-cuidado.png"
                  alt="Cuidado y formación integral en Maternal y Kínder"
                  width={52}
                  height={52}
                  className="mx-auto mb-3 h-[34px] w-[34px] lg:h-[52px] lg:w-[52px]"
                />
                <p className="text-justify text-xs leading-relaxed text-gray-500 lg:text-sm">
                  En el Instituto Educativo Winston cuidamos y formamos a los
                  más pequeños en un entorno seguro, amoroso y diseñado para
                  potenciar su desarrollo integral.
                </p>
              </AnimateOnScroll>

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

            <AnimateOnScroll animation="fadeUp" delay={300}>
              <p className="text-justify text-xs leading-relaxed text-gray-500 lg:text-sm">
                Acompañamos a cada familia en esta etapa decisiva, asegurando
                que sus hijos crezcan felices, seguros y preparados para un
                futuro lleno de posibilidades.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="bg-white px-6 py-10 md:hidden">
          <AnimateOnScroll animation="fadeUp">
            <p className="text-2xl font-light leading-tight text-gray-500">
              Instituto
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#00D3F9]">
              Educativo Winston
            </h2>
          </AnimateOnScroll>
          <div className="mb-5 grid grid-cols-1 gap-5">
            <AnimateOnScroll animation="slideLeft" delay={100}>
              <div className="flex flex-col items-center gap-3 sm:items-start">
                <Image
                  src="/uploads/img/INICIO/ic-cuidado.png"
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11"
                />
                <p className="text-justify text-sm leading-relaxed text-gray-500">
                  En el Instituto Educativo Winston cuidamos y formamos a los
                  más pequeños en un entorno seguro, amoroso y diseñado para
                  potenciar su desarrollo integral.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slideRight" delay={150}>
              <div className="flex flex-col items-center gap-3 sm:items-start">
                <Image
                  src="/uploads/img/INICIO/ic-carita-feliz.png"
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11"
                />
                <p className="text-justify text-sm leading-relaxed text-gray-500">
                  Ofrecemos experiencias de aprendizaje divertidas e
                  interactivas que impulsan su crecimiento cognitivo, emocional
                  y social, al mismo tiempo que adquieren bases sólidas en
                  inglés con el modelo Cambridge desde maternal.
                </p>
              </div>
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

      {/* ═══ MATERNAL + KÍNDER (cards) — transición difuminada ═══ */}
      {/* 2026-08-22: Se suaviza el corte recto de bloque3 con máscara, velo y onda. */}
      <section className="relative overflow-hidden bg-white">
        {/* Franja decorativa: se conserva la onda superior + huella, sin borde duro */}
        <div className="relative h-[168px] w-full sm:h-[200px] md:h-[240px]">
          <Image
            src="/uploads/img/INICIO/bloque3.png"
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none select-none object-cover object-top"
            style={{
              maskImage:
                "linear-gradient(to bottom, #000 0%, #000 42%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, #000 42%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Velo rosa → blanco (difumina el rojo hacia el contenido) */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#ffe8ea]/35 to-white"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white sm:h-32"
            aria-hidden="true"
          />

          {/* Onda suave blanca (sustituye la línea recta) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 leading-[0]" aria-hidden="true">
            <svg
              viewBox="0 0 1440 90"
              preserveAspectRatio="none"
              className="block h-14 w-full sm:h-16 md:h-20"
            >
              <path
                fill="#ffffff"
                fillOpacity="0.45"
                d="M0,40 C180,70 360,10 540,38 C720,66 900,8 1080,36 C1260,64 1360,20 1440,34 L1440,90 L0,90 Z"
              />
              <path
                fill="#ffffff"
                fillOpacity="0.7"
                d="M0,52 C220,28 400,72 600,48 C800,24 980,68 1180,44 C1300,30 1380,50 1440,42 L1440,90 L0,90 Z"
              />
              <path
                fill="#ffffff"
                d="M0,62 C200,48 380,78 560,58 C760,34 940,76 1140,54 C1280,40 1360,60 1440,52 L1440,90 L0,90 Z"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 mx-auto -mt-6 max-w-5xl px-6 pb-8 sm:-mt-8 md:-mt-10 md:px-10 md:pb-10">
          <HomeDoodles tone="cyan" />

          <AnimateOnScroll animation="fadeUp">
            <h2 className="mb-3 text-center text-2xl font-bold text-[#00D3F9] md:text-3xl">
              Nuestra oferta educativa
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-500 md:mb-12 md:text-base">
              Dos niveles pensados para la primera infancia. Elige el que
              corresponde a tu hijo y conoce el día a día en el aula.
            </p>
          </AnimateOnScroll>

          <div className="relative z-[1] grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {NIVELES.map((nivel, i) => (
              <AnimateOnScroll
                key={nivel.href}
                animation="fadeUp"
                delay={i * 100}
              >
                <Link
                  href={nivel.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#00D3F9]/15 bg-white shadow-[0_12px_40px_-18px_rgba(0,211,249,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00D3F9]/40 hover:shadow-[0_18px_48px_-16px_rgba(232,25,44,0.25)] focus-visible:outline-2 focus-visible:outline-[#00D3F9]"
                >
                  <div className="flex items-center justify-center bg-gradient-to-b from-[#E8F9FC] via-[#F7FBFC] to-white px-8 pt-10 pb-4">
                    <Image
                      src={nivel.src}
                      alt={nivel.alt}
                      width={280}
                      height={280}
                      className="h-auto w-[200px] transition-transform duration-300 group-hover:scale-105 md:w-[240px]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-8 pb-8 pt-2 text-center">
                    <h3 className="mb-2 text-xl font-bold tracking-wide text-gray-700 group-hover:text-[#00D3F9]">
                      {nivel.title}
                    </h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                      {nivel.text}
                    </p>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#e8192c]">
                      Conocer más →
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAMBRIDGE ═══ */}
      <section className="relative z-20 bg-white py-10 md:py-12">
        <AnimateOnScroll
          animation="fadeUp"
          className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-5 px-6 sm:flex-row md:gap-8"
        >
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-gray-400 md:text-lg">
            Certificados por
          </p>
          <Image
            src="/uploads/img/LOGOS/logo-cambridge.png"
            alt="Cambridge English Educational Partner — Instituto Educativo Winston"
            width={390}
            height={126}
            style={{ width: 390, height: "auto" }}
          />
        </AnimateOnScroll>
      </section>

      {/* ═══ ÁREAS (mismo lienzo blanco + doodles) ═══ */}
      <HomeDevelopmentCards />

      {/* Onda hacia CTA cian */}
      <HomeWave from="#ffffff" to="#00D3F9" />

      {/* ═══ CTA ADMISIÓN ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#00D3F9] to-[#3ADEFC] px-6 py-14 md:py-16">
        <HomeDoodles tone="soft" />
        <AnimateOnScroll animation="fadeUp">
          <div className="relative z-[1] mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Comienza tu proceso de admisión
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/95 md:text-base">
              Agenda una cita y conoce el {SITE_NAME}. Estamos en Ciudad Madero
              para acompañarte en Maternal y Kínder.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contacto"
                className="inline-block rounded-full bg-white px-8 py-3 text-xs font-bold tracking-[0.2em] text-[#00D3F9] shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-white md:text-sm"
              >
                AGENDAR CITA
              </Link>
              <a
                href={SITE_SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border-2 border-white px-8 py-3 text-xs font-bold tracking-[0.2em] text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white md:text-sm"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* 2026-08-22: CTA y footer comparten cian — sin corte brusco. */}
      {/* 2026-08-22: Onda del footer alineada al CTA cian. */}
      <Footer topColor="#3ADEFC" />
    </>
  );
}
