import type { ContactFormValues } from "./validation";

/** Keeps only digits, since wa.me needs the number with no spaces, `+`, or dashes. */
export function buildWhatsAppLink(phone: string, text: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppMessage(values: Pick<ContactFormValues, "name" | "email" | "subject" | "message">): string {
  return [
    "New enquiry from the portfolio site",
    "",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Subject: ${values.subject}`,
    "",
    values.message.trim(),
  ].join("\n");
}
