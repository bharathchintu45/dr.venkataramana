import React from "react";
import { ArrowRight, Award, GraduationCap } from "lucide-react";
import { profileData } from "@/data/profile";
import { awardsData } from "@/data/awards";
import { academicStats } from "@/data/conferences";
import { doctoralScholars } from "@/data/teaching";
import { SectionShell } from "@/components/ui/SectionShell";
import { Metric } from "@/components/ui/Metric";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const METRICS = [
  { value: profileData.stats.phdStudentsAwarded, label: "PhD students awarded" },
  { value: "20+", label: "M.Sc. students guided" },
  { value: academicStats.invitedTalks, label: "Invited & extension talks" },
  { value: profileData.stats.totalGrantsINR, label: "Research funding secured" },
];

export const TeachingRecognition: React.FC = () => {
  return (
    <SectionShell
      id="recognition"
      label="Teaching, projects & recognition"
      title="Mentoring the next generation"
      lede="Six doctoral scholars, four funded research projects, and a record of national recognition alongside two decades in the classroom and the field."
      cta={
        <Button href="/about" variant="secondary" iconRight={<ArrowRight className="h-4 w-4" />}>
          Full profile, timeline &amp; projects
        </Button>
      }
    >
      <div data-reveal-group className="grid gap-6 lg:grid-cols-[1fr_320px] lg:gap-8">
        <div data-reveal-item data-reveal style={{ ["--reveal-y" as string]: "12px" }} className="rounded border border-line bg-paper-raised p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-ink">Doctoral scholars mentored</h3>
            <Badge tone="accent">{doctoralScholars.length} guided</Badge>
          </div>
          <ul className="mt-4 space-y-4">
            {doctoralScholars.map((s) => (
              <li key={s.id} className="flex gap-3 border-b border-line/60 pb-4 last:border-0 last:pb-0">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-herbarium-tint text-herbarium-deep">
                  <GraduationCap className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-ink">
                    {s.name} <span className="font-normal text-ink-muted">· {s.yearAwarded}</span>
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-ink-secondary">{s.thesisTitle}</p>
                  <p className="mt-1 text-xs font-medium text-herbarium">{s.area}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* `h-full` + centered content: the scholars list beside this
            column is taller, which stretches this box via the grid's
            default items-stretch. Without this, the extra height landed
            as dead space below the content instead of around it. */}
        <div
          data-reveal-item
          data-reveal
          style={{ ["--reveal-y" as string]: "12px" }}
          className="flex h-full flex-col justify-center rounded border border-line bg-paper-raised p-4"
        >
          <h3 className="text-sm font-semibold text-ink">Recent honours</h3>
          <ul className="mt-3 space-y-3">
            {awardsData.map((a) => (
              <li key={a.id} className="flex gap-2.5">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-annotation" aria-hidden />
                <div>
                  <p className="text-xs font-medium leading-snug text-ink">{a.title}</p>
                  <p className="mt-0.5 text-xs text-ink-muted">
                    {a.conferredBy} · {a.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div data-reveal-group className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:mt-14 sm:grid-cols-4">
        {METRICS.map((m) => (
          <div key={m.label} data-reveal-item data-reveal style={{ ["--reveal-y" as string]: "10px" }}>
            <Metric value={m.value} label={m.label} />
          </div>
        ))}
      </div>
    </SectionShell>
  );
};
