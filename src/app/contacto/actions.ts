// 2026-04-09: Server Action que recibe los datos del formulario de contacto
//             y envía un correo a sistemas3@winston93.edu.mx usando nodemailer.
//             Variables de entorno requeridas (añadir en .env.local y en Vercel):
//               SMTP_HOST   → servidor SMTP (ej. mail.winston93.edu.mx)
//               SMTP_PORT   → puerto SMTP (ej. 587 o 465)
//               SMTP_USER   → usuario de autenticación SMTP
//               SMTP_PASS   → contraseña SMTP
//               SMTP_FROM   → dirección "De" (ej. noreply@winston93.edu.mx)
"use server";

import nodemailer from "nodemailer";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const nombre     = (formData.get("nombre")     as string | null)?.trim() ?? "";
  const aspirante  = (formData.get("aspirante")  as string | null)?.trim() ?? "";
  const correo     = (formData.get("correo")     as string | null)?.trim() ?? "";
  const mensaje    = (formData.get("mensaje")    as string | null)?.trim() ?? "";
  const telefono   = (formData.get("telefono")   as string | null)?.trim() ?? "";

  if (!nombre || !correo || !mensaje) {
    return { status: "error", message: "Por favor completa los campos obligatorios." };
  }

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST   ?? "smtp.gmail.com",
    port:   Number(process.env.SMTP_PORT ?? 587),
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
        <p style="color:#fecaca;margin:4px 0 0;font-size:13px;">Instituto Educativo Winston Churchill</p>
      </div>
      <div style="padding:32px;background:#fff;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#374151;">
          <tr><td style="padding:8px 0;font-weight:bold;width:180px;">Nombre del padre/tutor:</td><td style="padding:8px 0;">${nombre}</td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px 4px;font-weight:bold;">Nombre del aspirante:</td><td style="padding:8px 4px;">${aspirante || "—"}</td></tr>
          <tr><td style="padding:8px 0;font-weight:bold;">Correo electrónico:</td><td style="padding:8px 0;"><a href="mailto:${correo}" style="color:#e8192c;">${correo}</a></td></tr>
          <tr style="background:#f9fafb;"><td style="padding:8px 4px;font-weight:bold;">Teléfono:</td><td style="padding:8px 4px;">${telefono || "—"}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:#f3f4f6;border-radius:6px;">
          <p style="font-weight:bold;margin:0 0 8px;font-size:14px;color:#374151;">Mensaje:</p>
          <p style="margin:0;line-height:1.6;color:#4b5563;font-size:14px;">${mensaje.replace(/\n/g, "<br>")}</p>
        </div>
      </div>
      <div style="padding:16px 32px;background:#f9fafb;text-align:center;font-size:12px;color:#9ca3af;">
        Enviado desde el formulario de contacto del sitio web · Instituto Educativo Winston Churchill
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from:    `"Winston Churchill" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to:      "sistemas3@winston93.edu.mx",
      replyTo: correo,
      subject: `Nueva solicitud de cita — ${nombre}`,
      html,
    });
    return { status: "success", message: "¡Tu mensaje fue enviado! Nos pondremos en contacto contigo pronto." };
  } catch (err) {
    console.error("Error al enviar correo:", err);
    return { status: "error", message: "Hubo un problema al enviar el mensaje. Por favor intenta más tarde." };
  }
}
