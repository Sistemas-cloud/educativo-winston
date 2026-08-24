---
name: trident-winston-kinder
description: >-
  Tridente House + Magnus + Ozymandias bajo Skynet para winstonkinder.edu.mx.
  Orquesta diagnósticos de producto, UI e infraestructura. Usar cuando el usuario
  pida tridente, triada, los tres agentes, diseño tridente, o una feature que
  toque contenido + diseño + técnico a la vez.
---

# Tridente — House · Magnus · Ozymandias

Skynet manda; el tridente ejecuta en tres lentes paralelas.

## Cuándo convocar al tridente

| Tarea | Agentes |
|-------|---------|
| Nueva sección o página | House → Magnus → Ozymandias |
| Bug en producción | Ozymandias (causa) → Magnus/House (síntoma) |
| Auditoría portal | Skynet + los tres en informe unificado |
| Solo copy | House |
| Solo CSS/componente | Magnus |
| Solo SEO/deploy | Ozymandias |

## Flujo diseño tridente

```
1. House   — Dx producto, P0/P1, verdad institucional
2. Magnus  — Propuesta UI mínima, móvil primero
3. Ozymandias — Invariantes, archivos, metadata, build
4. Skynet  — Pre/post-deploy, smoke.sh
```

## Informe unificado

```markdown
# Tridente — [feature o auditoría] — [fecha]

## House (producto)
- Dx: ...
- P0: ...

## Magnus (UI)
- Dx: ...
- P0: ...

## Ozymandias (infra)
- P0 contrato: ...
- P1: ...

## Skynet (release)
- Smoke: PASS/FAIL
- Acción recomendada: ...
```

## Skills del tridente

| Agente | Skill |
|--------|-------|
| House | [../house/SKILL.md](../house/SKILL.md) |
| Magnus | [../magnus/SKILL.md](../magnus/SKILL.md) |
| Ozymandias | [../ozymandias/SKILL.md](../ozymandias/SKILL.md) |
| Skynet | [../skynet/SKILL.md](../skynet/SKILL.md) |

## Invocación

- `Tridente, diseña [feature]`
- `House + Magnus + Ozymandias, audita contacto`
- `modo tridente`

## Ecosistema Winston

El mismo tridente nació en **Reloj Nuevo / Titanium** (horarios RH). Aquí está **adaptado al portal kinder**. Roles idénticos en espíritu:

| Lente | Reloj Nuevo | winstonkinder.edu.mx |
|-------|-------------|----------------------|
| House | Verdad RH / negocio | Verdad institucional / familias |
| Magnus | UI Titanium, tokens `ti-*` | Tailwind, componentes portal |
| Ozymandias | API schedules, `{ ok }`, TZ MX | SEO, site-config, deploy |
