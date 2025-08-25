import emailjs from "@emailjs/browser";

export type ContactPayload = {
  name: string;
  email: string;
  whatsapp?: string;
  message: string;
};

/**
 * Sends contact form data via EmailJS.
 * Required env vars:
 *  - VITE_EMAILJS_PUBLIC_KEY
 *  - VITE_EMAILJS_SERVICE_ID
 *  - VITE_EMAILJS_TEMPLATE_ID
 * Template should use variables: name, email, whatsapp, message
 */
export async function sendContactMessage(payload: ContactPayload) {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;

  if (!publicKey || !serviceId || !templateId) {
    throw new Error(
      "EmailJS não configurado. Defina VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID e VITE_EMAILJS_TEMPLATE_ID."
    );
  }

  emailjs.init(publicKey);

  const params = {
    name: payload.name,
    email: payload.email,
    whatsapp: payload.whatsapp ?? "",
    message: payload.message,
  } as Record<string, unknown>;

  const res = await emailjs.send(serviceId, templateId, params, publicKey);

  if (res.status !== 200) {
    throw new Error(`Falha ao enviar mensagem (${res.status}).`);
  }
}
