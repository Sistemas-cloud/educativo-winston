# Referencia Skynet — educativo-winston

## Producción

| Recurso | Valor |
|---------|--------|
| Dominio canónico | `https://www.winstonkinder.edu.mx` |
| Apex | `winstonkinder.edu.mx` → redirige a `www` |
| Alias Vercel (308) | `educativo-winston.vercel.app` → canonical |
| Vercel project | `educativo-winston` |
| Vercel team | `rafas-projects-5f385608` |
| GitHub | `Sistemas-cloud/educativo-winston` |
| Rama producción | `master` |
| Node | 22+ (`.nvmrc`) |

## Rutas públicas indexables

| Ruta | Propósito |
|------|-----------|
| `/` | Home — admisiones, Maternal/Kinder, Cambridge |
| `/maternal` | Nivel maternal bilingüe |
| `/kinder` | Nivel kínder + talleres |
| `/servicios` | Portales winston93 (colegiaturas, etc.) |
| `/contacto` | Formulario + mapa |
| `/aviso-privacidad` | LFPDPPP |

## Archivos SEO

- `src/lib/seo/site-config.ts` — URL, social, dirección, OG default
- `src/lib/seo/organization-schema.ts` — JSON-LD School
- `src/app/layout.tsx` — metadataBase, template title, OG/Twitter global
- `src/app/robots.ts` — Allow / + Sitemap
- `src/app/sitemap.ts` — 6 URLs

## Componentes compartidos

- `Footer.tsx` — redes, dirección, aviso privacidad
- `Navbar.tsx` — menú + video Conócenos (telón)
- `WhatsAppButton.tsx` — flotante global
- `LoadingScreen.tsx` — splash inicial

## Datos institucionales (fuente: site-config)

- Tel: 833 347 45 07 / `wa.me/528333474507`
- Dirección: Calle 2 #209, Jardín 20 de Noviembre, Cd. Madero, CP 89440
- Facebook: `facebook.com/institutowinstonchurchill/`
- Instagram: `@educativowinston`

## Agentes (Skynet + Tridente)

| Agente | Skill | Rol en este repo |
|--------|-------|------------------|
| Skynet | `.cursor/skills/skynet/` | Orquestador, audit, deploy |
| House | `.cursor/skills/house/` | Producto, copy, admisiones |
| Magnus | `.cursor/skills/magnus/` | UI/UX móvil |
| Ozymandias | `.cursor/skills/ozymandias/` | SEO técnico, invariantes |
| Tridente | `.cursor/skills/trident/` | Convoca los tres bajo Skynet |


```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run build
npm run lint
```

## Smoke test producción

```bash
bash .cursor/skills/skynet/scripts/smoke.sh
```

## Proyectos Winston relacionados (no mezclar)

- `winston93` — sitio principal secundaria/primaria
- Portales en `/servicios` — `SITE_PORTALS` en `site-config.ts` (paridad `winston93.edu.mx/servicios-en-linea`)

## Historial SEO relevante (2026-08-17)

- Metadata duplicada corregida por página
- robots + sitemap creados
- `/aviso-privacidad` publicada
- Dominios kinder ligados a Vercel producción
