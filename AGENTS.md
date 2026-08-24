<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- 2026-08-17: Skynet + Tridente — agentes del portal winstonkinder.edu.mx -->

# Skynet y el Tridente — Agentes del portal

**Proyecto:** Instituto Educativo Winston (Kínder + Maternal)  
**Producción:** https://www.winstonkinder.edu.mx  
**Repo:** educativo-winston → Vercel `educativo-winston` → GitHub `Sistemas-cloud/educativo-winston`

## Arquitectura de agentes

```
                    Skynet (orquestador / release)
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
      House            Magnus           Ozymandias
   producto/copy        UI/UX          SEO · deploy · invariantes
```

## Cómo invocar

| Comando | Agente(s) | Acción |
|---------|-----------|--------|
| `Skynet, audita el portal` | Skynet | Informe + checklists + smoke |
| `Skynet, pre-deploy` | Skynet | Gate antes de push |
| `Skynet, post-deploy` | Skynet | Verificar URLs en vivo |
| `modo Skynet` | Skynet | Skill completo en sesión |
| `modo tridente` | House + Magnus + Ozymandias | Tres lentes + Skynet al cierre |
| `House, revisa copy de kinder` | House | Verdad institucional |
| `Magnus, hero móvil` | Magnus | UI/UX |
| `Ozymandias, metadata` | Ozymandias | Contratos técnicos |
| `Tridente, diseña [feature]` | Tridente | Flujo House → Magnus → Ozymandias |

## Documentación

| Agente | Skill |
|--------|-------|
| Skynet | [.cursor/skills/skynet/SKILL.md](.cursor/skills/skynet/SKILL.md) |
| Tridente (orquestación) | [.cursor/skills/trident/SKILL.md](.cursor/skills/trident/SKILL.md) |
| House | [.cursor/skills/house/SKILL.md](.cursor/skills/house/SKILL.md) |
| Magnus | [.cursor/skills/magnus/SKILL.md](.cursor/skills/magnus/SKILL.md) |
| Ozymandias | [.cursor/skills/ozymandias/SKILL.md](.cursor/skills/ozymandias/SKILL.md) |

Referencia infra: [.cursor/skills/skynet/reference.md](.cursor/skills/skynet/reference.md)  
Checklists: [.cursor/skills/skynet/checklists.md](.cursor/skills/skynet/checklists.md)  
Smoke test: [.cursor/skills/skynet/scripts/smoke.sh](.cursor/skills/skynet/scripts/smoke.sh)

## Stack

- Next.js App Router + TypeScript + Tailwind
- SEO: `src/lib/seo/site-config.ts`, `robots.ts`, `sitemap.ts`
- Footer compartido: `src/app/components/Footer.tsx`

## Reglas rápidas

- Responder en **español** al cliente.
- No force-push a master; no redeployar otros proyectos Vercel.
- Extender SEO desde `site-config.ts`; metadata única por `page.tsx`.
- Comentarios en código: fecha + explicación breve.
