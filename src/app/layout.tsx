// 2026-04-15: Layout raiz con dos familias tipograficas globales.
//             Folks Bold se usa para titulos y Poppins para parrafos y texto base.
// 2026-04-17: Se agrega WhatsAppButton flotante para que aparezca en todas las páginas.
// 2026-08-17: Metadata canónica, Open Graph, Twitter Cards y JSON-LD para SEO.
// 2026-08-20: Google Analytics / Ads (gtag G-SM4QZ0TVXT) en todas las páginas.
// 2026-10-15: Popup Open House Maternal/Kínder al entrar.
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import OpenHouseModal from "./components/OpenHouseModal";
import WhatsAppButton from "./components/WhatsAppButton";
import { getOrganizationSchema } from "@/lib/seo/organization-schema";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LOCALE,
  SITE_NAME,
  SITE_OG_IMAGE_PATH,
  SITE_URL,
} from "@/lib/seo/site-config";

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

const defaultTitle =
  "Instituto Educativo Winston | Kínder y Maternal bilingüe en Cd. Madero";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: "Niños del Instituto Educativo Winston en Ciudad Madero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE_PATH],
  },
};

// 2026-04-15: Reglas de especulacion para prefetch/prerender de rutas clave.
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
  const organizationSchema = getOrganizationSchema();

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
        {/* 2026-08-17: Schema.org School para Google. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* 2026-08-20: gtag en layout = todas las rutas del portal. */}
        <GoogleAnalytics />
        {children}
        {/* 2026-10-15: Debajo de la pantalla de carga (z-9999); queda visible al terminar. */}
        <OpenHouseModal />
        {/* 2026-04-17: Botón flotante de WhatsApp presente en todo el sitio. */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
