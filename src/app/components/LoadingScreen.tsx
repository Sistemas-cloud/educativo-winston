// 2026-04-08: Pantalla de carga animada para el Instituto Educativo Winston.
//             Muestra logo + figuras flotantes infantiles (SVG inline) durante ~2 s
//             y luego hace fade out automático. Diseño colorido y divertido.
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* ── Figuras SVG decorativas infantiles ─────────────────────────────────── */

function Rocket({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="40" cy="36" rx="14" ry="22" fill="#FF6B6B" />
      <polygon points="40,6 52,28 28,28" fill="#FF8E53" />
      <rect x="34" y="42" width="12" height="10" rx="3" fill="#FFD93D" />
      <ellipse cx="26" cy="46" rx="8" ry="5" fill="#FF6B6B" />
      <ellipse cx="54" cy="46" rx="8" ry="5" fill="#FF6B6B" />
      <circle cx="40" cy="34" r="6" fill="#fff" opacity="0.7" />
      <ellipse cx="40" cy="56" rx="7" ry="12" fill="#FFD93D" opacity="0.8" />
      <ellipse cx="36" cy="62" rx="4" ry="8" fill="#FF8E53" opacity="0.6" />
      <ellipse cx="44" cy="62" rx="4" ry="8" fill="#FF8E53" opacity="0.6" />
    </svg>
  );
}

function Star({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <polygon
        points="30,4 36,22 56,22 40,34 46,52 30,40 14,52 20,34 4,22 24,22"
        fill="#FFD93D"
        stroke="#FFAA00"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Cloud({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="50" cy="40" rx="42" ry="18" fill="white" opacity="0.9" />
      <ellipse cx="36" cy="34" rx="22" ry="18" fill="white" opacity="0.9" />
      <ellipse cx="62" cy="30" rx="26" ry="20" fill="white" opacity="0.9" />
    </svg>
  );
}

function Heart({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 60 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M30 52 C30 52 4 36 4 18 C4 10 10 4 18 4 C23 4 27 7 30 11 C33 7 37 4 42 4 C50 4 56 10 56 18 C56 36 30 52 30 52Z"
        fill="#FF6B9D"
      />
    </svg>
  );
}

function Rainbow({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M10 65 Q60 5 110 65" stroke="#FF6B6B" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M18 65 Q60 14 102 65" stroke="#FF8E53" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M26 65 Q60 23 94 65" stroke="#FFD93D" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M34 65 Q60 32 86 65" stroke="#6BCB77" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M42 65 Q60 41 78 65" stroke="#4D96FF" strokeWidth="7" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Book({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <rect x="8" y="12" width="26" height="46" rx="3" fill="#4D96FF" />
      <rect x="36" y="12" width="26" height="46" rx="3" fill="#6BCB77" />
      <rect x="32" y="10" width="6" height="50" rx="3" fill="#FFD93D" />
      <rect x="14" y="22" width="14" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="14" y="28" width="14" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="14" y="34" width="10" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="42" y="22" width="14" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="42" y="28" width="14" height="2" rx="1" fill="white" opacity="0.7" />
      <rect x="42" y="34" width="10" height="2" rx="1" fill="white" opacity="0.7" />
    </svg>
  );
}

/* ── Texto de bienvenida con wave ───────────────────────────────────────── */

function WaveText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="animate-wave inline-block"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

/* ── Indicador de tres puntos rebotando ─────────────────────────────────── */

function BounceDots() {
  const colors = ["#4D96FF", "#FF6B6B", "#FFD93D"];
  return (
    <div className="flex items-end gap-2" role="status" aria-label="Cargando">
      {colors.map((color, i) => (
        <span
          key={i}
          className="block h-4 w-4 rounded-full"
          style={{
            backgroundColor: color,
            animation: "dotBounce 0.9s ease-in-out infinite",
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Componente principal ───────────────────────────────────────────────── */

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    // Empieza el fade out a los 2 000 ms
    const fadeTimer = setTimeout(() => setPhase("fading"), 2000);
    // Desmonta completamente a los 2 500 ms (0.5 s de fade)
    const goneTimer = setTimeout(() => setPhase("gone"), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3ADEFC 0%, #a78bfa 60%, #f9a8d4 100%)",
        opacity: phase === "fading" ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
    >
      {/* ── Figuras flotantes en las esquinas/bordes ── */}
      <Rocket
        className="animate-float absolute left-[4%] top-[8%] w-16 opacity-90 md:w-24"
        style={{ animationDelay: "0s" } as React.CSSProperties}
      />
      <Star
        className="animate-spin-slow absolute right-[6%] top-[6%] w-12 opacity-80 md:w-20"
      />
      <Cloud
        className="animate-float absolute left-[2%] bottom-[20%] w-24 opacity-70 md:w-36"
        style={{ animationDelay: "0.8s" } as React.CSSProperties}
      />
      <Heart
        className="animate-float absolute right-[4%] bottom-[18%] w-12 opacity-80 md:w-20"
        style={{ animationDelay: "0.4s" } as React.CSSProperties}
      />
      <Rainbow
        className="animate-float absolute left-[30%] top-[4%] w-20 opacity-60 md:w-32"
        style={{ animationDelay: "1.1s" } as React.CSSProperties}
      />
      <Book
        className="animate-float absolute right-[20%] bottom-[8%] w-14 opacity-80 md:w-22"
        style={{ animationDelay: "0.6s" } as React.CSSProperties}
      />
      <Star
        className="animate-float absolute left-[18%] bottom-[10%] w-8 opacity-70 md:w-14"
        style={{ animationDelay: "1.4s" } as React.CSSProperties}
      />
      <Heart
        className="animate-spin-slow absolute right-[30%] top-[10%] w-8 opacity-60 md:w-12"
      />

      {/* ── Contenido central ── */}
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        {/* Logo con pulso */}
        <div className="animate-pulse-big drop-shadow-2xl">
          <Image
            src="/uploads/img/LOGOS/winston-educativo.png"
            alt="Instituto Educativo Winston"
            width={110}
            height={110}
            style={{ width: 110, height: "auto" }}
            priority
          />
        </div>

        {/* Texto principal con wave */}
        <div className="flex flex-col items-center gap-1">
          <WaveText
            text="Instituto"
            className="text-2xl font-light text-white drop-shadow md:text-3xl"
          />
          <WaveText
            text="Educativo Winston"
            className="text-3xl font-extrabold text-white drop-shadow-lg md:text-5xl"
          />
        </div>

        {/* Indicador de carga */}
        <BounceDots />
      </div>
    </div>
  );
}
