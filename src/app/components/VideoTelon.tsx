// 2026-04-13: Componente "telón" de video para la sección Conócenos.
//             Se despliega desde arriba cubriendo toda la pantalla con una
//             animación de descenso (telón de teatro). Incluye diseño infantil
//             consistente con la estética del instituto (colores, figuras SVG).
"use client";

import { useEffect, useRef, useState } from "react";

/* ── Tipos de estado de animación ───────────────────────────────────────── */
type TealonState = "closed" | "opening" | "open" | "closing";

/* ── Figuras SVG decorativas (estética infantil del instituto) ───────────── */

function StarSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true">
      <polygon
        points="30,4 36,22 56,22 40,34 46,52 30,40 14,52 20,34 4,22 24,22"
        fill="#FFD93D"
        stroke="#FFAA00"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function RocketSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
      <ellipse cx="40" cy="36" rx="14" ry="22" fill="#FF6B6B" />
      <polygon points="40,6 52,28 28,28" fill="#FF8E53" />
      <rect x="34" y="42" width="12" height="10" rx="3" fill="#FFD93D" />
      <ellipse cx="26" cy="46" rx="8" ry="5" fill="#FF6B6B" />
      <ellipse cx="54" cy="46" rx="8" ry="5" fill="#FF6B6B" />
      <circle cx="40" cy="34" r="6" fill="#fff" opacity="0.7" />
      <ellipse cx="40" cy="56" rx="7" ry="12" fill="#FFD93D" opacity="0.8" />
    </svg>
  );
}

function HeartSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 56" fill="none" className={className} aria-hidden="true">
      <path
        d="M30 52 C30 52 4 36 4 18 C4 10 10 4 18 4 C23 4 27 7 30 11 C33 7 37 4 42 4 C50 4 56 10 56 18 C56 36 30 52 30 52Z"
        fill="#FF6B9D"
      />
    </svg>
  );
}

function CloudSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" fill="none" className={className} aria-hidden="true">
      <ellipse cx="50" cy="40" rx="42" ry="18" fill="white" opacity="0.6" />
      <ellipse cx="36" cy="34" rx="22" ry="18" fill="white" opacity="0.6" />
      <ellipse cx="62" cy="30" rx="26" ry="20" fill="white" opacity="0.6" />
    </svg>
  );
}

/* ── Componente principal ────────────────────────────────────────────────── */

interface VideoTelonProps {
  open: boolean;
  onClose: () => void;
}

export default function VideoTelon({ open, onClose }: VideoTelonProps) {
  const [state, setState] = useState<TealonState>("closed");
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Sincroniza la prop `open` con el estado de animación
  useEffect(() => {
    if (open && state === "closed") {
      setState("opening");
    }
    if (!open && (state === "open" || state === "opening")) {
      setState("closing");
    }
  }, [open, state]);

  // Bloquea scroll del body mientras el telón está visible
  useEffect(() => {
    if (state !== "closed") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [state]);

  // Cierra con ESC
  useEffect(() => {
    if (state === "closed") return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [state, onClose]);

  // Mueve el foco al botón cerrar cuando el telón abre
  useEffect(() => {
    if (state === "open") {
      closeButtonRef.current?.focus();
    }
  }, [state]);

  // El panel no existe en el DOM cuando está completamente cerrado
  if (state === "closed") return null;

  const isEntering = state === "opening";
  const isLeaving  = state === "closing";

  function handlePanelAnimEnd() {
    if (isEntering) setState("open");
    if (isLeaving)  setState("closed");
  }

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    /* Capa raíz — por encima del LoadingScreen (z-[9999]) */
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-stretch ${
        isLeaving ? "backdrop-exit" : "backdrop-enter"
      }`}
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={handleBackdropClick}
      aria-hidden="false"
    >
      {/* ── Panel / Telón ───────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Video Conócenos"
        className={`relative flex h-full w-full flex-col overflow-hidden bg-white ${
          isLeaving ? "telon-exit" : "telon-enter"
        }`}
        onAnimationEnd={handlePanelAnimEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Borde superior en azul institucional */}
        <div className="h-2 w-full flex-shrink-0" style={{ backgroundColor: "#00D3F9" }} />

        {/* ── Figuras flotantes decorativas ─────────────────────────── */}
        <RocketSVG className="animate-float pointer-events-none absolute left-[2%] top-[8%] w-16 opacity-80 md:w-24" />
        <StarSVG   className="animate-float pointer-events-none absolute right-[4%] top-[6%]  w-10 opacity-70 md:w-16" />
        <HeartSVG  className="animate-float pointer-events-none absolute left-[4%] bottom-[10%] w-12 opacity-60 md:w-20" />
        <StarSVG   className="animate-float pointer-events-none absolute right-[6%] bottom-[8%]  w-8 opacity-60 md:w-14" />
        <CloudSVG  className="animate-float pointer-events-none absolute left-[30%] top-[3%]    w-20 opacity-40 md:w-32" />

        {/* ── Botón cerrar ─────────────────────────────────────────── */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar video"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-white md:right-8 md:top-6 md:h-12 md:w-12"
          style={{ backgroundColor: "#00D3F9" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ── Contenido central ────────────────────────────────────── */}
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-6 md:gap-6 md:px-12">

          {/* Encabezado con título */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-lg font-light leading-tight text-gray-400 md:text-xl">
              Instituto Educativo
            </p>
            <h2
              className="text-3xl font-extrabold leading-tight tracking-wide md:text-5xl"
              style={{ color: "#00D3F9" }}
            >
              Winston
            </h2>
            <span className="mt-1 flex items-center gap-2">
              <StarSVG className="inline-block w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 md:text-base">
                Conócenos
              </span>
              <StarSVG className="inline-block w-5" />
            </span>
          </div>

          {/* Video */}
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
            {/* Marco decorativo en azul */}
            <div
              className="absolute inset-0 rounded-2xl ring-4"
              style={{ "--tw-ring-color": "#00D3F9" } as React.CSSProperties}
            />
            <video
              ref={videoRef}
              src="/uploads/videos/conocenos.mp4"
              className="h-auto w-full rounded-2xl"
              autoPlay
              controls
              playsInline
              style={{ maxHeight: "62vh" }}
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>

          {/* Puntos de color decorativos (igual que el menu móvil) */}
          <div className="flex items-center gap-2">
            {["#FF6B6B", "#FFD93D", "#6BCB77", "#00D3F9", "#FF6B9D"].map((color, i) => (
              <span
                key={i}
                className="block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
