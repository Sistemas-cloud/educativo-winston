// 2026-04-08: Componente cliente para el texto hero con efecto ola letra a letra.
//             Las letras suben y bajan con delays escalonados creando una animación wave.
"use client";

import Link from "next/link";

const TEXT = "Raising for Brighter Kids";

export default function HeroText() {
  return (
    <div className="absolute inset-x-0 bottom-[30%] flex flex-col items-center gap-6 px-4 text-center">
      {/* Título con efecto wave letra a letra */}
      <h1 className="flex flex-wrap justify-center gap-x-[0.05em]" aria-label={TEXT}>
        {TEXT.split("").map((char, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="animate-wave inline-block text-4xl font-extrabold text-white drop-shadow-lg md:text-6xl lg:text-7xl"
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
        className="inline-block rounded-full bg-sky-500 px-10 py-3 text-sm font-bold tracking-widest text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-white"
      >
        CONTÁCTANOS
      </Link>
    </div>
  );
}
