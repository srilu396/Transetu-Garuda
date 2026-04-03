'use server'

import { draftMode, headers } from 'next/headers'
import { getClient } from '@/lib/sanity'

/**
 * Fetches from Sanity with correct draft vs published isolation:
 * - Preview (draft) content only when Draft Mode is on AND the request is from
 *   Sanity Presentation (iframe) or the caller passes `presentationIframe: true`
 *   (e.g. client-detected embed from GPSTrackingSolutionsGrid).
 * - Otherwise uses the published perspective so draft edits never affect the
 *   live site, even if a Draft Mode cookie is still set from an old session.
 */
export async function fetchSanityQuery(
  query: string,
  params: Record<string, unknown> = {},
  presentationIframe?: boolean
) {
  // Check if Draft Mode is enabled in Next.js
  let isDraftMode = false
  let isIframe = false
  try {
    isDraftMode = draftMode().isEnabled
    // Also check for iframe header if available
    isIframe = headers().get("sec-fetch-dest") === "iframe"
  } catch {
    // This happens during generateStaticParams or build time when no request exists.
    // Defaulting to false ensures we only fetch published content for static generation.
    isDraftMode = false
  }

  /**
   * Determine if we should use the PREVIEW client (perspective: previewDrafts).
   * Strict Isolation: We only use preview perspective if Draft Mode is on
   * AND we are within the Sanity Presentation iframe (detected via headers or passed flag).
   */
  const usePreviewPerspective = isDraftMode && (presentationIframe || isIframe)

  const client = getClient(usePreviewPerspective)

  // Explicitly pass $preview to GROQ for the strict filtering logic
  const queryParams = {
    ...params,
    preview: usePreviewPerspective,
  }

  const fetchOptions = usePreviewPerspective
    ? { 
        perspective: "previewDrafts" as const,
        useCdn: false,
        next: { revalidate: 0 } 
      }
    : { 
        perspective: "published" as const,
        useCdn: false,
        next: { 
          revalidate: 0,
          tags: ['sanity'] 
        } 
      }

  return await client.fetch(query, queryParams, fetchOptions)
}
