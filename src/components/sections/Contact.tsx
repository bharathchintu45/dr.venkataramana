import React from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { profileData } from "@/data/profile";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SectionShell } from "@/components/ui/SectionShell";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";

export const Contact: React.FC = () => {
  const whatsappHref = buildWhatsAppLink(
    profileData.contactPhone,
    "Hello Dr. Ramana, I found your portfolio site and would like to get in touch."
  );

  return (
    <SectionShell
      id="contact"
      label="Contact"
      title="Get in touch"
      lede="For collaborations, PhD enquiries, specimen identification requests, or media: send a WhatsApp message or reach out directly."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-8">
        <div data-reveal style={{ ["--reveal-y" as string]: "14px" }} className="rounded border border-line bg-paper-raised p-6 shadow-card sm:p-8">
          <ContactForm />
        </div>

        <div data-reveal style={{ ["--reveal-y" as string]: "14px" }} className="flex h-full flex-col gap-5">
          <div className="rounded border border-line bg-paper-raised p-5 shadow-card">
            <p className="stamp text-herbarium">Direct contact</p>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-2.5">
                <Mail className="mt-1.5 h-4 w-4 shrink-0 text-herbarium" aria-hidden />
                <div>
                  {profileData.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="focus-ring block rounded py-1 text-ink-secondary hover:text-herbarium-deep">
                      {email}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="mt-1.5 h-4 w-4 shrink-0 text-herbarium" aria-hidden />
                <a href={`tel:${profileData.contactPhone.replace(/\s+/g, "")}`} className="focus-ring inline-block rounded py-1 text-ink-secondary hover:text-herbarium-deep">
                  {profileData.contactPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-herbarium" aria-hidden />
                <p className="text-ink-secondary">
                  {profileData.department}, {profileData.college}
                  <br />
                  {profileData.university}, {profileData.location}
                </p>
              </div>
            </div>
          </div>

          {/* `flex-1` + centered content: the ContactForm panel next to this
              is naturally taller (more fields), which stretches this whole
              column via the grid's default items-stretch. Without this, the
              extra height landed as dead space below this box instead of in
              it — this panel now grows to absorb it instead. */}
          <div className="flex flex-1 flex-col justify-center rounded border border-herbarium/30 bg-herbarium-tint p-5 text-center">
            <MessageCircle className="mx-auto h-6 w-6 text-herbarium-deep" aria-hidden />
            <p className="mt-2 text-sm font-medium text-herbarium-deep">Prefer to skip the form?</p>
            <p className="mt-1 text-xs text-ink-secondary">Start a WhatsApp chat directly.</p>
            <Button
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="sm"
              fullWidth
              className="mt-3"
              iconRight={<MessageCircle className="h-3.5 w-3.5" />}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};
