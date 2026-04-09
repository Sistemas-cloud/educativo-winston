# Educativo Winston

Starter moderno para producción con:

- `Next.js` (App Router)
- `React`
- `TypeScript` en modo estricto
- `Tailwind CSS`
- `ESLint` + `Prettier`

## Requisitos

- Node.js `22` (ver `.nvmrc`)
- npm `>=10`

## Scripts útiles

- `npm run dev`: entorno local
- `npm run build`: build de producción
- `npm run start`: ejecutar build localmente
- `npm run lint`: revisar calidad de código
- `npm run lint:fix`: corregir lint automáticamente
- `npm run typecheck`: validar tipos TypeScript
- `npm run format`: formatear con Prettier
- `npm run format:check`: validar formato sin modificar

## Desarrollo local

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor:
   ```bash
   npm run dev
   ```
3. Abre `http://localhost:3000`.

## Despliegue en Vercel

1. Sube el proyecto a GitHub.
2. En Vercel, usa **New Project** e importa el repositorio.
3. Vercel detecta Next.js automáticamente y configura build/deploy.
4. Agrega variables de entorno desde **Project Settings > Environment Variables**.

## Buenas prácticas ya incluidas

- App Router (arquitectura recomendada por Next.js).
- `reactStrictMode` habilitado.
- `poweredByHeader` deshabilitado.
- Alias `@/*` para imports limpios desde `src`.
- Base de herramientas para CI (`lint`, `typecheck`, `build`).
