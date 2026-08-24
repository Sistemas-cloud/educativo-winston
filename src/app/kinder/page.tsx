// 2026-04-08: Página Kinder.
// 2026-08-17: Metadata y footer compartido.
// 2026-08-22: Rediseño “Cuna de confianza” — atmósfera para madres primerizas.
import type { Metadata } from "next";
import Image from "next/image";

import EventsCarousel from "../components/EventsCarousel";
import Footer from "../components/Footer";
import {
  CradleAdmitCta,
  CradleAdmissionsNote,
  CradleArtStory,
  CradleHeroWave,
  CradleIntro,
  CradleMomentsHeader,
  CradleOverlap,
  CradlePillars,
  CradleSoftSplit,
} from "../components/LevelPageSections";
import LoadingScreen from "../components/LoadingScreen";
import KinderHeroText from "../components/KinderHeroText";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Kínder bilingüe Cambridge en Cd. Madero",
  description:
    "Kínder del Instituto Educativo Winston en Ciudad Madero: desarrollo cognitivo, emocional y social con inglés Cambridge, talleres de hip hop, fútbol y yoga, y servicio de estancia.",
  alternates: { canonical: "/kinder" },
  openGraph: {
    title:
      "Kínder bilingüe Cambridge en Cd. Madero | Instituto Educativo Winston",
    description:
      "Kínder Winston en Ciudad Madero: inglés Cambridge, talleres y estancia en un entorno seguro.",
    url: "/kinder",
    images: [
      {
        url: "/uploads/img/KINDER/portada-kinder.png",
        alt: "Portada Kinder Instituto Educativo Winston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kínder bilingüe Cambridge en Cd. Madero | Instituto Educativo Winston",
    description:
      "Kínder Winston en Ciudad Madero: inglés Cambridge, talleres y estancia en un entorno seguro.",
    images: ["/uploads/img/KINDER/portada-kinder.png"],
  },
};

const PILARES = [
  {
    src: "/uploads/img/MATERNAL/icono-engrane.png",
    title: "Pensamiento y autonomía",
    text: "Proyectos y dinámicas que fortalecen la lógica y la capacidad de decidir con seguridad.",
  },
  {
    src: "/uploads/img/INICIO/ic-carita-feliz.png",
    title: "Voz propia",
    text: "Expresión segura en español e inglés, con respaldo Cambridge Educational Partner.",
  },
  {
    src: "/uploads/img/KINDER/icono-futbol.png",
    title: "Cuerpo y comunidad",
    text: "Talleres y juego colaborativo para crecer con energía, respeto y confianza.",
  },
];

const TALLERES = [
  {
    src: "/uploads/img/KINDER/icono-de-hip-hop.png",
    label: "Hip Hop",
    text: "Ritmo, coordinación y expresión corporal con energía positiva.",
  },
  {
    src: "/uploads/img/KINDER/icono-futbol.png",
    label: "Fútbol",
    text: "Juego en equipo, motricidad y hábitos saludables al aire libre.",
  },
  {
    src: "/uploads/img/KINDER/icono-de-yoga.png",
    label: "Yoga",
    text: "Calma, respiración y conciencia del cuerpo desde edades tempranas.",
  },
];

export default function KinderPage() {
  return (
    <div className="bg-[#FFFBFA]">
      <LoadingScreen />
      <Navbar />

      <section className="relative h-[68vh] min-h-[460px] w-full overflow-hidden sm:h-[72vh] md:h-[88vh] md:max-h-[920px]">
        <Image
          src="/uploads/img/KINDER/portada-kinder.png"
          alt="Niños en Kínder del Instituto Educativo Winston"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A2F33]/55 via-[#2A2F33]/15 to-transparent"
          aria-hidden="true"
        />
        <KinderHeroText />
        <CradleHeroWave />
      </section>

      <CradleIntro
        eyebrow="Instituto Educativo Winston · Ciudad Madero"
        title="Una etapa para crecer con confianza — y con voz propia"
      >
        <p>
          En Kínder acompañamos el paso hacia mayor autonomía. Con proyectos,
          juego y un modelo bilingüe, tu hijo consolida lo cognitivo, emocional
          y social.
        </p>
        <p>
          El inglés se vive con sentido, respaldado por Cambridge: bases firmes
          que acompañan más allá del aula.
        </p>
      </CradleIntro>

      <CradlePillars
        heading="Cómo acompañamos esta etapa"
        subheading="Claridad, calidez y retos a la medida de su edad."
        items={PILARES}
      />

      {/* 2026-08-22: Arte + copy en el espacio blanco (composición completa). */}
      <CradleArtStory
        src="/uploads/img/KINDER/bloque-1-kinder.jpg"
        alt="Kínder — Instituto Educativo Winston"
        eyebrow="El día a día en Kínder"
        title={
          <>
            Un aula que invita
            <br className="hidden lg:block" /> a crecer con alegría
          </>
        }
        paragraphs={[
          "En Kínder, la autonomía se construye con proyectos, juego entre amigos e inglés vivo. Cada niño encuentra su voz — y un lugar donde se siente valorado.",
          "Cuidamos el ambiente, la rutina y el vínculo con la familia, para que explorar se sienta seguro y emocionante a la vez.",
        ]}
        closing="Instituto Educativo Winston · Ciudad Madero"
      />

      <CradleSoftSplit
        eyebrow="Ambiente y seguridad"
        title="Un campus que invita a explorar con tranquilidad"
        body={
          <>
            <p>
              Espacios pensados para la primera infancia, adultos presentes y
              comunicación cercana con las familias. Queremos que confíes en el
              día a día.
            </p>
            <p>
              Ofrecemos servicio de estancia y una vida escolar rica en
              experiencias, siempre con el cuidado que caracteriza al Instituto
              Educativo Winston.
            </p>
          </>
        }
        imageSrc="/uploads/img/KINDER/EVENTOS/DANCE.jpg"
        imageAlt="Vida en Kínder — Instituto Educativo Winston"
        imagePosition="center"
        reverse
      />

      <CradleOverlap
        imageSrc="/uploads/img/KINDER/EVENTOS/PRIMAVERA.jpg"
        imageAlt="Talleres en Kínder Winston"
        eyebrow="Talleres"
        title="Cuerpo, ritmo y calma"
        intro="Experiencias que complementan el aula y celebran lo que tu hijo ya es."
        items={TALLERES}
      />

      <CradleAdmissionsNote levelLabel="Kínder" />

      <CradleMomentsHeader title="Vida en Kínder" />
      <section className="bg-[#FFFBFA] px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] shadow-[0_24px_56px_-30px_rgba(42,47,51,0.3)]">
          <div className="relative bg-[#e8192c]/95">
            <Image
              src="/uploads/img/KINDER/bloque-2-kinder.png"
              alt=""
              width={1024}
              height={480}
              sizes="100vw"
              className="h-auto w-full object-cover opacity-90"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-[8%] md:bottom-[10%]">
              <EventsCarousel />
            </div>
          </div>
        </div>
      </section>

      <CradleAdmitCta
        levelLabel="Kínder"
        line="Que crezca seguro, curioso y listo para lo que sigue"
      />

      <Footer />
    </div>
  );
}
