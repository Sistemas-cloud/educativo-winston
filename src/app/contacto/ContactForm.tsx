// 2026-04-09: Formulario de contacto como Client Component para manejar
//             el estado de envío (éxito/error) y feedback visual al usuario.
"use client";

import { useActionState } from "react";

import { ContactFormState, sendContactEmail } from "./actions";

const initialState: ContactFormState = { status: "idle", message: "" };

/* ── Estilos reutilizables de campo ────────────────────────────────────── */
const fieldClass =
  "w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-400";
const labelClass = "mb-1 block text-xs font-bold uppercase tracking-widest text-gray-500";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState);

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">

      {/* Nombre del padre o tutor */}
      <div>
        <label htmlFor="nombre" className={labelClass}>
          Nombre del padre o tutor <span className="text-red-500">*</span>
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

      {/* Nombre del aspirante */}
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

      {/* Correo */}
      <div>
        <label htmlFor="correo" className={labelClass}>
          Correo <span className="text-red-500">*</span>
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

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className={labelClass}>
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
        />
      </div>

      {/* Teléfono */}
      <div>
        <label htmlFor="telefono" className={labelClass}>
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          autoComplete="tel"
          className={fieldClass}
        />
      </div>

      {/* Mensaje de respuesta (éxito / error) */}
      {state.status !== "idle" && (
        <div
          role="alert"
          className={`rounded px-4 py-3 text-sm font-medium ${
            state.status === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {state.message}
        </div>
      )}

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={pending || state.status === "success"}
        className="mt-1 rounded bg-[#e8192c] px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Enviando…" : "Agendar cita"}
      </button>
    </form>
  );
}
