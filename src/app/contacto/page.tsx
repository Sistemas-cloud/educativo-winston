// 2026-04-09: Página de Contacto — formulario, mapa y horario.
// 2026-08-17: Metadata única y footer compartido.
// 2026-08-22: Cuna de confianza — hero suave, aire, sin Churchill.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../components/AnimateOnScroll";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import ContactForm from "./ContactForm";
import {
  SITE_ADDRESS_LINES,
  SITE_NAME,
  SITE_PHONE_DISPLAY,
  SITE_SOCIAL,
} from "@/lib/seo/site-config";

export const metadata: Metadata = {
  title: "Contacto y admisiones en Cd. Madero",
  description:
    "Agenda una cita de admisión en el Instituto Educativo Winston. Calle 2 #209, Jardín 20 de Noviembre, Cd. Madero. Tel. 833 347 45 07.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto y admisiones | Instituto Educativo Winston",
    description:
      "Agenda tu proceso de admisión. Calle 2 #209, Cd. Madero. Tel. 833 347 45 07.",
    url: "/contacto",
    images: [
      {
        url: "/uploads/img/CONTACTANOS/banner.jpg",
        alt: "Contacto Instituto Educativo Winston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto y admisiones | Instituto Educativo Winston",
    description:
      "Agenda tu proceso de admisión. Calle 2 #209, Cd. Madero. Tel. 833 347 45 07.",
    images: ["/uploads/img/CONTACTANOS/banner.jpg"],
  },
};

export default function ContactoPage() {
  return (
    <div className="bg-[#FFFBFA]">
      <LoadingScreen />
      <Navbar />

      {/* Hero emocional suave */}
      <section className="relative h-[42vw] min-h-[220px] max-h-[360px] w-full overflow-hidden">
        <Image
          src="/uploads/img/CONTACTANOS/banner.jpg"
          alt="Instituto Educativo Winston — Contacto y admisiones"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#2A2F33]/50 via-[#00D3F9]/35 to-[#3ADEFC]/25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/85">
            {SITE_NAME}
          </p>
          <h1 className="font-heading text-3xl font-bold tracking-wide text-white drop-shadow md:text-4xl lg:text-5xl">
            Contáctanos
          </h1>
          <p className="mt-3 max-w-md text-sm text-white/90 md:text-base">
            Agenda una visita con calma. Estamos para acompañarte.
          </p>
        </div>
        {/* Onda crema hacia el contenido */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 leading-[0]"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            className="block h-10 w-full sm:h-12"
          >
            <path
              fill="#FFFBFA"
              d="M0,64 L1440,64 L1440,28 C1200,52 1020,12 800,30 C580,48 400,14 220,32 C100,44 40,28 0,36 Z"
            />
          </svg>
        </div>
      </section>

      <main className="relative px-6 pb-20 pt-12 md:px-10 md:pb-28 md:pt-16">
        <div
          className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full bg-[#00D3F9]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-[1] mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Formulario */}
          <AnimateOnScroll
            animation="fadeUp"
            className="lg:col-span-6"
          >
            <div className="rounded-[1.75rem] border border-[#E8EEF0] bg-white p-6 shadow-[0_24px_56px_-32px_rgba(42,47,51,0.28)] md:p-8">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A9399]">
                Admisiones
              </p>
              <h2 className="mb-2 font-heading text-xl font-bold text-[#2A2F33] md:text-2xl">
                Agenda tu cita
              </h2>
              <p className="mb-7 text-sm leading-relaxed text-[#5C656C]">
                Cuéntanos un poco de ustedes y te contactamos para coordinar
                la visita.
              </p>
              <ContactForm />
            </div>
          </AnimateOnScroll>

          {/* Info + mapa */}
          <AnimateOnScroll
            animation="fadeUp"
            delay={120}
            className="flex flex-col gap-6 lg:col-span-6"
          >
            {/* Tarjetas de contacto rápido */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={`tel:+528333474507`}
                className="rounded-2xl border border-[#E8EEF0] bg-white p-5 transition hover:border-[#00D3F9]/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-[#00D3F9]"
              >
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A9399]">
                  Teléfono
                </p>
                <p className="text-base font-bold text-[#2A2F33]">
                  {SITE_PHONE_DISPLAY}
                </p>
              </a>
              <a
                href={SITE_SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#E8EEF0] bg-white p-5 transition hover:border-[#00D3F9]/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-[#00D3F9]"
              >
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A9399]">
                  WhatsApp
                </p>
                <p className="text-base font-bold text-[#00B8D9]">
                  Escríbenos →
                </p>
              </a>
            </div>

            <div className="rounded-2xl border border-[#E8EEF0] bg-white p-5 md:p-6">
              <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9399]">
                Horario de atención
              </h2>
              <dl className="space-y-3 text-sm text-[#5C656C]">
                <div className="flex items-baseline justify-between gap-4 border-b border-[#F0F3F4] pb-3">
                  <dt className="font-semibold text-[#2A2F33]">Lunes a viernes</dt>
                  <dd>9:00 AM – 5:00 PM</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="font-semibold text-[#2A2F33]">Sábados</dt>
                  <dd>9:00 AM – 1:00 PM</dd>
                </div>
              </dl>

              <div className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-[#5C656C]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0 text-[#e8192c]"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <address className="not-italic">
                  {SITE_ADDRESS_LINES[0]}
                  <br />
                  {SITE_ADDRESS_LINES[1]}
                </address>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-[#E8EEF0] shadow-[0_20px_48px_-28px_rgba(42,47,51,0.3)]">
              <iframe
                title="Ubicación Instituto Educativo Winston"
                src="https://maps.google.com/maps?q=C+2+209+Jard%C3%ADn+20+de+Noviembre+89440+Ciudad+Madero+Tamaulipas+M%C3%A9xico&output=embed&z=16&hl=es"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <p className="text-center text-sm text-[#5C656C]">
              ¿Prefieres conocer Maternal o Kínder primero?{" "}
              <Link
                href="/maternal"
                className="font-semibold text-[#00B8D9] underline-offset-2 hover:underline"
              >
                Maternal
              </Link>
              {" · "}
              <Link
                href="/kinder"
                className="font-semibold text-[#00B8D9] underline-offset-2 hover:underline"
              >
                Kínder
              </Link>
            </p>
          </AnimateOnScroll>
        </div>
      </main>

      <Footer />
    </div>
  );
}
