// 2026-04-08: Página principal — conecta Navbar, LoadingScreen, HeroText y
//             AnimateOnScroll. Los banners no tienen animación propia;
//             solo íconos y textos usan AnimateOnScroll.
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "./components/AnimateOnScroll";
import HeroText from "./components/HeroText";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";

/* ─────────────────────────── Íconos de redes sociales ─────────────────── */

function IconFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconTiktok() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.04-8.22a8.24 8.24 0 0 0 4.82 1.55V5.2a4.85 4.85 0 0 1-1.01-.51z" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.858L.057 23.995l6.284-1.648A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.893a9.877 9.877 0 0 1-5.034-1.376l-.361-.214-3.732.979 1.001-3.625-.235-.373A9.847 9.847 0 0 1 2.107 12C2.107 6.527 6.527 2.107 12 2.107c5.474 0 9.893 4.42 9.893 9.893 0 5.474-4.419 9.893-9.893 9.893z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconYoutube() {
  return (
    // 2026-04-13: Se unifica el estilo de YouTube a versión monocromática para mantener coherencia visual con los demás íconos del footer.
    // 2026-04-13: Se incrementa tamaño óptico de YouTube (área y grosor) para igualarlo visualmente con los demás íconos.
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4.5" width="20" height="15" rx="4" ry="4" />
      <polygon points="9.5 8.6 16.8 12 9.5 15.4" fill="currentColor" stroke="currentColor" />
    </svg>
  );
}

/* ─────────────────────────── Página principal ──────────────────────────── */

