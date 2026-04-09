// 2026-04-08: Carrusel de fotos de eventos del Kinder.
// 2026-04-08: Efecto cinta continua — keyframe definido con <style> HTML nativo
//             para garantizar que la animación funcione en Client Components sin
//             depender de globals.css ni de styled-jsx.
"use client";

import Image from "next/image";

const EVENTS = [
  { src: "/uploads/img/KINDER/EVENTOS/DANCE.jpg",       alt: "Dance" },
  { src: "/uploads/img/KINDER/EVENTOS/DIA-MUERTOS.jpg", alt: "Día de Muertos" },
  { src: "/uploads/img/KINDER/EVENTOS/HALLOWEEN.jpg",   alt: "Halloween" },
  { src: "/uploads/img/KINDER/EVENTOS/OLYIMPIC.jpg",    alt: "Olimpiadas" },
  { src: "/uploads/img/KINDER/EVENTOS/PRIMAVERA.jpg",   alt: "Primavera" },
  { src: "/uploads/img/KINDER/EVENTOS/SR-PATRICK.jpg",  alt: "St. Patrick" },
  { src: "/uploads/img/KINDER/EVENTOS/TECHNO.jpg",      alt: "Techno" },
  { src: "/uploads/img/KINDER/EVENTOS/VIEJADA.jpg",     alt: "Viejada" },
];

// Duplicamos para el loop infinito sin saltos
const TAPE = [...EVENTS, ...EVENTS];

export default function EventsCarousel() {
  return (
    <>
      {/* 2026-04-08: <style> HTML puro (no styled-jsx). React lo iza al <head>.
          Keyframe propio para evitar conflictos con globals.css. */}
      <style>{`
        @keyframes kinder-tape-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .kinder-tape-track {
          display: flex;
          width: max-content;
          /* 2026-04-08: Se reduce velocidad del desplazamiento para lectura más tranquila. */
          animation: kinder-tape-scroll 36s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
        <div className="kinder-tape-track">
          {TAPE.map((event, i) => (
            <div
              key={`${event.src}-${i}`}
              className="relative h-[160px] w-[240px] flex-shrink-0 sm:h-[220px] sm:w-[340px] md:h-[370px] md:w-[580px] lg:h-[440px] lg:w-[720px]"
            >
              <Image
                src={event.src}
                alt={event.alt}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 768px) 340px, (max-width: 1024px) 580px, 720px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
