// 2026-04-08: Hero Maternal — animación letter-pop.
// 2026-08-22: Cuna de confianza — subtítulo emocional + CTA suave.
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const TEXT = "MATERNAL";

export default function MaternalHeroText() {
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartAnim(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-[14%] z-10 flex flex-col items-start gap-4 px-8 md:bottom-[18%] md:left-16 md:px-0 lg:gap-5">
      <h1
        className="flex text-5xl font-extrabold tracking-widest text-white drop-shadow-xl md:text-7xl lg:text-8xl"
        aria-label={TEXT}
      >
        {TEXT.split("").map((char, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={startAnim ? "maternal-letter-pop" : "opacity-0"}
            style={startAnim ? { animationDelay: `${i * 80}ms` } : undefined}
          >
            {char}
          </span>
        ))}
      </h1>

      <p
        className={`max-w-md text-base font-medium leading-snug text-white/95 drop-shadow-md transition-opacity duration-700 md:text-lg ${
          startAnim ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: startAnim ? "600ms" : "0ms" }}
      >
        Los primeros pasos, con amor y seguridad
      </p>

      <Link
        href="/contacto"
        className={`inline-flex min-h-11 items-center rounded-full bg-white/95 px-7 text-xs font-bold tracking-[0.16em] text-[#00B8D9] shadow-lg transition hover:bg-white focus-visible:outline-2 focus-visible:outline-white ${
          startAnim ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: startAnim ? "850ms" : "0ms" }}
      >
        AGENDAR UNA VISITA
      </Link>
    </div>
  );
}
