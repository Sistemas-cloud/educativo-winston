// 2026-04-15: Layout raiz con dos familias tipograficas globales.
//             Folks Bold se usa para titulos y Poppins para parrafos y texto base.
// 2026-04-17: Se agrega WhatsAppButton flotante para que aparezca en todas las páginas.
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const folksBold = localFont({
  src: "./fonts/Folks-Bold.ttf",
  variable: "--font-folks-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instituto Educativo Winston",
  description:
    "Raising Brighter Kids ? Instituto Educativo Winston Churchill, Ciudad Madero, Tamaulipas. Certificados por Cambridge.",
};

// 2026-04-15: Reglas de especulacion para prefetch/prerender de rutas clave.
//             prefetch "eager" activa cuando el enlace entra al viewport o el usuario
//             mueve el cursor sobre el. prerender solo en rutas ligeras y estables.
//             En navegadores sin soporte el script se ignora silenciosamente.
const speculationRules = {
  prefetch: [
    {
      source: "list",
      urls: ["/kinder", "/maternal", "/servicios", "/contacto"],
      eagerness: "moderate",
    },
    {
      source: "document",
      where: {
        href_matches: "/*",
        not: { href_matches: ["/api/*", "/_next/*"] },
      },
      eagerness: "conservative",
    },
  ],
  prerender: [
    {
      source: "list",
      urls: ["/kinder", "/maternal"],
      eagerness: "conservative",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${folksBold.variable} h-full antialiased`}
    >
      <head>
        {/* Speculation Rules API: prefetch/prerender de rutas principales (2026-04-15) */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        {/* 2026-04-17: Botón flotante de WhatsApp presente en todo el sitio. */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
