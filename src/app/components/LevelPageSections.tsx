// 2026-08-22: Sistema “Cuna de confianza” — Maternal/Kínder.
//             Atmósfera cálida, aire editorial, identidad Winston (cian/rojo contenido).
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import LevelFeaturesAccordion, {
  type AccordionItem,
} from "./LevelFeaturesAccordion";
import { SITE_NAME, SITE_SOCIAL } from "@/lib/seo/site-config";

/** Hero: onda crema hacia el contenido (calma, no corte). */
export function CradleHeroWave() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-20 leading-[0]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 88"
        preserveAspectRatio="none"
        className="block h-14 w-full sm:h-16 md:h-[4.5rem]"
      >
        <path
          fill="#FFFBFA"
          d="M0,88 L1440,88 L1440,40 C1180,72 1040,18 860,38 C680,58 520,14 340,36 C180,54 80,28 0,44 Z"
        />
        <path
          fill="#FFFBFA"
          fillOpacity="0.55"
          d="M0,88 L1440,88 L1440,52 C1260,30 1100,66 920,48 C740,30 560,64 380,46 C220,30 100,52 0,58 Z"
        />
      </svg>
    </div>
  );
}

/** Intro humana centrada — máximo 2 párrafos. */
export function CradleIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-[#FFFBFA] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <AnimateOnScroll animation="fadeUp">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A9399]">
            {eyebrow}
          </p>
          <h2 className="mb-8 font-heading text-[1.65rem] font-bold leading-[1.25] text-[#2A2F33] md:text-4xl">
            {title}
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fadeUp" delay={90}>
          <div className="space-y-5 text-left text-[15px] leading-[1.75] text-[#5C656C] md:text-center md:text-base md:leading-[1.8]">
            {children}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/** Tres pilares amplios (enfoque), sin ruido de iconos. */
export function CradlePillars({
  heading,
  subheading,
  items,
}: {
  heading: string;
  subheading: string;
  items: { src: string; title: string; text: string }[];
}) {
  return (
    <section className="bg-[#FFFBFA] px-6 pb-20 md:px-10 md:pb-28">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll animation="fadeUp">
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A9399]">
            Nuestro enfoque
          </p>
          <h2 className="mb-3 text-center font-heading text-2xl font-bold text-[#00B8D9] md:text-3xl">
            {heading}
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-[15px] leading-relaxed text-[#5C656C]">
            {subheading}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <AnimateOnScroll
              key={item.title}
              animation="fadeUp"
              delay={i * 100}
              className="h-full"
            >
              <article className="flex h-full flex-col items-center px-2 text-center">
                <div className="mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white shadow-[0_12px_32px_-16px_rgba(0,211,249,0.45)]">
                  <Image
                    src={item.src}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="mb-2.5 text-[15px] font-bold text-[#2A2F33]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5C656C]">
                  {item.text}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Split editorial: fotografía real completa (no banners artísticos recortados). */
export function CradleSoftSplit({
  eyebrow,
  title,
  body,
  imageSrc,
  imageAlt,
  reverse = false,
  /** Encuadre de la foto real, p. ej. "center top" */
  imagePosition = "center",
}: {
  eyebrow: string;
  title: string;
  body: ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  imagePosition?: string;
}) {
  return (
    <section className="bg-[#FFFBFA] px-6 py-16 md:px-10 md:py-24">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <AnimateOnScroll
          animation="fadeUp"
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div
            className="absolute -inset-4 rounded-[42%_58%_52%_48%/48%_42%_58%_52%] bg-[#DFF7FC]/65 md:-inset-6"
            aria-hidden="true"
          />
          <div
            className="absolute -right-3 top-8 h-20 w-20 rounded-full border border-[#00D3F9]/20 md:h-28 md:w-28"
            aria-hidden="true"
          />
          {/* 2026-08-22: Solo fotografía real; object-cover sin mitad en blanco. */}
          <div className="relative z-10 overflow-hidden rounded-[1.75rem] shadow-[0_28px_64px_-30px_rgba(42,47,51,0.35)] ring-1 ring-black/5">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={1000}
              sizes="(max-width: 1024px) 92vw, 480px"
              className="aspect-[4/5] h-auto w-full object-cover"
              style={{ objectPosition: imagePosition }}
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={100}>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e8192c]/90">
            {eyebrow}
          </p>
          <h2 className="mb-5 font-heading text-2xl font-bold leading-snug text-[#2A2F33] md:text-[2rem]">
            {title}
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.75] text-[#5C656C] md:text-base">
            {body}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/**
 * Banner artístico Winston + copy en el espacio blanco diseñado.
 * 2026-08-22: El arte no se recorta; el texto vive a la izquierda (desktop)
 * y debajo en móvil, para no “desperdiciar” la composición.
 */
export function CradleArtStory({
  src,
  alt,
  eyebrow,
  title,
  paragraphs,
  closing,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  paragraphs: string[];
  closing?: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFBFA]">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        sizes="100vw"
        className="h-auto w-full object-contain object-center"
        priority={false}
      />

      {/* Desktop: texto en el blanco izquierdo del arte */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="pointer-events-auto absolute left-[5%] top-[12%] w-[44%] max-w-[26rem] lg:left-[7%] lg:top-[14%] lg:w-[40%]">
          <AnimateOnScroll animation="fadeUp">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9399]">
              {eyebrow}
            </p>
            <h2 className="mb-4 font-heading text-lg font-bold leading-snug text-[#00B8D9] lg:text-xl xl:text-[1.35rem]">
              {title}
            </h2>
            <div className="space-y-3 text-[13px] leading-relaxed text-[#5C656C] lg:text-sm lg:leading-[1.7]">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {closing ? (
                <p className="pt-1 font-medium text-[#2A2F33]">{closing}</p>
              ) : null}
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Móvil: arte completo + contexto debajo */}
      <div className="bg-[#FFFBFA] px-6 py-10 md:hidden">
        <AnimateOnScroll animation="fadeUp">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A9399]">
            {eyebrow}
          </p>
          <h2 className="mb-4 font-heading text-xl font-bold leading-snug text-[#00B8D9]">
            {title}
          </h2>
          <div className="space-y-3 text-[15px] leading-relaxed text-[#5C656C]">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            {closing ? (
              <p className="pt-1 font-medium text-[#2A2F33]">{closing}</p>
            ) : null}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/** Foto + panel solapado con acordeón. */
export function CradleOverlap({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  intro,
  items,
}: {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: AccordionItem[];
}) {
  return (
    <section className="bg-[#F7FBFC] px-6 py-16 md:px-10 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-0">
          <AnimateOnScroll animation="fadeUp" className="lg:col-span-7">
            <div className="overflow-hidden rounded-[1.75rem] shadow-[0_24px_56px_-28px_rgba(42,47,51,0.35)] lg:rounded-r-none">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={900}
                height={700}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="aspect-[5/4] h-full w-full object-cover lg:min-h-[500px]"
              />
            </div>
          </AnimateOnScroll>
          <div className="relative z-10 lg:col-span-5 lg:-ml-14 lg:flex lg:items-center">
            <LevelFeaturesAccordion
              eyebrow={eyebrow}
              title={title}
              intro={intro}
              items={items}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Nota limpia de edades/horarios sin inventar datos. */
export function CradleAdmissionsNote({ levelLabel }: { levelLabel: string }) {
  return (
    <section className="bg-[#FFFBFA] px-6 py-16 md:px-10 md:py-20">
      <AnimateOnScroll animation="fadeUp">
        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-[#E8EEF0] bg-white px-8 py-10 text-center shadow-[0_16px_40px_-28px_rgba(42,47,51,0.2)] md:px-12 md:py-12">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A9399]">
            Admisiones
          </p>
          <h2 className="mb-4 font-heading text-xl font-bold text-[#2A2F33] md:text-2xl">
            Edades y horarios de {levelLabel}
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-[15px] leading-relaxed text-[#5C656C]">
            Cada familia es distinta. Te orientamos de forma personal sobre el
            grupo adecuado y la jornada que mejor se adapta a ustedes.
          </p>
          <Link
            href="/contacto"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#00D3F9] px-8 text-xs font-bold tracking-[0.18em] text-white transition hover:bg-[#00BFE0] focus-visible:outline-2 focus-visible:outline-[#00D3F9]"
          >
            CONSULTAR EN ADMISIONES
          </Link>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

/** Cierre emocional + CTA suave. */
export function CradleAdmitCta({
  levelLabel,
  line,
}: {
  levelLabel: string;
  line: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E8F9FC] to-[#FFFBFA] px-6 py-20 md:px-10 md:py-28">
      <div
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#00D3F9]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-8 h-48 w-48 rounded-full bg-[#e8192c]/8 blur-3xl"
        aria-hidden="true"
      />
      <AnimateOnScroll animation="fadeUp">
        <div className="relative z-[1] mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A9399]">
            {SITE_NAME}
          </p>
          <h2 className="font-heading text-2xl font-bold leading-snug text-[#2A2F33] md:text-3xl">
            {line}
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-[#5C656C]">
            Agenda una visita y conoce {levelLabel} con calma. Estamos en Ciudad
            Madero para acompañarte.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#00D3F9] px-8 text-xs font-bold tracking-[0.18em] text-white shadow-[0_12px_28px_-12px_rgba(0,211,249,0.7)] transition hover:bg-[#00BFE0] focus-visible:outline-2 focus-visible:outline-[#00D3F9]"
            >
              AGENDAR UNA VISITA
            </Link>
            <a
              href={SITE_SOCIAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#2A2F33]/15 bg-white px-8 text-xs font-bold tracking-[0.18em] text-[#2A2F33] transition hover:border-[#00D3F9]/40 hover:text-[#00B8D9] focus-visible:outline-2 focus-visible:outline-[#00D3F9]"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

/** Galería / eventos con título calmado sobre fondo suave. */
export function CradleMomentsHeader({ title }: { title: string }) {
  return (
    <div className="bg-[#FFFBFA] px-6 pb-2 pt-16 text-center md:pt-20">
      <AnimateOnScroll animation="fadeUp">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A9399]">
          Momentos reales
        </p>
        <h2 className="font-heading text-2xl font-bold text-[#2A2F33] md:text-3xl">
          {title}
        </h2>
      </AnimateOnScroll>
    </div>
  );
}

export type { AccordionItem };
