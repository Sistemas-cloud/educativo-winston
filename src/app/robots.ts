// 2026-08-17: robots.txt generado por App Router. Permite indexar el sitio
// y declara el sitemap. Sin Disallow agresivo: el kínder es publico.
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
