import { Metadata } from "next";
import Image from "next/image";
import { Download, Users, MapPin, Calendar, IndianRupee, Mic2, Tv, ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";
import { researchProjectsData } from "@/data/projects";
import { conferencesData, academicStats } from "@/data/conferences";
import { externalEvaluations, studentVisits } from "@/data/teaching";
import { achievementStats, editorialReviewerJournals } from "@/data/achievements";
import { mediaFeatures } from "@/data/fieldwork";
import { BackLink } from "@/components/plant-gallery/BackLink";
import { DoctoralScholarsList } from "@/components/about/DoctoralScholarsList";
import { Badge } from "@/components/ui/Badge";
import { Metric } from "@/components/ui/Metric";
import { Button } from "@/components/ui/Button";
import { CV_DOWNLOAD_URL, CV_DOWNLOAD_FILENAME } from "@/lib/cv";

export const metadata: Metadata = {
  title: "About | Dr. M. Venkat Ramana",
  description:
    "Full academic profile of Dr. M. Venkat Ramana: funded research projects, conferences, doctoral supervision, and media coverage."
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl [&_p]:max-w-[56ch]">
      <BackLink href="/" label="Back to home" />

      {/* Header */}
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded border border-line bg-plate sm:h-32 sm:w-28">
          <Image src="/images/expeditions/img-e7992.webp" alt={`Portrait of ${profileData.name}`} fill sizes="112px" className="object-cover" />
        </div>
        <div>
          <p className="stamp text-herbarium">{profileData.designation}</p>
          <h1 className="mt-2 font-display text-3xl font-medium text-ink sm:text-4xl">{profileData.name}</h1>
          <p className="mt-1 text-sm text-ink-secondary">{profileData.degrees} · Employee ID {profileData.employeeId}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-secondary">
            {profileData.department}, {profileData.college}, {profileData.university}. IPNI author standard{" "}
            <em>{profileData.ipniAuthorForm}</em> ({profileData.ipniLifespan}). Research interest score{" "}
            {profileData.researchInterestScore}, {profileData.citations} citations, h-index {profileData.hIndex}.
          </p>
          <Button href={CV_DOWNLOAD_URL} download={CV_DOWNLOAD_FILENAME} variant="secondary" size="sm" iconLeft={<Download className="h-4 w-4" />} className="mt-4">
            Download CV
          </Button>
        </div>
      </div>

      {/* Credentials strip */}
      <div data-reveal-group className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-6 sm:grid-cols-4">
        <div data-reveal-item data-reveal>
          <Metric value={profileData.stats.articles + "+"} label="Research articles" />
        </div>
        <div data-reveal-item data-reveal>
          <Metric value={profileData.stats.phdStudentsAwarded} label="PhD awarded" />
        </div>
        <div data-reveal-item data-reveal>
          <Metric value={profileData.hIndex} label="h-index" />
        </div>
        <div data-reveal-item data-reveal>
          <Metric value={profileData.stats.totalGrantsINR} label="Grants secured" />
        </div>
      </div>

      {/* Research projects */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-medium text-ink">Funded research projects</h2>
        <div className="mt-6 space-y-6">
          {researchProjectsData.map((p) => (
            <article key={p.id} className="rounded border border-line bg-paper-raised p-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={p.status === "Ongoing" ? "accent" : "neutral"}>{p.status}</Badge>
                <span className="text-xs text-ink-muted">{p.duration}</span>
              </div>
              <h3 className="mt-2 font-display text-lg font-medium text-ink">{p.title}</h3>
              <p className="mt-1 text-sm text-ink-secondary">{p.subtitle}</p>
              <dl className="mt-3 grid grid-cols-1 gap-1.5 text-xs text-ink-secondary sm:grid-cols-2">
                <div className="flex items-center gap-1.5">
                  <IndianRupee className="h-3.5 w-3.5 shrink-0 text-herbarium" aria-hidden />
                  <dt className="sr-only">Budget</dt>
                  <dd>{p.budgetFormatted}</dd>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 shrink-0 text-herbarium" aria-hidden />
                  <dt className="sr-only">Funding agency</dt>
                  <dd>{p.fundingAgency}</dd>
                </div>
              </dl>
              <details className="mt-3 text-sm">
                <summary className="focus-ring cursor-pointer text-xs font-semibold text-herbarium">Objectives &amp; outcomes</summary>
                <div className="mt-2 max-w-[56ch] space-y-3">
                  <ul className="space-y-1">
                    {p.objectives.map((o) => (
                      <li key={o} className="text-ink-secondary">
                        • {o}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-1">
                    {p.keyOutcomes.map((o) => (
                      <li key={o} className="font-medium text-herbarium-deep">
                        ✓ {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      {/* Conferences & talks */}
      <section className="mt-14 border-t border-line pt-10">
        <h2 className="font-display text-2xl font-medium text-ink">Conferences &amp; talks</h2>
        <div data-reveal-group className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div data-reveal-item data-reveal>
            <Metric value={academicStats.conferencesAttended} label="Conferences attended" icon={<Mic2 className="h-4 w-4 text-herbarium" aria-hidden />} />
          </div>
          <div data-reveal-item data-reveal>
            <Metric value={academicStats.invitedTalks} label="Invited talks" />
          </div>
          <div data-reveal-item data-reveal>
            <Metric value={academicStats.papersPresented} label="Papers presented" />
          </div>
          <div data-reveal-item data-reveal>
            <Metric value={academicStats.conferencesOrganized} label="Conferences organised" />
          </div>
        </div>
        <ul className="mt-6 space-y-5 divide-y divide-line border-t border-line">
          {conferencesData.map((c) => (
            <li key={c.id} className="pt-5 first:pt-0">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="neutral">{c.role}</Badge>
                <span className="font-mono text-xs text-ink-muted">{c.year}</span>
              </div>
              <p className="mt-1.5 text-sm font-medium text-ink">{c.title}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-secondary">
                <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden /> {c.location} · {c.dates}
              </p>
              {c.description && <p className="mt-1.5 text-xs italic text-annotation">{c.description}</p>}
            </li>
          ))}
        </ul>
      </section>

      {/* Teaching & doctoral supervision */}
      <section className="mt-14 border-t border-line pt-10">
        <h2 className="font-display text-2xl font-medium text-ink">Doctoral supervision</h2>
        <DoctoralScholarsList />

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-ink">External thesis examiner</h3>
            <ul className="mt-2 space-y-2 text-sm text-ink-secondary">
              {externalEvaluations.map((e) => (
                <li key={e.university}>
                  {e.university}, {e.department} ({e.year})
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink">Student field visits led</h3>
            <ul className="mt-2 space-y-2 text-sm text-ink-secondary">
              {studentVisits.map((v) => (
                <li key={v.place} className="flex items-start gap-1.5">
                  <Calendar className="mt-0.5 h-3.5 w-3.5 shrink-0 text-herbarium" aria-hidden />
                  <span>
                    {v.place}, {v.objective} ({v.academicYear})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recognition & editorial roles */}
      <section className="mt-14 border-t border-line pt-10">
        <h2 className="font-display text-2xl font-medium text-ink">Recognition</h2>
        <div data-reveal-group className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {achievementStats.map((a) => (
            <div key={a.id} data-reveal-item data-reveal>
              <Metric value={a.metric} label={a.label} />
              <p className="mt-1 text-xs text-ink-muted">{a.subLabel}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-8 text-sm font-semibold text-ink">Editorial &amp; reviewer roles</h3>
        <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-ink-secondary sm:grid-cols-2">
          {editorialReviewerJournals.map((j) => (
            <li key={j.name}>
              {j.name} <span className="text-ink-muted">({j.country} · {j.indexed})</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Media & news */}
      <section className="mt-14 border-t border-line pt-10 pb-4">
        <h2 className="font-display text-2xl font-medium text-ink">Media &amp; news</h2>
        <ul className="mt-6 space-y-5 divide-y divide-line border-t border-line">
          {mediaFeatures.map((m, i) => (
            <li key={i} className="flex items-start gap-3 pt-5 first:pt-0">
              <Tv className="mt-0.5 h-4 w-4 shrink-0 text-herbarium" aria-hidden />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="neutral">{m.channel}</Badge>
                  {m.date && <span className="font-mono text-xs text-ink-muted">{m.date}</span>}
                </div>
                <p className="mt-1.5 text-sm text-ink-secondary">{m.title}</p>
                {m.url && (
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-herbarium hover:underline"
                  >
                    Watch <ExternalLink className="h-3 w-3" aria-hidden />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
