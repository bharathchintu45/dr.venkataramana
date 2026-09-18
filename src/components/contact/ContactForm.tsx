"use client";

import React, { useRef, useState } from "react";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { profileData } from "@/data/profile";
import { validateContact, type ContactErrors, type ContactFormValues } from "@/lib/validation";
import { buildWhatsAppLink, buildWhatsAppMessage } from "@/lib/whatsapp";
import { Field, Input, Textarea, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";

const SUBJECT_OPTIONS = [
  "Collaboration",
  "PhD enquiry",
  "Specimen identification",
  "Media enquiry",
  "Other",
];

const EMPTY_VALUES: ContactFormValues = { name: "", email: "", subject: "", message: "", company: "" };

type Status = "idle" | "sent";

export const ContactForm: React.FC = () => {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const mountedAt = useRef(Date.now());

  const set = (key: keyof ContactFormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const blur = (key: keyof ContactFormValues) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validateContact({ ...values }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(nextErrors).length > 0) {
      // Focus the first invalid field in field order. Looked up by id
      // rather than a ref, since setState hasn't re-rendered yet here.
      const order: (keyof ContactFormValues)[] = ["name", "email", "subject", "message"];
      const firstInvalid = order.find((key) => nextErrors[key]);
      if (firstInvalid) document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // Honeypot filled, or submitted implausibly fast — almost certainly a
    // bot. Show the sent state without opening WhatsApp, so the bot learns nothing.
    const isLikelyBot = values.company.trim() !== "" || Date.now() - mountedAt.current < 3000;
    if (!isLikelyBot) {
      const url = buildWhatsAppLink(profileData.contactPhone, buildWhatsAppMessage(values));
      setWaUrl(url);
      window.open(url, "_blank", "noopener,noreferrer");
    }
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded border border-herbarium/30 bg-herbarium-tint p-6 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-herbarium-deep" aria-hidden />
        <p className="mt-3 font-display text-lg text-herbarium-deep">WhatsApp is opening…</p>
        <p className="mt-1 text-sm text-ink-secondary">
          Your message is ready in a new tab. Just hit send there to reach Dr. Ramana.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {waUrl && (
            <Button href={waUrl} target="_blank" rel="noreferrer" variant="primary" size="sm" iconRight={<MessageCircle className="h-4 w-4" />}>
              Didn&apos;t open? Try again
            </Button>
          )}
          <Button variant="link" size="sm" onClick={() => { setValues(EMPTY_VALUES); setWaUrl(null); setStatus("idle"); }}>
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" htmlFor="contact-name" required error={touched.name ? errors.name : undefined}>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            onBlur={blur("name")}
            error={Boolean(touched.name && errors.name)}
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-describedby={touched.name && errors.name ? "contact-name-error" : undefined}
          />
        </Field>
        <Field label="Email" htmlFor="contact-email" required error={touched.email ? errors.email : undefined}>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            onBlur={blur("email")}
            error={Boolean(touched.email && errors.email)}
            aria-invalid={Boolean(touched.email && errors.email)}
          />
        </Field>
      </div>

      <Field label="What is this about?" htmlFor="contact-subject" required error={touched.subject ? errors.subject : undefined}>
        <Select
          id="contact-subject"
          name="subject"
          value={values.subject}
          onChange={set("subject")}
          onBlur={blur("subject")}
          error={Boolean(touched.subject && errors.subject)}
        >
          <option value="">Select one…</option>
          {SUBJECT_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Message" htmlFor="contact-message" required hint="At least 20 characters." error={touched.message ? errors.message : undefined}>
        <Textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={set("message")}
          onBlur={blur("message")}
          error={Boolean(touched.message && errors.message)}
        />
      </Field>

      {/* Honeypot — hidden from sighted users, off-screen rather than
          display:none (which some bots specifically detect and skip). */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={set("company")} />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" variant="primary" iconRight={<MessageCircle className="h-4 w-4" />}>
          Continue to WhatsApp
        </Button>
        <a
          href={`mailto:${profileData.emails[0]}`}
          className="focus-ring inline-flex min-h-11 items-center gap-1.5 rounded text-sm text-ink-secondary hover:text-herbarium-deep"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden /> or email directly
        </a>
      </div>
      <p className="text-xs text-ink-muted">
        This opens WhatsApp with your details pre-filled — nothing is sent until you press send there.
      </p>
    </form>
  );
};
