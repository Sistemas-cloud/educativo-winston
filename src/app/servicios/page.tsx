// 2026-04-09: Página de Servicios en Línea del Instituto Educativo Winston Churchill.
//             Seis portales de acceso con efecto hover de mancha roja orgánica.
// 2026-08-17: Metadata unica de /servicios y footer compartido.
// 2026-08-17: URLs alineadas a winston93.edu.mx/servicios-en-linea (Ozymandias).
import type { Metadata } from "next";
import Image from "next/image";

import AnimateOnScroll from "../components/AnimateOnScroll";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import { SITE_PORTALS } from "@/lib/seo/site-config";

export const metadata: Metadata = {
  title: "Servicios en línea para familias",
  description:
    "Colegiaturas, inscripciones, alta de facturación, servicios internos y registro de examen del Instituto Educativo Winston Churchill.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios en línea | Instituto Educativo Winston",
    description:
      "Accede a colegiaturas, inscripciones, facturación y servicios internos de Educativo Winston.",
    url: "/servicios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios en línea | Instituto Educativo Winston",
    description:
      "Accede a colegiaturas, inscripciones, facturación y servicios internos de Educativo Winston.",
  },
};

/* ──────────────────── Portales de servicio ─────────────────────────────── */

type PortalItem = {
  src: string;
  label: string;
  href?: string;
  /** Sin enlace activo (en construccion o pendiente de URL). */
  disabled?: boolean;
};

const PORTALES: PortalItem[] = [
  {
    src: "/uploads/img/SERVICIOS/alta.png",
    label: "ALTA DE\nFACTURACIÓN",
    href: SITE_PORTALS.admin,
  },
  {
    src: "/uploads/img/SERVICIOS/colegiaturas.png",
    label: "COLEGIATURAS",
    href: SITE_PORTALS.admin,
  },
  {
    src: "/uploads/img/SERVICIOS/usuario.png",
    label: "INSCRIPCIONES",
    href: SITE_PORTALS.admin,
  },
  {
    src: "/uploads/img/SERVICIOS/tareas.png",
    label: "TAREAS\nEN LÍNEA",
    disabled: true,
  },
  {
    src: "/uploads/img/SERVICIOS/servicios_internos.png",
    label: "SERVICIOS\nINTERNOS",
    disabled: true,
  },
  {
    src: "/uploads/img/SERVICIOS/registro.png",
    label: "REGISTRO\nPARA EXAMEN",
    href: SITE_PORTALS.examSchedule,
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
          {PORTALES.map(({ src, label, href, disabled }, i) => {
            const isInactive = disabled || !href;
            return (
              <AnimateOnScroll key={label} animation="fadeUp" delay={i * 80}>
                {/* 2026-04-13: En móvil se optimiza el tap para evitar que el hover bloquee la navegación.
                    Portales disabled: sin href (paridad winston93 — Tareas / Servicios internos). */}
                <a
                  href={isInactive ? undefined : href}
                  target={isInactive ? undefined : "_blank"}
                  rel={isInactive ? undefined : "noopener noreferrer"}
                  aria-disabled={isInactive}
                  tabIndex={isInactive ? -1 : undefined}
                  className={[
                    "group flex touch-manipulation flex-col items-center gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
                    isInactive ? "cursor-not-allowed opacity-70" : "cursor-pointer",
                  ].join(" ")}
                  aria-label={
                    isInactive
                      ? `${label.replace("\n", " ")} — en construcción`
                      : label.replace("\n", " ")
                  }
                >
                  <div className="relative flex h-[120px] w-[120px] items-center justify-center md:h-[150px] md:w-[150px]">
                    <span
                      className="absolute inset-0 scale-0 rounded-[60%_40%_55%_45%/60%_45%_55%_40%] bg-[#e8192c] transition-transform duration-300 ease-out group-hover:scale-100 group-active:scale-100"
                      aria-hidden="true"
                    />
                    <Image
                      src={src}
                      alt={label.replace("\n", " ")}
                      width={80}
                      height={80}
                      className="relative z-10 h-[72px] w-[72px] object-contain transition-all duration-300 md:h-[88px] md:w-[88px] group-hover:brightness-0 group-hover:invert group-active:brightness-0 group-active:invert"
                    />
                  </div>

                  <span className="whitespace-pre-line text-center text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors duration-300 group-hover:text-[#e8192c] group-active:text-[#e8192c] md:text-sm">
                    {label}
                  </span>
                </a>
              </AnimateOnScroll>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
