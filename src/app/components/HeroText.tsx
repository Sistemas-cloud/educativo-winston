// 2026-04-08: Componente cliente para el texto hero con efecto ola letra a letra.
//             Las letras suben y bajan con delays escalonados creando una animación wave.
"use client";

import Link from "next/link";

const TEXT = "Raising for Brighter Kids";

export default function HeroText() {
  return (
    // 2026-04-13: Ajuste responsive del hero para evitar empalmes con el navbar/logo en móvil.
    <div className="absolute inset-x-0 bottom-[16%] flex flex-col items-center gap-4 px-4 text-center sm:bottom-[20%] md:bottom-[30%] md:gap-6">
      {/* Título con efecto wave letra a letra */}
      <h1 className="mx-auto flex max-w-[min(92vw,820px)] flex-wrap justify-center gap-x-[0.03em] leading-[1.05]" aria-label={TEXT}>
        {TEXT.split("").map((char, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="animate-wave inline-block text-[clamp(1.55rem,7.3vw,2.35rem)] font-extrabold text-white drop-shadow-lg md:text-6xl lg:text-7xl"
            style={{
              animationDelay: `${i * 55}ms`,
              // Los espacios no necesitan animación visible
              minWidth: char === " " ? "0.4em" : undefined,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Botón CTA */}
      <Link
        href="/contacto"
        // 2026-04-13: Botón más compacto en móvil para no tapar contenido visual.
        className="inline-block rounded-full bg-sky-500 px-7 py-2.5 text-xs font-bold tracking-[0.2em] text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-white md:px-10 md:py-3 md:text-sm md:tracking-widest"
      >
        CONTÁCTANOS
      </Link>
    </div>
  );
}
