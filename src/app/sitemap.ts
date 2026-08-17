// 2026-08-17: Sitemap XML de las rutas publicas de winstonkinder.edu.mx.
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/maternal`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kinder`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/servicios`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/aviso-privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
