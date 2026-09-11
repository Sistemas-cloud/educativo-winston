// 2026-04-09: Formulario de contacto (Client Component + Server Action).
// 2026-08-22: Estilos Cuna de confianza — campos suaves, CTA claro.
// 2026-09-11: Honeypot + timestamp anti-bot; teléfono obligatorio.
"use client";

import { useActionState, useMemo } from "react";

import { ContactFormState, sendContactEmail } from "./actions";

const initialState: ContactFormState = { status: "idle", message: "" };

const fieldClass =
  "w-full rounded-xl border border-[#E0E6E9] bg-[#FFFBFA] px-3.5 py-2.5 text-sm text-[#2A2F33] outline-none transition placeholder:text-[#A0A8AE] focus:border-[#00D3F9] focus:bg-white focus:ring-2 focus:ring-[#00D3F9]/25";
const labelClass =
  "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A9399]";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactEmail,
    initialState,
  );
  // 2026-09-11: Marca de tiempo al montar el form (bots envían en <1s)
  const formStartedAt = useMemo(() => String(Date.now()), []);

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      {/* Honeypot oculto: si un bot lo llena, el server descarta el envío */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor="company_website">Sitio web</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="form_started_at" value={formStartedAt} />

      <div>
        <label htmlFor="nombre" className={labelClass}>
          Nombre del padre o tutor <span className="text-[#e8192c]">*</span>
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="aspirante" className={labelClass}>
          Nombre del aspirante
        </label>
        <input
          id="aspirante"
          name="aspirante"
          type="text"
          autoComplete="off"
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="correo" className={labelClass}>
            Correo <span className="text-[#e8192c]">*</span>
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono <span className="text-[#e8192c]">*</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className={labelClass}>
          Mensaje <span className="text-[#e8192c]">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder="Cuéntanos en qué nivel estás interesado y el mejor horario para visitarlos…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      {state.status !== "idle" && (
        <div
          role="alert"
          className={`rounded-xl px-4 py-3 text-sm font-medium ${
            state.status === "success"
              ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending || state.status === "success"}
        className="mt-1 inline-flex min-h-11 items-center justify-center rounded-full bg-[#00D3F9] px-8 text-xs font-bold tracking-[0.18em] text-white shadow-[0_12px_28px_-12px_rgba(0,211,249,0.65)] transition hover:bg-[#00BFE0] focus-visible:outline-2 focus-visible:outline-[#00D3F9] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Enviando…" : "AGENDAR CITA"}
      </button>
    </form>
  );
}
