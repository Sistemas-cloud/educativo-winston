// 2026-08-22: Grid de áreas de desarrollo (estilo Columbia + identidad Winston).
// 2026-08-22: Fondo blanco + doodles — mismo ambiente continuo de la home.
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import { HomeDoodles } from "./HomeAmbient";

const AREAS: {
  src: string;
  title: string;
  text: string;
  wideIcon?: boolean;
}[] = [
  {
    src: "/uploads/img/INICIO/ic-cuidado.png",
    title: "Cuidado y seguridad",
    text: "Un entorno seguro y amoroso para que cada niño explore con confianza.",
  },
  {
    src: "/uploads/img/INICIO/ic-carita-feliz.png",
    title: "Formación integral",
    text: "Desarrollo cognitivo, emocional y social a través del juego y la rutina.",
  },
  {
    src: "/uploads/img/MATERNAL/icono-engrane.png",
    title: "Pensamiento crítico",
    text: "Actividades que despiertan la curiosidad y el razonamiento desde temprano.",
  },
  {
    src: "/uploads/img/MATERNAL/icono-foco.png",
    title: "Creatividad",
    text: "Expresión artística y proyectos lúdicos que potencian la imaginación.",
  },
  {
    src: "/uploads/img/MATERNAL/icono-niño.png",
    title: "Seguridad emocional",
    text: "Acompañamiento cercano para que se sientan vistos, escuchados y valorados.",
  },
  {
    src: "/uploads/img/LOGOS/logo-cambridge.png",
    title: "Inglés Cambridge",
    text: "Modelo bilingüe respaldado por Cambridge Educational Partner desde Maternal.",
    wideIcon: true,
  },
];

export default function HomeDevelopmentCards() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:px-10 md:py-20">
      <HomeDoodles tone="cyan" />

      <div className="relative z-[1] mx-auto max-w-5xl">
        <AnimateOnScroll animation="fadeUp">
          <h2 className="mb-3 text-center text-2xl font-bold text-[#00D3F9] md:text-3xl">
            Áreas de desarrollo
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-gray-500 md:text-base">
            En el Instituto Educativo Winston impulsamos el crecimiento de cada
            niño con experiencias claras, cálidas y alineadas a Maternal y
            Kínder.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {AREAS.map((area, i) => (
            <AnimateOnScroll
              key={area.title}
              animation="fadeUp"
              delay={i * 70}
              className="h-full"
            >
              {/* 2026-08-22: Menos “card”, más ítem del entorno (borde suave). */}
              <article className="flex h-full flex-col items-center px-4 py-6 text-center transition-transform duration-200 hover:-translate-y-1">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F9FC]/80">
                  <Image
                    src={area.src}
                    alt={area.title}
                    width={area.wideIcon ? 120 : 56}
                    height={area.wideIcon ? 40 : 56}
                    className={
                      area.wideIcon
                        ? "h-auto w-[96px] object-contain"
                        : "h-12 w-12 object-contain"
                    }
                  />
                </div>
                <h3 className="mb-2 text-base font-bold tracking-wide text-gray-700">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {area.text}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
