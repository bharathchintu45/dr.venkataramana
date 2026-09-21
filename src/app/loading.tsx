import { EarthLoader } from "@/components/ui/EarthLoader";

/**
 * Next.js App Router's route-level loading UI — shown automatically while a
 * new route segment is being fetched (a slower connection loading one of
 * the 392 sacred-groves/flora pages, for instance). There was no loading
 * state anywhere on the site before this.
 *
 * Matches a reference "Connecting…" screen the user supplied — same globe
 * animation, same plain (non-tracked/uppercase) caption — with its solid
 * blue full-screen background swapped for white, per the user's request.
 * The caption is dark ink rather than the reference's white, since white
 * text was only legible there against that blue background.
 */
export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-white px-5 text-center">
      <EarthLoader className="text-2xl" />
      <p className="text-lg font-medium text-ink">Connecting…</p>
    </div>
  );
}
