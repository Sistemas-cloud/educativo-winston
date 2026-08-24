# Checklists Skynet

## SEO — producción

- [ ] `curl -sI https://www.winstonkinder.edu.mx/robots.txt` → 200
- [ ] `curl -sI https://www.winstonkinder.edu.mx/sitemap.xml` → 200
- [ ] Sitemap incluye las 6 rutas con `www`
- [ ] Home title contiene "Kínder y Maternal"
- [ ] `/kinder` title ≠ `/maternal` title
- [ ] Cada página tiene `<link rel="canonical" href="https://www.winstonkinder.edu.mx/...">`
- [ ] `<meta name="robots" content="index, follow">` presente
- [ ] JSON-LD School en layout (view-source)
- [ ] OG image resuelve en WhatsApp debugger (manual)

## Contenido

- [ ] H3 Kinder habla de autonomía/talleres (no copy idéntico a Maternal)
- [ ] H3 Maternal habla de inglés desde el primer día
- [ ] CTA hero: "COMIENZA TU PROCESO DE ADMISIÓN" → `/contacto`
- [ ] Teléfono y WhatsApp consistentes en footer, contacto y flotante
- [ ] Dirección footer = contacto/mapa (#209)

## UX / accesibilidad

- [ ] Hero móvil: texto no tapado por navbar
- [ ] Imágenes informativas con `alt` (no vacío en fotos clave)
- [ ] Iconos redes con `aria-label` + `sr-only` texto
- [ ] Formulario contacto usable en móvil

## Enlaces

- [ ] Facebook footer → facebook.com (no tiktok)
- [ ] `/aviso-privacidad` → 200
- [ ] Portales servicios: `#` solo en Tareas en línea (conocido)
- [ ] Sin enlaces internos rotos en footer/nav

## Deploy

- [ ] Cambios en `master` en GitHub
- [ ] Vercel deployment production = READY
- [ ] Dominios `www` y apex apuntan al deploy nuevo
- [ ] Post-deploy smoke script OK

## Seguridad / legal

- [ ] Aviso privacidad accesible desde todas las páginas
- [ ] Sin secrets en repo (`.env*` ignorados)
- [ ] Formulario contacto: validación server-side en `contacto/actions.ts`

## Performance (manual periódico)

- [ ] Lighthouse móvil home + kinder (objetivo: LCP < 2.5s)
- [ ] Imágenes hero con `priority` donde corresponde
- [ ] No bloquear LCP con LoadingScreen excesivo (revisar UX)

## Search Console (operación humana)

- [ ] Propiedad verificada para `www.winstonkinder.edu.mx`
- [ ] Sitemap enviado
- [ ] Revisar cobertura / páginas excluidas mensual
