// 2026-04-08: Componente cliente para el texto hero con efecto ola letra a letra.
//             Las letras suben y bajan con delays escalonados creando una animación wave.
// 2026-04-17: Título corregido para mostrarse siempre en una sola línea en cualquier
//             dispositivo: se elimina flex-wrap y se usa clamp con escala agresiva basada
//             en vw para que los 25 caracteres quepan desde 320px hasta pantallas 4K.
//             Se agrega texto introductorio al proceso de admisión sobre el botón CTA.
"use client";

import Link from "next/link";

const TEXT = "Raising for Brighter Kids";

export default function HeroText() {
  return (
    // 2026-04-13: Ajuste responsive del hero para evitar empalmes con el navbar/logo en móvil.
    <div className="absolute inset-x-0 bottom-[16%] flex flex-col items-center gap-4 px-4 text-center sm:bottom-[20%] md:bottom-[30%] md:gap-6">
      {/* Título con efecto wave letra a letra.
          2026-04-17: flex-nowrap (sin flex-wrap) + clamp agresivo para una sola línea.
          clamp(0.78rem, 4.1vw, 5rem): en 320px → ~13px/char → cabe en ~320px; en 1440px+ → 80px. */}
      <h1
        className="mx-auto flex flex-nowrap justify-center gap-x-[0.03em] leading-[1.05] overflow-visible"
        aria-label={TEXT}
      >
        {TEXT.split("").map((char, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="animate-wave inline-block text-[clamp(0.78rem,4.1vw,5rem)] font-extrabold text-white drop-shadow-lg"
            style={{
              animationDelay: `${i * 55}ms`,
              minWidth: char === " " ? "0.4em" : undefined,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Botón CTA */}
      {/* 2026-04-17: Texto del botón cambiado a "Comienza tu proceso de admisión" según indicación del cliente. */}
      <Link
        href="/contacto"
        // 2026-04-13: Botón más compacto en móvil para no tapar contenido visual.
        // 2026-04-13: Se unifica el CTA al azul institucional exacto #00D3F9.
        className="inline-block rounded-full bg-[#00D3F9] px-7 py-2.5 text-xs font-bold tracking-[0.2em] text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-[#00BFE0] focus-visible:outline-2 focus-visible:outline-white md:px-10 md:py-3 md:text-sm md:tracking-widest"
      >
        COMIENZA TU PROCESO DE ADMISIÓN
      </Link>
    </div>
  );
}
