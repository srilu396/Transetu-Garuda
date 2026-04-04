/**
 * Desk structure uses fixed document IDs. Learn More links use stable URL slugs
 * that may differ from `slug.current` in Sanity (e.g. title-generated slugs).
 * Fetch resolves by slug OR by these document IDs.
 */
export const FASTAG_CANONICAL_SLUG_TO_IDS: Record<string, readonly string[]> = {
  "buy-fastag": [
    "fastagDetailPage-buy-fastag",
    "drafts.fastagDetailPage-buy-fastag",
  ],
  "customer": [
    "fastagDetailPage-buy-fastag",
    "drafts.fastagDetailPage-buy-fastag",
  ],
  "become-a-partner": [
    "fastagDetailPage-become-a-partner",
    "drafts.fastagDetailPage-become-a-partner",
  ],
} as const;

export function fastagIdsForUrlSlug(slug: string): string[] {
  const ids = FASTAG_CANONICAL_SLUG_TO_IDS[slug];
  return ids ? [...ids] : [];
}
