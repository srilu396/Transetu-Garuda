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
  const isDraftMode = draftMode().isEnabled

  let usePreviewPerspective = false
  if (typeof presentationIframe === 'boolean') {
    usePreviewPerspective = isDraftMode && presentationIframe
  } else {
    const secFetchDest = headers().get('sec-fetch-dest')
    usePreviewPerspective = isDraftMode && secFetchDest === 'iframe'
  }

  const client = getClient(usePreviewPerspective)

  const fetchOptions = usePreviewPerspective
    ? { cache: 'no-store' as RequestCache }
    : { next: { revalidate: 60 } }

  return await client.fetch(query, params, fetchOptions)
}
