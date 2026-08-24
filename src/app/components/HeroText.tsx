// 2026-08-22: Subtítulo con Instituto Educativo Winston; overlay legible + CTA.
"use client";

import Link from "next/link";

const TEXT = "Raising Brighter Kids";

export default function HeroText() {
  return (
    <div className="absolute inset-x-0 bottom-[12%] z-10 flex flex-col items-center gap-3 px-4 text-center sm:bottom-[16%] sm:gap-4 md:bottom-[24%] md:gap-5">
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

      <p className="max-w-xl text-sm font-semibold leading-snug text-white drop-shadow-md md:text-base md:leading-relaxed">
        Instituto Educativo Winston — Maternal y Kínder bilingüe en Ciudad
        Madero
      </p>

      <Link
        href="/contacto"
        className="inline-block rounded-full bg-[#00D3F9] px-7 py-2.5 text-xs font-bold tracking-[0.2em] text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-[#00BFE0] focus-visible:outline-2 focus-visible:outline-white md:px-10 md:py-3 md:text-sm md:tracking-widest"
      >
        COMIENZA TU PROCESO DE ADMISIÓN
      </Link>
    </div>
  );
}
