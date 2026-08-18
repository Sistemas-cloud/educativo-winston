import type { NextConfig } from "next";

const CANONICAL = "https://www.winstonkinder.edu.mx";
const VERCEL_HOST = "educativo-winston.vercel.app";

const nextConfig: NextConfig = {
  // 2026-04-08: Endurece cabeceras y mantiene salida optimizada para Vercel.
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // 2026-08-18: 308 de .vercel.app → dominio propio. Incluye `/` porque `/:path*` no siempre matchea home.
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: VERCEL_HOST }],
        destination: CANONICAL,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: VERCEL_HOST }],
        destination: `${CANONICAL}/:path*`,
        permanent: true,
      },
    ];
  },
  // 2026-08-18: noindex de respaldo en alias y previews *.vercel.app.
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: VERCEL_HOST }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
