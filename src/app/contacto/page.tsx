// 2026-04-09: Página de Contacto del Instituto Educativo Winston Churchill.
//             Incluye hero con banner, formulario de cita (Server Action + nodemailer),
//             mapa de Google Maps y horario de atención. Footer idéntico al resto del sitio.
// 2026-08-17: Metadata unica de /contacto y footer compartido.
import type { Metadata } from "next";
import Image from "next/image";

import AnimateOnScroll from "../components/AnimateOnScroll";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import ContactForm from "./ContactForm";

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
        alt: "Contacto Instituto Educativo Winston Churchill",
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

/* ────────────────────────── Página ────────────────────────────────────── */

export default function ContactoPage() {
  return (
    <>
      <LoadingScreen />
      <Navbar />

      {/* ══════════════════════ HERO ══════════════════════════════════════ */}
      {/* 2026-04-09: Banner de contacto con overlay cian semitransparente. */}
      {/* 2026-04-16: Se corrige la imagen del hero para usar el banner oficial de CONTACTANOS. */}
      <section className="relative h-[38vw] min-h-[200px] max-h-[320px] w-full overflow-hidden">
        <Image
          src="/uploads/img/CONTACTANOS/banner.jpg"
          alt="Instituto Educativo Winston Churchill"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay cian igual al tono de la captura de referencia */}
        <div className="absolute inset-0 bg-[#3ADEFC]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl font-extrabold uppercase tracking-[0.25em] text-white drop-shadow md:text-4xl lg:text-5xl">
            Contáctanos
          </h1>
        </div>
      </section>

      {/* ══════════════════ CONTENIDO PRINCIPAL ═══════════════════════════ */}
      <main className="bg-white px-6 py-14 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

          {/* ── Columna izquierda: formulario ── */}
          <AnimateOnScroll animation="fadeUp" delay={0}>
            <ContactForm />
          </AnimateOnScroll>

          {/* ── Columna derecha: mapa + horario ── */}
          <AnimateOnScroll animation="fadeUp" delay={150}>
            <div className="flex flex-col gap-8">

              {/* Mapa de Google Maps embed */}
              {/* 2026-04-09: Dirección: C. 2 209, Jardín 20 de Noviembre, 89440 Cd Madero, Tamps. */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <iframe
                  title="Ubicación Instituto Educativo Winston Churchill"
                  src="https://maps.google.com/maps?q=C+2+209+Jard%C3%ADn+20+de+Noviembre+89440+Ciudad+Madero+Tamaulipas+M%C3%A9xico&output=embed&z=16&hl=es"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Horario de atención */}
              <div>
                <h2 className="mb-4 text-sm font-extrabold uppercase tracking-widest text-gray-500">
                  Horario de Atención
                </h2>
                <table className="w-full text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-1 pr-8 font-bold uppercase tracking-wider">Lunes a Viernes</td>
                      <td className="py-1">9 AM – 5 PM</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-8 font-bold uppercase tracking-wider">Sábados</td>
                      <td className="py-1">9 AM – 1 PM</td>
                    </tr>
                  </tbody>
                </table>

                {/* Dirección */}
                <div className="mt-5 flex items-start gap-3 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-[#e8192c]" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <address className="not-italic leading-relaxed">
                    C. 2 #209, Jardín 20 de Noviembre<br />
                    89440 Cd. Madero, Tamaulipas<br />
                    {/* 2026-04-17: Número actualizado. */}
                    Tel. 833 347 45 07
                  </address>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      {/* 2026-08-17: Footer extraido a componente compartido. */}
      <Footer />
    </>
  );
}
