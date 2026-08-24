// 2026-04-08: Hero Kinder — typewriter.
// 2026-08-22: Cuna de confianza — subtítulo emocional + CTA suave.
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function KinderHeroText() {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-x-0 bottom-[14%] z-10 flex flex-col items-start gap-4 px-8 md:bottom-[18%] md:left-16 md:px-0 lg:gap-5">
      <h1
        className={[
          "text-5xl font-extrabold tracking-widest text-white drop-shadow-xl md:text-7xl lg:text-8xl",
          startTyping ? "animate-typewriter" : "opacity-0",
        ].join(" ")}
        aria-label="Kinder"
      >
        KINDER
      </h1>

      <p
        className={`max-w-md text-base font-medium leading-snug text-white/95 drop-shadow-md transition-opacity duration-700 md:text-lg ${
          startTyping ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: startTyping ? "900ms" : "0ms" }}
      >
        Crece con confianza, en dos idiomas
      </p>

      <Link
        href="/contacto"
        className={`inline-flex min-h-11 items-center rounded-full bg-white/95 px-7 text-xs font-bold tracking-[0.16em] text-[#00B8D9] shadow-lg transition hover:bg-white focus-visible:outline-2 focus-visible:outline-white ${
          startTyping ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: startTyping ? "1100ms" : "0ms" }}
      >
        AGENDAR UNA VISITA
      </Link>
    </div>
  );
}
