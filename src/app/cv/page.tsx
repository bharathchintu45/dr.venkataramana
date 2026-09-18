import { Metadata } from "next";
import { profileData } from "@/data/profile";
import { researchAreas } from "@/data/research";
import { publicationsData } from "@/data/publications";
import { booksData } from "@/data/books";
import { awardsData } from "@/data/awards";
import { researchProjectsData } from "@/data/projects";
import { conferencesData, academicStats } from "@/data/conferences";
import { doctoralScholars } from "@/data/teaching";
import { membershipsData } from "@/data/memberships";
import { formatCitation } from "@/lib/publications";
import { BackLink } from "@/components/plant-gallery/BackLink";
import { PrintButton } from "@/components/cv/PrintButton";

export const metadata: Metadata = {
  title: "CV | Dr. M. Venkat Ramana",
  description: "Curriculum vitae of Dr. M. Venkat Ramana: printable summary of research, publications, projects and teaching."
};

export default function CvPage() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="print:hidden">
        <BackLink href="/" label="Back to home" />
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-ink-secondary">Use your browser&apos;s print dialog to save this as a PDF.</p>
          <PrintButton />
        </div>
      </div>

      <article className="mt-8 border-t border-line pt-8 text-sm leading-relaxed text-ink print:mt-0 print:border-0 print:pt-0">
        <header className="border-b border-line pb-4">
          <h1 className="font-display text-3xl font-medium text-ink">{profileData.name}</h1>
          <p className="mt-1 max-w-[56ch] text-ink-secondary print:max-w-none">
            {profileData.degrees} · {profileData.designation}
          </p>
          <p className="mt-1 max-w-[56ch] text-ink-secondary print:max-w-none">
            {profileData.department}, {profileData.college}, {profileData.university}
          </p>
          <p className="mt-2 max-w-[64ch] text-xs text-ink-muted print:max-w-none">
            {profileData.emails.join(" · ")} · {profileData.contactPhone} · {profileData.location}
          </p>
          <p className="mt-1 max-w-[64ch] text-xs text-ink-muted print:max-w-none">
            ORCID {profileData.orcid} · Vidwan {profileData.vidwanId} · IPNI author {profileData.ipniAuthorForm}
          </p>
        </header>

        <Section title="Summary">
          <p>
            Plant taxonomist with {profileData.stats.yearsExperience}+ years of experience, {profileData.stats.newSpecies} species
            newly described to science, {profileData.stats.articles}+ peer-reviewed publications ({profileData.citations}{" "}
            citations, h-index {profileData.hIndex}), {profileData.stats.books} authored/edited books, and{" "}
            {profileData.stats.phdStudentsAwarded} doctoral scholars supervised to completion.
          </p>
        </Section>

        <Section title="Research interests">
          <ul className="space-y-1">
            {researchAreas.map((r) => (
              <li key={r.id}>
                <strong>{r.title}.</strong> {r.shortDesc}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={`Selected publications (${publicationsData.length} total)`}>
          <ol className="space-y-1.5">
            {publicationsData
              .filter((p) => p.isHighlight)
              .map((p) => (
                <li key={p.id} className="print:break-inside-avoid">
                  {formatCitation(p)}
                </li>
              ))}
          </ol>
        </Section>

        <Section title="Books">
          <ul className="space-y-1">
            {booksData.map((b) => (
              <li key={b.id}>
                {b.title}: {b.role}, {b.publishedBy} ({b.year})
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Funded research projects">
          <ul className="space-y-1.5">
            {researchProjectsData.map((p) => (
              <li key={p.id} className="print:break-inside-avoid">
                <strong>{p.title}</strong>: {p.fundingAgency}, {p.budgetFormatted} ({p.duration}) [{p.status}]
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Awards &amp; honours">
          <ul className="space-y-1">
            {awardsData.map((a) => (
              <li key={a.id}>
                {a.title}: {a.conferredBy} ({a.year})
              </li>
            ))}
          </ul>
        </Section>

        <Section title={`Conferences & talks (${academicStats.conferencesAttended} attended, ${academicStats.invitedTalks} invited talks)`}>
          <ul className="space-y-1">
            {conferencesData.map((c) => (
              <li key={c.id}>
                {c.title}: {c.event}, {c.location} ({c.year}) [{c.role}]
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Doctoral supervision">
          <ul className="space-y-1">
            {doctoralScholars.map((s) => (
              <li key={s.id}>
                {s.name}: <em>{s.thesisTitle}</em> ({s.status} {s.yearAwarded})
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Professional memberships">
          <p>{membershipsData.map((m) => m.name).join(" · ")}</p>
        </Section>
      </article>
    </div>
  );
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mt-6 print:break-inside-avoid-page">
    <h2 className="font-display text-lg font-medium text-ink">{title}</h2>
    <div className="mt-2 max-w-[56ch] text-ink-secondary print:max-w-none">{children}</div>
  </section>
);
