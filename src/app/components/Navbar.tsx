// 2026-04-08: Navbar interactivo con scroll sticky, transición de fondo,
//             menú hamburguesa móvil y dropdown "Oferta educativa" con
//             sub-opciones Kinder y Maternal en desktop y móvil.
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── Tipos ──────────────────────────────────────────────────────────────── */

type NavChild = { label: string; href: string };

type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio",             href: "/" },
  { label: "Conócenos",          href: "/conocenos" },
  {
    label: "Oferta educativa",
    children: [
      { label: "Kinder",   href: "/kinder" },
      { label: "Maternal", href: "/maternal" },
    ],
  },
  { label: "Servicios en línea", href: "/servicios" },
  { label: "Contacto",           href: "/contacto" },
];

/* ── Ícono chevron ──────────────────────────────────────────────────────── */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ── Componente principal ────────────────────────────────────────────────── */

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [ofertaOpen,  setOfertaOpen]  = useState(false); // desktop hover/click
  const [mOfertaOpen, setMOfertaOpen] = useState(false); // mobile accordion

  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Bloquear scroll del body en menú móvil ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ── Cerrar dropdown desktop al click fuera ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOfertaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setOfertaOpen(false);
    setMOfertaOpen(false);
  };

  return (
    <>
      {/* ══ Barra principal ══════════════════════════════════════════════ */}
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-14",
          scrolled
            ? "bg-white/85 shadow-sm backdrop-blur-md"
            : "bg-transparent",
        ].join(" ")}
      >
        {/* Logo */}
        <Link href="/" aria-label="Inicio" onClick={closeAll}>
          <Image
            src="/uploads/img/LOGOS/winston-educativo.png"
            alt="Instituto Educativo Winston"
            width={64}
            height={64}
            style={{ width: 64, height: "auto" }}
            priority
          />
        </Link>

        {/* ── Links desktop ── */}
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {NAV_ITEMS.map((item) => {
            /* Ítem con dropdown */
            if (item.children) {
              return (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setOfertaOpen(true)}
                  onMouseLeave={() => setOfertaOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setOfertaOpen((v) => !v)}
                    className="flex items-center gap-1 text-gray-800 transition-colors hover:text-sky-500"
                    aria-haspopup="true"
                    aria-expanded={ofertaOpen}
                  >
                    {item.label}
                    <Chevron open={ofertaOpen} />
                  </button>

                  {/* Panel dropdown: 2026-04-13 — pt-2 crea puente de hover entre botón y panel; mt-2 dejaba un hueco sin hit-area y onMouseLeave cerraba el menú al bajar al submenú. */}
                  {ofertaOpen && (
                    <div className="absolute left-1/2 top-full z-50 w-40 -translate-x-1/2 pt-2">
                      <div className="animate-slide-down overflow-hidden rounded-xl bg-white shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOfertaOpen(false)}
                            className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-sky-50 hover:text-sky-500"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            /* Ítem simple */
            return (
              <Link
                key={item.href}
                href={item.href!}
                className="text-gray-800 transition-colors hover:text-sky-500"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Botón hamburguesa (solo móvil) ── */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span className={["block h-0.5 w-6 rounded-full bg-gray-800 transition-all duration-300", menuOpen ? "translate-y-2 rotate-45" : ""].join(" ")} />
          <span className={["block h-0.5 w-6 rounded-full bg-gray-800 transition-all duration-300", menuOpen ? "opacity-0" : ""].join(" ")} />
          <span className={["block h-0.5 w-6 rounded-full bg-gray-800 transition-all duration-300", menuOpen ? "-translate-y-2 -rotate-45" : ""].join(" ")} />
        </button>
      </header>

      {/* ══ Panel de menú móvil ══════════════════════════════════════════ */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={closeAll}
            aria-hidden="true"
          />

          <nav
            // 2026-04-13: Menú móvil con altura por contenido (no pantalla completa),
            // pero con max-height y scroll interno para evitar recortes en dispositivos bajos.
            className="animate-slide-down fixed inset-x-0 top-[88px] z-40 max-h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain bg-white px-6 pb-8 pt-4 shadow-xl md:hidden"
            role="dialog"
            aria-label="Menú de navegación"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                /* Ítem con sub-opciones en móvil */
                if (item.children) {
                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => setMOfertaOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-gray-800 transition-colors hover:bg-sky-50 hover:text-sky-500"
                      >
                        {item.label}
                        <Chevron open={mOfertaOpen} />
                      </button>

                      {mOfertaOpen && (
                        <ul className="animate-slide-down ml-4 flex flex-col gap-0.5">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={closeAll}
                                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-sky-600 transition-colors hover:bg-sky-50"
                              >
                                • {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                /* Ítem simple */
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      onClick={closeAll}
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-gray-800 transition-colors hover:bg-sky-50 hover:text-sky-500"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex justify-center gap-2">
              {["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6B9D"].map((color, i) => (
                <span key={i} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />
              ))}
            </div>
          </nav>
        </>
      )}
    </>
  );
}