export default function Home() {
  return (
    <>
      {/* Pantalla de carga animada */}
      <LoadingScreen />

      {/* Navbar sticky con hamburguesa */}
      <Navbar />

      {/* ══════════════════════════ HERO ══════════════════════════════════ */}
      {/* 2026-04-08: Portada completa con HeroText centrado y más arriba.
          El banner NO tiene animación; solo el texto/botón usa HeroText. */}
      {/* 2026-04-13: En móvil se incrementa la altura del hero para separar logo, texto wave y CTA. */}
      <section className="relative h-[76vh] min-h-[480px] w-full overflow-hidden sm:h-[72vh] md:h-[100vh]">
        <Image
          src="/uploads/img/INICIO/portada1.jpg"
          alt="Niño sonriente en el Instituto Educativo Winston"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Texto wave + botón CTA centrados */}
        <HeroText />
      </section>

      {/* ══════════════════════ BLOQUE 1 — Instituto ══════════════════════ */}
      {/* 2026-04-08: Solo íconos y textos tienen AnimateOnScroll; el banner no. */}
      <section className="relative w-full">
        {/* Banner — sin animación */}
        <Image
          src="/uploads/img/INICIO/bloque1.png"
          alt="Niña sonriente del Instituto Educativo Winston"
          width={1024}
          height={576}
          sizes="100vw"
          className="h-auto w-full object-cover"
        />

        {/* Texto superpuesto desktop */}
        <div className="absolute inset-0 mx-auto hidden w-full max-w-[1100px] md:block">
          <div className="absolute right-[6%] top-[22%] w-[46%]">

            {/* Título con fadeUp */}
            <AnimateOnScroll animation="fadeUp" delay={0}>
              {/* 2026-04-13: Se aplica tono institucional exacto #00D3F9 en títulos solicitados. */}
              <p className="text-2xl font-light leading-tight text-[#00D3F9] lg:text-3xl">
                Instituto
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-[#00D3F9] lg:text-5xl">
                Educativo Winston
              </h2>
            </AnimateOnScroll>

            {/* 2026-04-13: Se agrega línea divisoria azul centrada entre ambas columnas
                para replicar el diseño original del bloque "Instituto Educativo Winston". */}
            <div className="relative mb-5 grid grid-cols-2 gap-5">
              <span
                // 2026-04-13: Se incrementa el grosor de la línea para mejorar legibilidad visual.
                className="pointer-events-none absolute left-1/2 top-1 bottom-1 w-[3px] -translate-x-1/2 bg-[#00D3F9]"
                aria-hidden="true"
              />
              {/* Ícono izquierdo con bounceIn */}
              <AnimateOnScroll animation="bounceIn" delay={100}>
                <Image
                  src="/uploads/img/INICIO/ic-cuidado.png"
                  alt=""
                  width={52}
                  height={52}
                  aria-hidden="true"
                  className="mx-auto mb-3 h-[34px] w-[34px] lg:h-[52px] lg:w-[52px]"
                />
                <p className="text-justify text-xs leading-relaxed text-gray-500 lg:text-sm">
                  En el Instituto Educativo Winston Churchill, cuidamos y
                  formamos a los más pequeños en un entorno seguro, amoroso y
                  diseñado para potenciar su desarrollo integral.
                </p>
              </AnimateOnScroll>

              {/* Ícono derecho con bounceIn */}
              <AnimateOnScroll animation="bounceIn" delay={200}>
                <Image
                  src="/uploads/img/INICIO/ic-carita-feliz.png"
                  alt=""
                  width={52}
                  height={52}
                  aria-hidden="true"
                  className="mx-auto mb-3 h-[34px] w-[34px] lg:h-[52px] lg:w-[52px]"
                />
                <p className="text-justify text-xs leading-relaxed text-gray-500 lg:text-sm">
                  Ofrecemos experiencias de aprendizaje divertidas e
                  interactivas que impulsan su crecimiento cognitivo, emocional
                  y social, al mismo tiempo que adquieren bases sólidas en
                  inglés con el modelo Cambridge desde maternal.
                </p>
              </AnimateOnScroll>
            </div>

            {/* Párrafo final con fadeUp */}
            <AnimateOnScroll animation="fadeUp" delay={300}>
              <p className="text-justify text-xs leading-relaxed text-gray-500 lg:text-sm">
                Acompañamos a cada familia en esta etapa decisiva, asegurando
                que sus hijos crezcan felices, seguros y preparados para un
                futuro lleno de posibilidades.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Versión móvil del texto */}
        <div className="bg-white px-6 py-10 md:hidden">
          <AnimateOnScroll animation="fadeUp">
            <p className="text-2xl font-light leading-tight text-gray-500">Instituto</p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#00D3F9]">
              Educativo Winston
            </h2>
          </AnimateOnScroll>
          <div className="mb-5 grid grid-cols-1 gap-5">
            <AnimateOnScroll animation="slideLeft" delay={100}>
              <p className="text-justify text-sm leading-relaxed text-gray-500">
                En el Instituto Educativo Winston Churchill, cuidamos y formamos
                a los más pequeños en un entorno seguro, amoroso y diseñado para
                potenciar su desarrollo integral.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="slideRight" delay={150}>
              <p className="text-justify text-sm leading-relaxed text-gray-500">
                Ofrecemos experiencias de aprendizaje divertidas e interactivas
                que impulsan su crecimiento cognitivo, emocional y social, al
                mismo tiempo que adquieren bases sólidas en inglés con el modelo
                Cambridge desde maternal.
              </p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fadeUp" delay={200}>
            <p className="text-justify text-sm leading-relaxed text-gray-500">
              Acompañamos a cada familia en esta etapa decisiva, asegurando que
              sus hijos crezcan felices, seguros y preparados para un futuro
              lleno de posibilidades.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════ BLOQUE 3 — Maternal / Kinder ══════════════════ */}
      {/* 2026-04-13: En móvil los íconos pasan a flujo normal para evitar empalmes con
          la sección de Cambridge; en desktop se mantiene overlay sobre el banner. */}
      <section className="relative overflow-hidden">
        {/* Banner — sin animación */}
        <Image
          src="/uploads/img/INICIO/bloque3.png"
          alt=""
          width={1024}
          height={576}
          aria-hidden="true"
          sizes="100vw"
          className="h-auto w-full object-cover"
        />

        {/* Íconos con bounceIn */}
        {/* 2026-04-13: Se mantiene superposición sobre el banner en todos los tamaños;
            en móvil se reduce escala/offset para evitar recortes. */}
        <div className="absolute inset-0 z-10 flex -translate-y-4 items-center justify-center gap-4 px-4 sm:-translate-y-8 sm:gap-6 sm:px-6 md:-translate-y-12 md:gap-16 md:px-6">
          <AnimateOnScroll animation="bounceIn" delay={0} className="inline-block">
            <Link
              href="/maternal"
              className="block transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
            >
              <Image
                src="/uploads/img/INICIO/maternal.png"
                alt="Nivel Maternal"
                width={380}
                height={380}
                className="h-auto w-[165px] sm:w-[200px] md:w-[380px]"
              />
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="bounceIn" delay={150} className="inline-block">
            <Link
              href="/kinder"
              className="block transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-white"
            >
              <Image
                src="/uploads/img/INICIO/kinder.png"
                alt="Nivel Kinder"
                width={380}
                height={380}
                className="h-auto w-[165px] sm:w-[200px] md:w-[380px]"
              />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════ CAMBRIDGE ═════════════════════════════════ */}
      {/* 2026-04-08: Logo y texto con fadeUp. */}
      {/* 2026-04-13: Se elimina margen negativo en móvil para no encimar "Certificados por"
          con el bloque de Maternal/Kinder; en desktop se conserva el ajuste original. */}
      <section className="relative z-20 mt-0 bg-white py-6 md:-mt-40 md:py-8">
        <AnimateOnScroll
          animation="fadeUp"
          className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-5 px-6 sm:flex-row md:gap-8"
        >
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-gray-400 md:text-lg">
            Certificados por
          </p>
          <Image
            src="/uploads/img/LOGOS/logo-cambridge.png"
            alt="Cambridge English Educational Partner"
            width={390}
            height={126}
            style={{ width: 390, height: "auto" }}
          />
        </AnimateOnScroll>
      </section>

      {/* ══════════════════════════ FOOTER ════════════════════════════════ */}
      {/* 2026-04-08: Footer actualizado con color #3ADEFC. */}
      <footer className="bg-[#3ADEFC] px-6 py-5 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo + datos */}
          <div className="flex items-center gap-4">
            <Image
              src="/uploads/img/LOGOS/winston-educativo.png"
              alt="Logo Instituto Educativo Winston"
              width={48}
              height={48}
              style={{ width: 48, height: "auto" }}
              className="flex-shrink-0"
            />
            <div className="text-xs leading-5">
              <p className="mb-0.5 text-sm font-bold tracking-wider">RAISING BRIGHTER KIDS</p>
              <p>CALLE 2 #309 COL. JARDÍN 20 DE NOVIEMBRE</p>
              <p>CD. MADERO, TAMAULIPAS.</p>
              {/* 2026-04-17: Número telefónico actualizado por el cliente. */}
              <p>TEL 833 347 45 07</p>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center gap-5">
            {[
              // 2026-04-13: Enlaces reales de redes sociales compartidos por el cliente.
              { label: "Facebook",  icon: <IconFacebook />,  href: "https://www.tiktok.com/@imageneducativo" },
              { label: "TikTok",    icon: <IconTiktok />,    href: "https://www.tiktok.com/@imageneducativo" },
              { label: "WhatsApp",  icon: <IconWhatsapp />,  href: "https://wa.me/528333474507" },
              { label: "Instagram", icon: <IconInstagram />, href: "https://www.instagram.com/educativowinston/" },
              { label: "YouTube",   icon: <IconYoutube />,   href: "https://www.youtube.com/@institutowinstonchurchill5194" },
            ].map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors hover:text-white/70"
                target={href === "#" ? undefined : "_blank"}
                rel={href === "#" ? undefined : "noopener noreferrer"}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Aviso de privacidad */}
          <a
            href="/aviso-privacidad"
            className="text-xs font-semibold tracking-widest transition-colors hover:text-white/70 hover:underline"
          >
            AVISO DE PRIVACIDAD
          </a>
        </div>
      </footer>
    </>
  );
}
