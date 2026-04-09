// 2026-04-08: Galería estática de eventos del nivel Maternal.
//             Tres fotos en fila horizontal; hover agranda la foto activa y
//             desplaza las demás a los costados. Sin texto visible en la cintilla.
"use client";

import Image from "next/image";
import { useState } from "react";

const PHOTOS = [
  { src: "/uploads/img/MATERNAL/GALERIA/DANCE.jpg",    alt: "Dance"   },
  // 2026-04-08: Nombre del archivo original tiene typo "HALLOWWEN" — se usa tal cual.
  { src: "/uploads/img/MATERNAL/GALERIA/HALLOWWEN.jpg", alt: "Halloween" },
  { src: "/uploads/img/MATERNAL/GALERIA/RACING.jpg",   alt: "Racing"  },
];

export default function MaternalGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full gap-3 overflow-hidden rounded-2xl shadow-2xl sm:gap-4">
      {PHOTOS.map((photo, i) => (
        <div
          key={photo.src}
          className="relative flex-1 overflow-hidden rounded-xl transition-all duration-500 ease-out"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          // 2026-04-08: En hover, la imagen activa crece bastante y las demás se desplazan a costados.
          style={{
            transform:
              hoveredIndex === null
                ? "translateX(0)"
                : hoveredIndex === i
                  ? "scale(1.16)"
                  : i < hoveredIndex
                    ? "translateX(-18px) scale(0.96)"
                    : "translateX(18px) scale(0.96)",
            zIndex: hoveredIndex === i ? 20 : 10,
          }}
        >
          {/* Proporción de la tarjeta */}
          <div className="relative h-[190px] sm:h-[260px] md:h-[360px] lg:h-[430px]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 520px"
              className="object-cover transition-transform duration-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
