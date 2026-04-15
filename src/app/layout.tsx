// 2026-04-15: Layout raíz con dos familias tipográficas globales.
//             Folks Bold se usa para títulos y Poppins para párrafos y texto base.
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

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
    "Raising Brighter Kids — Instituto Educativo Winston Churchill, Ciudad Madero, Tamaulipas. Certificados por Cambridge.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
