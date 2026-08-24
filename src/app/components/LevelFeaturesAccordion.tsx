// 2026-08-22: Acordeón calmado — Cuna de confianza (Maternal/Kínder).
"use client";

import { useState } from "react";
import Image from "next/image";

export type AccordionItem = {
  src: string;
  label: string;
  text: string;
};

export default function LevelFeaturesAccordion({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: AccordionItem[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="rounded-[1.75rem] bg-white/95 p-7 shadow-[0_28px_60px_-32px_rgba(42,47,51,0.28)] backdrop-blur-sm md:p-9">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00B8D9]">
        {eyebrow}
      </p>
      <h3 className="mb-3 font-heading text-2xl font-bold leading-snug text-[#2A2F33] md:text-[1.75rem]">
        {title}
      </h3>
      <p className="mb-7 text-[15px] leading-relaxed text-[#5C656C]">{intro}</p>

      <ul className="divide-y divide-[#E8EEF0]">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center gap-3.5 py-4 text-left transition-colors hover:bg-[#F7FBFC]/90 focus-visible:outline-2 focus-visible:outline-[#00D3F9]"
                aria-expanded={isOpen}
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#E8F9FC]">
                  <Image
                    src={item.src}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <span className="flex-1 text-[15px] font-semibold text-[#2A2F33]">
                  {item.label}
                </span>
                <span
                  className="text-lg font-light leading-none text-[#e8192c]"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-4 pl-[3.5rem] pr-1 text-sm leading-relaxed text-[#5C656C]">
                    {item.text}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
