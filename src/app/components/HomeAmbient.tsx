// 2026-08-22: Ondas y doodles para unificar el ambiente visual de la home.
//             Evita cortes rectos entre secciones (estilo original Winston).

type WaveProps = {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
};

/** Divisor ondulado entre secciones (misma paleta cian/rojo Winston). */
export function HomeWave({
  from = "#ffffff",
  to = "#00D3F9",
  flip = false,
  className = "",
}: WaveProps) {
  return (
    <div
      className={`pointer-events-none relative z-[1] -mb-px leading-[0] ${className}`}
      style={{ backgroundColor: to }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className={`block h-10 w-full sm:h-12 md:h-14 ${flip ? "rotate-180" : ""}`}
      >
        {/* Capa base = color de la sección siguiente */}
        <path fill={to} d="M0,0 H1440 V72 H0 Z" />
        {/* Onda del color de la sección anterior */}
        <path
          fill={from}
          d="M0,0 H1440 V28 C1260,52 1140,8 960,30 C780,52 600,6 420,28 C240,50 120,14 0,36 Z"
        />
        <path
          fill={from}
          fillOpacity="0.4"
          d="M0,0 H1440 V40 C1280,22 1120,54 940,36 C760,18 580,50 400,34 C220,18 100,42 0,48 Z"
        />
      </svg>
    </div>
  );
}

/** Doodles decorativos (sol, estrella, cohete, crayón) — ambiente lúdico continuo. */
export function HomeDoodles({ tone = "cyan" }: { tone?: "cyan" | "soft" }) {
  const stroke = tone === "cyan" ? "#00D3F9" : "#9CA3AF";
  const accent = "#e8192c";

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Sol sonriente — arriba derecha */}
      <svg
        className="absolute right-[4%] top-6 h-10 w-10 opacity-40 md:right-[8%] md:top-10 md:h-14 md:w-14"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle cx="32" cy="32" r="12" stroke={stroke} strokeWidth="2" />
        <path
          d="M32 6v6M32 52v6M6 32h6M52 32h6M14 14l4 4M46 46l4 4M14 50l4-4M46 18l4-4"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M26 34c2 3 10 3 12 0"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="27" cy="30" r="1.5" fill={stroke} />
        <circle cx="37" cy="30" r="1.5" fill={stroke} />
      </svg>

      {/* Estrella — izquierda */}
      <svg
        className="absolute left-[3%] top-[28%] h-7 w-7 opacity-35 md:left-[6%] md:h-9 md:w-9"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M20 4l3.5 11H35l-9 6.5 3.5 11L20 26l-9.5 6.5 3.5-11L5 15h11.5L20 4z"
          stroke={stroke}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>

      {/* Cohete — arriba izquierda */}
      <svg
        className="absolute left-[8%] top-8 h-9 w-9 opacity-40 md:left-[12%] md:h-11 md:w-11"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M24 6c6 6 8 14 8 20l-8 10-8-10c0-6 2-14 8-20z"
          stroke={accent}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="20" r="3" stroke={accent} strokeWidth="1.8" />
        <path
          d="M16 28l-4 8M32 28l4 8"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Crayón — abajo derecha */}
      <svg
        className="absolute bottom-10 right-[6%] h-8 w-8 opacity-35 md:bottom-14 md:right-[10%] md:h-10 md:w-10"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M12 28l16-16 4 4-16 16-5 1 1-5z"
          stroke={accent}
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M26 14l4 4" stroke={accent} strokeWidth="1.8" />
      </svg>

      {/* Blob suave cian */}
      <div className="absolute -left-16 top-1/3 h-40 w-40 rounded-full bg-[#00D3F9]/10 blur-2xl md:h-56 md:w-56" />
      <div className="absolute -right-10 bottom-1/4 h-36 w-36 rounded-full bg-[#3ADEFC]/15 blur-2xl md:h-48 md:w-48" />
    </div>
  );
}
