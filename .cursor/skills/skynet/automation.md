# Automatización Cursor — Skynet

Borrador para **Cursor Automations** (Agents Window). Ajusta trigger y repo según tu flujo.

## Opción A — Semanal (auditoría)

| Campo | Valor sugerido |
|-------|----------------|
| **Nombre** | Skynet — auditoría winstonkinder |
| **Descripción** | Revisa salud SEO, enlaces y deploy del portal Educativo Winston |
| **Trigger** | Cron: lunes 8:00 AM (America/Monterrey) |
| **Repo** | `Sistemas-cloud/educativo-winston` |
| **Rama** | `master` |

**Instrucciones del agente:**

```
Eres Skynet, guardián de https://www.winstonkinder.edu.mx

1. Lee .cursor/skills/skynet/SKILL.md y checklists.md
2. Ejecuta .cursor/skills/skynet/scripts/smoke.sh
3. curl titles de /, /kinder, /maternal — confirma que son únicos
4. Revisa git log últimos 7 días por cambios en src/lib/seo o layout
5. Entrega informe markdown: Crítico / Alto / Medio / OK
6. NO hagas commits salvo que el usuario lo pida en el mismo hilo
```

**Tools sugeridos:** Shell, Web fetch, Read file

---

## Opción B — Post-push a master (CI git)

| Campo | Valor sugerido |
|-------|----------------|
| **Nombre** | Skynet — post-deploy check |
| **Trigger** | Git push → `master` |
| **Repo** | `Sistemas-cloud/educativo-winston` |

**Instrucciones:**

```
Deploy detectado en educativo-winston.

1. Espera 2 minutos
2. Verifica 200 en robots.txt, sitemap.xml, aviso-privacidad
3. Compara title de /kinder vs deploy anterior si hay regresión
4. Reporta PASS o FAIL con URLs
```

---

## Crear en Cursor

1. Abrir **Automations** en Cursor (Agents Window).
2. Pegar nombre, trigger e instrucciones de arriba.
3. Conectar repo GitHub `Sistemas-cloud/educativo-winston`.
4. Probar con "Run now" antes de activar cron.

Si el editor no está disponible desde este chat, usa el skill **automate** en Agents Window.
