// 2026-04-17: Botón flotante de WhatsApp con efecto de pulsación constante.
//             Enlazado al número 8333474507. Se muestra en todas las páginas del sitio
//             mediante su inclusión en layout.tsx.
"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/528333474507"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center"
    >
      {/* Anillo exterior de pulsación */}
      <span
        className="wa-ping absolute inset-0 rounded-full bg-[#25D366]"
        aria-hidden="true"
      />
      {/* Segundo anillo con delay para efecto continuo */}
      <span
        className="wa-ping-delay absolute inset-0 rounded-full bg-[#25D366]"
        aria-hidden="true"
      />
      {/* Círculo verde con icono */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110">
        {/* Icono WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="28"
          height="28"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.858L.057 23.995l6.284-1.648A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.893a9.877 9.877 0 0 1-5.034-1.376l-.361-.214-3.732.979 1.001-3.625-.235-.373A9.847 9.847 0 0 1 2.107 12C2.107 6.527 6.527 2.107 12 2.107c5.474 0 9.893 4.42 9.893 9.893 0 5.474-4.419 9.893-9.893 9.893z" />
        </svg>
      </span>
    </a>
  );
}
