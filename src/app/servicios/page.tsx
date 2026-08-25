// 2026-04-09: Servicios en línea — portales de acceso familias.
// 2026-08-17: Metadata, footer compartido; URLs alineadas a winston93.
// 2026-08-22: Rediseño Cuna de confianza — claridad, aire, sin Churchill.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../components/AnimateOnScroll";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import { SITE_NAME, SITE_PORTALS, SITE_SOCIAL } from "@/lib/seo/site-config";

export const metadata: Metadata = {
  title: "Servicios en línea para familias",
  description:
    "Colegiaturas, inscripciones, alta de facturación y registro de examen del Instituto Educativo Winston. Acceso en línea para familias en Ciudad Madero.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios en línea | Instituto Educativo Winston",
    description:
      "Accede a colegiaturas, inscripciones, facturación y registro de examen del Instituto Educativo Winston.",
    url: "/servicios",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios en línea | Instituto Educativo Winston",
    description:
      "Accede a colegiaturas, inscripciones, facturación y registro de examen del Instituto Educativo Winston.",
  },
};

type PortalItem = {
  src: string;
  title: string;
  description: string;
  href?: string;
  disabled?: boolean;
  /** 2026-08-25: Destaca trámites de admisión (examen). */
  featured?: boolean;
};

const PORTALES: PortalItem[] = [
  {
    src: "/uploads/img/SERVICIOS/registro.png",
    title: "Examen de admisión",
    description:
      "Registra en línea el examen de admisión cuando ya estés listo para el siguiente paso.",
    href: SITE_PORTALS.examSchedule,
    featured: true,
  },
  {
    src: "/uploads/img/SERVICIOS/colegiaturas.png",
    title: "Colegiaturas",
    description: "Consulta y realiza pagos de colegiatura de forma segura.",
    href: SITE_PORTALS.admin,
  },
  {
    src: "/uploads/img/SERVICIOS/usuario.png",
    title: "Inscripciones",
    description: "Gestiona el proceso de inscripción de tu hijo.",
    href: SITE_PORTALS.admin,
  },
  {
    src: "/uploads/img/SERVICIOS/alta.png",
    title: "Alta de facturación",
    description: "Registra o actualiza tus datos de facturación.",
    href: SITE_PORTALS.admin,
  },
  {
    src: "/uploads/img/SERVICIOS/tareas.png",
    title: "Tareas en línea",
    description: "Portal de tareas — disponible próximamente.",
    disabled: true,
  },
  {
    src: "/uploads/img/SERVICIOS/servicios_internos.png",
    title: "Servicios internos",
    description: "Herramientas del personal — disponible próximamente.",
    disabled: true,
  },
];

