// 2026-04-08: Texto hero de la página Maternal con animación "pop-bounce" letra por letra.
//             Distinto al typewriter de Kinder y al wave de la portada principal.
"use client";

import { useEffect, useState } from "react";

const TEXT = "MATERNAL";

export default function MaternalHeroText() {
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    // 2026-04-08: Espera a que el loading screen termine antes de animar.
    const timer = setTimeout(() => setStartAnim(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute bottom-[28%] left-8 md:left-16">
      <h1 className="flex text-5xl font-extrabold tracking-widest text-white drop-shadow-xl md:text-7xl lg:text-8xl" aria-label={TEXT}>
        {TEXT.split("").map((char, i) => (
          <span
            key={i}
            aria-hidden="true"
            // 2026-04-08: Cada letra se activa escalonada con stagger de 80ms.
            className={startAnim ? "maternal-letter-pop" : "opacity-0"}
            style={startAnim ? { animationDelay: `${i * 80}ms` } : undefined}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}
