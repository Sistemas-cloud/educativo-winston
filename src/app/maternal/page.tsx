// 2026-04-08: Página Maternal.
// 2026-08-17: Metadata y footer compartido.
// 2026-08-22: Rediseño “Cuna de confianza” — atmósfera para madres primerizas.
import type { Metadata } from "next";
import Image from "next/image";

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
import MaternalGallery from "../components/MaternalGallery";
import MaternalHeroText from "../components/MaternalHeroText";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Maternal bilingüe Cambridge en Cd. Madero",
  description:
    "Maternal del Instituto Educativo Winston en Ciudad Madero: inglés desde el primer día con modelo Cambridge, ambiente cálido y bases para preescolar y kínder.",
  alternates: { canonical: "/maternal" },
  openGraph: {
    title:
      "Maternal bilingüe Cambridge en Cd. Madero | Instituto Educativo Winston",
    description:
      "Maternal Winston: inglés Cambridge desde el primer día en un entorno seguro y estimulante.",
    url: "/maternal",
    images: [
      {
        url: "/uploads/img/MATERNAL/portada-maternal.jpg",
        alt: "Portada Maternal Instituto Educativo Winston",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Maternal bilingüe Cambridge en Cd. Madero | Instituto Educativo Winston",
    description:
      "Maternal Winston: inglés Cambridge desde el primer día en un entorno seguro y estimulante.",
    images: ["/uploads/img/MATERNAL/portada-maternal.jpg"],
  },
};

const PILARES = [
  {
    src: "/uploads/img/MATERNAL/icono-niño.png",
    title: "Cuidado y vínculo",
    text: "Un entorno amoroso donde cada niño se siente visto, escuchado y acompañado.",
  },
  {
    src: "/uploads/img/INICIO/ic-cuidado.png",
    title: "Inglés vivido",
    text: "El idioma llega en la rutina diaria, con respaldo Cambridge Educational Partner.",
  },
  {
    src: "/uploads/img/MATERNAL/icono-foco.png",
    title: "Desarrollo integral",
    text: "Juego, exploración y rutinas que nutren lo cognitivo, emocional y social.",
  },
];

const DESARROLLO = [
  {
    src: "/uploads/img/MATERNAL/icono-engrane.png",
    label: "Pensamiento crítico",
    text: "Actividades que despiertan la curiosidad y el razonamiento desde temprano.",
  },
  {
    src: "/uploads/img/MATERNAL/icono-foco.png",
    label: "Creatividad",
    text: "Expresión libre y proyectos lúdicos que alimentan la imaginación.",
  },
  {
    src: "/uploads/img/MATERNAL/icono-niño.png",
    label: "Seguridad emocional",
    text: "Acompañamiento cercano para que crezcan felices, seguros y confiados.",
  },
];

export default function MaternalPage() {
  return (
    <div className="bg-[#FFFBFA]">
      <LoadingScreen />
      <Navbar />

      {/* ═══ HERO emocional ═══ */}
      <section className="relative h-[68vh] min-h-[460px] w-full overflow-hidden sm:h-[72vh] md:h-[88vh] md:max-h-[920px]">
        <Image
          src="/uploads/img/MATERNAL/portada-maternal.jpg"
          alt="Niños en Maternal del Instituto Educativo Winston"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2A2F33]/55 via-[#2A2F33]/15 to-transparent"
          aria-hidden="true"
        />
        <MaternalHeroText />
        <CradleHeroWave />
      </section>

      <CradleIntro
        eyebrow="Instituto Educativo Winston · Ciudad Madero"
        title="Sabemos lo que significa confiarle a alguien lo más importante"
      >
        <p>
          En Maternal acompañamos esos primeros pasos con calidez y profesionalismo.
          Tu hijo vive el inglés de forma natural, en un espacio seguro pensado
          para la primera infancia.
        </p>
        <p>
          No apresuramos etapas: cuidamos el vínculo, la rutina y el juego para
          que cada día se sienta como un hogar que enseña.
        </p>
      </CradleIntro>

      <CradlePillars
        heading="Cómo acompañamos a tu hijo"
        subheading="Tres promesas simples, presentes en cada jornada."
        items={PILARES}
      />

      {/* 2026-08-22: Arte + copy en el espacio blanco (composición completa). */}
      <CradleArtStory
        src="/uploads/img/MATERNAL/bloque 1 m.jpg"
        alt="Maternal — Instituto Educativo Winston"
        eyebrow="El corazón de Maternal"
        title={
          <>
            Aquí los primeros días
            <br className="hidden lg:block" /> se viven con ternura
          </>
        }
        paragraphs={[
          "Cada rutina está pensada para que tu bebé se sienta seguro: juego, canciones, inglés natural y el cuidado de adultos que están presentes.",
          "No apresuramos etapas. Acompañamos el descubrimiento con paciencia, para que confíe en el mundo — y tú confíes en nosotros.",
        ]}
        closing="Instituto Educativo Winston · Ciudad Madero"
      />

      <CradleSoftSplit
        eyebrow="Ambiente y seguridad"
        title="Un lugar pensado para que tú también estés en paz"
        body={
          <>
            <p>
              Aulas cálidas, adultos responsables y una comunicación cercana con
              las familias. Queremos que al dejar a tu bebé sientas tranquilidad,
              no prisa.
            </p>
            <p>
              Contamos con servicio de estancia y un modelo bilingüe con respaldo
              Cambridge, siempre al ritmo de la edad Maternal.
            </p>
          </>
        }
        imageSrc="/uploads/img/MATERNAL/GALERIA/DANCE.jpg"
        imageAlt="Momento en Maternal — Instituto Educativo Winston"
        imagePosition="center"
      />

      <CradleOverlap
        imageSrc="/uploads/img/MATERNAL/GALERIA/RACING.jpg"
        imageAlt="Desarrollo en Maternal Winston"
        eyebrow="Áreas de desarrollo"
        title="Crece con equilibrio"
        intro="Impulsamos lo que necesita en esta edad — con ternura y claridad."
        items={DESARROLLO}
      />

      <CradleAdmissionsNote levelLabel="Maternal" />

      <CradleMomentsHeader title="Vida en Maternal" />
      <section className="bg-[#FFFBFA] px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] shadow-[0_24px_56px_-30px_rgba(42,47,51,0.3)]">
          <div className="relative bg-[#e8192c]/95">
            <Image
              src="/uploads/img/MATERNAL/bloque2-kinder.png"
              alt=""
              width={1024}
              height={480}
              sizes="100vw"
              className="h-auto w-full object-cover opacity-90"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-[8%] px-3 md:bottom-[10%] md:px-6">
              <MaternalGallery />
            </div>
          </div>
        </div>
      </section>

      <CradleAdmitCta
        levelLabel="Maternal"
        line="Tu bebé merece un comienzo lleno de amor y confianza"
      />

      <Footer />
    </div>
  );
}