export default function ServiciosPage() {
  const activos = PORTALES.filter((p) => !p.disabled && p.href);
  const proximos = PORTALES.filter((p) => p.disabled || !p.href);

  return (
    <div className="bg-[#FFFBFA]">
      <LoadingScreen />
      <Navbar />

      <main className="relative overflow-hidden px-6 pt-28 pb-8 md:pt-36 md:pb-12">
        {/* Halo suave de marca — sin ornamentación ruidosa */}
        <div
          className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#00D3F9]/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-40 h-56 w-56 rounded-full bg-[#e8192c]/8 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-[1] mx-auto max-w-5xl">
          <AnimateOnScroll animation="fadeUp">
            <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A9399]">
              {SITE_NAME}
            </p>
            <h1 className="mb-4 text-center font-heading text-3xl font-bold text-[#2A2F33] md:text-4xl">
              Servicios en línea
            </h1>
            <p className="mx-auto mb-14 max-w-xl text-center text-[15px] leading-relaxed text-[#5C656C] md:mb-16 md:text-base">
              Pagos, inscripciones y el registro del examen de admisión, en un
              solo lugar. Elige el servicio y te llevamos al portal
              correspondiente.
            </p>
          </AnimateOnScroll>

          {/* Activos */}
          <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
            {activos.map((portal, i) => (
              <AnimateOnScroll
                key={portal.title}
                animation="fadeUp"
                delay={i * 70}
              >
                <a
                  href={portal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex h-full items-start gap-4 rounded-[1.5rem] border bg-white p-5 shadow-[0_16px_40px_-28px_rgba(42,47,51,0.25)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#00D3F9] md:gap-5 md:p-6 ${
                    portal.featured
                      ? "border-[#00D3F9]/40 shadow-[0_18px_44px_-24px_rgba(0,211,249,0.4)] hover:border-[#00D3F9]/60 hover:shadow-[0_22px_48px_-24px_rgba(0,211,249,0.45)]"
                      : "border-[#E8EEF0] hover:border-[#00D3F9]/35 hover:shadow-[0_22px_48px_-24px_rgba(0,211,249,0.35)]"
                  }`}
                >
                  {portal.featured ? (
                    <span className="absolute right-4 top-4 rounded-full bg-[#e8192c] px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-white">
                      Admisiones
                    </span>
                  ) : null}
                  <div className="relative flex h-[4.5rem] w-[4.5rem] flex-shrink-0 items-center justify-center md:h-[5.25rem] md:w-[5.25rem]">
                    <span
                      className="absolute inset-0 scale-0 rounded-[60%_40%_55%_45%/60%_45%_55%_40%] bg-[#e8192c] transition-transform duration-300 ease-out group-hover:scale-100"
                      aria-hidden="true"
                    />
                    <Image
                      src={portal.src}
                      alt=""
                      width={72}
                      height={72}
                      className="relative z-10 h-12 w-12 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert md:h-14 md:w-14"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pt-1">
                    <h2 className="mb-1.5 text-base font-bold text-[#2A2F33] transition-colors group-hover:text-[#e8192c] md:text-lg">
                      {portal.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-[#5C656C]">
                      {portal.description}
                    </p>
                    <span className="mt-3 inline-block text-xs font-bold uppercase tracking-widest text-[#00B8D9]">
                      Abrir portal →
                    </span>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Próximamente */}
          {proximos.length > 0 ? (
            <div className="mt-14">
              <AnimateOnScroll animation="fadeUp">
                <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A9399]">
                  Próximamente
                </p>
              </AnimateOnScroll>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {proximos.map((portal, i) => (
                  <AnimateOnScroll
                    key={portal.title}
                    animation="fadeUp"
                    delay={i * 70}
                  >
                    <div
                      className="flex h-full items-start gap-4 rounded-[1.5rem] border border-dashed border-[#E8EEF0] bg-white/70 p-5 opacity-80 md:p-6"
                      aria-disabled="true"
                    >
                      <div className="flex h-[4.5rem] w-[4.5rem] flex-shrink-0 items-center justify-center rounded-full bg-[#F7FBFC]">
                        <Image
                          src={portal.src}
                          alt=""
                          width={56}
                          height={56}
                          className="h-11 w-11 object-contain grayscale"
                        />
                      </div>
                      <div className="min-w-0 flex-1 pt-1">
                        <h2 className="mb-1.5 text-base font-bold text-[#2A2F33]">
                          {portal.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-[#5C656C]">
                          {portal.description}
                        </p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          ) : null}

          {/* Ayuda */}
          <AnimateOnScroll animation="fadeUp">
            <div className="mx-auto mt-16 max-w-2xl rounded-[1.5rem] bg-[#E8F9FC]/70 px-6 py-10 text-center md:mt-20 md:px-10">
              <h2 className="mb-3 font-heading text-xl font-bold text-[#2A2F33]">
                ¿Necesitas ayuda con un trámite?
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-[#5C656C] md:text-[15px]">
                Escríbenos o agenda una orientación. Estamos para acompañarte.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex min-h-11 items-center rounded-full bg-[#00D3F9] px-7 text-xs font-bold tracking-[0.16em] text-white transition hover:bg-[#00BFE0] focus-visible:outline-2 focus-visible:outline-[#00D3F9]"
                >
                  CONTACTO
                </Link>
                <a
                  href={SITE_SOCIAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-[#2A2F33]/12 bg-white px-7 text-xs font-bold tracking-[0.16em] text-[#2A2F33] transition hover:border-[#00D3F9]/40 focus-visible:outline-2 focus-visible:outline-[#00D3F9]"
                >
                  WHATSAPP
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      <Footer />
    </div>
  );
}
