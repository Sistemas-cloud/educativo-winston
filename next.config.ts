import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 2026-04-08: Endurece cabeceras y mantiene salida optimizada para Vercel.
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
