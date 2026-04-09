// 2026-04-08: Texto hero de la página Kinder con animación typewriter
//             (escritura a máquina), diferente al efecto wave de la portada principal.
"use client";

import { useEffect, useState } from "react";

export default function KinderHeroText() {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    // 2026-04-08: Retraso para que el typewriter inicie después del loading screen.
    const timer = setTimeout(() => setStartTyping(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute bottom-[28%] left-8 flex flex-col items-start gap-5 md:left-16">
      {/* Título con efecto typewriter */}
      <h1
        className={[
          "text-5xl font-extrabold tracking-widest text-white drop-shadow-xl md:text-7xl lg:text-8xl",
          // 2026-04-08: Evita que el texto ya aparezca al final; lo oculta hasta iniciar animación.
          startTyping ? "animate-typewriter" : "opacity-0",
        ].join(" ")}
        aria-label="Kinder"
      >
        KINDER
      </h1>
    </div>
  );
}
