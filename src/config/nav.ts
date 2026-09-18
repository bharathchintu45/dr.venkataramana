/**
 * Single source of truth for the homepage's in-page section ids. Consumed
 * by Navigation (active-link tracking) and by each homepage section
 * component (its own `id`) — so a renamed section can never leave a nav
 * link pointing at nothing, the way the old build's "publications" trail
 * entry did.
 */
export const HOME_SECTION_IDS = [
  "hero",
  "notebook",
  "research",
  "species",
  "publications",
  "field",
  "recognition",
  "contact",
] as const;

export type HomeSectionId = (typeof HOME_SECTION_IDS)[number];
