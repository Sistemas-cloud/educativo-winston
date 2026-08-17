// 2026-08-17: Aviso de privacidad LFPDPPP. Sustituye el 404 del footer.
// Texto base con datos del colegio; juridico puede afinar redactado.
import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  SITE_ADDRESS,
  SITE_NAME,
  SITE_PHONE_DISPLAY,
} from "@/lib/seo/site-config";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad del Instituto Educativo Winston Churchill. Tratamiento de datos personales conforme a la LFPDPPP.",
  alternates: { canonical: "/aviso-privacidad" },
  openGraph: {
    title: "Aviso de privacidad | Instituto Educativo Winston",
    description:
      "Consulta cómo el Instituto Educativo Winston Churchill trata los datos personales de familias y prospectos.",
    url: "/aviso-privacidad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviso de privacidad | Instituto Educativo Winston",
    description:
      "Consulta cómo el Instituto Educativo Winston Churchill trata los datos personales de familias y prospectos.",
  },
};

export default function AvisoPrivacidadPage() {
  return (
    <>
      <Navbar />

      <section className="relative h-[38vw] min-h-[200px] max-h-[320px] w-full overflow-hidden bg-[#3ADEFC]">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="px-6 text-center text-3xl font-extrabold uppercase tracking-[0.18em] text-white drop-shadow md:text-4xl lg:text-5xl">
            Aviso de privacidad
          </h1>
        </div>
      </section>

      <main className="mx-auto w-full max-w-3xl px-6 py-12 text-gray-600 md:py-16">
        <p className="mb-8 text-sm leading-relaxed">
          Última actualización: 17 de agosto de 2026. El presente aviso se emite
          en cumplimiento de la Ley Federal de Protección de Datos Personales en
          Posesión de los Particulares (LFPDPPP) y su Reglamento.
        </p>

        <section className="mb-8 space-y-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#00D3F9]">
            1. Identidad del responsable
          </h2>
          <p className="text-justify text-sm leading-relaxed">
            El responsable del tratamiento de sus datos personales es{" "}
            <strong>{SITE_NAME} Churchill</strong>, con domicilio en{" "}
            {SITE_ADDRESS.streetAddress}, C.P. {SITE_ADDRESS.postalCode},{" "}
            {SITE_ADDRESS.addressLocality}, {SITE_ADDRESS.addressRegion}, México.
            Teléfono {SITE_PHONE_DISPLAY}. Sitio web:{" "}
            <a
              href="https://www.winstonkinder.edu.mx"
              className="font-semibold text-[#00D3F9] underline"
            >
              www.winstonkinder.edu.mx
            </a>
            .
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#00D3F9]">
            2. Datos personales que recabamos
          </h2>
          <p className="text-justify text-sm leading-relaxed">
            A través del formulario de contacto, WhatsApp, llamadas y visitas de
            admisión podemos recabar: nombre del padre, madre o tutor; correo
            electrónico; teléfono; nombre y edad del menor interesado; y
            comentarios sobre el proceso de admisión. No recabamos datos
            sensibles de forma sistemática en este sitio. Los datos de menores
            se tratan únicamente para orientar el proceso de admisión, con
            consentimiento de quien ejerce la patria potestad o tutela.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#00D3F9]">
            3. Finalidades del tratamiento
          </h2>
          <p className="text-justify text-sm leading-relaxed">
            Utilizamos los datos para: (i) atender solicitudes de información y
            citas de admisión; (ii) dar seguimiento al proceso de inscripción;
            (iii) enviar información institucional sobre Maternal, Kínder y
            servicios escolares cuando usted lo solicite; y (iv) cumplir
            obligaciones legales aplicables a instituciones educativas.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#00D3F9]">
            4. Transferencias
          </h2>
          <p className="text-justify text-sm leading-relaxed">
            No vendemos datos personales. Podemos compartirlos con proveedores
            que nos prestan servicios de hosting, correo o mensajería, bajo
            contratos de confidencialidad, o con autoridades cuando la ley lo
            requiera.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#00D3F9]">
            5. Derechos ARCO
          </h2>
          <p className="text-justify text-sm leading-relaxed">
            Usted puede acceder, rectificar, cancelar u oponerse al tratamiento
            de sus datos (derechos ARCO), así como revocar su consentimiento,
            mediante el{" "}
            <a
              href="/contacto"
              className="font-semibold text-[#00D3F9] underline"
            >
              formulario de contacto
            </a>{" "}
            o llamando al {SITE_PHONE_DISPLAY}, indicando su nombre, medio de
            contacto y la petición concreta. Daremos trámite conforme a los
            plazos de la LFPDPPP.
          </p>
        </section>

        <section className="mb-8 space-y-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#00D3F9]">
            6. Uso de cookies y sitio web
          </h2>
          <p className="text-justify text-sm leading-relaxed">
            Este sitio puede utilizar cookies técnicas necesarias para su
            funcionamiento y, en su caso, herramientas de medición de audiencia.
            Puede configurar su navegador para rechazar cookies no esenciales.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-[#00D3F9]">
            7. Cambios al aviso
          </h2>
          <p className="text-justify text-sm leading-relaxed">
            Cualquier modificación se publicará en esta misma página. El uso
            continuado del sitio después de la publicación implica el
            conocimiento de la versión vigente.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
