export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot — real visitors never see or fill this field. */
  company: string;
}

export type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(values: ContactFormValues): ContactErrors {
  const errors: ContactErrors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name.";
  if (!EMAIL_RE.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (!values.subject) errors.subject = "Choose what this is about.";
  if (values.message.trim().length < 20) errors.message = "Say a little more: at least 20 characters.";
  else if (values.message.trim().length > 2000) errors.message = "Keep it under 2000 characters.";
  return errors;
}
