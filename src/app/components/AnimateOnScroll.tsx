// 2026-04-08: Wrapper genérico que usa IntersectionObserver para disparar
//             animaciones CSS cuando el elemento entra en el viewport.
//             Los banners/imágenes de sección NO se deben envolver aquí.
"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType = "fadeUp" | "bounceIn" | "slideLeft" | "slideRight";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;       // delay en ms antes de disparar la animación
  threshold?: number;   // 0–1, fracción del elemento visible para disparar
  className?: string;   // clases adicionales al contenedor
  as?: React.ElementType;
}

const animationClass: Record<AnimationType, string> = {
  fadeUp:     "anim-fade-up",
  bounceIn:   "anim-bounce-in",
  slideLeft:  "anim-slide-left",
  slideRight: "anim-slide-right",
};

export default function AnimateOnScroll({
  children,
  animation = "fadeUp",
  delay = 0,
  threshold = 0.2,
  className = "",
  as: Tag = "div",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          // Aplica el delay antes de activar la clase de animación
          const timer = setTimeout(() => setTriggered(true), delay);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, delay]);

  return (
    <Tag
      ref={ref}
      className={[
        "anim-hidden",
        triggered ? animationClass[animation] : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
