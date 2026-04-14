import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const projectId = "tuxe1ipn";
const dataset = "production";
const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for production
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: '/studio',
  }
});

// Client used for live preview only
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Must be false for live preview
  token: process.env.SANITY_API_TOKEN, // Reuse existing token or SANITY_API_READ_TOKEN
  perspective: "previewDrafts",
  stega: {
    enabled: true,
    studioUrl: '/studio',
  }
});

// Helper function to choose the correct client with strict isolation
export function getClient(preview?: boolean, isPreviewIntent?: boolean) {
  // Defensive Hardening: Force production client if we're not explicitly in a verified preview context.
  // We only use previewClient if BOTH Draft Mode is enabled AND there is an explicit intent flag.
  const usePreview = !!(preview && isPreviewIntent);

  // Safeguard: Log warning if draft mode is active but intent is missing (indicates a "leak" attempt or stale cookie)
  if (preview && !isPreviewIntent && process.env.NODE_ENV !== 'production') {
    console.log("Next.js Draft Mode is active, but is being ignored because isPreviewIntent is false. Leak prevented.");
  }

  if (usePreview && !process.env.SANITY_API_TOKEN) {
    console.warn("Draft Mode enabled but SANITY_API_TOKEN is missing. Drafts may not be visible.");
  }
  
  // Final safeguard: In production, we are even more strict about the fallback.
  return usePreview ? previewClient : client;
}

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);