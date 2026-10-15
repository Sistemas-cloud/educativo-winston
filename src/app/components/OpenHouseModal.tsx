// 2026-10-15: Popup Open House Maternal/Kínder (28 nov 2026) al entrar a cualquier página.
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const OPEN_HOUSE_FORM_URL = "https://open-house-chi.vercel.app/";

export default function OpenHouseModal() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Open House 28 de noviembre de 2026, Maternal y Kínder"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <a
          href={OPEN_HOUSE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="block"
        >
          <Image
            src="/images/open-house/open-house-popup.webp"
            alt="Open House Instituto Educativo Winston, 28 de noviembre de 2026, Maternal y Kínder."
            width={1024}
            height={576}
            sizes="(min-width: 768px) 768px, 100vw"
            className="h-auto w-full"
            priority
          />
        </a>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-lg font-bold text-white transition hover:bg-black/65"
          aria-label="Cerrar"
        >
          ×
        </button>
      </div>
    </div>
  );
}
