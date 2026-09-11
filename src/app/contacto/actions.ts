// 2026-04-09: Server Action que recibe los datos del formulario de contacto
//             y envía un correo usando nodemailer.
// 2026-09-11: Anti-spam — honeypot, tiempo mínimo, teléfono obligatorio,
//             rechazo de URLs y patrones comerciales (bots tipo FreeB2BData).
"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const SUCCESS: ContactFormState = {
  status: "success",
  message: "¡Tu mensaje fue enviado! Nos pondremos en contacto contigo pronto.",
};

const SPAM_PATTERNS = [
  /https?:\/\//i,
  /www\./i,
  /freeb2bdata/i,
  /download your data/i,
  /million compan/i,
  /b2b data/i,
  /shutting down/i,
  /seo\s*(services|package|ranking)/i,
  /cryptocurrenc/i,
  /viagra|cialis/i,
  /casino|betting/i,
];

function looksLikeSpam(input: {
  nombre: string;
  aspirante: string;
  correo: string;
  mensaje: string;
  telefono: string;
  honeypot: string;
  startedAt: string;
}): boolean {
  // Bots rellenan campos ocultos
  if (input.honeypot.trim().length > 0) return true;

  // Envío demasiado rápido (< 3s) = bot
  const started = Number(input.startedAt);
  if (!Number.isFinite(started) || Date.now() - started < 3000) return true;

  // Teléfono vacío o sin dígitos reales
  const digits = input.telefono.replace(/\D/g, "");
  if (digits.length < 8) return true;

  const blob = `${input.nombre}\n${input.aspirante}\n${input.correo}\n${input.mensaje}`;
  if (SPAM_PATTERNS.some((re) => re.test(blob))) return true;

  // Mensajes muy largos con estilo comercial en inglés
  if (input.mensaje.length > 1200) return true;

  return false;
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const nombre = (formData.get("nombre") as string | null)?.trim() ?? "";
  const aspirante = (formData.get("aspirante") as string | null)?.trim() ?? "";
  const correo = (formData.get("correo") as string | null)?.trim() ?? "";
  const mensaje = (formData.get("mensaje") as string | null)?.trim() ?? "";
  const telefono = (formData.get("telefono") as string | null)?.trim() ?? "";
  const honeypot = (formData.get("company_website") as string | null)?.trim() ?? "";
  const startedAt = (formData.get("form_started_at") as string | null)?.trim() ?? "";

  if (!nombre || !correo || !mensaje || !telefono) {
    return {
      status: "error",
      message: "Por favor completa los campos obligatorios (incluye teléfono).",
    };
  }

  // 2026-09-11: Silencioso ante bots — responde “éxito” para no incentivar reintentos
  if (
    looksLikeSpam({
      nombre,
      aspirante,
      correo,
      mensaje,
      telefono,
      honeypot,
      startedAt,
    })
  ) {
    console.warn("[contacto] spam bloqueado", { correo, nombre });
    return SUCCESS;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT ?? 587) === 465,
    auth: {
      user: process.env.SMTP_USER ?? "",
      pass: process.env.SMTP_PASS ?? "",
    },
  });

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <div style="background:#e8192c;padding:24px 32px;">
        <h1 style="color:#fff;margin:0;font-size:20px;letter-spacing:2px;">NUEVA SOLICITUD DE CITA</h1>
        <p style="color:#fecaca;margin:4px 0 0;font-size:13px;">Instituto Educativo Winston</p>
      </div>
      <div style="padding:32px;background:#fff;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#374151;">
          <tr><td style="padding:8px 0;font-weight:bold;width:180px;">Nombre del padre/tutor:</td><td style="padding:8px 0;">${nombre}</td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px 4px;font-weight:bold;">Nombre del aspirante:</td><td style="padding:8px 4px;">${aspirante || "—"}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Correo electrónico:</td><td style="padding:8px 0;"><a href="mailto:${correo}" style="color:#e8192c;">${correo}</a></td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px 4px;font-weight:bold;">Teléfono:</td><td style="padding:8px 4px;">${telefono}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:#f3f4f6;border-radius:6px;">
          <p style="font-weight:bold;margin:0 0 8px;font-size:14px;color:#374151;">Mensaje:</p>
          <p style="margin:0;line-height:1.6;color:#4b5563;font-size:14px;">${mensaje.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
      <div style="padding:16px 32px;background:#f9fafb;text-align:center;font-size:12px;color:#9ca3af;">
        Enviado desde el formulario de contacto del sitio web · Instituto Educativo Winston
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      // 2026-09-10: Destino a Vinculación (misma bandeja que winston93); SMTP_TO opcional.
      from: `"Instituto Educativo Winston" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO ?? "vinculacionw@winston93.edu.mx",
      replyTo: correo,
      subject: `Nueva solicitud de cita — ${nombre}`,
      html,
    });
    return SUCCESS;
  } catch (err) {
    console.error("Error al enviar correo:", err);
    return {
      status: "error",
      message: "Hubo un problema al enviar el mensaje. Por favor intenta más tarde.",
    };
  }
}
